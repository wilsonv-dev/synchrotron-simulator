var Yp=Object.defineProperty;var jp=(n,t,e)=>t in n?Yp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Gt=(n,t,e)=>jp(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Kp="modulepreload",Zp=function(n){return"/"+n},Lc={},Jp=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(e.map(l=>{if(l=Zp(l),l in Lc)return;Lc[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Kp,c||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yl="160",Yi={ROTATE:0,DOLLY:1,PAN:2},ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qp=0,Dc=1,tm=2,Ud=1,em=2,Bn=3,li=0,qe=1,tn=2,si=0,Ri=1,xs=2,Ic=3,Oc=4,nm=5,Ti=100,im=101,sm=102,Uc=103,Nc=104,rm=200,om=201,am=202,lm=203,Ml=204,Sl=205,cm=206,hm=207,um=208,dm=209,fm=210,pm=211,mm=212,gm=213,_m=214,xm=0,vm=1,ym=2,Ho=3,bm=4,Mm=5,Sm=6,Em=7,Nd=0,Tm=1,wm=2,ri=0,Am=1,Cm=2,Rm=3,Pm=4,Lm=5,Dm=6,Fd=300,As=301,Cs=302,El=303,Tl=304,aa=306,wl=1e3,gn=1001,Al=1002,He=1003,Fc=1004,Ca=1005,rn=1006,Im=1007,mr=1008,oi=1009,Om=1010,Um=1011,jl=1012,Bd=1013,ti=1014,ei=1015,gr=1016,kd=1017,zd=1018,Pi=1020,Nm=1021,_n=1023,Fm=1024,Bm=1025,Li=1026,Rs=1027,km=1028,Hd=1029,zm=1030,Vd=1031,Gd=1033,Ra=33776,Pa=33777,La=33778,Da=33779,Bc=35840,kc=35841,zc=35842,Hc=35843,Wd=36196,Vc=37492,Gc=37496,Wc=37808,Xc=37809,$c=37810,qc=37811,Yc=37812,jc=37813,Kc=37814,Zc=37815,Jc=37816,Qc=37817,th=37818,eh=37819,nh=37820,ih=37821,Ia=36492,sh=36494,rh=36495,Hm=36283,oh=36284,ah=36285,lh=36286,Xd=3e3,Di=3001,Vm=3200,Gm=3201,Wm=0,Xm=1,ln="",Ae="srgb",Xn="srgb-linear",Kl="display-p3",la="display-p3-linear",Vo="linear",oe="srgb",Go="rec709",Wo="p3",Ki=7680,ch=519,$m=512,qm=513,Ym=514,$d=515,jm=516,Km=517,Zm=518,Jm=519,Cl=35044,Or=35048,hh="300 es",Rl=1035,Gn=2e3,Xo=2001;class Xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rr=Math.PI/180,Pl=180/Math.PI;function Wn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]).toLowerCase()}function Ce(n,t,e){return Math.max(t,Math.min(e,n))}function Qm(n,t){return(n%t+t)%t}function Oa(n,t,e){return(1-e)*n+e*t}function uh(n){return(n&n-1)===0&&n!==0}function Ll(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Vn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function re(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const tg={DEG2RAD:rr};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,i,s,r,o,a,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=s[0],p=s[3],m=s[6],b=s[1],x=s[4],y=s[7],C=s[2],T=s[5],E=s[8];return r[0]=o*_+a*b+l*C,r[3]=o*p+a*x+l*T,r[6]=o*m+a*y+l*E,r[1]=c*_+h*b+u*C,r[4]=c*p+h*x+u*T,r[7]=c*m+h*y+u*E,r[2]=d*_+f*b+g*C,r[5]=d*p+f*x+g*T,r[8]=d*m+f*y+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ua.makeScale(t,e)),this}rotate(t){return this.premultiply(Ua.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ua=new Yt;function qd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function $o(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function eg(){const n=$o("canvas");return n.style.display="block",n}const dh={};function or(n){n in dh||(dh[n]=!0,console.warn(n))}const fh=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ph=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ur={[Xn]:{transfer:Vo,primaries:Go,toReference:n=>n,fromReference:n=>n},[Ae]:{transfer:oe,primaries:Go,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[la]:{transfer:Vo,primaries:Wo,toReference:n=>n.applyMatrix3(ph),fromReference:n=>n.applyMatrix3(fh)},[Kl]:{transfer:oe,primaries:Wo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ph),fromReference:n=>n.applyMatrix3(fh).convertLinearToSRGB()}},ng=new Set([Xn,la]),se={enabled:!0,_workingColorSpace:Xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ng.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Ur[t].toReference,s=Ur[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Ur[n].primaries},getTransfer:function(n){return n===ln?Vo:Ur[n].transfer}};function Ss(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Na(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zi;class Yd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zi===void 0&&(Zi=$o("canvas")),Zi.width=t.width,Zi.height=t.height;const i=Zi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$o("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ss(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ss(e[i]/255)*255):e[i]=Ss(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ig=0;class jd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Wn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fa(s[o].image)):r.push(Fa(s[o]))}else r=Fa(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Fa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sg=0;class Ye extends Xi{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,i=gn,s=gn,r=rn,o=mr,a=_n,l=oi,c=Ye.DEFAULT_ANISOTROPY,h=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=Wn(),this.name="",this.source=new jd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Di?Ae:ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wl:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case Al:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wl:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case Al:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ae?Di:Xd}set encoding(t){or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Di?Ae:ln}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Fd;Ye.DEFAULT_ANISOTROPY=1;class Pe{constructor(t=0,e=0,i=0,s=1){Pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,y=(f+1)/2,C=(m+1)/2,T=(h+d)/4,E=(u+_)/4,L=(g+p)/4;return x>y&&x>C?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=T/i,r=E/i):y>C?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=T/s,r=L/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=E/r,s=L/r),this.set(i,s,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rg extends Xi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);const s={width:t,height:e,depth:1};i.encoding!==void 0&&(or("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Di?Ae:ln),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ye(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new jd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends rg{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Kd extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class og extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let p=1-a;const m=l*d+c*f+h*g+u*_,b=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const C=Math.sqrt(x),T=Math.atan2(C,m*b);p=Math.sin(p*T)/C,a=Math.sin(a*T)/C}const y=a*b;if(l=l*p+d*y,c=c*p+f*y,h=h*p+g*y,u=u*p+_*y,p===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,i=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ba.copy(this).projectOnVector(t),this.sub(Ba)}reflect(t){return this.sub(Ba.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ba=new O,mh=new Bi;class Cr{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,un):un.fromBufferAttribute(r,o),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nr.copy(i.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),Fr.subVectors(this.max,Hs),Ji.subVectors(t.a,Hs),Qi.subVectors(t.b,Hs),ts.subVectors(t.c,Hs),qn.subVectors(Qi,Ji),Yn.subVectors(ts,Qi),mi.subVectors(Ji,ts);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-mi.z,mi.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,mi.z,0,-mi.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-mi.y,mi.x,0];return!ka(e,Ji,Qi,ts,Fr)||(e=[1,0,0,0,1,0,0,0,1],!ka(e,Ji,Qi,ts,Fr))?!1:(Br.crossVectors(qn,Yn),e=[Br.x,Br.y,Br.z],ka(e,Ji,Qi,ts,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ln=[new O,new O,new O,new O,new O,new O,new O,new O],un=new O,Nr=new Cr,Ji=new O,Qi=new O,ts=new O,qn=new O,Yn=new O,mi=new O,Hs=new O,Fr=new O,Br=new O,gi=new O;function ka(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){gi.fromArray(n,r);const a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),l=t.dot(gi),c=e.dot(gi),h=i.dot(gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ag=new Cr,Vs=new O,za=new O;class Rr{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ag.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);const e=Vs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Vs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(za)),this.expandByPoint(Vs.copy(t.center).sub(za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new O,Ha=new O,kr=new O,jn=new O,Va=new O,zr=new O,Ga=new O;class ca{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ha.copy(t).add(e).multiplyScalar(.5),kr.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(Ha);const r=t.distanceTo(e)*.5,o=-this.direction.dot(kr),a=jn.dot(this.direction),l=-jn.dot(kr),c=jn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ha).addScaledVector(kr,d),f}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const i=Dn.dot(this.direction),s=Dn.dot(Dn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,i,s,r){Va.subVectors(e,t),zr.subVectors(i,t),Ga.crossVectors(Va,zr);let o=this.direction.dot(Ga),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,t);const l=a*this.direction.dot(zr.crossVectors(jn,zr));if(l<0)return null;const c=a*this.direction.dot(Va.cross(jn));if(c<0||l+c>o)return null;const h=-a*jn.dot(Ga);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,g,_,p){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,_,p)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/es.setFromMatrixColumn(t,0).length(),r=1/es.setFromMatrixColumn(t,1).length(),o=1/es.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lg,t,cg)}lookAt(t,e,i){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Kn.crossVectors(i,Ke),Kn.lengthSq()===0&&(Math.abs(i.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Kn.crossVectors(i,Ke)),Kn.normalize(),Hr.crossVectors(Ke,Kn),s[0]=Kn.x,s[4]=Hr.x,s[8]=Ke.x,s[1]=Kn.y,s[5]=Hr.y,s[9]=Ke.y,s[2]=Kn.z,s[6]=Hr.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],p=i[10],m=i[14],b=i[3],x=i[7],y=i[11],C=i[15],T=s[0],E=s[4],L=s[8],v=s[12],S=s[1],D=s[5],B=s[9],j=s[13],I=s[2],F=s[6],H=s[10],Y=s[14],K=s[3],q=s[7],tt=s[11],nt=s[15];return r[0]=o*T+a*S+l*I+c*K,r[4]=o*E+a*D+l*F+c*q,r[8]=o*L+a*B+l*H+c*tt,r[12]=o*v+a*j+l*Y+c*nt,r[1]=h*T+u*S+d*I+f*K,r[5]=h*E+u*D+d*F+f*q,r[9]=h*L+u*B+d*H+f*tt,r[13]=h*v+u*j+d*Y+f*nt,r[2]=g*T+_*S+p*I+m*K,r[6]=g*E+_*D+p*F+m*q,r[10]=g*L+_*B+p*H+m*tt,r[14]=g*v+_*j+p*Y+m*nt,r[3]=b*T+x*S+y*I+C*K,r[7]=b*E+x*D+y*F+C*q,r[11]=b*L+x*B+y*H+C*tt,r[15]=b*v+x*j+y*Y+C*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],b=u*p*c-_*d*c+_*l*f-a*p*f-u*l*m+a*d*m,x=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,y=h*_*c-g*u*c+g*a*f-o*_*f-h*a*m+o*u*m,C=g*u*l-h*_*l-g*a*d+o*_*d+h*a*p-o*u*p,T=e*b+i*x+s*y+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=b*E,t[1]=(_*d*r-u*p*r-_*s*f+i*p*f+u*s*m-i*d*m)*E,t[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*m+i*l*m)*E,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*E,t[4]=x*E,t[5]=(h*p*r-g*d*r+g*s*f-e*p*f-h*s*m+e*d*m)*E,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*E,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*E,t[8]=y*E,t[9]=(g*u*r-h*_*r-g*i*f+e*_*f+h*i*m-e*u*m)*E,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*m+e*a*m)*E,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*E,t[12]=C*E,t[13]=(h*_*s-g*u*s+g*i*d-e*_*d-h*i*p+e*u*p)*E,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*p-e*a*p)*E,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*E,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,p=o*u,m=a*u,b=l*c,x=l*h,y=l*u,C=i.x,T=i.y,E=i.z;return s[0]=(1-(_+m))*C,s[1]=(f+y)*C,s[2]=(g-x)*C,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(d+m))*T,s[6]=(p+b)*T,s[7]=0,s[8]=(g+x)*E,s[9]=(p-b)*E,s[10]=(1-(d+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=es.set(s[0],s[1],s[2]).length();const o=es.set(s[4],s[5],s[6]).length(),a=es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],dn.copy(this);const c=1/r,h=1/o,u=1/a;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=u,dn.elements[9]*=u,dn.elements[10]*=u,e.setFromRotationMatrix(dn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Gn){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let f,g;if(a===Gn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Xo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Gn){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,f=(i+s)*h;let g,_;if(a===Gn)g=(o+r)*u,_=-2*u;else if(a===Xo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const es=new O,dn=new xe,lg=new O(0,0,0),cg=new O(1,1,1),Kn=new O,Hr=new O,Ke=new O,gh=new xe,_h=new Bi;class ha{constructor(t=0,e=0,i=0,s=ha.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return gh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _h.setFromEuler(this),this.setFromQuaternion(_h,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ha.DEFAULT_ORDER="XYZ";class Zd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hg=0;const xh=new O,ns=new Bi,In=new xe,Vr=new O,Gs=new O,ug=new O,dg=new Bi,vh=new O(1,0,0),yh=new O(0,1,0),bh=new O(0,0,1),fg={type:"added"},pg={type:"removed"};class Le extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new O,e=new ha,i=new Bi,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new Yt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(vh,t)}rotateY(t){return this.rotateOnAxis(yh,t)}rotateZ(t){return this.rotateOnAxis(bh,t)}translateOnAxis(t,e){return xh.copy(t).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vh,t)}translateY(t){return this.translateOnAxis(yh,t)}translateZ(t){return this.translateOnAxis(bh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Vr.copy(t):Vr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Gs,Vr,this.up):In.lookAt(Vr,Gs,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(In),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(fg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pg)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,t,ug),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,dg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Le.DEFAULT_UP=new O(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new O,On=new O,Wa=new O,Un=new O,is=new O,ss=new O,Mh=new O,Xa=new O,$a=new O,qa=new O;let Gr=!1;class Qe{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),fn.subVectors(t,e),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){fn.subVectors(s,e),On.subVectors(i,e),Wa.subVectors(t,e);const o=fn.dot(fn),a=fn.dot(On),l=fn.dot(Wa),c=On.dot(On),h=On.dot(Wa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getUV(t,e,i,s,r,o,a,l){return Gr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gr=!0),this.getInterpolation(t,e,i,s,r,o,a,l)}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Un.x),l.addScaledVector(o,Un.y),l.addScaledVector(a,Un.z),l)}static isFrontFacing(t,e,i,s){return fn.subVectors(i,e),On.subVectors(t,e),fn.cross(On).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),fn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return Gr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Gr=!0),Qe.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return Qe.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;is.subVectors(s,i),ss.subVectors(r,i),Xa.subVectors(t,i);const l=is.dot(Xa),c=ss.dot(Xa);if(l<=0&&c<=0)return e.copy(i);$a.subVectors(t,s);const h=is.dot($a),u=ss.dot($a);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(is,o);qa.subVectors(t,r);const f=is.dot(qa),g=ss.dot(qa);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(ss,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Mh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Mh,a);const m=1/(p+_+d);return o=_*m,a=d*m,e.copy(i).addScaledVector(is,o).addScaledVector(ss,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function Ya(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}let Zt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=se.workingColorSpace){if(t=Qm(t,1),e=Ce(e,0,1),i=Ce(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ya(o,r,t+1/3),this.g=Ya(o,r,t),this.b=Ya(o,r,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=Ae){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){const i=Jd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}copyLinearToSRGB(t){return this.r=Na(t.r),this.g=Na(t.g),this.b=Na(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return se.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Ce(Ue.r*255,0,255))*65536+Math.round(Ce(Ue.g*255,0,255))*256+Math.round(Ce(Ue.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Ue.copy(this),e);const i=Ue.r,s=Ue.g,r=Ue.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Ae){se.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,i=Ue.g,s=Ue.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(Wr);const i=Oa(Zn.h,Wr.h,e),s=Oa(Zn.s,Wr.s,e),r=Oa(Zn.l,Wr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ue=new Zt;Zt.NAMES=Jd;let mg=0;class $i extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=Ri,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ml,this.blendDst=Sl,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ml&&(i.blendSrc=this.blendSrc),this.blendDst!==Sl&&(i.blendDst=this.blendDst),this.blendEquation!==Ti&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ho&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ch&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class wn extends $i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new O,Xr=new ct;class Ne{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Cl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Xr.fromBufferAttribute(this,e),Xr.applyMatrix3(t),this.setXY(e,Xr.x,Xr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=re(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),i=re(i,this.array),s=re(s,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cl&&(t.usage=this.usage),t}}class Qd extends Ne{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class tf extends Ne{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ce extends Ne{constructor(t,e,i){super(new Float32Array(t),e,i)}}let gg=0;const nn=new xe,ja=new Le,rs=new O,Ze=new Cr,Ws=new Cr,we=new O;class le extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qd(t)?tf:Qd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,i){return nn.makeTranslation(t,e,i),this.applyMatrix4(nn),this}scale(t,e,i){return nn.makeScale(t,e,i),this.applyMatrix4(nn),this}lookAt(t){return ja.lookAt(t),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(Ze.min,Ws.min),Ze.expandByPoint(we),we.addVectors(Ze.max,Ws.max),Ze.expandByPoint(we)):(Ze.expandByPoint(Ws.min),Ze.expandByPoint(Ws.max))}Ze.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)we.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(we));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)we.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(t,c),we.add(rs)),s=Math.max(s,i.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<a;S++)c[S]=new O,h[S]=new O;const u=new O,d=new O,f=new O,g=new ct,_=new ct,p=new ct,m=new O,b=new O;function x(S,D,B){u.fromArray(s,S*3),d.fromArray(s,D*3),f.fromArray(s,B*3),g.fromArray(o,S*2),_.fromArray(o,D*2),p.fromArray(o,B*2),d.sub(u),f.sub(u),_.sub(g),p.sub(g);const j=1/(_.x*p.y-p.x*_.y);isFinite(j)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(f,-_.y).multiplyScalar(j),b.copy(f).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(j),c[S].add(m),c[D].add(m),c[B].add(m),h[S].add(b),h[D].add(b),h[B].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let S=0,D=y.length;S<D;++S){const B=y[S],j=B.start,I=B.count;for(let F=j,H=j+I;F<H;F+=3)x(i[F+0],i[F+1],i[F+2])}const C=new O,T=new O,E=new O,L=new O;function v(S){E.fromArray(r,S*3),L.copy(E);const D=c[S];C.copy(D),C.sub(E.multiplyScalar(E.dot(D))).normalize(),T.crossVectors(L,D);const j=T.dot(h[S])<0?-1:1;l[S*4]=C.x,l[S*4+1]=C.y,l[S*4+2]=C.z,l[S*4+3]=j}for(let S=0,D=y.length;S<D;++S){const B=y[S],j=B.start,I=B.count;for(let F=j,H=j+I;F<H;F+=3)v(i[F+0]),v(i[F+1]),v(i[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,u=new O;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new Ne(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new le,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sh=new xe,_i=new ca,$r=new Rr,Eh=new O,os=new O,as=new O,ls=new O,Ka=new O,qr=new O,Yr=new ct,jr=new ct,Kr=new ct,Th=new O,wh=new O,Ah=new O,Zr=new O,Jr=new O;class be extends Le{constructor(t=new le,e=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ka.fromBufferAttribute(u,t),o?qr.addScaledVector(Ka,h):qr.addScaledVector(Ka.sub(e),h))}e.add(qr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!($r.containsPoint(_i.origin)===!1&&(_i.intersectSphere($r,Eh)===null||_i.origin.distanceToSquared(Eh)>(t.far-t.near)**2))&&(Sh.copy(r).invert(),_i.copy(t.ray).applyMatrix4(Sh),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],b=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=b,C=x;y<C;y+=3){const T=a.getX(y),E=a.getX(y+1),L=a.getX(y+2);s=Qr(this,m,t,i,c,h,u,T,E,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const b=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);s=Qr(this,o,t,i,c,h,u,b,x,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],b=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=b,C=x;y<C;y+=3){const T=y,E=y+1,L=y+2;s=Qr(this,m,t,i,c,h,u,T,E,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const b=p,x=p+1,y=p+2;s=Qr(this,o,t,i,c,h,u,b,x,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function _g(n,t,e,i,s,r,o,a){let l;if(t.side===qe?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===li,a),l===null)return null;Jr.copy(a),Jr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Jr);return c<e.near||c>e.far?null:{distance:c,point:Jr.clone(),object:n}}function Qr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,os),n.getVertexPosition(l,as),n.getVertexPosition(c,ls);const h=_g(n,t,e,i,os,as,ls,Zr);if(h){s&&(Yr.fromBufferAttribute(s,a),jr.fromBufferAttribute(s,l),Kr.fromBufferAttribute(s,c),h.uv=Qe.getInterpolation(Zr,os,as,ls,Yr,jr,Kr,new ct)),r&&(Yr.fromBufferAttribute(r,a),jr.fromBufferAttribute(r,l),Kr.fromBufferAttribute(r,c),h.uv1=Qe.getInterpolation(Zr,os,as,ls,Yr,jr,Kr,new ct),h.uv2=h.uv1),o&&(Th.fromBufferAttribute(o,a),wh.fromBufferAttribute(o,l),Ah.fromBufferAttribute(o,c),h.normal=Qe.getInterpolation(Zr,os,as,ls,Th,wh,Ah,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new O,materialIndex:0};Qe.getNormal(os,as,ls,u.normal),h.face=u}return h}class ki extends le{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2));function g(_,p,m,b,x,y,C,T,E,L,v){const S=y/E,D=C/L,B=y/2,j=C/2,I=T/2,F=E+1,H=L+1;let Y=0,K=0;const q=new O;for(let tt=0;tt<H;tt++){const nt=tt*D-j;for(let ft=0;ft<F;ft++){const W=ft*S-B;q[_]=W*b,q[p]=nt*x,q[m]=I,c.push(q.x,q.y,q.z),q[_]=0,q[p]=0,q[m]=T>0?1:-1,h.push(q.x,q.y,q.z),u.push(ft/E),u.push(1-tt/L),Y+=1}}for(let tt=0;tt<L;tt++)for(let nt=0;nt<E;nt++){const ft=d+nt+F*tt,W=d+nt+F*(tt+1),et=d+(nt+1)+F*(tt+1),mt=d+(nt+1)+F*tt;l.push(ft,W,mt),l.push(W,et,mt),K+=6}a.addGroup(f,K,v),f+=K,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ki(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ps(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function ke(n){const t={};for(let e=0;e<n.length;e++){const i=Ps(n[e]);for(const s in i)t[s]=i[s]}return t}function xg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ef(n){return n.getRenderTarget()===null?n.outputColorSpace:se.workingColorSpace}const vg={clone:Ps,merge:ke};var yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends $i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yg,this.fragmentShader=bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=xg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class nf extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class on extends nf{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Pl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pl*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(rr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const cs=-90,hs=1;class Mg extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(cs,hs,t,e);s.layers=this.layers,this.add(s);const r=new on(cs,hs,t,e);r.layers=this.layers,this.add(r);const o=new on(cs,hs,t,e);o.layers=this.layers,this.add(o);const a=new on(cs,hs,t,e);a.layers=this.layers,this.add(a);const l=new on(cs,hs,t,e);l.layers=this.layers,this.add(l);const c=new on(cs,hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class sf extends Ye{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:As,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sg extends Fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(or("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Di?Ae:ln),this.texture=new sf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ki(5,5,5),r=new zi({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qe,blending:si});r.uniforms.tEquirect.value=e;const o=new be(s,r),a=e.minFilter;return e.minFilter===mr&&(e.minFilter=rn),new Mg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Za=new O,Eg=new O,Tg=new Yt;class Qn{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Za.subVectors(i,e).cross(Eg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Za),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Tg.getNormalMatrix(t),s=this.coplanarPoint(Za).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Rr,to=new O;class rf{constructor(t=new Qn,e=new Qn,i=new Qn,s=new Qn,r=new Qn,o=new Qn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Gn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],p=s[11],m=s[12],b=s[13],x=s[14],y=s[15];if(i[0].setComponents(l-r,d-c,p-f,y-m).normalize(),i[1].setComponents(l+r,d+c,p+f,y+m).normalize(),i[2].setComponents(l+o,d+h,p+g,y+b).normalize(),i[3].setComponents(l-o,d-h,p-g,y-b).normalize(),i[4].setComponents(l-a,d-u,p-_,y-x).normalize(),e===Gn)i[5].setComponents(l+a,d+u,p+_,y+x).normalize();else if(e===Xo)i[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(to.x=s.normal.x>0?t.max.x:t.min.x,to.y=s.normal.y>0?t.max.y:t.min.y,to.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(to)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function of(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function wg(n,t){const e=t.isWebGL2,i=new WeakMap;function s(c,h){const u=c.array,d=c.usage,f=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=n.SHORT;else if(u instanceof Uint32Array)_=n.UNSIGNED_INT;else if(u instanceof Int32Array)_=n.INT;else if(u instanceof Int8Array)_=n.BYTE;else if(u instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){const d=h.array,f=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),f.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];e?n.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):n.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(e?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class Zl extends le{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const b=m*d-o;for(let x=0;x<c;x++){const y=x*u-r;g.push(y,-b,0),_.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){const x=b+c*m,y=b+c*(m+1),C=b+1+c*(m+1),T=b+1+c*m;f.push(x,y,T),f.push(y,C,T)}this.setIndex(f),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zl(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ig=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Og=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ug=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ng=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Fg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$g=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i_="gl_FragColor = linearToOutputTexel( gl_FragColor );",s_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,r_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,a_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,l_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,h_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,m_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,g_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,__=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,y_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,b_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,w_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,A_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,C_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,R_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,I_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,O_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,F_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,V_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,G_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,W_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,X_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,K_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,J_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,n0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,h0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,u0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,d0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,p0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,g0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,y0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,b0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,T0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,I0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,O0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,U0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,H0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,X0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,q0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Y0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Z0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ix=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:Ag,alphahash_pars_fragment:Cg,alphamap_fragment:Rg,alphamap_pars_fragment:Pg,alphatest_fragment:Lg,alphatest_pars_fragment:Dg,aomap_fragment:Ig,aomap_pars_fragment:Og,batching_pars_vertex:Ug,batching_vertex:Ng,begin_vertex:Fg,beginnormal_vertex:Bg,bsdfs:kg,iridescence_fragment:zg,bumpmap_pars_fragment:Hg,clipping_planes_fragment:Vg,clipping_planes_pars_fragment:Gg,clipping_planes_pars_vertex:Wg,clipping_planes_vertex:Xg,color_fragment:$g,color_pars_fragment:qg,color_pars_vertex:Yg,color_vertex:jg,common:Kg,cube_uv_reflection_fragment:Zg,defaultnormal_vertex:Jg,displacementmap_pars_vertex:Qg,displacementmap_vertex:t_,emissivemap_fragment:e_,emissivemap_pars_fragment:n_,colorspace_fragment:i_,colorspace_pars_fragment:s_,envmap_fragment:r_,envmap_common_pars_fragment:o_,envmap_pars_fragment:a_,envmap_pars_vertex:l_,envmap_physical_pars_fragment:y_,envmap_vertex:c_,fog_vertex:h_,fog_pars_vertex:u_,fog_fragment:d_,fog_pars_fragment:f_,gradientmap_pars_fragment:p_,lightmap_fragment:m_,lightmap_pars_fragment:g_,lights_lambert_fragment:__,lights_lambert_pars_fragment:x_,lights_pars_begin:v_,lights_toon_fragment:b_,lights_toon_pars_fragment:M_,lights_phong_fragment:S_,lights_phong_pars_fragment:E_,lights_physical_fragment:T_,lights_physical_pars_fragment:w_,lights_fragment_begin:A_,lights_fragment_maps:C_,lights_fragment_end:R_,logdepthbuf_fragment:P_,logdepthbuf_pars_fragment:L_,logdepthbuf_pars_vertex:D_,logdepthbuf_vertex:I_,map_fragment:O_,map_pars_fragment:U_,map_particle_fragment:N_,map_particle_pars_fragment:F_,metalnessmap_fragment:B_,metalnessmap_pars_fragment:k_,morphcolor_vertex:z_,morphnormal_vertex:H_,morphtarget_pars_vertex:V_,morphtarget_vertex:G_,normal_fragment_begin:W_,normal_fragment_maps:X_,normal_pars_fragment:$_,normal_pars_vertex:q_,normal_vertex:Y_,normalmap_pars_fragment:j_,clearcoat_normal_fragment_begin:K_,clearcoat_normal_fragment_maps:Z_,clearcoat_pars_fragment:J_,iridescence_pars_fragment:Q_,opaque_fragment:t0,packing:e0,premultiplied_alpha_fragment:n0,project_vertex:i0,dithering_fragment:s0,dithering_pars_fragment:r0,roughnessmap_fragment:o0,roughnessmap_pars_fragment:a0,shadowmap_pars_fragment:l0,shadowmap_pars_vertex:c0,shadowmap_vertex:h0,shadowmask_pars_fragment:u0,skinbase_vertex:d0,skinning_pars_vertex:f0,skinning_vertex:p0,skinnormal_vertex:m0,specularmap_fragment:g0,specularmap_pars_fragment:_0,tonemapping_fragment:x0,tonemapping_pars_fragment:v0,transmission_fragment:y0,transmission_pars_fragment:b0,uv_pars_fragment:M0,uv_pars_vertex:S0,uv_vertex:E0,worldpos_vertex:T0,background_vert:w0,background_frag:A0,backgroundCube_vert:C0,backgroundCube_frag:R0,cube_vert:P0,cube_frag:L0,depth_vert:D0,depth_frag:I0,distanceRGBA_vert:O0,distanceRGBA_frag:U0,equirect_vert:N0,equirect_frag:F0,linedashed_vert:B0,linedashed_frag:k0,meshbasic_vert:z0,meshbasic_frag:H0,meshlambert_vert:V0,meshlambert_frag:G0,meshmatcap_vert:W0,meshmatcap_frag:X0,meshnormal_vert:$0,meshnormal_frag:q0,meshphong_vert:Y0,meshphong_frag:j0,meshphysical_vert:K0,meshphysical_frag:Z0,meshtoon_vert:J0,meshtoon_frag:Q0,points_vert:tx,points_frag:ex,shadow_vert:nx,shadow_frag:ix,sprite_vert:sx,sprite_frag:rx},pt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},An={basic:{uniforms:ke([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:ke([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:ke([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:ke([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:ke([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:ke([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:ke([pt.points,pt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:ke([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:ke([pt.common,pt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:ke([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:ke([pt.sprite,pt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:ke([pt.common,pt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:ke([pt.lights,pt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};An.physical={uniforms:ke([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const eo={r:0,b:0,g:0};function ox(n,t,e,i,s,r,o){const a=new Zt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(p,m){let b=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),b=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===aa)?(h===void 0&&(h=new be(new ki(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:Ps(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=se.getTransfer(x.colorSpace)!==oe,(u!==x||d!==x.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new be(new Zl(2,2),new zi({name:"BackgroundMaterial",uniforms:Ps(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=se.getTransfer(x.colorSpace)!==oe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(eo,ef(n)),i.buffers.color.setClear(eo.r,eo.g,eo.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function ax(n,t,e,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null);let c=l,h=!1;function u(I,F,H,Y,K){let q=!1;if(o){const tt=_(Y,H,F);c!==tt&&(c=tt,f(c.object)),q=m(I,Y,H,K),q&&b(I,Y,H,K)}else{const tt=F.wireframe===!0;(c.geometry!==Y.id||c.program!==H.id||c.wireframe!==tt)&&(c.geometry=Y.id,c.program=H.id,c.wireframe=tt,q=!0)}K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,L(I,F,H,Y),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(I){return i.isWebGL2?n.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?n.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function _(I,F,H){const Y=H.wireframe===!0;let K=a[I.id];K===void 0&&(K={},a[I.id]=K);let q=K[F.id];q===void 0&&(q={},K[F.id]=q);let tt=q[Y];return tt===void 0&&(tt=p(d()),q[Y]=tt),tt}function p(I){const F=[],H=[],Y=[];for(let K=0;K<s;K++)F[K]=0,H[K]=0,Y[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:Y,object:I,attributes:{},index:null}}function m(I,F,H,Y){const K=c.attributes,q=F.attributes;let tt=0;const nt=H.getAttributes();for(const ft in nt)if(nt[ft].location>=0){const et=K[ft];let mt=q[ft];if(mt===void 0&&(ft==="instanceMatrix"&&I.instanceMatrix&&(mt=I.instanceMatrix),ft==="instanceColor"&&I.instanceColor&&(mt=I.instanceColor)),et===void 0||et.attribute!==mt||mt&&et.data!==mt.data)return!0;tt++}return c.attributesNum!==tt||c.index!==Y}function b(I,F,H,Y){const K={},q=F.attributes;let tt=0;const nt=H.getAttributes();for(const ft in nt)if(nt[ft].location>=0){let et=q[ft];et===void 0&&(ft==="instanceMatrix"&&I.instanceMatrix&&(et=I.instanceMatrix),ft==="instanceColor"&&I.instanceColor&&(et=I.instanceColor));const mt={};mt.attribute=et,et&&et.data&&(mt.data=et.data),K[ft]=mt,tt++}c.attributes=K,c.attributesNum=tt,c.index=Y}function x(){const I=c.newAttributes;for(let F=0,H=I.length;F<H;F++)I[F]=0}function y(I){C(I,0)}function C(I,F){const H=c.newAttributes,Y=c.enabledAttributes,K=c.attributeDivisors;H[I]=1,Y[I]===0&&(n.enableVertexAttribArray(I),Y[I]=1),K[I]!==F&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,F),K[I]=F)}function T(){const I=c.newAttributes,F=c.enabledAttributes;for(let H=0,Y=F.length;H<Y;H++)F[H]!==I[H]&&(n.disableVertexAttribArray(H),F[H]=0)}function E(I,F,H,Y,K,q,tt){tt===!0?n.vertexAttribIPointer(I,F,H,K,q):n.vertexAttribPointer(I,F,H,Y,K,q)}function L(I,F,H,Y){if(i.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const K=Y.attributes,q=H.getAttributes(),tt=F.defaultAttributeValues;for(const nt in q){const ft=q[nt];if(ft.location>=0){let W=K[nt];if(W===void 0&&(nt==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),nt==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),W!==void 0){const et=W.normalized,mt=W.itemSize,Mt=e.get(W);if(Mt===void 0)continue;const St=Mt.buffer,It=Mt.type,Ft=Mt.bytesPerElement,wt=i.isWebGL2===!0&&(It===n.INT||It===n.UNSIGNED_INT||W.gpuType===Bd);if(W.isInterleavedBufferAttribute){const Nt=W.data,U=Nt.stride,dt=W.offset;if(Nt.isInstancedInterleavedBuffer){for(let J=0;J<ft.locationSize;J++)C(ft.location+J,Nt.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let J=0;J<ft.locationSize;J++)y(ft.location+J);n.bindBuffer(n.ARRAY_BUFFER,St);for(let J=0;J<ft.locationSize;J++)E(ft.location+J,mt/ft.locationSize,It,et,U*Ft,(dt+mt/ft.locationSize*J)*Ft,wt)}else{if(W.isInstancedBufferAttribute){for(let Nt=0;Nt<ft.locationSize;Nt++)C(ft.location+Nt,W.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Nt=0;Nt<ft.locationSize;Nt++)y(ft.location+Nt);n.bindBuffer(n.ARRAY_BUFFER,St);for(let Nt=0;Nt<ft.locationSize;Nt++)E(ft.location+Nt,mt/ft.locationSize,It,et,mt*Ft,mt/ft.locationSize*Nt*Ft,wt)}}else if(tt!==void 0){const et=tt[nt];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(ft.location,et);break;case 3:n.vertexAttrib3fv(ft.location,et);break;case 4:n.vertexAttrib4fv(ft.location,et);break;default:n.vertexAttrib1fv(ft.location,et)}}}}T()}function v(){B();for(const I in a){const F=a[I];for(const H in F){const Y=F[H];for(const K in Y)g(Y[K].object),delete Y[K];delete F[H]}delete a[I]}}function S(I){if(a[I.id]===void 0)return;const F=a[I.id];for(const H in F){const Y=F[H];for(const K in Y)g(Y[K].object),delete Y[K];delete F[H]}delete a[I.id]}function D(I){for(const F in a){const H=a[F];if(H[I.id]===void 0)continue;const Y=H[I.id];for(const K in Y)g(Y[K].object),delete Y[K];delete H[I.id]}}function B(){j(),h=!0,c!==l&&(c=l,f(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:B,resetDefaultState:j,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:y,disableUnusedAttributes:T}}function lx(n,t,e,i){const s=i.isWebGL2;let r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(s)f=n,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function cx(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=o||t.has("OES_texture_float"),C=x&&y,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:T}}function hx(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Qn,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const b=r?0:i,x=b*4;let y=m.clippingState||null;l.value=y,y=h(g,d,x,f);for(let C=0;C!==x;++C)y[C]=e[C];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,y=f;x!==_;++x,y+=4)o.copy(u[x]).applyMatrix4(b,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function ux(n){let t=new WeakMap;function e(o,a){return a===El?o.mapping=As:a===Tl&&(o.mapping=Cs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===El||a===Tl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Sg(l.height/2);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class dx extends nf{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vs=4,Ch=[.125,.215,.35,.446,.526,.582],wi=20,Ja=new dx,Rh=new Zt;let Qa=null,tl=0,el=0;const Mi=(1+Math.sqrt(5))/2,us=1/Mi,Ph=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Mi,us),new O(0,Mi,-us),new O(us,0,Mi),new O(-us,0,Mi),new O(Mi,us,0),new O(-Mi,us,0)];class Lh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Qa=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qa,tl,el),t.scissorTest=!1,no(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===As||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qa=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:gr,format:_n,colorSpace:Xn,depthBuffer:!1},s=Dh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fx(r)),this._blurMaterial=px(r,t,e)}return s}_compileMaterial(t){const e=new be(this._lodPlanes[0],t);this._renderer.compile(e,Ja)}_sceneToCubeUV(t,e,i,s){const a=new on(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Rh),h.toneMapping=ri,h.autoClear=!1;const f=new wn({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),g=new be(new ki,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(Rh),_=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;no(s,b*x,m>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===As||t.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ih());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;no(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ja)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ph[(s-1)%Ph.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new be(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*wi-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):wi;p>wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wi}`);const m=[];let b=0;for(let E=0;E<wi;++E){const L=E/_,v=Math.exp(-L*L/2);m.push(v),E===0?b+=v:E<p&&(b+=2*v)}for(let E=0;E<m.length;E++)m[E]=m[E]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const y=this._sizeLods[s],C=3*y*(s>x-vs?s-x+vs:0),T=4*(this._cubeSize-y);no(e,C,T,3*y,2*y),l.setRenderTarget(e),l.render(u,Ja)}}function fx(n){const t=[],e=[],i=[];let s=n;const r=n-vs+1+Ch.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-vs?l=Ch[o-n+vs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,b=new Float32Array(_*g*f),x=new Float32Array(p*g*f),y=new Float32Array(m*g*f);for(let T=0;T<f;T++){const E=T%3*2/3-1,L=T>2?0:-1,v=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];b.set(v,_*g*T),x.set(d,p*g*T);const S=[T,T,T,T,T,T];y.set(S,m*g*T)}const C=new le;C.setAttribute("position",new Ne(b,_)),C.setAttribute("uv",new Ne(x,p)),C.setAttribute("faceIndex",new Ne(y,m)),t.push(C),s>vs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Dh(n,t,e){const i=new Fi(n,t,e);return i.texture.mapping=aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function no(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function px(n,t,e){const i=new Float32Array(wi),s=new O(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Ih(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Oh(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Jl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===El||l===Tl,h=l===As||l===Cs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Lh(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Lh(n));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function gx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function _x(n,t,e,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],n.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let x=0,y=b.length;x<y;x+=3){const C=b[x+0],T=b[x+1],E=b[x+2];d.push(C,T,T,E,E,C)}}else if(g!==void 0){const b=g.array;_=g.version;for(let x=0,y=b.length/3-1;x<y;x+=3){const C=x+0,T=x+1,E=x+2;d.push(C,T,T,E,E,C)}}else return;const p=new(qd(d)?tf:Qd)(d,1);p.version=_;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function xx(n,t,e,i){const s=i.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,g){n.drawElements(r,g,a,f*l),e.update(g,r,1)}function u(f,g,_){if(_===0)return;let p,m;if(s)p=n,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,a,f*l,_),e.update(g,r,_)}function d(f,g,_){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(f[m]/l,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,a,f,0,_);let m=0;for(let b=0;b<_;b++)m+=g[b];e.update(m,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function vx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function yx(n,t){return n[0]-t[0]}function bx(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Mx(n,t,e){const i={},s=new Float32Array(8),r=new WeakMap,o=new Pe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0;let _=r.get(h);if(_===void 0||_.count!==g){let I=function(){B.dispose(),r.delete(h),h.removeEventListener("dispose",I)};_!==void 0&&_.texture.dispose();const b=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],E=h.morphAttributes.color||[];let L=0;b===!0&&(L=1),x===!0&&(L=2),y===!0&&(L=3);let v=h.attributes.position.count*L,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const D=new Float32Array(v*S*4*g),B=new Kd(D,v,S,g);B.type=ei,B.needsUpdate=!0;const j=L*4;for(let F=0;F<g;F++){const H=C[F],Y=T[F],K=E[F],q=v*S*4*F;for(let tt=0;tt<H.count;tt++){const nt=tt*j;b===!0&&(o.fromBufferAttribute(H,tt),D[q+nt+0]=o.x,D[q+nt+1]=o.y,D[q+nt+2]=o.z,D[q+nt+3]=0),x===!0&&(o.fromBufferAttribute(Y,tt),D[q+nt+4]=o.x,D[q+nt+5]=o.y,D[q+nt+6]=o.z,D[q+nt+7]=0),y===!0&&(o.fromBufferAttribute(K,tt),D[q+nt+8]=o.x,D[q+nt+9]=o.y,D[q+nt+10]=o.z,D[q+nt+11]=K.itemSize===4?o.w:1)}}_={count:g,texture:B,size:new ct(v,S)},r.set(h,_),h.addEventListener("dispose",I)}let p=0;for(let b=0;b<d.length;b++)p+=d[b];const m=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",m),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const f=d===void 0?0:d.length;let g=i[h.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];i[h.id]=g}for(let x=0;x<f;x++){const y=g[x];y[0]=x,y[1]=d[x]}g.sort(bx);for(let x=0;x<8;x++)x<f&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(yx);const _=h.morphAttributes.position,p=h.morphAttributes.normal;let m=0;for(let x=0;x<8;x++){const y=a[x],C=y[0],T=y[1];C!==Number.MAX_SAFE_INTEGER&&T?(_&&h.getAttribute("morphTarget"+x)!==_[C]&&h.setAttribute("morphTarget"+x,_[C]),p&&h.getAttribute("morphNormal"+x)!==p[C]&&h.setAttribute("morphNormal"+x,p[C]),s[x]=T,m+=T):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}const b=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",b),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Sx(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class af extends Ye{constructor(t,e,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:Li,h!==Li&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Li&&(i=ti),i===void 0&&h===Rs&&(i=Pi),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:He,this.minFilter=l!==void 0?l:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const lf=new Ye,cf=new af(1,1);cf.compareFunction=$d;const hf=new Kd,uf=new og,df=new sf,Uh=[],Nh=[],Fh=new Float32Array(16),Bh=new Float32Array(9),kh=new Float32Array(4);function Us(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Uh[s];if(r===void 0&&(r=new Float32Array(s),Uh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ee(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ua(n,t){let e=Nh[t];e===void 0&&(e=new Int32Array(t),Nh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ex(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Tx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2fv(this.addr,t),Ee(e,t)}}function wx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;n.uniform3fv(this.addr,t),Ee(e,t)}}function Ax(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4fv(this.addr,t),Ee(e,t)}}function Cx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,i))return;kh.set(i),n.uniformMatrix2fv(this.addr,!1,kh),Ee(e,i)}}function Rx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,i))return;Bh.set(i),n.uniformMatrix3fv(this.addr,!1,Bh),Ee(e,i)}}function Px(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,i))return;Fh.set(i),n.uniformMatrix4fv(this.addr,!1,Fh),Ee(e,i)}}function Lx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Dx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2iv(this.addr,t),Ee(e,t)}}function Ix(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3iv(this.addr,t),Ee(e,t)}}function Ox(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4iv(this.addr,t),Ee(e,t)}}function Ux(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Nx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2uiv(this.addr,t),Ee(e,t)}}function Fx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3uiv(this.addr,t),Ee(e,t)}}function Bx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4uiv(this.addr,t),Ee(e,t)}}function kx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?cf:lf;e.setTexture2D(t||r,s)}function zx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||uf,s)}function Hx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||df,s)}function Vx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||hf,s)}function Gx(n){switch(n){case 5126:return Ex;case 35664:return Tx;case 35665:return wx;case 35666:return Ax;case 35674:return Cx;case 35675:return Rx;case 35676:return Px;case 5124:case 35670:return Lx;case 35667:case 35671:return Dx;case 35668:case 35672:return Ix;case 35669:case 35673:return Ox;case 5125:return Ux;case 36294:return Nx;case 36295:return Fx;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return zx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Vx}}function Wx(n,t){n.uniform1fv(this.addr,t)}function Xx(n,t){const e=Us(t,this.size,2);n.uniform2fv(this.addr,e)}function $x(n,t){const e=Us(t,this.size,3);n.uniform3fv(this.addr,e)}function qx(n,t){const e=Us(t,this.size,4);n.uniform4fv(this.addr,e)}function Yx(n,t){const e=Us(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function jx(n,t){const e=Us(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Kx(n,t){const e=Us(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Zx(n,t){n.uniform1iv(this.addr,t)}function Jx(n,t){n.uniform2iv(this.addr,t)}function Qx(n,t){n.uniform3iv(this.addr,t)}function tv(n,t){n.uniform4iv(this.addr,t)}function ev(n,t){n.uniform1uiv(this.addr,t)}function nv(n,t){n.uniform2uiv(this.addr,t)}function iv(n,t){n.uniform3uiv(this.addr,t)}function sv(n,t){n.uniform4uiv(this.addr,t)}function rv(n,t,e){const i=this.cache,s=t.length,r=ua(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||lf,r[o])}function ov(n,t,e){const i=this.cache,s=t.length,r=ua(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||uf,r[o])}function av(n,t,e){const i=this.cache,s=t.length,r=ua(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||df,r[o])}function lv(n,t,e){const i=this.cache,s=t.length,r=ua(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||hf,r[o])}function cv(n){switch(n){case 5126:return Wx;case 35664:return Xx;case 35665:return $x;case 35666:return qx;case 35674:return Yx;case 35675:return jx;case 35676:return Kx;case 5124:case 35670:return Zx;case 35667:case 35671:return Jx;case 35668:case 35672:return Qx;case 35669:case 35673:return tv;case 5125:return ev;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return lv}}class hv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Gx(e.type)}}class uv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cv(e.type)}}class dv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const nl=/(\w+)(\])?(\[|\.)?/g;function zh(n,t){n.seq.push(t),n.map[t.id]=t}function fv(n,t,e){const i=n.name,s=i.length;for(nl.lastIndex=0;;){const r=nl.exec(i),o=nl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){zh(e,c===void 0?new hv(a,n,t):new uv(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new dv(a),zh(e,u)),e=u}}}class Oo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);fv(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Hh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const pv=37297;let mv=0;function gv(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function _v(n){const t=se.getPrimaries(se.workingColorSpace),e=se.getPrimaries(n);let i;switch(t===e?i="":t===Wo&&e===Go?i="LinearDisplayP3ToLinearSRGB":t===Go&&e===Wo&&(i="LinearSRGBToLinearDisplayP3"),n){case Xn:case la:return[i,"LinearTransferOETF"];case Ae:case Kl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Vh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+gv(n.getShaderSource(t),o)}else return s}function xv(n,t){const e=_v(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function vv(n,t){let e;switch(t){case Am:e="Linear";break;case Cm:e="Reinhard";break;case Rm:e="OptimizedCineon";break;case Pm:e="ACESFilmic";break;case Dm:e="AgX";break;case Lm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function yv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ys).join(`
`)}function bv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ys).join(`
`)}function Mv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Sv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ys(n){return n!==""}function Gh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(n){return n.replace(Ev,wv)}const Tv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function wv(n,t){let e=Wt[t];if(e===void 0){const i=Tv.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Dl(e)}const Av=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(n){return n.replace(Av,Cv)}function Cv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $h(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ud?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===em?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function Pv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case As:case Cs:t="ENVMAP_TYPE_CUBE";break;case aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cs:t="ENVMAP_MODE_REFRACTION";break}return t}function Dv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Nd:t="ENVMAP_BLENDING_MULTIPLY";break;case Tm:t="ENVMAP_BLENDING_MIX";break;case wm:t="ENVMAP_BLENDING_ADD";break}return t}function Iv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Ov(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Rv(e),c=Pv(e),h=Lv(e),u=Dv(e),d=Iv(e),f=e.isWebGL2?"":yv(e),g=bv(e),_=Mv(r),p=s.createProgram();let m,b,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ys).join(`
`),m.length>0&&(m+=`
`),b=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ys).join(`
`),b.length>0&&(b+=`
`)):(m=[$h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),b=[f,$h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Wt.tonemapping_pars_fragment:"",e.toneMapping!==ri?vv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,xv("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ys).join(`
`)),o=Dl(o),o=Gh(o,e),o=Wh(o,e),a=Dl(a),a=Gh(a,e),a=Wh(a,e),o=Xh(o),a=Xh(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,b=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const y=x+m+o,C=x+b+a,T=Hh(s,s.VERTEX_SHADER,y),E=Hh(s,s.FRAGMENT_SHADER,C);s.attachShader(p,T),s.attachShader(p,E),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function L(B){if(n.debug.checkShaderErrors){const j=s.getProgramInfoLog(p).trim(),I=s.getShaderInfoLog(T).trim(),F=s.getShaderInfoLog(E).trim();let H=!0,Y=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,T,E);else{const K=Vh(s,T,"vertex"),q=Vh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+K+`
`+q)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(I===""||F==="")&&(Y=!1);Y&&(B.diagnostics={runnable:H,programLog:j,vertexShader:{log:I,prefix:m},fragmentShader:{log:F,prefix:b}})}s.deleteShader(T),s.deleteShader(E),v=new Oo(s,p),S=Sv(s,p)}let v;this.getUniforms=function(){return v===void 0&&L(this),v};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(p,pv)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mv++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=E,this}let Uv=0;class Nv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Fv(t),e.set(t,i)),i}}class Fv{constructor(t){this.id=Uv++,this.code=t,this.usedTimes=0}}function Bv(n,t,e,i,s,r,o){const a=new Zd,l=new Nv,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function p(v,S,D,B,j){const I=B.fog,F=j.geometry,H=v.isMeshStandardMaterial?B.environment:null,Y=(v.isMeshStandardMaterial?e:t).get(v.envMap||H),K=Y&&Y.mapping===aa?Y.image.height:null,q=g[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const tt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,nt=tt!==void 0?tt.length:0;let ft=0;F.morphAttributes.position!==void 0&&(ft=1),F.morphAttributes.normal!==void 0&&(ft=2),F.morphAttributes.color!==void 0&&(ft=3);let W,et,mt,Mt;if(q){const me=An[q];W=me.vertexShader,et=me.fragmentShader}else W=v.vertexShader,et=v.fragmentShader,l.update(v),mt=l.getVertexShaderID(v),Mt=l.getFragmentShaderID(v);const St=n.getRenderTarget(),It=j.isInstancedMesh===!0,Ft=j.isBatchedMesh===!0,wt=!!v.map,Nt=!!v.matcap,U=!!Y,dt=!!v.aoMap,J=!!v.lightMap,lt=!!v.bumpMap,Z=!!v.normalMap,At=!!v.displacementMap,xt=!!v.emissiveMap,A=!!v.metalnessMap,M=!!v.roughnessMap,k=v.anisotropy>0,ot=v.clearcoat>0,st=v.iridescence>0,it=v.sheen>0,Tt=v.transmission>0,gt=k&&!!v.anisotropyMap,yt=ot&&!!v.clearcoatMap,Lt=ot&&!!v.clearcoatNormalMap,zt=ot&&!!v.clearcoatRoughnessMap,rt=st&&!!v.iridescenceMap,Jt=st&&!!v.iridescenceThicknessMap,Xt=it&&!!v.sheenColorMap,Bt=it&&!!v.sheenRoughnessMap,Pt=!!v.specularMap,vt=!!v.specularColorMap,P=!!v.specularIntensityMap,ht=Tt&&!!v.transmissionMap,Ct=Tt&&!!v.thicknessMap,Et=!!v.gradientMap,at=!!v.alphaMap,N=v.alphaTest>0,ut=!!v.alphaHash,_t=!!v.extensions,Ot=!!F.attributes.uv1,Dt=!!F.attributes.uv2,jt=!!F.attributes.uv3;let Kt=ri;return v.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(Kt=n.toneMapping),{isWebGL2:h,shaderID:q,shaderType:v.type,shaderName:v.name,vertexShader:W,fragmentShader:et,defines:v.defines,customVertexShaderID:mt,customFragmentShaderID:Mt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ft,instancing:It,instancingColor:It&&j.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:St===null?n.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Xn,map:wt,matcap:Nt,envMap:U,envMapMode:U&&Y.mapping,envMapCubeUVHeight:K,aoMap:dt,lightMap:J,bumpMap:lt,normalMap:Z,displacementMap:d&&At,emissiveMap:xt,normalMapObjectSpace:Z&&v.normalMapType===Xm,normalMapTangentSpace:Z&&v.normalMapType===Wm,metalnessMap:A,roughnessMap:M,anisotropy:k,anisotropyMap:gt,clearcoat:ot,clearcoatMap:yt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:zt,iridescence:st,iridescenceMap:rt,iridescenceThicknessMap:Jt,sheen:it,sheenColorMap:Xt,sheenRoughnessMap:Bt,specularMap:Pt,specularColorMap:vt,specularIntensityMap:P,transmission:Tt,transmissionMap:ht,thicknessMap:Ct,gradientMap:Et,opaque:v.transparent===!1&&v.blending===Ri,alphaMap:at,alphaTest:N,alphaHash:ut,combine:v.combine,mapUv:wt&&_(v.map.channel),aoMapUv:dt&&_(v.aoMap.channel),lightMapUv:J&&_(v.lightMap.channel),bumpMapUv:lt&&_(v.bumpMap.channel),normalMapUv:Z&&_(v.normalMap.channel),displacementMapUv:At&&_(v.displacementMap.channel),emissiveMapUv:xt&&_(v.emissiveMap.channel),metalnessMapUv:A&&_(v.metalnessMap.channel),roughnessMapUv:M&&_(v.roughnessMap.channel),anisotropyMapUv:gt&&_(v.anisotropyMap.channel),clearcoatMapUv:yt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&_(v.sheenRoughnessMap.channel),specularMapUv:Pt&&_(v.specularMap.channel),specularColorMapUv:vt&&_(v.specularColorMap.channel),specularIntensityMapUv:P&&_(v.specularIntensityMap.channel),transmissionMapUv:ht&&_(v.transmissionMap.channel),thicknessMapUv:Ct&&_(v.thicknessMap.channel),alphaMapUv:at&&_(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Z||k),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ot,vertexUv2s:Dt,vertexUv3s:jt,pointsUvs:j.isPoints===!0&&!!F.attributes.uv&&(wt||at),fog:!!I,useFog:v.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:j.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:ft,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Kt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:wt&&v.map.isVideoTexture===!0&&se.getTransfer(v.map.colorSpace)===oe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===tn,flipSided:v.side===qe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:_t&&v.extensions.derivatives===!0,extensionFragDepth:_t&&v.extensions.fragDepth===!0,extensionDrawBuffers:_t&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:_t&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_t&&v.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)S.push(D),S.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(b(S,v),x(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function b(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function x(v,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function y(v){const S=g[v.type];let D;if(S){const B=An[S];D=vg.clone(B.uniforms)}else D=v.uniforms;return D}function C(v,S){let D;for(let B=0,j=c.length;B<j;B++){const I=c[B];if(I.cacheKey===S){D=I,++D.usedTimes;break}}return D===void 0&&(D=new Ov(n,S,v,r),c.push(D)),D}function T(v){if(--v.usedTimes===0){const S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),v.destroy()}}function E(v){l.remove(v)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:C,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:L}}function kv(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function zv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function qh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Yh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,f,g,_,p){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},n[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function a(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,g,_,p){const m=o(u,d,f,g,_,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||zv),i.length>1&&i.sort(d||qh),s.length>1&&s.sort(d||qh)}function h(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Hv(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Yh,n.set(i,[o])):s>=r.length?(o=new Yh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Vv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Zt};break;case"SpotLight":e={position:new O,direction:new O,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function Gv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Wv=0;function Xv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function $v(n,t){const e=new Vv,i=Gv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new O);const r=new O,o=new xe,a=new xe;function l(h,u){let d=0,f=0,g=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let _=0,p=0,m=0,b=0,x=0,y=0,C=0,T=0,E=0,L=0,v=0;h.sort(Xv);const S=u===!0?Math.PI:1;for(let B=0,j=h.length;B<j;B++){const I=h[B],F=I.color,H=I.intensity,Y=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=F.r*H*S,f+=F.g*H*S,g+=F.b*H*S;else if(I.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(I.sh.coefficients[q],H);v++}else if(I.isDirectionalLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity*S),I.castShadow){const tt=I.shadow,nt=i.get(I);nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize=tt.mapSize,s.directionalShadow[_]=nt,s.directionalShadowMap[_]=K,s.directionalShadowMatrix[_]=I.shadow.matrix,y++}s.directional[_]=q,_++}else if(I.isSpotLight){const q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(F).multiplyScalar(H*S),q.distance=Y,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,s.spot[m]=q;const tt=I.shadow;if(I.map&&(s.spotLightMap[E]=I.map,E++,tt.updateMatrices(I),I.castShadow&&L++),s.spotLightMatrix[m]=tt.matrix,I.castShadow){const nt=i.get(I);nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize=tt.mapSize,s.spotShadow[m]=nt,s.spotShadowMap[m]=K,T++}m++}else if(I.isRectAreaLight){const q=e.get(I);q.color.copy(F).multiplyScalar(H),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),s.rectArea[b]=q,b++}else if(I.isPointLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity*S),q.distance=I.distance,q.decay=I.decay,I.castShadow){const tt=I.shadow,nt=i.get(I);nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize=tt.mapSize,nt.shadowCameraNear=tt.camera.near,nt.shadowCameraFar=tt.camera.far,s.pointShadow[p]=nt,s.pointShadowMap[p]=K,s.pointShadowMatrix[p]=I.shadow.matrix,C++}s.point[p]=q,p++}else if(I.isHemisphereLight){const q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(H*S),q.groundColor.copy(I.groundColor).multiplyScalar(H*S),s.hemi[x]=q,x++}}b>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pt.LTC_FLOAT_1,s.rectAreaLTC2=pt.LTC_FLOAT_2):(s.rectAreaLTC1=pt.LTC_HALF_1,s.rectAreaLTC2=pt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pt.LTC_FLOAT_1,s.rectAreaLTC2=pt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=pt.LTC_HALF_1,s.rectAreaLTC2=pt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;const D=s.hash;(D.directionalLength!==_||D.pointLength!==p||D.spotLength!==m||D.rectAreaLength!==b||D.hemiLength!==x||D.numDirectionalShadows!==y||D.numPointShadows!==C||D.numSpotShadows!==T||D.numSpotMaps!==E||D.numLightProbes!==v)&&(s.directional.length=_,s.spot.length=m,s.rectArea.length=b,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=T+E-L,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=v,D.directionalLength=_,D.pointLength=p,D.spotLength=m,D.rectAreaLength=b,D.hemiLength=x,D.numDirectionalShadows=y,D.numPointShadows=C,D.numSpotShadows=T,D.numSpotMaps=E,D.numLightProbes=v,s.version=Wv++)}function c(h,u){let d=0,f=0,g=0,_=0,p=0;const m=u.matrixWorldInverse;for(let b=0,x=h.length;b<x;b++){const y=h[b];if(y.isDirectionalLight){const C=s.directional[d];C.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),d++}else if(y.isSpotLight){const C=s.spot[g];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const C=s.rectArea[_];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const C=s.point[f];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const C=s.hemi[p];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:s}}function jh(n,t){const e=new $v(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function qv(n,t){let e=new WeakMap;function i(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new jh(n,t),e.set(r,[l])):o>=a.length?(l=new jh(n,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:i,dispose:s}}class Yv extends $i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jv extends $i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Kv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jv(n,t,e){let i=new rf;const s=new ct,r=new ct,o=new Pe,a=new Yv({depthPacking:Gm}),l=new jv,c={},h=e.maxTextureSize,u={[li]:qe,[qe]:li,[tn]:tn},d=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Kv,fragmentShader:Zv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new le;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new be(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ud;let m=this.type;this.render=function(T,E,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const v=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),B=n.state;B.setBlending(si),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const j=m!==Bn&&this.type===Bn,I=m===Bn&&this.type!==Bn;for(let F=0,H=T.length;F<H;F++){const Y=T[F],K=Y.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const q=K.getFrameExtents();if(s.multiply(q),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,K.mapSize.y=r.y)),K.map===null||j===!0||I===!0){const nt=this.type!==Bn?{minFilter:He,magFilter:He}:{};K.map!==null&&K.map.dispose(),K.map=new Fi(s.x,s.y,nt),K.map.texture.name=Y.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const tt=K.getViewportCount();for(let nt=0;nt<tt;nt++){const ft=K.getViewport(nt);o.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),B.viewport(o),K.updateMatrices(Y,nt),i=K.getFrustum(),y(E,L,K.camera,Y,this.type)}K.isPointLightShadow!==!0&&this.type===Bn&&b(K,L),K.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(v,S,D)};function b(T,E){const L=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Fi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,L,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,L,f,_,null)}function x(T,E,L,v){let S=null;const D=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)S=D;else if(S=L.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const B=S.uuid,j=E.uuid;let I=c[B];I===void 0&&(I={},c[B]=I);let F=I[j];F===void 0&&(F=S.clone(),I[j]=F,E.addEventListener("dispose",C)),S=F}if(S.visible=E.visible,S.wireframe=E.wireframe,v===Bn?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:u[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=n.properties.get(S);B.light=L}return S}function y(T,E,L,v,S){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Bn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const j=t.update(T),I=T.material;if(Array.isArray(I)){const F=j.groups;for(let H=0,Y=F.length;H<Y;H++){const K=F[H],q=I[K.materialIndex];if(q&&q.visible){const tt=x(T,q,v,S);T.onBeforeShadow(n,T,E,L,j,tt,K),n.renderBufferDirect(L,null,j,tt,T,K),T.onAfterShadow(n,T,E,L,j,tt,K)}}}else if(I.visible){const F=x(T,I,v,S);T.onBeforeShadow(n,T,E,L,j,F,null),n.renderBufferDirect(L,null,j,F,T,null),T.onAfterShadow(n,T,E,L,j,F,null)}}const B=T.children;for(let j=0,I=B.length;j<I;j++)y(B[j],E,L,v,S)}function C(T){T.target.removeEventListener("dispose",C);for(const L in c){const v=c[L],S=T.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}function Qv(n,t,e){const i=e.isWebGL2;function s(){let N=!1;const ut=new Pe;let _t=null;const Ot=new Pe(0,0,0,0);return{setMask:function(Dt){_t!==Dt&&!N&&(n.colorMask(Dt,Dt,Dt,Dt),_t=Dt)},setLocked:function(Dt){N=Dt},setClear:function(Dt,jt,Kt,de,me){me===!0&&(Dt*=de,jt*=de,Kt*=de),ut.set(Dt,jt,Kt,de),Ot.equals(ut)===!1&&(n.clearColor(Dt,jt,Kt,de),Ot.copy(ut))},reset:function(){N=!1,_t=null,Ot.set(-1,0,0,0)}}}function r(){let N=!1,ut=null,_t=null,Ot=null;return{setTest:function(Dt){Dt?Ft(n.DEPTH_TEST):wt(n.DEPTH_TEST)},setMask:function(Dt){ut!==Dt&&!N&&(n.depthMask(Dt),ut=Dt)},setFunc:function(Dt){if(_t!==Dt){switch(Dt){case xm:n.depthFunc(n.NEVER);break;case vm:n.depthFunc(n.ALWAYS);break;case ym:n.depthFunc(n.LESS);break;case Ho:n.depthFunc(n.LEQUAL);break;case bm:n.depthFunc(n.EQUAL);break;case Mm:n.depthFunc(n.GEQUAL);break;case Sm:n.depthFunc(n.GREATER);break;case Em:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_t=Dt}},setLocked:function(Dt){N=Dt},setClear:function(Dt){Ot!==Dt&&(n.clearDepth(Dt),Ot=Dt)},reset:function(){N=!1,ut=null,_t=null,Ot=null}}}function o(){let N=!1,ut=null,_t=null,Ot=null,Dt=null,jt=null,Kt=null,de=null,me=null;return{setTest:function(te){N||(te?Ft(n.STENCIL_TEST):wt(n.STENCIL_TEST))},setMask:function(te){ut!==te&&!N&&(n.stencilMask(te),ut=te)},setFunc:function(te,ve,bn){(_t!==te||Ot!==ve||Dt!==bn)&&(n.stencilFunc(te,ve,bn),_t=te,Ot=ve,Dt=bn)},setOp:function(te,ve,bn){(jt!==te||Kt!==ve||de!==bn)&&(n.stencilOp(te,ve,bn),jt=te,Kt=ve,de=bn)},setLocked:function(te){N=te},setClear:function(te){me!==te&&(n.clearStencil(te),me=te)},reset:function(){N=!1,ut=null,_t=null,Ot=null,Dt=null,jt=null,Kt=null,de=null,me=null}}}const a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,_=[],p=null,m=!1,b=null,x=null,y=null,C=null,T=null,E=null,L=null,v=new Zt(0,0,0),S=0,D=!1,B=null,j=null,I=null,F=null,H=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,q=0;const tt=n.getParameter(n.VERSION);tt.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(tt)[1]),K=q>=1):tt.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),K=q>=2);let nt=null,ft={};const W=n.getParameter(n.SCISSOR_BOX),et=n.getParameter(n.VIEWPORT),mt=new Pe().fromArray(W),Mt=new Pe().fromArray(et);function St(N,ut,_t,Ot){const Dt=new Uint8Array(4),jt=n.createTexture();n.bindTexture(N,jt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Kt=0;Kt<_t;Kt++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(ut,0,n.RGBA,1,1,Ot,0,n.RGBA,n.UNSIGNED_BYTE,Dt):n.texImage2D(ut+Kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Dt);return jt}const It={};It[n.TEXTURE_2D]=St(n.TEXTURE_2D,n.TEXTURE_2D,1),It[n.TEXTURE_CUBE_MAP]=St(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(It[n.TEXTURE_2D_ARRAY]=St(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),It[n.TEXTURE_3D]=St(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ft(n.DEPTH_TEST),l.setFunc(Ho),xt(!1),A(Dc),Ft(n.CULL_FACE),Z(si);function Ft(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function wt(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function Nt(N,ut){return f[N]!==ut?(n.bindFramebuffer(N,ut),f[N]=ut,i&&(N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ut),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ut)),!0):!1}function U(N,ut){let _t=_,Ot=!1;if(N)if(_t=g.get(ut),_t===void 0&&(_t=[],g.set(ut,_t)),N.isWebGLMultipleRenderTargets){const Dt=N.texture;if(_t.length!==Dt.length||_t[0]!==n.COLOR_ATTACHMENT0){for(let jt=0,Kt=Dt.length;jt<Kt;jt++)_t[jt]=n.COLOR_ATTACHMENT0+jt;_t.length=Dt.length,Ot=!0}}else _t[0]!==n.COLOR_ATTACHMENT0&&(_t[0]=n.COLOR_ATTACHMENT0,Ot=!0);else _t[0]!==n.BACK&&(_t[0]=n.BACK,Ot=!0);Ot&&(e.isWebGL2?n.drawBuffers(_t):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(_t))}function dt(N){return p!==N?(n.useProgram(N),p=N,!0):!1}const J={[Ti]:n.FUNC_ADD,[im]:n.FUNC_SUBTRACT,[sm]:n.FUNC_REVERSE_SUBTRACT};if(i)J[Uc]=n.MIN,J[Nc]=n.MAX;else{const N=t.get("EXT_blend_minmax");N!==null&&(J[Uc]=N.MIN_EXT,J[Nc]=N.MAX_EXT)}const lt={[rm]:n.ZERO,[om]:n.ONE,[am]:n.SRC_COLOR,[Ml]:n.SRC_ALPHA,[fm]:n.SRC_ALPHA_SATURATE,[um]:n.DST_COLOR,[cm]:n.DST_ALPHA,[lm]:n.ONE_MINUS_SRC_COLOR,[Sl]:n.ONE_MINUS_SRC_ALPHA,[dm]:n.ONE_MINUS_DST_COLOR,[hm]:n.ONE_MINUS_DST_ALPHA,[pm]:n.CONSTANT_COLOR,[mm]:n.ONE_MINUS_CONSTANT_COLOR,[gm]:n.CONSTANT_ALPHA,[_m]:n.ONE_MINUS_CONSTANT_ALPHA};function Z(N,ut,_t,Ot,Dt,jt,Kt,de,me,te){if(N===si){m===!0&&(wt(n.BLEND),m=!1);return}if(m===!1&&(Ft(n.BLEND),m=!0),N!==nm){if(N!==b||te!==D){if((x!==Ti||T!==Ti)&&(n.blendEquation(n.FUNC_ADD),x=Ti,T=Ti),te)switch(N){case Ri:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xs:n.blendFunc(n.ONE,n.ONE);break;case Ic:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Oc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ri:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xs:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ic:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Oc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,C=null,E=null,L=null,v.set(0,0,0),S=0,b=N,D=te}return}Dt=Dt||ut,jt=jt||_t,Kt=Kt||Ot,(ut!==x||Dt!==T)&&(n.blendEquationSeparate(J[ut],J[Dt]),x=ut,T=Dt),(_t!==y||Ot!==C||jt!==E||Kt!==L)&&(n.blendFuncSeparate(lt[_t],lt[Ot],lt[jt],lt[Kt]),y=_t,C=Ot,E=jt,L=Kt),(de.equals(v)===!1||me!==S)&&(n.blendColor(de.r,de.g,de.b,me),v.copy(de),S=me),b=N,D=!1}function At(N,ut){N.side===tn?wt(n.CULL_FACE):Ft(n.CULL_FACE);let _t=N.side===qe;ut&&(_t=!_t),xt(_t),N.blending===Ri&&N.transparent===!1?Z(si):Z(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const Ot=N.stencilWrite;c.setTest(Ot),Ot&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),k(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Ft(n.SAMPLE_ALPHA_TO_COVERAGE):wt(n.SAMPLE_ALPHA_TO_COVERAGE)}function xt(N){B!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),B=N)}function A(N){N!==Qp?(Ft(n.CULL_FACE),N!==j&&(N===Dc?n.cullFace(n.BACK):N===tm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):wt(n.CULL_FACE),j=N}function M(N){N!==I&&(K&&n.lineWidth(N),I=N)}function k(N,ut,_t){N?(Ft(n.POLYGON_OFFSET_FILL),(F!==ut||H!==_t)&&(n.polygonOffset(ut,_t),F=ut,H=_t)):wt(n.POLYGON_OFFSET_FILL)}function ot(N){N?Ft(n.SCISSOR_TEST):wt(n.SCISSOR_TEST)}function st(N){N===void 0&&(N=n.TEXTURE0+Y-1),nt!==N&&(n.activeTexture(N),nt=N)}function it(N,ut,_t){_t===void 0&&(nt===null?_t=n.TEXTURE0+Y-1:_t=nt);let Ot=ft[_t];Ot===void 0&&(Ot={type:void 0,texture:void 0},ft[_t]=Ot),(Ot.type!==N||Ot.texture!==ut)&&(nt!==_t&&(n.activeTexture(_t),nt=_t),n.bindTexture(N,ut||It[N]),Ot.type=N,Ot.texture=ut)}function Tt(){const N=ft[nt];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function gt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function zt(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Jt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Bt(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function P(N){mt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),mt.copy(N))}function ht(N){Mt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Mt.copy(N))}function Ct(N,ut){let _t=u.get(ut);_t===void 0&&(_t=new WeakMap,u.set(ut,_t));let Ot=_t.get(N);Ot===void 0&&(Ot=n.getUniformBlockIndex(ut,N.name),_t.set(N,Ot))}function Et(N,ut){const Ot=u.get(ut).get(N);h.get(ut)!==Ot&&(n.uniformBlockBinding(ut,Ot,N.__bindingPointIndex),h.set(ut,Ot))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},nt=null,ft={},f={},g=new WeakMap,_=[],p=null,m=!1,b=null,x=null,y=null,C=null,T=null,E=null,L=null,v=new Zt(0,0,0),S=0,D=!1,B=null,j=null,I=null,F=null,H=null,mt.set(0,0,n.canvas.width,n.canvas.height),Mt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ft,disable:wt,bindFramebuffer:Nt,drawBuffers:U,useProgram:dt,setBlending:Z,setMaterial:At,setFlipSided:xt,setCullFace:A,setLineWidth:M,setPolygonOffset:k,setScissorTest:ot,activeTexture:st,bindTexture:it,unbindTexture:Tt,compressedTexImage2D:gt,compressedTexImage3D:yt,texImage2D:Pt,texImage3D:vt,updateUBOMapping:Ct,uniformBlockBinding:Et,texStorage2D:Xt,texStorage3D:Bt,texSubImage2D:Lt,texSubImage3D:zt,compressedTexSubImage2D:rt,compressedTexSubImage3D:Jt,scissor:P,viewport:ht,reset:at}}function ty(n,t,e,i,s,r,o){const a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return f?new OffscreenCanvas(A,M):$o("canvas")}function _(A,M,k,ot){let st=1;if((A.width>ot||A.height>ot)&&(st=ot/Math.max(A.width,A.height)),st<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const it=M?Ll:Math.floor,Tt=it(st*A.width),gt=it(st*A.height);u===void 0&&(u=g(Tt,gt));const yt=k?g(Tt,gt):u;return yt.width=Tt,yt.height=gt,yt.getContext("2d").drawImage(A,0,0,Tt,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Tt+"x"+gt+")."),yt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return uh(A.width)&&uh(A.height)}function m(A){return a?!1:A.wrapS!==gn||A.wrapT!==gn||A.minFilter!==He&&A.minFilter!==rn}function b(A,M){return A.generateMipmaps&&M&&A.minFilter!==He&&A.minFilter!==rn}function x(A){n.generateMipmap(A)}function y(A,M,k,ot,st=!1){if(a===!1)return M;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let it=M;if(M===n.RED&&(k===n.FLOAT&&(it=n.R32F),k===n.HALF_FLOAT&&(it=n.R16F),k===n.UNSIGNED_BYTE&&(it=n.R8)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(it=n.R8UI),k===n.UNSIGNED_SHORT&&(it=n.R16UI),k===n.UNSIGNED_INT&&(it=n.R32UI),k===n.BYTE&&(it=n.R8I),k===n.SHORT&&(it=n.R16I),k===n.INT&&(it=n.R32I)),M===n.RG&&(k===n.FLOAT&&(it=n.RG32F),k===n.HALF_FLOAT&&(it=n.RG16F),k===n.UNSIGNED_BYTE&&(it=n.RG8)),M===n.RGBA){const Tt=st?Vo:se.getTransfer(ot);k===n.FLOAT&&(it=n.RGBA32F),k===n.HALF_FLOAT&&(it=n.RGBA16F),k===n.UNSIGNED_BYTE&&(it=Tt===oe?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function C(A,M,k){return b(A,k)===!0||A.isFramebufferTexture&&A.minFilter!==He&&A.minFilter!==rn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function T(A){return A===He||A===Fc||A===Ca?n.NEAREST:n.LINEAR}function E(A){const M=A.target;M.removeEventListener("dispose",E),v(M),M.isVideoTexture&&h.delete(M)}function L(A){const M=A.target;M.removeEventListener("dispose",L),D(M)}function v(A){const M=i.get(A);if(M.__webglInit===void 0)return;const k=A.source,ot=d.get(k);if(ot){const st=ot[M.__cacheKey];st.usedTimes--,st.usedTimes===0&&S(A),Object.keys(ot).length===0&&d.delete(k)}i.remove(A)}function S(A){const M=i.get(A);n.deleteTexture(M.__webglTexture);const k=A.source,ot=d.get(k);delete ot[M.__cacheKey],o.memory.textures--}function D(A){const M=A.texture,k=i.get(A),ot=i.get(M);if(ot.__webglTexture!==void 0&&(n.deleteTexture(ot.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(k.__webglFramebuffer[st]))for(let it=0;it<k.__webglFramebuffer[st].length;it++)n.deleteFramebuffer(k.__webglFramebuffer[st][it]);else n.deleteFramebuffer(k.__webglFramebuffer[st]);k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[st])}else{if(Array.isArray(k.__webglFramebuffer))for(let st=0;st<k.__webglFramebuffer.length;st++)n.deleteFramebuffer(k.__webglFramebuffer[st]);else n.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let st=0;st<k.__webglColorRenderbuffer.length;st++)k.__webglColorRenderbuffer[st]&&n.deleteRenderbuffer(k.__webglColorRenderbuffer[st]);k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let st=0,it=M.length;st<it;st++){const Tt=i.get(M[st]);Tt.__webglTexture&&(n.deleteTexture(Tt.__webglTexture),o.memory.textures--),i.remove(M[st])}i.remove(M),i.remove(A)}let B=0;function j(){B=0}function I(){const A=B;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),B+=1,A}function F(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function H(A,M){const k=i.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const ot=A.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(k,A,M);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function Y(A,M){const k=i.get(A);if(A.version>0&&k.__version!==A.version){mt(k,A,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function K(A,M){const k=i.get(A);if(A.version>0&&k.__version!==A.version){mt(k,A,M);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function q(A,M){const k=i.get(A);if(A.version>0&&k.__version!==A.version){Mt(k,A,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}const tt={[wl]:n.REPEAT,[gn]:n.CLAMP_TO_EDGE,[Al]:n.MIRRORED_REPEAT},nt={[He]:n.NEAREST,[Fc]:n.NEAREST_MIPMAP_NEAREST,[Ca]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[Im]:n.LINEAR_MIPMAP_NEAREST,[mr]:n.LINEAR_MIPMAP_LINEAR},ft={[$m]:n.NEVER,[Jm]:n.ALWAYS,[qm]:n.LESS,[$d]:n.LEQUAL,[Ym]:n.EQUAL,[Zm]:n.GEQUAL,[jm]:n.GREATER,[Km]:n.NOTEQUAL};function W(A,M,k){if(k?(n.texParameteri(A,n.TEXTURE_WRAP_S,tt[M.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,tt[M.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,tt[M.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,nt[M.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,nt[M.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==gn||M.wrapT!==gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,T(M.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==He&&M.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ft[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ot=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===He||M.minFilter!==Ca&&M.minFilter!==mr||M.type===ei&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===gr&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(A,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function et(A,M){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",E));const ot=M.source;let st=d.get(ot);st===void 0&&(st={},d.set(ot,st));const it=F(M);if(it!==A.__cacheKey){st[it]===void 0&&(st[it]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),st[it].usedTimes++;const Tt=st[A.__cacheKey];Tt!==void 0&&(st[A.__cacheKey].usedTimes--,Tt.usedTimes===0&&S(M)),A.__cacheKey=it,A.__webglTexture=st[it].texture}return k}function mt(A,M,k){let ot=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ot=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ot=n.TEXTURE_3D);const st=et(A,M),it=M.source;e.bindTexture(ot,A.__webglTexture,n.TEXTURE0+k);const Tt=i.get(it);if(it.version!==Tt.__version||st===!0){e.activeTexture(n.TEXTURE0+k);const gt=se.getPrimaries(se.workingColorSpace),yt=M.colorSpace===ln?null:se.getPrimaries(M.colorSpace),Lt=M.colorSpace===ln||gt===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const zt=m(M)&&p(M.image)===!1;let rt=_(M.image,zt,!1,s.maxTextureSize);rt=xt(M,rt);const Jt=p(rt)||a,Xt=r.convert(M.format,M.colorSpace);let Bt=r.convert(M.type),Pt=y(M.internalFormat,Xt,Bt,M.colorSpace,M.isVideoTexture);W(ot,M,Jt);let vt;const P=M.mipmaps,ht=a&&M.isVideoTexture!==!0&&Pt!==Wd,Ct=Tt.__version===void 0||st===!0,Et=C(M,rt,Jt);if(M.isDepthTexture)Pt=n.DEPTH_COMPONENT,a?M.type===ei?Pt=n.DEPTH_COMPONENT32F:M.type===ti?Pt=n.DEPTH_COMPONENT24:M.type===Pi?Pt=n.DEPTH24_STENCIL8:Pt=n.DEPTH_COMPONENT16:M.type===ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Li&&Pt===n.DEPTH_COMPONENT&&M.type!==jl&&M.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ti,Bt=r.convert(M.type)),M.format===Rs&&Pt===n.DEPTH_COMPONENT&&(Pt=n.DEPTH_STENCIL,M.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Pi,Bt=r.convert(M.type))),Ct&&(ht?e.texStorage2D(n.TEXTURE_2D,1,Pt,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,Pt,rt.width,rt.height,0,Xt,Bt,null));else if(M.isDataTexture)if(P.length>0&&Jt){ht&&Ct&&e.texStorage2D(n.TEXTURE_2D,Et,Pt,P[0].width,P[0].height);for(let at=0,N=P.length;at<N;at++)vt=P[at],ht?e.texSubImage2D(n.TEXTURE_2D,at,0,0,vt.width,vt.height,Xt,Bt,vt.data):e.texImage2D(n.TEXTURE_2D,at,Pt,vt.width,vt.height,0,Xt,Bt,vt.data);M.generateMipmaps=!1}else ht?(Ct&&e.texStorage2D(n.TEXTURE_2D,Et,Pt,rt.width,rt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt.width,rt.height,Xt,Bt,rt.data)):e.texImage2D(n.TEXTURE_2D,0,Pt,rt.width,rt.height,0,Xt,Bt,rt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ht&&Ct&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Pt,P[0].width,P[0].height,rt.depth);for(let at=0,N=P.length;at<N;at++)vt=P[at],M.format!==_n?Xt!==null?ht?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,vt.width,vt.height,rt.depth,Xt,vt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,at,Pt,vt.width,vt.height,rt.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?e.texSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,vt.width,vt.height,rt.depth,Xt,Bt,vt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,at,Pt,vt.width,vt.height,rt.depth,0,Xt,Bt,vt.data)}else{ht&&Ct&&e.texStorage2D(n.TEXTURE_2D,Et,Pt,P[0].width,P[0].height);for(let at=0,N=P.length;at<N;at++)vt=P[at],M.format!==_n?Xt!==null?ht?e.compressedTexSubImage2D(n.TEXTURE_2D,at,0,0,vt.width,vt.height,Xt,vt.data):e.compressedTexImage2D(n.TEXTURE_2D,at,Pt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?e.texSubImage2D(n.TEXTURE_2D,at,0,0,vt.width,vt.height,Xt,Bt,vt.data):e.texImage2D(n.TEXTURE_2D,at,Pt,vt.width,vt.height,0,Xt,Bt,vt.data)}else if(M.isDataArrayTexture)ht?(Ct&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,Pt,rt.width,rt.height,rt.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Xt,Bt,rt.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,rt.width,rt.height,rt.depth,0,Xt,Bt,rt.data);else if(M.isData3DTexture)ht?(Ct&&e.texStorage3D(n.TEXTURE_3D,Et,Pt,rt.width,rt.height,rt.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Xt,Bt,rt.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,rt.width,rt.height,rt.depth,0,Xt,Bt,rt.data);else if(M.isFramebufferTexture){if(Ct)if(ht)e.texStorage2D(n.TEXTURE_2D,Et,Pt,rt.width,rt.height);else{let at=rt.width,N=rt.height;for(let ut=0;ut<Et;ut++)e.texImage2D(n.TEXTURE_2D,ut,Pt,at,N,0,Xt,Bt,null),at>>=1,N>>=1}}else if(P.length>0&&Jt){ht&&Ct&&e.texStorage2D(n.TEXTURE_2D,Et,Pt,P[0].width,P[0].height);for(let at=0,N=P.length;at<N;at++)vt=P[at],ht?e.texSubImage2D(n.TEXTURE_2D,at,0,0,Xt,Bt,vt):e.texImage2D(n.TEXTURE_2D,at,Pt,Xt,Bt,vt);M.generateMipmaps=!1}else ht?(Ct&&e.texStorage2D(n.TEXTURE_2D,Et,Pt,rt.width,rt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Xt,Bt,rt)):e.texImage2D(n.TEXTURE_2D,0,Pt,Xt,Bt,rt);b(M,Jt)&&x(ot),Tt.__version=it.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Mt(A,M,k){if(M.image.length!==6)return;const ot=et(A,M),st=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+k);const it=i.get(st);if(st.version!==it.__version||ot===!0){e.activeTexture(n.TEXTURE0+k);const Tt=se.getPrimaries(se.workingColorSpace),gt=M.colorSpace===ln?null:se.getPrimaries(M.colorSpace),yt=M.colorSpace===ln||Tt===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Lt=M.isCompressedTexture||M.image[0].isCompressedTexture,zt=M.image[0]&&M.image[0].isDataTexture,rt=[];for(let at=0;at<6;at++)!Lt&&!zt?rt[at]=_(M.image[at],!1,!0,s.maxCubemapSize):rt[at]=zt?M.image[at].image:M.image[at],rt[at]=xt(M,rt[at]);const Jt=rt[0],Xt=p(Jt)||a,Bt=r.convert(M.format,M.colorSpace),Pt=r.convert(M.type),vt=y(M.internalFormat,Bt,Pt,M.colorSpace),P=a&&M.isVideoTexture!==!0,ht=it.__version===void 0||ot===!0;let Ct=C(M,Jt,Xt);W(n.TEXTURE_CUBE_MAP,M,Xt);let Et;if(Lt){P&&ht&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,vt,Jt.width,Jt.height);for(let at=0;at<6;at++){Et=rt[at].mipmaps;for(let N=0;N<Et.length;N++){const ut=Et[N];M.format!==_n?Bt!==null?P?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,N,0,0,ut.width,ut.height,Bt,ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,N,vt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,N,0,0,ut.width,ut.height,Bt,Pt,ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,N,vt,ut.width,ut.height,0,Bt,Pt,ut.data)}}}else{Et=M.mipmaps,P&&ht&&(Et.length>0&&Ct++,e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,vt,rt[0].width,rt[0].height));for(let at=0;at<6;at++)if(zt){P?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,rt[at].width,rt[at].height,Bt,Pt,rt[at].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,vt,rt[at].width,rt[at].height,0,Bt,Pt,rt[at].data);for(let N=0;N<Et.length;N++){const _t=Et[N].image[at].image;P?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,N+1,0,0,_t.width,_t.height,Bt,Pt,_t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,N+1,vt,_t.width,_t.height,0,Bt,Pt,_t.data)}}else{P?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Bt,Pt,rt[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,vt,Bt,Pt,rt[at]);for(let N=0;N<Et.length;N++){const ut=Et[N];P?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,N+1,0,0,Bt,Pt,ut.image[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,N+1,vt,Bt,Pt,ut.image[at])}}}b(M,Xt)&&x(n.TEXTURE_CUBE_MAP),it.__version=st.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function St(A,M,k,ot,st,it){const Tt=r.convert(k.format,k.colorSpace),gt=r.convert(k.type),yt=y(k.internalFormat,Tt,gt,k.colorSpace);if(!i.get(M).__hasExternalTextures){const zt=Math.max(1,M.width>>it),rt=Math.max(1,M.height>>it);st===n.TEXTURE_3D||st===n.TEXTURE_2D_ARRAY?e.texImage3D(st,it,yt,zt,rt,M.depth,0,Tt,gt,null):e.texImage2D(st,it,yt,zt,rt,0,Tt,gt,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),Z(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,st,i.get(k).__webglTexture,0,lt(M)):(st===n.TEXTURE_2D||st>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ot,st,i.get(k).__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function It(A,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let ot=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(k||Z(M)){const st=M.depthTexture;st&&st.isDepthTexture&&(st.type===ei?ot=n.DEPTH_COMPONENT32F:st.type===ti&&(ot=n.DEPTH_COMPONENT24));const it=lt(M);Z(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,ot,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,it,ot,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,ot,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const ot=lt(M);k&&Z(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,n.DEPTH24_STENCIL8,M.width,M.height):Z(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const ot=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let st=0;st<ot.length;st++){const it=ot[st],Tt=r.convert(it.format,it.colorSpace),gt=r.convert(it.type),yt=y(it.internalFormat,Tt,gt,it.colorSpace),Lt=lt(M);k&&Z(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,yt,M.width,M.height):Z(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt,yt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,yt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ft(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);const ot=i.get(M.depthTexture).__webglTexture,st=lt(M);if(M.depthTexture.format===Li)Z(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0);else if(M.depthTexture.format===Rs)Z(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function wt(A){const M=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ft(M.__webglFramebuffer,A)}else if(k){M.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ot]),M.__webglDepthbuffer[ot]=n.createRenderbuffer(),It(M.__webglDepthbuffer[ot],A,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),It(M.__webglDepthbuffer,A,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(A,M,k){const ot=i.get(A);M!==void 0&&St(ot.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&wt(A)}function U(A){const M=A.texture,k=i.get(A),ot=i.get(M);A.addEventListener("dispose",L),A.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture()),ot.__version=M.version,o.memory.textures++);const st=A.isWebGLCubeRenderTarget===!0,it=A.isWebGLMultipleRenderTargets===!0,Tt=p(A)||a;if(st){k.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[gt]=[];for(let yt=0;yt<M.mipmaps.length;yt++)k.__webglFramebuffer[gt][yt]=n.createFramebuffer()}else k.__webglFramebuffer[gt]=n.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let gt=0;gt<M.mipmaps.length;gt++)k.__webglFramebuffer[gt]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(it)if(s.drawBuffers){const gt=A.texture;for(let yt=0,Lt=gt.length;yt<Lt;yt++){const zt=i.get(gt[yt]);zt.__webglTexture===void 0&&(zt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Z(A)===!1){const gt=it?M:[M];k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let yt=0;yt<gt.length;yt++){const Lt=gt[yt];k.__webglColorRenderbuffer[yt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[yt]);const zt=r.convert(Lt.format,Lt.colorSpace),rt=r.convert(Lt.type),Jt=y(Lt.internalFormat,zt,rt,Lt.colorSpace,A.isXRRenderTarget===!0),Xt=lt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt,Jt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,k.__webglColorRenderbuffer[yt])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),It(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(st){e.bindTexture(n.TEXTURE_CUBE_MAP,ot.__webglTexture),W(n.TEXTURE_CUBE_MAP,M,Tt);for(let gt=0;gt<6;gt++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let yt=0;yt<M.mipmaps.length;yt++)St(k.__webglFramebuffer[gt][yt],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt);else St(k.__webglFramebuffer[gt],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);b(M,Tt)&&x(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){const gt=A.texture;for(let yt=0,Lt=gt.length;yt<Lt;yt++){const zt=gt[yt],rt=i.get(zt);e.bindTexture(n.TEXTURE_2D,rt.__webglTexture),W(n.TEXTURE_2D,zt,Tt),St(k.__webglFramebuffer,A,zt,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,0),b(zt,Tt)&&x(n.TEXTURE_2D)}e.unbindTexture()}else{let gt=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?gt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(gt,ot.__webglTexture),W(gt,M,Tt),a&&M.mipmaps&&M.mipmaps.length>0)for(let yt=0;yt<M.mipmaps.length;yt++)St(k.__webglFramebuffer[yt],A,M,n.COLOR_ATTACHMENT0,gt,yt);else St(k.__webglFramebuffer,A,M,n.COLOR_ATTACHMENT0,gt,0);b(M,Tt)&&x(gt),e.unbindTexture()}A.depthBuffer&&wt(A)}function dt(A){const M=p(A)||a,k=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ot=0,st=k.length;ot<st;ot++){const it=k[ot];if(b(it,M)){const Tt=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,gt=i.get(it).__webglTexture;e.bindTexture(Tt,gt),x(Tt),e.unbindTexture()}}}function J(A){if(a&&A.samples>0&&Z(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],k=A.width,ot=A.height;let st=n.COLOR_BUFFER_BIT;const it=[],Tt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(A),yt=A.isWebGLMultipleRenderTargets===!0;if(yt)for(let Lt=0;Lt<M.length;Lt++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Lt=0;Lt<M.length;Lt++){it.push(n.COLOR_ATTACHMENT0+Lt),A.depthBuffer&&it.push(Tt);const zt=gt.__ignoreDepthValues!==void 0?gt.__ignoreDepthValues:!1;if(zt===!1&&(A.depthBuffer&&(st|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(st|=n.STENCIL_BUFFER_BIT)),yt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[Lt]),zt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Tt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Tt])),yt){const rt=i.get(M[Lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,rt,0)}n.blitFramebuffer(0,0,k,ot,0,0,k,ot,st,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),yt)for(let Lt=0;Lt<M.length;Lt++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,gt.__webglColorRenderbuffer[Lt]);const zt=i.get(M[Lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}}function lt(A){return Math.min(s.maxSamples,A.samples)}function Z(A){const M=i.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function At(A){const M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function xt(A,M){const k=A.colorSpace,ot=A.format,st=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Rl||k!==Xn&&k!==ln&&(se.getTransfer(k)===oe?a===!1?t.has("EXT_sRGB")===!0&&ot===_n?(A.format=Rl,A.minFilter=rn,A.generateMipmaps=!1):M=Yd.sRGBToLinear(M):(ot!==_n||st!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}this.allocateTextureUnit=I,this.resetTextureUnits=j,this.setTexture2D=H,this.setTexture2DArray=Y,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=Nt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Z}function ey(n,t,e){const i=e.isWebGL2;function s(r,o=ln){let a;const l=se.getTransfer(o);if(r===oi)return n.UNSIGNED_BYTE;if(r===kd)return n.UNSIGNED_SHORT_4_4_4_4;if(r===zd)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Om)return n.BYTE;if(r===Um)return n.SHORT;if(r===jl)return n.UNSIGNED_SHORT;if(r===Bd)return n.INT;if(r===ti)return n.UNSIGNED_INT;if(r===ei)return n.FLOAT;if(r===gr)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Nm)return n.ALPHA;if(r===_n)return n.RGBA;if(r===Fm)return n.LUMINANCE;if(r===Bm)return n.LUMINANCE_ALPHA;if(r===Li)return n.DEPTH_COMPONENT;if(r===Rs)return n.DEPTH_STENCIL;if(r===Rl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===km)return n.RED;if(r===Hd)return n.RED_INTEGER;if(r===zm)return n.RG;if(r===Vd)return n.RG_INTEGER;if(r===Gd)return n.RGBA_INTEGER;if(r===Ra||r===Pa||r===La||r===Da)if(l===oe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ra)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===La)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ra)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===La)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Da)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bc||r===kc||r===zc||r===Hc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Bc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Wd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Vc||r===Gc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Vc)return l===oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Gc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wc||r===Xc||r===$c||r===qc||r===Yc||r===jc||r===Kc||r===Zc||r===Jc||r===Qc||r===th||r===eh||r===nh||r===ih)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Wc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$c)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qc)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===th)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===eh)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nh)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ih)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ia||r===sh||r===rh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Ia)return l===oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===rh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Hm||r===oh||r===ah||r===lh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ia)return a.COMPRESSED_RED_RGTC1_EXT;if(r===oh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ah)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Pi?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class ny extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ze extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iy={type:"move"};class il{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ze;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class sy extends Xi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=e.getContextAttributes();let p=null,m=null;const b=[],x=[],y=new ct;let C=null;const T=new on;T.layers.enable(1),T.viewport=new Pe;const E=new on;E.layers.enable(2),E.viewport=new Pe;const L=[T,E],v=new ny;v.layers.enable(1),v.layers.enable(2);let S=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let et=b[W];return et===void 0&&(et=new il,b[W]=et),et.getTargetRaySpace()},this.getControllerGrip=function(W){let et=b[W];return et===void 0&&(et=new il,b[W]=et),et.getGripSpace()},this.getHand=function(W){let et=b[W];return et===void 0&&(et=new il,b[W]=et),et.getHandSpace()};function B(W){const et=x.indexOf(W.inputSource);if(et===-1)return;const mt=b[et];mt!==void 0&&(mt.update(W.inputSource,W.frame,c||o),mt.dispatchEvent({type:W.type,data:W.inputSource}))}function j(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",I);for(let W=0;W<b.length;W++){const et=x[W];et!==null&&(x[W]=null,b[W].disconnect(et))}S=null,D=null,t.setRenderTarget(p),f=null,d=null,u=null,s=null,m=null,ft.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",j),s.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(y),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const et={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new Fi(f.framebufferWidth,f.framebufferHeight,{format:_n,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let et=null,mt=null,Mt=null;_.depth&&(Mt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=_.stencil?Rs:Li,mt=_.stencil?Pi:ti);const St={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(St),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),m=new Fi(d.textureWidth,d.textureHeight,{format:_n,type:oi,depthTexture:new af(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const It=t.properties.get(m);It.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ft.setContext(s),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(W){for(let et=0;et<W.removed.length;et++){const mt=W.removed[et],Mt=x.indexOf(mt);Mt>=0&&(x[Mt]=null,b[Mt].disconnect(mt))}for(let et=0;et<W.added.length;et++){const mt=W.added[et];let Mt=x.indexOf(mt);if(Mt===-1){for(let It=0;It<b.length;It++)if(It>=x.length){x.push(mt),Mt=It;break}else if(x[It]===null){x[It]=mt,Mt=It;break}if(Mt===-1)break}const St=b[Mt];St&&St.connect(mt)}}const F=new O,H=new O;function Y(W,et,mt){F.setFromMatrixPosition(et.matrixWorld),H.setFromMatrixPosition(mt.matrixWorld);const Mt=F.distanceTo(H),St=et.projectionMatrix.elements,It=mt.projectionMatrix.elements,Ft=St[14]/(St[10]-1),wt=St[14]/(St[10]+1),Nt=(St[9]+1)/St[5],U=(St[9]-1)/St[5],dt=(St[8]-1)/St[0],J=(It[8]+1)/It[0],lt=Ft*dt,Z=Ft*J,At=Mt/(-dt+J),xt=At*-dt;et.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(xt),W.translateZ(At),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const A=Ft+At,M=wt+At,k=lt-xt,ot=Z+(Mt-xt),st=Nt*wt/M*A,it=U*wt/M*A;W.projectionMatrix.makePerspective(k,ot,st,it,A,M),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function K(W,et){et===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(et.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;v.near=E.near=T.near=W.near,v.far=E.far=T.far=W.far,(S!==v.near||D!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,D=v.far);const et=W.parent,mt=v.cameras;K(v,et);for(let Mt=0;Mt<mt.length;Mt++)K(mt[Mt],et);mt.length===2?Y(v,T,E):v.projectionMatrix.copy(T.projectionMatrix),q(W,v,et)};function q(W,et,mt){mt===null?W.matrix.copy(et.matrixWorld):(W.matrix.copy(mt.matrixWorld),W.matrix.invert(),W.matrix.multiply(et.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Pl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)};let tt=null;function nt(W,et){if(h=et.getViewerPose(c||o),g=et,h!==null){const mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(m,f.framebuffer),t.setRenderTarget(m));let Mt=!1;mt.length!==v.cameras.length&&(v.cameras.length=0,Mt=!0);for(let St=0;St<mt.length;St++){const It=mt[St];let Ft=null;if(f!==null)Ft=f.getViewport(It);else{const Nt=u.getViewSubImage(d,It);Ft=Nt.viewport,St===0&&(t.setRenderTargetTextures(m,Nt.colorTexture,d.ignoreDepthValues?void 0:Nt.depthStencilTexture),t.setRenderTarget(m))}let wt=L[St];wt===void 0&&(wt=new on,wt.layers.enable(St),wt.viewport=new Pe,L[St]=wt),wt.matrix.fromArray(It.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(It.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),St===0&&(v.matrix.copy(wt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Mt===!0&&v.cameras.push(wt)}}for(let mt=0;mt<b.length;mt++){const Mt=x[mt],St=b[mt];Mt!==null&&St!==void 0&&St.update(Mt,et,c||o)}tt&&tt(W,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}const ft=new of;ft.setAnimationLoop(nt),this.setAnimationLoop=function(W){tt=W},this.dispose=function(){}}}function ry(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,ef(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,b,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===qe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===qe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=t.get(m).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*x,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qe&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function oy(n,t,e,i){let s={},r={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,x){const y=x.program;i.uniformBlockBinding(b,y)}function c(b,x){let y=s[b.id];y===void 0&&(g(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",p));const C=x.program;i.updateUBOMapping(b,C);const T=t.render.frame;r[b.id]!==T&&(d(b),r[b.id]=T)}function h(b){const x=u();b.__bindingPointIndex=x;const y=n.createBuffer(),C=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=s[b.id],y=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,E=y.length;T<E;T++){const L=Array.isArray(y[T])?y[T]:[y[T]];for(let v=0,S=L.length;v<S;v++){const D=L[v];if(f(D,T,v,C)===!0){const B=D.__offset,j=Array.isArray(D.value)?D.value:[D.value];let I=0;for(let F=0;F<j.length;F++){const H=j[F],Y=_(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,B+I,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,I),I+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,x,y,C){const T=b.value,E=x+"_"+y;if(C[E]===void 0)return typeof T=="number"||typeof T=="boolean"?C[E]=T:C[E]=T.clone(),!0;{const L=C[E];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return C[E]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(b){const x=b.uniforms;let y=0;const C=16;for(let E=0,L=x.length;E<L;E++){const v=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,D=v.length;S<D;S++){const B=v[S],j=Array.isArray(B.value)?B.value:[B.value];for(let I=0,F=j.length;I<F;I++){const H=j[I],Y=_(H),K=y%C;K!==0&&C-K<Y.boundary&&(y+=C-K),B.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=Y.storage}}}const T=y%C;return T>0&&(y+=C-T),b.__size=y,b.__cache={},this}function _(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function p(b){const x=b.target;x.removeEventListener("dispose",p);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class ff{constructor(t={}){const{canvas:e=eg(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this._useLegacyLights=!1,this.toneMapping=ri,this.toneMappingExposure=1;const x=this;let y=!1,C=0,T=0,E=null,L=-1,v=null;const S=new Pe,D=new Pe;let B=null;const j=new Zt(0);let I=0,F=e.width,H=e.height,Y=1,K=null,q=null;const tt=new Pe(0,0,F,H),nt=new Pe(0,0,F,H);let ft=!1;const W=new rf;let et=!1,mt=!1,Mt=null;const St=new xe,It=new ct,Ft=new O,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return E===null?Y:1}let U=i;function dt(R,z){for(let G=0;G<R.length;G++){const X=R[G],V=e.getContext(X,z);if(V!==null)return V}return null}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yl}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",ut,!1),U===null){const z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),U=dt(z,R),U===null)throw dt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let J,lt,Z,At,xt,A,M,k,ot,st,it,Tt,gt,yt,Lt,zt,rt,Jt,Xt,Bt,Pt,vt,P,ht;function Ct(){J=new gx(U),lt=new cx(U,J,t),J.init(lt),vt=new ey(U,J,lt),Z=new Qv(U,J,lt),At=new vx(U),xt=new kv,A=new ty(U,J,Z,xt,lt,vt,At),M=new ux(x),k=new mx(x),ot=new wg(U,lt),P=new ax(U,J,ot,lt),st=new _x(U,ot,At,P),it=new Sx(U,st,ot,At),Xt=new Mx(U,lt,A),zt=new hx(xt),Tt=new Bv(x,M,k,J,lt,P,zt),gt=new ry(x,xt),yt=new Hv,Lt=new qv(J,lt),Jt=new ox(x,M,k,Z,it,d,l),rt=new Jv(x,it,lt),ht=new oy(U,At,lt,Z),Bt=new lx(U,J,At,lt),Pt=new xx(U,J,At,lt),At.programs=Tt.programs,x.capabilities=lt,x.extensions=J,x.properties=xt,x.renderLists=yt,x.shadowMap=rt,x.state=Z,x.info=At}Ct();const Et=new sy(x,U);this.xr=Et,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=J.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=J.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(F,H,!1))},this.getSize=function(R){return R.set(F,H)},this.setSize=function(R,z,G=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,H=z,e.width=Math.floor(R*Y),e.height=Math.floor(z*Y),G===!0&&(e.style.width=R+"px",e.style.height=z+"px"),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(F*Y,H*Y).floor()},this.setDrawingBufferSize=function(R,z,G){F=R,H=z,Y=G,e.width=Math.floor(R*G),e.height=Math.floor(z*G),this.setViewport(0,0,R,z)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(tt)},this.setViewport=function(R,z,G,X){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,z,G,X),Z.viewport(S.copy(tt).multiplyScalar(Y).floor())},this.getScissor=function(R){return R.copy(nt)},this.setScissor=function(R,z,G,X){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,z,G,X),Z.scissor(D.copy(nt).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ft},this.setScissorTest=function(R){Z.setScissorTest(ft=R)},this.setOpaqueSort=function(R){K=R},this.setTransparentSort=function(R){q=R},this.getClearColor=function(R){return R.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor.apply(Jt,arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha.apply(Jt,arguments)},this.clear=function(R=!0,z=!0,G=!0){let X=0;if(R){let V=!1;if(E!==null){const bt=E.texture.format;V=bt===Gd||bt===Vd||bt===Hd}if(V){const bt=E.texture.type,Rt=bt===oi||bt===ti||bt===jl||bt===Pi||bt===kd||bt===zd,Ut=Jt.getClearColor(),kt=Jt.getClearAlpha(),$t=Ut.r,Ht=Ut.g,Vt=Ut.b;Rt?(f[0]=$t,f[1]=Ht,f[2]=Vt,f[3]=kt,U.clearBufferuiv(U.COLOR,0,f)):(g[0]=$t,g[1]=Ht,g[2]=Vt,g[3]=kt,U.clearBufferiv(U.COLOR,0,g))}else X|=U.COLOR_BUFFER_BIT}z&&(X|=U.DEPTH_BUFFER_BIT),G&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),yt.dispose(),Lt.dispose(),xt.dispose(),M.dispose(),k.dispose(),it.dispose(),P.dispose(),ht.dispose(),Tt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",me),Et.removeEventListener("sessionend",te),Mt&&(Mt.dispose(),Mt=null),ve.stop()};function at(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=At.autoReset,z=rt.enabled,G=rt.autoUpdate,X=rt.needsUpdate,V=rt.type;Ct(),At.autoReset=R,rt.enabled=z,rt.autoUpdate=G,rt.needsUpdate=X,rt.type=V}function ut(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _t(R){const z=R.target;z.removeEventListener("dispose",_t),Ot(z)}function Ot(R){Dt(R),xt.remove(R)}function Dt(R){const z=xt.get(R).programs;z!==void 0&&(z.forEach(function(G){Tt.releaseProgram(G)}),R.isShaderMaterial&&Tt.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,G,X,V,bt){z===null&&(z=wt);const Rt=V.isMesh&&V.matrixWorld.determinant()<0,Ut=Wp(R,z,G,X,V);Z.setMaterial(X,Rt);let kt=G.index,$t=1;if(X.wireframe===!0){if(kt=st.getWireframeAttribute(G),kt===void 0)return;$t=2}const Ht=G.drawRange,Vt=G.attributes.position;let ge=Ht.start*$t,je=(Ht.start+Ht.count)*$t;bt!==null&&(ge=Math.max(ge,bt.start*$t),je=Math.min(je,(bt.start+bt.count)*$t)),kt!==null?(ge=Math.max(ge,0),je=Math.min(je,kt.count)):Vt!=null&&(ge=Math.max(ge,0),je=Math.min(je,Vt.count));const Te=je-ge;if(Te<0||Te===1/0)return;P.setup(V,X,Ut,G,kt);let Pn,he=Bt;if(kt!==null&&(Pn=ot.get(kt),he=Pt,he.setIndex(Pn)),V.isMesh)X.wireframe===!0?(Z.setLineWidth(X.wireframeLinewidth*Nt()),he.setMode(U.LINES)):he.setMode(U.TRIANGLES);else if(V.isLine){let qt=X.linewidth;qt===void 0&&(qt=1),Z.setLineWidth(qt*Nt()),V.isLineSegments?he.setMode(U.LINES):V.isLineLoop?he.setMode(U.LINE_LOOP):he.setMode(U.LINE_STRIP)}else V.isPoints?he.setMode(U.POINTS):V.isSprite&&he.setMode(U.TRIANGLES);if(V.isBatchedMesh)he.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)he.renderInstances(ge,Te,V.count);else if(G.isInstancedBufferGeometry){const qt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ea=Math.min(G.instanceCount,qt);he.renderInstances(ge,Te,Ea)}else he.render(ge,Te)};function jt(R,z,G){R.transparent===!0&&R.side===tn&&R.forceSinglePass===!1?(R.side=qe,R.needsUpdate=!0,Ir(R,z,G),R.side=li,R.needsUpdate=!0,Ir(R,z,G),R.side=tn):Ir(R,z,G)}this.compile=function(R,z,G=null){G===null&&(G=R),p=Lt.get(G),p.init(),b.push(p),G.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),R!==G&&R.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(x._useLegacyLights);const X=new Set;return R.traverse(function(V){const bt=V.material;if(bt)if(Array.isArray(bt))for(let Rt=0;Rt<bt.length;Rt++){const Ut=bt[Rt];jt(Ut,G,V),X.add(Ut)}else jt(bt,G,V),X.add(bt)}),b.pop(),p=null,X},this.compileAsync=function(R,z,G=null){const X=this.compile(R,z,G);return new Promise(V=>{function bt(){if(X.forEach(function(Rt){xt.get(Rt).currentProgram.isReady()&&X.delete(Rt)}),X.size===0){V(R);return}setTimeout(bt,10)}J.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Kt=null;function de(R){Kt&&Kt(R)}function me(){ve.stop()}function te(){ve.start()}const ve=new of;ve.setAnimationLoop(de),typeof self<"u"&&ve.setContext(self),this.setAnimationLoop=function(R){Kt=R,Et.setAnimationLoop(R),R===null?ve.stop():ve.start()},Et.addEventListener("sessionstart",me),Et.addEventListener("sessionend",te),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(z),z=Et.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,z,E),p=Lt.get(R,b.length),p.init(),b.push(p),St.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),W.setFromProjectionMatrix(St),mt=this.localClippingEnabled,et=zt.init(this.clippingPlanes,mt),_=yt.get(R,m.length),_.init(),m.push(_),bn(R,z,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(K,q),this.info.render.frame++,et===!0&&zt.beginShadows();const G=p.state.shadowsArray;if(rt.render(G,R,z),et===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Jt.render(_,R),p.setupLights(x._useLegacyLights),z.isArrayCamera){const X=z.cameras;for(let V=0,bt=X.length;V<bt;V++){const Rt=X[V];Tc(_,R,Rt,Rt.viewport)}}else Tc(_,R,z);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(x,R,z),P.resetDefaultState(),L=-1,v=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function bn(R,z,G,X){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)G=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||W.intersectsSprite(R)){X&&Ft.setFromMatrixPosition(R.matrixWorld).applyMatrix4(St);const Rt=it.update(R),Ut=R.material;Ut.visible&&_.push(R,Rt,Ut,G,Ft.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||W.intersectsObject(R))){const Rt=it.update(R),Ut=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ft.copy(R.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Ft.copy(Rt.boundingSphere.center)),Ft.applyMatrix4(R.matrixWorld).applyMatrix4(St)),Array.isArray(Ut)){const kt=Rt.groups;for(let $t=0,Ht=kt.length;$t<Ht;$t++){const Vt=kt[$t],ge=Ut[Vt.materialIndex];ge&&ge.visible&&_.push(R,Rt,ge,G,Ft.z,Vt)}}else Ut.visible&&_.push(R,Rt,Ut,G,Ft.z,null)}}const bt=R.children;for(let Rt=0,Ut=bt.length;Rt<Ut;Rt++)bn(bt[Rt],z,G,X)}function Tc(R,z,G,X){const V=R.opaque,bt=R.transmissive,Rt=R.transparent;p.setupLightsView(G),et===!0&&zt.setGlobalState(x.clippingPlanes,G),bt.length>0&&Gp(V,bt,z,G),X&&Z.viewport(S.copy(X)),V.length>0&&Dr(V,z,G),bt.length>0&&Dr(bt,z,G),Rt.length>0&&Dr(Rt,z,G),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Gp(R,z,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const bt=lt.isWebGL2;Mt===null&&(Mt=new Fi(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?gr:oi,minFilter:mr,samples:bt?4:0})),x.getDrawingBufferSize(It),bt?Mt.setSize(It.x,It.y):Mt.setSize(Ll(It.x),Ll(It.y));const Rt=x.getRenderTarget();x.setRenderTarget(Mt),x.getClearColor(j),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();const Ut=x.toneMapping;x.toneMapping=ri,Dr(R,G,X),A.updateMultisampleRenderTarget(Mt),A.updateRenderTargetMipmap(Mt);let kt=!1;for(let $t=0,Ht=z.length;$t<Ht;$t++){const Vt=z[$t],ge=Vt.object,je=Vt.geometry,Te=Vt.material,Pn=Vt.group;if(Te.side===tn&&ge.layers.test(X.layers)){const he=Te.side;Te.side=qe,Te.needsUpdate=!0,wc(ge,G,X,je,Te,Pn),Te.side=he,Te.needsUpdate=!0,kt=!0}}kt===!0&&(A.updateMultisampleRenderTarget(Mt),A.updateRenderTargetMipmap(Mt)),x.setRenderTarget(Rt),x.setClearColor(j,I),x.toneMapping=Ut}function Dr(R,z,G){const X=z.isScene===!0?z.overrideMaterial:null;for(let V=0,bt=R.length;V<bt;V++){const Rt=R[V],Ut=Rt.object,kt=Rt.geometry,$t=X===null?Rt.material:X,Ht=Rt.group;Ut.layers.test(G.layers)&&wc(Ut,z,G,kt,$t,Ht)}}function wc(R,z,G,X,V,bt){R.onBeforeRender(x,z,G,X,V,bt),R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(x,z,G,X,R,bt),V.transparent===!0&&V.side===tn&&V.forceSinglePass===!1?(V.side=qe,V.needsUpdate=!0,x.renderBufferDirect(G,z,X,V,R,bt),V.side=li,V.needsUpdate=!0,x.renderBufferDirect(G,z,X,V,R,bt),V.side=tn):x.renderBufferDirect(G,z,X,V,R,bt),R.onAfterRender(x,z,G,X,V,bt)}function Ir(R,z,G){z.isScene!==!0&&(z=wt);const X=xt.get(R),V=p.state.lights,bt=p.state.shadowsArray,Rt=V.state.version,Ut=Tt.getParameters(R,V.state,bt,z,G),kt=Tt.getProgramCacheKey(Ut);let $t=X.programs;X.environment=R.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(R.isMeshStandardMaterial?k:M).get(R.envMap||X.environment),$t===void 0&&(R.addEventListener("dispose",_t),$t=new Map,X.programs=$t);let Ht=$t.get(kt);if(Ht!==void 0){if(X.currentProgram===Ht&&X.lightsStateVersion===Rt)return Cc(R,Ut),Ht}else Ut.uniforms=Tt.getUniforms(R),R.onBuild(G,Ut,x),R.onBeforeCompile(Ut,x),Ht=Tt.acquireProgram(Ut,kt),$t.set(kt,Ht),X.uniforms=Ut.uniforms;const Vt=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Vt.clippingPlanes=zt.uniform),Cc(R,Ut),X.needsLights=$p(R),X.lightsStateVersion=Rt,X.needsLights&&(Vt.ambientLightColor.value=V.state.ambient,Vt.lightProbe.value=V.state.probe,Vt.directionalLights.value=V.state.directional,Vt.directionalLightShadows.value=V.state.directionalShadow,Vt.spotLights.value=V.state.spot,Vt.spotLightShadows.value=V.state.spotShadow,Vt.rectAreaLights.value=V.state.rectArea,Vt.ltc_1.value=V.state.rectAreaLTC1,Vt.ltc_2.value=V.state.rectAreaLTC2,Vt.pointLights.value=V.state.point,Vt.pointLightShadows.value=V.state.pointShadow,Vt.hemisphereLights.value=V.state.hemi,Vt.directionalShadowMap.value=V.state.directionalShadowMap,Vt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Vt.spotShadowMap.value=V.state.spotShadowMap,Vt.spotLightMatrix.value=V.state.spotLightMatrix,Vt.spotLightMap.value=V.state.spotLightMap,Vt.pointShadowMap.value=V.state.pointShadowMap,Vt.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Ht,X.uniformsList=null,Ht}function Ac(R){if(R.uniformsList===null){const z=R.currentProgram.getUniforms();R.uniformsList=Oo.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function Cc(R,z){const G=xt.get(R);G.outputColorSpace=z.outputColorSpace,G.batching=z.batching,G.instancing=z.instancing,G.instancingColor=z.instancingColor,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function Wp(R,z,G,X,V){z.isScene!==!0&&(z=wt),A.resetTextureUnits();const bt=z.fog,Rt=X.isMeshStandardMaterial?z.environment:null,Ut=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Xn,kt=(X.isMeshStandardMaterial?k:M).get(X.envMap||Rt),$t=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ht=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Vt=!!G.morphAttributes.position,ge=!!G.morphAttributes.normal,je=!!G.morphAttributes.color;let Te=ri;X.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Te=x.toneMapping);const Pn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,he=Pn!==void 0?Pn.length:0,qt=xt.get(X),Ea=p.state.lights;if(et===!0&&(mt===!0||R!==v)){const en=R===v&&X.id===L;zt.setState(X,R,en)}let fe=!1;X.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Ea.state.version||qt.outputColorSpace!==Ut||V.isBatchedMesh&&qt.batching===!1||!V.isBatchedMesh&&qt.batching===!0||V.isInstancedMesh&&qt.instancing===!1||!V.isInstancedMesh&&qt.instancing===!0||V.isSkinnedMesh&&qt.skinning===!1||!V.isSkinnedMesh&&qt.skinning===!0||V.isInstancedMesh&&qt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&qt.instancingColor===!1&&V.instanceColor!==null||qt.envMap!==kt||X.fog===!0&&qt.fog!==bt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==zt.numPlanes||qt.numIntersection!==zt.numIntersection)||qt.vertexAlphas!==$t||qt.vertexTangents!==Ht||qt.morphTargets!==Vt||qt.morphNormals!==ge||qt.morphColors!==je||qt.toneMapping!==Te||lt.isWebGL2===!0&&qt.morphTargetsCount!==he)&&(fe=!0):(fe=!0,qt.__version=X.version);let fi=qt.currentProgram;fe===!0&&(fi=Ir(X,z,V));let Rc=!1,zs=!1,Ta=!1;const Ie=fi.getUniforms(),pi=qt.uniforms;if(Z.useProgram(fi.program)&&(Rc=!0,zs=!0,Ta=!0),X.id!==L&&(L=X.id,zs=!0),Rc||v!==R){Ie.setValue(U,"projectionMatrix",R.projectionMatrix),Ie.setValue(U,"viewMatrix",R.matrixWorldInverse);const en=Ie.map.cameraPosition;en!==void 0&&en.setValue(U,Ft.setFromMatrixPosition(R.matrixWorld)),lt.logarithmicDepthBuffer&&Ie.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ie.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),v!==R&&(v=R,zs=!0,Ta=!0)}if(V.isSkinnedMesh){Ie.setOptional(U,V,"bindMatrix"),Ie.setOptional(U,V,"bindMatrixInverse");const en=V.skeleton;en&&(lt.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),Ie.setValue(U,"boneTexture",en.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Ie.setOptional(U,V,"batchingTexture"),Ie.setValue(U,"batchingTexture",V._matricesTexture,A));const wa=G.morphAttributes;if((wa.position!==void 0||wa.normal!==void 0||wa.color!==void 0&&lt.isWebGL2===!0)&&Xt.update(V,G,fi),(zs||qt.receiveShadow!==V.receiveShadow)&&(qt.receiveShadow=V.receiveShadow,Ie.setValue(U,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(pi.envMap.value=kt,pi.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),zs&&(Ie.setValue(U,"toneMappingExposure",x.toneMappingExposure),qt.needsLights&&Xp(pi,Ta),bt&&X.fog===!0&&gt.refreshFogUniforms(pi,bt),gt.refreshMaterialUniforms(pi,X,Y,H,Mt),Oo.upload(U,Ac(qt),pi,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Oo.upload(U,Ac(qt),pi,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ie.setValue(U,"center",V.center),Ie.setValue(U,"modelViewMatrix",V.modelViewMatrix),Ie.setValue(U,"normalMatrix",V.normalMatrix),Ie.setValue(U,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const en=X.uniformsGroups;for(let Aa=0,qp=en.length;Aa<qp;Aa++)if(lt.isWebGL2){const Pc=en[Aa];ht.update(Pc,fi),ht.bind(Pc,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function Xp(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function $p(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,z,G){xt.get(R.texture).__webglTexture=z,xt.get(R.depthTexture).__webglTexture=G;const X=xt.get(R);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,z){const G=xt.get(R);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(R,z=0,G=0){E=R,C=z,T=G;let X=!0,V=null,bt=!1,Rt=!1;if(R){const kt=xt.get(R);kt.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(U.FRAMEBUFFER,null),X=!1):kt.__webglFramebuffer===void 0?A.setupRenderTarget(R):kt.__hasExternalTextures&&A.rebindTextures(R,xt.get(R.texture).__webglTexture,xt.get(R.depthTexture).__webglTexture);const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Rt=!0);const Ht=xt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ht[z])?V=Ht[z][G]:V=Ht[z],bt=!0):lt.isWebGL2&&R.samples>0&&A.useMultisampledRTT(R)===!1?V=xt.get(R).__webglMultisampledFramebuffer:Array.isArray(Ht)?V=Ht[G]:V=Ht,S.copy(R.viewport),D.copy(R.scissor),B=R.scissorTest}else S.copy(tt).multiplyScalar(Y).floor(),D.copy(nt).multiplyScalar(Y).floor(),B=ft;if(Z.bindFramebuffer(U.FRAMEBUFFER,V)&&lt.drawBuffers&&X&&Z.drawBuffers(R,V),Z.viewport(S),Z.scissor(D),Z.setScissorTest(B),bt){const kt=xt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,kt.__webglTexture,G)}else if(Rt){const kt=xt.get(R.texture),$t=z||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,kt.__webglTexture,G||0,$t)}L=-1},this.readRenderTargetPixels=function(R,z,G,X,V,bt,Rt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=xt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ut=Ut[Rt]),Ut){Z.bindFramebuffer(U.FRAMEBUFFER,Ut);try{const kt=R.texture,$t=kt.format,Ht=kt.type;if($t!==_n&&vt.convert($t)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Vt=Ht===gr&&(J.has("EXT_color_buffer_half_float")||lt.isWebGL2&&J.has("EXT_color_buffer_float"));if(Ht!==oi&&vt.convert(Ht)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===ei&&(lt.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-X&&G>=0&&G<=R.height-V&&U.readPixels(z,G,X,V,vt.convert($t),vt.convert(Ht),bt)}finally{const kt=E!==null?xt.get(E).__webglFramebuffer:null;Z.bindFramebuffer(U.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(R,z,G=0){const X=Math.pow(2,-G),V=Math.floor(z.image.width*X),bt=Math.floor(z.image.height*X);A.setTexture2D(z,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,R.x,R.y,V,bt),Z.unbindTexture()},this.copyTextureToTexture=function(R,z,G,X=0){const V=z.image.width,bt=z.image.height,Rt=vt.convert(G.format),Ut=vt.convert(G.type);A.setTexture2D(G,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment),z.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,X,R.x,R.y,V,bt,Rt,Ut,z.image.data):z.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,X,R.x,R.y,z.mipmaps[0].width,z.mipmaps[0].height,Rt,z.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,X,R.x,R.y,Rt,Ut,z.image),X===0&&G.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(R,z,G,X,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const bt=R.max.x-R.min.x+1,Rt=R.max.y-R.min.y+1,Ut=R.max.z-R.min.z+1,kt=vt.convert(X.format),$t=vt.convert(X.type);let Ht;if(X.isData3DTexture)A.setTexture3D(X,0),Ht=U.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)A.setTexture2DArray(X,0),Ht=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,X.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,X.unpackAlignment);const Vt=U.getParameter(U.UNPACK_ROW_LENGTH),ge=U.getParameter(U.UNPACK_IMAGE_HEIGHT),je=U.getParameter(U.UNPACK_SKIP_PIXELS),Te=U.getParameter(U.UNPACK_SKIP_ROWS),Pn=U.getParameter(U.UNPACK_SKIP_IMAGES),he=G.isCompressedTexture?G.mipmaps[V]:G.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,he.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,he.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,R.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,R.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,R.min.z),G.isDataTexture||G.isData3DTexture?U.texSubImage3D(Ht,V,z.x,z.y,z.z,bt,Rt,Ut,kt,$t,he.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ht,V,z.x,z.y,z.z,bt,Rt,Ut,kt,he.data)):U.texSubImage3D(Ht,V,z.x,z.y,z.z,bt,Rt,Ut,kt,$t,he),U.pixelStorei(U.UNPACK_ROW_LENGTH,Vt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ge),U.pixelStorei(U.UNPACK_SKIP_PIXELS,je),U.pixelStorei(U.UNPACK_SKIP_ROWS,Te),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Pn),V===0&&X.generateMipmaps&&U.generateMipmap(Ht),Z.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),Z.unbindTexture()},this.resetState=function(){C=0,T=0,E=null,Z.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Kl?"display-p3":"srgb",e.unpackColorSpace=se.workingColorSpace===la?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ae?Di:Xd}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Di?Ae:Xn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class ay extends ff{}ay.prototype.isWebGL1Renderer=!0;class ly extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class cy{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Cl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Be=new O;class qo{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Vn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),i=re(i,this.array),s=re(s,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new qo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ql extends $i{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ds;const Xs=new O,fs=new O,ps=new O,ms=new ct,$s=new ct,pf=new xe,io=new O,qs=new O,so=new O,Kh=new ct,sl=new ct,Zh=new ct;class mf extends Le{constructor(t=new Ql){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new le;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new cy(e,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new qo(i,3,0,!1)),ds.setAttribute("uv",new qo(i,2,3,!1))}this.geometry=ds,this.material=t,this.center=new ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),pf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ps.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;ro(io.set(-.5,-.5,0),ps,o,fs,s,r),ro(qs.set(.5,-.5,0),ps,o,fs,s,r),ro(so.set(.5,.5,0),ps,o,fs,s,r),Kh.set(0,0),sl.set(1,0),Zh.set(1,1);let a=t.ray.intersectTriangle(io,qs,so,!1,Xs);if(a===null&&(ro(qs.set(-.5,.5,0),ps,o,fs,s,r),sl.set(0,1),a=t.ray.intersectTriangle(io,so,qs,!1,Xs),a===null))return;const l=t.ray.origin.distanceTo(Xs);l<t.near||l>t.far||e.push({distance:l,point:Xs.clone(),uv:Qe.getInterpolation(Xs,io,qs,so,Kh,sl,Zh,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ro(n,t,e,i,s,r){ms.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?($s.x=r*ms.x-s*ms.y,$s.y=s*ms.x+r*ms.y):$s.copy(ms),n.copy(t),n.x+=$s.x,n.y+=$s.y,n.applyMatrix4(pf)}class pn extends $i{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Jh=new O,Qh=new O,tu=new xe,rl=new ca,oo=new Rr;class Es extends Le{constructor(t=new le,e=new pn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Jh.fromBufferAttribute(e,s-1),Qh.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Jh.distanceTo(Qh);t.setAttribute("lineDistance",new ce(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,t.ray.intersectsSphere(oo)===!1)return;tu.copy(s).invert(),rl.copy(t.ray).applyMatrix4(tu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,h=new O,u=new O,d=new O,f=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const m=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let x=m,y=b-1;x<y;x+=f){const C=g.getX(x),T=g.getX(x+1);if(c.fromBufferAttribute(p,C),h.fromBufferAttribute(p,T),rl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(d);L<t.near||L>t.far||e.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),b=Math.min(p.count,o.start+o.count);for(let x=m,y=b-1;x<y;x+=f){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),rl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(d);T<t.near||T>t.far||e.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const eu=new O,nu=new O;class Uo extends Es{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)eu.fromBufferAttribute(e,s),nu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+eu.distanceTo(nu);t.setAttribute("lineDistance",new ce(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hy extends Es{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class gf extends $i{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const iu=new xe,Il=new ca,ao=new Rr,lo=new O;class uy extends Le{constructor(t=new le,e=new gf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ao.copy(i.boundingSphere),ao.applyMatrix4(s),ao.radius+=r,t.ray.intersectsSphere(ao)===!1)return;iu.copy(s).invert(),Il.copy(t.ray).applyMatrix4(iu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const p=c.getX(g);lo.fromBufferAttribute(u,p),su(lo,p,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)lo.fromBufferAttribute(u,g),su(lo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function su(n,t,e,i,s,r,o){const a=Il.distanceSqToPoint(n);if(a<e){const l=new O;Il.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class tc extends Ye{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ct:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new O,s=[],r=[],o=[],a=new O,l=new xe;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ce(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ce(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ec extends Rn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const i=e||new ct,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class dy extends ec{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function nc(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const co=new O,ol=new nc,al=new nc,ll=new nc;class fy extends Rn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new O){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(co.subVectors(s[0],s[1]).add(s[0]),c=co);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(co.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=co),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),ol.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,p),al.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,p),ll.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(ol.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),al.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ll.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(ol.calc(l),al.calc(l),ll.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ru(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function py(n,t){const e=1-n;return e*e*t}function my(n,t){return 2*(1-n)*n*t}function gy(n,t){return n*n*t}function ar(n,t,e,i){return py(n,t)+my(n,e)+gy(n,i)}function _y(n,t){const e=1-n;return e*e*e*t}function xy(n,t){const e=1-n;return 3*e*e*n*t}function vy(n,t){return 3*(1-n)*n*n*t}function yy(n,t){return n*n*n*t}function lr(n,t,e,i,s){return _y(n,t)+xy(n,e)+vy(n,i)+yy(n,s)}class _f extends Rn{constructor(t=new ct,e=new ct,i=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ct){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(lr(t,s.x,r.x,o.x,a.x),lr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class by extends Rn{constructor(t=new O,e=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new O){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(lr(t,s.x,r.x,o.x,a.x),lr(t,s.y,r.y,o.y,a.y),lr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xf extends Rn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class My extends Rn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vf extends Rn{constructor(t=new ct,e=new ct,i=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ct){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(ar(t,s.x,r.x,o.x),ar(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sy extends Rn{constructor(t=new O,e=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new O){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(ar(t,s.x,r.x,o.x),ar(t,s.y,r.y,o.y),ar(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yf extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(ru(a,l.x,c.x,h.x,u.x),ru(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var Ol=Object.freeze({__proto__:null,ArcCurve:dy,CatmullRomCurve3:fy,CubicBezierCurve:_f,CubicBezierCurve3:by,EllipseCurve:ec,LineCurve:xf,LineCurve3:My,QuadraticBezierCurve:vf,QuadraticBezierCurve3:Sy,SplineCurve:yf});class Ey extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ol[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Ol[s.type]().fromJSON(s))}return this}}class ou extends Ey{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new xf(this.currentPoint.clone(),new ct(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new vf(this.currentPoint.clone(),new ct(t,e),new ct(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new _f(this.currentPoint.clone(),new ct(t,e),new ct(i,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new yf(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new ec(t,e,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ii extends le{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],p=i/2;let m=0;b(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(f,2));function b(){const y=new O,C=new O;let T=0;const E=(e-t)/i;for(let L=0;L<=r;L++){const v=[],S=L/r,D=S*(e-t)+t;for(let B=0;B<=s;B++){const j=B/s,I=j*l+a,F=Math.sin(I),H=Math.cos(I);C.x=D*F,C.y=-S*i+p,C.z=D*H,u.push(C.x,C.y,C.z),y.set(F,E,H).normalize(),d.push(y.x,y.y,y.z),f.push(j,1-S),v.push(g++)}_.push(v)}for(let L=0;L<s;L++)for(let v=0;v<r;v++){const S=_[v][L],D=_[v+1][L],B=_[v+1][L+1],j=_[v][L+1];h.push(S,D,j),h.push(D,B,j),T+=6}c.addGroup(m,T,0),m+=T}function x(y){const C=g,T=new ct,E=new O;let L=0;const v=y===!0?t:e,S=y===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,p*S,0),d.push(0,S,0),f.push(.5,.5),g++;const D=g;for(let B=0;B<=s;B++){const I=B/s*l+a,F=Math.cos(I),H=Math.sin(I);E.x=v*H,E.y=p*S,E.z=v*F,u.push(E.x,E.y,E.z),d.push(0,S,0),T.x=F*.5+.5,T.y=H*.5*S+.5,f.push(T.x,T.y),g++}for(let B=0;B<s;B++){const j=C+B,I=D+B;y===!0?h.push(I,I+1,j):h.push(I+1,I,j),L+=3}c.addGroup(m,L,y===!0?1:2),m+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ic extends Ii{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ic(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const ho=new O,uo=new O,cl=new O,fo=new Qe;class au extends le{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(rr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:m}=fo;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),fo.getNormal(cl),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let b=0;b<3;b++){const x=(b+1)%3,y=u[b],C=u[x],T=fo[h[b]],E=fo[h[x]],L=`${y}_${C}`,v=`${C}_${y}`;v in d&&d[v]?(cl.dot(d[v].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(E.x,E.y,E.z)),d[v]=null):L in d||(d[L]={index0:c[b],index1:c[x],normal:cl.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:p}=d[g];ho.fromBufferAttribute(a,_),uo.fromBufferAttribute(a,p),f.push(ho.x,ho.y,ho.z),f.push(uo.x,uo.y,uo.z)}this.setAttribute("position",new ce(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class bf extends ou{constructor(t){super(t),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new ou().fromJSON(s))}return this}}const Ty={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Mf(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(i&&(r=Py(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)u=n[g],d=n[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return _r(r,o,e,a,l,f,0),o}};function Mf(n,t,e,i,s){let r,o;if(s===Hy(n,t,e,i)>0)for(r=t;r<e;r+=i)o=lu(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=lu(r,n[r],n[r+1],o);return o&&da(o,o.next)&&(vr(o),o=o.next),o}function Hi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(da(e,e.next)||ue(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function _r(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Uy(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Ay(n,i,s,r):wy(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),vr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Cy(Hi(n),t,e),_r(n,t,e,i,s,r,2)):o===2&&Ry(n,t,e,i,s,r):_r(Hi(n),t,e,i,s,r,1);break}}}function wy(n){const t=n.prev,e=n,i=n.next;if(ue(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&bs(s,a,r,l,o,c,g.x,g.y)&&ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ay(n,t,e,i){const s=n.prev,r=n,o=n.next;if(ue(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,m=Ul(f,g,t,e,i),b=Ul(_,p,t,e,i);let x=n.prevZ,y=n.nextZ;for(;x&&x.z>=m&&y&&y.z<=b;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&bs(a,h,l,u,c,d,x.x,x.y)&&ue(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&bs(a,h,l,u,c,d,y.x,y.y)&&ue(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&bs(a,h,l,u,c,d,x.x,x.y)&&ue(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=b;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&bs(a,h,l,u,c,d,y.x,y.y)&&ue(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Cy(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!da(s,r)&&Sf(s,i,i.next,r)&&xr(s,r)&&xr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),vr(i),vr(i.next),i=n=r),i=i.next}while(i!==n);return Hi(i)}function Ry(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&By(o,a)){let l=Ef(o,a);o=Hi(o,o.next),l=Hi(l,l.next),_r(o,t,e,i,s,r,0),_r(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Py(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Mf(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Fy(c));for(s.sort(Ly),r=0;r<s.length;r++)e=Dy(s[r],e);return e}function Ly(n,t){return n.x-t.x}function Dy(n,t){const e=Iy(n,t);if(!e)return t;const i=Ef(e,n);return Hi(i,i.next),Hi(e,e.next)}function Iy(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&bs(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),xr(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Oy(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Oy(n,t){return ue(n.prev,n,t.prev)<0&&ue(t.next,n,n.next)<0}function Uy(n,t,e,i){let s=n;do s.z===0&&(s.z=Ul(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ny(s)}function Ny(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function Ul(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Fy(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function bs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function By(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!ky(n,t)&&(xr(n,t)&&xr(t,n)&&zy(n,t)&&(ue(n.prev,n,t.prev)||ue(n,t.prev,t))||da(n,t)&&ue(n.prev,n,n.next)>0&&ue(t.prev,t,t.next)>0)}function ue(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function da(n,t){return n.x===t.x&&n.y===t.y}function Sf(n,t,e,i){const s=mo(ue(n,t,e)),r=mo(ue(n,t,i)),o=mo(ue(e,i,n)),a=mo(ue(e,i,t));return!!(s!==r&&o!==a||s===0&&po(n,e,t)||r===0&&po(n,i,t)||o===0&&po(e,n,i)||a===0&&po(e,t,i))}function po(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function mo(n){return n>0?1:n<0?-1:0}function ky(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Sf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function xr(n,t){return ue(n.prev,n,n.next)<0?ue(n,t,n.next)>=0&&ue(n,n.prev,t)>=0:ue(n,t,n.prev)<0||ue(n,n.next,t)<0}function zy(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Ef(n,t){const e=new Nl(n.i,n.x,n.y),i=new Nl(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function lu(n,t,e,i){const s=new Nl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function vr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Nl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Hy(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class cr{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return cr.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];cu(t),hu(i,t);let o=t.length;e.forEach(cu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,hu(i,e[l]);const a=Ty.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function cu(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function hu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class sc extends le{constructor(t=new bf([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Vy;let x,y=!1,C,T,E,L;m&&(x=m.getSpacedPoints(h),y=!0,d=!1,C=m.computeFrenetFrames(h,!1),T=new O,E=new O,L=new O),d||(p=0,f=0,g=0,_=0);const v=a.extractPoints(c);let S=v.shape;const D=v.holes;if(!cr.isClockWise(S)){S=S.reverse();for(let U=0,dt=D.length;U<dt;U++){const J=D[U];cr.isClockWise(J)&&(D[U]=J.reverse())}}const j=cr.triangulateShape(S,D),I=S;for(let U=0,dt=D.length;U<dt;U++){const J=D[U];S=S.concat(J)}function F(U,dt,J){return dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(dt,J)}const H=S.length,Y=j.length;function K(U,dt,J){let lt,Z,At;const xt=U.x-dt.x,A=U.y-dt.y,M=J.x-U.x,k=J.y-U.y,ot=xt*xt+A*A,st=xt*k-A*M;if(Math.abs(st)>Number.EPSILON){const it=Math.sqrt(ot),Tt=Math.sqrt(M*M+k*k),gt=dt.x-A/it,yt=dt.y+xt/it,Lt=J.x-k/Tt,zt=J.y+M/Tt,rt=((Lt-gt)*k-(zt-yt)*M)/(xt*k-A*M);lt=gt+xt*rt-U.x,Z=yt+A*rt-U.y;const Jt=lt*lt+Z*Z;if(Jt<=2)return new ct(lt,Z);At=Math.sqrt(Jt/2)}else{let it=!1;xt>Number.EPSILON?M>Number.EPSILON&&(it=!0):xt<-Number.EPSILON?M<-Number.EPSILON&&(it=!0):Math.sign(A)===Math.sign(k)&&(it=!0),it?(lt=-A,Z=xt,At=Math.sqrt(ot)):(lt=xt,Z=A,At=Math.sqrt(ot/2))}return new ct(lt/At,Z/At)}const q=[];for(let U=0,dt=I.length,J=dt-1,lt=U+1;U<dt;U++,J++,lt++)J===dt&&(J=0),lt===dt&&(lt=0),q[U]=K(I[U],I[J],I[lt]);const tt=[];let nt,ft=q.concat();for(let U=0,dt=D.length;U<dt;U++){const J=D[U];nt=[];for(let lt=0,Z=J.length,At=Z-1,xt=lt+1;lt<Z;lt++,At++,xt++)At===Z&&(At=0),xt===Z&&(xt=0),nt[lt]=K(J[lt],J[At],J[xt]);tt.push(nt),ft=ft.concat(nt)}for(let U=0;U<p;U++){const dt=U/p,J=f*Math.cos(dt*Math.PI/2),lt=g*Math.sin(dt*Math.PI/2)+_;for(let Z=0,At=I.length;Z<At;Z++){const xt=F(I[Z],q[Z],lt);St(xt.x,xt.y,-J)}for(let Z=0,At=D.length;Z<At;Z++){const xt=D[Z];nt=tt[Z];for(let A=0,M=xt.length;A<M;A++){const k=F(xt[A],nt[A],lt);St(k.x,k.y,-J)}}}const W=g+_;for(let U=0;U<H;U++){const dt=d?F(S[U],ft[U],W):S[U];y?(E.copy(C.normals[0]).multiplyScalar(dt.x),T.copy(C.binormals[0]).multiplyScalar(dt.y),L.copy(x[0]).add(E).add(T),St(L.x,L.y,L.z)):St(dt.x,dt.y,0)}for(let U=1;U<=h;U++)for(let dt=0;dt<H;dt++){const J=d?F(S[dt],ft[dt],W):S[dt];y?(E.copy(C.normals[U]).multiplyScalar(J.x),T.copy(C.binormals[U]).multiplyScalar(J.y),L.copy(x[U]).add(E).add(T),St(L.x,L.y,L.z)):St(J.x,J.y,u/h*U)}for(let U=p-1;U>=0;U--){const dt=U/p,J=f*Math.cos(dt*Math.PI/2),lt=g*Math.sin(dt*Math.PI/2)+_;for(let Z=0,At=I.length;Z<At;Z++){const xt=F(I[Z],q[Z],lt);St(xt.x,xt.y,u+J)}for(let Z=0,At=D.length;Z<At;Z++){const xt=D[Z];nt=tt[Z];for(let A=0,M=xt.length;A<M;A++){const k=F(xt[A],nt[A],lt);y?St(k.x,k.y+x[h-1].y,x[h-1].x+J):St(k.x,k.y,u+J)}}}et(),mt();function et(){const U=s.length/3;if(d){let dt=0,J=H*dt;for(let lt=0;lt<Y;lt++){const Z=j[lt];It(Z[2]+J,Z[1]+J,Z[0]+J)}dt=h+p*2,J=H*dt;for(let lt=0;lt<Y;lt++){const Z=j[lt];It(Z[0]+J,Z[1]+J,Z[2]+J)}}else{for(let dt=0;dt<Y;dt++){const J=j[dt];It(J[2],J[1],J[0])}for(let dt=0;dt<Y;dt++){const J=j[dt];It(J[0]+H*h,J[1]+H*h,J[2]+H*h)}}i.addGroup(U,s.length/3-U,0)}function mt(){const U=s.length/3;let dt=0;Mt(I,dt),dt+=I.length;for(let J=0,lt=D.length;J<lt;J++){const Z=D[J];Mt(Z,dt),dt+=Z.length}i.addGroup(U,s.length/3-U,1)}function Mt(U,dt){let J=U.length;for(;--J>=0;){const lt=J;let Z=J-1;Z<0&&(Z=U.length-1);for(let At=0,xt=h+p*2;At<xt;At++){const A=H*At,M=H*(At+1),k=dt+lt+A,ot=dt+Z+A,st=dt+Z+M,it=dt+lt+M;Ft(k,ot,st,it)}}}function St(U,dt,J){l.push(U),l.push(dt),l.push(J)}function It(U,dt,J){wt(U),wt(dt),wt(J);const lt=s.length/3,Z=b.generateTopUV(i,s,lt-3,lt-2,lt-1);Nt(Z[0]),Nt(Z[1]),Nt(Z[2])}function Ft(U,dt,J,lt){wt(U),wt(dt),wt(lt),wt(dt),wt(J),wt(lt);const Z=s.length/3,At=b.generateSideWallUV(i,s,Z-6,Z-3,Z-2,Z-1);Nt(At[0]),Nt(At[1]),Nt(At[3]),Nt(At[1]),Nt(At[2]),Nt(At[3])}function wt(U){s.push(l[U*3+0]),s.push(l[U*3+1]),s.push(l[U*3+2])}function Nt(U){r.push(U.x),r.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Gy(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ol[s.type]().fromJSON(s)),new sc(i,t.options)}}const Vy={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new ct(r,o),new ct(a,l),new ct(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ct(o,1-l),new ct(c,1-u),new ct(d,1-g),new ct(_,1-m)]:[new ct(a,1-l),new ct(h,1-u),new ct(f,1-g),new ct(p,1-m)]}};function Gy(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Yo extends le{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,f=new O,g=new ct;for(let _=0;_<=s;_++){for(let p=0;p<=i;p++){const m=r+p/i*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const p=_*(i+1);for(let m=0;m<i;m++){const b=m+p,x=b,y=b+i+1,C=b+i+2,T=b+1;a.push(x,y,T),a.push(y,C,T)}}this.setIndex(a),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class rc extends le{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new O,d=new O,f=[],g=[],_=[],p=[];for(let m=0;m<=i;m++){const b=[],x=m/i;let y=0;m===0&&o===0?y=.5/e:m===i&&l===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){const T=C/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(T+y,1-x),b.push(c++)}h.push(b)}for(let m=0;m<i;m++)for(let b=0;b<e;b++){const x=h[m][b+1],y=h[m][b],C=h[m+1][b],T=h[m+1][b+1];(m!==0||o>0)&&f.push(x,y,T),(m!==i-1||l<Math.PI)&&f.push(y,C,T)}this.setIndex(f),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class uu{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Wy extends Uo{constructor(t=10,e=10,i=4473924,s=8947848){i=new Zt(i),s=new Zt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=e;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=d===r?i:s;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const h=new le;h.setAttribute("position",new ce(l,3)),h.setAttribute("color",new ce(c,3));const u=new pn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const du=new O;let go,hl;class fu extends Le{constructor(t=new O(0,0,1),e=new O(0,0,0),i=1,s=16776960,r=i*.2,o=r*.2){super(),this.type="ArrowHelper",go===void 0&&(go=new le,go.setAttribute("position",new ce([0,0,0,0,1,0],3)),hl=new Ii(0,.5,1,5,1),hl.translate(0,-.5,0)),this.position.copy(e),this.line=new Es(go,new pn({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new be(hl,new wn({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{du.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(du,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yl);const pu={type:"change"},ul={type:"start"},mu={type:"end"},_o=new ca,gu=new Qn,Xy=Math.cos(70*tg.DEG2RAD);class $y extends Xi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yi.ROTATE,MIDDLE:Yi.DOLLY,RIGHT:Yi.PAN},this.touches={ONE:ji.ROTATE,TWO:ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Lt),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Lt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(pu),i.update(),r=s.NONE},this.update=function(){const P=new O,ht=new Bi().setFromUnitVectors(t.up,new O(0,1,0)),Ct=ht.clone().invert(),Et=new O,at=new Bi,N=new O,ut=2*Math.PI;return function(Ot=null){const Dt=i.object.position;P.copy(Dt).sub(i.target),P.applyQuaternion(ht),a.setFromVector3(P),i.autoRotate&&r===s.NONE&&B(S(Ot)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let jt=i.minAzimuthAngle,Kt=i.maxAzimuthAngle;isFinite(jt)&&isFinite(Kt)&&(jt<-Math.PI?jt+=ut:jt>Math.PI&&(jt-=ut),Kt<-Math.PI?Kt+=ut:Kt>Math.PI&&(Kt-=ut),jt<=Kt?a.theta=Math.max(jt,Math.min(Kt,a.theta)):a.theta=a.theta>(jt+Kt)/2?Math.max(jt,a.theta):Math.min(Kt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&T||i.object.isOrthographicCamera?a.radius=tt(a.radius):a.radius=tt(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(Ct),Dt.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let de=!1;if(i.zoomToCursor&&T){let me=null;if(i.object.isPerspectiveCamera){const te=P.length();me=tt(te*c);const ve=te-me;i.object.position.addScaledVector(y,ve),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const te=new O(C.x,C.y,0);te.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),de=!0;const ve=new O(C.x,C.y,0);ve.unproject(i.object),i.object.position.sub(ve).add(te),i.object.updateMatrixWorld(),me=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;me!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(me).add(i.object.position):(_o.origin.copy(i.object.position),_o.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(_o.direction))<Xy?t.lookAt(i.target):(gu.setFromNormalAndCoplanarPoint(i.object.up,i.target),_o.intersectPlane(gu,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),de=!0);return c=1,T=!1,de||Et.distanceToSquared(i.object.position)>o||8*(1-at.dot(i.object.quaternion))>o||N.distanceToSquared(i.target)>0?(i.dispatchEvent(pu),Et.copy(i.object.position),at.copy(i.object.quaternion),N.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Jt),i.domElement.removeEventListener("pointerdown",A),i.domElement.removeEventListener("pointercancel",k),i.domElement.removeEventListener("wheel",it),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",k),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Lt),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new uu,l=new uu;let c=1;const h=new O,u=new ct,d=new ct,f=new ct,g=new ct,_=new ct,p=new ct,m=new ct,b=new ct,x=new ct,y=new O,C=new ct;let T=!1;const E=[],L={};let v=!1;function S(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function D(P){const ht=Math.abs(P*.01);return Math.pow(.95,i.zoomSpeed*ht)}function B(P){l.theta-=P}function j(P){l.phi-=P}const I=function(){const P=new O;return function(Ct,Et){P.setFromMatrixColumn(Et,0),P.multiplyScalar(-Ct),h.add(P)}}(),F=function(){const P=new O;return function(Ct,Et){i.screenSpacePanning===!0?P.setFromMatrixColumn(Et,1):(P.setFromMatrixColumn(Et,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(Ct),h.add(P)}}(),H=function(){const P=new O;return function(Ct,Et){const at=i.domElement;if(i.object.isPerspectiveCamera){const N=i.object.position;P.copy(N).sub(i.target);let ut=P.length();ut*=Math.tan(i.object.fov/2*Math.PI/180),I(2*Ct*ut/at.clientHeight,i.object.matrix),F(2*Et*ut/at.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(I(Ct*(i.object.right-i.object.left)/i.object.zoom/at.clientWidth,i.object.matrix),F(Et*(i.object.top-i.object.bottom)/i.object.zoom/at.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Y(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(P,ht){if(!i.zoomToCursor)return;T=!0;const Ct=i.domElement.getBoundingClientRect(),Et=P-Ct.left,at=ht-Ct.top,N=Ct.width,ut=Ct.height;C.x=Et/N*2-1,C.y=-(at/ut)*2+1,y.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function tt(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function nt(P){u.set(P.clientX,P.clientY)}function ft(P){q(P.clientX,P.clientX),m.set(P.clientX,P.clientY)}function W(P){g.set(P.clientX,P.clientY)}function et(P){d.set(P.clientX,P.clientY),f.subVectors(d,u).multiplyScalar(i.rotateSpeed);const ht=i.domElement;B(2*Math.PI*f.x/ht.clientHeight),j(2*Math.PI*f.y/ht.clientHeight),u.copy(d),i.update()}function mt(P){b.set(P.clientX,P.clientY),x.subVectors(b,m),x.y>0?Y(D(x.y)):x.y<0&&K(D(x.y)),m.copy(b),i.update()}function Mt(P){_.set(P.clientX,P.clientY),p.subVectors(_,g).multiplyScalar(i.panSpeed),H(p.x,p.y),g.copy(_),i.update()}function St(P){q(P.clientX,P.clientY),P.deltaY<0?K(D(P.deltaY)):P.deltaY>0&&Y(D(P.deltaY)),i.update()}function It(P){let ht=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?j(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),ht=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?j(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),ht=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?B(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),ht=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?B(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),ht=!0;break}ht&&(P.preventDefault(),i.update())}function Ft(P){if(E.length===1)u.set(P.pageX,P.pageY);else{const ht=vt(P),Ct=.5*(P.pageX+ht.x),Et=.5*(P.pageY+ht.y);u.set(Ct,Et)}}function wt(P){if(E.length===1)g.set(P.pageX,P.pageY);else{const ht=vt(P),Ct=.5*(P.pageX+ht.x),Et=.5*(P.pageY+ht.y);g.set(Ct,Et)}}function Nt(P){const ht=vt(P),Ct=P.pageX-ht.x,Et=P.pageY-ht.y,at=Math.sqrt(Ct*Ct+Et*Et);m.set(0,at)}function U(P){i.enableZoom&&Nt(P),i.enablePan&&wt(P)}function dt(P){i.enableZoom&&Nt(P),i.enableRotate&&Ft(P)}function J(P){if(E.length==1)d.set(P.pageX,P.pageY);else{const Ct=vt(P),Et=.5*(P.pageX+Ct.x),at=.5*(P.pageY+Ct.y);d.set(Et,at)}f.subVectors(d,u).multiplyScalar(i.rotateSpeed);const ht=i.domElement;B(2*Math.PI*f.x/ht.clientHeight),j(2*Math.PI*f.y/ht.clientHeight),u.copy(d)}function lt(P){if(E.length===1)_.set(P.pageX,P.pageY);else{const ht=vt(P),Ct=.5*(P.pageX+ht.x),Et=.5*(P.pageY+ht.y);_.set(Ct,Et)}p.subVectors(_,g).multiplyScalar(i.panSpeed),H(p.x,p.y),g.copy(_)}function Z(P){const ht=vt(P),Ct=P.pageX-ht.x,Et=P.pageY-ht.y,at=Math.sqrt(Ct*Ct+Et*Et);b.set(0,at),x.set(0,Math.pow(b.y/m.y,i.zoomSpeed)),Y(x.y),m.copy(b);const N=(P.pageX+ht.x)*.5,ut=(P.pageY+ht.y)*.5;q(N,ut)}function At(P){i.enableZoom&&Z(P),i.enablePan&&lt(P)}function xt(P){i.enableZoom&&Z(P),i.enableRotate&&J(P)}function A(P){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",M),i.domElement.addEventListener("pointerup",k)),Xt(P),P.pointerType==="touch"?zt(P):ot(P))}function M(P){i.enabled!==!1&&(P.pointerType==="touch"?rt(P):st(P))}function k(P){Bt(P),E.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",k)),i.dispatchEvent(mu),r=s.NONE}function ot(P){let ht;switch(P.button){case 0:ht=i.mouseButtons.LEFT;break;case 1:ht=i.mouseButtons.MIDDLE;break;case 2:ht=i.mouseButtons.RIGHT;break;default:ht=-1}switch(ht){case Yi.DOLLY:if(i.enableZoom===!1)return;ft(P),r=s.DOLLY;break;case Yi.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;W(P),r=s.PAN}else{if(i.enableRotate===!1)return;nt(P),r=s.ROTATE}break;case Yi.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;nt(P),r=s.ROTATE}else{if(i.enablePan===!1)return;W(P),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(ul)}function st(P){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;et(P);break;case s.DOLLY:if(i.enableZoom===!1)return;mt(P);break;case s.PAN:if(i.enablePan===!1)return;Mt(P);break}}function it(P){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(P.preventDefault(),i.dispatchEvent(ul),St(Tt(P)),i.dispatchEvent(mu))}function Tt(P){const ht=P.deltaMode,Ct={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(ht){case 1:Ct.deltaY*=16;break;case 2:Ct.deltaY*=100;break}return P.ctrlKey&&!v&&(Ct.deltaY*=10),Ct}function gt(P){P.key==="Control"&&(v=!0,document.addEventListener("keyup",yt,{passive:!0,capture:!0}))}function yt(P){P.key==="Control"&&(v=!1,document.removeEventListener("keyup",yt,{passive:!0,capture:!0}))}function Lt(P){i.enabled===!1||i.enablePan===!1||It(P)}function zt(P){switch(Pt(P),E.length){case 1:switch(i.touches.ONE){case ji.ROTATE:if(i.enableRotate===!1)return;Ft(P),r=s.TOUCH_ROTATE;break;case ji.PAN:if(i.enablePan===!1)return;wt(P),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case ji.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;U(P),r=s.TOUCH_DOLLY_PAN;break;case ji.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;dt(P),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(ul)}function rt(P){switch(Pt(P),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;J(P),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;lt(P),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;At(P),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;xt(P),i.update();break;default:r=s.NONE}}function Jt(P){i.enabled!==!1&&P.preventDefault()}function Xt(P){E.push(P.pointerId)}function Bt(P){delete L[P.pointerId];for(let ht=0;ht<E.length;ht++)if(E[ht]==P.pointerId){E.splice(ht,1);return}}function Pt(P){let ht=L[P.pointerId];ht===void 0&&(ht=new ct,L[P.pointerId]=ht),ht.set(P.pageX,P.pageY)}function vt(P){const ht=P.pointerId===E[0]?E[1]:E[0];return L[ht]}i.domElement.addEventListener("contextmenu",Jt),i.domElement.addEventListener("pointerdown",A),i.domElement.addEventListener("pointercancel",k),i.domElement.addEventListener("wheel",it,{passive:!1}),document.addEventListener("keydown",gt,{passive:!0,capture:!0}),this.update()}}const xo=(n,t,e,i=1)=>new O(n*i,e*i,-t*i);new O(0,1,0);const qy=new O(0,-1,0),_u=1e-24,Yy=1e-8,xu=.9,jy=4;function Ky(n){const t=Math.log10(n/_u)/Math.log10(Yy/_u);return Math.min(1,Math.max(0,t))}const Mn={v:9430639,p:16758861,B:11958527,E:3794640,rad:16732120,trail:8189439};function Zy(){const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.16,"rgba(130,245,255,0.9)"),e.addColorStop(.5,"rgba(60,150,255,0.25)"),e.addColorStop(1,"rgba(60,150,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new tc(n)}function Jy(){const n=document.createElement("canvas");n.width=n.height=64;const t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new tc(n)}function vu(n,t){const e=document.createElement("canvas");e.width=160,e.height=64;const i=e.getContext("2d");i.font="600 34px Segoe UI, Arial, sans-serif",i.fillStyle=t,i.textAlign="center",i.textBaseline="middle",i.fillText(n,80,34);const s=new mf(new Ql({map:new tc(e),depthTest:!1,transparent:!0}));return s.scale.set(2.5,1,1),s}const gs=(n,t)=>new wn({color:n,transparent:!0,opacity:t,side:tn,depthWrite:!1});function vo(n,t,e,i=.7,s=192){const r=[];for(let a=0;a<s;a++){const l=a/s*Math.PI*2;r.push(new O(n*Math.cos(l),t,-n*Math.sin(l)))}return new hy(new le().setFromPoints(r),new pn({color:e,transparent:!0,opacity:i,depthWrite:!1}))}class Qy{constructor(t){this.canvas=t,this.renderer=new ff({canvas:t,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene=new ly,this.scene.background=new Zt(329744),this.camera=new on(45,1,.1,3e3),this.controls=new $y(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.ring=new ze,this.scene.add(this.ring),this.layers={},this.vis={trail:!0,v:!0,p:!0,B:!0,E:!0,rad:!0,magnets:!0,cavity:!0,ref:!0,axes:!0,grid:!0},this.k=1,this.maxPoints=0,this.glowTex=Zy(),this.dotTex=Jy(),this._buildParticle(),this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}_buildParticle(){const t=this.particle=new ze,e=new be(new rc(.11,24,16),new wn({color:16777215,depthWrite:!1}));e.renderOrder=20,t.add(e);const i=new mf(new Ql({map:this.glowTex,blending:xs,transparent:!0,depthWrite:!1}));i.scale.set(1.5,1.5,1),i.renderOrder=19,t.add(i),this.scene.add(t);const s=o=>{const a=new fu(new O(1,0,0),new O,1,o,.4,.22);return a.line.material.depthWrite=!1,a.cone.material.depthWrite=!1,a.renderOrder=18,a.line.renderOrder=18,a.cone.renderOrder=18,this.scene.add(a),a};this.arrows={v:s(Mn.v),p:s(Mn.p),B:s(Mn.B),E:s(Mn.E)},this.beamlinesGroup=new ze,this.scene.add(this.beamlinesGroup);const r=new ic(1,1,32,1,!0);r.translate(0,-.5,0),this.coneX=3,this.cone=new be(r,new wn({color:Mn.rad,transparent:!0,opacity:.35,side:tn,depthWrite:!1,blending:xs})),this.cone.renderOrder=17,this.scene.add(this.cone)}_setArrow(t,e,i,s){if(!(i>1e-6)||e.lengthSq()<1e-24){t.visible=!1;return}t.visible=!0,t.position.copy(s),t.setDirection(e.clone().normalize()),t.setLength(i,Math.min(.55,i*.28),Math.min(.3,i*.15))}buildRing(t){this.ring.traverse(L=>{L.geometry&&L.geometry.dispose()}),this.scene.remove(this.ring),this.ring=new ze,this.scene.add(this.ring),this.beamlinesGroup.clear();const e=this.k=10/t.R,i=t.R*e,s=t.aR*e,r=t.aZ*e,o={},a=new ze,l=(L,v)=>new be(new Ii(L,L,v,160,1,!0),gs(3832004,.13));a.add(l(i+s,2*r),l(i-s,2*r));for(const L of[-1,1]){const v=new be(new Yo(i-s,i+s,160,1),gs(3832004,.1));v.rotation.x=-Math.PI/2,v.position.y=L*r,a.add(v),a.add(vo(i+s,L*r,6990079,.75),vo(i-s,L*r,6990079,.75))}const c=new ze;for(const L of[i+2.4*s,i-2.4*s]){c.add(new be(new Ii(L,L,3.6*r,160,1,!0),gs(2375791,.1)));for(const v of[-1,1])c.add(vo(L,v*1.8*r,4879544,.45))}o.chamber=[a,c],o.ref=[vo(i,0,12607743,.55)];const h=new ze,u=i-1.7*s,d=i+1.7*s,f=1.1*r,g=.025;for(const L of[!0,!1])for(let v=0;v<t.nMag;v++){const S=v/t.nMag*Math.PI*2+g,D=(v+1)/t.nMag*Math.PI*2-g,B=new bf;B.absarc(0,0,d,S,D,!1),B.absarc(0,0,u,D,S,!0);const j=new sc(B,{depth:f,bevelEnabled:!1,curveSegments:14});j.rotateX(-Math.PI/2),j.translate(0,L?1.25*r:-1.25*r-f,0),h.add(new be(j,gs(10178047,.22))),h.add(new Uo(new au(j),new pn({color:12946431,transparent:!0,opacity:.7,depthWrite:!1})))}o.magnets=[h],this.beamlineMeshes=[];const _=8;for(let L=0;L<_;L++){const v=L/_*Math.PI*2,S=i*Math.cos(v),D=-i*Math.sin(v),B=-Math.sin(v),j=-Math.cos(v),I=i*.6,F=new Ii(.04,.08,I,8,1,!0);F.rotateX(Math.PI/2);const H=new wn({color:Mn.rad,transparent:!0,opacity:.15,blending:xs,depthWrite:!1}),Y=new be(F,H);Y.position.set(S+B*(I/2),0,D+j*(I/2)),Y.quaternion.setFromUnitVectors(new O(0,0,1),new O(B,0,j)),this.beamlinesGroup.add(Y);const K=new ki(.9,.9,.9),q=new be(K,gs(6333946,.5));q.position.set(S+B*I,0,D+j*I),this.beamlinesGroup.add(q);const tt=new O(S,0,D);this.beamlineMeshes.push({mesh:Y,origin:tt})}const p=new ze,m=new ki(2*s*2,2*r*2,Math.max(t.gap*e,.3));p.add(new be(m,gs(2282406,.22))),p.add(new Uo(new au(m),new pn({color:16757575,transparent:!0,opacity:.95,depthWrite:!1}))),p.position.set(i*Math.cos(t.thetaC),0,-i*Math.sin(t.thetaC)),p.rotation.y=t.thetaC;const b=vu("RF","#22d3a6");b.position.set(0,2*r+1.2,0),p.add(b),o.cavity=[p];const x=new ze,y=1.25*r+f+.25;for(let L=0;L<24;L++){const v=L/24*Math.PI*2,S=new O(0,t.bSign,0),D=t.bSign>0?y:y+2.4,B=new fu(S,new O(i*Math.cos(v),D,-i*Math.sin(v)),2.4,Mn.B,.6,.3);B.line.material=new pn({color:Mn.B,transparent:!0,opacity:.8}),B.cone.material=new wn({color:Mn.B,transparent:!0,opacity:.9}),x.add(B)}o.Bfield=[x];const C=new ze,T=(L,v,S)=>{C.add(new Es(new le().setFromPoints([new O,L]),new pn({color:v,transparent:!0,opacity:.8})));const D=vu(S,"#"+v.toString(16).padStart(6,"0"));D.position.copy(L.clone().multiplyScalar(1.07)),C.add(D)};T(new O(i*1.45,0,0),16739179,"X"),T(new O(0,0,-i*1.45),6217866,"Y"),T(new O(0,i*.5,0),5082111,"Z · B"),o.axes=[C];const E=new Wy(i*3.4,34,2637934,1450815);E.position.y=-(1.25*r+f+.6),E.material.transparent=!0,E.material.opacity=.7,E.material.depthWrite=!1,o.grid=[E];for(const L of Object.keys(o))for(const v of o[L])this.ring.add(v);this.layers=o,this.setTrail(t.maxPoints);for(const L of["chamber","ref","magnets","cavity","Bfield","axes","grid"])this._applyVis(L);this.camera.position.set(i*1.15,i*.95,i*1.5),this.controls.target.set(0,0,0),this.controls.update(),this.cfg=t}setTrail(t){this.trail&&(this.scene.remove(this.trail),this.trail.geometry.dispose()),this.maxPoints=t,this.trailPos=new Float32Array(t*3);const e=new le;e.setAttribute("position",new Ne(this.trailPos,3)),e.setDrawRange(0,0),this.trail=new Es(e,new pn({color:Mn.trail,transparent:!0,opacity:.95,depthWrite:!1})),this.trail.frustumCulled=!1,this.trail.renderOrder=15,this.trail.visible=this.vis.trail,this.scene.add(this.trail)}setTrailPoint(t,e,i,s){t>=this.maxPoints||(this.trailPos[3*t]=e*this.k,this.trailPos[3*t+1]=s*this.k,this.trailPos[3*t+2]=-i*this.k)}commitTrail(){this.trail.geometry.attributes.position.needsUpdate=!0}setTrailCount(t){this.trail.geometry.setDrawRange(0,Math.min(t,this.maxPoints))}initMulti(t,e,i={}){this.clearMulti();const s=t.length,r=new ze,o=this.multi={n:s,maxPoints:e,group:r,defs:t.map(c=>({...c})),count:new Int32Array(s),lastValid:new Int32Array(s).fill(-1),lines:[],selected:-1,envelope:i.envelope||"none",envColor:i.envColor||"#ffb84d"};for(const c of o.defs){const h=new Float32Array(e*3),u=new le,d=new Ne(h,3);d.setUsage(Or),u.setAttribute("position",d),u.setDrawRange(0,0);const f=new Es(u,new pn({color:c.color,transparent:!0,opacity:c.trail_opacity,depthWrite:!1}));f.frustumCulled=!1,f.renderOrder=14,r.add(f),o.lines.push({line:f,buf:h})}o.dotPos=new Float32Array(s*3),o.dotCol=new Float32Array(s*3);const a=new le;a.setAttribute("position",new Ne(o.dotPos,3).setUsage(Or)),a.setAttribute("color",new Ne(o.dotCol,3).setUsage(Or)),a.setDrawRange(0,0);const l=(c,h,u,d)=>{const f=new uy(a,new gf({size:c,map:this.dotTex,vertexColors:!0,transparent:!0,opacity:h,depthWrite:!1,blending:u,sizeAttenuation:!0}));return f.frustumCulled=!1,f.renderOrder=d,f};o.dotGeo=a,r.add(l(.6,.22,xs,15),l(.2,1,Ri,16)),o.marker=new be(new Yo(.26,.31,32),new wn({color:16777215,transparent:!0,opacity:.85,depthWrite:!1,side:tn})),o.marker.renderOrder=17,r.add(o.marker),o.envelope!=="none"&&this._buildEnvelope(o),this.scene.add(r),this.particle.visible=!1,this.trail.visible=!1;for(const c of["magnets","cavity"])for(const h of this.layers[c]||[])h.traverse(u=>{u.isLineSegments&&(u.renderOrder=22)})}clearMulti(){const t=this.multi;if(t){this.scene.remove(t.group),t.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),this.multi=null,this.particle.visible=!0,this.trail.visible=this.vis.trail;for(const e of["magnets","cavity"])for(const i of this.layers[e]||[])i.traverse(s=>{s.isLineSegments&&(s.renderOrder=0)})}}appendPositions(t,e,i){const s=this.multi;if(!s||!i.length)return;const{buf:r,line:o}=s.lines[t],a=Math.min(i.length/3,s.maxPoints-e);for(let l=0;l<a;l++){const c=3*(e+l);r[c]=i[3*l]*this.k,r[c+1]=i[3*l+2]*this.k,r[c+2]=-i[3*l+1]*this.k}s.count[t]=Math.max(s.count[t],e+a),o.geometry.attributes.position.needsUpdate=!0}setLastValid(t,e){this.multi&&(this.multi.lastValid[t]=e??-1)}setMultiStyle(t,e){const i=this.multi;if(!i)return;Object.assign(i.defs[t],e);const s=i.lines[t].line.material;s.color.set(i.defs[t].color),s.opacity=i.defs[t].trail_opacity}setSelected(t){this.multi&&(this.multi.selected=t)}setMultiCursor(t){const e=this.multi;if(!e)return;const i=new Zt;let s=0;e.marker.visible=!1,e.alive=[];for(let r=0;r<e.n;r++){const o=e.defs[r],a=e.count[r]-1,l=e.lastValid[r]>=0,c=Math.min(t,l?e.lastValid[r]:a,a),{line:h,buf:u}=e.lines[r];h.geometry.setDrawRange(0,c+1),h.visible=this.vis.trail&&o.trail_visible&&c>=1,!(c<0||l&&t>e.lastValid[r])&&(e.alive.push(r),o.visible&&(e.dotPos[3*s]=u[3*c],e.dotPos[3*s+1]=u[3*c+1],e.dotPos[3*s+2]=u[3*c+2],i.set(o.color),e.dotCol[3*s]=i.r,e.dotCol[3*s+1]=i.g,e.dotCol[3*s+2]=i.b,s++,r===e.selected&&(e.marker.visible=!0,e.marker.position.set(u[3*c],u[3*c+1],u[3*c+2]),e.marker.quaternion.copy(this.camera.quaternion))))}e.dotGeo.setDrawRange(0,s),e.dotGeo.attributes.position.needsUpdate=!0,e.dotGeo.attributes.color.needsUpdate=!0,e.env&&this._updateEnvelope(e,t)}setEnvelopeMode(t,e){const i=this.multi;i&&(i.envelope=t,e&&(i.envColor=e,i.env&&(i.env.mesh.material.color.set(e),i.env.mesh.children[0].material.color.set(e))),t!=="none"&&!i.env&&this._buildEnvelope(i),i.env&&(i.env.mesh.visible=t!=="none"))}_buildEnvelope(t){const s=new Float32Array(2940),r=[];for(let u=0;u<48;u++)for(let d=0;d<20;d++){const f=u*20+d,g=u*20+(d+1)%20,_=(u+1)*20+d,p=(u+1)*20+(d+1)%20;r.push(f,_,g,g,_,p)}const o=new le;o.setAttribute("position",new Ne(s,3).setUsage(Or)),o.setIndex(r);const a=new be(o,new wn({color:t.envColor,transparent:!0,opacity:.2,depthWrite:!1,side:tn}));a.frustumCulled=!1,a.renderOrder=13;const l=[];for(let u=0;u<=48;u++)for(let d=0;d<20;d++)u%6===0&&l.push(u*20+d,u*20+(d+1)%20),u<48&&d%5===0&&l.push(u*20+d,(u+1)*20+d);const c=new le;c.setAttribute("position",o.attributes.position),c.setIndex(l);const h=new Uo(c,new pn({color:t.envColor,transparent:!0,opacity:.35,depthWrite:!1}));h.frustumCulled=!1,a.add(h),t.group.add(a),t.env={mesh:a,pos:s,K:48,M:20}}_updateEnvelope(t,e){const{mesh:i,pos:s,K:r,M:o}=t.env,a=t.alive||[];if(i.visible=t.envelope!=="none"&&a.length>=2,!i.visible)return;let l=0,c=0;const h=[],u=[],d=[];for(const v of a){const S=t.lines[v].buf,D=Math.min(e,t.count[v]-1),B=S[3*D],j=S[3*D+1],I=S[3*D+2],F=Math.atan2(-I,B);h.push(F),u.push(Math.hypot(B,I)),d.push(j),l+=Math.cos(F),c+=Math.sin(F)}const f=h.length,g=Math.atan2(c,l),_=v=>Math.atan2(Math.sin(v),Math.cos(v)),p=v=>v.reduce((S,D)=>S+D,0)/f,m=(v,S)=>Math.sqrt(v.reduce((D,B)=>D+(B-S)**2,0)/f),b=h.map(v=>_(v-g)),x=p(b),y=p(u),C=p(d),T=Math.min(Math.PI,2*m(b,x)+.01),E=Math.max(2*m(u,y),.03),L=Math.max(2*m(d,C),.03);for(let v=0;v<=r;v++){const S=-1+2*v/r,D=Math.sqrt(Math.max(0,1-S*S)),B=g+x+S*T,j=Math.cos(B),I=Math.sin(B);for(let F=0;F<o;F++){const H=2*Math.PI*F/o,Y=y+E*D*Math.cos(H),K=C+L*D*Math.sin(H),q=3*(v*o+F);s[q]=Y*j,s[q+1]=K,s[q+2]=-Y*I}}i.geometry.attributes.position.needsUpdate=!0}_applyVis(t){const e={magnets:"magnets",cavity:"cavity",ref:"ref",axes:"axes",grid:"grid",chamber:null,Bfield:"B"},i=e[t]===null?!0:this.vis[e[t]];for(const s of this.layers[t]||[])s.visible=i}setVisible(t,e){this.vis[t]=e,t==="trail"&&(this.trail.visible=e&&!this.multi);for(const i of["magnets","cavity","ref","axes","grid","Bfield"])this._applyVis(i)}hideVectors(){for(const t of Object.values(this.arrows))t.visible=!1;this.cone.visible=!1}setParticle(t,e){const i=this.k,s=xo(t.x,t.y,t.z,i);this.particle.position.copy(s);const r=xo(t.vx,t.vy,t.vz),o=r.clone().normalize(),a=new O(0,.28,0),l=r.length()/299792458;this._setArrow(this.arrows.v,r,this.vis.v?2.2*l:0,s),this._setArrow(this.arrows.p,r,this.vis.p?2.8*Math.hypot(t.px,t.py,t.pz)/e.p_ref:0,s.clone().add(a));const c=xo(t.Bx,t.By,t.Bz),h=c.length();this._setArrow(this.arrows.B,c,this.vis.B&&h>0?2.2*Math.min(2,h/e.b_ref_T):0,s.clone().add(new O(0,-1.1,0).multiplyScalar(Math.sign(c.y)||1)).add(a));const u=xo(t.Ex,t.Ey,t.Ez),d=u.length();this._setArrow(this.arrows.E,u,this.vis.E&&d>0?3:0,s);const f=this.vis.rad&&t.power_W>0;this.cone.visible=f;const g=f?Ky(t.power_W):0;if(f){const _=xu+(jy-xu)*g,p=Math.min(this.coneX/t.gamma,1.2),m=_*Math.tan(p);this.cone.scale.set(m,_,m),this.cone.quaternion.setFromUnitVectors(qy,o),this.cone.position.copy(s),this.cone.material.opacity=.14+.26*g}if(this.beamlineMeshes)for(const _ of this.beamlineMeshes){const p=s.distanceTo(_.origin);if(f&&p<1.5){const m=(1-p/1.5)*g;_.mesh.material.opacity=.15+.85*m}else _.mesh.material.opacity=.15}}render(){this.controls.update(),this.renderer.render(this.scene,this.camera)}}/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Pr(n){return n+.5|0}const ni=(n,t,e)=>Math.max(Math.min(n,e),t);function tr(n){return ni(Pr(n*2.55),0,255)}function ai(n){return ni(Pr(n*255),0,255)}function Hn(n){return ni(Pr(n/2.55)/100,0,1)}function yu(n){return ni(Pr(n*100),0,100)}const sn={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Fl=[..."0123456789ABCDEF"],tb=n=>Fl[n&15],eb=n=>Fl[(n&240)>>4]+Fl[n&15],yo=n=>(n&240)>>4===(n&15),nb=n=>yo(n.r)&&yo(n.g)&&yo(n.b)&&yo(n.a);function ib(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&sn[n[1]]*17,g:255&sn[n[2]]*17,b:255&sn[n[3]]*17,a:t===5?sn[n[4]]*17:255}:(t===7||t===9)&&(e={r:sn[n[1]]<<4|sn[n[2]],g:sn[n[3]]<<4|sn[n[4]],b:sn[n[5]]<<4|sn[n[6]],a:t===9?sn[n[7]]<<4|sn[n[8]]:255})),e}const sb=(n,t)=>n<255?t(n):"";function rb(n){var t=nb(n)?tb:eb;return n?"#"+t(n.r)+t(n.g)+t(n.b)+sb(n.a,t):void 0}const ob=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Tf(n,t,e){const i=t*Math.min(e,1-e),s=(r,o=(r+n/30)%12)=>e-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function ab(n,t,e){const i=(s,r=(s+n/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function lb(n,t,e){const i=Tf(n,1,.5);let s;for(t+e>1&&(s=1/(t+e),t*=s,e*=s),s=0;s<3;s++)i[s]*=1-t-e,i[s]+=t;return i}function cb(n,t,e,i,s){return n===s?(t-e)/i+(t<e?6:0):t===s?(e-n)/i+2:(n-t)/i+4}function oc(n){const e=n.r/255,i=n.g/255,s=n.b/255,r=Math.max(e,i,s),o=Math.min(e,i,s),a=(r+o)/2;let l,c,h;return r!==o&&(h=r-o,c=a>.5?h/(2-r-o):h/(r+o),l=cb(e,i,s,h,r),l=l*60+.5),[l|0,c||0,a]}function ac(n,t,e,i){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,i)).map(ai)}function lc(n,t,e){return ac(Tf,n,t,e)}function hb(n,t,e){return ac(lb,n,t,e)}function ub(n,t,e){return ac(ab,n,t,e)}function wf(n){return(n%360+360)%360}function db(n){const t=ob.exec(n);let e=255,i;if(!t)return;t[5]!==i&&(e=t[6]?tr(+t[5]):ai(+t[5]));const s=wf(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?i=hb(s,r,o):t[1]==="hsv"?i=ub(s,r,o):i=lc(s,r,o),{r:i[0],g:i[1],b:i[2],a:e}}function fb(n,t){var e=oc(n);e[0]=wf(e[0]+t),e=lc(e),n.r=e[0],n.g=e[1],n.b=e[2]}function pb(n){if(!n)return;const t=oc(n),e=t[0],i=yu(t[1]),s=yu(t[2]);return n.a<255?`hsla(${e}, ${i}%, ${s}%, ${Hn(n.a)})`:`hsl(${e}, ${i}%, ${s}%)`}const bu={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Mu={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function mb(){const n={},t=Object.keys(Mu),e=Object.keys(bu);let i,s,r,o,a;for(i=0;i<t.length;i++){for(o=a=t[i],s=0;s<e.length;s++)r=e[s],a=a.replace(r,bu[r]);r=parseInt(Mu[o],16),n[a]=[r>>16&255,r>>8&255,r&255]}return n}let bo;function gb(n){bo||(bo=mb(),bo.transparent=[0,0,0,0]);const t=bo[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const _b=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function xb(n){const t=_b.exec(n);let e=255,i,s,r;if(t){if(t[7]!==i){const o=+t[7];e=t[8]?tr(o):ni(o*255,0,255)}return i=+t[1],s=+t[3],r=+t[5],i=255&(t[2]?tr(i):ni(i,0,255)),s=255&(t[4]?tr(s):ni(s,0,255)),r=255&(t[6]?tr(r):ni(r,0,255)),{r:i,g:s,b:r,a:e}}}function vb(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${Hn(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const dl=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,_s=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function yb(n,t,e){const i=_s(Hn(n.r)),s=_s(Hn(n.g)),r=_s(Hn(n.b));return{r:ai(dl(i+e*(_s(Hn(t.r))-i))),g:ai(dl(s+e*(_s(Hn(t.g))-s))),b:ai(dl(r+e*(_s(Hn(t.b))-r))),a:n.a+e*(t.a-n.a)}}function Mo(n,t,e){if(n){let i=oc(n);i[t]=Math.max(0,Math.min(i[t]+i[t]*e,t===0?360:1)),i=lc(i),n.r=i[0],n.g=i[1],n.b=i[2]}}function Af(n,t){return n&&Object.assign(t||{},n)}function Su(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=ai(n[3]))):(t=Af(n,{r:0,g:0,b:0,a:1}),t.a=ai(t.a)),t}function bb(n){return n.charAt(0)==="r"?xb(n):db(n)}class yr{constructor(t){if(t instanceof yr)return t;const e=typeof t;let i;e==="object"?i=Su(t):e==="string"&&(i=ib(t)||gb(t)||bb(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=Af(this._rgb);return t&&(t.a=Hn(t.a)),t}set rgb(t){this._rgb=Su(t)}rgbString(){return this._valid?vb(this._rgb):void 0}hexString(){return this._valid?rb(this._rgb):void 0}hslString(){return this._valid?pb(this._rgb):void 0}mix(t,e){if(t){const i=this.rgb,s=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,l=i.a-s.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,i.r=255&c*i.r+r*s.r+.5,i.g=255&c*i.g+r*s.g+.5,i.b=255&c*i.b+r*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=yb(this._rgb,t._rgb,e)),this}clone(){return new yr(this.rgb)}alpha(t){return this._rgb.a=ai(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=Pr(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Mo(this._rgb,2,t),this}darken(t){return Mo(this._rgb,2,-t),this}saturate(t){return Mo(this._rgb,1,t),this}desaturate(t){return Mo(this._rgb,1,-t),this}rotate(t){return fb(this._rgb,t),this}}/*!
 * Chart.js v4.4.7
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */function Nn(){}const Mb=(()=>{let n=0;return()=>n++})();function pe(n){return n==null}function Re(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function ee(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function cn(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function Sn(n,t){return cn(n)?n:t}function Qt(n,t){return typeof n>"u"?t:n}const Sb=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function ae(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function ie(n,t,e,i){let s,r,o;if(Re(n))for(r=n.length,s=0;s<r;s++)t.call(e,n[s],s);else if(ee(n))for(o=Object.keys(n),r=o.length,s=0;s<r;s++)t.call(e,n[o[s]],o[s])}function jo(n,t){let e,i,s,r;if(!n||!t||n.length!==t.length)return!1;for(e=0,i=n.length;e<i;++e)if(s=n[e],r=t[e],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function Ko(n){if(Re(n))return n.map(Ko);if(ee(n)){const t=Object.create(null),e=Object.keys(n),i=e.length;let s=0;for(;s<i;++s)t[e[s]]=Ko(n[e[s]]);return t}return n}function Cf(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function Eb(n,t,e,i){if(!Cf(n))return;const s=t[n],r=e[n];ee(s)&&ee(r)?br(s,r,i):t[n]=Ko(r)}function br(n,t,e){const i=Re(t)?t:[t],s=i.length;if(!ee(n))return n;e=e||{};const r=e.merger||Eb;let o;for(let a=0;a<s;++a){if(o=i[a],!ee(o))continue;const l=Object.keys(o);for(let c=0,h=l.length;c<h;++c)r(l[c],n,o,e)}return n}function hr(n,t){return br(n,t,{merger:Tb})}function Tb(n,t,e){if(!Cf(n))return;const i=t[n],s=e[n];ee(i)&&ee(s)?hr(i,s):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=Ko(s))}const Eu={"":n=>n,x:n=>n.x,y:n=>n.y};function wb(n){const t=n.split("."),e=[];let i="";for(const s of t)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(e.push(i),i="");return e}function Ab(n){const t=wb(n);return e=>{for(const i of t){if(i==="")break;e=e&&e[i]}return e}}function Zo(n,t){return(Eu[t]||(Eu[t]=Ab(t)))(n)}function cc(n){return n.charAt(0).toUpperCase()+n.slice(1)}const Jo=n=>typeof n<"u",ci=n=>typeof n=="function",Tu=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function Cb(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const Fe=Math.PI,Cn=2*Fe,Rb=Cn+Fe,Qo=Number.POSITIVE_INFINITY,Pb=Fe/180,xn=Fe/2,vi=Fe/4,wu=Fe*2/3,Rf=Math.log10,Ls=Math.sign;function ur(n,t,e){return Math.abs(n-t)<e}function Au(n){const t=Math.round(n);n=ur(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(Rf(n))),i=n/e;return(i<=1?1:i<=2?2:i<=5?5:10)*e}function Lb(n){const t=[],e=Math.sqrt(n);let i;for(i=1;i<e;i++)n%i===0&&(t.push(i),t.push(n/i));return e===(e|0)&&t.push(e),t.sort((s,r)=>s-r).pop(),t}function Ds(n){return!isNaN(parseFloat(n))&&isFinite(n)}function Db(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function Ib(n,t,e){let i,s,r;for(i=0,s=n.length;i<s;i++)r=n[i][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function Ai(n){return n*(Fe/180)}function Ob(n){return n*(180/Fe)}function Cu(n){if(!cn(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function Ub(n,t){const e=t.x-n.x,i=t.y-n.y,s=Math.sqrt(e*e+i*i);let r=Math.atan2(i,e);return r<-.5*Fe&&(r+=Cn),{angle:r,distance:s}}function Bl(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function Nb(n,t){return(n-t+Rb)%Cn-Fe}function Jn(n){return(n%Cn+Cn)%Cn}function Pf(n,t,e,i){const s=Jn(n),r=Jn(t),o=Jn(e),a=Jn(r-s),l=Jn(o-s),c=Jn(s-r),h=Jn(s-o);return s===r||s===o||i&&r===o||a>l&&c<h}function vn(n,t,e){return Math.max(t,Math.min(e,n))}function Fb(n){return vn(n,-32768,32767)}function er(n,t,e,i=1e-6){return n>=Math.min(t,e)-i&&n<=Math.max(t,e)+i}function hc(n,t,e){e=e||(o=>n[o]<t);let i=n.length-1,s=0,r;for(;i-s>1;)r=s+i>>1,e(r)?s=r:i=r;return{lo:s,hi:i}}const Ci=(n,t,e,i)=>hc(n,e,i?s=>{const r=n[s][t];return r<e||r===e&&n[s+1][t]===e}:s=>n[s][t]<e),Bb=(n,t,e)=>hc(n,e,i=>n[i][t]>=e);function kb(n,t,e){let i=0,s=n.length;for(;i<s&&n[i]<t;)i++;for(;s>i&&n[s-1]>e;)s--;return i>0||s<n.length?n.slice(i,s):n}const Lf=["push","pop","shift","splice","unshift"];function zb(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Lf.forEach(e=>{const i="_onData"+cc(e),s=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return n._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...r)}),o}})})}function Ru(n,t){const e=n._chartjs;if(!e)return;const i=e.listeners,s=i.indexOf(t);s!==-1&&i.splice(s,1),!(i.length>0)&&(Lf.forEach(r=>{delete n[r]}),delete n._chartjs)}function Hb(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const Df=function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame}();function If(n,t){let e=[],i=!1;return function(...s){e=s,i||(i=!0,Df.call(window,()=>{i=!1,n.apply(t,e)}))}}function Vb(n,t){let e;return function(...i){return t?(clearTimeout(e),e=setTimeout(n,t,i)):n.apply(this,i),t}}const Of=n=>n==="start"?"left":n==="end"?"right":"center",Je=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,Gb=(n,t,e,i)=>n===(i?"left":"right")?e:n==="center"?(t+e)/2:t;function Uf(n,t,e){const i=t.length;let s=0,r=i;if(n._sorted){const{iScale:o,_parsed:a}=n,l=o.axis,{min:c,max:h,minDefined:u,maxDefined:d}=o.getUserBounds();u&&(s=vn(Math.min(Ci(a,l,c).lo,e?i:Ci(t,l,o.getPixelForValue(c)).lo),0,i-1)),d?r=vn(Math.max(Ci(a,o.axis,h,!0).hi+1,e?0:Ci(t,l,o.getPixelForValue(h),!0).hi+1),s,i)-s:r=i-s}return{start:s,count:r}}function Nf(n){const{xScale:t,yScale:e,_scaleRanges:i}=n,s={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!i)return n._scaleRanges=s,!0;const r=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==e.min||i.ymax!==e.max;return Object.assign(i,s),r}const So=n=>n===0||n===1,Pu=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*Cn/e)),Lu=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*Cn/e)+1,dr={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*xn)+1,easeOutSine:n=>Math.sin(n*xn),easeInOutSine:n=>-.5*(Math.cos(Fe*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>So(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>So(n)?n:Pu(n,.075,.3),easeOutElastic:n=>So(n)?n:Lu(n,.075,.3),easeInOutElastic(n){return So(n)?n:n<.5?.5*Pu(n*2,.1125,.45):.5+.5*Lu(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-dr.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?dr.easeInBounce(n*2)*.5:dr.easeOutBounce(n*2-1)*.5+.5};function uc(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Du(n){return uc(n)?n:new yr(n)}function fl(n){return uc(n)?n:new yr(n).saturate(.5).darken(.1).hexString()}const Wb=["x","y","borderWidth","radius","tension"],Xb=["color","borderColor","backgroundColor"];function $b(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:Xb},numbers:{type:"number",properties:Wb}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function qb(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Iu=new Map;function Yb(n,t){t=t||{};const e=n+JSON.stringify(t);let i=Iu.get(e);return i||(i=new Intl.NumberFormat(n,t),Iu.set(e,i)),i}function Ff(n,t,e){return Yb(t,e).format(n)}const jb={values(n){return Re(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const i=this.chart.options.locale;let s,r=n;if(e.length>1){const c=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(c<1e-4||c>1e15)&&(s="scientific"),r=Kb(n,e)}const o=Rf(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),Ff(n,i,l)}};function Kb(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var Bf={formatters:jb};function Zb(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Bf.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Vi=Object.create(null),kl=Object.create(null);function fr(n,t){if(!t)return n;const e=t.split(".");for(let i=0,s=e.length;i<s;++i){const r=e[i];n=n[r]||(n[r]=Object.create(null))}return n}function pl(n,t,e){return typeof t=="string"?br(fr(n,t),e):br(fr(n,""),t)}class Jb{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>fl(s.backgroundColor),this.hoverBorderColor=(i,s)=>fl(s.borderColor),this.hoverColor=(i,s)=>fl(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return pl(this,t,e)}get(t){return fr(this,t)}describe(t,e){return pl(kl,t,e)}override(t,e){return pl(Vi,t,e)}route(t,e,i,s){const r=fr(this,t),o=fr(this,i),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const l=this[a],c=o[s];return ee(l)?Object.assign({},c,l):Qt(l,c)},set(l){this[a]=l}}})}apply(t){t.forEach(e=>e(this))}}var _e=new Jb({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[$b,qb,Zb]);function Qb(n){return!n||pe(n.size)||pe(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function Ou(n,t,e,i,s){let r=t[s];return r||(r=t[s]=n.measureText(s).width,e.push(s)),r>i&&(i=r),i}function yi(n,t,e){const i=n.currentDevicePixelRatio,s=e!==0?Math.max(e/2,.5):0;return Math.round((t-s)*i)/i+s}function Uu(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function zl(n,t,e,i){kf(n,t,e,i,null)}function kf(n,t,e,i,s){let r,o,a,l,c,h,u,d;const f=t.pointStyle,g=t.rotation,_=t.radius;let p=(g||0)*Pb;if(f&&typeof f=="object"&&(r=f.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){n.save(),n.translate(e,i),n.rotate(p),n.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),n.restore();return}if(!(isNaN(_)||_<=0)){switch(n.beginPath(),f){default:s?n.ellipse(e,i,s/2,_,0,0,Cn):n.arc(e,i,_,0,Cn),n.closePath();break;case"triangle":h=s?s/2:_,n.moveTo(e+Math.sin(p)*h,i-Math.cos(p)*_),p+=wu,n.lineTo(e+Math.sin(p)*h,i-Math.cos(p)*_),p+=wu,n.lineTo(e+Math.sin(p)*h,i-Math.cos(p)*_),n.closePath();break;case"rectRounded":c=_*.516,l=_-c,o=Math.cos(p+vi)*l,u=Math.cos(p+vi)*(s?s/2-c:l),a=Math.sin(p+vi)*l,d=Math.sin(p+vi)*(s?s/2-c:l),n.arc(e-u,i-a,c,p-Fe,p-xn),n.arc(e+d,i-o,c,p-xn,p),n.arc(e+u,i+a,c,p,p+xn),n.arc(e-d,i+o,c,p+xn,p+Fe),n.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*_,h=s?s/2:l,n.rect(e-h,i-l,2*h,2*l);break}p+=vi;case"rectRot":u=Math.cos(p)*(s?s/2:_),o=Math.cos(p)*_,a=Math.sin(p)*_,d=Math.sin(p)*(s?s/2:_),n.moveTo(e-u,i-a),n.lineTo(e+d,i-o),n.lineTo(e+u,i+a),n.lineTo(e-d,i+o),n.closePath();break;case"crossRot":p+=vi;case"cross":u=Math.cos(p)*(s?s/2:_),o=Math.cos(p)*_,a=Math.sin(p)*_,d=Math.sin(p)*(s?s/2:_),n.moveTo(e-u,i-a),n.lineTo(e+u,i+a),n.moveTo(e+d,i-o),n.lineTo(e-d,i+o);break;case"star":u=Math.cos(p)*(s?s/2:_),o=Math.cos(p)*_,a=Math.sin(p)*_,d=Math.sin(p)*(s?s/2:_),n.moveTo(e-u,i-a),n.lineTo(e+u,i+a),n.moveTo(e+d,i-o),n.lineTo(e-d,i+o),p+=vi,u=Math.cos(p)*(s?s/2:_),o=Math.cos(p)*_,a=Math.sin(p)*_,d=Math.sin(p)*(s?s/2:_),n.moveTo(e-u,i-a),n.lineTo(e+u,i+a),n.moveTo(e+d,i-o),n.lineTo(e-d,i+o);break;case"line":o=s?s/2:Math.cos(p)*_,a=Math.sin(p)*_,n.moveTo(e-o,i-a),n.lineTo(e+o,i+a);break;case"dash":n.moveTo(e,i),n.lineTo(e+Math.cos(p)*(s?s/2:_),i+Math.sin(p)*_);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function Mr(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function dc(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function fc(n){n.restore()}function tM(n,t,e,i,s){if(!t)return n.lineTo(e.x,e.y);if(s==="middle"){const r=(t.x+e.x)/2;n.lineTo(r,t.y),n.lineTo(r,e.y)}else s==="after"!=!!i?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function eM(n,t,e,i){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?e.cp2x:e.cp1x,i?e.cp2y:e.cp1y,e.x,e.y)}function nM(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),pe(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function iM(n,t,e,i,s){if(s.strikethrough||s.underline){const r=n.measureText(i),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,l=e-r.actualBoundingBoxAscent,c=e+r.actualBoundingBoxDescent,h=s.strikethrough?(l+c)/2:c;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=s.decorationWidth||2,n.moveTo(o,h),n.lineTo(a,h),n.stroke()}}function sM(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function ta(n,t,e,i,s,r={}){const o=Re(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let l,c;for(n.save(),n.font=s.string,nM(n,r),l=0;l<o.length;++l)c=o[l],r.backdrop&&sM(n,r.backdrop),a&&(r.strokeColor&&(n.strokeStyle=r.strokeColor),pe(r.strokeWidth)||(n.lineWidth=r.strokeWidth),n.strokeText(c,e,i,r.maxWidth)),n.fillText(c,e,i,r.maxWidth),iM(n,e,i,c,r),i+=Number(s.lineHeight);n.restore()}function Hl(n,t){const{x:e,y:i,w:s,h:r,radius:o}=t;n.arc(e+o.topLeft,i+o.topLeft,o.topLeft,1.5*Fe,Fe,!0),n.lineTo(e,i+r-o.bottomLeft),n.arc(e+o.bottomLeft,i+r-o.bottomLeft,o.bottomLeft,Fe,xn,!0),n.lineTo(e+s-o.bottomRight,i+r),n.arc(e+s-o.bottomRight,i+r-o.bottomRight,o.bottomRight,xn,0,!0),n.lineTo(e+s,i+o.topRight),n.arc(e+s-o.topRight,i+o.topRight,o.topRight,0,-xn,!0),n.lineTo(e+o.topLeft,i)}const rM=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,oM=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function aM(n,t){const e=(""+n).match(rM);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const lM=n=>+n||0;function zf(n,t){const e={},i=ee(t),s=i?Object.keys(t):t,r=ee(n)?i?o=>Qt(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of s)e[o]=lM(r(o));return e}function cM(n){return zf(n,{top:"y",right:"x",bottom:"y",left:"x"})}function pr(n){return zf(n,["topLeft","topRight","bottomLeft","bottomRight"])}function yn(n){const t=cM(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function $e(n,t){n=n||{},t=t||_e.font;let e=Qt(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let i=Qt(n.style,t.style);i&&!(""+i).match(oM)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:Qt(n.family,t.family),lineHeight:aM(Qt(n.lineHeight,t.lineHeight),e),size:e,style:i,weight:Qt(n.weight,t.weight),string:""};return s.string=Qb(s),s}function Eo(n,t,e,i){let s,r,o;for(s=0,r=n.length;s<r;++s)if(o=n[s],o!==void 0&&o!==void 0)return o}function hM(n,t,e){const{min:i,max:s}=n,r=Sb(t,(s-i)/2),o=(a,l)=>e&&a===0?0:a+l;return{min:o(i,-Math.abs(r)),max:o(s,r)}}function qi(n,t){return Object.assign(Object.create(n),t)}function pc(n,t=[""],e,i,s=()=>n[0]){const r=e||n;typeof i>"u"&&(i=Wf("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:r,_fallback:i,_getTarget:s,override:a=>pc([a,...n],t,r,i)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete n[0][l],!0},get(a,l){return Vf(a,l,()=>xM(l,t,n,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,l){return Fu(a).includes(l)},ownKeys(a){return Fu(a)},set(a,l,c){const h=a._storage||(a._storage=s());return a[l]=h[l]=c,delete a._keys,!0}})}function Is(n,t,e,i){const s={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:Hf(n,i),setContext:r=>Is(n,r,e,i),override:r=>Is(n.override(r),t,e,i)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete n[o],!0},get(r,o,a){return Vf(r,o,()=>dM(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(r,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(r,o,a){return n[o]=a,delete r[o],!0}})}function Hf(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:i=t.indexable,_allKeys:s=t.allKeys}=n;return{allKeys:s,scriptable:e,indexable:i,isScriptable:ci(e)?e:()=>e,isIndexable:ci(i)?i:()=>i}}const uM=(n,t)=>n?n+cc(t):t,mc=(n,t)=>ee(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Vf(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const i=e();return n[t]=i,i}function dM(n,t,e){const{_proxy:i,_context:s,_subProxy:r,_descriptors:o}=n;let a=i[t];return ci(a)&&o.isScriptable(t)&&(a=fM(t,a,n,e)),Re(a)&&a.length&&(a=pM(t,a,n,o.isIndexable)),mc(t,a)&&(a=Is(a,s,r&&r[t],o)),a}function fM(n,t,e,i){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let l=t(r,o||i);return a.delete(n),mc(n,l)&&(l=gc(s._scopes,s,n,l)),l}function pM(n,t,e,i){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&i(n))return t[r.index%t.length];if(ee(t[0])){const l=t,c=s._scopes.filter(h=>h!==l);t=[];for(const h of l){const u=gc(c,s,n,h);t.push(Is(u,r,o&&o[n],a))}}return t}function Gf(n,t,e){return ci(n)?n(t,e):n}const mM=(n,t)=>n===!0?t:typeof n=="string"?Zo(t,n):void 0;function gM(n,t,e,i,s){for(const r of t){const o=mM(e,r);if(o){n.add(o);const a=Gf(o._fallback,e,s);if(typeof a<"u"&&a!==e&&a!==i)return a}else if(o===!1&&typeof i<"u"&&e!==i)return null}return!1}function gc(n,t,e,i){const s=t._rootScopes,r=Gf(t._fallback,e,i),o=[...n,...s],a=new Set;a.add(i);let l=Nu(a,o,e,r||e,i);return l===null||typeof r<"u"&&r!==e&&(l=Nu(a,o,r,l,i),l===null)?!1:pc(Array.from(a),[""],s,r,()=>_M(t,e,i))}function Nu(n,t,e,i,s){for(;e;)e=gM(n,t,e,i,s);return e}function _M(n,t,e){const i=n._getTarget();t in i||(i[t]={});const s=i[t];return Re(s)&&ee(e)?e:s||{}}function xM(n,t,e,i){let s;for(const r of t)if(s=Wf(uM(r,n),e),typeof s<"u")return mc(n,s)?gc(e,i,n,s):s}function Wf(n,t){for(const e of t){if(!e)continue;const i=e[n];if(typeof i<"u")return i}}function Fu(n){let t=n._keys;return t||(t=n._keys=vM(n._scopes)),t}function vM(n){const t=new Set;for(const e of n)for(const i of Object.keys(e).filter(s=>!s.startsWith("_")))t.add(i);return Array.from(t)}const yM=Number.EPSILON||1e-14,Os=(n,t)=>t<n.length&&!n[t].skip&&n[t],Xf=n=>n==="x"?"y":"x";function bM(n,t,e,i){const s=n.skip?t:n,r=t,o=e.skip?t:e,a=Bl(r,s),l=Bl(o,r);let c=a/(a+l),h=l/(a+l);c=isNaN(c)?0:c,h=isNaN(h)?0:h;const u=i*c,d=i*h;return{previous:{x:r.x-u*(o.x-s.x),y:r.y-u*(o.y-s.y)},next:{x:r.x+d*(o.x-s.x),y:r.y+d*(o.y-s.y)}}}function MM(n,t,e){const i=n.length;let s,r,o,a,l,c=Os(n,0);for(let h=0;h<i-1;++h)if(l=c,c=Os(n,h+1),!(!l||!c)){if(ur(t[h],0,yM)){e[h]=e[h+1]=0;continue}s=e[h]/t[h],r=e[h+1]/t[h],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[h]=s*o*t[h],e[h+1]=r*o*t[h])}}function SM(n,t,e="x"){const i=Xf(e),s=n.length;let r,o,a,l=Os(n,0);for(let c=0;c<s;++c){if(o=a,a=l,l=Os(n,c+1),!a)continue;const h=a[e],u=a[i];o&&(r=(h-o[e])/3,a[`cp1${e}`]=h-r,a[`cp1${i}`]=u-r*t[c]),l&&(r=(l[e]-h)/3,a[`cp2${e}`]=h+r,a[`cp2${i}`]=u+r*t[c])}}function EM(n,t="x"){const e=Xf(t),i=n.length,s=Array(i).fill(0),r=Array(i);let o,a,l,c=Os(n,0);for(o=0;o<i;++o)if(a=l,l=c,c=Os(n,o+1),!!l){if(c){const h=c[t]-l[t];s[o]=h!==0?(c[e]-l[e])/h:0}r[o]=a?c?Ls(s[o-1])!==Ls(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}MM(n,s,r),SM(n,r,t)}function To(n,t,e){return Math.max(Math.min(n,e),t)}function TM(n,t){let e,i,s,r,o,a=Mr(n[0],t);for(e=0,i=n.length;e<i;++e)o=r,r=a,a=e<i-1&&Mr(n[e+1],t),r&&(s=n[e],o&&(s.cp1x=To(s.cp1x,t.left,t.right),s.cp1y=To(s.cp1y,t.top,t.bottom)),a&&(s.cp2x=To(s.cp2x,t.left,t.right),s.cp2y=To(s.cp2y,t.top,t.bottom)))}function wM(n,t,e,i,s){let r,o,a,l;if(t.spanGaps&&(n=n.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")EM(n,s);else{let c=i?n[n.length-1]:n[0];for(r=0,o=n.length;r<o;++r)a=n[r],l=bM(c,a,n[Math.min(r+1,o-(i?0:1))%o],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}t.capBezierPoints&&TM(n,e)}function _c(){return typeof window<"u"&&typeof document<"u"}function xc(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function ea(n,t,e){let i;return typeof n=="string"?(i=parseInt(n,10),n.indexOf("%")!==-1&&(i=i/100*t.parentNode[e])):i=n,i}const fa=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function AM(n,t){return fa(n).getPropertyValue(t)}const CM=["top","right","bottom","left"];function Oi(n,t,e){const i={};e=e?"-"+e:"";for(let s=0;s<4;s++){const r=CM[s];i[r]=parseFloat(n[t+"-"+r+e])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const RM=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function PM(n,t){const e=n.touches,i=e&&e.length?e[0]:n,{offsetX:s,offsetY:r}=i;let o=!1,a,l;if(RM(s,r,n.target))a=s,l=r;else{const c=t.getBoundingClientRect();a=i.clientX-c.left,l=i.clientY-c.top,o=!0}return{x:a,y:l,box:o}}function Si(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:i}=t,s=fa(e),r=s.boxSizing==="border-box",o=Oi(s,"padding"),a=Oi(s,"border","width"),{x:l,y:c,box:h}=PM(n,e),u=o.left+(h&&a.left),d=o.top+(h&&a.top);let{width:f,height:g}=t;return r&&(f-=o.width+a.width,g-=o.height+a.height),{x:Math.round((l-u)/f*e.width/i),y:Math.round((c-d)/g*e.height/i)}}function LM(n,t,e){let i,s;if(t===void 0||e===void 0){const r=n&&xc(n);if(!r)t=n.clientWidth,e=n.clientHeight;else{const o=r.getBoundingClientRect(),a=fa(r),l=Oi(a,"border","width"),c=Oi(a,"padding");t=o.width-c.width-l.width,e=o.height-c.height-l.height,i=ea(a.maxWidth,r,"clientWidth"),s=ea(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:i||Qo,maxHeight:s||Qo}}const wo=n=>Math.round(n*10)/10;function DM(n,t,e,i){const s=fa(n),r=Oi(s,"margin"),o=ea(s.maxWidth,n,"clientWidth")||Qo,a=ea(s.maxHeight,n,"clientHeight")||Qo,l=LM(n,t,e);let{width:c,height:h}=l;if(s.boxSizing==="content-box"){const d=Oi(s,"border","width"),f=Oi(s,"padding");c-=f.width+d.width,h-=f.height+d.height}return c=Math.max(0,c-r.width),h=Math.max(0,i?c/i:h-r.height),c=wo(Math.min(c,o,l.maxWidth)),h=wo(Math.min(h,a,l.maxHeight)),c&&!h&&(h=wo(c/2)),(t!==void 0||e!==void 0)&&i&&l.height&&h>l.height&&(h=l.height,c=wo(Math.floor(h*i))),{width:c,height:h}}function Bu(n,t,e){const i=t||1,s=Math.floor(n.height*i),r=Math.floor(n.width*i);n.height=Math.floor(n.height),n.width=Math.floor(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==i||o.height!==s||o.width!==r?(n.currentDevicePixelRatio=i,o.height=s,o.width=r,n.ctx.setTransform(i,0,0,i,0,0),!0):!1}const IM=function(){let n=!1;try{const t={get passive(){return n=!0,!1}};_c()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n}();function ku(n,t){const e=AM(n,t),i=e&&e.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function Ei(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function OM(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:i==="middle"?e<.5?n.y:t.y:i==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function UM(n,t,e,i){const s={x:n.cp2x,y:n.cp2y},r={x:t.cp1x,y:t.cp1y},o=Ei(n,s,e),a=Ei(s,r,e),l=Ei(r,t,e),c=Ei(o,a,e),h=Ei(a,l,e);return Ei(c,h,e)}const NM=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,i){return e-i},leftForLtr(e,i){return e-i}}},FM=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function Ts(n,t,e){return n?NM(t,e):FM()}function $f(n,t){let e,i;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,i=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=i)}function qf(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function Yf(n){return n==="angle"?{between:Pf,compare:Nb,normalize:Jn}:{between:er,compare:(t,e)=>t-e,normalize:t=>t}}function zu({start:n,end:t,count:e,loop:i,style:s}){return{start:n%e,end:t%e,loop:i&&(t-n+1)%e===0,style:s}}function BM(n,t,e){const{property:i,start:s,end:r}=e,{between:o,normalize:a}=Yf(i),l=t.length;let{start:c,end:h,loop:u}=n,d,f;if(u){for(c+=l,h+=l,d=0,f=l;d<f&&o(a(t[c%l][i]),s,r);++d)c--,h--;c%=l,h%=l}return h<c&&(h+=l),{start:c,end:h,loop:u,style:n.style}}function kM(n,t,e){if(!e)return[n];const{property:i,start:s,end:r}=e,o=t.length,{compare:a,between:l,normalize:c}=Yf(i),{start:h,end:u,loop:d,style:f}=BM(n,t,e),g=[];let _=!1,p=null,m,b,x;const y=()=>l(s,x,m)&&a(s,x)!==0,C=()=>a(r,m)===0||l(r,x,m),T=()=>_||y(),E=()=>!_||C();for(let L=h,v=h;L<=u;++L)b=t[L%o],!b.skip&&(m=c(b[i]),m!==x&&(_=l(m,s,r),p===null&&T()&&(p=a(m,s)===0?L:v),p!==null&&E()&&(g.push(zu({start:p,end:L,loop:d,count:o,style:f})),p=null),v=L,x=m));return p!==null&&g.push(zu({start:p,end:u,loop:d,count:o,style:f})),g}function zM(n,t){const e=[],i=n.segments;for(let s=0;s<i.length;s++){const r=kM(i[s],n.points,t);r.length&&e.push(...r)}return e}function HM(n,t,e,i){let s=0,r=t-1;if(e&&!i)for(;s<t&&!n[s].skip;)s++;for(;s<t&&n[s].skip;)s++;for(s%=t,e&&(r+=s);r>s&&n[r%t].skip;)r--;return r%=t,{start:s,end:r}}function VM(n,t,e,i){const s=n.length,r=[];let o=t,a=n[t],l;for(l=t+1;l<=e;++l){const c=n[l%s];c.skip||c.stop?a.skip||(i=!1,r.push({start:t%s,end:(l-1)%s,loop:i}),t=o=c.stop?l:null):(o=l,a.skip&&(t=l)),a=c}return o!==null&&r.push({start:t%s,end:o%s,loop:i}),r}function GM(n,t){const e=n.points,i=n.options.spanGaps,s=e.length;if(!s)return[];const r=!!n._loop,{start:o,end:a}=HM(e,s,r,i);if(i===!0)return Hu(n,[{start:o,end:a,loop:r}],e,t);const l=a<o?a+s:a,c=!!n._fullLoop&&o===0&&a===s-1;return Hu(n,VM(e,o,l,c),e,t)}function Hu(n,t,e,i){return!i||!i.setContext||!e?t:WM(n,t,e,i)}function WM(n,t,e,i){const s=n._chart.getContext(),r=Vu(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,l=e.length,c=[];let h=r,u=t[0].start,d=u;function f(g,_,p,m){const b=a?-1:1;if(g!==_){for(g+=l;e[g%l].skip;)g-=b;for(;e[_%l].skip;)_+=b;g%l!==_%l&&(c.push({start:g%l,end:_%l,loop:p,style:m}),h=m,u=_%l)}}for(const g of t){u=a?u:g.start;let _=e[u%l],p;for(d=u+1;d<=g.end;d++){const m=e[d%l];p=Vu(i.setContext(qi(s,{type:"segment",p0:_,p1:m,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:o}))),XM(p,h)&&f(u,d-1,g.loop,h),_=m,h=p}u<d-1&&f(u,d-1,g.loop,h)}return c}function Vu(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function XM(n,t){if(!t)return!1;const e=[],i=function(s,r){return uc(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(n,i)!==JSON.stringify(t,i)}/*!
 * Chart.js v4.4.7
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */class $M{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,s){const r=e.listeners[s],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(i-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=Df.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const r=i.items;let o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>i.duration&&(i.duration=l._total),l.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,i,t,"progress")),r.length||(i.running=!1,this._notify(s,i,t,"complete"),i.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var kn=new $M;const Gu="transparent",qM={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const i=Du(n||Gu),s=i.valid&&Du(t||Gu);return s&&s.valid?s.mix(i,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class YM{constructor(t,e,i,s){const r=e[i];s=Eo([t.to,s,r,t.from]);const o=Eo([t.from,r,s]);this._active=!0,this._fn=t.fn||qM[t.type||typeof o],this._easing=dr[t.easing]||dr.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const s=this._target[this._prop],r=i-this._start,o=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=Eo([t.to,e,s,t.from]),this._from=Eo([t.from,s,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,i=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let l;if(this._active=r!==a&&(o||e<i),!this._active){this._target[s]=a,this._notify(!0);return}if(e<0){this._target[s]=r;return}l=e/i%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[s]=this._fn(r,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][e]()}}class jf{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!ee(t))return;const e=Object.keys(_e.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(s=>{const r=t[s];if(!ee(r))return;const o={};for(const a of e)o[a]=r[a];(Re(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!i.has(a))&&i.set(a,o)})})}_animateOptions(t,e){const i=e.options,s=KM(t,i);if(!s)return[];const r=this._createAnimations(s,i);return i.$shared&&jM(t.options.$animations,i).then(()=>{t.options=i},()=>{}),r}_createAnimations(t,e){const i=this._properties,s=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){s.push(...this._animateOptions(t,e));continue}const h=e[c];let u=r[c];const d=i.get(c);if(u)if(d&&u.active()){u.update(d,h,a);continue}else u.cancel();if(!d||!d.duration){t[c]=h;continue}r[c]=u=new YM(d,t,c,h),s.push(u)}return s}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const i=this._createAnimations(t,e);if(i.length)return kn.add(this._chart,i),!0}}function jM(n,t){const e=[],i=Object.keys(t);for(let s=0;s<i.length;s++){const r=n[i[s]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function KM(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Wu(n,t){const e=n&&n.options||{},i=e.reverse,s=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:i?r:s,end:i?s:r}}function ZM(n,t,e){if(e===!1)return!1;const i=Wu(n,e),s=Wu(t,e);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function JM(n){let t,e,i,s;return ee(n)?(t=n.top,e=n.right,i=n.bottom,s=n.left):t=e=i=s=n,{top:t,right:e,bottom:i,left:s,disabled:n===!1}}function Kf(n,t){const e=[],i=n._getSortedDatasetMetas(t);let s,r;for(s=0,r=i.length;s<r;++s)e.push(i[s].index);return e}function Xu(n,t,e,i={}){const s=n.keys,r=i.mode==="single";let o,a,l,c;if(t===null)return;let h=!1;for(o=0,a=s.length;o<a;++o){if(l=+s[o],l===e){if(h=!0,i.all)continue;break}c=n.values[l],cn(c)&&(r||t===0||Ls(t)===Ls(c))&&(t+=c)}return!h&&!i.all?0:t}function QM(n,t){const{iScale:e,vScale:i}=t,s=e.axis==="x"?"x":"y",r=i.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let l,c,h;for(l=0,c=o.length;l<c;++l)h=o[l],a[l]={[s]:h,[r]:n[h]};return a}function ml(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function tS(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function eS(n){const{min:t,max:e,minDefined:i,maxDefined:s}=n.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:s?e:Number.POSITIVE_INFINITY}}function nS(n,t,e){const i=n[t]||(n[t]={});return i[e]||(i[e]={})}function $u(n,t,e,i){for(const s of t.getMatchingVisibleMetas(i).reverse()){const r=n[s.index];if(e&&r>0||!e&&r<0)return s.index}return null}function qu(n,t){const{chart:e,_cachedMeta:i}=n,s=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=i,l=r.axis,c=o.axis,h=tS(r,o,i),u=t.length;let d;for(let f=0;f<u;++f){const g=t[f],{[l]:_,[c]:p}=g,m=g._stacks||(g._stacks={});d=m[c]=nS(s,h,_),d[a]=p,d._top=$u(d,o,!0,i.type),d._bottom=$u(d,o,!1,i.type);const b=d._visualValues||(d._visualValues={});b[a]=p}}function gl(n,t){const e=n.scales;return Object.keys(e).filter(i=>e[i].axis===t).shift()}function iS(n,t){return qi(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function sS(n,t,e){return qi(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function Ys(n,t){const e=n.controller.index,i=n.vScale&&n.vScale.axis;if(i){t=t||n._parsed;for(const s of t){const r=s._stacks;if(!r||r[i]===void 0||r[i][e]===void 0)return;delete r[i][e],r[i]._visualValues!==void 0&&r[i]._visualValues[e]!==void 0&&delete r[i]._visualValues[e]}}}const _l=n=>n==="reset"||n==="none",Yu=(n,t)=>t?n:Object.assign({},n),rS=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:Kf(e,!0),values:null};class ws{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=ml(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Ys(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),s=(u,d,f,g)=>u==="x"?d:u==="r"?g:f,r=e.xAxisID=Qt(i.xAxisID,gl(t,"x")),o=e.yAxisID=Qt(i.yAxisID,gl(t,"y")),a=e.rAxisID=Qt(i.rAxisID,gl(t,"r")),l=e.indexAxis,c=e.iAxisID=s(l,r,o,a),h=e.vAxisID=s(l,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(c),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Ru(this._data,this),t._stacked&&Ys(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(ee(e)){const s=this._cachedMeta;this._data=QM(e,s)}else if(i!==e){if(i){Ru(i,this);const s=this._cachedMeta;Ys(s),s._parsed=[]}e&&Object.isExtensible(e)&&zb(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const r=e._stacked;e._stacked=ml(e.vScale,e),e.stack!==i.stack&&(s=!0,Ys(e),e.stack=i.stack),this._resyncElements(t),(s||r!==e._stacked)&&(qu(this,e._parsed),e._stacked=ml(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:i,_data:s}=this,{iScale:r,_stacked:o}=i,a=r.axis;let l=t===0&&e===s.length?!0:i._sorted,c=t>0&&i._parsed[t-1],h,u,d;if(this._parsing===!1)i._parsed=s,i._sorted=!0,d=s;else{Re(s[t])?d=this.parseArrayData(i,s,t,e):ee(s[t])?d=this.parseObjectData(i,s,t,e):d=this.parsePrimitiveData(i,s,t,e);const f=()=>u[a]===null||c&&u[a]<c[a];for(h=0;h<e;++h)i._parsed[h+t]=u=d[h],l&&(f()&&(l=!1),c=u);i._sorted=l}o&&qu(this,d)}parsePrimitiveData(t,e,i,s){const{iScale:r,vScale:o}=t,a=r.axis,l=o.axis,c=r.getLabels(),h=r===o,u=new Array(s);let d,f,g;for(d=0,f=s;d<f;++d)g=d+i,u[d]={[a]:h||r.parse(c[g],g),[l]:o.parse(e[g],g)};return u}parseArrayData(t,e,i,s){const{xScale:r,yScale:o}=t,a=new Array(s);let l,c,h,u;for(l=0,c=s;l<c;++l)h=l+i,u=e[h],a[l]={x:r.parse(u[0],h),y:o.parse(u[1],h)};return a}parseObjectData(t,e,i,s){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(s);let h,u,d,f;for(h=0,u=s;h<u;++h)d=h+i,f=e[d],c[h]={x:r.parse(Zo(f,a),d),y:o.parse(Zo(f,l),d)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const s=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:Kf(s,!0),values:e._stacks[t.axis]._visualValues};return Xu(a,o,r.index,{mode:i})}updateRangeFromParsed(t,e,i,s){const r=i[e.axis];let o=r===null?NaN:r;const a=s&&i._stacks[e.axis];s&&a&&(s.values=a,o=Xu(s,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const i=this._cachedMeta,s=i._parsed,r=i._sorted&&t===i.iScale,o=s.length,a=this._getOtherScale(t),l=rS(e,i,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:u}=eS(a);let d,f;function g(){f=s[d];const _=f[a.axis];return!cn(f[t.axis])||h>_||u<_}for(d=0;d<o&&!(!g()&&(this.updateRangeFromParsed(c,t,f,l),r));++d);if(r){for(d=o-1;d>=0;--d)if(!g()){this.updateRangeFromParsed(c,t,f,l);break}}return c}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let s,r,o;for(s=0,r=e.length;s<r;++s)o=e[s][t.axis],cn(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,s=e.vScale,r=this.getParsed(t);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=JM(Qt(this.options.clip,ZM(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,s=i.data||[],r=e.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||s.length-a,c=this.options.drawActiveElementsOnTop;let h;for(i.dataset&&i.dataset.draw(t,r,a,l),h=a;h<a+l;++h){const u=s[h];u.hidden||(u.active&&c?o.push(u):u.draw(t,r))}for(h=0;h<o.length;++h)o[h].draw(t,r)}getStyle(t,e){const i=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const s=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=sS(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=s.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=iS(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=i,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const s=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],l=this.enableOptionSharing&&Jo(i);if(a)return Yu(a,l);const c=this.chart.config,h=c.datasetElementScopeKeys(this._type,t),u=s?[`${t}Hover`,"hover",t,""]:[t,""],d=c.getOptionScopes(this.getDataset(),h),f=Object.keys(_e.elements[t]),g=()=>this.getContext(i,s,e),_=c.resolveNamedOptions(d,f,g,u);return _.$shared&&(_.$shared=l,r[o]=Object.freeze(Yu(_,l))),_}_resolveAnimations(t,e,i){const s=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let l;if(s.options.animation!==!1){const h=this.chart.config,u=h.datasetAnimationScopeKeys(this._type,e),d=h.getOptionScopes(this.getDataset(),u);l=h.createResolver(d,this.getContext(t,i,e))}const c=new jf(s,l&&l.animations);return l&&l._cacheable&&(r[o]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||_l(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const i=this.resolveDataElementOptions(t,e),s=this._sharedOptions,r=this.getSharedOptions(i),o=this.includeOptions(e,r)||r!==s;return this.updateSharedOptions(r,e,i),{sharedOptions:r,includeOptions:o}}updateElement(t,e,i,s){_l(s)?Object.assign(t,i):this._resolveAnimations(e,s).update(t,i)}updateSharedOptions(t,e,i){t&&!_l(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,s){t.active=s;const r=this.getStyle(e,s);this._resolveAnimations(e,i,s).update(t,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const s=i.length,r=e.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,t):r<s&&this._removeElements(r,s-r)}_insertElements(t,e,i=!0){const s=this._cachedMeta,r=s.data,o=t+e;let a;const l=c=>{for(c.length+=e,a=c.length-1;a>=o;a--)c[a]=c[a-e]};for(l(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&l(s._parsed),this.parse(t,e),i&&this.updateElements(r,t,e,"reset")}updateElements(t,e,i,s){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(t,e);i._stacked&&Ys(i,s)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,i,s]=t;this[e](i,s)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}Gt(ws,"defaults",{}),Gt(ws,"datasetElementType",null),Gt(ws,"dataElementType",null);class No extends ws{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:i,data:s=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:l}=Uf(e,s,o);this._drawStart=a,this._drawCount=l,Nf(e)&&(a=0,l=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=s;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:c},t),this.updateElements(s,a,l,t)}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:h,includeOptions:u}=this._getSharedOptions(e,s),d=o.axis,f=a.axis,{spanGaps:g,segment:_}=this.options,p=Ds(g)?g:Number.POSITIVE_INFINITY,m=this.chart._animationsDisabled||r||s==="none",b=e+i,x=t.length;let y=e>0&&this.getParsed(e-1);for(let C=0;C<x;++C){const T=t[C],E=m?T:{};if(C<e||C>=b){E.skip=!0;continue}const L=this.getParsed(C),v=pe(L[f]),S=E[d]=o.getPixelForValue(L[d],C),D=E[f]=r||v?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,L,l):L[f],C);E.skip=isNaN(S)||isNaN(D)||v,E.stop=C>0&&Math.abs(L[d]-y[d])>p,_&&(E.parsed=L,E.raw=c.data[C]),u&&(E.options=h||this.resolveDataElementOptions(C,T.active?"active":s)),m||this.updateElement(T,C,E,s),y=L}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,s=t.data||[];if(!s.length)return i;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}Gt(No,"id","line"),Gt(No,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),Gt(No,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Fo extends ws{getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),l=r.getLabelForValue(o.y);return{label:i[t]||"",value:"("+a+", "+l+")"}}update(t){const e=this._cachedMeta,{data:i=[]}=e,s=this.chart._animationsDisabled;let{start:r,count:o}=Uf(e,i,s);if(this._drawStart=r,this._drawCount=o,Nf(e)&&(r=0,o=i.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:l}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=i;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(a,void 0,{animated:!s,options:c},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(i,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,h=this.resolveDataElementOptions(e,s),u=this.getSharedOptions(h),d=this.includeOptions(s,u),f=o.axis,g=a.axis,{spanGaps:_,segment:p}=this.options,m=Ds(_)?_:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||r||s==="none";let x=e>0&&this.getParsed(e-1);for(let y=e;y<e+i;++y){const C=t[y],T=this.getParsed(y),E=b?C:{},L=pe(T[g]),v=E[f]=o.getPixelForValue(T[f],y),S=E[g]=r||L?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,T,l):T[g],y);E.skip=isNaN(v)||isNaN(S)||L,E.stop=y>0&&Math.abs(T[f]-x[f])>m,p&&(E.parsed=T,E.raw=c.data[y]),d&&(E.options=u||this.resolveDataElementOptions(y,C.active?"active":s)),b||this.updateElement(C,y,E,s),x=T}this.updateSharedOptions(u,s,h)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let l=e.length-1;l>=0;--l)a=Math.max(a,e[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}const i=t.dataset,s=i.options&&i.options.borderWidth||0;if(!e.length)return s;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(s,r,o)/2}}Gt(Fo,"id","scatter"),Gt(Fo,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),Gt(Fo,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});function bi(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class vc{constructor(t){Gt(this,"options");this.options=t||{}}static override(t){Object.assign(vc.prototype,t)}init(){}formats(){return bi()}parse(){return bi()}format(){return bi()}add(){return bi()}diff(){return bi()}startOf(){return bi()}endOf(){return bi()}}var oS={_date:vc};function aS(n,t,e,i){const{controller:s,data:r,_sorted:o}=n,a=s._cachedMeta.iScale;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const l=a._reversePixels?Bb:Ci;if(i){if(s._sharedOptions){const c=r[0],h=typeof c.getRange=="function"&&c.getRange(t);if(h){const u=l(r,t,e-h),d=l(r,t,e+h);return{lo:u.lo,hi:d.hi}}}}else return l(r,t,e)}return{lo:0,hi:r.length-1}}function pa(n,t,e,i,s){const r=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,l=r.length;a<l;++a){const{index:c,data:h}=r[a],{lo:u,hi:d}=aS(r[a],t,o,s);for(let f=u;f<=d;++f){const g=h[f];g.skip||i(g,c,f)}}}function lS(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(i,s){const r=t?Math.abs(i.x-s.x):0,o=e?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function xl(n,t,e,i,s){const r=[];return!s&&!n.isPointInArea(t)||pa(n,e,t,function(a,l,c){!s&&!Mr(a,n.chartArea,0)||a.inRange(t.x,t.y,i)&&r.push({element:a,datasetIndex:l,index:c})},!0),r}function cS(n,t,e,i){let s=[];function r(o,a,l){const{startAngle:c,endAngle:h}=o.getProps(["startAngle","endAngle"],i),{angle:u}=Ub(o,{x:t.x,y:t.y});Pf(u,c,h)&&s.push({element:o,datasetIndex:a,index:l})}return pa(n,e,t,r),s}function hS(n,t,e,i,s,r){let o=[];const a=lS(e);let l=Number.POSITIVE_INFINITY;function c(h,u,d){const f=h.inRange(t.x,t.y,s);if(i&&!f)return;const g=h.getCenterPoint(s);if(!(!!r||n.isPointInArea(g))&&!f)return;const p=a(t,g);p<l?(o=[{element:h,datasetIndex:u,index:d}],l=p):p===l&&o.push({element:h,datasetIndex:u,index:d})}return pa(n,e,t,c),o}function vl(n,t,e,i,s,r){return!r&&!n.isPointInArea(t)?[]:e==="r"&&!i?cS(n,t,e,s):hS(n,t,e,i,s,r)}function ju(n,t,e,i,s){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return pa(n,e,t,(l,c,h)=>{l[o]&&l[o](t[e],s)&&(r.push({element:l,datasetIndex:c,index:h}),a=a||l.inRange(t.x,t.y,s))}),i&&!a?[]:r}var uS={modes:{index(n,t,e,i){const s=Si(t,n),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?xl(n,s,r,i,o):vl(n,s,r,!1,i,o),l=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(c=>{const h=a[0].index,u=c.data[h];u&&!u.skip&&l.push({element:u,datasetIndex:c.index,index:h})}),l):[]},dataset(n,t,e,i){const s=Si(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?xl(n,s,r,i,o):vl(n,s,r,!1,i,o);if(a.length>0){const l=a[0].datasetIndex,c=n.getDatasetMeta(l).data;a=[];for(let h=0;h<c.length;++h)a.push({element:c[h],datasetIndex:l,index:h})}return a},point(n,t,e,i){const s=Si(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return xl(n,s,r,i,o)},nearest(n,t,e,i){const s=Si(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return vl(n,s,r,e.intersect,i,o)},x(n,t,e,i){const s=Si(t,n);return ju(n,s,"x",e.intersect,i)},y(n,t,e,i){const s=Si(t,n);return ju(n,s,"y",e.intersect,i)}}};const Zf=["left","top","right","bottom"];function js(n,t){return n.filter(e=>e.pos===t)}function Ku(n,t){return n.filter(e=>Zf.indexOf(e.pos)===-1&&e.box.axis===t)}function Ks(n,t){return n.sort((e,i)=>{const s=t?i:e,r=t?e:i;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function dS(n){const t=[];let e,i,s,r,o,a;for(e=0,i=(n||[]).length;e<i;++e)s=n[e],{position:r,options:{stack:o,stackWeight:a=1}}=s,t.push({index:e,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return t}function fS(n){const t={};for(const e of n){const{stack:i,pos:s,stackWeight:r}=e;if(!i||!Zf.includes(s))continue;const o=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function pS(n,t){const e=fS(n),{vBoxMaxWidth:i,hBoxMaxHeight:s}=t;let r,o,a;for(r=0,o=n.length;r<o;++r){a=n[r];const{fullSize:l}=a.box,c=e[a.stack],h=c&&a.stackWeight/c.weight;a.horizontal?(a.width=h?h*i:l&&t.availableWidth,a.height=s):(a.width=i,a.height=h?h*s:l&&t.availableHeight)}return e}function mS(n){const t=dS(n),e=Ks(t.filter(c=>c.box.fullSize),!0),i=Ks(js(t,"left"),!0),s=Ks(js(t,"right")),r=Ks(js(t,"top"),!0),o=Ks(js(t,"bottom")),a=Ku(t,"x"),l=Ku(t,"y");return{fullSize:e,leftAndTop:i.concat(r),rightAndBottom:s.concat(l).concat(o).concat(a),chartArea:js(t,"chartArea"),vertical:i.concat(s).concat(l),horizontal:r.concat(o).concat(a)}}function Zu(n,t,e,i){return Math.max(n[e],t[e])+Math.max(n[i],t[i])}function Jf(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function gS(n,t,e,i){const{pos:s,box:r}=e,o=n.maxPadding;if(!ee(s)){e.size&&(n[s]-=e.size);const u=i[e.stack]||{size:0,count:1};u.size=Math.max(u.size,e.horizontal?r.height:r.width),e.size=u.size/u.count,n[s]+=e.size}r.getPadding&&Jf(o,r.getPadding());const a=Math.max(0,t.outerWidth-Zu(o,n,"left","right")),l=Math.max(0,t.outerHeight-Zu(o,n,"top","bottom")),c=a!==n.w,h=l!==n.h;return n.w=a,n.h=l,e.horizontal?{same:c,other:h}:{same:h,other:c}}function _S(n){const t=n.maxPadding;function e(i){const s=Math.max(t[i]-n[i],0);return n[i]+=s,s}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function xS(n,t){const e=t.maxPadding;function i(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return i(n?["left","right"]:["top","bottom"])}function nr(n,t,e,i){const s=[];let r,o,a,l,c,h;for(r=0,o=n.length,c=0;r<o;++r){a=n[r],l=a.box,l.update(a.width||t.w,a.height||t.h,xS(a.horizontal,t));const{same:u,other:d}=gS(t,e,a,i);c|=u&&s.length,h=h||d,l.fullSize||s.push(a)}return c&&nr(s,t,e,i)||h}function Ao(n,t,e,i,s){n.top=e,n.left=t,n.right=t+i,n.bottom=e+s,n.width=i,n.height=s}function Ju(n,t,e,i){const s=e.padding;let{x:r,y:o}=t;for(const a of n){const l=a.box,c=i[a.stack]||{placed:0,weight:1},h=a.stackWeight/c.weight||1;if(a.horizontal){const u=t.w*h,d=c.size||l.height;Jo(c.start)&&(o=c.start),l.fullSize?Ao(l,s.left,o,e.outerWidth-s.right-s.left,d):Ao(l,t.left+c.placed,o,u,d),c.start=o,c.placed+=u,o=l.bottom}else{const u=t.h*h,d=c.size||l.width;Jo(c.start)&&(r=c.start),l.fullSize?Ao(l,r,s.top,d,e.outerHeight-s.bottom-s.top):Ao(l,r,t.top+c.placed,d,u),c.start=r,c.placed+=u,r=l.right}}t.x=r,t.y=o}var ii={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,i){if(!n)return;const s=yn(n.options.layout.padding),r=Math.max(t-s.width,0),o=Math.max(e-s.height,0),a=mS(n.boxes),l=a.vertical,c=a.horizontal;ie(n.boxes,_=>{typeof _.beforeLayout=="function"&&_.beforeLayout()});const h=l.reduce((_,p)=>p.box.options&&p.box.options.display===!1?_:_+1,0)||1,u=Object.freeze({outerWidth:t,outerHeight:e,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/h,hBoxMaxHeight:o/2}),d=Object.assign({},s);Jf(d,yn(i));const f=Object.assign({maxPadding:d,w:r,h:o,x:s.left,y:s.top},s),g=pS(l.concat(c),u);nr(a.fullSize,f,u,g),nr(l,f,u,g),nr(c,f,u,g)&&nr(l,f,u,g),_S(f),Ju(a.leftAndTop,f,u,g),f.x+=f.w,f.y+=f.h,Ju(a.rightAndBottom,f,u,g),n.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},ie(a.chartArea,_=>{const p=_.box;Object.assign(p,n.chartArea),p.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class Qf{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,s){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,s?Math.floor(e/s):i)}}isAttached(t){return!0}updateConfig(t){}}class vS extends Qf{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Bo="$chartjs",yS={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Qu=n=>n===null||n==="";function bS(n,t){const e=n.style,i=n.getAttribute("height"),s=n.getAttribute("width");if(n[Bo]={initial:{height:i,width:s,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Qu(s)){const r=ku(n,"width");r!==void 0&&(n.width=r)}if(Qu(i))if(n.style.height==="")n.height=n.width/(t||2);else{const r=ku(n,"height");r!==void 0&&(n.height=r)}return n}const tp=IM?{passive:!0}:!1;function MS(n,t,e){n&&n.addEventListener(t,e,tp)}function SS(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,tp)}function ES(n,t){const e=yS[n.type]||n.type,{x:i,y:s}=Si(n,t);return{type:e,chart:t,native:n,x:i!==void 0?i:null,y:s!==void 0?s:null}}function na(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function TS(n,t,e){const i=n.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||na(a.addedNodes,i),o=o&&!na(a.removedNodes,i);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}function wS(n,t,e){const i=n.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||na(a.removedNodes,i),o=o&&!na(a.addedNodes,i);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}const Sr=new Map;let td=0;function ep(){const n=window.devicePixelRatio;n!==td&&(td=n,Sr.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function AS(n,t){Sr.size||window.addEventListener("resize",ep),Sr.set(n,t)}function CS(n){Sr.delete(n),Sr.size||window.removeEventListener("resize",ep)}function RS(n,t,e){const i=n.canvas,s=i&&xc(i);if(!s)return;const r=If((a,l)=>{const c=s.clientWidth;e(a,l),c<s.clientWidth&&e()},window),o=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,h=l.contentRect.height;c===0&&h===0||r(c,h)});return o.observe(s),AS(n,r),o}function yl(n,t,e){e&&e.disconnect(),t==="resize"&&CS(n)}function PS(n,t,e){const i=n.canvas,s=If(r=>{n.ctx!==null&&e(ES(r,n))},n);return MS(i,t,s),s}class LS extends Qf{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(bS(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e[Bo])return!1;const i=e[Bo].initial;["height","width"].forEach(r=>{const o=i[r];pe(o)?e.removeAttribute(r):e.setAttribute(r,o)});const s=i.style||{};return Object.keys(s).forEach(r=>{e.style[r]=s[r]}),e.width=e.width,delete e[Bo],!0}addEventListener(t,e,i){this.removeEventListener(t,e);const s=t.$proxies||(t.$proxies={}),o={attach:TS,detach:wS,resize:RS}[e]||PS;s[e]=o(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),s=i[e];if(!s)return;({attach:yl,detach:yl,resize:yl}[e]||SS)(t,e,s),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,s){return DM(t,e,i,s)}isAttached(t){const e=t&&xc(t);return!!(e&&e.isConnected)}}function DS(n){return!_c()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?vS:LS}class hi{constructor(){Gt(this,"x");Gt(this,"y");Gt(this,"active",!1);Gt(this,"options");Gt(this,"$animations")}tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return Ds(this.x)&&Ds(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const s={};return t.forEach(r=>{s[r]=i[r]&&i[r].active()?i[r]._to:this[r]}),s}}Gt(hi,"defaults",{}),Gt(hi,"defaultRoutes");function IS(n,t){const e=n.options.ticks,i=OS(n),s=Math.min(e.maxTicksLimit||i,i),r=e.major.enabled?NS(t):[],o=r.length,a=r[0],l=r[o-1],c=[];if(o>s)return FS(t,c,r,o/s),c;const h=US(r,t,s);if(o>0){let u,d;const f=o>1?Math.round((l-a)/(o-1)):null;for(Co(t,c,h,pe(f)?0:a-f,a),u=0,d=o-1;u<d;u++)Co(t,c,h,r[u],r[u+1]);return Co(t,c,h,l,pe(f)?t.length:l+f),c}return Co(t,c,h),c}function OS(n){const t=n.options.offset,e=n._tickSize(),i=n._length/e+(t?0:1),s=n._maxLength/e;return Math.floor(Math.min(i,s))}function US(n,t,e){const i=BS(n),s=t.length/e;if(!i)return Math.max(s,1);const r=Lb(i);for(let o=0,a=r.length-1;o<a;o++){const l=r[o];if(l>s)return l}return Math.max(s,1)}function NS(n){const t=[];let e,i;for(e=0,i=n.length;e<i;e++)n[e].major&&t.push(e);return t}function FS(n,t,e,i){let s=0,r=e[0],o;for(i=Math.ceil(i),o=0;o<n.length;o++)o===r&&(t.push(n[o]),s++,r=e[s*i])}function Co(n,t,e,i,s){const r=Qt(i,0),o=Math.min(Qt(s,n.length),n.length);let a=0,l,c,h;for(e=Math.ceil(e),s&&(l=s-i,e=l/Math.floor(l/e)),h=r;h<0;)a++,h=Math.round(r+a*e);for(c=Math.max(r,0);c<o;c++)c===h&&(t.push(n[c]),a++,h=Math.round(r+a*e))}function BS(n){const t=n.length;let e,i;if(t<2)return!1;for(i=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==i)return!1;return i}const kS=n=>n==="left"?"right":n==="right"?"left":n,ed=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,nd=(n,t)=>Math.min(t||n,n);function id(n,t){const e=[],i=n.length/t,s=n.length;let r=0;for(;r<s;r+=i)e.push(n[Math.floor(r)]);return e}function zS(n,t,e){const i=n.ticks.length,s=Math.min(t,i-1),r=n._startPixel,o=n._endPixel,a=1e-6;let l=n.getPixelForTick(s),c;if(!(e&&(i===1?c=Math.max(l-r,o-l):t===0?c=(n.getPixelForTick(1)-l)/2:c=(l-n.getPixelForTick(s-1))/2,l+=s<t?c:-c,l<r-a||l>o+a)))return l}function HS(n,t){ie(n,e=>{const i=e.gc,s=i.length/2;let r;if(s>t){for(r=0;r<s;++r)delete e.data[i[r]];i.splice(0,s)}})}function Zs(n){return n.drawTicks?n.tickLength:0}function sd(n,t){if(!n.display)return 0;const e=$e(n.font,t),i=yn(n.padding);return(Re(n.text)?n.text.length:1)*e.lineHeight+i.height}function VS(n,t){return qi(n,{scale:t,type:"scale"})}function GS(n,t,e){return qi(n,{tick:e,index:t,type:"tick"})}function WS(n,t,e){let i=Of(n);return(e&&t!=="right"||!e&&t==="right")&&(i=kS(i)),i}function XS(n,t,e,i){const{top:s,left:r,bottom:o,right:a,chart:l}=n,{chartArea:c,scales:h}=l;let u=0,d,f,g;const _=o-s,p=a-r;if(n.isHorizontal()){if(f=Je(i,r,a),ee(e)){const m=Object.keys(e)[0],b=e[m];g=h[m].getPixelForValue(b)+_-t}else e==="center"?g=(c.bottom+c.top)/2+_-t:g=ed(n,e,t);d=a-r}else{if(ee(e)){const m=Object.keys(e)[0],b=e[m];f=h[m].getPixelForValue(b)-p+t}else e==="center"?f=(c.left+c.right)/2-p+t:f=ed(n,e,t);g=Je(i,o,s),u=e==="left"?-xn:xn}return{titleX:f,titleY:g,maxWidth:d,rotation:u}}class Lr extends hi{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:s}=this;return t=Sn(t,Number.POSITIVE_INFINITY),e=Sn(e,Number.NEGATIVE_INFINITY),i=Sn(i,Number.POSITIVE_INFINITY),s=Sn(s,Number.NEGATIVE_INFINITY),{min:Sn(t,i),max:Sn(e,s),minDefined:cn(t),maxDefined:cn(e)}}getMinMax(t){let{min:e,max:i,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:e,max:i};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)o=a[l].controller.getMinMax(this,t),s||(e=Math.min(e,o.min)),r||(i=Math.max(i,o.max));return e=r&&e>i?i:e,i=s&&e>i?e:i,{min:Sn(e,Sn(i,e)),max:Sn(i,Sn(e,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){ae(this.options.beforeUpdate,[this])}update(t,e,i){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=hM(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?id(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=IS(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,i;this.isHorizontal()?(e=this.left,i=this.right):(e=this.top,i=this.bottom,t=!t),this._startPixel=e,this._endPixel=i,this._reversePixels=t,this._length=i-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){ae(this.options.afterUpdate,[this])}beforeSetDimensions(){ae(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){ae(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),ae(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){ae(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let i,s,r;for(i=0,s=t.length;i<s;i++)r=t[i],r.label=ae(e.callback,[r.value,i,t],this)}afterTickToLabelConversion(){ae(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){ae(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,i=nd(this.ticks.length,t.ticks.maxTicksLimit),s=e.minRotation||0,r=e.maxRotation;let o=s,a,l,c;if(!this._isVisible()||!e.display||s>=r||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const h=this._getLabelSizes(),u=h.widest.width,d=h.highest.height,f=vn(this.chart.width-u,0,this.maxWidth);a=t.offset?this.maxWidth/i:f/(i-1),u+6>a&&(a=f/(i-(t.offset?.5:1)),l=this.maxHeight-Zs(t.grid)-e.padding-sd(t.title,this.chart.options.font),c=Math.sqrt(u*u+d*d),o=Ob(Math.min(Math.asin(vn((h.highest.height+6)/a,-1,1)),Math.asin(vn(l/c,-1,1))-Math.asin(vn(d/c,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){ae(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){ae(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=sd(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=Zs(r)+l):(t.height=this.maxHeight,t.width=Zs(r)+l),i.display&&this.ticks.length){const{first:c,last:h,widest:u,highest:d}=this._getLabelSizes(),f=i.padding*2,g=Ai(this.labelRotation),_=Math.cos(g),p=Math.sin(g);if(a){const m=i.mirror?0:p*u.width+_*d.height;t.height=Math.min(this.maxHeight,t.height+m+f)}else{const m=i.mirror?0:_*u.width+p*d.height;t.width=Math.min(this.maxWidth,t.width+m+f)}this._calculatePadding(c,h,p,_)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,s){const{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,u=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,f=0;l?c?(d=s*t.width,f=i*e.height):(d=i*t.height,f=s*e.width):r==="start"?f=e.width:r==="end"?d=t.width:r!=="inner"&&(d=t.width/2,f=e.width/2),this.paddingLeft=Math.max((d-h+o)*this.width/(this.width-h),0),this.paddingRight=Math.max((f-u+o)*this.width/(this.width-u),0)}else{let h=e.height/2,u=t.height/2;r==="start"?(h=0,u=t.height):r==="end"&&(h=e.height,u=0),this.paddingTop=h+o,this.paddingBottom=u+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){ae(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,i;for(e=0,i=t.length;e<i;e++)pe(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=id(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],l=Math.floor(e/nd(e,i));let c=0,h=0,u,d,f,g,_,p,m,b,x,y,C;for(u=0;u<e;u+=l){if(g=t[u].label,_=this._resolveTickFontOptions(u),s.font=p=_.string,m=r[p]=r[p]||{data:{},gc:[]},b=_.lineHeight,x=y=0,!pe(g)&&!Re(g))x=Ou(s,m.data,m.gc,x,g),y=b;else if(Re(g))for(d=0,f=g.length;d<f;++d)C=g[d],!pe(C)&&!Re(C)&&(x=Ou(s,m.data,m.gc,x,C),y+=b);o.push(x),a.push(y),c=Math.max(x,c),h=Math.max(y,h)}HS(r,e);const T=o.indexOf(c),E=a.indexOf(h),L=v=>({width:o[v]||0,height:a[v]||0});return{first:L(0),last:L(e-1),widest:L(T),highest:L(E),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return Fb(this._alignToPixels?yi(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=GS(this.getContext(),t,i))}return this.$context||(this.$context=VS(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=Ai(this.labelRotation),i=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*i>a*s?a/i:l/s:l*s<a*i?l/i:a/s}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,s=this.options,{grid:r,position:o,border:a}=s,l=r.offset,c=this.isHorizontal(),u=this.ticks.length+(l?1:0),d=Zs(r),f=[],g=a.setContext(this.getContext()),_=g.display?g.width:0,p=_/2,m=function(H){return yi(i,H,_)};let b,x,y,C,T,E,L,v,S,D,B,j;if(o==="top")b=m(this.bottom),E=this.bottom-d,v=b-p,D=m(t.top)+p,j=t.bottom;else if(o==="bottom")b=m(this.top),D=t.top,j=m(t.bottom)-p,E=b+p,v=this.top+d;else if(o==="left")b=m(this.right),T=this.right-d,L=b-p,S=m(t.left)+p,B=t.right;else if(o==="right")b=m(this.left),S=t.left,B=m(t.right)-p,T=b+p,L=this.left+d;else if(e==="x"){if(o==="center")b=m((t.top+t.bottom)/2+.5);else if(ee(o)){const H=Object.keys(o)[0],Y=o[H];b=m(this.chart.scales[H].getPixelForValue(Y))}D=t.top,j=t.bottom,E=b+p,v=E+d}else if(e==="y"){if(o==="center")b=m((t.left+t.right)/2);else if(ee(o)){const H=Object.keys(o)[0],Y=o[H];b=m(this.chart.scales[H].getPixelForValue(Y))}T=b-p,L=T-d,S=t.left,B=t.right}const I=Qt(s.ticks.maxTicksLimit,u),F=Math.max(1,Math.ceil(u/I));for(x=0;x<u;x+=F){const H=this.getContext(x),Y=r.setContext(H),K=a.setContext(H),q=Y.lineWidth,tt=Y.color,nt=K.dash||[],ft=K.dashOffset,W=Y.tickWidth,et=Y.tickColor,mt=Y.tickBorderDash||[],Mt=Y.tickBorderDashOffset;y=zS(this,x,l),y!==void 0&&(C=yi(i,y,q),c?T=L=S=B=C:E=v=D=j=C,f.push({tx1:T,ty1:E,tx2:L,ty2:v,x1:S,y1:D,x2:B,y2:j,width:q,color:tt,borderDash:nt,borderDashOffset:ft,tickWidth:W,tickColor:et,tickBorderDash:mt,tickBorderDashOffset:Mt}))}return this._ticksLength=u,this._borderValue=b,f}_computeLabelItems(t){const e=this.axis,i=this.options,{position:s,ticks:r}=i,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:h,mirror:u}=r,d=Zs(i.grid),f=d+h,g=u?-h:f,_=-Ai(this.labelRotation),p=[];let m,b,x,y,C,T,E,L,v,S,D,B,j="middle";if(s==="top")T=this.bottom-g,E=this._getXAxisLabelAlignment();else if(s==="bottom")T=this.top+g,E=this._getXAxisLabelAlignment();else if(s==="left"){const F=this._getYAxisLabelAlignment(d);E=F.textAlign,C=F.x}else if(s==="right"){const F=this._getYAxisLabelAlignment(d);E=F.textAlign,C=F.x}else if(e==="x"){if(s==="center")T=(t.top+t.bottom)/2+f;else if(ee(s)){const F=Object.keys(s)[0],H=s[F];T=this.chart.scales[F].getPixelForValue(H)+f}E=this._getXAxisLabelAlignment()}else if(e==="y"){if(s==="center")C=(t.left+t.right)/2-f;else if(ee(s)){const F=Object.keys(s)[0],H=s[F];C=this.chart.scales[F].getPixelForValue(H)}E=this._getYAxisLabelAlignment(d).textAlign}e==="y"&&(l==="start"?j="top":l==="end"&&(j="bottom"));const I=this._getLabelSizes();for(m=0,b=a.length;m<b;++m){x=a[m],y=x.label;const F=r.setContext(this.getContext(m));L=this.getPixelForTick(m)+r.labelOffset,v=this._resolveTickFontOptions(m),S=v.lineHeight,D=Re(y)?y.length:1;const H=D/2,Y=F.color,K=F.textStrokeColor,q=F.textStrokeWidth;let tt=E;o?(C=L,E==="inner"&&(m===b-1?tt=this.options.reverse?"left":"right":m===0?tt=this.options.reverse?"right":"left":tt="center"),s==="top"?c==="near"||_!==0?B=-D*S+S/2:c==="center"?B=-I.highest.height/2-H*S+S:B=-I.highest.height+S/2:c==="near"||_!==0?B=S/2:c==="center"?B=I.highest.height/2-H*S:B=I.highest.height-D*S,u&&(B*=-1),_!==0&&!F.showLabelBackdrop&&(C+=S/2*Math.sin(_))):(T=L,B=(1-D)*S/2);let nt;if(F.showLabelBackdrop){const ft=yn(F.backdropPadding),W=I.heights[m],et=I.widths[m];let mt=B-ft.top,Mt=0-ft.left;switch(j){case"middle":mt-=W/2;break;case"bottom":mt-=W;break}switch(E){case"center":Mt-=et/2;break;case"right":Mt-=et;break;case"inner":m===b-1?Mt-=et:m>0&&(Mt-=et/2);break}nt={left:Mt,top:mt,width:et+ft.width,height:W+ft.height,color:F.backdropColor}}p.push({label:y,font:v,textOffset:B,options:{rotation:_,color:Y,strokeColor:K,strokeWidth:q,textAlign:tt,textBaseline:j,translation:[C,T],backdrop:nt}})}return p}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Ai(this.labelRotation))return t==="top"?"left":"right";let s="center";return e.align==="start"?s="left":e.align==="end"?s="right":e.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,l=o.widest.width;let c,h;return e==="left"?s?(h=this.right+r,i==="near"?c="left":i==="center"?(c="center",h+=l/2):(c="right",h+=l)):(h=this.right-a,i==="near"?c="right":i==="center"?(c="center",h-=l/2):(c="left",h=this.left)):e==="right"?s?(h=this.left+r,i==="near"?c="right":i==="center"?(c="center",h-=l/2):(c="left",h-=l)):(h=this.left+a,i==="near"?c="left":i==="center"?(c="center",h+=l/2):(c="right",h=this.right)):c="right",{textAlign:c,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:s,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,s,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const s=this.ticks.findIndex(r=>r.value===t);return s>=0?e.setContext(this.getContext(s)).lineWidth:0}drawGrid(t){const e=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(l,c,h)=>{!h.width||!h.color||(i.save(),i.lineWidth=h.width,i.strokeStyle=h.color,i.setLineDash(h.borderDash||[]),i.lineDashOffset=h.borderDashOffset,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(c.x,c.y),i.stroke(),i.restore())};if(e.display)for(r=0,o=s.length;r<o;++r){const l=s[r];e.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:i,grid:s}}=this,r=i.setContext(this.getContext()),o=i.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,h,u,d;this.isHorizontal()?(c=yi(t,this.left,o)-o/2,h=yi(t,this.right,a)+a/2,u=d=l):(u=yi(t,this.top,o)-o/2,d=yi(t,this.bottom,a)+a/2,c=h=l),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(c,u),e.lineTo(h,d),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&dc(i,s);const r=this.getLabelItems(t);for(const o of r){const a=o.options,l=o.font,c=o.label,h=o.textOffset;ta(i,c,0,h,l,a)}s&&fc(i)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:s}}=this;if(!i.display)return;const r=$e(i.font),o=yn(i.padding),a=i.align;let l=r.lineHeight/2;e==="bottom"||e==="center"||ee(e)?(l+=o.bottom,Re(i.text)&&(l+=r.lineHeight*(i.text.length-1))):l+=o.top;const{titleX:c,titleY:h,maxWidth:u,rotation:d}=XS(this,l,e,a);ta(t,i.text,0,0,r,{color:i.color,maxWidth:u,rotation:d,textAlign:WS(a,e,s),textBaseline:"middle",translation:[c,h]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=Qt(t.grid&&t.grid.z,-1),s=Qt(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Lr.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[i]===this.id&&(!t||a.type===t)&&s.push(a)}return s}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return $e(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Ro{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;YS(e)&&(i=this.register(e));const s=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in s||(s[r]=t,$S(t,o,i),this.override&&_e.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,s=this.scope;i in e&&delete e[i],s&&i in _e[s]&&(delete _e[s][i],this.override&&delete Vi[i])}}function $S(n,t,e){const i=br(Object.create(null),[e?_e.get(e):{},_e.get(t),n.defaults]);_e.set(t,i),n.defaultRoutes&&qS(t,n.defaultRoutes),n.descriptors&&_e.describe(t,n.descriptors)}function qS(n,t){Object.keys(t).forEach(e=>{const i=e.split("."),s=i.pop(),r=[n].concat(i).join("."),o=t[e].split("."),a=o.pop(),l=o.join(".");_e.route(r,s,l,a)})}function YS(n){return"id"in n&&"defaults"in n}class jS{constructor(){this.controllers=new Ro(ws,"datasets",!0),this.elements=new Ro(hi,"elements"),this.plugins=new Ro(Object,"plugins"),this.scales=new Ro(Lr,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(s=>{const r=i||this._getRegistryForType(s);i||r.isForType(s)||r===this.plugins&&s.id?this._exec(t,r,s):ie(s,o=>{const a=i||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,i){const s=cc(t);ae(i["before"+s],[],i),e[t](i),ae(i["after"+s],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const s=e.get(t);if(s===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return s}}var Tn=new jS;class KS{constructor(){this._init=[]}notify(t,e,i,s){e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const r=s?this._descriptors(t).filter(s):this._descriptors(t),o=this._notify(r,t,e,i);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall")),o}_notify(t,e,i,s){s=s||{};for(const r of t){const o=r.plugin,a=o[i],l=[e,s,r.options];if(ae(a,l,o)===!1&&s.cancelable)return!1}return!0}invalidate(){pe(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,s=Qt(i.options&&i.options.plugins,{}),r=ZS(i);return s===!1&&!e?[]:QS(t,r,s,e)}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,s=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(s(e,i),t,"stop"),this._notify(s(i,e),t,"start")}}function ZS(n){const t={},e=[],i=Object.keys(Tn.plugins.items);for(let r=0;r<i.length;r++)e.push(Tn.getPlugin(i[r]));const s=n.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function JS(n,t){return!t&&n===!1?null:n===!0?{}:n}function QS(n,{plugins:t,localIds:e},i,s){const r=[],o=n.getContext();for(const a of t){const l=a.id,c=JS(i[l],s);c!==null&&r.push({plugin:a,options:tE(n.config,{plugin:a,local:e[l]},c,o)})}return r}function tE(n,{plugin:t,local:e},i,s){const r=n.pluginScopeKeys(t),o=n.getOptionScopes(i,r);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Vl(n,t){const e=_e.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function eE(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function nE(n,t){return n===t?"_index_":"_value_"}function rd(n){if(n==="x"||n==="y"||n==="r")return n}function iE(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function Gl(n,...t){if(rd(n))return n;for(const e of t){const i=e.axis||iE(e.position)||n.length>1&&rd(n[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function od(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function sE(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(i=>i.xAxisID===n||i.yAxisID===n);if(e.length)return od(n,"x",e[0])||od(n,"y",e[0])}return{}}function rE(n,t){const e=Vi[n.type]||{scales:{}},i=t.scales||{},s=Vl(n.type,t),r=Object.create(null);return Object.keys(i).forEach(o=>{const a=i[o];if(!ee(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=Gl(o,a,sE(o,n),_e.scales[a.type]),c=nE(l,s),h=e.scales||{};r[o]=hr(Object.create(null),[{axis:l},a,h[l],h[c]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,l=o.indexAxis||Vl(a,t),h=(Vi[a]||{}).scales||{};Object.keys(h).forEach(u=>{const d=eE(u,l),f=o[d+"AxisID"]||d;r[f]=r[f]||Object.create(null),hr(r[f],[{axis:d},i[f],h[u]])})}),Object.keys(r).forEach(o=>{const a=r[o];hr(a,[_e.scales[a.type],_e.scale])}),r}function np(n){const t=n.options||(n.options={});t.plugins=Qt(t.plugins,{}),t.scales=rE(n,t)}function ip(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function oE(n){return n=n||{},n.data=ip(n.data),np(n),n}const ad=new Map,sp=new Set;function Po(n,t){let e=ad.get(n);return e||(e=t(),ad.set(n,e),sp.add(e)),e}const Js=(n,t,e)=>{const i=Zo(t,e);i!==void 0&&n.add(i)};class aE{constructor(t){this._config=oE(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=ip(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),np(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Po(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return Po(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return Po(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,i=this.type;return Po(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const i=this._scopeCache;let s=i.get(t);return(!s||e)&&(s=new Map,i.set(t,s)),s}getOptionScopes(t,e,i){const{options:s,type:r}=this,o=this._cachedScopes(t,i),a=o.get(e);if(a)return a;const l=new Set;e.forEach(h=>{t&&(l.add(t),h.forEach(u=>Js(l,t,u))),h.forEach(u=>Js(l,s,u)),h.forEach(u=>Js(l,Vi[r]||{},u)),h.forEach(u=>Js(l,_e,u)),h.forEach(u=>Js(l,kl,u))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),sp.has(e)&&o.set(e,c),c}chartOptionScopes(){const{options:t,type:e}=this;return[t,Vi[e]||{},_e.datasets[e]||{},{type:e},_e,kl]}resolveNamedOptions(t,e,i,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=ld(this._resolverCache,t,s);let l=o;if(cE(o,e)){r.$shared=!1,i=ci(i)?i():i;const c=this.createResolver(t,i,a);l=Is(o,i,c)}for(const c of e)r[c]=l[c];return r}createResolver(t,e,i=[""],s){const{resolver:r}=ld(this._resolverCache,t,i);return ee(e)?Is(r,e,void 0,s):r}}function ld(n,t,e){let i=n.get(t);i||(i=new Map,n.set(t,i));const s=e.join();let r=i.get(s);return r||(r={resolver:pc(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},i.set(s,r)),r}const lE=n=>ee(n)&&Object.getOwnPropertyNames(n).some(t=>ci(n[t]));function cE(n,t){const{isScriptable:e,isIndexable:i}=Hf(n);for(const s of t){const r=e(s),o=i(s),a=(o||r)&&n[s];if(r&&(ci(a)||lE(a))||o&&Re(a))return!0}return!1}var hE="4.4.7";const uE=["top","bottom","left","right","chartArea"];function cd(n,t){return n==="top"||n==="bottom"||uE.indexOf(n)===-1&&t==="x"}function hd(n,t){return function(e,i){return e[n]===i[n]?e[t]-i[t]:e[n]-i[n]}}function ud(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),ae(e&&e.onComplete,[n],t)}function dE(n){const t=n.chart,e=t.options.animation;ae(e&&e.onProgress,[n],t)}function rp(n){return _c()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const ko={},dd=n=>{const t=rp(n);return Object.values(ko).filter(e=>e.canvas===t).pop()};function fE(n,t,e){const i=Object.keys(n);for(const s of i){const r=+s;if(r>=t){const o=n[s];delete n[s],(e>0||r>t)&&(n[r+e]=o)}}}function pE(n,t,e,i){return!e||n.type==="mouseout"?null:i?t:n}function Lo(n,t,e){return n.options.clip?n[e]:t[e]}function mE(n,t){const{xScale:e,yScale:i}=n;return e&&i?{left:Lo(e,t,"left"),right:Lo(e,t,"right"),top:Lo(i,t,"top"),bottom:Lo(i,t,"bottom")}:t}class Ge{static register(...t){Tn.add(...t),fd()}static unregister(...t){Tn.remove(...t),fd()}constructor(t,e){const i=this.config=new aE(e),s=rp(t),r=dd(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||DS(s)),this.platform.updateConfig(i);const a=this.platform.acquireContext(s,o.aspectRatio),l=a&&a.canvas,c=l&&l.height,h=l&&l.width;if(this.id=Mb(),this.ctx=a,this.canvas=l,this.width=h,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new KS,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Vb(u=>this.update(u),o.resizeDelay||0),this._dataChanges=[],ko[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}kn.listen(this,"complete",ud),kn.listen(this,"progress",dE),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:s,_aspectRatio:r}=this;return pe(t)?e&&r?r:s?i/s:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Tn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Bu(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Uu(this.canvas,this.ctx),this}stop(){return kn.stop(this),this}resize(t,e){kn.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this.options,s=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,t,e,r),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Bu(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),ae(i.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};ie(e,(i,s)=>{i.id=s})}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,s=Object.keys(i).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],l=Gl(o,a),c=l==="r",h=l==="x";return{options:a,dposition:c?"chartArea":h?"bottom":"left",dtype:c?"radialLinear":h?"category":"linear"}}))),ie(r,o=>{const a=o.options,l=a.id,c=Gl(l,a),h=Qt(a.type,o.dtype);(a.position===void 0||cd(a.position,c)!==cd(o.dposition))&&(a.position=o.dposition),s[l]=!0;let u=null;if(l in i&&i[l].type===h)u=i[l];else{const d=Tn.getScale(h);u=new d({id:l,type:h,ctx:this.ctx,chart:this}),i[u.id]=u}u.init(a,t)}),ie(s,(o,a)=>{o||delete i[a]}),ie(i,o=>{ii.configure(this,o,o.options),ii.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((s,r)=>s.index-r.index),i>e){for(let s=e;s<i;++s)this._destroyDatasetMeta(s);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(hd("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((i,s)=>{e.filter(r=>r===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=e.length;i<s;i++){const r=e[i];let o=this.getDatasetMeta(i);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=a,o.indexAxis=r.indexAxis||Vl(a,this.options),o.order=r.order||0,o.index=i,o.label=""+r.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const l=Tn.getController(a),{datasetElementType:c,dataElementType:h}=_e.datasets[a];Object.assign(l,{dataElementType:Tn.getElement(h),datasetElementType:c&&Tn.getElement(c)}),o.controller=new l(this,i),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){ie(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,h=this.data.datasets.length;c<h;c++){const{controller:u}=this.getDatasetMeta(c),d=!s&&r.indexOf(u)===-1;u.buildOrUpdateElements(d),o=Math.max(+u.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||ie(r,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(hd("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){ie(this.scales,t=>{ii.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!Tu(e,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:r}of e){const o=i==="_removeElements"?-r:r;fE(t,s,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=i(0);for(let r=1;r<e;r++)if(!Tu(s,i(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;ii.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],ie(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,i=this.data.datasets.length;e<i;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,ci(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this.getDatasetMeta(t),s={meta:i,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(e),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(kn.has(this)?this.attached&&!kn.running(this)&&kn.start(this):(this.draw(),ud({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,s)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let s,r;for(s=0,r=e.length;s<r;++s){const o=e[s];(!t||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,i=t._clip,s=!i.disabled,r=mE(t,this.chartArea),o={meta:t,index:t.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(s&&dc(e,{left:i.left===!1?0:r.left-i.left,right:i.right===!1?this.width:r.right+i.right,top:i.top===!1?0:r.top-i.top,bottom:i.bottom===!1?this.height:r.bottom+i.bottom}),t.controller.draw(),s&&fc(e),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(t){return Mr(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,s){const r=uS.modes[e];return typeof r=="function"?r(this,t,i,s):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let s=i.filter(r=>r&&r._dataset===e).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=qi(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!e.hidden}setDatasetVisibility(t,e){const i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const s=i?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,s);Jo(e)?(r.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),o.update(r,{visible:i}),this.update(a=>a.datasetIndex===t?s:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),kn.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Uu(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete ko[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,i=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};ie(this.options.events,r=>i(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(l,c)=>{e.addEventListener(this,l,c),t[l]=c},s=(l,c)=>{t[l]&&(e.removeEventListener(this,l,c),delete t[l])},r=(l,c)=>{this.canvas&&this.resize(l,c)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",r),i("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),i("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){ie(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},ie(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const s=i?"set":"remove";let r,o,a,l;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){o=t[a];const c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!jo(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,i){const s=this.options.hover,r=(l,c)=>l.filter(h=>!c.some(u=>h.datasetIndex===u.datasetIndex&&h.index===u.index)),o=r(e,t),a=i?t:r(t,e);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(t,e){const i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},s=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const r=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(r||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:s=[],options:r}=this,o=e,a=this._getActiveElements(t,s,i,o),l=Cb(t),c=pE(t,this._lastEvent,i,l);i&&(this._lastEvent=null,ae(r.onHover,[t,a,this],this),l&&ae(r.onClick,[t,a,this],this));const h=!jo(a,s);return(h||e)&&(this._active=a,this._updateHoverStyles(a,s,e)),this._lastEvent=c,h}_getActiveElements(t,e,i,s){if(t.type==="mouseout")return[];if(!i)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,s)}}Gt(Ge,"defaults",_e),Gt(Ge,"instances",ko),Gt(Ge,"overrides",Vi),Gt(Ge,"registry",Tn),Gt(Ge,"version",hE),Gt(Ge,"getChart",dd);function fd(){return ie(Ge.instances,n=>n._plugins.invalidate())}function op(n,t,e=t){n.lineCap=Qt(e.borderCapStyle,t.borderCapStyle),n.setLineDash(Qt(e.borderDash,t.borderDash)),n.lineDashOffset=Qt(e.borderDashOffset,t.borderDashOffset),n.lineJoin=Qt(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=Qt(e.borderWidth,t.borderWidth),n.strokeStyle=Qt(e.borderColor,t.borderColor)}function gE(n,t,e){n.lineTo(e.x,e.y)}function _E(n){return n.stepped?tM:n.tension||n.cubicInterpolationMode==="monotone"?eM:gE}function ap(n,t,e={}){const i=n.length,{start:s=0,end:r=i-1}=e,{start:o,end:a}=t,l=Math.max(s,o),c=Math.min(r,a),h=s<o&&r<o||s>a&&r>a;return{count:i,start:l,loop:t.loop,ilen:c<l&&!h?i+c-l:c-l}}function xE(n,t,e,i){const{points:s,options:r}=t,{count:o,start:a,loop:l,ilen:c}=ap(s,e,i),h=_E(r);let{move:u=!0,reverse:d}=i||{},f,g,_;for(f=0;f<=c;++f)g=s[(a+(d?c-f:f))%o],!g.skip&&(u?(n.moveTo(g.x,g.y),u=!1):h(n,_,g,d,r.stepped),_=g);return l&&(g=s[(a+(d?c:0))%o],h(n,_,g,d,r.stepped)),!!l}function vE(n,t,e,i){const s=t.points,{count:r,start:o,ilen:a}=ap(s,e,i),{move:l=!0,reverse:c}=i||{};let h=0,u=0,d,f,g,_,p,m;const b=y=>(o+(c?a-y:y))%r,x=()=>{_!==p&&(n.lineTo(h,p),n.lineTo(h,_),n.lineTo(h,m))};for(l&&(f=s[b(0)],n.moveTo(f.x,f.y)),d=0;d<=a;++d){if(f=s[b(d)],f.skip)continue;const y=f.x,C=f.y,T=y|0;T===g?(C<_?_=C:C>p&&(p=C),h=(u*h+y)/++u):(x(),n.lineTo(y,C),g=T,u=0,_=p=C),m=C}x()}function Wl(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?vE:xE}function yE(n){return n.stepped?OM:n.tension||n.cubicInterpolationMode==="monotone"?UM:Ei}function bE(n,t,e,i){let s=t._path;s||(s=t._path=new Path2D,t.path(s,e,i)&&s.closePath()),op(n,t.options),n.stroke(s)}function ME(n,t,e,i){const{segments:s,options:r}=t,o=Wl(t);for(const a of s)op(n,r,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+i-1})&&n.closePath(),n.stroke()}const SE=typeof Path2D=="function";function EE(n,t,e,i){SE&&!t.options.segment?bE(n,t,e,i):ME(n,t,e,i)}class ir extends hi{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;wM(this._points,i,t,s,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=GM(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,s=t[e],r=this.points,o=zM(this,{property:e,start:s,end:s});if(!o.length)return;const a=[],l=yE(i);let c,h;for(c=0,h=o.length;c<h;++c){const{start:u,end:d}=o[c],f=r[u],g=r[d];if(f===g){a.push(f);continue}const _=Math.abs((s-f[e])/(g[e]-f[e])),p=l(f,g,_,i.stepped);p[e]=t[e],a.push(p)}return a.length===1?a[0]:a}pathSegment(t,e,i){return Wl(this)(t,this,e,i)}path(t,e,i){const s=this.segments,r=Wl(this);let o=this._loop;e=e||0,i=i||this.points.length-e;for(const a of s)o&=r(t,this,a,{start:e,end:e+i-1});return!!o}draw(t,e,i,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),EE(t,this,i,s),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}Gt(ir,"id","line"),Gt(ir,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),Gt(ir,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),Gt(ir,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function pd(n,t,e,i){const s=n.options,{[e]:r}=n.getProps([e],i);return Math.abs(t-r)<s.radius+s.hitRadius}class zo extends hi{constructor(e){super();Gt(this,"parsed");Gt(this,"skip");Gt(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,i,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(e-o,2)+Math.pow(i-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,i){return pd(this,e,"x",i)}inYRange(e,i){return pd(this,e,"y",i)}getCenterPoint(e){const{x:i,y:s}=this.getProps(["x","y"],e);return{x:i,y:s}}size(e){e=e||this.options||{};let i=e.radius||0;i=Math.max(i,i&&e.hoverRadius||0);const s=i&&e.borderWidth||0;return(i+s)*2}draw(e,i){const s=this.options;this.skip||s.radius<.1||!Mr(this,i,this.size(s)/2)||(e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.fillStyle=s.backgroundColor,zl(e,s,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}Gt(zo,"id","point"),Gt(zo,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),Gt(zo,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const md=(n,t)=>{let{boxHeight:e=t,boxWidth:i=t}=n;return n.usePointStyle&&(e=Math.min(e,t),i=n.pointStyleWidth||Math.min(i,t)),{boxWidth:i,boxHeight:e,itemHeight:Math.max(t,e)}},TE=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class gd extends hi{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=ae(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(i=>t.filter(i,this.chart.data))),t.sort&&(e=e.sort((i,s)=>t.sort(i,s,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const i=t.labels,s=$e(i.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=md(i,r);let c,h;e.font=s.string,this.isHorizontal()?(c=this.maxWidth,h=this._fitRows(o,r,a,l)+10):(h=this.maxHeight,c=this._fitCols(o,s,a,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,i,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],h=s+a;let u=t;r.textAlign="left",r.textBaseline="middle";let d=-1,f=-h;return this.legendItems.forEach((g,_)=>{const p=i+e/2+r.measureText(g.text).width;(_===0||c[c.length-1]+p+2*a>o)&&(u+=h,c[c.length-(_>0?0:1)]=0,f+=h,d++),l[_]={left:0,top:f,row:d,width:p,height:s},c[c.length-1]+=p+a}),u}_fitCols(t,e,i,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],h=o-t;let u=a,d=0,f=0,g=0,_=0;return this.legendItems.forEach((p,m)=>{const{itemWidth:b,itemHeight:x}=wE(i,e,r,p,s);m>0&&f+x+2*a>h&&(u+=d+a,c.push({width:d,height:f}),g+=d+a,_++,d=f=0),l[m]={left:g,top:f,col:_,width:b,height:x},d=Math.max(d,b),f+=x+a}),u+=d,c.push({width:d,height:f}),u}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:s},rtl:r}}=this,o=Ts(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=Je(i,this.left+s,this.right-this.lineWidths[a]);for(const c of e)a!==c.row&&(a=c.row,l=Je(i,this.left+s,this.right-this.lineWidths[a])),c.top+=this.top+t+s,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+s}else{let a=0,l=Je(i,this.top+t+s,this.bottom-this.columnSizes[a].height);for(const c of e)c.col!==a&&(a=c.col,l=Je(i,this.top+t+s,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+s,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;dc(t,this),this._draw(),fc(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:s}=this,{align:r,labels:o}=t,a=_e.color,l=Ts(t.rtl,this.left,this.width),c=$e(o.font),{padding:h}=o,u=c.size,d=u/2;let f;this.drawTitle(),s.textAlign=l.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;const{boxWidth:g,boxHeight:_,itemHeight:p}=md(o,u),m=function(T,E,L){if(isNaN(g)||g<=0||isNaN(_)||_<0)return;s.save();const v=Qt(L.lineWidth,1);if(s.fillStyle=Qt(L.fillStyle,a),s.lineCap=Qt(L.lineCap,"butt"),s.lineDashOffset=Qt(L.lineDashOffset,0),s.lineJoin=Qt(L.lineJoin,"miter"),s.lineWidth=v,s.strokeStyle=Qt(L.strokeStyle,a),s.setLineDash(Qt(L.lineDash,[])),o.usePointStyle){const S={radius:_*Math.SQRT2/2,pointStyle:L.pointStyle,rotation:L.rotation,borderWidth:v},D=l.xPlus(T,g/2),B=E+d;kf(s,S,D,B,o.pointStyleWidth&&g)}else{const S=E+Math.max((u-_)/2,0),D=l.leftForLtr(T,g),B=pr(L.borderRadius);s.beginPath(),Object.values(B).some(j=>j!==0)?Hl(s,{x:D,y:S,w:g,h:_,radius:B}):s.rect(D,S,g,_),s.fill(),v!==0&&s.stroke()}s.restore()},b=function(T,E,L){ta(s,L.text,T,E+p/2,c,{strikethrough:L.hidden,textAlign:l.textAlign(L.textAlign)})},x=this.isHorizontal(),y=this._computeTitleHeight();x?f={x:Je(r,this.left+h,this.right-i[0]),y:this.top+h+y,line:0}:f={x:this.left+h,y:Je(r,this.top+y+h,this.bottom-e[0].height),line:0},$f(this.ctx,t.textDirection);const C=p+h;this.legendItems.forEach((T,E)=>{s.strokeStyle=T.fontColor,s.fillStyle=T.fontColor;const L=s.measureText(T.text).width,v=l.textAlign(T.textAlign||(T.textAlign=o.textAlign)),S=g+d+L;let D=f.x,B=f.y;l.setWidth(this.width),x?E>0&&D+S+h>this.right&&(B=f.y+=C,f.line++,D=f.x=Je(r,this.left+h,this.right-i[f.line])):E>0&&B+C>this.bottom&&(D=f.x=D+e[f.line].width+h,f.line++,B=f.y=Je(r,this.top+y+h,this.bottom-e[f.line].height));const j=l.x(D);if(m(j,B,T),D=Gb(v,D+g+d,x?D+S:this.right,t.rtl),b(l.x(D),B,T),x)f.x+=S+h;else if(typeof T.text!="string"){const I=c.lineHeight;f.y+=lp(T,I)+h}else f.y+=C}),qf(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,i=$e(e.font),s=yn(e.padding);if(!e.display)return;const r=Ts(t.rtl,this.left,this.width),o=this.ctx,a=e.position,l=i.size/2,c=s.top+l;let h,u=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),h=this.top+c,u=Je(t.align,u,this.right-d);else{const g=this.columnSizes.reduce((_,p)=>Math.max(_,p.height),0);h=c+Je(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const f=Je(a,u,u+d);o.textAlign=r.textAlign(Of(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=i.string,ta(o,e.text,f,h,i)}_computeTitleHeight(){const t=this.options.title,e=$e(t.font),i=yn(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,s,r;if(er(t,this.left,this.right)&&er(e,this.top,this.bottom)){for(r=this.legendHitBoxes,i=0;i<r.length;++i)if(s=r[i],er(t,s.left,s.left+s.width)&&er(e,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(t){const e=this.options;if(!RE(t.type,e))return;const i=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const s=this._hoveredItem,r=TE(s,i);s&&!r&&ae(e.onLeave,[t,s,this],this),this._hoveredItem=i,i&&!r&&ae(e.onHover,[t,i,this],this)}else i&&ae(e.onClick,[t,i,this],this)}}function wE(n,t,e,i,s){const r=AE(i,n,t,e),o=CE(s,i,t.lineHeight);return{itemWidth:r,itemHeight:o}}function AE(n,t,e,i){let s=n.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+i.measureText(s).width}function CE(n,t,e){let i=n;return typeof t.text!="string"&&(i=lp(t,e)),i}function lp(n,t){const e=n.text?n.text.length:0;return t*e}function RE(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var PE={id:"legend",_element:gd,start(n,t,e){const i=n.legend=new gd({ctx:n.ctx,options:e,chart:n});ii.configure(n,i,e),ii.addBox(n,i)},stop(n){ii.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const i=n.legend;ii.configure(n,i,e),i.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const i=t.datasetIndex,s=e.chart;s.isDatasetVisible(i)?(s.hide(i),t.hidden=!0):(s.show(i),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(e?0:void 0),h=yn(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:c.borderColor,pointStyle:i||c.pointStyle,rotation:c.rotation,textAlign:s||c.textAlign,borderRadius:o&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};const sr={average(n){if(!n.length)return!1;let t,e,i=new Set,s=0,r=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const l=a.tooltipPosition();i.add(l.x),s+=l.y,++r}}return r===0||i.size===0?!1:{x:[...i].reduce((a,l)=>a+l)/i.size,y:s/r}},nearest(n,t){if(!n.length)return!1;let e=t.x,i=t.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=n.length;r<o;++r){const l=n[r].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),h=Bl(t,c);h<s&&(s=h,a=l)}}if(a){const l=a.tooltipPosition();e=l.x,i=l.y}return{x:e,y:i}}};function En(n,t){return t&&(Re(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function zn(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function LE(n,t){const{element:e,datasetIndex:i,index:s}=t,r=n.getDatasetMeta(i).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:n,label:o,parsed:r.getParsed(s),raw:n.data.datasets[i].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:i,element:e}}function _d(n,t){const e=n.chart.ctx,{body:i,footer:s,title:r}=n,{boxWidth:o,boxHeight:a}=t,l=$e(t.bodyFont),c=$e(t.titleFont),h=$e(t.footerFont),u=r.length,d=s.length,f=i.length,g=yn(t.padding);let _=g.height,p=0,m=i.reduce((y,C)=>y+C.before.length+C.lines.length+C.after.length,0);if(m+=n.beforeBody.length+n.afterBody.length,u&&(_+=u*c.lineHeight+(u-1)*t.titleSpacing+t.titleMarginBottom),m){const y=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;_+=f*y+(m-f)*l.lineHeight+(m-1)*t.bodySpacing}d&&(_+=t.footerMarginTop+d*h.lineHeight+(d-1)*t.footerSpacing);let b=0;const x=function(y){p=Math.max(p,e.measureText(y).width+b)};return e.save(),e.font=c.string,ie(n.title,x),e.font=l.string,ie(n.beforeBody.concat(n.afterBody),x),b=t.displayColors?o+2+t.boxPadding:0,ie(i,y=>{ie(y.before,x),ie(y.lines,x),ie(y.after,x)}),b=0,e.font=h.string,ie(n.footer,x),e.restore(),p+=g.width,{width:p,height:_}}function DE(n,t){const{y:e,height:i}=t;return e<i/2?"top":e>n.height-i/2?"bottom":"center"}function IE(n,t,e,i){const{x:s,width:r}=i,o=e.caretSize+e.caretPadding;if(n==="left"&&s+r+o>t.width||n==="right"&&s-r-o<0)return!0}function OE(n,t,e,i){const{x:s,width:r}=e,{width:o,chartArea:{left:a,right:l}}=n;let c="center";return i==="center"?c=s<=(a+l)/2?"left":"right":s<=r/2?c="left":s>=o-r/2&&(c="right"),IE(c,n,t,e)&&(c="center"),c}function xd(n,t,e){const i=e.yAlign||t.yAlign||DE(n,e);return{xAlign:e.xAlign||t.xAlign||OE(n,t,e,i),yAlign:i}}function UE(n,t){let{x:e,width:i}=n;return t==="right"?e-=i:t==="center"&&(e-=i/2),e}function NE(n,t,e){let{y:i,height:s}=n;return t==="top"?i+=e:t==="bottom"?i-=s+e:i-=s/2,i}function vd(n,t,e,i){const{caretSize:s,caretPadding:r,cornerRadius:o}=n,{xAlign:a,yAlign:l}=e,c=s+r,{topLeft:h,topRight:u,bottomLeft:d,bottomRight:f}=pr(o);let g=UE(t,a);const _=NE(t,l,c);return l==="center"?a==="left"?g+=c:a==="right"&&(g-=c):a==="left"?g-=Math.max(h,d)+s:a==="right"&&(g+=Math.max(u,f)+s),{x:vn(g,0,i.width-t.width),y:vn(_,0,i.height-t.height)}}function Do(n,t,e){const i=yn(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-i.right:n.x+i.left}function yd(n){return En([],zn(n))}function FE(n,t,e){return qi(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function bd(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const cp={beforeTitle:Nn,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,i=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return e[t.dataIndex]}return""},afterTitle:Nn,beforeBody:Nn,beforeLabel:Nn,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return pe(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:Nn,afterBody:Nn,beforeFooter:Nn,footer:Nn,afterFooter:Nn};function Ve(n,t,e,i){const s=n[t].call(e,i);return typeof s>"u"?cp[t].call(e,i):s}class Xl extends hi{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&e.options.animation&&i.animations,r=new jf(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=FE(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:i}=e,s=Ve(i,"beforeTitle",this,t),r=Ve(i,"title",this,t),o=Ve(i,"afterTitle",this,t);let a=[];return a=En(a,zn(s)),a=En(a,zn(r)),a=En(a,zn(o)),a}getBeforeBody(t,e){return yd(Ve(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:i}=e,s=[];return ie(t,r=>{const o={before:[],lines:[],after:[]},a=bd(i,r);En(o.before,zn(Ve(a,"beforeLabel",this,r))),En(o.lines,Ve(a,"label",this,r)),En(o.after,zn(Ve(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(t,e){return yd(Ve(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:i}=e,s=Ve(i,"beforeFooter",this,t),r=Ve(i,"footer",this,t),o=Ve(i,"afterFooter",this,t);let a=[];return a=En(a,zn(s)),a=En(a,zn(r)),a=En(a,zn(o)),a}_createItems(t){const e=this._active,i=this.chart.data,s=[],r=[],o=[];let a=[],l,c;for(l=0,c=e.length;l<c;++l)a.push(LE(this.chart,e[l]));return t.filter&&(a=a.filter((h,u,d)=>t.filter(h,u,d,i))),t.itemSort&&(a=a.sort((h,u)=>t.itemSort(h,u,i))),ie(a,h=>{const u=bd(t.callbacks,h);s.push(Ve(u,"labelColor",this,h)),r.push(Ve(u,"labelPointStyle",this,h)),o.push(Ve(u,"labelTextColor",this,h))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const i=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=sr[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const l=this._size=_d(this,i),c=Object.assign({},a,l),h=xd(this.chart,i,c),u=vd(i,c,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,r={opacity:1,x:u.x,y:u.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,s){const r=this.getCaretPosition(t,i,s);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,i){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:l,topRight:c,bottomLeft:h,bottomRight:u}=pr(a),{x:d,y:f}=t,{width:g,height:_}=e;let p,m,b,x,y,C;return r==="center"?(y=f+_/2,s==="left"?(p=d,m=p-o,x=y+o,C=y-o):(p=d+g,m=p+o,x=y-o,C=y+o),b=p):(s==="left"?m=d+Math.max(l,h)+o:s==="right"?m=d+g-Math.max(c,u)-o:m=this.caretX,r==="top"?(x=f,y=x-o,p=m-o,b=m+o):(x=f+_,y=x+o,p=m+o,b=m-o),C=x),{x1:p,x2:m,x3:b,y1:x,y2:y,y3:C}}drawTitle(t,e,i){const s=this.title,r=s.length;let o,a,l;if(r){const c=Ts(i.rtl,this.x,this.width);for(t.x=Do(this,i.titleAlign,i),e.textAlign=c.textAlign(i.titleAlign),e.textBaseline="middle",o=$e(i.titleFont),a=i.titleSpacing,e.fillStyle=i.titleColor,e.font=o.string,l=0;l<r;++l)e.fillText(s[l],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,l+1===r&&(t.y+=i.titleMarginBottom-a)}}_drawColorBox(t,e,i,s,r){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:l,boxWidth:c}=r,h=$e(r.bodyFont),u=Do(this,"left",r),d=s.x(u),f=l<h.lineHeight?(h.lineHeight-l)/2:0,g=e.y+f;if(r.usePointStyle){const _={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},p=s.leftForLtr(d,c)+c/2,m=g+l/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,zl(t,_,p,m),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,zl(t,_,p,m)}else{t.lineWidth=ee(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const _=s.leftForLtr(d,c),p=s.leftForLtr(s.xPlus(d,1),c-2),m=pr(o.borderRadius);Object.values(m).some(b=>b!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,Hl(t,{x:_,y:g,w:c,h:l,radius:m}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),Hl(t,{x:p,y:g+1,w:c-2,h:l-2,radius:m}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(_,g,c,l),t.strokeRect(_,g,c,l),t.fillStyle=o.backgroundColor,t.fillRect(p,g+1,c-2,l-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:h}=i,u=$e(i.bodyFont);let d=u.lineHeight,f=0;const g=Ts(i.rtl,this.x,this.width),_=function(L){e.fillText(L,g.x(t.x+f),t.y+d/2),t.y+=d+r},p=g.textAlign(o);let m,b,x,y,C,T,E;for(e.textAlign=o,e.textBaseline="middle",e.font=u.string,t.x=Do(this,p,i),e.fillStyle=i.bodyColor,ie(this.beforeBody,_),f=a&&p!=="right"?o==="center"?c/2+h:c+2+h:0,y=0,T=s.length;y<T;++y){for(m=s[y],b=this.labelTextColors[y],e.fillStyle=b,ie(m.before,_),x=m.lines,a&&x.length&&(this._drawColorBox(e,t,y,g,i),d=Math.max(u.lineHeight,l)),C=0,E=x.length;C<E;++C)_(x[C]),d=u.lineHeight;ie(m.after,_)}f=0,d=u.lineHeight,ie(this.afterBody,_),t.y-=r}drawFooter(t,e,i){const s=this.footer,r=s.length;let o,a;if(r){const l=Ts(i.rtl,this.x,this.width);for(t.x=Do(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=l.textAlign(i.footerAlign),e.textBaseline="middle",o=$e(i.footerFont),e.fillStyle=i.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(s[a],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+i.footerSpacing}}drawBackground(t,e,i,s){const{xAlign:r,yAlign:o}=this,{x:a,y:l}=t,{width:c,height:h}=i,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:g}=pr(s.cornerRadius);e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.beginPath(),e.moveTo(a+u,l),o==="top"&&this.drawCaret(t,e,i,s),e.lineTo(a+c-d,l),e.quadraticCurveTo(a+c,l,a+c,l+d),o==="center"&&r==="right"&&this.drawCaret(t,e,i,s),e.lineTo(a+c,l+h-g),e.quadraticCurveTo(a+c,l+h,a+c-g,l+h),o==="bottom"&&this.drawCaret(t,e,i,s),e.lineTo(a+f,l+h),e.quadraticCurveTo(a,l+h,a,l+h-f),o==="center"&&r==="left"&&this.drawCaret(t,e,i,s),e.lineTo(a,l+u),e.quadraticCurveTo(a,l,a+u,l),e.closePath(),e.fill(),s.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,s=i&&i.x,r=i&&i.y;if(s||r){const o=sr[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=_d(this,t),l=Object.assign({},o,this._size),c=xd(e,t,l),h=vd(t,l,c,e);(s._to!==h.x||r._to!==h.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=yn(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(r,t,s,e),$f(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),qf(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,s=t.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),r=!jo(i,s),o=this._positionChanged(s,e);(r||o)&&(this._active=s,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,i),a=this._positionChanged(o,t),l=e||!jo(o,r)||a;return l&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,i,s){const r=this.options;if(t.type==="mouseout")return[];if(!s)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,r.mode,r,i);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:i,caretY:s,options:r}=this,o=sr[r.position].call(this,t,e);return o!==!1&&(i!==o.x||s!==o.y)}}Gt(Xl,"positioners",sr);var BE={id:"tooltip",_element:Xl,positioners:sr,afterInit(n,t,e){e&&(n.tooltip=new Xl({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:cp},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};function kE(n,t){const e=[],{bounds:s,step:r,min:o,max:a,precision:l,count:c,maxTicks:h,maxDigits:u,includeBounds:d}=n,f=r||1,g=h-1,{min:_,max:p}=t,m=!pe(o),b=!pe(a),x=!pe(c),y=(p-_)/(u+1);let C=Au((p-_)/g/f)*f,T,E,L,v;if(C<1e-14&&!m&&!b)return[{value:_},{value:p}];v=Math.ceil(p/C)-Math.floor(_/C),v>g&&(C=Au(v*C/g/f)*f),pe(l)||(T=Math.pow(10,l),C=Math.ceil(C*T)/T),s==="ticks"?(E=Math.floor(_/C)*C,L=Math.ceil(p/C)*C):(E=_,L=p),m&&b&&r&&Db((a-o)/r,C/1e3)?(v=Math.round(Math.min((a-o)/C,h)),C=(a-o)/v,E=o,L=a):x?(E=m?o:E,L=b?a:L,v=c-1,C=(L-E)/v):(v=(L-E)/C,ur(v,Math.round(v),C/1e3)?v=Math.round(v):v=Math.ceil(v));const S=Math.max(Cu(C),Cu(E));T=Math.pow(10,pe(l)?S:l),E=Math.round(E*T)/T,L=Math.round(L*T)/T;let D=0;for(m&&(d&&E!==o?(e.push({value:o}),E<o&&D++,ur(Math.round((E+D*C)*T)/T,o,Md(o,y,n))&&D++):E<o&&D++);D<v;++D){const B=Math.round((E+D*C)*T)/T;if(b&&B>a)break;e.push({value:B})}return b&&d&&L!==a?e.length&&ur(e[e.length-1].value,a,Md(a,y,n))?e[e.length-1].value=a:e.push({value:a}):(!b||L===a)&&e.push({value:L}),e}function Md(n,t,{horizontal:e,minRotation:i}){const s=Ai(i),r=(e?Math.sin(s):Math.cos(s))||.001,o=.75*t*(""+n).length;return Math.min(t/r,o)}class zE extends Lr{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return pe(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:s,max:r}=this;const o=l=>s=e?s:l,a=l=>r=i?r:l;if(t){const l=Ls(s),c=Ls(r);l<0&&c<0?a(0):l>0&&c>0&&o(0)}if(s===r){let l=r===0?1:Math.abs(r*.05);a(r+l),t||o(s-l)}this.min=s,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:i}=t,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),e=e||11),e&&(s=Math.min(e,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=kE(s,r);return t.bounds==="ticks"&&Ib(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const s=(i-e)/Math.max(t.length-1,1)/2;e-=s,i+=s}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return Ff(t,this.chart.options.locale,this.options.ticks.format)}}class $l extends zE{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=cn(t)?t:0,this.max=cn(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=Ai(this.options.ticks.minRotation),s=(t?Math.sin(i):Math.cos(i))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/s))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}Gt($l,"id","linear"),Gt($l,"defaults",{ticks:{callback:Bf.formatters.numeric}});const ma={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Xe=Object.keys(ma);function Sd(n,t){return n-t}function Ed(n,t){if(pe(t))return null;const e=n._adapter,{parser:i,round:s,isoWeekday:r}=n._parseOpts;let o=t;return typeof i=="function"&&(o=i(o)),cn(o)||(o=typeof i=="string"?e.parse(o,i):e.parse(o)),o===null?null:(s&&(o=s==="week"&&(Ds(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,s)),+o)}function Td(n,t,e,i){const s=Xe.length;for(let r=Xe.indexOf(n);r<s-1;++r){const o=ma[Xe[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=i)return Xe[r]}return Xe[s-1]}function HE(n,t,e,i,s){for(let r=Xe.length-1;r>=Xe.indexOf(e);r--){const o=Xe[r];if(ma[o].common&&n._adapter.diff(s,i,o)>=t-1)return o}return Xe[e?Xe.indexOf(e):0]}function VE(n){for(let t=Xe.indexOf(n)+1,e=Xe.length;t<e;++t)if(ma[Xe[t]].common)return Xe[t]}function wd(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:i,hi:s}=hc(e,t),r=e[i]>=t?e[i]:e[s];n[r]=!0}}function GE(n,t,e,i){const s=n._adapter,r=+s.startOf(t[0].value,i),o=t[t.length-1].value;let a,l;for(a=r;a<=o;a=+s.add(a,1,i))l=e[a],l>=0&&(t[l].major=!0);return t}function Ad(n,t,e){const i=[],s={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],s[a]=o,i.push({value:a,major:!1});return r===0||!e?i:GE(n,i,s,e)}class ia extends Lr{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const i=t.time||(t.time={}),s=this._adapter=new oS._date(t.adapters.date);s.init(e),hr(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:Ed(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(s=Math.min(s,c.min)),!a&&!isNaN(c.max)&&(r=Math.max(r,c.max))}(!o||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),s=cn(s)&&!isNaN(s)?s:+e.startOf(Date.now(),i),r=cn(r)&&!isNaN(r)?r:+e.endOf(Date.now(),i)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this.options,e=t.time,i=t.ticks,s=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=kb(s,r,o);return this._unit=e.unit||(i.autoSkip?Td(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):HE(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:VE(this._unit),this.initOffsets(s),t.reverse&&a.reverse(),Ad(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,i=0,s,r;this.options.offset&&t.length&&(s=this.getDecimalForValue(t[0]),t.length===1?e=1-s:e=(this.getDecimalForValue(t[1])-s)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?i=r:i=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=vn(e,0,o),i=vn(i,0,o),this._offsets={start:e,end:i,factor:1/(e+1+i)}}_generate(){const t=this._adapter,e=this.min,i=this.max,s=this.options,r=s.time,o=r.unit||Td(r.minUnit,e,i,this._getLabelCapacity(e)),a=Qt(s.ticks.stepSize,1),l=o==="week"?r.isoWeekday:!1,c=Ds(l)||l===!0,h={};let u=e,d,f;if(c&&(u=+t.startOf(u,"isoWeek",l)),u=+t.startOf(u,c?"day":o),t.diff(i,e,o)>1e5*a)throw new Error(e+" and "+i+" are too far apart with stepSize of "+a+" "+o);const g=s.ticks.source==="data"&&this.getDataTimestamps();for(d=u,f=0;d<i;d=+t.add(d,a,o),f++)wd(h,d,g);return(d===i||s.bounds==="ticks"||f===1)&&wd(h,d,g),Object.keys(h).sort(Sd).map(_=>+_)}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){const s=this.options.time.displayFormats,r=this._unit,o=e||s[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,i,s){const r=this.options,o=r.ticks.callback;if(o)return ae(o,[t,e,i],this);const a=r.time.displayFormats,l=this._unit,c=this._majorUnit,h=l&&a[l],u=c&&a[c],d=i[e],f=c&&u&&d&&d.major;return this._adapter.format(t,s||(f?u:h))}generateTickLabels(t){let e,i,s;for(e=0,i=t.length;e<i;++e)s=t[e],s.label=this._tickFormatFunction(s.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,i=this.ctx.measureText(t).width,s=Ai(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*r+a*o,h:i*o+a*r}}_getLabelCapacity(t){const e=this.options.time,i=e.displayFormats,s=i[e.unit]||i.millisecond,r=this._tickFormatFunction(t,0,Ad(this,[t],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,i;if(t.length)return t;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(e=0,i=s.length;e<i;++e)t=t.concat(s[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,i;if(t.length)return t;const s=this.getLabels();for(e=0,i=s.length;e<i;++e)t.push(Ed(this,s[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Hb(t.sort(Sd))}}Gt(ia,"id","time"),Gt(ia,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Io(n,t,e){let i=0,s=n.length-1,r,o,a,l;e?(t>=n[i].pos&&t<=n[s].pos&&({lo:i,hi:s}=Ci(n,"pos",t)),{pos:r,time:a}=n[i],{pos:o,time:l}=n[s]):(t>=n[i].time&&t<=n[s].time&&({lo:i,hi:s}=Ci(n,"time",t)),{time:r,pos:a}=n[i],{time:o,pos:l}=n[s]);const c=o-r;return c?a+(l-a)*(t-r)/c:a}class Cd extends ia{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=Io(e,this.min),this._tableRange=Io(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:i}=this,s=[],r=[];let o,a,l,c,h;for(o=0,a=t.length;o<a;++o)c=t[o],c>=e&&c<=i&&s.push(c);if(s.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)h=s[o+1],l=s[o-1],c=s[o],Math.round((h+l)/2)!==c&&r.push({time:c,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(e)||i.length===1)&&i.push(e),i.sort((s,r)=>s-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),i=this.getLabelTimestamps();return e.length&&i.length?t=this.normalize(e.concat(i)):t=e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(Io(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return Io(this._table,i*this._tableRange+this._minPos,!0)}}Gt(Cd,"id","timeseries"),Gt(Cd,"defaults",ia.defaults);Ge.register(No,Fo,ir,zo,$l,BE,PE);Ge.defaults.color="#7f8cab";Ge.defaults.font.size=10;Ge.defaults.font.family='"Segoe UI", "Helvetica Neue", Arial, sans-serif';Ge.defaults.borderColor="rgba(110, 150, 255, 0.12)";const sa="rgba(110, 150, 255, 0.12)",Rd=1e6;function WE(n,t,e){if(n===0)return"0";const i=e.map(a=>a.value),s=i.length>1?Math.abs(i[1]-i[0]):Math.abs(n),r=Math.min(10,Math.max(2,Math.ceil(Math.log10(Math.abs(n)/s))+1)),o=Math.abs(n);return o>=1e5||o<.001?n.toExponential(r-1):Number(n.toPrecision(r)).toString()}function Ms(n){if(n===0)return"0";const t=Math.abs(n);return t>=1e4||t<.001?n.toExponential(1):Number(n.toPrecision(6)).toString()}function Qs(n,t,e){return new Ge(n,{type:"line",data:{datasets:[{data:[],borderColor:e,backgroundColor:e,borderWidth:1.5,pointRadius:0,tension:0,parsing:!1,normalized:!0}]},options:{animation:!1,responsive:!0,maintainAspectRatio:!1,parsing:!1,interaction:{mode:"nearest",axis:"x",intersect:!1},plugins:{legend:{display:!1},tooltip:{callbacks:{label:i=>`${i.parsed.y.toPrecision(7)} ${t} @ ${Ms(i.parsed.x)} ns`}}},scales:{x:{type:"linear",title:{display:!0,text:"t (ns)"},grid:{color:sa},ticks:{callback:Ms,maxTicksLimit:6}},y:{type:"linear",title:{display:!0,text:t},grid:{color:sa},ticks:{callback:WE,maxTicksLimit:5},grace:"5%"}}}})}function ql(n,t){const e=n.data.datasets.flatMap(o=>o.data.map(a=>a.y)),i=n.options.scales.y;if(!e.length||!(t>0)){delete i.min,delete i.max;return}const s=Math.min(...e),r=Math.max(...e);if(r-s<=1e-11*t){const o=(r+s)/2,a=Math.max(1e-6*t,Math.abs(o)*1e-6);i.min=o-a,i.max=o+a}else delete i.min,delete i.max}function Pd(n){n.data.datasets.length>1||(n.data.datasets[0].label="Partícula",n.data.datasets.push({label:"Total (todas)",data:[],borderColor:"#e8ecf8",backgroundColor:"#e8ecf8",borderWidth:1.2,borderDash:[5,3],pointRadius:0,tension:0,parsing:!1,normalized:!0}),n.options.plugins.legend.labels={boxWidth:12,boxHeight:1,padding:6})}function Ld(n,t,e,i){n.data.datasets[0].data=t,i&&(n.data.datasets[0].borderColor=i),n.data.datasets[1].data=e||[],n.options.plugins.legend.display=!!e;const s=[...t,...e||[]].map(r=>Math.abs(r.y));ql(n,s.length?Math.max(...s):0),n.update("none")}class hp{constructor({energy:t,power:e,xy:i,coulomb:s,coulombEmpty:r,radiated:o,dr:a}){var l;this.energy=Qs(t,"T − T₀ (eV)","#7cf5ff"),this.radiated=Qs(o,"eV","#f5e663"),Pd(this.radiated),this.dr=a?Qs(a,"r − R (mm)","#8fe66f"):null,this.energyCaption=(l=t.closest("figure"))==null?void 0:l.querySelector("figcaption"),this.power=Qs(e,"W","#ff4fd8"),Pd(this.power),this.coulomb=Qs(s,"eV","#ffb84d"),this.coulombCanvas=s,this.coulombEmpty=r,this.xy=new Ge(i,{type:"scatter",data:{datasets:[]},options:{animation:!1,responsive:!0,maintainAspectRatio:!1,parsing:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{label:c=>`${c.dataset.label}: (${Ms(c.parsed.x)}, ${Ms(c.parsed.y)}) m`}}},scales:{x:{type:"linear",title:{display:!0,text:"x (m)"},grid:{color:sa},ticks:{callback:Ms,maxTicksLimit:5}},y:{type:"linear",title:{display:!0,text:"y (m)"},grid:{color:sa},ticks:{callback:Ms,maxTicksLimit:5}}}}}),this.R=1}setRing(t,e){this.R=t;const i=t+2.5*e;for(const s of["x","y"])this.xy.options.scales[s].min=-i,this.xy.options.scales[s].max=i}update({series:t,tracks:e,coulomb:i,totals:s}){const r=t.ekin.length?t.ekin[0].y:0;this.energy.data.datasets[0].data=t.ekin.map(c=>({x:c.x,y:(c.y-r)*Rd})),this.energyCaption&&(this.energyCaption.textContent=t.ekin.length?`Energía cinética: T − T₀ vs tiempo (T₀ = ${Number(r.toPrecision(8))} MeV)`:"Energía cinética vs tiempo"),this.energy.data.datasets[0].borderColor=t.color,ql(this.energy,r*Rd),this.energy.update("none"),Ld(this.power,t.power,s==null?void 0:s.power,t.color==="#7cf5ff"?"#ff4fd8":t.color),Ld(this.radiated,t.radiated,s==null?void 0:s.radiated,t.color==="#7cf5ff"?"#f5e663":t.color),this.dr&&(this.dr.data.datasets[0].data=t.dr||[],this.dr.data.datasets[0].borderColor=t.color==="#7cf5ff"?"#8fe66f":t.color,ql(this.dr,this.R*1e3),this.dr.update("none"));const o=[];for(let c=0;c<=96;c++){const h=c/96*2*Math.PI;o.push({x:this.R*Math.cos(h),y:this.R*Math.sin(h)})}const a=[{label:"R (guía)",data:o,showLine:!0,pointRadius:0,borderWidth:1,borderColor:"rgba(192, 96, 255, 0.45)",borderDash:[4,4]}];for(const c of e)a.push({label:c.label,data:c.pts,showLine:!0,pointRadius:0,borderWidth:1.2,borderColor:c.color});a.push({label:"posición actual",data:e.filter(c=>c.now).map(c=>({...c.now,label:c.label})),pointRadius:3,pointBackgroundColor:e.filter(c=>c.now).map(c=>c.color),borderWidth:0}),this.xy.data.datasets=a,this.xy.update("none");const l=!!i;this.coulombEmpty.hidden=l,this.coulombCanvas.style.visibility=l?"visible":"hidden",this.coulomb.data.datasets[0].data=l?i:[],this.coulomb.update("none")}resize(){for(const t of this.all())t.resize()}all(){return[this.energy,this.power,this.radiated,this.xy,this.coulomb,this.dr].filter(Boolean)}exportImage(t){const e=t.canvas;if((!e.width||!e.height)&&t.resize(),!e.width||!e.height)return null;const i=t.data.datasets.filter(l=>l.borderColor==="#e8ecf8");for(const l of i)l.borderColor="#30343c",l.backgroundColor="#30343c";const s=t.options.plugins.legend.labels,r=s.color;s.color="#30343c",t.update("none");const o=document.createElement("canvas");o.width=e.width,o.height=e.height;const a=o.getContext("2d");a.fillStyle="#ffffff",a.fillRect(0,0,o.width,o.height),a.drawImage(e,0,0,o.width,o.height);for(const l of i)l.borderColor="#e8ecf8",l.backgroundColor="#e8ecf8";return s.color=r,t.update("none"),o.toDataURL("image/png")}}function XE(n,t){const e=i=>i==null?"":typeof i=="number"?String(i):`"${String(i).replace(/"/g,'""')}"`;return[n.map(e).join(","),...t.map(i=>i.map(e).join(","))].join(`\r
`)}function up(n,t){const e=URL.createObjectURL(t),i=document.createElement("a");i.href=e,i.download=n,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(e),2e3)}function $E(n,t,e){up(n,new Blob([t],{type:`${e};charset=utf-8`}))}function qE(n,t){try{const e=JSON.parse(t);if(Array.isArray(e.detail))return e.detail.map(i=>{const s=(i.loc||[]).filter(o=>o!=="body").join("."),r=String(i.msg||"").replace(/^Value error, /,"");return s?`${s}: ${r}`:r}).join(" · ");if(e.detail)return String(e.detail)}catch{}return`${n} ${t}`}async function Ns(n,t={}){const e=await fetch(n,{headers:{"Content-Type":"application/json"},...t});if(!e.ok)throw new Error(qE(e.status,await e.text()));return e.json()}const dp=n=>n?`detail=${encodeURIComponent(n)}`:"",YE=()=>Ns("/api/defaults"),jE=n=>Ns("/api/simulations",{method:"POST",body:JSON.stringify(n)}),KE=(n,t,e)=>Ns(`/api/simulations/${n}/step?n=${t}&${dp(e)}`,{method:"POST"}),ZE=(n,t)=>Ns(`/api/simulations/${n}/reset?${dp(t)}`,{method:"POST"}),JE=(n,t)=>Ns(`/api/simulations/${n}/points/${t}`),fp=(n,t,e=0)=>Ns(`/api/simulations/${n}/history?pid=${encodeURIComponent(t)}&start=${e}`),$=n=>document.querySelector(n),Dd=250,Me=1602176634e-28,ra=new Set(["species","kinetic_energy_MeV","dp_rel","dr_m","start_angle_deg"]),Er=[["species","Partícula",["electron","positron","proton"]],["kinetic_energy_MeV","Energía cinética (MeV)"],["ring_radius_m","Radio de referencia R (m)"],["b_field_T","Campo B (T), vacío = referencia","opt"],["dp_rel","Desviación inicial δp/p"],["dr_m","Desplazamiento radial (m)"],["rf_voltage_V","Amplitud RF V₀ (V)"],["rf_phase_deg","Fase RF en el cruce (°)"],["rf_harmonic","Armónico h"],["dt_s","Paso dt (s), vacío = auto","opt"],["steps_per_turn","Pasos por vuelta (dt auto)"],["n_steps","Número de pasos"],["n_magnets","Imanes dibujados"],["start_angle_deg","Ángulo inicial (°)"]],oa={species:"Partícula de referencia (sintoniza B y RF)",kinetic_energy_MeV:"Energía de referencia (MeV)"},pp=new Set(["dp_rel","dr_m"]),QE=[["trail","Trayectoria (estela visual)","#7cf5ff"],["v","Velocidad v","#8fe66f"],["p","Momento p","#ffb84d"],["B","Campo magnético B","#b678ff"],["E","Campo eléctrico E (RF)","#39e6d0"],["rad","Emisión de radiación (cono 1/γ)","#ff4fd8"],["magnets","Imanes de curvatura","#9b4dff"],["cavity","Cavidad RF","#22d3a6"],["ref","Órbita de referencia (guía)","#c060ff"],["axes","Ejes","#ff6b6b"],["grid","Cuadrícula","#28406e"]],tT={single:"Sincrotrón · una partícula",multi:"Sincrotrón · varias partículas",bunch:"Sincrotrón · bunch de partículas"},eT=931.49410242,$n={electron:{label:"Electrón",z:-1,mc2:.51099895},positron:{label:"Positrón",z:1,mc2:.51099895},proton:{label:"Protón",z:1,mc2:938.27208816},ion:{label:"Ion configurable",z:null,mc2:null}},bl=["#7cf5ff","#ff4fd8","#8fe66f","#ffb84d","#b678ff","#ff6b6b","#4d8bff","#f5e663","#22d3a6","#ff9a5a","#c3a6ff","#5ee08a"],nT=new Set(["color","visible","trail_visible","trail_opacity"]),iT="Las partículas interactúan únicamente con los campos externos del acelerador (imanes y cavidad RF). No hay fuerzas entre partículas.",sT="Además de los campos externos, cada partícula siente la fuerza de Coulomb instantánea de las demás. Es una aproximación electrostática: sin campo magnético propio, retardo ni radiación mutua; para haces relativistas sobreestima la fuerza neta (~γ²) y no representa todos los efectos colectivos de un bunch.",w={id:null,info:null,params:null,names:[],idx:{},rows:[],cursor:0,shown:-1,acc:0,playing:!1,fetching:!1,lost:!1,lostReason:null,finished:!1,speed:300,uiMode:"single",mode:"single",defaults:null,cfg:{particles:[],bunch:{},interactions:!1},system:null,interaction:null,radiation:null,meta:[],status:[],nPoints:0,sel:0,detail:{pid:null,rows:[]},detailLoading:!1,legendSig:""},ne=new Qy($("#view"));let Ui=null;const an={chartsAt:0,chartsCursor:-1,chartsDirty:!0};function Q(n,t=5){if(n==null||Number.isNaN(n))return"—";if(n===0)return"0";const e=Math.abs(n);return e>=1e4||e<.001?n.toExponential(t-2):Number(n.toPrecision(t)).toString()}const rT=n=>Object.fromEntries(w.names.map((t,e)=>[t,w.rows[n][e]])),oT=1239.84198;function mp(n){if(!(n>0))return{lambda:null,band:"—"};const t=oT/n,e=t>1e6?"microondas":t>700?"infrarrojo":t>=400?"visible":t>=10?"ultravioleta":t>=.01?"rayos X":"rayos gamma";return{lambda:t,band:e}}const gp=n=>n>=1e6?`${Q(n/1e6)} mm`:n>=1e3?`${Q(n/1e3)} µm`:`${Q(n)} nm`;function _p(n,t){const e=n.radiated_J/Me,{lambda:i,band:s}=mp(n.ecrit_eV);return[["— Radiación sincrotrón —",""],["Potencia emitida (Liénard)",`${Q(n.power_W)} W`],["Energía radiada acumulada",`${Q(e)} eV`],["Fracción de T radiada (no se resta)",`${Q(e/(n.ekin_MeV*1e6)*100)} %`],["Pérdida prevista por vuelta",`${Q(t)} eV`],["Energía crítica de los fotones",`${Q(n.ecrit_eV)} eV`],["λ crítica",i?`${gp(i)} · ${s}`:"— (sin curvatura)"],["Semiángulo del cono 1/γ",`${Q(1e3/n.gamma)} mrad (dibujo ×${ne.coneX})`]]}const ga=(n,t)=>{n.innerHTML=t.map(([e,i])=>`<dt title="${String(e).replace(/"/g,"&quot;")}">${e}</dt><dd>${i}</dd>`).join("")},hn=n=>String(n??"").replace(/[&<>"']/g,t=>`&#${t.charCodeAt(0)};`),Tr=n=>JSON.parse(JSON.stringify(n)),mn=(n,t,e)=>`<option value="${n}" ${n===e?"selected":""}>${t}</option>`,_a=n=>`${n>0?"+":n<0?"−":""}${Math.abs(n)} e`,De=()=>w.mode!=="single";function xp(n){return n.species==="ion"?{z:n.ion_charge_state,mc2:n.ion_mass_u*eT}:$n[n.species]}function aT(n){w.defaults=n;const t=([e,i,s])=>{if(Array.isArray(s))return`<label data-key="${e}"><span>${i}</span><select name="${e}">${s.map(o=>`<option ${o===n[e]?"selected":""}>${o}</option>`).join("")}</select></label>`;const r=n[e]??"";return`<label data-key="${e}"><span>${i}</span><input type="number" step="any" name="${e}" value="${r}" ${s==="opt"?'placeholder="auto"':""}></label>`};$("#form").innerHTML=Er.filter(([e])=>!ra.has(e)).map(t).join(""),$("#formPart").innerHTML=Er.filter(([e])=>ra.has(e)).map(t).join(""),$("#toggles").innerHTML=QE.map(([e,i,s])=>`<label><input type="checkbox" data-k="${e}" checked><span class="sw" style="background:${s}"></span>${i}</label>`).join(""),$("#toggles").addEventListener("change",e=>{ne.setVisible(e.target.dataset.k,e.target.checked),w.shown=-1}),w.cfg.particles=Tr(n.particles),w.cfg.bunch=Tr(n.bunch),Fs(),va(),yc()}function lT(){const n={};for(const t of[...$("#form").elements,...$("#formPart").elements])if(t.name){if(t.tagName==="SELECT"){n[t.name]=t.value;continue}if(t.value===""){n[t.name]=null;continue}n[t.name]=Number(t.value)}for(const t of["rf_harmonic","steps_per_turn","n_steps","n_magnets"])n[t]=Math.round(n[t]);return n.mode=w.uiMode,n.mode!=="single"&&(n.interactions=w.cfg.interactions),n.mode==="multi"&&(n.particles=w.cfg.particles.map(({_open:t,...e})=>e)),n.mode==="bunch"&&(n.bunch={...w.cfg.bunch}),n}function yc(){const n=w.uiMode;$("#mode").value=n,$("#title").textContent=tT[n],$("#partTitle").textContent=n==="single"?"Partícula":"Partícula de referencia (sintoniza B y RF)",$("#interSingle").hidden=n!=="single",$("#multiPanel").hidden=n!=="multi",$("#bunchPanel").hidden=n!=="bunch",$("#interactionNote").hidden=n==="single",$("#interactionsBox").hidden=n==="single",$("#interactions").checked=w.cfg.interactions,$("#interactionNote").textContent=w.cfg.interactions?sT:iT;for(const[t,e]of Er){const i=$(`#panel label[data-key="${t}"]`);i&&(i.hidden=n!=="single"&&pp.has(t),i.querySelector("span").textContent=n!=="single"&&oa[t]?oa[t]:e)}}function cT(){const n=w.uiMode==="multi"?"#multiPanel":w.uiMode==="bunch"?"#bunchPanel":null;if(n&&$(`${n} .invalid`))return"hay campos con valores no válidos (marcados en rojo).";if(w.uiMode==="multi"){const t=w.cfg.particles;if(t.length<2||t.length>100)return"el modo múltiple necesita entre 2 y 100 partículas.";const e=new Set;for(const i of t){if(!/^[A-Za-z0-9_-]{1,16}$/.test(i.id))return`identificador no válido: «${i.id}» (letras, números, _ o -; máx. 16).`;if(e.has(i.id))return`identificador repetido: ${i.id}`;if(e.add(i.id),i.species==="ion"){if(!i.ion_charge_state)return`${i.id}: un ion necesita carga Z ≠ 0.`;if(i.ion_mass_u<.99*Math.abs(i.ion_charge_state))return`${i.id}: con |Z| = ${Math.abs(i.ion_charge_state)} la masa debe ser ≥ ${Math.abs(i.ion_charge_state)} u.`}}}return null}function vp(n){const t=n.energy_input==="kinetic"?`${Q(n.kinetic_energy_MeV)} MeV`:`${Q(n.momentum_MeV_c)} MeV/c`;return`${$n[n.species].label} · ${t}`}function xa(n){const{z:t,mc2:e}=xp(n);return!t||!(e>0)?"q, m: —":`q = ${_a(t)} · m = ${Q(e,6)} MeV/c²`}function Fn(n,t,e,i=""){return`<label><span>${t}</span><input type="number" step="any" data-f="${n}" value="${e}" ${i}></label>`}function hT(n,t){const e=n.species==="ion",i=w.cfg.particles.length;return`<details class="pcard" data-i="${t}" ${n._open?"open":""}>
    <summary><span class="dot" style="background:${n.color}"></span><b>${hn(n.id)}</b>
      <span class="dim psum">${vp(n)}</span>
      <button type="button" class="del" data-act="del" title="Eliminar partícula" ${i<=2?"disabled":""}>×</button></summary>
    <div class="pgrid">
      <label><span>Identificador</span><input type="text" data-f="id" value="${hn(n.id)}" maxlength="16" pattern="[A-Za-z0-9_\\-]{1,16}" required></label>
      <label><span>Especie</span><select data-f="species">${Object.keys($n).map(s=>mn(s,$n[s].label,n.species)).join("")}</select></label>
      ${e?Fn("ion_charge_state","Carga Z (× e)",n.ion_charge_state,'step="1" min="-100" max="100"')+Fn("ion_mass_u","Masa (u)",n.ion_mass_u,'min="0.0001" max="300"'):""}
      <div class="qm">${xa(n)}</div>
      <label><span>Condición inicial</span><select data-f="energy_input">${mn("kinetic","Energía cinética",n.energy_input)}${mn("momentum","Momento",n.energy_input)}</select></label>
      ${n.energy_input==="kinetic"?Fn("kinetic_energy_MeV","T (MeV)",n.kinetic_energy_MeV,'min="0.000001" max="1000000"'):Fn("momentum_MeV_c","|p| (MeV/c)",n.momentum_MeV_c,'min="0.000001" max="1000000"')}
      ${Fn("dr_m","Δr radial (m)",n.dr_m)}
      ${Fn("dz_m","Δz vertical (m)",n.dz_m)}
      ${Fn("ds_m","Δs a lo largo del arco (m)",n.ds_m)}
      <label><span>Sentido</span><select data-f="direction">${mn("forward","Como la referencia",n.direction)}${mn("backward","Opuesto",n.direction)}</select></label>
      ${Fn("yaw_mrad","Ángulo horizontal (mrad)",n.yaw_mrad,'min="-500" max="500"')}
      ${Fn("pitch_mrad","Ángulo vertical (mrad)",n.pitch_mrad,'min="-500" max="500"')}
      <label><span>Color</span><input type="color" data-f="color" value="${n.color}"></label>
      <label><span>Opacidad trayectoria</span><input type="range" data-f="trail_opacity" min="0.05" max="1" step="0.05" value="${n.trail_opacity}"></label>
      <label class="check"><input type="checkbox" data-f="visible" ${n.visible?"checked":""}>Partícula visible</label>
      <label class="check"><input type="checkbox" data-f="trail_visible" ${n.trail_visible?"checked":""}>Trayectoria visible</label>
    </div></details>`}function Fs(){const n=w.cfg.particles;$("#pcards").innerHTML=n.map(hT).join(""),$("#pcount").textContent=`(${n.length} / 100)`,$("#addParticle").disabled=n.length>=100}function uT(){const n=new Set(w.cfg.particles.map(e=>e.id));let t=w.cfg.particles.length+1;for(;n.has(`p${t}`);)t++;return`p${t}`}function yp(n){return n.type==="checkbox"?n.checked:n.type==="number"||n.type==="range"?n.value===""?NaN:Number(n.value):n.value}function dT(n){const{mc2:t}=xp(n);if(t>0)if(n.energy_input==="momentum"){const e=n.kinetic_energy_MeV;n.momentum_MeV_c=Number(Math.sqrt(e*(e+2*t)).toPrecision(8))}else{const e=n.momentum_MeV_c;n.kinetic_energy_MeV=Number((Math.sqrt(e*e+t*t)-t).toPrecision(8))}}function bp(n){const t=n.target,e=t.dataset.f;if(!e)return;const i=t.closest(".pcard"),s=w.cfg.particles[Number(i.dataset.i)],r=yp(t),o=t.checkValidity()&&!(typeof r=="number"&&!Number.isFinite(r));if(t.classList.toggle("invalid",!o),!o)return;const a=s.id;if(s[e]=e==="ion_charge_state"?Math.round(r):r,n.type==="change"&&(e==="species"||e==="energy_input")){e==="energy_input"&&dT(s),s._open=!0,Fs();return}i.querySelector("summary b").textContent=s.id,i.querySelector(".dot").style.background=s.color,i.querySelector(".psum").textContent=vp(s),i.querySelector(".qm").textContent=xa(s),nT.has(e)&&fT(a,{[e]:s[e]})}$("#pcards").addEventListener("input",bp);$("#pcards").addEventListener("change",bp);$("#pcards").addEventListener("toggle",n=>{var e,i;const t=(i=(e=n.target).closest)==null?void 0:i.call(e,".pcard");t&&(w.cfg.particles[Number(t.dataset.i)]._open=t.open)},!0);$("#pcards").addEventListener("click",n=>{if(n.target.dataset.act!=="del")return;n.preventDefault();const t=Number(n.target.closest(".pcard").dataset.i);w.cfg.particles.length>2&&(w.cfg.particles.splice(t,1),Fs())});$("#addParticle").addEventListener("click",()=>{const n=w.cfg.particles;if(n.length>=100)return;const t=new Set(n.map(i=>i.color)),e=bl.find(i=>!t.has(i))||bl[n.length%bl.length];n.push({...Tr(w.defaults.particles[0]),id:uT(),color:e,_open:!0}),Fs()});$("#restoreParticles").addEventListener("click",()=>{w.cfg.particles=Tr(w.defaults.particles),Fs()});function fT(n,t){if(w.mode!=="multi")return;const e=w.meta.findIndex(i=>i.pid===n);e<0||(Object.assign(w.meta[e],t),ne.setMultiStyle(e,Bs(e)),w.legendSig="",w.shown=-1,ks())}function Bs(n){const t=w.meta[n],e=w.mode==="bunch"&&w.cfg.bunch.display==="envelope";return{color:t.color,visible:t.visible&&!e,trail_visible:t.trail_visible&&!e,trail_opacity:t.trail_opacity}}function va(){const n=w.cfg.bunch,t=n.species==="ion",e=(i,s,r,o="")=>`<label><span>${s}</span><input type="number" step="any" data-b="${i}" value="${r??""}" ${o}></label>`;$("#bunchForm").innerHTML=`
    ${e("n_particles","Número de partículas",n.n_particles,'step="1" min="2" max="100"')}
    <label><span>Especie</span><select data-b="species">${Object.keys($n).map(i=>mn(i,$n[i].label,n.species)).join("")}</select></label>
    ${t?e("ion_charge_state","Carga Z (× e)",n.ion_charge_state,'step="1" min="-100" max="100"')+e("ion_mass_u","Masa (u)",n.ion_mass_u,'min="0.0001" max="300"'):""}
    <div class="qm">${xa(n)}</div>
    ${e("central_energy_MeV","Energía central (MeV), vacío = referencia",n.central_energy_MeV,'min="0.000001" placeholder="referencia"')}
    ${e("sigma_s_m","Longitud σ_s (m, RMS)",n.sigma_s_m,'min="0"')}
    ${e("sigma_x_m","Anchura radial σ_x (m, RMS)",n.sigma_x_m,'min="0"')}
    ${e("sigma_z_m","Altura σ_z (m, RMS)",n.sigma_z_m,'min="0"')}
    ${e("sigma_delta","Dispersión de momento σ_δ = Δp/p",n.sigma_delta,'min="0" max="0.1"')}
    <label><span>Distribución</span><select data-b="distribution">${mn("gaussian","Gaussiana (±3σ)",n.distribution)}${mn("uniform","Uniforme (±√3σ)",n.distribution)}</select></label>
    ${e("seed","Semilla aleatoria",n.seed,'step="1" min="0" max="4294967295"')}
    <label><span>Mostrar</span><select data-b="display">${mn("particles","Partículas individuales",n.display)}${mn("envelope","Envolvente translúcida",n.display)}${mn("both","Ambas",n.display)}</select></label>
    <label><span>Color</span><input type="color" data-b="color" value="${n.color}"></label>
    <label><span>Opacidad trayectorias</span><input type="range" data-b="trail_opacity" min="0.05" max="1" step="0.05" value="${n.trail_opacity}"></label>
    <label class="check"><input type="checkbox" data-b="trail_visible" ${n.trail_visible?"checked":""}>Trayectorias visibles</label>
    <p class="note">Tamaños RMS. La envolvente representa la distribución calculada (±2σ); no es un objeto físico.</p>`}function Mp(n){const t=n.target,e=t.dataset.b;if(!e)return;const i=w.cfg.bunch;let s=yp(t);e==="central_energy_MeV"&&t.value===""&&(s=null);const r=t.checkValidity()&&!(typeof s=="number"&&!Number.isFinite(s));if(t.classList.toggle("invalid",!r),!r)return;if(i[e]=["n_particles","seed","ion_charge_state"].includes(e)?Math.round(s):s,n.type==="change"&&e==="species"){va();return}const o=$("#bunchForm .qm");o&&(o.textContent=xa(i)),w.mode==="bunch"&&["display","color","trail_visible","trail_opacity"].includes(e)&&pT()}function pT(){const n=w.cfg.bunch;w.meta.forEach((t,e)=>{Object.assign(t,{color:n.color,trail_visible:n.trail_visible,trail_opacity:n.trail_opacity}),ne.setMultiStyle(e,Bs(e))}),ne.setEnvelopeMode(n.display==="particles"?"none":"on",n.color),w.legendSig="",w.shown=-1,ks()}$("#bunchForm").addEventListener("input",Mp);$("#bunchForm").addEventListener("change",Mp);$("#newSeed").addEventListener("click",()=>{w.cfg.bunch.seed=Math.floor(Math.random()*2**31),va()});$("#restoreBunch").addEventListener("click",()=>{w.cfg.bunch=Tr(w.defaults.bunch),va()});$("#mode").addEventListener("change",n=>{w.uiMode=n.target.value,yc(),ya()});$("#interactions").addEventListener("change",n=>{w.cfg.interactions=n.target.checked,yc(),ya()});function Sp(n){w.names.length||(w.names=n.fields,n.fields.forEach((s,r)=>{w.idx[s]=r}));const{x:t,y:e,z:i}=w.idx;for(const s of n.rows){const r=w.rows.length;w.rows.push(s),ne.setTrailPoint(r,s[t],s[e],s[i])}ne.commitTrail(),w.lost=n.lost,w.lostReason=n.lost_reason,w.finished=n.finished,$("#scrub").max=w.rows.length-1,an.chartsDirty=!0,Op()}function Ep(n){n.positions.forEach((e,i)=>ne.appendPositions(i,n.first_index,e)),w.status=n.status,n.status.forEach((e,i)=>ne.setLastValid(i,e.lost_step)),w.nPoints=n.n_points;const t=n.detail;if(t&&t.pid===w.detail.pid&&t.rows.forEach((e,i)=>{w.detail.rows[t.first_index+i]=e}),n.system&&w.system){const e=n.system;for(const i of["kinetic_J","potential_J","total_J","momentum"])e[i].forEach((s,r)=>{w.system[i][e.first_index+r]=s})}if(n.interaction&&(w.interaction=n.interaction),n.radiation&&w.radiation){const e=n.radiation;for(const i of["power_W","radiated_J"])e[i].forEach((s,r)=>{w.radiation[i][e.first_index+r]=s})}an.chartsDirty=!0,w.lost=n.lost,w.lostReason=n.lost_reason,w.finished=n.finished,$("#scrub").max=w.nPoints-1,Op()}const wr=n=>{var t;return((t=w.status[n])==null?void 0:t.lost_step)??w.nPoints-1};async function mT(n){const t=w.detail;if(w.detailLoading||t.rows[n])return;w.detailLoading=!0;const e=w.id,i=t.pid;let s=0;for(;t.rows[s];)s++;try{const r=await fp(e,i,s);e===w.id&&w.detail.pid===i&&r.rows.forEach((o,a)=>{t.rows[r.first_index+a]=o}),an.chartsDirty=!0}catch(r){Gi(`Error del backend: ${r.message}`,!0)}finally{w.detailLoading=!1,w.shown=-1}}function bc(n){n<0||n>=w.meta.length||(w.sel=n,w.detail={pid:w.meta[n].pid,rows:[]},ne.setSelected(n),w.legendSig="",w.shown=-1,an.chartsDirty=!0,ks())}async function Tp(n){if(w.fetching||w.lost||w.finished)return;w.fetching=!0;const t=w.id;try{const e=await KE(t,n,De()?w.detail.pid:null);t===w.id&&(De()?Ep(e):Sp(e))}catch(e){Gi(`Error del backend: ${e.message}`,!0),w.playing=!1,di()}finally{w.fetching=!1}}async function ya(){w.playing=!1,di();const n=cT();if(n){Gi(`Parámetros no válidos: ${n}`,!0);return}let t;try{t=await jE(lT())}catch(e){Gi(`Parámetros no válidos: ${e.message}`,!0);return}w.id=t.id,w.info=t.derived,w.params=t.params,t.mode==="single"?Cp(t):Rp(t)}async function wp(){if(!w.id)return;w.playing=!1,di();const n=await ZE(w.id,De()?w.detail.pid:null);n.mode==="single"?Cp(n):Rp(n)}function Ap(n){const t=n.derived,e=n.params;Ni={R:e.ring_radius_m,aR:t.aperture_r_m},Ui&&Ui.setRing(Ni.R,Ni.aR),an.chartsDirty=!0,ne.buildRing({R:e.ring_radius_m,aR:t.aperture_r_m,aZ:t.aperture_z_m,nMag:e.n_magnets,gap:t.rf_gap_m,thetaC:t.cavity_angle_rad,bSign:Math.sign(t.bz_T)||1,maxPoints:e.n_steps+1});for(const i of $("#toggles").querySelectorAll("input"))ne.setVisible(i.dataset.k,i.checked)}function Cp(n){w.mode="single",w.radiation=null,document.body.classList.remove("multi-mode"),$("#legend").hidden=!0,$("#derivedExtra").innerHTML="",ne.clearMulti(),w.rows=[],w.names=[],w.cursor=0,w.acc=0,w.shown=-1;const t=n.derived;Ap(n),Sp(n),gT(t),Gi([...t.warnings].join("  ·  "),!1),Ec()}function Rp(n){const t=w.detail.pid;if(w.mode=n.mode,document.body.classList.add("multi-mode"),w.names=n.fields,w.idx={},n.fields.forEach((s,r)=>{w.idx[s]=r}),w.rows=[],w.cursor=0,w.acc=0,w.shown=-1,w.meta=n.particles.map(s=>({...s})),n.mode==="bunch"){const s=w.cfg.bunch;w.meta.forEach(r=>Object.assign(r,{color:s.color,trail_visible:s.trail_visible,trail_opacity:s.trail_opacity}))}Ap(n);const e=w.cfg.bunch;ne.initMulti(w.meta.map((s,r)=>({...s,...Bs(r)})),n.params.n_steps+1,{envelope:n.mode==="bunch"&&e.display!=="particles"?"on":"none",envColor:e.color});let i=w.meta.findIndex(s=>s.pid===t);i<0&&(i=0),w.sel=i,w.detail={pid:n.detail.pid,rows:[]},w.system=n.system?{kinetic_J:[],potential_J:[],total_J:[],momentum:[]}:null,w.radiation=n.radiation?{power_W:[],radiated_J:[]}:null,w.interaction=n.derived.interaction||null,Ep(n),ne.setSelected(i),w.meta[i].pid!==n.detail.pid&&bc(i),_T(n.derived),Gi([...n.derived.warnings].join("  ·  "),!1),Ec(),$("#legend").hidden=!1,w.legendSig="",ks()}function gT(n){ga($("#derived"),[["B de referencia",`${Q(n.b_ref_T)} T`],["B aplicado",`${Q(n.b_used_T)} T`],["Radio de curvatura ρ",`${Q(n.rho_m)} m`],["γ",Q(n.gamma_ref)],["β",Q(n.beta_ref,7)],["Periodo de vuelta",`${Q(n.t_rev_s*1e9)} ns`],["f_rev",`${Q(n.f_rev_Hz/1e6)} MHz`],["f_RF",`${Q(n.f_rf_Hz/1e6)} MHz`],["dt",`${Q(n.dt_s*1e12)} ps`],["Tiempo físico total",`${Q(n.total_time_s*1e9)} ns`],["Ganancia RF / vuelta",`${Q(n.rf_gain_per_turn_eV)} eV`],["Factor de tránsito",Q(n.transit_time_factor,6)],["Potencia radiada (ref.)",`${Q(n.rad_power_ref_W)} W`],["Pérdida / vuelta (no aplicada)",`${Q(n.rad_loss_per_turn_eV)} eV`],["Energía crítica",`${Q(n.ecrit_ref_eV)} eV`],["Semiángulo 1/γ",`${Q(n.cone_half_angle_rad*1e3)} mrad`],["Confinamiento previsto",n.confined_predicted?"sí":'<b style="color:#ff6b7d">no</b>']])}function _T(n){const t=[["Modo",n.mode==="bunch"?"bunch":"múltiple"],["Partículas",n.n_particles],["Confinadas (predicción)",`${n.n_confined_predicted} / ${n.n_particles}`],["B de referencia",`${Q(n.b_ref_T)} T`],["B aplicado",`${Q(n.b_used_T)} T`],["ρ de la referencia",`${Q(n.rho_m)} m`],["γ de la referencia",Q(n.gamma_ref)],["Periodo de vuelta (ref.)",`${Q(n.t_rev_s*1e9)} ns`],["f_RF",`${Q(n.f_rf_Hz/1e6)} MHz`],["dt (reloj común)",`${Q(n.dt_s*1e12)} ps`],["Tiempo físico total",`${Q(n.total_time_s*1e9)} ns`],["Ganancia RF / vuelta (ref.)",`${Q(n.rf_gain_per_turn_eV)} eV`],["Interacciones entre partículas",n.interactions?"Coulomb (aprox.)":"no"]];n.bunch&&t.push(["σ_s muestral",`${Q(n.bunch.sigma_s_m_sample)} m`],["σ_x muestral",`${Q(n.bunch.sigma_x_m_sample)} m`],["σ_z muestral",`${Q(n.bunch.sigma_z_m_sample)} m`],["σ_δ muestral",Q(n.bunch.sigma_delta_sample)]),ga($("#derived"),t);const e=n.particles.map(i=>`<tr><td><span class="dot" style="background:${i.color}"></span>${hn(i.pid)}</td>
    <td>${_a(Math.round(i.charge_C/Me))}</td><td>${Q(i.p_MeV_c)}</td><td>${Q(i.rho_m,4)}</td>
    <td>${i.rotation==="antihorario"?"↺":"↻"}</td><td>${i.confined_predicted?"sí":'<b class="bad">no</b>'}</td></tr>`).join("");$("#derivedExtra").innerHTML=`<table class="ptable"><thead><tr><th>id</th><th>q</th><th>p (MeV/c)</th><th>ρ (m)</th>
    <th>giro</th><th>conf.</th></tr></thead><tbody>${e}</tbody></table>
    <p class="note">${n.notes.map(hn).join("<br>")}</p>`}function ks(){var i;const n=w.cursor,t=w.meta.map((s,r)=>{var a;const o=(a=w.status[r])==null?void 0:a.lost_step;return`${s.visible}${s.trail_visible}${s.color}${o!=null&&n>=o}`}).join("|")+w.sel+w.cfg.bunch.display;if(t===w.legendSig)return;w.legendSig=t;const e=w.status.filter(s=>s.lost_step==null||n<s.lost_step).length;$("#legendCount").textContent=`${e} / ${w.meta.length} confinadas`,$("#legendList").innerHTML=w.meta.map((s,r)=>{var c;const o=(c=w.status[r])==null?void 0:c.lost_step,a=o!=null&&n>=o,l=s.species==="ion"?s.label:$n[s.species].label;return`<div class="lg-row ${r===w.sel?"sel":""} ${a?"lost":""}" data-k="${r}" title="Clic para inspeccionar">
      <input type="checkbox" data-lg="visible" ${s.visible?"checked":""} title="Mostrar partícula">
      <input type="checkbox" data-lg="trail_visible" ${s.trail_visible?"checked":""} title="Mostrar trayectoria">
      <span class="dot" style="background:${s.color}"></span>
      <span class="lg-txt"><b>${hn(s.pid)}</b> · ${hn(l)} · ${_a(Math.round(s.charge_C/Me))}</span>
      <span class="lg-st">${a?`perdida (paso ${o})`:""}</span></div>`}).join(""),$("#legendNote").textContent=((i=w.info)!=null&&i.interactions?"Campos externos + Coulomb instantáneo entre partículas (aproximación electrostática).":"Interactúan sólo con los campos externos; sin fuerzas entre partículas.")+(w.mode==="bunch"&&w.cfg.bunch.display!=="particles"?" La envolvente (±2σ) representa la distribución calculada; no es un objeto físico.":"")}$("#legendList").addEventListener("change",n=>{const t=n.target.dataset.lg;if(!t)return;const e=Number(n.target.closest(".lg-row").dataset.k),i=w.meta[e];if(i[t]=n.target.checked,w.mode==="multi"){const s=w.cfg.particles.find(r=>r.id===i.pid);s&&(s[t]=i[t],Fs())}ne.setMultiStyle(e,Bs(e)),w.legendSig="",w.shown=-1,ks()});$("#legendList").addEventListener("click",n=>{if(n.target.dataset.lg)return;const t=n.target.closest(".lg-row");t&&bc(Number(t.dataset.k))});function xT(){const n=w.cursor;w.shown=n;const t=rT(n);ne.setParticle(t,w.info),ne.setTrailCount(n+1);const e=$("#status"),i=n===w.rows.length-1;w.lost&&i?(e.className="status lost",e.textContent=`Confinamiento perdido (${w.lostReason}) en el paso ${n}`):w.finished&&i?(e.className="status done",e.textContent="Simulación completada"):(e.className="status ok",e.textContent=t.inside?"Confinada":"Fuera de la cámara"),ga($("#telemetry"),[["Paso",`${t.i} / ${w.params.n_steps}`],["Tiempo físico",`${Q(t.t*1e9)} ns`],["Vueltas",Q(t.turns,5)],["γ",Q(t.gamma,6)],["Energía cinética",`${Q(t.ekin_MeV,8)} MeV`],["r",`${Q(t.r,7)} m`],["r − R",`${Q(t.dr*1e3)} mm`],["|B| en la partícula",`${Q(Math.hypot(t.Bx,t.By,t.Bz))} T`],["Trabajo de E acumulado",`${Q(t.work_E_J/1602176634e-28)} eV`],["Residuo ΔT − W",Q(t.energy_residual,3)],..._p(t,w.info.rad_loss_per_turn_eV)]),$("#point").innerHTML=w.names.map(s=>`<tr><td>${s}</td><td>${Q(t[s],8)}</td></tr>`).join(""),$("#scrub").value=n,$("#scrubLabel").textContent=`punto ${n} / ${w.rows.length-1}`}function vT(){var f,g,_;const n=w.cursor;w.shown=n,ne.setMultiCursor(n),ks();const t=w.sel,e=w.meta[t],i=(f=w.status[t])==null?void 0:f.lost_step,s=Math.min(n,wr(t)),r=w.detail.rows[s];r||mT(s);const o=r?Object.fromEntries(w.names.map((p,m)=>[p,r[m]])):null;o&&!(i!=null&&n>i)&&Bs(t).visible?ne.setParticle(o,w.info):ne.hideVectors();const a=w.status.filter(p=>p.lost_step==null||n<p.lost_step).length,l=$("#status"),c=n===w.nPoints-1;w.lost&&c?(l.className="status lost",l.textContent="Todas las partículas han salido de la cámara"):w.finished&&c?(l.className="status done",l.textContent=`Simulación completada · ${a} / ${w.meta.length} confinadas`):(l.className="status ok",l.textContent=`${a} / ${w.meta.length} partículas confinadas`);const h=[["Partícula inspeccionada",`<span class="dot" style="background:${e.color}"></span>${hn(e.pid)}`],["Estado",i!=null&&n>=i?`<b class="bad">fuera de la cámara (paso ${i})</b>`:"confinada"],["Paso (reloj común)",`${n} / ${w.params.n_steps}`],["Tiempo físico",`${Q(n*w.info.dt_s*1e9)} ns`]];o?h.push(["Vueltas",Q(o.turns,5)],["γ",Q(o.gamma,6)],["Energía cinética",`${Q(o.ekin_MeV,8)} MeV`],["|p|",`${Q(Math.hypot(o.px,o.py,o.pz)*299792458/Me/1e6,8)} MeV/c`],["r",`${Q(o.r,7)} m`],["r − R",`${Q(o.dr*1e3)} mm`],["z",`${Q(o.z*1e3)} mm`],["|B| en la partícula",`${Q(Math.hypot(o.Bx,o.By,o.Bz))} T`],["Trabajo de E acumulado",`${Q(o.work_E_J/Me)} eV`],["Residuo ΔT − W",Q(o.energy_residual,3)],..._p(o,(_=(g=w.info.particles)==null?void 0:g[t])==null?void 0:_.rad_loss_per_turn_eV)):h.push(["Diagnóstico","cargando…"]);const u=w.radiation;u&&u.power_W[n]!==void 0&&h.push(["— Radiación total (todas) —",""],["Potencia total emitida",`${Q(u.power_W[n])} W`],["Energía total radiada",`${Q(u.radiated_J[n]/Me)} eV`],["Pérdida total prevista / vuelta",`${Q(w.info.rad_loss_per_turn_total_pred_eV)} eV`]);const d=w.system;if(d&&d.total_J[n]!==void 0){const p=d.total_J[0],m=d.potential_J[n],b=d.momentum[n];h.push(["— Sistema (confinadas) —",""],["Energía de Coulomb U",`${Q(m/Me)} eV`],[w.params.rf_voltage_V>0?"Δ(E_cin + U) (RF activa: no se conserva)":"Δ(E_cin + U) (debe conservarse)",`${Q((d.total_J[n]-p)/Me)} eV`],["|P| total",`${Q(Math.hypot(...b)*299792458/Me/1e6,8)} MeV/c`])}if(w.interaction){const p=w.interaction;h.push(["Distancia mínima entre pares",`${Q(p.min_pair_distance_m)} m`],["Subpasos máx. por dt",`${p.max_substeps}${p.unresolved_steps?` · <b class="bad">${p.unresolved_steps} sin resolver</b>`:""}`])}ga($("#telemetry"),h),$("#point").innerHTML=o?w.names.map(p=>`<tr><td>${p}</td><td>${Q(o[p],8)}</td></tr>`).join(""):"",$("#scrub").value=n,$("#scrubLabel").textContent=`punto ${n} / ${w.nPoints-1}`}function Gi(n,t){const e=$("#banner"),i=String(n||"").split("  ·  ").map(s=>s.trim()).filter(Boolean);e.hidden=!i.length,i.length&&(e.className=`toast glass${t?" err":""}`,e.querySelector(".toast-icon").textContent=t?"⚠":"ⓘ",e.querySelector(".toast-text").textContent=i.length>1?`${i.length} avisos · ${i[0]}`:i[0],e.querySelector(".toast-list").innerHTML=i.map(s=>`<li>${hn(s)}</li>`).join(""),Pp(!!t))}function Pp(n){const t=$("#banner");t.classList.toggle("expanded",n),t.querySelector(".toast-list").hidden=!n;const e=t.querySelector(".toast-more");e.textContent=n?"Ver menos":"Ver más",e.setAttribute("aria-expanded",String(n))}$("#banner .toast-more").addEventListener("click",()=>Pp(!$("#banner").classList.contains("expanded")));$("#banner .toast-close").addEventListener("click",()=>{$("#banner").hidden=!0});const ui={get(n,t){try{return localStorage.getItem(n)??t}catch{return t}},set(n,t){try{localStorage.setItem(n,t)}catch{}}};function Lp(n){for(const t of document.querySelectorAll(".tab")){const e=t.dataset.tab===n;t.classList.toggle("active",e),t.setAttribute("aria-selected",String(e))}for(const t of document.querySelectorAll(".tabpane"))t.classList.toggle("active",t.dataset.pane===n);ui.set("sim.tab",n)}document.querySelector(".tabs").addEventListener("click",n=>{n.target.dataset.tab&&Lp(n.target.dataset.tab)});Lp(ui.get("sim.tab","acc"));function Id(n,t){document.body.classList.toggle(`${n}-collapsed`,t);const e=$(`#${n}Toggle`);e.setAttribute("aria-expanded",String(!t)),e.textContent=n==="left"===t?"›":"‹",e.title=t?"Desplegar panel":"Plegar panel",ui.set(`sim.${n}`,t?"1":"0")}for(const n of["left","right"])$(`#${n}Toggle`).addEventListener("click",()=>Id(n,!document.body.classList.contains(`${n}-collapsed`))),Id(n,ui.get(`sim.${n}`,"0")==="1");let Ni={R:1,aR:.1};const yT=600;function Mc(n){$("#charts").hidden=!n,document.body.classList.toggle("charts-open",n),$("#chartsToggle").setAttribute("aria-expanded",String(n)),ui.set("sim.charts",n?"1":"0"),n&&!Ui&&(Ui=new hp({energy:$("#chEnergy"),power:$("#chPower"),xy:$("#chXY"),coulomb:$("#chCoulomb"),radiated:$("#chRadiated"),coulombEmpty:$("#chCoulombEmpty")}),Ui.setRing(Ni.R,Ni.aR)),an.chartsDirty=!0}$("#chartsToggle").addEventListener("click",()=>Mc($("#charts").hidden));function Dp(n){ne.coneX=n,$("#coneX").value=n,$("#coneXLabel").textContent=`×${n}`,ui.set("sim.coneX",String(n)),w.shown=-1}$("#coneX").addEventListener("input",n=>Dp(Number(n.target.value)));Dp(Number(ui.get("sim.coneX","3"))||3);$("#chartsClose").addEventListener("click",()=>Mc(!1));function Ip(n=w.cursor,t=yT){var m,b;const e=w.idx,i=(((m=w.info)==null?void 0:m.dt_s)??0)*1e9;let s,r,o,a;if(De()){const x=w.sel,y=w.meta[x];s=w.detail.rows,r=Math.min(n,wr(x)),o=y.color,a=`Partícula inspeccionada: ${y.pid} · ${y.species==="ion"?y.label:$n[y.species].label} (energía y potencia) · trayectorias de todas las visibles`}else s=w.rows,r=Math.min(n,s.length-1),o="#7cf5ff",a=`Partícula individual · ${((b=w.params)==null?void 0:b.species)??""}`;const l=Math.max(1,Math.ceil((r+1)/t)),c=[],h=[],u=[],d=[],f=x=>{if(!x)return;const y=x[e.t]*1e9;c.push({x:y,y:x[e.ekin_MeV]}),h.push({x:y,y:x[e.power_W]}),u.push({x:y,y:x[e.radiated_J]/Me}),d.push({x:y,y:x[e.dr]*1e3})};for(let x=0;x<=r;x+=l)f(s[x]);r>=0&&r%l!==0&&f(s[r]);const g=[];if(De()&&ne.multi){const x=w.meta.length,y=Math.max(60,Math.min(t,Math.floor(20*t/x)));w.meta.forEach((C,T)=>{var I;const E=Bs(T);if(!E.visible&&!E.trail_visible)return;const{buf:L}=ne.multi.lines[T],v=Math.min(n,wr(T),ne.multi.count[T]-1);if(v<0)return;const S=Math.max(1,Math.ceil((v+1)/y)),D=[];for(let F=0;F<=v;F+=S)D.push({x:L[3*F]/ne.k,y:-L[3*F+2]/ne.k});const B={x:L[3*v]/ne.k,y:-L[3*v+2]/ne.k};D.push(B);const j=((I=w.status[T])==null?void 0:I.lost_step)!=null&&n>=w.status[T].lost_step;g.push({label:C.pid,color:C.color,pts:E.trail_visible?D:[],now:j||!E.visible?null:B})})}else if(s.length){const x=Math.max(1,Math.ceil((r+1)/t)),y=[];for(let T=0;T<=r;T+=x)y.push({x:s[T][e.x],y:s[T][e.y]});const C={x:s[r][e.x],y:s[r][e.y]};y.push(C),g.push({label:"partícula",color:o,pts:y,now:C})}let _=null;if(w.system){const x=w.system.potential_J,y=Math.min(n,x.length-1),C=Math.max(1,Math.ceil((y+1)/t));_=[];for(let T=0;T<=y;T+=C)x[T]!==void 0&&_.push({x:T*i,y:x[T]/Me});y>=0&&x[y]!==void 0&&_.push({x:y*i,y:x[y]/Me})}let p=null;if(w.radiation){const x=w.radiation,y=Math.min(n,x.power_W.length-1),C=Math.max(1,Math.ceil((y+1)/t));p={power:[],radiated:[]};const T=E=>{x.power_W[E]!==void 0&&(p.power.push({x:E*i,y:x.power_W[E]}),p.radiated.push({x:E*i,y:x.radiated_J[E]/Me}))};for(let E=0;E<=y;E+=C)T(E);y>=0&&y%C!==0&&T(y)}return{series:{ekin:c,power:h,radiated:u,dr:d,color:o},tracks:g,coulomb:_,totals:p,subject:a}}function bT(n){if(!Ui||$("#charts").hidden||!w.id||w.cursor===an.chartsCursor&&!an.chartsDirty||n-an.chartsAt<250)return;const t=Ip();Ui.update(t),$("#chartsSubject").textContent=t.subject,an.chartsAt=n,an.chartsCursor=w.cursor,an.chartsDirty=!1}let Ar=null;const MT=2e3,ba={single:"Partícula individual",multi:"Múltiples partículas",bunch:"Bunch de partículas"},Ma=()=>Wi()-1,Sc=n=>{var t;return n.species==="ion"?n.label:((t=$n[n.species])==null?void 0:t.label)??n.species};function Op(){const n=!!(w.finished||w.lost),t=$("#analysisOpen");n&&!t.classList.contains("ready")&&(t.title="Simulación terminada: abre el análisis para descargar el informe"),t.classList.toggle("ready",n)}async function Up(){if(De())for(let n=0;n<40;n++){const t=w.detail,e=wr(w.sel);if(t.rows[e])return;let i=0;for(;t.rows[i];)i++;const s=await fp(w.id,t.pid,i);if(w.detail===t&&(s.rows.forEach((r,o)=>{t.rows[s.first_index+o]=r}),!s.rows.length))return}}function Np(){var L,v,S;const n=Ma(),t=w.idx,e=w.info,i=e.dt_s,s=De(),r=s?w.detail.rows:w.rows,o=s?Math.min(n,wr(w.sel)):n,a=r[0],l=r[o];if(!a||!l)return null;const c=(D,B)=>D[t[B]];let h=0,u=0;for(let D=0;D<=o;D++){const B=r[D];B&&(h=Math.max(h,Math.abs(c(B,"dr"))),u=Math.max(u,Math.abs(c(B,"energy_residual"))))}const d=s?w.meta[w.sel]:null,f=s?(L=w.status[w.sel])==null?void 0:L.lost_step:null;let g;s?g=w.lost?"todas perdidas":w.finished?"completada":"en curso":g=w.lost?`perdida (${w.lostReason}) en el paso ${n}`:w.finished?"completada":"en curso";const _=c(a,"ekin_MeV"),p=c(l,"ekin_MeV"),m=c(l,"radiated_J")/Me,{lambda:b,band:x}=mp(c(l,"ecrit_eV")),y=s?(S=(v=e.particles)==null?void 0:v[w.sel])==null?void 0:S.rad_loss_per_turn_eV:e.rad_loss_per_turn_eV,C=[{title:"Simulación",items:[["Modo",ba[w.mode]],["Pasos calculados",`${n} de ${w.params.n_steps}`],["Tiempo físico simulado",`${Q(n*i*1e9)} ns`],["Estado",g],...s?[["Partículas confinadas al final",`${w.status.filter(D=>D.lost_step==null||n<D.lost_step).length} de ${w.meta.length}`]]:[]]},{title:s?`Partícula ${d.pid} (${Sc(d)})`:`Partícula (${w.params.species})`,items:[...s&&f!=null?[["Salió de la cámara en el paso",String(f)]]:[],["Vueltas",Q(c(l,"turns"),6)],["Energía cinética inicial",`${Q(_,8)} MeV`],["Energía cinética final",`${Q(p,8)} MeV`],["Cambio de energía ΔT",`${Q((p-_)*1e6)} eV`],["Máx. desviación |r − R|",`${Q(h*1e3)} mm`],["Máx. residuo ΔT − W (precisión)",Q(u,3)]]},{title:"Radiación sincrotrón de la partícula",items:[["Potencia emitida (final)",`${Q(c(l,"power_W"))} W`],["Energía radiada acumulada",`${Q(m)} eV`],["Fracción de T radiada (no se resta)",`${Q(m/(p*1e6)*100)} %`],["Pérdida prevista por vuelta",`${Q(y)} eV`],["Energía crítica de los fotones",`${Q(c(l,"ecrit_eV"))} eV`],["Longitud de onda crítica",b?`${gp(b)} (${x})`:"—"],["Semiángulo del cono 1/γ",`${Q(1e3/c(l,"gamma"))} mrad`]]}],T=w.radiation;T&&T.power_W[n]!==void 0&&C.push({title:"Radiación total (todas las partículas)",items:[["Potencia total emitida (final)",`${Q(T.power_W[n])} W`],["Energía total radiada",`${Q(T.radiated_J[n]/Me)} eV`],["Pérdida total prevista por vuelta",`${Q(e.rad_loss_per_turn_total_pred_eV)} eV`]]});const E=w.system;if(E&&E.total_J[n]!==void 0){const D=w.interaction||{};C.push({title:"Interacciones de Coulomb",items:[["Energía de Coulomb inicial U₀",`${Q(E.potential_J[0]/Me)} eV`],["Energía de Coulomb final",`${Q(E.potential_J[n]/Me)} eV`],[w.params.rf_voltage_V>0?"Δ(E_cin + U) (con RF no se conserva)":"Δ(E_cin + U) (debe conservarse)",`${Q((E.total_J[n]-E.total_J[0])/Me)} eV`],["Distancia mínima entre pares",`${Q(D.min_pair_distance_m)} m`],["Subpasos máximos por dt",`${D.max_substeps??"—"}${D.unresolved_steps?` (${D.unresolved_steps} sin resolver)`:""}`]]})}return C}function ST(n){$("#anCards").innerHTML=n.map(t=>`<div class="an-kpi group"><span>${hn(t.title)}</span></div>`+t.items.map(([e,i])=>`<div class="an-kpi"><b>${i}</b><span>${hn(e)}</span></div>`).join("")).join("")}function ET(){const n=$("#anSubjectBox");n.hidden=!De(),De()&&($("#anSubject").innerHTML=w.meta.map((t,e)=>`<option value="${e}" ${e===w.sel?"selected":""}>${hn(t.pid)} · ${hn(Sc(t))}</option>`).join(""))}async function Sa(){$("#anInfo").textContent="Cargando los datos calculados…",await Up();const n=Ma(),t=Ip(n,MT);Ar.setRing(Ni.R,Ni.aR),Ar.update(t);const e=Np();e&&ST(e),$("#anInfo").textContent=`${ba[w.mode]} · ${n} pasos calculados (${Q(n*w.info.dt_s*1e9)} ns físicos)`+(De()?" · trayectorias de todas las partículas visibles":"")}async function TT(){if(!(!w.id||!Wi())){w.playing=!1,di(),$("#analysis").hidden=!1,Ar||(Ar=new hp({energy:$("#anEnergy"),power:$("#anPower"),radiated:$("#anRadiated"),xy:$("#anXY"),coulomb:$("#anCoulomb"),coulombEmpty:$("#anCoulombEmpty"),dr:$("#anDr")})),ET();try{await Sa()}catch(n){$("#anInfo").textContent=`Error al cargar los datos: ${n.message}`}$("#analysisClose").focus()}}function Fp(){$("#analysis").hidden=!0,$("#analysisOpen").focus()}$("#analysisOpen").addEventListener("click",TT);$("#analysisClose").addEventListener("click",Fp);$("#anRefresh").addEventListener("click",()=>Sa());$("#anSubject").addEventListener("change",async n=>{bc(Number(n.target.value)),await Sa()});const Bp=()=>new Date().toISOString().slice(0,16).replace(/[:T]/g,"-");async function wT(){const n=Ma(),t=await JE(w.id,n),e=w.info.particles||[];return{title:"Partículas: resultado en el último paso calculado",head:["id","especie","carga","T inicial (MeV)","T final (MeV)","ΔT (eV)","r − R (mm)","vueltas","energía radiada (eV)","estado"],rows:t.particles.map((i,s)=>{var l,c;const r=w.meta[s],o=(l=w.status[s])==null?void 0:l.lost_step,a=((c=e[s])==null?void 0:c.ekin_MeV)??i.ekin_MeV;return[r.pid,Sc(r),_a(Math.round(r.charge_C/Me)),Q(a,8),Q(i.ekin_MeV,8),Q((i.ekin_MeV-a)*1e6),Q(i.dr*1e3),Q(i.turns,5),Q(i.radiated_J/Me),o!=null?`perdida en el paso ${o}`:"confinada"]}),note:"Para una partícula perdida se muestra su estado en el punto en que salió de la cámara."}}function AT(){const n=w.params,t=w.info,e=a=>n[a]===null||n[a]===void 0?"auto":String(n[a]),i=Er.filter(([a])=>!ra.has(a)).map(([a,l])=>[l,e(a)]),s=Er.filter(([a])=>ra.has(a)&&!(De()&&pp.has(a))).map(([a,l])=>[De()&&oa[a]?oa[a]:l,e(a)]);s.unshift(["Modo de simulación",ba[w.mode]]),De()&&s.push(["Interacciones de Coulomb",n.interactions?"activadas":"desactivadas"]);const r=[{title:"Anillo, campo B y RF",pairs:i},{title:"Partículas",pairs:s}];if(w.mode==="bunch"){const a=n.bunch;r.push({title:"Bunch",pairs:[["Número de partículas",a.n_particles],["Especie",a.species],["Energía central (MeV)",a.central_energy_MeV??"referencia"],["σ_s longitud (m)",a.sigma_s_m],["σ_x anchura (m)",a.sigma_x_m],["σ_z altura (m)",a.sigma_z_m],["σ_δ (Δp/p)",a.sigma_delta],["Distribución",a.distribution==="gaussian"?"gaussiana (±3σ)":"uniforme (±√3σ)"],["Semilla",a.seed]]})}const o=[{title:"Máquina",pairs:[["B de referencia",`${Q(t.b_ref_T)} T`],["B aplicado",`${Q(t.b_used_T)} T`],["Radio de curvatura ρ (referencia)",`${Q(t.rho_m)} m`],["γ (referencia)",Q(t.gamma_ref)],["β (referencia)",Q(t.beta_ref,7)],["Periodo de vuelta",`${Q(t.t_rev_s*1e9)} ns`],["Frecuencia RF",`${Q(t.f_rf_Hz/1e6)} MHz`],["Paso dt",`${Q(t.dt_s*1e12)} ps`],["Tiempo físico programado",`${Q(t.total_time_s*1e9)} ns`]]},{title:"RF y radiación (partícula de referencia)",pairs:[["Ganancia RF por vuelta",`${Q(t.rf_gain_per_turn_eV)} eV`],["Factor de tiempo de tránsito",Q(t.transit_time_factor,6)],["Potencia radiada",`${Q(t.rad_power_ref_W)} W`],["Pérdida por vuelta (no aplicada)",`${Q(t.rad_loss_per_turn_eV)} eV`],["Energía crítica",`${Q(t.ecrit_ref_eV)} eV`],["Semiángulo 1/γ",`${Q(t.cone_half_angle_rad*1e3)} mrad`]]}];return[{title:"Configuración",groups:r},{title:"Parámetros derivados",groups:o}]}async function CT(){const n=$("#anReport");n.disabled=!0,n.textContent="Generando PDF…";try{await Sa();const t=Np()||[],e=Ar,i=[["Energía cinética vs tiempo","Cambio respecto a la energía inicial de la partícula analizada.",e.energy],["Potencia radiada (Liénard) vs tiempo","Partícula analizada y, con varias partículas, el total (línea discontinua).",e.power],["Energía radiada acumulada vs tiempo","∫P dt; se calcula pero no se resta a la partícula.",e.radiated],["Desviación de la órbita r − R vs tiempo","Distancia al radio de referencia del anillo.",e.dr],["Trayectoria X–Y (planta)","Órbitas calculadas por el motor; el círculo discontinuo es la guía de radio R.",e.xy],...w.system?[["Energía de Coulomb U vs tiempo","Energía potencial electrostática del sistema.",e.coulomb]]:[]].map(([l,c,h])=>({title:l,note:c,img:e.exportImage(h),w:h.canvas.width,h:h.canvas.height})).filter(l=>l.img),s=t.flatMap(l=>l.items).filter(([l])=>["Estado","Vueltas","Cambio de energía ΔT","Energía radiada acumulada","Longitud de onda crítica","Máx. desviación |r − R|","Partículas confinadas al final","Energía total radiada"].includes(l)).map(([l,c])=>[c,l]),r={title:"Informe de simulación — Sincrotrón 3D",subtitle:`${ba[w.mode]} · sesión ${w.id}`,generated:new Date().toLocaleString("es"),cards:s,sections:[...AT(),{title:"Resultados",groups:t.map(l=>({title:l.title,pairs:l.items}))}],tables:De()?[await wT()]:[],charts:i,warnings:w.info.warnings||[],notes:w.info.notes||[],method:["Ecuaciones: dp/dt = q(E + v × B) (más la fuerza de Coulomb entre partículas si se activa) y dx/dt = p c²/E; integrador de Boris relativista de segundo orden con un paso dt común para todas las partículas.","Campos: B vertical uniforme dentro de la cámara de vacío (sin gradiente ni rampa) y campo eléctrico tangencial en el hueco de la cavidad RF.","Radiación: potencia de Liénard con la aceleración debida a los campos externos; la energía radiada se calcula pero no se resta a la partícula (sin reacción de radiación).","Las predicciones analíticas (radio, confinamiento) suponen B uniforme sin RF ni interacciones."]},{buildReportPDF:o}=await Jp(async()=>{const{buildReportPDF:l}=await import("./report_pdf-Dx0RxZZX.js").then(c=>c.r);return{buildReportPDF:l}},[]),a=await o(r);PT(a,`informe_sincrotron_${w.mode}_${Bp()}.pdf`)}catch(t){$("#anInfo").textContent=`No se pudo generar el informe: ${t.message}`}finally{n.disabled=!1,n.textContent="📄 Ver informe (PDF)"}}async function RT(){await Up();const n=Ma(),t=De(),e=t?w.detail.rows:w.rows,i=[...w.names],s=w.radiation,r=w.system;s&&i.push("P_total_W","E_radiada_total_J"),r&&i.push("U_coulomb_J","E_cin_total_J","E_total_sistema_J");const o=[];for(let l=0;l<=n;l++){const c=e[l]?[...e[l]]:[l,l*w.info.dt_s,...Array(w.names.length-2).fill(null)];s&&c.push(s.power_W[l],s.radiated_J[l]),r&&c.push(r.potential_J[l],r.kinetic_J[l],r.total_J[l]),o.push(c)}const a=t?w.meta[w.sel].pid:w.params.species;$E(`datos_sincrotron_${w.mode}_${a}_${Bp()}.csv`,XE(i,o),"text/csv")}$("#anReport").addEventListener("click",CT);const We={blob:null,url:null,name:""};function PT(n,t){We.url&&URL.revokeObjectURL(We.url),We.blob=n,We.name=t,We.url=URL.createObjectURL(n),$("#pdfName").textContent=`${t} · ${Math.max(1,Math.round(n.size/1024))} KB`,$("#pdfFrame").src=We.url,$("#pdfViewer").hidden=!1,$("#pdfClose").focus()}function kp(){$("#pdfViewer").hidden=!0,$("#pdfFrame").src="about:blank",We.url&&(URL.revokeObjectURL(We.url),We.url=null),$("#anReport").focus()}$("#pdfDownload").addEventListener("click",()=>{We.blob&&up(We.name,We.blob)});$("#pdfOpenTab").addEventListener("click",()=>{We.url&&window.open(We.url,"_blank","noopener")});$("#pdfClose").addEventListener("click",kp);$("#anCsv").addEventListener("click",()=>RT().catch(n=>{$("#anInfo").textContent=`Error: ${n.message}`}));function di(){$("#play").textContent=w.playing?"Pausa":"Reproducir"}function Ec(){const n=w.info?w.info.dt_s:0;$("#speedLabel").textContent=`${Math.round(w.speed)} pasos/s · 1 s de pantalla = ${Q(w.speed*n*1e9,3)} ns físicos`}const Wi=()=>De()?w.nPoints:w.rows.length;function zp(){w.cursor>=Wi()-1&&(w.lost||w.finished)||(w.playing=!w.playing,di())}async function Hp(){w.playing=!1,di(),w.cursor+1>=Wi()&&await Tp(1),w.cursor=Math.min(w.cursor+1,Wi()-1)}$("#play").addEventListener("click",zp);$("#step").addEventListener("click",Hp);$("#reset").addEventListener("click",wp);$("#apply").addEventListener("click",ya);$("#scrub").addEventListener("input",n=>{w.playing=!1,di(),w.cursor=Number(n.target.value)});$("#speed").addEventListener("input",n=>{w.speed=10*Math.pow(10,Number(n.target.value)/100*3),Ec()});window.addEventListener("keydown",n=>{if(!$("#pdfViewer").hidden){n.code==="Escape"&&kp();return}if(!$("#analysis").hidden){n.code==="Escape"&&Fp();return}const t=n.target;t.tagName==="SELECT"||t.tagName==="INPUT"&&["number","text"].includes(t.type)||(n.code==="Space"?(n.preventDefault(),zp()):n.code==="ArrowRight"?Hp():n.code==="KeyR"&&wp())});let Od=performance.now();function Vp(n){const t=Math.min(.1,(n-Od)/1e3);if(Od=n,w.id&&Wi()){if(w.playing){w.acc+=w.speed*t;const e=Math.floor(w.acc);w.acc-=e;const i=Wi()-1;w.cursor=Math.min(w.cursor+e,i),w.cursor>=i&&(w.lost||w.finished)&&(w.playing=!1,di()),i-w.cursor<Math.max(2*Dd,w.speed/2)&&Tp(Dd)}w.cursor!==w.shown&&(De()?vT():xT()),bT(n)}ne.render(),requestAnimationFrame(Vp)}(async function(){try{aT(await YE()),await ya()}catch(t){Gi(`No se pudo conectar con el backend (http://127.0.0.1:8000): ${t.message}`,!0)}$("#speed").dispatchEvent(new Event("input")),ui.get("sim.charts","0")==="1"&&Mc(!0),requestAnimationFrame(Vp)})();export{Jp as _};
