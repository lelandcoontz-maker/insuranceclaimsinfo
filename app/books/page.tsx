import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Recommended Books & Films for Insurance Claims — InsuranceClaimsInfo',
  description:
    'Curated book and film recommendations for policyholders, Public Adjusters, attorneys, and anyone navigating an insurance claim. Property damage, bad faith, California insurance law, appraisal, estimating, and claims negotiation.',
  alternates: { canonical: '/books' },
}

/**
 * Amazon affiliate tag — set this to your Amazon Associates ID.
 * Sign up at https://affiliate-program.amazon.com/
 */
const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_TAG || 'insurclaimsinfo-20'

interface Book {
  title: string
  author: string
  description: string
  asin: string
  category: string
  tag?: string
  tagColor?: string
}

interface Film {
  title: string
  year: number
  director: string
  description: string
  asin: string
}

const BOOKS: Book[] = [
  // ── The Insurance Industry Exposed ──
  {
    title: 'Delay, Deny, Defend: Why Insurance Companies Don\'t Pay Claims and What You Can Do About It',
    author: 'Jay M. Feinman',
    description:
      'The foundational consumer exposé of systematic insurer bad faith. Cites State Farm and Allstate\'s McKinsey-driven tactics by name, with chapters on property, auto, health, and disability claims. Essential context for understanding why insurers behave the way they do.',
    asin: '1591843154',
    category: 'The Insurance Industry Exposed',
    tag: 'Start Here',
    tagColor: 'bg-red-100 text-red-700',
  },
  {
    title: 'From Good Hands to Boxing Gloves: The Dark Side of Insurance',
    author: 'David J. Berardinelli',
    description:
      'The consumer edition of Berardinelli\'s exposé of Allstate\'s McKinsey-driven Claims Core Process Redesign (CCPR). Covers the internal documents Berardinelli was the first to obtain unprotected. Read alongside Delay, Deny, Defend for the complete picture.',
    asin: '1934833010',
    category: 'The Insurance Industry Exposed',
  },
  {
    title: 'From Good Hands to Boxing Gloves: How Allstate Changed Casualty Insurance in America',
    author: 'David J. Berardinelli & Michael D. Freeman',
    description:
      'The full legal practitioner edition — 746 pages. Adds Dr. Freeman\'s chapters demolishing Allstate\'s Minor Impact Soft Tissue (MIST) defense. The authoritative source cited on Allstate\'s Wikipedia page for underpayment tactics. For attorneys and serious practitioners.',
    asin: '0974324841',
    category: 'The Insurance Industry Exposed',
    tag: 'Legal Edition',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Pay Up! Preventing a Disaster with Your Own Insurance Company',
    author: 'Chip Merlin',
    description:
      'Written by the founder of Merlin Law Group and president of the Insurance Bad Faith Litigation Group (AAJ). Covers bad faith tactics across all lines, with nine practical steps for policyholders. An excellent client education tool.',
    asin: '0983172102',
    category: 'The Insurance Industry Exposed',
  },
  {
    title: 'Payment Refused',
    author: 'William M. Shernoff & Thelma O\'Brien',
    description:
      'The father of bad faith insurance law tells his own story. Shernoff pioneered the tort of bad faith, won the landmark Egan v. Mutual of Omaha verdict, and co-founded the National Insurance Consumer Organization with Ralph Nader. This book exposes how insurers systematically deny legitimate claims and warns about the tort reform movement\'s threat to policyholder rights. Also available free from shernoff.com.',
    asin: '0931933145',
    category: 'The Insurance Industry Exposed',
    tag: 'Classic',
    tagColor: 'bg-amber-100 text-amber-700',
  },
  {
    title: 'Blocking the Courthouse Door: How the Republican Party and Its Corporate Allies Are Taking Away Your Right to Sue',
    author: 'Stephanie Mencimer',
    description:
      'Exposes the corporate-funded tort reform movement — the dubious research, fudged numbers, and propaganda campaigns (including the McDonald\'s coffee case) used to restrict Americans\' access to civil courts. Shows how insurers and manufacturers spent hundreds of millions to cap damages and limit accountability.',
    asin: '0743277007',
    category: 'The Insurance Industry Exposed',
  },

  // ── Claims Adjusting & Practice ──
  {
    title: 'Claim Your Success: The Ultimate Guide to Starting and Running a Public Insurance Adjusting Business',
    author: 'Chip Merlin & Lynette Young',
    description:
      'Co-authored by Merlin and Lynette Young, co-founder of Claim Wizard. Addresses the business and regulatory side of public adjusting practice — operations, CRM, and scaling. Useful for newer PAs building their practice.',
    asin: 'B0DRQZBXQJ',
    category: 'Claims Adjusting & Practice',
    tag: 'For PAs',
    tagColor: 'bg-purple-100 text-purple-700',
  },
  {
    title: 'The Compact Book of Adjusting Property Claims (4th Edition)',
    author: 'Barry Zalma, Esq.',
    description:
      'A practitioner primer by a 50-year veteran of insurance law and claims. Covers proof-of-loss requirements, policy conditions, and first-party claim mechanics with California case citations. One of several titles in Zalma\'s prolific library.',
    asin: 'B0CQVKRGTB',
    category: 'Claims Adjusting & Practice',
  },
  {
    title: 'The Art of Property Claims Adjusting: Techniques on How to Be a Great Adjuster',
    author: 'Danny L. Lee',
    description:
      'A street-level field guide praised for its practical, no-filler approach. Useful for training staff or newer adjusters on investigation, file-building, and customer management.',
    asin: '1483479757',
    category: 'Claims Adjusting & Practice',
  },
  {
    title: 'Be Intentional: Estimating',
    author: 'Paul Turk',
    description:
      'Focused specifically on property insurance estimating culture and habits, not just software mechanics. A useful complement to Xactimate training for understanding how to build and defend a scope of loss.',
    asin: '1735622702',
    category: 'Claims Adjusting & Practice',
  },
  {
    title: 'The Claims Game: An Insider\'s Guide Through the Insurance Claims Process',
    author: 'Ina DeLong',
    description:
      'A former insurance adjuster explains how claims work from the inside. Practical advice on documenting losses, understanding the adjuster\'s perspective, and maximizing your settlement.',
    asin: '0988457407',
    category: 'Claims Adjusting & Practice',
  },
  {
    title: 'Insurance Claim Secrets Revealed!',
    author: 'Russell D. Longcore',
    description:
      'A straightforward guide to the property and casualty claims process. Covers how adjusters think, how to document your claim, and negotiation strategies. Good for homeowners handling their first claim.',
    asin: '1440486980',
    category: 'Claims Adjusting & Practice',
  },

  // ── Insurance Appraisal ──
  {
    title: 'The Law and Procedure of Insurance Appraisal (3rd Edition)',
    author: 'Jonathan J. Wilkofsky',
    description:
      'The single most important book for anyone involved in insurance appraisal — there is no substitute. Nearly 1,400 pages with over 1,200 citations covering every jurisdiction in the United States. Provides state-by-state comparison of appraisal law, scope limitations (coverage vs. amount), umpire selection and qualifications, waiver and estoppel, form awards, and the intersection of appraisal with litigation. Wilkofsky is General Counsel to the New York Public Adjusters Association and has litigated appraisal disputes for decades. Updated annually with new case law. If you participate in appraisal panels — as appraiser, umpire, or counsel — this is your primary authority. Every argument you make and every objection you raise should be supportable by citation to this treatise.',
    asin: '0972927840',
    category: 'Insurance Appraisal',
    tag: 'Essential — No Substitute',
    tagColor: 'bg-amber-100 text-amber-700',
  },
  {
    title: 'The Appraisal Process: Resolution of Disputed Insurance Claims',
    author: 'John A. Voelpel III',
    description:
      'Written by a practitioner who has taught the Windstorm Insurance Network\'s appraisal courses for over 20 years. More practice-oriented than Wilkofsky, with detailed notes on deliberation confidentiality and panel dynamics. Highly recommended by Chip Merlin.',
    asin: 'B0CV6KGSPC',
    category: 'Insurance Appraisal',
  },

  // ── California Insurance Law ──
  {
    title: 'Property Insurance Litigator\'s Handbook',
    author: 'Scott M. Seaman & Jason R. Schulze',
    description:
      'A comprehensive legal reference covering first-party property insurance disputes, coverage analysis, bad faith, and appraisal. For attorneys and advanced practitioners.',
    asin: '1641058951',
    category: 'California Insurance Law & Legal References',
    tag: 'Legal',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'California Insurance Law Handbook',
    author: 'Harvey Levine',
    description:
      'The standard reference for California insurance law. Covers policy interpretation, claims handling regulations, bad faith, and the Fair Claims Settlement Practices Act.',
    asin: 'B0BXPFML29',
    category: 'California Insurance Law & Legal References',
    tag: 'California',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Litigation and Prevention of Insurer Bad Faith',
    author: 'Dennis J. Wall',
    description:
      'The leading practitioner treatise on insurance bad faith litigation. Two volumes, continuously updated since 1985. Covers constructing claims, expert defenses, and all features of bad faith law from both plaintiff and defense perspectives. A working reference for any attorney handling first-party bad faith.',
    asin: '0071725377',
    category: 'California Insurance Law & Legal References',
    tag: 'Treatise',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Catastrophe Claims: Insurance Coverage for Natural and Man-Made Disasters',
    author: 'John K. DiMugno, Steven Plitt & Dennis J. Wall',
    description:
      'The leading reference on insurance coverage for catastrophe events — wildfire, flood, earthquake, hurricane. Updated semi-annually to reflect major decisions. Directly relevant to California wildfire claims, demand surge, code upgrade disputes, and ALE exhaustion issues.',
    asin: '0314848851',
    category: 'California Insurance Law & Legal References',
    tag: 'Updated Semi-Annually',
    tagColor: 'bg-green-100 text-green-700',
  },

  // ── Trial Advocacy for Insurance Cases ──
  {
    title: 'Reptile: The 2009 Manual of the Plaintiff\'s Revolution',
    author: 'David Ball & Don Keenan',
    description:
      'The trial methodology used by plaintiff attorneys in bad faith insurance cases across the country. Teaches how to frame insurer misconduct as a community safety issue that triggers juror survival instincts. Widely cited in insurance bad faith CLE programs.',
    asin: '0977442551',
    category: 'Trial Advocacy for Insurance Cases',
    tag: 'For Attorneys',
    tagColor: 'bg-purple-100 text-purple-700',
  },
  {
    title: 'David Ball on Damages 3',
    author: 'David Ball',
    description:
      'America\'s top-selling guide on proving damages at trial. Integrates Reptile methodology with new voir dire techniques. Essential for attorneys proving extracontractual damages, emotional distress, and punitive damages in bad faith cases.',
    asin: '1934833894',
    category: 'Trial Advocacy for Insurance Cases',
    tag: 'For Attorneys',
    tagColor: 'bg-purple-100 text-purple-700',
  },
  {
    title: 'Rules of the Road: A Plaintiff Lawyer\'s Guide to Proving Liability',
    author: 'Rick Friedman & Patrick Malone',
    description:
      'Trial Guides\' number-one bestseller. Provides the standards-of-care framework that plaintiff attorneys use to establish duty violations in bad faith cases. Originally developed from the very training manuals used to certify insurance adjusters — now turned back against insurers who violate those standards.',
    asin: '1941007104',
    category: 'Trial Advocacy for Insurance Cases',
    tag: 'For Attorneys',
    tagColor: 'bg-purple-100 text-purple-700',
  },

  // ── Construction Estimating ──
  {
    title: '2026 National Construction Estimator',
    author: 'Richard Pray (Craftsman Book Company)',
    description:
      'The benchmark national estimating reference used by contractors and adjusters to challenge or supplement Xactimate pricing. Updated yearly with regional labor and material costs. Essential for anyone disputing an insurer\'s estimate.',
    asin: '1572184086',
    category: 'Construction Estimating & Xactimate',
    tag: 'Updated Annually',
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    title: 'Building Construction Costs with RSMeans Data 2026',
    author: 'Gordian Group',
    description:
      'The industry-standard institutional cost database. Frequently cited in appraisal proceedings and litigation to establish market rates independent of Xactimate. Organized by CSI MasterFormat division.',
    asin: '1967675015',
    category: 'Construction Estimating & Xactimate',
    tag: 'Updated Annually',
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    title: 'Walker\'s Building Estimator\'s Reference Book (30th Edition)',
    author: 'Frank R. Walker Company',
    description:
      'A classic comprehensive estimating reference covering all construction trades. Useful for scoping complex custom or historic structures that Xactimate handles poorly.',
    asin: '091159230X',
    category: 'Construction Estimating & Xactimate',
  },
  {
    title: 'Xactimate 28 Beginner to Advanced Training Workbook',
    author: 'Ernie Daingerfield',
    description:
      'If you want to understand how Xactimate estimates are built — and how to challenge them — this workbook walks through the software from beginner to advanced. Essential for anyone disputing an estimate.',
    asin: 'B0DFL66WF6',
    category: 'Construction Estimating & Xactimate',
  },
  {
    title: 'Storm Profit$: How to Make Money on Insurance Claims',
    author: 'Chris Smith',
    description:
      'Written for contractors and adjusters working property claims. Covers estimating, supplements, and getting paid fairly for restoration work.',
    asin: '1733139702',
    category: 'Construction Estimating & Xactimate',
  },

  // ── Standards & Technical References ──
  {
    title: 'ANSI/IICRC S500 Standard for Professional Water Damage Restoration (2021)',
    author: 'IICRC',
    description:
      'The industry standard governing how water damage restoration is performed, categorized, and priced. Carriers and public adjusters reference S500 categories and classes in every water claim. Understanding this standard is critical for challenging insurer scope reductions and category downgrades.',
    asin: 'B09CFW7DS6',
    category: 'Standards & Technical References',
    tag: 'Industry Standard',
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    title: 'ANSI/IICRC S520 Standard for Professional Mold Remediation (3rd Edition)',
    author: 'IICRC',
    description:
      'The governing standard for professional mold remediation procedures and scope. Essential when carriers dispute remediation protocols or deny mold claims. Deviations from S520 by a carrier\'s preferred vendor can constitute bad faith when the insurer directs inadequate remediation.',
    asin: 'B01L7OPMLO',
    category: 'Standards & Technical References',
    tag: 'Industry Standard',
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    title: 'After the Smoke Clears: A Fire and Smoke Damage Restoration Manual',
    author: 'Jeff Bishop & Steve S. Bishop',
    description:
      'The professional reference for fire restoration of residential and light commercial structures. Covers cleaning agents, deodorizing, equipment, and safety compliance. Written by an IICRC Certified Master Cleaner who developed IICRC restoration examinations. Essential for PAs handling fire claims.',
    asin: '0944352340',
    category: 'Standards & Technical References',
  },
  {
    title: 'Kirk\'s Fire Investigation (8th Edition)',
    author: 'David Icove & Gerald Haynes',
    description:
      'The preeminent textbook on fire origin and cause determination. Critical for PAs working fire claims where cause is disputed or when challenging an insurer\'s arson allegation. Understanding fire behavior science strengthens claim advocacy and exposes flawed investigations.',
    asin: '0134237927',
    category: 'Standards & Technical References',
    tag: 'Fire Claims',
    tagColor: 'bg-orange-100 text-orange-700',
  },

  // ── Specialized Topics ──
  {
    title: 'Mold: The War Within',
    author: 'Kurt & Lee Ann Billings',
    description:
      'A deep dive into mold contamination — health effects, remediation, and the insurance claim implications. Useful background for anyone dealing with a mold loss.',
    asin: '0977913406',
    category: 'Specialized Topics',
  },
  {
    title: 'The Art of War',
    author: 'Sun Tzu (trans. Samuel B. Griffith)',
    description:
      'The Griffith translation is the recommended edition for practitioners. Griffith was a U.S. Marine general who studied the text with military rigor. The strategic principles apply directly to adversarial negotiations — including appraisal panels, bad faith demands, and carrier dispute tactics. This is not decorative — it is a working manual.',
    asin: '0195015401',
    category: 'Specialized Topics',
    tag: 'Strategy',
    tagColor: 'bg-gray-100 text-gray-700',
  },
]

