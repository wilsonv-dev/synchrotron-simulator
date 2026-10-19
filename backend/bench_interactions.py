"""Mide el coste por paso del modo bunch con y sin interacciones de Coulomb (10, 50 y 100 partículas).

    cd backend
    python bench_interactions.py
"""
import time

from app.simulation import BunchParams, MultiSimulation, SimParams

STEPS = 1000


def per_step_ms(n: int, interactions: bool) -> tuple[float, int]:
    sim = MultiSimulation(SimParams(mode="bunch", n_steps=STEPS, interactions=interactions,
                                    bunch=BunchParams(n_particles=n)))
    t0 = time.perf_counter()
    sim.advance(STEPS)
    return (time.perf_counter() - t0) / STEPS * 1e3, sim.max_substeps


if __name__ == "__main__":
    print(f"{'N':>4} {'sin (ms/paso)':>14} {'con (ms/paso)':>14} {'factor':>7} {'subpasos máx.':>14}")
    for n in (10, 50, 100):
        off, _ = per_step_ms(n, False)
        on, sub = per_step_ms(n, True)
        print(f"{n:>4} {off:>14.3f} {on:>14.3f} {on / off:>7.2f} {sub:>14}")
