'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Globe from 'react-globe.gl'
import type { GlobeMethods } from 'react-globe.gl'
import * as THREE from 'three'
import { feature } from 'topojson-client'
import type { FeatureCollection, Geometry } from 'geojson'
import world from 'world-atlas/countries-110m.json'
import { COUNTRY_NODES, type CountryNode } from '@/lib/country-nodes'

type Props = {
  title: string
  intro: string
  eyebrow?: string
}

type ArcItem = {
  startLat: number
  startLng: number
  endLat: number
  endLng: number
  color: string
  stroke: number
  altitude: number
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
  ['Deutschland', 'Kanada'],
  ['Österreich', 'Nigeria'],
  ['Frankreich', 'Kolumbien'],
  ['Türkei', 'Indien'],
  ['Ägypten', 'Griechenland'],
  ['USA', 'Philippinen'],
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
  'glow-warm',
  'glow-sun',
  'glow-sky',
  'glow-mint',
  'glow-violet',
  'glow-rose',
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

function glowClassForCountry(name: string) {
  const index = COUNTRY_NODES.findIndex((node) => node.name === name)
  return GLOW_CLASSES[index % GLOW_CLASSES.length]
}

function pulseDurationForCountry(name: string) {
  const values = ['5.8s', '6.7s', '5.2s', '7.4s', '6.1s', '8.2s']
  return values[hashString(name) % values.length]
}

function pulseDelayForCountry(name: string) {
  const values = ['0s', '0.8s', '1.6s', '0.4s', '2.2s', '1.1s']
  return values[hashString(name) % values.length]
}

function labelSizeForCountry(size?: CountryNode['size']) {
  if (size === 'lg') return '1.16rem'
  if (size === 'md') return '1.02rem'
  return '0.94rem'
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
    .filter((node) => node.name !== active.name)
    .map((node) => {
      const dx = node.lng - active.lng
      const dy = node.lat - active.lat
      return { node, distance: Math.hypot(dx, dy) }
    })
    .sort((a, b) => a.distance - b.distance)
    .slice(0, count)
    .map((item) => item.node)
}

export default function GlobalResonanceGlobeInner({
  title,
  intro,
  eyebrow = 'Diversity',
}: Props) {
  const globeRef = useRef<GlobeMethods | undefined>(undefined)
  const [activeCountry, setActiveCountry] = useState<CountryNode | null>(null)
  const [hoveredCountry, setHoveredCountry] = useState<CountryNode | null>(null)

  const focusedCountry = hoveredCountry ?? activeCountry

  const globeMaterial = useMemo(() => {
    const material = new THREE.MeshPhongMaterial()
    material.color = new THREE.Color('#ffffff')
    material.emissive = new THREE.Color('#fff6ed')
    material.emissiveIntensity = 0.14
    material.shininess = 20
    material.specular = new THREE.Color('#ffffff')
    return material
  }, [])

  useEffect(() => {
    if (!globeRef.current) return

    const controls = globeRef.current.controls()
    controls.autoRotate = true
    controls.autoRotateSpeed = focusedCountry ? 0.008 : 0.095
    controls.enablePan = false
    controls.enableDamping = true
    controls.dampingFactor = 0.09
    controls.rotateSpeed = 0.5
    controls.minDistance = 180
    controls.maxDistance = 420

    const lights = (globeRef.current.lights?.() ?? []) as LightLike[]
    const directionalLight = lights.find(
      (obj) => obj?.type === 'DirectionalLight'
    )
    const ambientLight = lights.find(
      (obj) => obj?.type === 'AmbientLight'
    )

    if (directionalLight?.position) {
      directionalLight.position.set(2, 1.35, 1.25)
      directionalLight.intensity = 2.2
      directionalLight.color = new THREE.Color('#fff9f1')
    }

    if (ambientLight) {
      ambientLight.intensity = 1.32
      ambientLight.color = new THREE.Color('#fffcf7')
    }
  }, [focusedCountry])

  useEffect(() => {
    if (!globeRef.current) return

    if (hoveredCountry) {
      globeRef.current.pointOfView(
        {
          lat: hoveredCountry.lat + 5.8,
          lng: hoveredCountry.lng - 11.5,
          altitude: 0.9,
        },
        1200
      )
      return
    }

    if (activeCountry) {
      globeRef.current.pointOfView(
        {
          lat: activeCountry.lat + 4.6,
          lng: activeCountry.lng - 9,
          altitude: 0.96,
        },
        1150
      )
      return
    }

    globeRef.current.pointOfView(
      {
        lat: 24,
        lng: 30,
        altitude: 1.18,
      },
      1600
    )
  }, [hoveredCountry, activeCountry])

  const ambientArcs = useMemo(() => {
    return AMBIENT_LINKS.map(([fromName, toName], index) => {
      const from = COUNTRY_NODES.find((node) => node.name === fromName)
      const to = COUNTRY_NODES.find((node) => node.name === toName)

      if (!from || !to) return null

      const colors = [
        'rgba(255, 184, 120, 0.06)',
        'rgba(116, 214, 255, 0.06)',
        'rgba(191, 150, 255, 0.05)',
        'rgba(103, 233, 197, 0.05)',
      ]

      return {
        startLat: from.lat,
        startLng: from.lng,
        endLat: to.lat,
        endLng: to.lng,
        color: colors[index % colors.length],
        stroke: 0.06,
        altitude: 0.045,
      }
    }).filter(Boolean) as ArcItem[]
  }, [])

  const focusArcs = useMemo(() => {
    if (!focusedCountry) return []

    return findNearestConnections(focusedCountry, COUNTRY_NODES, 3).map(
      (node, index) => ({
        startLat: focusedCountry.lat,
        startLng: focusedCountry.lng,
        endLat: node.lat,
        endLng: node.lng,
        color:
          index % 3 === 0
            ? 'rgba(255, 184, 120, 0.17)'
            : index % 3 === 1
              ? 'rgba(116, 214, 255, 0.16)'
              : 'rgba(191, 150, 255, 0.14)',
        stroke: 0.12,
        altitude: 0.055,
      })
    )
  }, [focusedCountry])

  const allArcs = [...ambientArcs, ...focusArcs]

  const htmlNodes = useMemo<HtmlNode[]>(() => {
    const baseNodes: HtmlNode[] = COUNTRY_NODES.map((node) => ({
      ...node,
      kind: 'country',
      isHovered: hoveredCountry?.name === node.name,
      isActive: activeCountry?.name === node.name,
      glowClass: glowClassForCountry(node.name),
      pulseDuration: pulseDurationForCountry(node.name),
      pulseDelay: pulseDelayForCountry(node.name),
      labelSize: labelSizeForCountry(node.size),
    }))

    if (focusedCountry) {
      baseNodes.unshift({
        ...focusedCountry,
        kind: 'halo',
      })
    }

    return baseNodes
  }, [hoveredCountry, activeCountry, focusedCountry])

  return (
    <section className="relative overflow-hidden rounded-[3rem] border border-white/60 bg-[radial-gradient(circle_at_top_left,rgba(255,187,122,0.24),transparent_28%),radial-gradient(circle_at_top_right,rgba(118,196,255,0.22),transparent_26%),radial-gradient(circle_at_bottom,rgba(192,156,255,0.18),transparent_24%),linear-gradient(180deg,#fff2e7_0%,#fbfdff_42%,#f2f8ff_100%)] p-7 shadow-[0_36px_110px_rgba(80,90,120,0.18)] sm:p-10 lg:p-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-12 top-0 h-72 w-72 rounded-full bg-[rgba(255,170,110,0.18)] blur-3xl" />
        <div className="absolute right-[-1rem] top-[8%] h-80 w-80 rounded-full bg-[rgba(120,190,255,0.18)] blur-3xl" />
        <div className="absolute bottom-[-4rem] left-[36%] h-72 w-72 rounded-full bg-[rgba(196,175,255,0.16)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">
          {eyebrow}
        </p>

        <h2 className="mt-3 text-3xl font-light tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
          {intro}
        </p>

        <p className="mt-6 text-sm uppercase tracking-[0.22em] text-[var(--foreground)]/48">
          Fahre mit der Maus über die Lichtkreise
        </p>
      </div>

      <div className="relative z-10 mt-10 overflow-hidden rounded-[2.5rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.4),rgba(255,255,255,0.16))] shadow-[inset_0_1px_0_rgba(255,255,255,0.58)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.46),transparent_22%),radial-gradient(circle_at_72%_22%,rgba(255,210,155,0.24),transparent_20%),radial-gradient(circle_at_58%_78%,rgba(120,190,255,0.18),transparent_18%)]" />

        <div className="relative h-[36rem] sm:h-[42rem] lg:h-[48rem]">
          <Globe
            ref={globeRef}
            width={1280}
            height={980}
            backgroundColor="rgba(0,0,0,0)"
            globeMaterial={globeMaterial}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            atmosphereColor="#ffd7ac"
            atmosphereAltitude={0.28}
            polygonsData={countries}
            polygonCapColor={(featureItem: object) =>
              landColorForFeature(featureItem as PolygonFeature)
            }
            polygonSideColor={() => 'rgba(255,255,255,0.08)'}
            polygonStrokeColor={() => 'rgba(255,255,255,0.2)'}
            polygonAltitude={() => 0.007}
            pointsData={COUNTRY_NODES}
            pointLat="lat"
            pointLng="lng"
            pointColor={() => 'rgba(255,255,255,0.01)'}
            pointLabel={() => ''}
            polygonLabel={() => ''}
            pointAltitude={0.017}
            pointRadius={(item: object) => {
              const node = item as CountryNode
              const base = pointHitRadius(node.size)
              const isHovered = hoveredCountry?.name === node.name
              const isActive = activeCountry?.name === node.name

              if (isHovered) return base * 1.62
              if (isActive) return base * 1.36
              return base
            }}
            pointsMerge={false}
            onPointHover={(point: object | null) => {
              setHoveredCountry(point ? (point as CountryNode) : null)
            }}
            onPointClick={(point: object) => {
              const item = point as CountryNode
              setActiveCountry((current) =>
                current?.name === item.name ? null : item
              )
            }}
            arcsData={allArcs}
            arcColor={(item: object) => (item as ArcItem).color}
            arcStroke={(item: object) => (item as ArcItem).stroke}
            arcAltitude={(item: object) => (item as ArcItem).altitude}
            arcDashLength={() => 0.022}
            arcDashGap={() => 2.8}
            arcDashInitialGap={() => Math.random() * 2}
            arcDashAnimateTime={() => 16000}
            htmlElementsData={htmlNodes}
            htmlLat="lat"
            htmlLng="lng"
            htmlElement={(item: object) => {
              const node = item as HtmlNode

              if (node.kind === 'halo') {
                const halo = document.createElement('div')
                halo.className = 'country-focus-halo'
                return halo
              }

              const el = document.createElement('div')
              el.className = `country-glow-node ${node.glowClass}${node.isHovered ? ' is-hovered' : ''}${node.isActive ? ' is-active' : ''}`
              el.style.setProperty('--pulse-duration', node.pulseDuration)
              el.style.setProperty('--pulse-delay', node.pulseDelay)
              el.style.setProperty('--label-size', node.labelSize)

              if (node.isHovered || node.isActive) {
                const label = document.createElement('div')
                label.className = 'country-hover-label'
                label.textContent = node.name
                el.appendChild(label)
              }

              return el
            }}
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[rgba(242,248,255,0.9)] via-[rgba(242,248,255,0.34)] to-transparent" />
      </div>

      <div className="relative z-10 mt-8 flex flex-wrap items-center gap-4">
        <div className="rounded-full border border-white/65 bg-white/62 px-4 py-2 text-sm text-[var(--foreground)]/74 backdrop-blur-sm">
          60+ Länder im Resonanzraum der Arbeit
        </div>
        <div className="rounded-full border border-white/65 bg-white/62 px-4 py-2 text-sm text-[var(--foreground)]/74 backdrop-blur-sm">
          Fokus mit sanftem Kamera Tilt
        </div>
        <div className="rounded-full border border-white/65 bg-white/62 px-4 py-2 text-sm text-[var(--foreground)]/74 backdrop-blur-sm">
          Lichtpunkte pulsieren lebendig und asynchron
        </div>
      </div>
    </section>
  )
}