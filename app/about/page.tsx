import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Leland Coontz III, CA Licensed Public Adjuster',
  description: 'California Licensed Public Adjuster Leland Coontz III (Lic. #2B53445). Over 20 years of disaster claims experience across the United States and internationally. Member of the CA DOI committee that revised the adjuster examination.',
}

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-[#1F3964] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <div className="w-28 h-28 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center flex-shrink-0 text-5xl">
            ⚖️
          </div>
          <div>
            <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-wider mb-2">Your Public Adjuster</p>
            <h1 className="text-3xl font-bold mb-1">Leland Coontz III</h1>
            <p className="text-blue-200 text-sm mb-3">
              California Licensed Public Adjuster · Lic. #2B53445
            </p>
            <p className="text-blue-200 leading-relaxed max-w-xl">
              I built this site because I saw too many homeowners leave tens of thousands of dollars
              on the table simply because they didn&apos;t know their rights or how to document their loss.
              The tools and guides here are free — no catch.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-14">

        {/* Background & Credentials */}
        <section>
          <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Background & Experience</h2>
          <div className="prose prose-blue max-w-none text-gray-700 space-y-4">
            <p>
              I have over <strong>20 years of experience</strong> handling disaster-related insurance claims
              across the United States and in two foreign countries. From wildfires in California to hurricanes
              on the Gulf Coast, I&apos;ve worked on every major type of property loss — residential and commercial.
            </p>
            <p>
              Over the course of my career, I&apos;ve handled <strong>many millions of dollars</strong> in
              insurance claims. I spent years working as an insurance adjuster before transitioning to the
              policyholder side as a licensed Public Adjuster — giving me a deep understanding of how
              insurance companies evaluate, document, and settle claims from the inside.
            </p>
            <p>
              I served as a <strong>member of the California Department of Insurance committee</strong> that
              revised the adjuster licensing examination — helping set the professional standards that
              all licensed adjusters in California must meet. I maintain <strong>extensive continuing
              education</strong> in claims handling, construction estimating, policy interpretation,
              and California insurance law.
            </p>
          </div>

          {/* Credentials grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {[
              { icon: '📜', label: 'CA Public Adjuster License #2B53445' },
              { icon: '🗓', label: '20+ Years of Claims Experience' },
              { icon: '🌎', label: 'US-Wide + International Experience' },
              { icon: '🏛', label: 'CA DOI Exam Revision Committee Member' },
              { icon: '📚', label: 'Extensive Continuing Education' },
              { icon: '💰', label: 'Millions of Dollars in Claims Handled' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-3 bg-[#EFF4FB] rounded-lg px-4 py-3 text-sm font-medium text-[#1F3964]">
                <span className="text-xl">{item.icon}</span>
                {item.label}
              </div>
            ))}
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
              insurance company on your behalf. Studies consistently show that claimants represented by
              a PA recover significantly more than those who go it alone — often 2–3x more.
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
              { icon: '🔥', label: 'Fire & Wildfire' },
              { icon: '💨', label: 'Smoke & Contamination' },
              { icon: '💧', label: 'Water & Plumbing' },
              { icon: '🌪', label: 'Wind & Storm' },
              { icon: '🦠', label: 'Mold Losses' },
              { icon: '🏠', label: 'Structural Damage' },
              { icon: '🛋', label: 'Contents & Personal Property' },
              { icon: '🏨', label: 'Additional Living Expenses' },
              { icon: '🔨', label: 'Vandalism & Theft' },
              { icon: '🚗', label: 'Vehicle Impact' },
              { icon: '🚿', label: 'Sewage Damage' },
              { icon: '📐', label: 'Estimates & Xactimate' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-2 bg-[#EFF4FB] rounded-lg px-4 py-3 text-sm font-medium text-[#1F3964]">
                <span className="text-xl">{item.icon}</span>
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
