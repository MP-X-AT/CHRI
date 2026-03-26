'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Globe from 'react-globe.gl'
import type { GlobeMethods } from 'react-globe.gl'
import * as THREE from 'three'
import { feature } from 'topojson-client'
import type { FeatureCollection, Geometry } from 'geojson'
import world from 'world-atlas/countries-110m.json'
import { COUNTRY_NODES, type CountryNode } from '@/lib/country-nodes'
import type { SiteContent } from '@/lib/types'
import styles from './global-resonance-globe.module.css'

type Props = {
  content: SiteContent['arbeitsweise']['globe']
}

type ArcItem = {
  startLat: number
  startLng: number
  endLat: number
  endLng: number
  color: string
  stroke: number
  altitude: number
  dashInitialGap: number
}

type PolygonFeature = {
  properties?: {
    NAME?: string
    name?: string
    ADMIN?: string
    ISO_A2?: string
  }
}

type HtmlNode =
  | (CountryNode & {
      kind: 'country'
      isHovered: boolean
      isActive: boolean
      glowClass: string
      pulseDuration: string
      pulseDelay: string
      labelSize: string
    })
  | (CountryNode & {
      kind: 'halo'
    })

type TopologyLike = {
  objects: {
    countries: object
  }
}

type LightLike = {
  type?: string
  position?: {
    set: (x: number, y: number, z: number) => void
  }
  intensity?: number
  color?: THREE.Color
}

const worldData = world as unknown as TopologyLike
const countries = (
  feature(
    worldData as never,
    worldData.objects.countries as never
  ) as unknown as FeatureCollection<Geometry>
).features

const AMBIENT_LINKS = [
  ['germany', 'canada'],
  ['austria', 'nigeria'],
  ['france', 'colombia'],
  ['turkey', 'india'],
  ['egypt', 'greece'],
  ['usa', 'philippines'],
] as const

const LAND_PALETTE = [
  '#ffb86f',
  '#ffd95e',
  '#74d6ff',
  '#75e8c8',
  '#b998ff',
  '#ff97c5',
  '#8fc8ff',
  '#ff9f7b',
]

const GLOW_CLASSES = [
  styles.glowWarm,
  styles.glowSun,
  styles.glowSky,
  styles.glowMint,
  styles.glowViolet,
  styles.glowRose,
]

function hashString(value: string) {
  let hash = 0
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0
  }
  return hash
}

function pointHitRadius(size?: CountryNode['size']) {
  if (size === 'lg') return 0.82
  if (size === 'md') return 0.7
  return 0.6
}

function glowClassForCountry(id: string) {
  const index = COUNTRY_NODES.findIndex((node) => node.id === id)
  return GLOW_CLASSES[index % GLOW_CLASSES.length]
}

function pulseDurationForCountry(id: string) {
  const values = ['5.8s', '6.7s', '5.2s', '7.4s', '6.1s', '8.2s']
  return values[hashString(id) % values.length]
}

function pulseDelayForCountry(id: string) {
  const values = ['0s', '0.8s', '1.6s', '0.4s', '2.2s', '1.1s']
  return values[hashString(id) % values.length]
}

function labelSizeForCountry(size?: CountryNode['size']) {
  if (size === 'lg') return '1.08rem'
  if (size === 'md') return '0.98rem'
  return '0.9rem'
}

function landColorForFeature(featureItem: PolygonFeature) {
  const seed =
    featureItem.properties?.NAME ??
    featureItem.properties?.name ??
    featureItem.properties?.ADMIN ??
    'land'

  return LAND_PALETTE[hashString(seed) % LAND_PALETTE.length]
}

function findNearestConnections(
  active: CountryNode,
  nodes: CountryNode[],
  count = 3
) {
  return nodes
    .filter((node) => node.id !== active.id)
    .map((node) => {
      const dx = node.lng - active.lng
      const dy = node.lat - active.lat
      return { node, distance: Math.hypot(dx, dy) }
    })
    .sort((a, b) => a.distance - b.distance)
    .slice(0, count)
    .map((item) => item.node)
}

function createDashInitialGap(
  startLat: number,
  startLng: number,
  endLat: number,
  endLng: number
) {
  const seed = `${startLat}-${startLng}-${endLat}-${endLng}`
  return (hashString(seed) % 200) / 100
}

