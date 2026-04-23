'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import type { SiteContent } from '@/lib/types'

const GlobalResonanceGlobeInner = dynamic(
  () => import('./global-resonance-globe-inner'),
  {
    ssr: false,
    loading: () => (
      <section className="relative overflow-hidden rounded-[2rem] border border-white/65 bg-[radial-gradient(circle_at_top_left,rgba(255,187,122,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(118,196,255,0.16),transparent_26%),radial-gradient(circle_at_bottom,rgba(192,156,255,0.12),transparent_24%),linear-gradient(180deg,#fff3e8_0%,#fbfdff_42%,#f4f8ff_100%)] p-5 shadow-[0_20px_52px_rgba(80,90,120,0.10)] sm:p-6 lg:p-8">
        <div className="max-w-2xl">
          <div className="h-3 w-24 rounded-full bg-white/55" />
          <div className="mt-4 h-4 w-full max-w-[28rem] rounded-full bg-white/45" />
          <div className="mt-3 h-4 w-full max-w-[24rem] rounded-full bg-white/38" />
        </div>
        <div className="mt-6 h-[16rem] rounded-[1.6rem] border border-white/60 bg-white/24 sm:h-[30rem] lg:h-[34rem]" />
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
        <section className="relative overflow-hidden rounded-[2rem] border border-white/65 bg-[radial-gradient(circle_at_top_left,rgba(255,187,122,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(118,196,255,0.16),transparent_26%),radial-gradient(circle_at_bottom,rgba(192,156,255,0.12),transparent_24%),linear-gradient(180deg,#fff3e8_0%,#fbfdff_42%,#f4f8ff_100%)] p-5 shadow-[0_20px_52px_rgba(80,90,120,0.10)] sm:p-6 lg:p-8">
          <div className="max-w-2xl">
            <div className="h-3 w-24 rounded-full bg-white/55" />
            <div className="mt-4 h-4 w-full max-w-[28rem] rounded-full bg-white/45" />
            <div className="mt-3 h-4 w-full max-w-[24rem] rounded-full bg-white/38" />
          </div>
          <div className="mt-6 h-[16rem] rounded-[1.6rem] border border-white/60 bg-white/24 sm:h-[30rem] lg:h-[34rem]" />
        </section>
      )}
    </div>
  )
}
