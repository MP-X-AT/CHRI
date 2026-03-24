'use client'

import dynamic from 'next/dynamic'

const GlobalResonanceGlobeInner = dynamic(
  () => import('./global-resonance-globe-inner'),
  {
    ssr: false,
    loading: () => (
      <section className="relative overflow-hidden rounded-[2.9rem] border border-white/55 bg-[radial-gradient(circle_at_top_left,rgba(255,187,122,0.24),transparent_28%),radial-gradient(circle_at_top_right,rgba(118,196,255,0.22),transparent_26%),radial-gradient(circle_at_bottom,rgba(192,156,255,0.18),transparent_24%),linear-gradient(180deg,#fff1e5_0%,#f8fcff_42%,#f1f8ff_100%)] p-7 shadow-[0_34px_100px_rgba(80,90,120,0.18)] sm:p-10 lg:p-12">
        <div className="max-w-3xl">
          <div className="h-4 w-28 rounded-full bg-white/50" />
          <div className="mt-5 h-10 w-[24rem] max-w-full rounded-full bg-white/50" />
          <div className="mt-5 h-4 w-full max-w-2xl rounded-full bg-white/45" />
          <div className="mt-3 h-4 w-[80%] max-w-xl rounded-full bg-white/40" />
        </div>

        <div className="mt-10 h-[34rem] rounded-[2.35rem] border border-white/55 bg-white/30 sm:h-[40rem] lg:h-[46rem]" />
      </section>
    ),
  }
)

export default GlobalResonanceGlobeInner