const FILMS: Film[] = [
  {
    title: 'Hot Coffee',
    year: 2011,
    director: 'Susan Saladoff',
    description:
      'The definitive documentary on how tort reform campaigns — funded by insurers and corporations — used the McDonald\'s coffee case to erode Americans\' right to sue. Premiered at Sundance, aired on HBO. Shows how the Liebeck verdict was deliberately distorted to build public support for damage caps and mandatory arbitration. Essential viewing for understanding why policyholders face an uphill battle in bad faith litigation.',
    asin: 'B00595W3MO',
  },
  {
    title: 'Business of Disaster',
    year: 2016,
    director: 'Marcela Gaviria (PBS FRONTLINE)',
    description:
      'FRONTLINE investigates how private insurance companies working for the government made hundreds of millions while thousands of Superstorm Sandy homeowners were systematically underpaid. Exposes how Write-Your-Own carriers under the National Flood Insurance Program manipulated engineering reports and denied legitimate claims. A case study in institutional bad faith at scale.',
    asin: 'B01F73L6A2',
  },
  {
    title: 'Low and Behold',
    year: 2007,
    director: 'Zack Godshall',
    description:
      'A young, inexperienced adjuster arrives in post-Katrina New Orleans to work catastrophe claims under his seasoned uncle. Combines scripted drama with documentary footage of actual Katrina victims. The lead actor reportedly worked as an adjuster in Florida before filming. IMDb 8.2/10.',
    asin: 'B004PKR4FK',
  },
  {
    title: 'Double Indemnity',
    year: 1944,
    director: 'Billy Wilder',
    description:
      'The definitive insurance film. Fred MacMurray plays an insurance salesman drawn into a murder plot. Edward G. Robinson is brilliant as the obsessive claims investigator who refuses to accept the staged accident scenario. An accurate portrait of insurance claims culture and the use of actuarial reasoning in claims investigation. Seven Oscar nominations.',
    asin: 'B00I3C1T34',
  },
  {
    title: 'The Rainmaker',
    year: 1997,
    director: 'Francis Ford Coppola',
    description:
      'Adapted from John Grisham\'s novel. A young attorney (Matt Damon) takes on a major insurer in a bad faith case involving denial of a bone marrow transplant claim. While the claim type is health insurance, the litigation strategy — building a bad faith record, documenting systematic denial practices — maps directly to property bad faith methodology.',
    asin: 'B073XF75NT',
  },
  {
    title: 'The Adjuster',
    year: 1991,
    director: 'Atom Egoyan',
    description:
      'A property claims adjuster becomes deeply enmeshed in his clients\' lives after house fires. Egoyan based the concept on his own family\'s experience losing their home to fire. An art-house film — but the power dynamic between adjuster and displaced policyholder is rendered with unusual accuracy.',
    asin: 'B00BDTDQHQ',
  },
  {
    title: 'The Incredibles',
    year: 2004,
    director: 'Brad Bird',
    description:
      'Bob Parr (Mr. Incredible) works at Insuricare, a fictional insurance company, where he covertly helps policyholders exploit policy loopholes. The opening act is arguably the most accurate cinematic depiction of what it feels like to be trapped on the wrong side of an adjusting desk — the institutional pressure to deny or minimize claims. Won Oscars for Best Animated Feature and Best Sound Editing.',
    asin: 'B00PBLGLHA',
  },
  {
    title: 'Sunshine Cleaning',
    year: 2008,
    director: 'Christine Jeffs',
    description:
      'Amy Adams and Emily Blunt start a biohazard and crime scene cleanup business. Relevant because biohazard cleanup is a frequently disputed line item in property claims — particularly fire and trauma losses — and this film gives texture to what that remediation actually involves.',
    asin: 'B001UV4XIS',
  },
  {
    title: 'Cleaner',
    year: 2007,
    director: 'Renny Harlin',
    description:
      'Samuel L. Jackson plays a retired cop who runs a professional crime scene cleaning service and unknowingly becomes party to a cover-up. Ed Harris and Eva Mendes co-star. Covers the professional and forensic dimensions of the cleanup business more explicitly than Sunshine Cleaning. Available on streaming platforms.',
    asin: 'B001BKNFMO',
  },
]

