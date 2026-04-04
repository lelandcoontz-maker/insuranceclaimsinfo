import React from 'react'

/* ── Types ──────────────────────────────────────────────────────────────────── */

export interface FaqItem {
  id: string
  question: string
  answer: React.ReactNode
}

export interface FaqCategory {
  id: string
  title: string
  icon: string
  questions: FaqItem[]
}

/* ── FAQ Data ───────────────────────────────────────────────────────────────── */

export const FAQ_CATEGORIES: FaqCategory[] = [
  /* ────────────────────────── 1. Your Rights & Regulations ────────────────── */
  {
    id: 'rights-regulations',
    title: 'Your Rights & Regulations',
    icon: '\u2696\uFE0F',
    questions: [
      {
        id: 'refusing-policy-copy',
        question:
          'My insurance company is refusing to give me a copy of my policy. What should I do?',
        answer: (
          <>
            <p>
              Under California law, you have an absolute right to a complete copy of your
              insurance policy. California Insurance Code Section 381 requires that a policy
              be delivered to the insured, and the California Fair Claims Settlement Practices
              Regulations (10 CCR 2695.4) require the insurer to disclose all applicable policy
              provisions, including benefits, coverage, time limits, and other pertinent
              information. If your insurer is refusing to provide your policy, they are violating
              these regulations.
            </p>
            <p>
              Start by making your request in writing — email is fine, but follow up with a
              letter sent via certified mail so you have proof. Clearly state that you are
              requesting a complete, certified copy of your policy, including all endorsements,
              declarations pages, and amendments. Cite 10 CCR 2695.4 in your request. If they
              still refuse, you can file a complaint with the California Department of Insurance
              (CDI) at 1-800-927-4357 or online. The CDI takes these violations seriously.
            </p>
            <p>
              It is critical that you obtain your full policy as early in the claim as possible.
              The policy is the contract between you and the insurer, and it governs everything —
              your coverage limits, deadlines, duties, and rights. Without it, you cannot
              effectively evaluate whether the insurer is handling your claim fairly. If you are
              having difficulty getting your policy, a licensed Public Adjuster or an attorney
              experienced in insurance claims can assist you in demanding it and, if necessary,
              filing regulatory complaints.
            </p>
          </>
        ),
      },
      {
        id: 'refusing-adjuster-photos',
        question:
          'My insurance company is refusing to turn over photos that their adjuster took. What should I do?',
        answer: (
          <>
            <p>
              Under California's Fair Claims Settlement Practices Regulations (10 CCR
              2695.7(d)), the insurance company is required to provide you with all
              documentation that supports their coverage or valuation decisions, including
              photographs taken by their adjuster. These photos were taken of your property
              and your loss, and you have every right to see them. If the insurer is claiming
              the photos are "privileged" or "internal work product," that argument is generally
              not valid for photos of your own property taken during the claims investigation.
            </p>
            <p>
              Put your request in writing and specifically reference 10 CCR 2695.7(d). State
              that you are requesting copies of all photographs, videos, measurements, and
              inspection notes generated during the investigation of your claim. If the insurer
              continues to refuse, you should file a complaint with the California Department
              of Insurance. The CDI can investigate and compel the insurer to comply with the
              regulations.
            </p>
            <p>
              These photos matter because they document the condition of your property at or
              near the time of loss. If the insurer later disputes the extent of damage, their
              own photos may be some of the best evidence in your favor. A Public Adjuster or
              attorney can help you obtain this documentation and use it effectively in your
              claim negotiations.
            </p>
          </>
        ),
      },
      {
        id: 'cant-talk-with-pa',
        question:
          'The insurance company said they can\'t talk to me now that I have a Public Adjuster. Is that true?',
        answer: (
          <>
            <p>
              No, that is not true. While your Public Adjuster is your authorized representative
              and the insurer should direct claim-related communications through your PA, the
              insurance company cannot refuse to communicate with you, the policyholder. You are
              the named insured on the policy and you always retain the right to contact your
              insurer directly. Under California Insurance Code Section 790.03 and the Fair
              Claims Settlement Practices Regulations, the insurer has a duty to deal with you
              fairly and in good faith — and that includes not cutting off communication.
            </p>
            <p>
              What typically happens is that the insurer prefers to route communications through
              your Public Adjuster for efficiency, which is perfectly fine and is usually in your
              best interest. But if the insurer is telling you that you are prohibited from
              speaking with them, that is a misrepresentation. You hired the Public Adjuster to
              help you, not to replace you. Your PA represents your interests and works alongside
              you — you are always part of the process.
            </p>
            <p>
              If the insurance company is refusing to speak with you or is trying to undermine
              your relationship with your Public Adjuster, document those interactions in writing
              and discuss the situation with your PA. This kind of behavior can constitute a
              violation of the Unfair Claims Settlement Practices Act (California Insurance Code
              Section 790.03) and may be reported to the CDI.
            </p>
          </>
        ),
      },
      {
        id: 'three-bids',
        question:
          'The insurance company said that I have to get three bids. Is that true?',
        answer: (
          <>
            <p>
              No, there is no provision in California law or in a standard homeowners policy
              that requires you to obtain three bids. This is one of the most common
              misconceptions in the claims process, and unfortunately, many insurance adjusters
              perpetuate it. Your policy is an indemnity contract — the insurer owes you the
              cost to repair or replace the damaged property to its pre-loss condition. The
              amount owed is based on the actual cost of repair, not on whatever the cheapest
              of three bids says.
            </p>
            <p>
              Under 10 CCR 2695.9, if the insurer elects to have the work done by a specific
              contractor, the insurer must guarantee the work. But there is no regulation
              requiring you to go out and shop for the cheapest bid. In fact, the insurer may
              be trying to use a "three bids" requirement to delay your claim or to pressure
              you into accepting a lowball estimate. You have the right to hire the licensed
              contractor of your choice.
            </p>
            <p>
              If the insurance company's estimate is lower than what legitimate contractors are
              quoting, the problem is with the insurer's estimate — not with your contractor's
              pricing. A Public Adjuster can help you negotiate the proper repair cost by
              preparing a detailed scope of loss and supporting it with current local pricing.
              Do not let the insurer dictate how many bids you need or which contractor you
              must use.
            </p>
          </>
        ),
      },
      {
        id: 'one-year-lawsuit',
        question:
          'The insurance company said I only have one year to file a lawsuit, but they took 14 months to adjust my claim. Is that true?',
        answer: (
          <>
            <p>
              This is a critically important issue. Most homeowners policies contain a
              one-year suit limitation clause, which originates from California Insurance Code
              Section 2071 — the standard fire policy statute. Under this provision, the
              policyholder must bring suit within 12 months after the date of loss. However,
              California law provides critical protections when the insurer's own conduct has
              consumed that time.
            </p>
            <p>
              In California, the statute of limitations is equitably tolled during the period
              the insurer is investigating the claim. This means that while the policy may say
              one year from the date of loss, the limitations period is effectively paused
              while the insurer is adjusting your claim and does not begin to run in earnest
              until the claim is closed or denied. If the insurer was still adjusting your
              claim for 14 months — requesting documentation, sending adjusters, or leading
              you to believe a settlement was forthcoming — the one-year window was tolled
              during that period. California courts have consistently held that an insurer
              cannot benefit from delay that it caused. Additionally, under California
              Insurance Code Section 790.03(h), unreasonable delay in claims handling is
              itself a violation of the Unfair Claims Settlement Practices Act.
            </p>
            <p>
              That said, the statute of limitations for insurance claims is not as
              straightforward as it may appear — consult with an attorney well before you
              approach any deadline. Do not assume the deadline has passed, but do not assume
              it has been tolled either. An experienced insurance coverage attorney can
              evaluate whether equitable tolling applies to your specific facts. If you have a
              Public Adjuster, let them know about this issue right away so they can coordinate
              with legal counsel if necessary.
            </p>
          </>
        ),
      },
    ],
  },

  /* ────────────────────────── 2. Depreciation & Valuation ────────────────── */
  {
    id: 'depreciation-valuation',
    title: 'Depreciation & Valuation',
    icon: '\uD83D\uDCB0',
    questions: [
      {
        id: 'heavy-depreciation',
        question:
          'The insurance company heavily depreciated my claim — about 30%. They depreciated wood framing, concrete slab, and it looks like they depreciated labor too. Did they do it correctly?',
        answer: (
          <>
            <p>
              Probably not. In California, there are significant restrictions on how an insurer
              can depreciate your claim. First, labor cannot be depreciated. The California
              Court of Appeal ruled in{' '}
              <em>Truong v. Allstate Insurance Company</em> (2021) that labor costs do
              not depreciate over time — it costs the same to install a new roof today whether
              the roof is one year old or twenty years old. If the insurer depreciated labor in
              your estimate, that portion of the depreciation is improper and should be reversed.
            </p>
            <p>
              Second, depreciating structural components like wood framing and concrete slab by
              30% raises serious questions. Depreciation is supposed to reflect the actual loss
              in value of a specific item based on its age, condition, and expected useful life.
              Concrete slabs can last 50 to 100 years or more, so a 30% depreciation would only
              be appropriate if the slab were extremely old and visibly deteriorated. Similarly,
              wood framing in a well-maintained home does not lose 30% of its value. The insurer
              must justify each depreciation figure with a reasonable methodology — they cannot
              simply apply a blanket percentage across the board.
            </p>
            <p>
              Under 10 CCR 2695.9(b), the insurer must provide you with a written explanation
              of how they calculated depreciation, including the expected useful life and age of
              each item. Review the estimate line by line. If the insurer cannot justify the
              depreciation with specific reasoning, challenge it. A Public Adjuster can review
              the estimate, identify improper depreciation, and negotiate to have it corrected,
              potentially recovering tens of thousands of dollars.
            </p>
          </>
        ),
      },
      {
        id: 'lv-purse-depreciation',
        question:
          'The insurance company said my Louis Vuitton purse was really old and they were doing me a favor by only putting 70% depreciation on it. Did they do that correctly?',
        answer: (
          <>
            <p>
              No, that is almost certainly incorrect. Depreciation must be based on the actual
              condition and useful life of the specific item, not on arbitrary percentages. A
              Louis Vuitton handbag is a luxury item that, when properly maintained, retains
              significant value over time — in many cases, vintage Louis Vuitton bags actually
              appreciate in value. A 70% depreciation suggests the insurer treated the bag as
              if it were nearly worthless, which is inconsistent with how the secondary market
              values these items.
            </p>
            <p>
              Under California law, depreciation must be reasonable and based on the item's
              actual pre-loss condition. The insurer should consider the brand, model,
              condition, age, and current market value. For luxury goods, this often means
              consulting resale market data from platforms like The RealReal, Fashionphile, or
              similar sources. If your bag was in good condition and a sought-after style, even
              a 20-30% depreciation may be excessive.
            </p>
            <p>
              Furthermore, if you have a replacement cost policy, the depreciation is only a
              temporary holdback — the insurer deducts depreciation to calculate the initial
              Actual Cash Value (ACV) payment, but you are entitled to recover the full
              replacement cost once you actually replace the item. The insurer telling you they
              are "doing you a favor" is a negotiation tactic, not a statement of fact. Document
              the bag's pre-loss condition with any photos you have, research its current
              replacement cost and resale value, and push back. A Public Adjuster can help you
              build the case for a fair valuation on high-value personal property items.
            </p>
          </>
        ),
      },
      {
        id: 'depreciation-new-location',
        question:
          'The insurance company said I can\'t recover depreciation by building my new home in a new location. Is that true?',
        answer: (
          <>
            <p>
              This is a contested area, and the answer is generally no — in most cases, you can
              recover your depreciation (the difference between ACV and replacement cost) even
              if you rebuild in a different location. Under a standard replacement cost policy,
              the insurer owes you the cost to replace or rebuild to a condition similar to what
              you had before the loss. The policy typically requires that the property be
              "repaired, rebuilt, or replaced" — but California law and most policy language do
              not require that the replacement happen at the exact same site.
            </p>
            <p>
              California Insurance Code Section 2051.5 specifically addresses replacement cost
              and provides that the measure of indemnity is the amount it would cost to repair,
              rebuild, or replace the thing lost or injured. Many California policyholders who
              lost homes in wildfires have chosen to rebuild elsewhere, and they are generally
              entitled to the same policy benefits. The key is that you actually incur the cost
              of replacement — the insurer needs to see that you spent the money to rebuild or
              purchase a comparable home.
            </p>
            <p>
              However, the specifics of your policy language matter, and some insurers have
              tried to insert endorsements limiting replacement cost recovery to the original
              location. Read your policy carefully and, if the insurer is denying your
              recoverable depreciation based on location, consult a Public Adjuster or attorney
              who can review the specific policy language and advise you on your rights under
              California law. Do not accept a denial without getting a professional opinion.
            </p>
          </>
        ),
      },
      {
        id: 'wallpaper-crime',
        question:
          'The insurance company said that if I don\'t replace my wallpaper, I will be committing a crime. Is that true?',
        answer: (
          <>
            <p>
              No, that is absolutely not true, and the fact that an insurer would tell you this
              is deeply troubling. Under a replacement cost policy, you receive the full
              replacement cost value only when you actually replace the item. If you choose not
              to replace your wallpaper, you are simply entitled to the Actual Cash Value (ACV)
              instead — the replacement cost minus depreciation. That is your right under the
              policy, and choosing to pocket the ACV payment rather than replace an item is not
              a crime. It is how the policy works.
            </p>
            <p>
              What the insurer may be (incorrectly) alluding to is insurance fraud — which
              would occur if you claimed you replaced the wallpaper and submitted a fraudulent
              receipt to collect the recoverable depreciation when you actually did not replace
              it. That would indeed be fraudulent. But simply deciding not to replace an item
              and accepting the ACV payment is perfectly legal and is something policyholders
              do all the time.
            </p>
            <p>
              If your insurer made this statement, document it. Write down exactly what was
              said, when, and by whom. This kind of misrepresentation can violate California
              Insurance Code Section 790.03(h), which prohibits insurers from making misleading
              statements about the claim. You may wish to report this to the California
              Department of Insurance. A Public Adjuster can also help ensure you understand
              your actual obligations under the policy and that the insurer is not using scare
              tactics to manipulate your decisions.
            </p>
          </>
        ),
      },
      {
        id: 'missed-depreciation-deadline',
        question:
          'The insurance company said I ran past the time to do repairs and therefore I\'m not entitled to the recoverable depreciation. Is that true?',
        answer: (
          <>
            <p>
              This is a common tactic, and while some policies do contain time limits for
              recovering depreciation, the answer is not as simple as the insurer wants you to
              believe. Many California homeowners policies state that the insured must complete
              repairs within a certain period (often 12 or 24 months) to collect the
              recoverable depreciation — the difference between the ACV and the full
              replacement cost. However, California law provides important protections.
            </p>
            <p>
              Under California Insurance Code Section 2051.5(c), the policy must allow a
              reasonable time to complete repairs. If the delay in completing repairs was caused
              by the insurer — for example, if they took months to approve the scope of work,
              underpaid the initial estimate so you could not afford to start repairs, or
              otherwise dragged their feet — a court may find that the deadline should be
              extended. Furthermore, many policies allow you to request an extension, and the
              insurer must consider that request in good faith.
            </p>
            <p>
              If you are approaching or have passed the deadline in your policy, act immediately.
              Send a written request for an extension, explaining the reasons for the delay. If
              the insurer's own conduct contributed to the delay, document that thoroughly. This
              is a situation where having a Public Adjuster or attorney on your side can make a
              significant difference, as they can advocate for the extension and, if necessary,
              pursue the recoverable depreciation through the appraisal process or litigation.
            </p>
          </>
        ),
      },
    ],
  },

  /* ────────────────────────── 3. Contractors & Repairs ────────────────────── */
  {
    id: 'contractors-repairs',
    title: 'Contractors & Repairs',
    icon: '\uD83D\uDD28',
    questions: [
      {
        id: 'pressuring-contractor',
        question:
          'The insurance adjuster is pressuring me to use a contractor sent by the insurance company. What should I do?',
        answer: (
          <>
            <p>
              You should exercise caution. Under California law, you have the right to hire the
              licensed contractor of your choice. The insurer may recommend a contractor from
              their "preferred vendor" or "managed repair" program, but they cannot force you to
              use that contractor. Under 10 CCR 2695.9(b), if the insurer recommends a specific
              contractor, the insurer must guarantee the quality of that contractor's work. That
              guarantee obligation is important — it means the insurer is responsible if the
              preferred contractor does substandard work.
            </p>
            <p>
              The reason many insurance adjusters push their preferred contractors is that these
              contractors have agreed to the insurer's pricing — which is often below market
              rates. The contractor gets a steady stream of referrals from the insurer, and in
              return, they agree to do the work at a discount. This may benefit the insurer, but
              it does not necessarily benefit you. A contractor who is beholden to the insurance
              company for future business has a conflict of interest — their incentive is to keep
              the insurer happy, not to ensure your home is fully and properly repaired.
            </p>
            <p>
              Get your own estimates from independent, licensed contractors. If your contractor's
              estimate is higher than the insurer's, that does not mean your contractor is wrong
              — it often means the insurer's estimate is inadequate. A Public Adjuster can help
              you compare the estimates, identify deficiencies in the insurer's scope, and
              negotiate for the full cost of repair using your contractor of choice.
            </p>
          </>
        ),
      },
      {
        id: 'must-use-their-contractor',
        question:
          'The insurance company said I have to use their recommended contractor or else my claim will be denied. Is that true?',
        answer: (
          <>
            <p>
              That is not true, and making such a statement may constitute a violation of
              California's Unfair Claims Settlement Practices Act (Insurance Code Section
              790.03). You have the right to select the licensed contractor of your choice.
              The insurer cannot condition payment of your claim on your use of a specific
              contractor. If the insurer denies or threatens to deny your claim solely because
              you chose your own contractor, that is an improper claim practice.
            </p>
            <p>
              Under 10 CCR 2695.9(b), if the insurer wants to recommend a contractor, they may
              do so, but they must also guarantee the work of that contractor. This regulation
              actually creates an incentive for you to consider the insurer's contractor in some
              cases — because if the work is defective, the insurer is on the hook. However,
              the choice remains yours. Many policyholders prefer to hire their own contractor
              to ensure the work is done to their standards, not the insurer's budget.
            </p>
            <p>
              If the insurer has made this threat, document it immediately — note the date, the
              name of the person who said it, and the exact words used. Then respond in writing
              stating that you intend to exercise your right to choose your own contractor and
              that you expect the insurer to pay the reasonable cost of repair. If they persist,
              file a complaint with the CDI and consult a Public Adjuster or attorney. This type
              of conduct is taken seriously by regulators.
            </p>
          </>
        ),
      },
      {
        id: 'contractor-lowball-scheme',
        question:
          'The insurance company sent over a contractor who told me confidentially that the loss was at least $80,000 but he was going to write a $50,000 estimate, and only if I hired him would he increase it by an additional $30,000 later on. Is this the correct way to handle my claim?',
        answer: (
          <>
            <p>
              Absolutely not. What this contractor described is a deeply problematic arrangement
              that could constitute fraud and is certainly a conflict of interest. If a contractor
              is deliberately writing a low estimate to satisfy the insurance company and then
              planning to inflate it later only if you hire him, that contractor is not acting in
              your best interest. He is manipulating the estimate to benefit himself — guaranteeing
              he gets the job by making you dependent on him for the additional money.
            </p>
            <p>
              This also raises serious questions about the contractor's relationship with the
              insurance company. If the insurer sent this contractor to your home and the
              contractor is colluding with the insurer to understate the initial loss, both the
              contractor and the insurer may be violating California law. Under Insurance Code
              Section 790.03(h), the insurer is required to conduct a fair investigation and
              provide a reasonable settlement based on the actual damage — not a deflated number
              produced by a complicit contractor.
            </p>
            <p>
              You should immediately document everything this contractor told you — dates, names,
              and details. Do not sign any contract with this individual. Get your own independent
              estimate from a licensed contractor who has no relationship with the insurance
              company. Report the situation to the California Department of Insurance and the
              Contractors State License Board. A Public Adjuster can help you obtain a proper,
              independent scope of loss and negotiate with the insurer based on the actual cost
              of repair, not a manufactured lowball figure.
            </p>
          </>
        ),
      },
      {
        id: 'gc-overhead-profit',
        question:
          'Can I manage the project myself and still get paid the general contractor overhead and profit?',
        answer: (
          <>
            <p>
              This is a frequently debated question, and the answer depends on your policy
              language and the specifics of your situation. General contractor overhead and profit
              (commonly referred to as "O&P") is typically a line item in repair estimates that
              covers the general contractor's cost of managing the project — hiring and
              coordinating subcontractors, pulling permits, supervising work, and assuming
              liability. The standard Xactimate markup is 10% overhead and 10% profit.
            </p>
            <p>
              Many insurance companies take the position that O&P is only owed when you actually
              hire a general contractor. If you act as your own general contractor (known as
              "owner-builder"), the insurer may argue that you did not incur that cost and
              therefore are not entitled to it. However, in California, the replacement cost
              methodology under Insurance Code Section 2051.5 measures the cost to "repair,
              rebuild, or replace" the property — and that cost inherently includes general
              contractor overhead and profit because that is what it would cost to have the work
              done in the real market.
            </p>
            <p>
              The practical reality is that acting as your own GC is an enormous amount of work
              involving real responsibility — permits, scheduling, quality control, and liability.
              If you are doing that work, there is a reasonable argument that you are entitled to
              the compensation for it. Some insurers will pay it; others will fight it. This is
              a negotiation point, and having a Public Adjuster advocate for the full replacement
              cost — including O&P — can strengthen your position. If the insurer refuses, the
              appraisal process is another avenue to resolve the dispute.
            </p>
          </>
        ),
      },
    ],
  },

  /* ────────────────────────── 4. Living Expenses & Displacement ──────────── */
  {
    id: 'living-expenses',
    title: 'Living Expenses & Displacement',
    icon: '\uD83C\uDFE8',
    questions: [
      {
        id: 'reimbursed-expenses',
        question:
          'Can I get reimbursed for various expenses during the time my house is uninhabitable? What is the definition of uninhabitable?',
        answer: (
          <>
            <p>
              Yes. If your home is rendered uninhabitable by a covered loss, your homeowners
              policy almost certainly includes Coverage D — Loss of Use, which pays for
              Additional Living Expenses (ALE). ALE covers the increase in your living expenses
              necessary to maintain your normal standard of living while your home is being
              repaired. This can include temporary housing (hotel, rental home), meals above
              what you normally spend, laundry, storage, pet boarding, additional commuting
              costs, and many other reasonable expenses.
            </p>
            <p>
              "Uninhabitable" generally means the home is not safe or fit for occupancy. This
              can include situations where there is structural damage, lack of utilities (water,
              electricity, gas), toxic contamination (smoke, mold, asbestos), or conditions that
              pose a health or safety risk. You do not need a formal condemnation or a "red tag"
              from the city for your home to be considered uninhabitable — if a reasonable person
              would not live there under the current conditions, it is uninhabitable. Your
              treating physician, a building inspector, or an industrial hygienist can provide
              documentation supporting uninhabitability if the insurer challenges it.
            </p>
            <p>
              The key is to document every expense carefully. Keep all receipts, and keep a log
              of what you normally spend versus what you are spending now — the insurer only owes
              the increase over your normal costs. For example, if you normally spend $800 per
              month on groceries and you are now spending $1,500 because you are eating out and
              staying in a hotel without a kitchen, the increase of $700 is covered. A Public
              Adjuster can help you maximize your ALE recovery and ensure you are not leaving
              money on the table during what is often the most expensive phase of a claim.
            </p>
          </>
        ),
      },
      {
        id: 'tenant-hotel-costs',
        question:
          'Am I going to get paid for giving my tenants money when the apartment building is damaged and my tenants have to go to a hotel?',
        answer: (
          <>
            <p>
              If you own a rental property and it is damaged by a covered loss, your landlord
              policy should include a coverage called Fair Rental Value (FRV). FRV compensates
              you for the rental income you lose while the property is uninhabitable and being
              repaired. However, FRV specifically covers your lost rental income — it does not
              directly reimburse you for hotel costs you may advance to your tenants.
            </p>
            <p>
              That said, there are situations where helping your tenants with temporary housing
              may be a reasonable and necessary expense. If your local jurisdiction requires
              landlords to assist displaced tenants (some California cities have such
              ordinances), or if your lease agreement includes provisions for tenant relocation,
              those costs may be recoverable under your policy or through other means. Your
              tenants may also have their own renters insurance that includes ALE/Loss of Use
              coverage, and you should encourage them to file their own claims.
            </p>
            <p>
              The most important thing is to understand your specific policy and coverage. Review
              the FRV provisions, check for any "ordinance or law" coverage that might apply to
              mandatory tenant relocation costs, and document everything. A Public Adjuster
              experienced with rental property claims can help you maximize your FRV recovery and
              navigate the complexities of landlord obligations and tenant displacement.
            </p>
          </>
        ),
      },
      {
        id: 'cant-remember-items',
        question:
          'What if I can\'t remember what items I had that were burned up in the fire?',
        answer: (
          <>
            <p>
              This is one of the most common and understandable challenges after a total loss.
              You just lost everything, and now the insurance company wants a detailed list of
              every item you owned. It feels impossible — but it is doable, and you are entitled
              to a fair recovery even if your memory is imperfect. Under California law, the
              insurer cannot deny your claim simply because you cannot provide a perfect inventory.
              You are required to provide a "reasonable" proof of loss, not a perfect one.
            </p>
            <p>
              Start by going room by room in your mind. Think about your daily routines — what
              did you see when you opened the medicine cabinet? What was in the kitchen drawers?
              What did the kids' rooms look like? Check old photos on your phone, social media
              posts, and cloud backups — you'd be surprised how many items appear in the
              background of family photos. Review bank and credit card statements for purchases.
              Check Amazon order history, store loyalty programs, and email receipts. Ask family
              members and friends who visited your home to help jog your memory.
            </p>
            <p>
              Our free{' '}
              <a href="/inventory" className="text-[#2E74B5] underline">
                Personal Property Inventory Tool
              </a>{' '}
              is designed specifically for this situation — it lists over 3,750 items organized
              by room so you can check off what you owned rather than trying to remember
              everything from scratch. A Public Adjuster experienced in total loss claims can
              also guide you through the inventory process, using proven techniques to help you
              recover items you might otherwise forget. The difference between a thorough
              inventory and a rushed one can be tens of thousands of dollars.
            </p>
          </>
        ),
      },
    ],
  },

  /* ────────────────────────── 5. Examinations Under Oath ─────────────────── */
  {
    id: 'examinations-under-oath',
    title: 'Examinations Under Oath',
    icon: '\uD83D\uDCCB',
    questions: [
      {
        id: 'euo-second-time',
        question:
          'The insurance company says they want me to sit for an examination under oath and I already spent eight hours answering their questions. Now they want me to come back a second time. Are they allowed to do this?',
        answer: (
          <>
            <p>
              Generally, yes — your policy likely contains a "duties after loss" provision that
              requires you to submit to examinations under oath (EUO) as reasonably requested
              by the insurer. Courts have upheld the insurer's right to conduct multiple
              sessions if there is a legitimate reason, such as new information that needs
              clarification, additional coverages being discussed, or incomplete answers from
              the first session. However, the key word is "reasonably." The insurer cannot use
              the EUO process to harass, intimidate, or delay your claim.
            </p>
            <p>
              If you already spent eight hours and the insurer wants you back, you should ask
              why. Request a written explanation of the specific topics or areas they need to
              cover in the second session. If they are simply rehashing the same questions or
              the request appears designed to wear you down rather than gather legitimate
              information, that may cross the line into bad faith under California Insurance
              Code Section 790.03(h). Unreasonable EUO demands can be evidence of claims
              handling violations.
            </p>
            <p>
              You should seriously consider having an attorney present for any examination under
              oath — especially a second session. While an EUO is not a deposition in litigation,
              it is a formal proceeding where your statements are made under penalty of perjury
              and can be used against you. An attorney can object to improper questions, protect
              your rights, and ensure the insurer is not overreaching. A Public Adjuster can also
              help coordinate with your attorney and ensure that the EUO process does not derail
              the overall progress of your claim.
            </p>
          </>
        ),
      },
      {
        id: 'euo-girlfriend',
        question:
          'The insurance company said my girlfriend has to show up for an examination under oath, but she doesn\'t even live with me. Can they do this?',
        answer: (
          <>
            <p>
              This depends on the specific circumstances. The insurer's right to demand an
              examination under oath extends to the "insured" — which typically includes named
              insureds and resident relatives listed on the policy. If your girlfriend is not a
              named insured, not a resident of the household, and not a party to the insurance
              contract, the insurer generally has no contractual right to compel her to sit for
              an EUO. She is not bound by your policy's duties-after-loss provisions.
            </p>
            <p>
              However, the insurer might request (not demand) her participation if they believe
              she has relevant information about the claim — for example, if she was present at
              the time of loss, if she has knowledge about the contents of the home, or if the
              insurer suspects involvement in the loss. In that case, her participation would be
              voluntary. She has no obligation to appear, and the insurer cannot penalize you for
              her refusal if she is not an insured under the policy.
            </p>
            <p>
              If the insurer is threatening to deny your claim because your girlfriend will not
              submit to an EUO, and she is not an insured under your policy, that threat is
              likely improper. Consult with an attorney before responding. An attorney can evaluate
              whether the insurer's request has any legal basis under your specific policy and
              circumstances, and can protect both your rights and your girlfriend's rights
              throughout the process.
            </p>
          </>
        ),
      },
      {
        id: 'euo-elderly-mother',
        question:
          'The insurance company said my elderly mother has to sit for an examination under oath even though she has dementia and she\'s nonverbal in a nursing home. Is that true?',
        answer: (
          <>
            <p>
              This is an extremely sensitive situation and the insurer's demand raises serious
              legal and ethical concerns. While the policy may require "insureds" to submit to
              examinations under oath, that obligation must be applied reasonably. If your mother
              is a named insured on the policy but has dementia and is nonverbal, she is
              physically and mentally incapable of providing testimony. Insisting that she appear
              under these circumstances could be considered unreasonable, oppressive, and
              potentially in bad faith.
            </p>
            <p>
              California courts recognize that the duty to cooperate and submit to examination
              is subject to reasonableness. If an insured is incapacitated, the insurer may need
              to accept alternative means of obtaining the information — such as taking testimony
              from a legal guardian, power of attorney holder, or other family members who can
              speak to the relevant facts. An insurer that denies a claim solely because a
              mentally incapacitated person cannot sit for an EUO may face a bad faith claim
              under California Insurance Code Sections 790.03(h) and the common law duty of
              good faith and fair dealing.
            </p>
            <p>
              You need an attorney immediately if you are facing this situation. The attorney
              can communicate with the insurer in writing, provide medical documentation of your
              mother's condition, and propose reasonable alternatives to satisfy the insurer's
              investigative needs. If your mother has a conservator or someone with power of
              attorney, that person may be able to participate in the process on her behalf. Do
              not let the insurer bully you into an impossible situation — the law requires
              reasonableness from both parties.
            </p>
          </>
        ),
      },
    ],
  },

  /* ────────────────────────── 6. Mold & Water Damage ─────────────────────── */
  {
    id: 'mold-water-damage',
    title: 'Mold & Water Damage',
    icon: '\uD83D\uDCA7',
    questions: [
      {
        id: 'mold-means-longterm',
        question:
          'The insurance company told me that mold indicates the loss is long-term and therefore they\'re not paying for my water damage. Is that true?',
        answer: (
          <>
            <p>
              Not necessarily. While mold can develop over time from chronic water intrusion, it
              can also develop remarkably quickly after a sudden and accidental water event —
              sometimes within 24 to 48 hours in warm, humid conditions. The presence of mold
              alone does not prove that the water damage is "long-term" or the result of a
              maintenance issue rather than a covered peril. The insurer needs to conduct a proper
              investigation to determine the actual cause of the water damage rather than jumping
              to conclusions based solely on the presence of mold.
            </p>
            <p>
              Under California's Fair Claims Settlement Practices Regulations (10 CCR 2695.7),
              the insurer must conduct a thorough investigation before denying a claim. Simply
              pointing to mold and declaring the loss "long-term" without forensic analysis,
              moisture mapping, or expert evaluation is not a thorough investigation. If the water
              damage was caused by a sudden event — a burst pipe, an appliance failure, a roof
              leak from a recent storm — the fact that mold grew afterward does not change the
              covered nature of the initial event. The mold is a consequence of the covered water
              damage, not evidence that the damage wasn't covered.
            </p>
            <p>
              If the insurer is denying your water damage claim based on the presence of mold,
              request their denial in writing with a specific explanation of their coverage
              position. Consider hiring an independent water damage or mold expert who can evaluate
              the source and timeline of the water intrusion. A Public Adjuster or attorney can
              challenge the insurer's conclusions and advocate for coverage of both the water
              damage and the resulting mold remediation.
            </p>
          </>
        ),
      },
      {
        id: 'mold-limit-bill',
        question:
          'My restoration contractor came and dried out the property and cleaned up some mold. Their total bill was over $20,000 and the insurance company says they\'ll only pay $5,000 under the mold limit. What should I do?',
        answer: (
          <>
            <p>
              This is a common dispute, and the insurer's position may be wrong. Many California
              homeowners policies have a separate "mold limit" — typically $5,000 or $10,000 —
              that caps the insurer's responsibility for mold remediation. However, this limit
              only applies to mold that is a separate, standalone issue. If the mold resulted
              from a covered peril (such as a burst pipe or storm damage), the cost to remediate
              that mold may be covered under the main water damage claim, not subject to the
              separate mold sublimit.
            </p>
            <p>
              The distinction is critical: if you had a covered water loss and the mold developed
              as a direct result of that water intrusion, the mold remediation is part of the
              covered loss — it is consequential damage flowing from the covered peril. The mold
              sublimit was designed for standalone mold claims (e.g., mold discovered from a slow
              leak or humidity), not for mold that is a direct consequence of an already-covered
              water event. California courts have addressed this distinction, and many
              policyholders have successfully argued that consequential mold should be covered
              under the main claim.
            </p>
            <p>
              Review your contractor's invoice to see how the charges are broken down. The drying
              and water extraction work should clearly be covered under the water damage claim.
              The mold remediation charges should be argued as consequential to the covered water
              loss. Have your contractor provide a clear breakdown if one doesn't exist. A Public
              Adjuster can help you frame the claim properly and negotiate with the insurer to
              pay the full amount under the water damage coverage rather than capping it under
              the mold sublimit.
            </p>
          </>
        ),
      },
    ],
  },

  /* ────────────────────────── 7. Documentation & Timing ──────────────────── */
  {
    id: 'documentation-timing',
    title: 'Documentation & Timing',
    icon: '\uD83D\uDCC1',
    questions: [
      {
        id: 'late-report-vacation',
        question:
          'The insurance company said I failed to report the claim timely for my vacation home, but the tree is still sitting there crushing the roof. I didn\'t know about it until recently. Can they deny my claim?',
        answer: (
          <>
            <p>
              The insurer's position is questionable. While most policies require "prompt" or
              "timely" notice of a loss, California courts have consistently held that the
              insurer must demonstrate actual prejudice — meaning they were actually harmed by
              the late notice — before they can deny a claim on that basis. This is known as
              the "notice-prejudice rule," and it is well established in California law (see{' '}
              <em>Shell Oil Co. v. Winterthur Swiss Ins. Co.</em> and subsequent cases).
            </p>
            <p>
              In your situation, you did not know about the damage until recently because the
              property is a vacation home that you do not visit regularly. That is a reasonable
              explanation for the delayed notice. Furthermore, the tree is still there crushing
              the roof — the damage is still present and can be fully investigated by the insurer.
              It is difficult for the insurer to argue they were "prejudiced" by the late notice
              when the evidence of the loss is still sitting right there for them to inspect,
              photograph, and evaluate.
            </p>
            <p>
              Report the claim immediately, in writing, and explain the circumstances — that the
              property is a vacation home, that you were not aware of the damage until a specific
              date, and that the damage remains and is fully available for inspection. If the
              insurer denies the claim based on late reporting, demand a written denial with
              specific citation to the policy provision and an explanation of how they were
              prejudiced. A Public Adjuster or attorney can help you fight the denial, as late
              notice denials in California are regularly overturned when the insurer cannot
              demonstrate actual prejudice.
            </p>
          </>
        ),
      },
      {
        id: 'repaired-already-photos',
        question:
          'I repaired the damage right away but I took photos. Can the insurance company deny my claim?',
        answer: (
          <>
            <p>
              The insurer may push back, but they generally cannot deny your claim solely because
              you made emergency or permanent repairs before they inspected the property. In fact,
              your policy includes a duty to mitigate — you are required to take reasonable steps
              to protect your property from further damage after a loss. Making repairs,
              especially emergency repairs like tarping a roof, stopping a water leak, or boarding
              up broken windows, is exactly what the policy expects you to do.
            </p>
            <p>
              The key is documentation, and it sounds like you did the right thing by taking
              photos. Those photos are your evidence of the pre-repair damage, and they can
              support your claim just as effectively as an in-person inspection. Under 10 CCR
              2695.7, the insurer must conduct a reasonable investigation — but "reasonable" does
              not mean they get unlimited time to inspect while your home deteriorates. If the
              photos clearly document the damage, along with any receipts or invoices for the
              repair work, the insurer has sufficient information to evaluate the claim.
            </p>
            <p>
              To strengthen your position, keep all damaged materials if possible (e.g., save
              the damaged flooring, roofing materials, or drywall in your garage). Preserve all
              photos, videos, and receipts. If the insurer argues that they could not verify the
              damage because you repaired it, point to the documentation and remind them of your
              duty to mitigate under the policy. A Public Adjuster can help present the
              documentation effectively and negotiate the claim based on the photographic
              evidence and repair costs.
            </p>
          </>
        ),
      },
    ],
  },

  /* ────────────────────────── 8. Public Adjusters & Professional Help ─────── */
  {
    id: 'public-adjusters',
    title: 'Public Adjusters & Professional Help',
    icon: '\uD83E\uDD1D',
    questions: [
      {
        id: 'pa-over-policy-limit',
        question:
          'Do I need to hire a Public Adjuster if the amount of loss is way over the policy limit?',
        answer: (
          <>
            <p>
              This is an excellent question, and the answer is: it depends, but a Public
              Adjuster can often still add significant value even when the loss exceeds the
              policy limits. When your loss clearly exceeds your policy limit, you might think
              the insurer will simply pay the maximum — but that is not always what happens.
              Insurers sometimes still try to depreciate the claim, dispute items, or delay
              payment even when the loss is obviously a total. Having a Public Adjuster ensures
              you receive the full policy limit, including all applicable coverages.
            </p>
            <p>
              A typical homeowners policy has multiple coverage categories — Coverage A
              (dwelling), Coverage B (other structures), Coverage C (personal property), and
              Coverage D (loss of use/ALE). Each has its own limit. A Public Adjuster ensures
              that every coverage is properly triggered and maximized. For example, even if
              Coverage A is clearly maxed out, Coverage C (contents) and Coverage D (additional
              living expenses) may have substantial amounts that require detailed documentation
              and negotiation. There may also be code upgrade coverage, debris removal, and
              other provisions that the insurer will not volunteer.
            </p>
            <p>
              Additionally, a Public Adjuster can help you navigate the process efficiently,
              handle the paperwork, document the contents claim (which is often the most
              time-consuming and undervalued part), and deal with the mortgage company that is
              likely named on your check. If the claim is straightforward and the insurer is
              paying promptly, you may be able to handle it yourself. But for large total losses,
              the complexity is usually enough to justify professional help. A free consultation
              with a Public Adjuster can help you assess whether representation makes sense for
              your specific situation.
            </p>
          </>
        ),
      },
      {
        id: 'who-to-hire',
        question:
          'How do I know whether I should handle my claim myself, hire a Public Adjuster, hire an attorney, or get help from an expert contractor?',
        answer: (
          <>
            <p>
              The right answer depends on the size and complexity of your claim, how the insurer
              is behaving, and what kind of help you need. Here is a general framework:
              <strong> Handle it yourself</strong> if the claim is small (under $10,000-$15,000),
              straightforward (one clear cause of loss, minimal dispute), and the insurer is
              being responsive and reasonable. The guides and tools on this site can help you
              navigate a simpler claim.
            </p>
            <p>
              <strong>Hire a Public Adjuster</strong> if the claim is moderate to large, involves
              multiple coverages (dwelling, contents, ALE), if you suspect underpayment, or if
              you simply don't have the time or expertise to manage the process yourself. A Public
              Adjuster handles the documentation, estimation, and negotiation — the day-to-day
              claims work. Most work on contingency, so there is no upfront cost.{' '}
              <strong>Hire an attorney</strong> if the insurer has denied your claim outright, if
              there is a coverage dispute (the insurer says the loss isn't covered), if you
              suspect bad faith, or if there are legal issues like statute of limitations
              concerns. An attorney handles the legal dimension.{' '}
              <strong>Hire an expert contractor</strong> when you need a detailed scope of repair
              or rebuild estimate to counter the insurer's low estimate — a good contractor can
              document code requirements, hidden damage, and realistic pricing.
            </p>
            <p>
              In many large claims, you may need more than one professional. A Public Adjuster
              and an attorney often work together — the PA handles the claim documentation and
              negotiation while the attorney handles legal strategy and bad faith issues. The
              best first step is usually a free consultation with a Public Adjuster, who can
              assess your situation and advise whether additional professionals are needed.
            </p>
          </>
        ),
      },
      {
        id: 'contents-inventory-process',
        question:
          'How is a personal property inventory prepared, and what\'s the difference between cleaning contents, total loss contents, and pack-out/storage?',
        answer: (
          <>
            <p>
              A personal property inventory is a detailed list of every item of personal property
              (contents) damaged or destroyed in the loss. For each item, you document the room
              it was in, a description, the quantity, the age, the pre-loss condition, the
              replacement cost (what it would cost to buy a similar item new today), and the
              Actual Cash Value (replacement cost minus depreciation). This inventory is the
              foundation of your Coverage C (personal property) claim and can represent a
              significant portion of your total recovery — often $100,000 or more in a total
              loss.
            </p>
            <p>
              The three terms you mentioned are important distinctions.{' '}
              <strong>Cleaning contents</strong> refers to items that were damaged but can be
              restored through professional cleaning — typically smoke-damaged clothing, soft
              goods, and some electronics. A restoration company cleans these items and the
              insurer pays the cleaning cost.{' '}
              <strong>Total loss contents</strong> are items that cannot be cleaned or restored
              and must be replaced entirely — melted, burned, or irreparably damaged items. You
              are owed the replacement cost (or ACV initially) for these items.{' '}
              <strong>Pack-out and storage</strong> refers to the process of a restoration company
              carefully removing, inventorying, and storing your salvageable belongings while
              repairs are done. The pack-out, storage, and pack-back costs are covered under your
              policy as part of the restoration process.
            </p>
            <p>
              The inventory process is time-consuming but critical. Our{' '}
              <a href="/inventory" className="text-[#2E74B5] underline">
                free inventory tool
              </a>{' '}
              provides a checklist of over 3,750 common household items organized by room, making
              it much easier than starting from a blank page. A Public Adjuster experienced in
              contents claims can guide you through the process, help you value items correctly,
              and ensure that the distinction between cleaning, total loss, and storage is
              properly handled to maximize your recovery.
            </p>
          </>
        ),
      },
    ],
  },

  /* ────────────────────────── 9. Policy & Coverage Questions ─────────────── */
  {
    id: 'policy-coverage',
    title: 'Policy & Coverage Questions',
    icon: '\uD83D\uDCC4',
    questions: [
      {
        id: 'deductible-from-limit',
        question:
          'My house was a total loss and the policy limit was $500,000. The insurance company gave me $499,000 because they subtracted the deductible. Is that correct?',
        answer: (
          <>
            <p>
              This is a surprisingly common issue, and whether the insurer handled it correctly
              depends on your specific policy language and the total documented loss. In many
              cases, when the loss clearly exceeds the policy limit, the deductible should
              effectively disappear. Here's why: if your policy limit is $500,000, your
              deductible is $1,000, and the actual cost to rebuild your home is $600,000, the
              insurer owes you $500,000 — the full policy limit. The deductible reduces your
              recovery from the actual loss amount, not the policy limit. So $600,000 minus
              $1,000 deductible equals $599,000, but since the policy limit is $500,000, you
              receive $500,000.
            </p>
            <p>
              However, if the insurer's estimate of the loss is exactly $500,000 (i.e., they
              valued the loss at exactly the policy limit), then subtracting the deductible
              from that amount could technically result in a $499,000 payment. The question
              then becomes: is their $500,000 estimate accurate, or is the actual loss higher
              than $500,000? In a total loss, the actual replacement cost almost always exceeds
              the policy limit — that is why it is called a total loss. If the loss is even one
              dollar over the policy limit before the deductible, you should receive the full
              $500,000.
            </p>
            <p>
              A Public Adjuster or contractor can prepare an independent estimate of the
              replacement cost. If the actual cost to rebuild exceeds $500,000 plus the
              deductible (which in a total loss it almost certainly does), the insurer should
              pay the full $500,000 policy limit. Present the independent estimate to the
              insurer and demand the full limit. This is a straightforward argument that a
              Public Adjuster can help you make effectively.
            </p>
          </>
        ),
      },
      {
        id: 'mortgage-on-check',
        question:
          'Why is a mortgage company\'s name on my building repair check?',
        answer: (
          <>
            <p>
              When you take out a mortgage, your lender has a financial interest in your property
              — the home is the collateral securing the loan. Your homeowners insurance policy
              includes a "mortgage clause" (also called a "loss payee clause") that names the
              mortgage company as an additional payee on any claim payments related to the
              dwelling (Coverage A). This is a standard provision in virtually every homeowners
              policy, and it is required by your mortgage agreement.
            </p>
            <p>
              What this means practically is that the insurance check for structural repairs will
              be made out to both you and the mortgage company. You cannot cash or deposit the
              check without the mortgage company's endorsement. The mortgage company will
              typically require you to sign the check over to them, and they will place the funds
              in an escrow account. They then release the money to you in stages as the repairs
              progress — usually in draws tied to completion milestones (e.g., 33% completion,
              66% completion, final inspection).
            </p>
            <p>
              This process can be frustrating and slow, especially when you need funds to begin
              repairs. Each mortgage company has its own loss draft department with its own
              procedures. Some are relatively easy to work with; others are bureaucratic
              nightmares. Tips: call the mortgage company's loss draft department early, ask for
              their specific requirements and forms, and get the process started as soon as
              possible. Note that contents (Coverage C) and ALE (Coverage D) checks should not
              include the mortgage company — those are payable to you alone. If the insurer is
              putting the mortgage company on a contents check, push back. A Public Adjuster can
              help navigate the mortgage company process and ensure funds are released in a
              timely manner.
            </p>
          </>
        ),
      },
      {
        id: 'contamination-not-damage',
        question:
          'The insurance company said that my contaminated home isn\'t actually damaged and that they don\'t pay for toxic contaminants like mercury and arsenic found all over my walls and floors. Is this true?',
        answer: (
          <>
            <p>
              The insurer's position is legally questionable and, in many cases, wrong. California
              courts have addressed the issue of contamination as "physical loss or damage" in
              several important cases. The presence of toxic contaminants such as mercury, arsenic,
              lead, or other hazardous substances on your walls and floors renders your home unsafe
              for habitation and diminishes its value — that constitutes physical loss and damage
              to the property. A home that cannot be safely occupied because of toxic contamination
              is, by any reasonable definition, damaged.
            </p>
            <p>
              Many homeowners policies provide coverage for "direct physical loss" to the dwelling.
              While some policies have specific exclusions for "pollutants" or "contaminants," the
              application of these exclusions depends heavily on the specific circumstances. If the
              contamination resulted from a covered peril — for example, a fire that released toxic
              materials from burned building materials, or a covered event that disturbed
              asbestos-containing materials — the resulting contamination may be covered as a
              consequence of the covered loss. The "pollution exclusion" in many policies was
              originally intended for industrial pollution, not for contamination resulting from
              insured events affecting a home.
            </p>
            <p>
              This is a complex coverage issue that requires careful analysis of your specific
              policy language and the source of the contamination. Do not accept the insurer's
              denial at face value. Hire an industrial hygienist to document the contamination
              with testing and a written report. Then consult with a Public Adjuster and/or an
              attorney experienced in coverage disputes. If the contamination resulted from a
              covered event, you may have a strong argument for coverage, and the insurer's
              blanket denial may constitute bad faith under California Insurance Code Section
              790.03(h).
            </p>
          </>
        ),
      },
    ],
  },

  /* ────────────────────────── 10. Common Myths ───────────────────────────── */
  {
    id: 'common-myths',
    title: 'Common Myths',
    icon: '\uD83D\uDEAB',
    questions: [
      {
        id: 'myth-adjuster-on-your-side',
        question:
          'The insurance company\'s adjuster said he\'s "on my side" and will make sure I\'m taken care of. Can I trust that?',
        answer: (
          <>
            <p>
              This is one of the most pervasive myths in the insurance claims process. The
              insurance company's adjuster — whether a staff adjuster (employee of the insurer)
              or an independent adjuster (hired by the insurer) — works for the insurance
              company. Their job is to investigate the claim and determine what the insurer will
              pay. While many company adjusters are decent people who try to be fair, their
              employer's financial interest is to minimize the payout. The adjuster's performance
              is measured, at least in part, by how efficiently they close claims — and
              "efficiency" in insurance often means paying less.
            </p>
            <p>
              This is not to say the adjuster is your enemy. Many company adjusters handle
              claims reasonably. But "being on your side" is not their role. They do not
              represent you, they are not your advocate, and they do not have a fiduciary duty
              to you. The only adjusters who work exclusively for policyholders are Public
              Adjusters — licensed professionals who are hired by and represent the insured,
              not the insurer. The difference is significant: a Public Adjuster's job is to
              maximize your recovery; a company adjuster's job is to settle the claim within
              the insurer's guidelines.
            </p>
            <p>
              Be polite and cooperative with the company adjuster, but protect yourself.
              Document all communications in writing, do not sign anything without understanding
              it, and do not accept a settlement offer without verifying that it covers your full
              loss. If the claim is significant, consider hiring a Public Adjuster who actually
              is on your side — contractually, legally, and professionally.
            </p>
          </>
        ),
      },
      {
        id: 'myth-first-offer-final',
        question:
          'The insurance company gave me an offer. Is the first offer they give me the final amount I can receive?',
        answer: (
          <>
            <p>
              No, and this is a myth that costs policyholders enormous amounts of money every
              year. The insurer's first offer is exactly that — a first offer. It is the starting
              point, not the finish line. Insurance claims are a negotiation, and the initial
              estimate or payment is almost always lower than what you are actually entitled to.
              In our experience, policyholders who negotiate or hire professional representation
              typically recover more than those who accept the first offer.
            </p>
            <p>
              Under California law, the insurer must provide you with a written explanation of
              how they calculated the offer (10 CCR 2695.7(b)). Review this carefully. Compare
              their estimate line by line against the actual cost of repair. Are there missing
              line items? Are the unit prices below current market rates? Did they fail to include
              code upgrades, permits, general contractor overhead and profit, or extended overhead?
              In most cases, the initial offer has significant gaps, and pointing those gaps out
              with documentation is how you negotiate a higher settlement.
            </p>
            <p>
              You are not required to accept any offer. If you disagree with the amount, you have
              the right to provide additional documentation, hire experts, invoke the appraisal
              provision in your policy, or pursue legal remedies. A Public Adjuster specializes
              in identifying what the insurer's estimate is missing and negotiating for the full
              amount owed. Never accept a settlement that does not fully cover your loss just
              because the insurer presented it as "final."
            </p>
          </>
        ),
      },
      {
        id: 'myth-filing-raises-rates',
        question:
          'If I file a claim, will my insurance rates automatically go up or will I be dropped?',
        answer: (
          <>
            <p>
              This fear stops many homeowners from filing legitimate claims, and while there is
              some basis for concern, the reality is more nuanced than the myth suggests. Under
              Proposition 103 (California Insurance Code Section 1861.05), all property and
              casualty rate changes in California must be filed with and approved by the
              Department of Insurance. An insurer cannot arbitrarily raise your rates solely
              because you filed one claim. Rate changes must be based on actuarial data, not
              punitive responses to individual claimants.
            </p>
            <p>
              That said, insurers do consider claims history as one factor in underwriting
              decisions. Filing multiple claims in a short period may affect your renewal terms.
              And in today's California market — where many insurers are non-renewing policies in
              wildfire-prone areas — there is a real concern about insurability. However, you pay
              premiums specifically so that you have coverage when you need it. Choosing not to
              file a legitimate claim means you are paying for insurance you never use — which is
              exactly what the insurer wants.
            </p>
            <p>
              Here is the practical advice: if you have a significant loss (more than a few
              thousand dollars above your deductible), file the claim. That is what insurance is
              for. If the loss is very small — barely above or at the deductible — you might
              weigh the cost-benefit more carefully. But never avoid filing a major claim out of
              fear of rate increases. California's regulatory framework provides meaningful
              protections, and if your insurer retaliates improperly, you have recourse through
              the CDI. A Public Adjuster can also advise you on whether filing makes sense for
              your specific situation.
            </p>
          </>
        ),
      },
      {
        id: 'myth-insurer-word-final',
        question:
          'The insurance company denied my claim and said the decision is final. Do I have to accept that?',
        answer: (
          <>
            <p>
              Absolutely not. An insurance company's denial is their position — it is not a court
              ruling, and it is not final unless you accept it or run out of time to challenge it.
              In California, you have multiple avenues to dispute a denial, and many initial
              denials are overturned when the policyholder pushes back with proper documentation
              and legal support.
            </p>
            <p>
              Your options include: requesting a detailed written explanation of the denial with
              specific policy citations (which the insurer is required to provide under 10 CCR
              2695.7(b)(1)); submitting additional evidence or documentation that addresses the
              insurer's stated reasons for denial; invoking the appraisal clause in your policy
              if the dispute is about the amount of loss; filing a complaint with the California
              Department of Insurance; and filing a lawsuit for breach of contract and/or
              insurance bad faith. Each option has its own timeline, and some can be pursued
              simultaneously.
            </p>
            <p>
              If your claim has been denied, the most important thing is to act quickly and get
              professional help. A Public Adjuster can review the denial, identify weaknesses in
              the insurer's position, and help you build a case for overturning it. If the denial
              involves a coverage dispute or potential bad faith, an attorney is essential. Many
              insurance coverage attorneys offer free consultations and work on contingency for
              bad faith claims. The insurer's "final" decision is only the beginning of your
              options — not the end.
            </p>
          </>
        ),
      },
    ],
  },
]
