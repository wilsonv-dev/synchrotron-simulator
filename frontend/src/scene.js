import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Física (x, y, z) con z vertical  ->  Three (x, z, -y) con y vertical. Es una rotación propia.
const V = (x, y, z, k = 1) => new THREE.Vector3(x * k, z * k, -y * k);
const UP = new THREE.Vector3(0, 1, 0);

const COLORS = {
  v: 0x8fe66f, p: 0xffb84d, B: 0xb678ff, E: 0x39e6d0, rad: 0xff4fd8, trail: 0x7cf5ff,
};

function glowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, 'rgba(255,255,255,1)');
  gr.addColorStop(0.16, 'rgba(130,245,255,0.9)');
  gr.addColorStop(0.5, 'rgba(60,150,255,0.25)');
  gr.addColorStop(1, 'rgba(60,150,255,0)');
  g.fillStyle = gr;
  g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

function label(text, color) {
  const c = document.createElement('canvas');
  c.width = 160; c.height = 64;
  const g = c.getContext('2d');
  g.font = '600 34px Segoe UI, Arial, sans-serif';
  g.fillStyle = color; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, 80, 34);
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), depthTest: false, transparent: true }));
  s.scale.set(2.5, 1, 1);
  return s;
}

const translucent = (color, opacity) => new THREE.MeshBasicMaterial({
  color, transparent: true, opacity, side: THREE.DoubleSide, depthWrite: false });

function circle(r, y, color, opacity = 0.7, segs = 192) {
  const pts = [];
  for (let i = 0; i < segs; i++) { const a = (i / segs) * Math.PI * 2; pts.push(new THREE.Vector3(r * Math.cos(a), y, -r * Math.sin(a))); }
  const l = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts),
    new THREE.LineBasicMaterial({ color, transparent: true, opacity, depthWrite: false }));
  return l;
}