const CATEGORIES = [...new Set(BOOKS.map(b => b.category))]

function amazonUrl(asin: string) {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`
}

export default function BooksPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-3">Recommended Books & Films</h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            Curated reading and viewing for policyholders, Public Adjusters, attorneys, and anyone
            navigating an insurance claim. These are books we reference in our own practice.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        {/* Disclosure */}
        <p className="text-xs text-gray-400 italic">
          Disclosure: As an Amazon Associate, we earn from qualifying purchases. This does not
          affect our recommendations — we only list books we have read and would recommend to
          our own clients. Prices are set by Amazon and may change.
        </p>

        {/* Quick-jump nav */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(category => (
            <a
              key={category}
              href={`#${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="text-xs bg-gray-100 hover:bg-[#EFF4FB] text-gray-600 hover:text-[#1F3964] px-3 py-1.5 rounded-full transition-colors"
            >
              {category}
            </a>
          ))}
          <a
            href="#films"
            className="text-xs bg-gray-100 hover:bg-[#EFF4FB] text-gray-600 hover:text-[#1F3964] px-3 py-1.5 rounded-full transition-colors"
          >
            Films
          </a>
        </div>

        {/* Book categories */}
        {CATEGORIES.map(category => (
          <section key={category} id={category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
            <h2 className="text-xl font-bold text-[#1F3964] mb-5">{category}</h2>
            <div className="space-y-5">
              {BOOKS.filter(b => b.category === category).map(book => (
                <a
                  key={book.asin}
                  href={amazonUrl(book.asin)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-[#C9A84C] transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">&#128214;</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-bold text-gray-900 leading-tight">{book.title}</h3>
                        {book.tag && (
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${book.tagColor}`}>
                            {book.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mb-2">by {book.author}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{book.description}</p>
                    </div>
                    <span className="text-gold-text text-sm font-medium flex-shrink-0 hidden sm:block">
                      View on Amazon &rarr;
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}

        {/* Legal Treatises note */}
        <section>
          <h2 className="text-xl font-bold text-[#1F3964] mb-4">Legal Treatises & Annotated Codes</h2>
          <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-5">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              The following multi-volume treatises are the gold standard for California insurance
              litigation, but they are subscription-based services available through Westlaw and
              LexisNexis rather than single-purchase books:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>
                <strong>California Practice Guide: Insurance Litigation</strong> (Croskey, Heeseman,
                Ehrlich &amp; Klee) — The Rutter Group / Thomson Reuters. The gold-standard California
                practitioner treatise. Chapter 13 on extracontractual (bad faith) damages is cited in
                CACI jury instructions.
              </li>
              <li>
                <strong>California Liability Insurance Practice: Claims &amp; Litigation</strong> — CEB
                (Continuing Education of the Bar). Chapter 24 covers principles of contract and bad
                faith actions.
              </li>
              <li>
                <strong>Matthew Bender Practice Guide: California Insurance Coverage and Litigation</strong>{' '}
                (Neil Selman, ed.) — LexisNexis. An alternative/supplement to Croskey for coverage analysis.
              </li>
              <li>
                <strong>Appleman on Insurance Law and Practice Archives</strong> — LexisNexis (50+ volumes).
                The national insurance law encyclopedia. Valuable for appraisal precedents and efficient
                proximate cause doctrine.
              </li>
              <li>
                <strong>Couch on Insurance</strong> (3rd ed.) — Thomson/West (30+ volumes). The other
                major national encyclopedia. Covers first-party property claims, bad faith, appraisal,
                and subrogation in depth.
              </li>
              <li>
                <strong>Deering&apos;s California Codes Annotated — Insurance Code</strong> (LexisNexis) and{' '}
                <strong>West&apos;s Annotated California Codes — Insurance Code</strong> (Thomson Reuters).
                Annotated statutes covering &sect;790.03, &sect;2071, and all key property insurance statutes.
              </li>
            </ul>
            <p className="text-sm text-gray-500 mt-3 italic">
              The Fair Claims Settlement Practices Regulations (10 CCR &sect;&sect;2695 et seq.) are
              available free at{' '}
              <a href="https://www.insurance.ca.gov" target="_blank" rel="noopener noreferrer" className="text-[#2E74B5] underline">
                insurance.ca.gov
              </a>.
            </p>
          </div>
        </section>

        {/* Films Section */}
        <section id="films">
          <h2 className="text-xl font-bold text-[#1F3964] mb-2">Films</h2>
          <p className="text-sm text-gray-500 mb-5">
            Films involving insurance adjustment, claims, property damage, or related field work.
          </p>
          <div className="space-y-5">
            {FILMS.map(film => (
              <a
                key={film.asin}
                href={amazonUrl(film.asin)}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-[#C9A84C] transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">&#127916;</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 leading-tight">
                      {film.title}{' '}
                      <span className="font-normal text-gray-400">({film.year})</span>
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">Dir. {film.director}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{film.description}</p>
                  </div>
                  <span className="text-gold-text text-sm font-medium flex-shrink-0 hidden sm:block">
                    View on Amazon &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Compiler's note */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <h3 className="font-bold text-amber-900 mb-2">Where to Start</h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            If you are a <strong>policyholder</strong> dealing with a claim, start with{' '}
            <em>Delay, Deny, Defend</em> and <em>Pay Up!</em> — they will help you understand
            why the insurance company behaves the way it does. The Feinman and Berardinelli books
            are most useful for framing bad faith demand letters in language that resonates with
            litigation risk.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            If you are a <strong>Public Adjuster, appraiser, umpire, or claims attorney</strong>,
            the Wilkofsky treatise is non-negotiable. It is the only comprehensive authority on
            insurance appraisal law in the United States — there is no competing work of comparable
            scope or citation depth. Every appraisal panel participant should own a current edition.
            Arguments made without Wilkofsky citations are arguments made without authority. The
            Croskey/Rutter Group California Practice Guide is the companion volume for bad faith and
            coverage litigation.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            For <strong>construction and estimating</strong>, the National Construction Estimator and
            RSMeans are essential for challenging Xactimate pricing with independent market data.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="border-t pt-8">
          <h3 className="font-bold text-[#1F3964] mb-3">Want Hands-On Help Instead?</h3>
          <p className="text-gray-600 text-sm mb-4">
            Books are great for education, but every claim is different. If you need someone to
            handle your claim directly, a licensed Public Adjuster can evaluate your situation,
            prepare your estimate, and negotiate with the insurer on your behalf.
          </p>
          <Link href="/contact" className="btn-gold inline-block">
            Request a Free Claim Review &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
