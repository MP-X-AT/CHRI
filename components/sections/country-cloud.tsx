// components/sections/country-cloud.tsx
'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

type CountryCloudProps = {
  title: string
  intro: string
  buttonLabel: string
  collapseLabel: string
  countries: string[]
}

export default function CountryCloud({
  title,
  intro,
  buttonLabel,
  collapseLabel,
  countries,
}: CountryCloudProps) {
  const [expanded, setExpanded] = useState(false)

  const visibleCountries = expanded ? countries : countries.slice(0, 10)

  const items = useMemo(
    () =>
      visibleCountries.map((country, index) => ({
        country,
        rotate: (index % 5) - 2,
        delay: index * 0.03,
      })),
    [visibleCountries]
  )

  return (
    <section className="rounded-[2.25rem] border border-black/5 bg-white/70 p-8 shadow-sm sm:p-10">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-light tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 leading-8 text-[var(--muted-foreground)]">
          {intro}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {items.map(({ country, rotate, delay }) => (
          <motion.span
            key={country}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay }}
            whileHover={{ y: -4, scale: 1.04 }}
            style={{ rotate: `${rotate}deg` }}
            className="inline-flex rounded-full border border-[rgba(220,108,36,0.16)] bg-[rgba(220,108,36,0.08)] px-4 py-2 text-sm text-[var(--foreground)] shadow-sm transition"
          >
            {country}
          </motion.span>
        ))}
      </div>

      {countries.length > 10 ? (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-8 inline-flex rounded-full border border-black/10 px-5 py-3 text-sm font-medium transition hover:bg-white"
        >
          {expanded ? collapseLabel : buttonLabel}
        </button>
      ) : null}
    </section>
  )
}