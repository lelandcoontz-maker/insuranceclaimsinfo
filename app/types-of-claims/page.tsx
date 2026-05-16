import type { Metadata } from 'next'
import Link from 'next/link'
import { Flame, Wind, Droplets, Microscope, Hammer, Car, Droplet, Waves } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Common Types of Insurance Claims',
  description: 'Guides for fire, water, mold, vandalism, vehicle impact, sewage, flood, and smoke damage insurance claims in California.',
  alternates: { canonical: '/types-of-claims' },
}

const CLAIM_TYPES: { slug: string; Icon: LucideIcon; title: string; desc: string; color: string; tagColor: string }[] = [
  {
    slug: 'fire',
    Icon: Flame,
    title: 'Fire & Wildfire Losses',
    desc: 'Total and partial fire losses, wildfire-specific considerations, smoke damage from structure fires, and urban wildfire contamination.',
    color: 'bg-red-50 border-red-200',
    tagColor: 'bg-red-100 text-red-700',
  },
  {
    slug: 'smoke',
    Icon: Wind,
    title: 'Smoke Damage & Contamination',
    desc: 'Wildfire smoke vs urban wildfire smoke. Toxic contaminants like silica, arsenic, mercury, cadmium, lithium, and dioxins from burning PVC.',
    color: 'bg-gray-50 border-gray-200',
    tagColor: 'bg-gray-100 text-gray-700',
  },
  {
    slug: 'water',
    Icon: Droplets,
    title: 'Water Leak Claims',
    desc: 'Sudden vs gradual leaks, pipe bursts, appliance failures, roof leaks, and the long-term loss defense insurers use.',
    color: 'bg-blue-50 border-blue-200',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    slug: 'mold',
    Icon: Microscope,
    title: 'Mold Claims',
    desc: 'When mold is covered as ensuing loss, mold limits, and common insurer tactics to deny mold-related water damage.',
    color: 'bg-green-50 border-green-200',
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    slug: 'vandalism',
    Icon: Hammer,
    title: 'Vandalism Claims',
    desc: 'Marijuana grow damage, graffiti, break-in damage, and documenting vandalism losses for your insurer.',
    color: 'bg-purple-50 border-purple-200',
    tagColor: 'bg-purple-100 text-purple-700',
  },
  {
    slug: 'vehicle-impact',
    Icon: Car,
    title: 'Vehicle Impact Damage',
    desc: 'Structural damage from vehicle collisions. Why you need a structural engineer and how framing damage is often underestimated.',
    color: 'bg-amber-50 border-amber-200',
    tagColor: 'bg-amber-100 text-amber-700',
  },
  {
    slug: 'sewage',
    Icon: Droplet,
    title: 'Sewage Damage',
    desc: 'Sewage backups, Category 3 water, health hazards, and specialized remediation requirements.',
    color: 'bg-orange-50 border-orange-200',
    tagColor: 'bg-orange-100 text-orange-700',
  },
  {
    slug: 'flood',
    Icon: Waves,
    title: 'Flood Claims (NFIP/FEMA)',
    desc: 'True flood damage is excluded under typical homeowner policies. How the National Flood Insurance Program works.',
    color: 'bg-cyan-50 border-cyan-200',
    tagColor: 'bg-cyan-100 text-cyan-700',
  },
]

export default function TypesOfClaimsPage() {
  return (
    <>
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/resources" className="text-blue-300 hover:text-white text-sm mb-3 inline-block">
            ← Back to Resources
          </Link>
          <h1 className="text-3xl font-bold mb-3">Common Types of Insurance Claims</h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            Different types of losses have different considerations, strategies, and pitfalls.
            Select your type of claim below for a detailed guide.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CLAIM_TYPES.map(ct => (
            <Link
              key={ct.slug}
              href={`/types-of-claims/${ct.slug}`}
              aria-label={`Read ${ct.title} guide`}
              className={`block rounded-xl border p-6 hover:shadow-md transition-shadow ${ct.color}`}
            >
              <div className="flex items-start gap-4">
                <ct.Icon className="w-7 h-7 text-gray-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h2 className="font-bold text-gray-900 text-lg mb-2">{ct.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{ct.desc}</p>
                  <p className="text-[#2E74B5] text-sm font-medium mt-3" aria-hidden="true">Read guide →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#EFF4FB] py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1F3964] mb-3">Not Sure About Your Claim?</h2>
          <p className="text-gray-600 mb-6">
            Every loss is unique. Contact us for a free consultation and we&apos;ll help you
            understand your coverage and options.
          </p>
          <Link href="/contact" className="btn-gold">
            Request a Free Claim Review →
          </Link>
        </div>
      </div>
    </>
  )
}