export default function GlobalResonanceGlobeInner({ content }: Props) {
  const globeRef = useRef<GlobeMethods | undefined>(undefined)
  const globeWrapRef = useRef<HTMLDivElement | null>(null)

  const [activeCountry, setActiveCountry] = useState<CountryNode | null>(null)
  const [hoveredCountry, setHoveredCountry] = useState<CountryNode | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [globeSize, setGlobeSize] = useState({ width: 0, height: 0 })
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaMobile = window.matchMedia('(max-width: 767px)')
    const mediaTouch = window.matchMedia('(hover: none), (pointer: coarse)')
    const mediaReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updateMediaState = () => {
      setIsMobile(mediaMobile.matches)
      setIsTouchDevice(mediaTouch.matches)
      setPrefersReducedMotion(mediaReducedMotion.matches)
    }

    updateMediaState()

    mediaMobile.addEventListener('change', updateMediaState)
    mediaTouch.addEventListener('change', updateMediaState)
    mediaReducedMotion.addEventListener('change', updateMediaState)

    return () => {
      mediaMobile.removeEventListener('change', updateMediaState)
      mediaTouch.removeEventListener('change', updateMediaState)
      mediaReducedMotion.removeEventListener('change', updateMediaState)
    }
  }, [])

  useEffect(() => {
    const element = globeWrapRef.current
    if (!element) return

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (!entry) return

      const width = entry.contentRect.width

      let height = width * 0.78
      if (width < 480) height = width * 0.9
      else if (width < 768) height = width * 0.82
      else if (width < 1280) height = width * 0.7

      const clampedHeight = Math.max(320, Math.min(height, 740))

      setGlobeSize({
        width,
        height: clampedHeight,
      })
    })

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const element = globeWrapRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(Boolean(entry?.isIntersecting))
      },
      { threshold: 0.08 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const focusedCountry = isTouchDevice
    ? activeCountry
    : hoveredCountry ?? activeCountry

  const globeMaterial = useMemo(() => {
    const material = new THREE.MeshPhongMaterial()
    material.color = new THREE.Color('#ffffff')
    material.emissive = new THREE.Color('#fff7ef')
    material.emissiveIntensity = isMobile ? 0.08 : 0.12
    material.shininess = isMobile ? 10 : 16
    material.specular = new THREE.Color('#ffffff')
    return material
  }, [isMobile])

  useEffect(() => {
    if (!globeRef.current) return

    const controls = globeRef.current.controls()
    controls.autoRotate = isVisible && !prefersReducedMotion
    controls.autoRotateSpeed = prefersReducedMotion
      ? 0
      : focusedCountry
        ? isMobile
          ? 0.003
          : 0.007
        : isMobile
          ? 0.018
          : 0.06

    controls.enablePan = false
    controls.enableDamping = true
    controls.dampingFactor = isMobile ? 0.14 : 0.1
    controls.rotateSpeed = isMobile ? 0.34 : 0.46
    controls.minDistance = isMobile ? 210 : 180
    controls.maxDistance = isMobile ? 430 : 400

    const lights = (globeRef.current.lights?.() ?? []) as LightLike[]
    const directionalLight = lights.find((obj) => obj?.type === 'DirectionalLight')
    const ambientLight = lights.find((obj) => obj?.type === 'AmbientLight')

    if (directionalLight?.position) {
      directionalLight.position.set(2, 1.35, 1.25)
      directionalLight.intensity = isMobile ? 1.6 : 2
      directionalLight.color = new THREE.Color('#fff9f1')
    }

    if (ambientLight) {
      ambientLight.intensity = isMobile ? 1.04 : 1.22
      ambientLight.color = new THREE.Color('#fffcf7')
    }
  }, [focusedCountry, isMobile, isVisible, prefersReducedMotion])

  useEffect(() => {
    if (!globeRef.current) return

    if (hoveredCountry && !isTouchDevice) {
      globeRef.current.pointOfView(
        {
          lat: hoveredCountry.lat + (isMobile ? 3 : 5.4),
          lng: hoveredCountry.lng - (isMobile ? 6.5 : 10.5),
          altitude: isMobile ? 1.1 : 0.9,
        },
        prefersReducedMotion ? 0 : 900
      )
      return
    }

    if (activeCountry) {
      globeRef.current.pointOfView(
        {
          lat: activeCountry.lat + (isMobile ? 2.6 : 4.4),
          lng: activeCountry.lng - (isMobile ? 5.2 : 8.6),
          altitude: isMobile ? 1.12 : 0.95,
        },
        prefersReducedMotion ? 0 : isMobile ? 850 : 1050
      )
      return
    }

    globeRef.current.pointOfView(
      {
        lat: 24,
        lng: 30,
        altitude: isMobile ? 1.28 : 1.14,
      },
      prefersReducedMotion ? 0 : 1300
    )
  }, [hoveredCountry, activeCountry, isTouchDevice, isMobile, prefersReducedMotion])

  const ambientArcs = useMemo(() => {
    if (isMobile) return []

    return AMBIENT_LINKS.map(([fromId, toId], index) => {
      const from = COUNTRY_NODES.find((node) => node.id === fromId)
      const to = COUNTRY_NODES.find((node) => node.id === toId)

      if (!from || !to) return null

      const colors = [
        'rgba(255, 184, 120, 0.05)',
        'rgba(116, 214, 255, 0.05)',
        'rgba(191, 150, 255, 0.045)',
        'rgba(103, 233, 197, 0.045)',
      ]

      return {
        startLat: from.lat,
        startLng: from.lng,
        endLat: to.lat,
        endLng: to.lng,
        color: colors[index % colors.length],
        stroke: 0.055,
        altitude: 0.042,
        dashInitialGap: createDashInitialGap(
          from.lat,
          from.lng,
          to.lat,
          to.lng
        ),
      }
    }).filter(Boolean) as ArcItem[]
  }, [isMobile])

  const focusArcs = useMemo(() => {
    if (!focusedCountry || isMobile) return []

    return findNearestConnections(focusedCountry, COUNTRY_NODES, 3).map(
      (node, index) => ({
        startLat: focusedCountry.lat,
        startLng: focusedCountry.lng,
        endLat: node.lat,
        endLng: node.lng,
        color:
          index % 3 === 0
            ? 'rgba(255, 184, 120, 0.15)'
            : index % 3 === 1
              ? 'rgba(116, 214, 255, 0.14)'
              : 'rgba(191, 150, 255, 0.13)',
        stroke: 0.11,
        altitude: 0.052,
        dashInitialGap: createDashInitialGap(
          focusedCountry.lat,
          focusedCountry.lng,
          node.lat,
          node.lng
        ),
      })
    )
  }, [focusedCountry, isMobile])

  const allArcs = useMemo(
    () => [...ambientArcs, ...focusArcs],
    [ambientArcs, focusArcs]
  )

  const htmlNodes = useMemo<HtmlNode[]>(() => {
    if (isMobile) return []

    const baseNodes: HtmlNode[] = COUNTRY_NODES.map((node) => ({
      ...node,
      kind: 'country',
      isHovered: hoveredCountry?.id === node.id,
      isActive: activeCountry?.id === node.id,
      glowClass: glowClassForCountry(node.id),
      pulseDuration: pulseDurationForCountry(node.id),
      pulseDelay: pulseDelayForCountry(node.id),
      labelSize: labelSizeForCountry(node.size),
    }))

    if (focusedCountry) {
      baseNodes.unshift({
        ...focusedCountry,
        kind: 'halo',
      })
    }

    return baseNodes
  }, [hoveredCountry, activeCountry, focusedCountry, isMobile])

  const interactionHint = isTouchDevice
    ? content.interactionHintTouch
    : content.interactionHintHover

  return (
    <section className="relative overflow-hidden rounded-[2.2rem] border border-white/60 bg-[radial-gradient(circle_at_top_left,rgba(255,187,122,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(118,196,255,0.16),transparent_26%),radial-gradient(circle_at_bottom,rgba(192,156,255,0.12),transparent_24%),linear-gradient(180deg,#fff3e8_0%,#fbfdff_42%,#f4f8ff_100%)] p-5 shadow-[0_24px_72px_rgba(80,90,120,0.12)] sm:rounded-[2.7rem] sm:p-8 lg:rounded-[3rem] lg:p-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-12 top-0 h-52 w-52 rounded-full bg-[rgba(255,170,110,0.16)] blur-3xl sm:h-64 sm:w-64" />
        <div className="absolute right-[-1rem] top-[8%] h-56 w-56 rounded-full bg-[rgba(120,190,255,0.14)] blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute bottom-[-4rem] left-[36%] h-52 w-52 rounded-full bg-[rgba(196,175,255,0.12)] blur-3xl sm:h-64 sm:w-64" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--accent)] sm:text-sm">
          {content.eyebrow}
        </p>

        <h2 className="mt-3 text-2xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
          {content.title}
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted-foreground)] sm:mt-5 sm:text-lg sm:leading-8">
          {content.intro}
        </p>

        <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-[var(--foreground)]/48 sm:mt-6 sm:text-sm sm:tracking-[0.22em]">
          {interactionHint}
        </p>
      </div>

      <div className="relative z-10 mt-8 overflow-hidden rounded-[1.75rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,255,255,0.14))] shadow-[inset_0_1px_0_rgba(255,255,255,0.56)] sm:mt-10 sm:rounded-[2.4rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_22%),radial-gradient(circle_at_72%_22%,rgba(255,210,155,0.18),transparent_20%),radial-gradient(circle_at_58%_78%,rgba(120,190,255,0.14),transparent_18%)]" />

        <div ref={globeWrapRef} className="relative min-h-[20rem] sm:min-h-[30rem]">
          {globeSize.width > 0 && (
            <Globe
              ref={globeRef}
              width={globeSize.width}
              height={globeSize.height}
              backgroundColor="rgba(0,0,0,0)"
              globeMaterial={globeMaterial}
              globeImageUrl={isMobile ? undefined : '/globe/earth-blue-marble.jpg'}
              bumpImageUrl={isMobile ? undefined : '/globe/earth-topology.png'}
              atmosphereColor="#ffd7ac"
              atmosphereAltitude={isMobile ? 0.18 : 0.24}
              polygonsData={countries}
              polygonCapColor={(featureItem: object) =>
                landColorForFeature(featureItem as PolygonFeature)
              }
              polygonSideColor={() => 'rgba(255,255,255,0.06)'}
              polygonStrokeColor={() => 'rgba(255,255,255,0.16)'}
              polygonAltitude={() => (isMobile ? 0.004 : 0.006)}
              pointsData={COUNTRY_NODES}
              pointLat="lat"
              pointLng="lng"
              pointColor={() => 'rgba(255,255,255,0.01)'}
              pointLabel={() => ''}
              polygonLabel={() => ''}
              pointAltitude={isMobile ? 0.014 : 0.016}
              pointRadius={(item: object) => {
                const node = item as CountryNode
                const base = pointHitRadius(node.size)
                const touchBoost = isTouchDevice ? 1.18 : 1
                const isHovered = !isTouchDevice && hoveredCountry?.id === node.id
                const isActive = activeCountry?.id === node.id

                if (isHovered) return base * 1.58 * touchBoost
                if (isActive) return base * 1.34 * touchBoost
                return base * touchBoost
              }}
              pointsMerge={false}
              onPointHover={(point: object | null) => {
                if (isTouchDevice) return
                setHoveredCountry(point ? (point as CountryNode) : null)
              }}
              onPointClick={(point: object) => {
                const item = point as CountryNode
                setActiveCountry((current) => (current?.id === item.id ? null : item))
              }}
              arcsData={allArcs}
              arcColor={(item: object) => (item as ArcItem).color}
              arcStroke={(item: object) => (item as ArcItem).stroke}
              arcAltitude={(item: object) => (item as ArcItem).altitude}
              arcDashLength={() => 0.02}
              arcDashGap={() => 3}
              arcDashInitialGap={(item: object) =>
                (item as ArcItem).dashInitialGap
              }
              arcDashAnimateTime={() =>
                prefersReducedMotion ? 0 : isMobile ? 0 : 16000
              }
              htmlElementsData={htmlNodes}
              htmlLat="lat"
              htmlLng="lng"
              htmlElement={(item: object) => {
                const node = item as HtmlNode

                if (node.kind === 'halo') {
                  const halo = document.createElement('div')
                  halo.className = styles.countryFocusHalo
                  return halo
                }

                const el = document.createElement('div')
                el.className = [
                  styles.countryGlowNode,
                  node.glowClass,
                  node.isHovered ? styles.isHovered : '',
                  node.isActive ? styles.isActive : '',
                ].join(' ')

                el.style.setProperty('--pulse-duration', node.pulseDuration)
                el.style.setProperty('--pulse-delay', node.pulseDelay)
                el.style.setProperty('--label-size', node.labelSize)

                if (node.isHovered || node.isActive) {
                  const label = document.createElement('div')
                  label.className = styles.countryHoverLabel
                  label.textContent = content.countryLabels[node.id] ?? node.id
                  el.appendChild(label)
                }

                return el
              }}
            />
          )}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgba(244,248,255,0.88)] via-[rgba(244,248,255,0.28)] to-transparent sm:h-32" />
      </div>

      {isTouchDevice && activeCountry && (
        <div className="relative z-10 mt-4 rounded-[1.4rem] border border-white/70 bg-white/72 p-4 shadow-[0_14px_42px_rgba(80,90,120,0.08)] backdrop-blur-md sm:hidden">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--foreground)]/45">
                {content.activeFocusLabel}
              </p>
              <h3 className="mt-1 text-lg font-medium text-[var(--foreground)]">
                {content.countryLabels[activeCountry.id] ?? activeCountry.id}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                {content.activeFocusText}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setActiveCountry(null)}
              className="shrink-0 rounded-full border border-white/70 bg-white/82 px-3 py-1.5 text-xs font-medium text-[var(--foreground)]/75 transition hover:bg-white"
            >
              {content.closeButton}
            </button>
          </div>
        </div>
      )}

      <div className="relative z-10 mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
        {content.capsules.map((capsule) => (
          <div
            key={capsule}
            className="rounded-full border border-white/65 bg-white/62 px-3.5 py-2 text-xs text-[var(--foreground)]/74 backdrop-blur-sm sm:px-4 sm:text-sm"
          >
            {capsule}
          </div>
        ))}
      </div>
    </section>
  )
}