export class SynchrotronScene {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x050810);
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 3000);
    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.ring = new THREE.Group();
    this.scene.add(this.ring);
    this.layers = {};          // nombre -> objeto(s) conmutables
    this.vis = { trail: true, v: true, p: true, B: true, E: true, rad: true, magnets: true, cavity: true, ref: true, axes: true, grid: true };
    this.k = 1;
    this.maxPoints = 0;
    this.glowTex = glowTexture();
    this._buildParticle();
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  // ----------------------------------------------------------- partícula y vectores
  _buildParticle() {
    const g = this.particle = new THREE.Group();
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.11, 24, 16),
      new THREE.MeshBasicMaterial({ color: 0xffffff, depthWrite: false }));
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.glowTex, blending: THREE.AdditiveBlending,
      transparent: true, depthWrite: false }));
    glow.scale.set(1.5, 1.5, 1);
    core.renderOrder = 20; glow.renderOrder = 19;
    g.add(core, glow);
    this.scene.add(g);

    const arrow = (color) => {
      const a = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(), 1, color, 0.4, 0.22);
      a.line.material.depthWrite = false; a.cone.material.depthWrite = false;
      a.renderOrder = 18; a.line.renderOrder = 18; a.cone.renderOrder = 18;
      this.scene.add(a);
      return a;
    };
    this.arrows = { v: arrow(COLORS.v), p: arrow(COLORS.p), B: arrow(COLORS.B), E: arrow(COLORS.E), rad: arrow(COLORS.rad) };

    // Cono de emisión de sincrotrón: eje a lo largo de v, semiángulo ~ 1/γ (ángulo dibujado con mínimo visible)
    this.cone = new THREE.Mesh(new THREE.ConeGeometry(1, 1, 32, 1, true),
      new THREE.MeshBasicMaterial({ color: COLORS.rad, transparent: true, opacity: 0.22, side: THREE.DoubleSide,
        depthWrite: false, blending: THREE.AdditiveBlending }));
    this.cone.renderOrder = 17;
    this.scene.add(this.cone);
  }

  _setArrow(a, dir, len, origin) {
    if (!(len > 1e-6) || dir.lengthSq() < 1e-24) { a.visible = false; return; }
    a.visible = true;
    a.position.copy(origin);
    a.setDirection(dir.clone().normalize());
    a.setLength(len, Math.min(0.55, len * 0.28), Math.min(0.3, len * 0.15));
  }

  // ------------------------------------------------------------------- anillo
  buildRing(cfg) {
    // cfg: R, aR, aZ, nMag, gap, thetaC, bSign, maxPoints
    this.ring.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    this.scene.remove(this.ring);
    this.ring = new THREE.Group();
    this.scene.add(this.ring);

    const k = this.k = 10 / cfg.R;                 // R de referencia = 10 unidades de escena
    const rc = cfg.R * k, ra = cfg.aR * k, az = cfg.aZ * k;
    const L = {};

    // Cámara de vacío (transparente) + carcasa azulada exterior
    const chamber = new THREE.Group();
    const wall = (r, h) => new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 160, 1, true), translucent(0x3a78c4, 0.13));
    chamber.add(wall(rc + ra, 2 * az), wall(rc - ra, 2 * az));
    for (const s of [-1, 1]) {
      const cap = new THREE.Mesh(new THREE.RingGeometry(rc - ra, rc + ra, 160, 1), translucent(0x3a78c4, 0.10));
      cap.rotation.x = -Math.PI / 2; cap.position.y = s * az; chamber.add(cap);
      chamber.add(circle(rc + ra, s * az, 0x6aa8ff, 0.75), circle(rc - ra, s * az, 0x6aa8ff, 0.75));
    }
    const casing = new THREE.Group();
    for (const r of [rc + 2.4 * ra, rc - 2.4 * ra]) {
      casing.add(new THREE.Mesh(new THREE.CylinderGeometry(r, r, 3.6 * az, 160, 1, true), translucent(0x24406f, 0.10)));
      for (const s of [-1, 1]) casing.add(circle(r, s * 1.8 * az, 0x4a74b8, 0.45));
    }
    L.chamber = [chamber, casing];

    // Órbita de referencia (guía visual; la trayectoria cian sale de las ecuaciones)
    L.ref = [circle(rc, 0, 0xc060ff, 0.55)];

    // Imanes de curvatura: sectores superior e inferior (el campo del modelo es continuo; los huecos son sólo visuales)
    const magnets = new THREE.Group();
    const rIn = rc - 1.7 * ra, rOut = rc + 1.7 * ra, thick = 1.1 * az, gapA = 0.025;
    for (const top of [true, false]) {
      for (let i = 0; i < cfg.nMag; i++) {
        const a0 = (i / cfg.nMag) * Math.PI * 2 + gapA, a1 = ((i + 1) / cfg.nMag) * Math.PI * 2 - gapA;
        const s = new THREE.Shape();
        s.absarc(0, 0, rOut, a0, a1, false);
        s.absarc(0, 0, rIn, a1, a0, true);
        const geo = new THREE.ExtrudeGeometry(s, { depth: thick, bevelEnabled: false, curveSegments: 14 });
        geo.rotateX(-Math.PI / 2);
        geo.translate(0, top ? 1.25 * az : -1.25 * az - thick, 0);
        magnets.add(new THREE.Mesh(geo, translucent(0x9b4dff, 0.22)));
        magnets.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo),
          new THREE.LineBasicMaterial({ color: 0xc58bff, transparent: true, opacity: 0.7, depthWrite: false })));
      }
    }
    L.magnets = [magnets];

    // Cavidad RF: losa verde azulada con aristas naranjas, en el azimut de la cavidad
    const cav = new THREE.Group();
    const box = new THREE.BoxGeometry(2 * ra * 2.0, 2 * az * 2.0, Math.max(cfg.gap * k, 0.3));
    cav.add(new THREE.Mesh(box, translucent(0x22d3a6, 0.22)));
    cav.add(new THREE.LineSegments(new THREE.EdgesGeometry(box),
      new THREE.LineBasicMaterial({ color: 0xffb347, transparent: true, opacity: 0.95, depthWrite: false })));
    cav.position.set(rc * Math.cos(cfg.thetaC), 0, -rc * Math.sin(cfg.thetaC));
    cav.rotation.y = cfg.thetaC;                    // x local = radial, z local = tangente (con signo)
    const cl = label('RF', '#22d3a6'); cl.position.set(0, 2 * az + 1.2, 0); cav.add(cl);
    L.cavity = [cav];

    // Flechas de campo B de fondo (como en la imagen de referencia)
    const bArrows = new THREE.Group();
    const top = 1.25 * az + thick + 0.25;
    for (let i = 0; i < 24; i++) {
      const a = (i / 24) * Math.PI * 2;
      const dir = new THREE.Vector3(0, cfg.bSign, 0);
      const y0 = cfg.bSign > 0 ? top : top + 2.4;
      const ar = new THREE.ArrowHelper(dir, new THREE.Vector3(rc * Math.cos(a), y0, -rc * Math.sin(a)), 2.4, COLORS.B, 0.6, 0.3);
      ar.line.material = new THREE.LineBasicMaterial({ color: COLORS.B, transparent: true, opacity: 0.8 });
      ar.cone.material = new THREE.MeshBasicMaterial({ color: COLORS.B, transparent: true, opacity: 0.9 });
      bArrows.add(ar);
    }
    L.Bfield = [bArrows];

    // Ejes y cuadrícula
    const axes = new THREE.Group();
    const axis = (to, color, text) => {
      axes.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), to]),
        new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.8 })));
      const l = label(text, '#' + color.toString(16).padStart(6, '0')); l.position.copy(to.clone().multiplyScalar(1.07)); axes.add(l);
    };
    axis(new THREE.Vector3(rc * 1.45, 0, 0), 0xff6b6b, 'X');
    axis(new THREE.Vector3(0, 0, -rc * 1.45), 0x5ee08a, 'Y');
    axis(new THREE.Vector3(0, rc * 0.5, 0), 0x4d8bff, 'Z · B');
    L.axes = [axes];

    const grid = new THREE.GridHelper(rc * 3.4, 34, 0x28406e, 0x16233f);
    grid.position.y = -(1.25 * az + thick + 0.6);
    grid.material.transparent = true; grid.material.opacity = 0.7; grid.material.depthWrite = false;
    L.grid = [grid];

    for (const key of Object.keys(L)) for (const o of L[key]) this.ring.add(o);
    this.layers = L;

    // Trayectoria (estela visual construida punto a punto)
    this.setTrail(cfg.maxPoints);
    for (const key of ['chamber', 'ref', 'magnets', 'cavity', 'Bfield', 'axes', 'grid']) this._applyVis(key);

    // Cámara
    this.camera.position.set(rc * 1.15, rc * 0.95, rc * 1.5);
    this.controls.target.set(0, 0, 0);
    this.controls.update();
    this.cfg = cfg;
  }

  setTrail(maxPoints) {
    if (this.trail) { this.scene.remove(this.trail); this.trail.geometry.dispose(); }
    this.maxPoints = maxPoints;
    this.trailPos = new Float32Array(maxPoints * 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.trailPos, 3));
    geo.setDrawRange(0, 0);
    this.trail = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: COLORS.trail, transparent: true, opacity: 0.95, depthWrite: false }));
    this.trail.frustumCulled = false;
    this.trail.renderOrder = 15;
    this.trail.visible = this.vis.trail;
    this.scene.add(this.trail);
  }

  setTrailPoint(i, x, y, z) {
    if (i >= this.maxPoints) return;
    this.trailPos[3 * i] = x * this.k; this.trailPos[3 * i + 1] = z * this.k; this.trailPos[3 * i + 2] = -y * this.k;
  }
  commitTrail() { this.trail.geometry.attributes.position.needsUpdate = true; }
  setTrailCount(n) { this.trail.geometry.setDrawRange(0, Math.min(n, this.maxPoints)); }

  // -------------------------------------------------------------- visibilidad
  _applyVis(key) {
    const map = { magnets: 'magnets', cavity: 'cavity', ref: 'ref', axes: 'axes', grid: 'grid', chamber: null, Bfield: 'B' };
    const flag = map[key] === null ? true : this.vis[map[key]];
    for (const o of this.layers[key] || []) o.visible = flag;
  }
  setVisible(name, on) {
    this.vis[name] = on;
    if (name === 'trail') this.trail.visible = on;
    for (const k of ['magnets', 'cavity', 'ref', 'axes', 'grid', 'Bfield']) this._applyVis(k);
  }

  // ---------------------------------------------------------------- partícula
  // d: punto del historial (diccionario campo -> valor), info: datos derivados
  setParticle(d, info) {
    const k = this.k;
    const pos = V(d.x, d.y, d.z, k);
    this.particle.position.copy(pos);

    const v = V(d.vx, d.vy, d.vz);
    const vhat = v.clone().normalize();
    const side = new THREE.Vector3(0, 0.28, 0);               // desplaza p respecto a v (son paralelos)
    const beta = v.length() / 299792458;

    this._setArrow(this.arrows.v, v, this.vis.v ? 2.2 * beta : 0, pos);
    this._setArrow(this.arrows.p, v, this.vis.p ? 2.8 * Math.hypot(d.px, d.py, d.pz) / info.p_ref : 0, pos.clone().add(side));

    const Bv = V(d.Bx, d.By, d.Bz);
    const bm = Bv.length();
    this._setArrow(this.arrows.B, Bv, this.vis.B && bm > 0 ? 2.2 * Math.min(2, bm / info.b_ref_T) : 0, pos.clone().add(new THREE.Vector3(0, -1.1, 0).multiplyScalar(Math.sign(Bv.y) || 1)).add(side));

    const Ev = V(d.Ex, d.Ey, d.Ez);
    const em = Ev.length();
    this._setArrow(this.arrows.E, Ev, this.vis.E && em > 0 ? 3.0 : 0, pos);

    // Emisión: dirección = v̂, semiángulo real 1/γ (dibujado con un mínimo para que sea visible)
    const showRad = this.vis.rad && d.power_W > 0;
    this._setArrow(this.arrows.rad, vhat, showRad ? 4.2 : 0, pos);
    this.cone.visible = showRad;
    if (showRad) {
      const Lc = 3.2;
      const ang = Math.max(1 / d.gamma, 0.07);
      this.cone.scale.set(Lc * Math.tan(ang), Lc, Lc * Math.tan(ang));
      this.cone.quaternion.setFromUnitVectors(UP, vhat.clone().negate());   // vértice en la partícula, base hacia delante
      this.cone.position.copy(pos).add(vhat.clone().multiplyScalar(Lc / 2));
    }
  }

  render() {
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}
