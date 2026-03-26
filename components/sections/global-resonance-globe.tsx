'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import type { SiteContent } from '@/lib/types'

const GlobalResonanceGlobeInner = dynamic(
  () => import('./global-resonance-globe-inner'),
  {
    ssr: false,
    loading: () => (
      <section className="relative overflow-hidden rounded-[2.4rem] border border-white/60 bg-[radial-gradient(circle_at_top_left,rgba(255,187,122,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(118,196,255,0.16),transparent_26%),radial-gradient(circle_at_bottom,rgba(192,156,255,0.12),transparent_24%),linear-gradient(180deg,#fff3e8_0%,#fbfdff_42%,#f4f8ff_100%)] p-6 shadow-[0_24px_70px_rgba(80,90,120,0.12)] sm:rounded-[2.8rem] sm:p-8 lg:p-10">
        <div className="max-w-3xl">
          <div className="h-3.5 w-28 rounded-full bg-white/55" />
          <div className="mt-5 h-9 w-[22rem] max-w-full rounded-full bg-white/50" />
          <div className="mt-5 h-4 w-full max-w-2xl rounded-full bg-white/45" />
          <div className="mt-3 h-4 w-[78%] max-w-xl rounded-full bg-white/40" />
        </div>

        <div className="mt-8 h-[24rem] rounded-[1.9rem] border border-white/60 bg-white/28 sm:mt-10 sm:h-[32rem] sm:rounded-[2.3rem] lg:h-[40rem]" />
      </section>
    ),
  }
)

export default function GlobalResonanceGlobe({
  content,
}: {
  content: SiteContent['arbeitsweise']['globe']
}) {
  const mountRef = useRef<HTMLDivElement | null>(null)
  const [shouldMount, setShouldMount] = useState(false)

  useEffect(() => {
    const element = mountRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        setShouldMount(true)
        observer.disconnect()
      },
      { rootMargin: '240px 0px' }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={mountRef}>
      {shouldMount ? (
        <GlobalResonanceGlobeInner content={content} />
      ) : (
        <section className="relative overflow-hidden rounded-[2.4rem] border border-white/60 bg-[radial-gradient(circle_at_top_left,rgba(255,187,122,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(118,196,255,0.12),transparent_26%),linear-gradient(180deg,#fff4ea_0%,#fbfdff_44%,#f5f8ff_100%)] p-6 shadow-[0_20px_56px_rgba(80,90,120,0.10)] sm:rounded-[2.8rem] sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <div className="h-3.5 w-24 rounded-full bg-white/55" />
            <div className="mt-5 h-9 w-[20rem] max-w-full rounded-full bg-white/50" />
            <div className="mt-5 h-4 w-full max-w-2xl rounded-full bg-white/45" />
            <div className="mt-3 h-4 w-[72%] max-w-lg rounded-full bg-white/40" />
          </div>

          <div className="mt-8 h-[24rem] rounded-[1.9rem] border border-white/60 bg-white/24 sm:mt-10 sm:h-[32rem] sm:rounded-[2.3rem] lg:h-[40rem]" />
        </section>
      )}
    </div>
  )
}