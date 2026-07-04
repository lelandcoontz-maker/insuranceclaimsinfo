import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { LegalDisclaimer } from '@/components/content/LegalDisclaimer'
import {
  ScrollText, Landmark, CalendarDays, Globe, Scale, RefreshCw, Ruler, BookOpen,
  Flame, Wind, Droplets, CloudLightning, Microscope, Home, Armchair, Hotel,
  Hammer, KeyRound, BarChart3, Car, Droplet, ClipboardList, Zap, DollarSign, Building2,
  Briefcase,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About — Leland Coontz III, CA Licensed Public Adjuster',
  description: 'California Licensed Public Adjuster Leland Coontz III (Lic. #2B53445). Over 20 years handling disaster claims — hurricanes, wildfires, commercial losses — across the US and internationally. CA DOI exam committee member. Appraiser and court-appointed umpire.',
  openGraph: {
    title: 'About Leland Coontz III — CA Licensed Public Adjuster',
    description: 'Over 20 years handling disaster claims on both sides of the industry. CA DOI exam committee member. Appraiser and court-appointed umpire.',
    url: 'https://insuranceclaimsinfo.com/about',
    type: 'profile',
    siteName: 'InsuranceClaimsInfo.com',
  },
  alternates: { canonical: 'https://insuranceclaimsinfo.com/about' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Leland Coontz III — Public Adjuster',
  url: 'https://insuranceclaimsinfo.com',
  description: 'California Licensed Public Adjuster specializing in fire, wildfire, water, commercial, and catastrophe insurance claims.',
  founder: {
    '@type': 'Person',
    name: 'Leland Coontz III',
    jobTitle: 'Licensed Public Adjuster',
    url: 'https://insuranceclaimsinfo.com/about',
    knowsAbout: [
      'Property Insurance Claims',
      'Public Adjusting',
      'Wildfire Claims',
      'Insurance Appraisal',
      'California Insurance Law',
      'Xactimate Estimating',
      'Business Interruption Claims',
      'Bad Faith Claims',
    ],
  },
  areaServed: { '@type': 'State', name: 'California' },
  priceRange: 'Contingency — no fee unless we recover more',
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Public Adjuster License',
    name: 'California Public Adjuster License #2B53445',
    recognizedBy: {
      '@type': 'GovernmentOrganization',
      name: 'California Department of Insurance',
    },
  },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="bg-[#1F3964] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <Image
            src="/images/leland-coontz-headshot.jpg"
            alt="Leland Coontz III, California Licensed Public Adjuster"
            width={112}
            height={112}
            className="w-28 h-28 rounded-full border-2 border-white/30 object-cover flex-shrink-0"
          />
          <div>
            <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-wider mb-2">Your Public Adjuster</p>
            <h1 className="text-3xl font-bold mb-1">Leland Coontz III</h1>
            <p className="text-blue-200 text-sm mb-3">
              California Licensed Public Adjuster · Lic. #2B53445
            </p>
            <p className="text-blue-200 leading-relaxed max-w-xl">
              Over 20 years handling property insurance claims on both sides of the industry —
              first as a company adjuster on major catastrophes, now as a licensed Public Adjuster
              representing policyholders. I built this site because too many homeowners and business owners leave
              money on the table simply because they don&apos;t know their rights.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-14">

        {/* Background — Both Sides */}
        <section>
          <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Both Sides of the Industry</h2>
          <div className="prose prose-blue max-w-none text-gray-700 space-y-4">
            <p>
              I started my career working for a <strong>restoration contractor</strong> in
              South Orange County, California — handling slab leak claims, fire losses, and
              construction consulting while learning Xactimate, the estimating software that
              dominates the property insurance industry. From there I moved into catastrophe
              adjusting as an <strong>independent insurance adjuster</strong>, deployed to major
              disasters across the country and internationally — <strong>Hurricanes Katrina,
              Rita, Ike, Sandy, Harvey, and Irma</strong>, numerous California wildfires,
              <strong>Hurricane Odile</strong> in Mexico, and the <strong>Christchurch earthquake</strong> in
              New Zealand. I wrote estimates, inspected losses, and negotiated settlements on
              behalf of the carriers. That experience — from the contractor side and the carrier
              side — gave me a thorough understanding of how insurance companies evaluate,
              document, price, and close claims from the inside.
            </p>
            <p>
              I transitioned to the policyholder side because I saw firsthand how the system is
              designed to under-compensate people who don&apos;t know their rights. And frankly,
              it&apos;s a lot more fun to help underpaid or even victimized policyholders than to
              work for bureaucratic insurance companies. As a <strong>California
              Licensed Public Adjuster</strong>, I now use everything I learned on the carrier side to
              advocate for homeowners and business owners — reading the same policies, using the same
              estimating tools (Xactimate, Symbility), and speaking the same language the carrier&apos;s
              adjusters speak.
            </p>
            <p>
              Over the course of my career, I&apos;ve handled <strong>many millions of dollars</strong> in
              insurance claims across the United States and internationally, including Mexico and New Zealand. My work spans
              every major type of first-party property loss — residential and commercial, from single-room
              water losses to multi-million-dollar wildfire total losses.
            </p>
          </div>
        </section>

        {/* Credentials & Qualifications */}
        <section>
          <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Credentials & Qualifications</h2>
          <div className="prose prose-blue max-w-none text-gray-700 space-y-4 mb-6">
            <p>
              I served as a <strong>member of the California Department of Insurance committee</strong> that
              revised the adjuster licensing examination — helping set the professional standards that
              all licensed adjusters in California must meet.
            </p>
            <p>
              I maintain extensive continuing education in claims handling, construction estimating,
              policy interpretation, California insurance law, and the California Fair Claims Settlement
              Practices Regulations (Cal. Code Regs. tit. 10, §§ 2695.1–2695.17).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { Icon: ScrollText, label: 'CA Public Adjuster License #2B53445' },
              { Icon: Landmark, label: 'CA DOI Exam Revision Committee Member' },
              { Icon: CalendarDays, label: '20+ Years of Claims Experience' },
              { Icon: Globe, label: 'US-Wide + International Experience' },
              { Icon: Scale, label: 'Appraiser & Court-Appointed Umpire' },
              { Icon: RefreshCw, label: 'Former Insurance Company Adjuster' },
              { Icon: Ruler, label: 'Xactimate & Symbility Certified' },
              { Icon: BookOpen, label: 'Extensive Continuing Education' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-3 bg-[#EFF4FB] rounded-lg px-4 py-3 text-sm font-medium text-[#1F3964]">
                <item.Icon className="w-5 h-5 text-[#2E74B5] flex-shrink-0" aria-hidden="true" />
                {item.label}
              </div>
            ))}
          </div>
        </section>

        {/* Appraisal & Umpire */}
        <section id="appraisal">
          <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Appraisal & Umpire Services</h2>
          <div className="prose prose-blue max-w-none text-gray-700 space-y-4">
            <p>
              Most property insurance policies contain an <strong>appraisal clause</strong> — a binding
              dispute resolution process where each side selects an appraiser, and the two appraisers
              select an umpire. When the appraisers cannot agree, the umpire reviews both positions.
              Agreement between the umpire and either appraiser sets the binding award.
            </p>
            <p>
              I have served as both <strong>appraiser</strong> and <strong>court-appointed umpire</strong> on
              hundreds of insurance disputes. Attorneys, policyholders, and courts retain me when they need
              someone who understands policy language, construction estimating, and the practical realities
              of how claims are valued and paid.
            </p>
            <p>
              If your claim is stuck in a valuation dispute, or if you need an experienced appraiser or umpire,{' '}
              <Link href="/contact" className="text-[#2E74B5] underline">contact me</Link> to discuss your situation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {[
              { title: 'As Your Appraiser', desc: 'I represent the policyholder\'s position in appraisal — preparing the claim, documenting damages, and advocating for the full value of the loss.' },
              { title: 'As Umpire', desc: 'When appointed by the court or selected by the appraisers, I serve as the neutral decision-maker — reviewing both positions and issuing a binding award.' },
              { title: 'Appraisal Strategy', desc: 'For attorneys and policyholders considering appraisal, I can evaluate whether invoking the clause is strategically sound for your specific claim.' },
            ].map(item => (
              <div key={item.title} className="bg-gray-50 border rounded-lg p-5">
                <p className="font-semibold text-[#1F3964] text-sm mb-2">{item.title}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* For Attorneys */}
        <section id="attorneys" className="bg-slate-800 text-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-5">
            <Briefcase className="w-7 h-7 text-[#C9A84C] flex-shrink-0" aria-hidden="true" />
            <h2 className="text-2xl font-bold">For Attorneys</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-slate-300 leading-relaxed">
              I regularly work alongside <strong className="text-white">insurance coverage attorneys, bad faith litigators,
              and plaintiff&apos;s counsel</strong> on disputed claims. My role is to handle the technical
              side — damage documentation, estimating, policy analysis, and carrier negotiation — so
              attorneys can focus on the legal strategy.
            </p>
            <p className="text-slate-300 leading-relaxed">
              If you have a client with a property claim that needs professional documentation,
              a coverage dispute that requires technical analysis, or an appraisal that needs an
              experienced appraiser, I&apos;m available to assist. I can also serve as a consulting or
              testifying expert on claims handling standards and practices.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {[
              'Damage documentation & Xactimate estimates',
              'Policy review & coverage analysis',
              'Appraiser in formal appraisal proceedings',
              'Bad faith claims — standards of practice analysis',
              'Consulting or testifying expert',
              'Referral network — out-of-state PA placements',
            ].map(item => (
              <div key={item} className="flex items-start gap-2 text-slate-200">
                <span className="text-[#C9A84C] mt-0.5">&#10003;</span>
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/contact" className="btn-gold text-sm">
              Attorney Referral Inquiry →
            </Link>
          </div>
        </section>

        {/* What is a Public Adjuster */}
        <section>
          <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What Is a Public Adjuster?</h2>
          <div className="prose prose-blue max-w-none text-gray-700 space-y-4">
            <p>
              When you file an insurance claim, your insurer sends their own adjuster — someone whose
              job is to evaluate (and minimize) what they pay out. A <strong>Public Adjuster</strong> is
              a licensed professional who works exclusively for you, the policyholder.
            </p>
            <p>
              A PA reads your policy, documents your loss, prepares the claim, and negotiates with the
              insurance company on your behalf. A 2010 Florida government study (OPPAGA Report 10-01)
              found that PA-represented claims received higher gross payments than unrepresented claims —
              though the study did not control for claim complexity, PAs tend to take on larger and more
              disputed losses, and after deducting PA fees, the net policyholder recovery was roughly
              comparable for smaller claims. What the data consistently shows is that policyholders with
              professional representation are better positioned to receive the full value of their claim,
              particularly on larger and more complex losses.
            </p>
            <p>
              In California, Public Adjusters are licensed and regulated by the California Department
              of Insurance. We work on a contingency fee basis — a percentage of your settlement. If
              we don&apos;t improve your outcome, you owe nothing.
            </p>
            <p className="text-sm text-gray-500">
              You can verify any Public Adjuster&apos;s license on the{' '}
              <a
                href="https://interactive.web.insurance.ca.gov/apex_extprd/f?p=102:5::::5::"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2E74B5] underline"
              >
                California Department of Insurance license lookup
              </a>.
            </p>
          </div>
        </section>

        {/* What we handle */}
        <section>
          <h2 className="text-2xl font-bold text-[#1F3964] mb-5">What We Handle</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { Icon: Flame, label: 'Fire & Wildfire' },
              { Icon: Wind, label: 'Smoke & Contamination' },
              { Icon: Droplets, label: 'Water & Plumbing' },
              { Icon: CloudLightning, label: 'Wind & Storm' },
              { Icon: Microscope, label: 'Mold Losses' },
              { Icon: Home, label: 'Structural Damage' },
              { Icon: Armchair, label: 'Contents & Personal Property' },
              { Icon: Hotel, label: 'Additional Living Expenses' },
              { Icon: Hammer, label: 'Vandalism' },
              { Icon: KeyRound, label: 'Theft' },
              { Icon: BarChart3, label: 'Business Interruption' },
              { Icon: Car, label: 'Vehicle Impact' },
              { Icon: Droplet, label: 'Sewage & Backup' },
              { Icon: ClipboardList, label: 'Code Upgrades / Ordinance & Law' },
              { Icon: Zap, label: 'Explosion & Collapse' },
              { Icon: Scale, label: 'Insurance Appraisal' },
              { Icon: DollarSign, label: 'Business Income Loss' },
              { Icon: Home, label: 'Residential Property' },
              { Icon: Building2, label: 'Commercial Property' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-2 bg-[#EFF4FB] rounded-lg px-4 py-3 text-sm font-medium text-[#1F3964]">
                <item.Icon className="w-5 h-5 text-[#2E74B5] flex-shrink-0" aria-hidden="true" />
                {item.label}
              </div>
            ))}
          </div>
        </section>

        {/* California + Referrals */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#1F3964] text-white rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3">California Claims</h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              I&apos;m licensed and active in California. I handle residential and commercial claims
              across the state, with particular expertise in wildfire-related losses (Palisades,
              Eaton, and other recent fires).
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-bold text-lg text-amber-900 mb-3">Other States — Referral Network</h3>
            <p className="text-amber-800 text-sm leading-relaxed">
              If your claim is in another state, I can refer you to a vetted Public Adjuster in
              that jurisdiction at no cost to you.
            </p>
          </div>
        </section>

        {/* Process */}
        <section>
          <h2 className="text-2xl font-bold text-[#1F3964] mb-5">How the Process Works</h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Free Consultation', desc: 'We review your claim situation — policy, loss, what the insurer has offered so far. No charge.' },
              { step: '2', title: 'Engagement Agreement', desc: 'If it makes sense to work together, we sign a PA agreement. Fee is a percentage of the total settlement — nothing upfront.' },
              { step: '3', title: 'Full Loss Documentation', desc: 'We photograph, measure, inventory, and estimate every aspect of your loss — structures, contents, ALE, and code upgrades.' },
              { step: '4', title: 'Negotiation & Settlement', desc: 'We submit the claim, respond to adjuster correspondence, and negotiate until you receive what your policy owes.' },
            ].map(item => (
              <div key={item.step} className="flex gap-4">
                <div className="w-9 h-9 rounded-full bg-[#1F3964] text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div className="pt-1">
                  <p className="font-bold text-[#1F3964] text-sm">{item.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About This Site */}
        <section>
          <h2 className="text-2xl font-bold text-[#1F3964] mb-4">About This Site</h2>
          <div className="prose prose-blue max-w-none text-gray-700 space-y-4">
            <p>
              InsuranceClaimsInfo.com is a free educational resource with over <strong>500 articles</strong> on
              property insurance claims — from basic concepts like how deductibles work to advanced topics
              like efficient proximate cause, anti-concurrent causation clauses, and the appraisal process.
            </p>
            <p>
              Every article is written from the policyholder&apos;s perspective, with California law
              cited where applicable. The site also includes interactive tools — a{' '}
              <Link href="/inventory" className="text-[#2E74B5] underline">contents inventory tool</Link>,
              a{' '}
              <Link href="/quiz" className="text-[#2E74B5] underline">claims knowledge quiz</Link>, and{' '}
              <Link href="/start-here" className="text-[#2E74B5] underline">guided reading paths</Link> for
              different claim situations.
            </p>
            <p>
              Nothing on this site is legal advice. But understanding how claims work, what your policy
              says, and what the regulations require puts you in a far stronger position — whether you
              handle the claim yourself, hire a Public Adjuster, or retain an attorney.
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="text-center">
          <p className="text-xs text-gray-500 italic">
            This website provides insurance claims education and information, not legal advice.
          </p>
        </div>

        {/* CTA */}
        <section className="bg-[#EFF4FB] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1F3964] mb-3">Ready to Talk About Your Claim?</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Free consultation — no obligation. If I can&apos;t help, I&apos;ll point you to someone who can.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Free Claim Review →
          </Link>
        </section>
      </div>
    </>
  )
}
