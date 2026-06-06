import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'When the Victim Becomes the Villain: The Tort Reform Narrative and What It Costs Policyholders',
  description:
    'How the insurance industry spent hundreds of millions turning injured people into villains — and how that narrative directly undermines your insurance claim today. The real story of Stella Liebeck, the funding behind tort reform, and what it means for policyholders.',
  summary:
    'A decades-long, well-funded tort-reform campaign reframed injured claimants as greedy villains (the misrepresented Stella Liebeck case is the classic example). That narrative quietly biases adjusters and juries against your legitimate claim today.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational commentary by a Licensed California Public
          Adjuster. It is not legal advice. For legal questions about your specific
          situation, consult a licensed California attorney.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Everyone knows the story of the woman who spilled McDonald&rsquo;s coffee in her lap and won
        millions. It is one of the most famous lawsuits in American history, a shorthand for
        everything wrong with the legal system. The greedy plaintiff. The frivolous claim. The
        runaway jury handing out lottery-sized verdicts for trivial injuries.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Almost none of that story is true.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On February 27, 1992, Stella Liebeck, a seventy-nine-year-old retired department store clerk
        in Albuquerque, New Mexico, purchased a forty-nine-cent cup of coffee from a McDonald&rsquo;s
        drive-through. Her grandson was driving. The car had no cup holders. He parked so she could
        add cream and sugar. She placed the cup between her knees and pulled the lid toward her. The
        entire cup spilled into her lap.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What happened next was not a minor inconvenience. Liebeck suffered third-degree burns over
        six percent of her body, including her inner thighs, perineum, buttocks, and groin. An
        additional sixteen percent of her body sustained lesser burns. She was hospitalized for eight
        days, undergoing painful skin graft surgery and debridement &mdash; the medical procedure in
        which dead tissue is cut away from living flesh. She lost twenty pounds during treatment,
        dropping to eighty-three pounds. Her daughter took three weeks off work to care for her.
        Liebeck endured two years of medical treatment and was left with permanent disfigurement and
        partial disability.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This was not a woman who wanted to get rich. Stella Liebeck asked McDonald&rsquo;s to pay
        $20,000 &mdash; just enough to cover her medical bills: $10,500 in past medical expenses,
        $2,500 in anticipated future expenses, and $5,000 for her daughter&rsquo;s lost income.
        McDonald&rsquo;s offered $800.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The case went to trial. What the jury heard changed everything.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What the Jury Heard
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        McDonald&rsquo;s own documents told a story the company never wanted a jury to see.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Between 1982 and 1992, McDonald&rsquo;s had received <strong>more than 700
        reports</strong> of people being burned by its coffee, including reports involving children.
        The company had already <strong>settled burn claims for more than $500,000</strong>.
        McDonald&rsquo;s admitted it had known about the risk of serious burns for more than a
        decade.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        McDonald&rsquo;s operations manual required franchisees to hold coffee at <strong>180 to 190
        degrees Fahrenheit</strong>. At 190 degrees, coffee produces third-degree burns in
        approximately three seconds. At 180 degrees, it takes twelve to fifteen seconds. Other
        restaurants served coffee at approximately 160 degrees, which takes about twenty seconds to
        cause third-degree burns. Home coffee makers typically brew at 135 to 150 degrees.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Christopher Appleton, McDonald&rsquo;s quality assurance manager, testified that the company
        knew all foods hotter than 130 degrees constituted a burn hazard &mdash; but that
        <strong> McDonald&rsquo;s had no intention of reducing the holding temperature</strong> of
        its coffee. The Shriner Burn Institute in Cincinnati had published warnings to the franchise
        food industry that its members were unnecessarily causing serious scald burns by serving
        beverages above 130 degrees. McDonald&rsquo;s ignored those warnings too.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Robert Knall, a human-factors engineer testifying for McDonald&rsquo;s defense, told the
        jury that 700 complaints was about one in twenty-four million cups served and was
        <strong> &ldquo;basically trivially different from zero.&rdquo;</strong> The jury did not
        find this persuasive. As juror Betty Farnham told the <em>Wall Street Journal</em>:
        &ldquo;There was a person behind every number, and I don&rsquo;t think the corporation was
        attaching enough importance to that.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        After seven days of testimony and four hours of deliberation, the jury found McDonald&rsquo;s
        eighty percent responsible and Liebeck twenty percent at fault. They awarded $200,000 in
        compensatory damages, reduced to $160,000 to reflect Liebeck&rsquo;s comparative fault. Then
        they assessed <strong>$2.7 million in punitive damages</strong> &mdash; a figure calculated
        based on approximately two days of McDonald&rsquo;s coffee revenue.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Trial Judge Robert H. Scott reduced the punitive damages to $480,000 &mdash; three times the
        compensatory amount &mdash; for a total of $640,000, while noting that McDonald&rsquo;s
        behavior had been <strong>&ldquo;willful, wanton, and reckless.&rdquo;</strong> The parties
        later settled for a confidential amount reported to be less than $500,000. The money funded a
        live-in nurse for Liebeck. She died on August 5, 2004, at age ninety-one.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How the Story Was Rewritten
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        None of those facts made it into the public narrative. What the public heard was: a woman
        spilled coffee on herself and won $2.9 million from McDonald&rsquo;s.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The case was immediately seized upon by corporations, industry groups, and political
        operatives as Exhibit A for &ldquo;lawsuit abuse&rdquo; in America. The <strong>American
        Tort Reform Association</strong> &mdash; funded by Philip Morris, Dow Chemical, Exxon,
        General Electric, Aetna, GEICO, Nationwide, and other Fortune 500 companies &mdash; used the
        Liebeck case as a centerpiece of its campaign to restrict Americans&rsquo; access to the
        civil justice system. A website called the &ldquo;Stella Awards&rdquo; was created in 2002
        specifically to mock plaintiffs, using Liebeck&rsquo;s name as its brand.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <strong>U.S. Chamber of Commerce&rsquo;s Institute for Legal Reform</strong> &mdash;
        backed by AIG, Lloyd&rsquo;s, Travelers, Berkshire Hathaway, and State Farm &mdash; spent
        over $300 million on lobbying and poured $100 million into an antilawsuit publicity campaign.
        In 1994, political consultant <strong>Karl Rove</strong> &mdash; who was simultaneously a
        consultant to Philip Morris &mdash; made tort reform one of four centerpiece issues of George
        W. Bush&rsquo;s gubernatorial campaign in Texas, using the &ldquo;frivolous lawsuit&rdquo;
        narrative to reshape judicial elections across the country.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The tort reform message was simple: the legal system is broken. Plaintiffs are greedy. Juries
        are out of control. And the solution is to cap damages, restrict lawsuits, and make it harder
        for injured people to hold corporations accountable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What the public was never told is who was writing the script.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Who Benefits From Tort Reform
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance industry is not merely a supporter of the tort reform movement. It is the
        primary financial beneficiary.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When states cap damages, insurance companies pay less on claims. When courts restrict bad
        faith liability, insurance companies face less accountability for misconduct. When the public
        believes that lawsuits are frivolous and plaintiffs are predators, jurors walk into
        courtrooms already skeptical of the people asking for compensation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But here is what the insurance industry&rsquo;s own leaders have acknowledged:
        <strong> tort reform does not lower insurance premiums.</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sherman Joyce, president of the American Tort Reform Association, has stated: &ldquo;We
        wouldn&rsquo;t tell you that the reason to pass tort reform would be to reduce insurance
        rates.&rdquo; Victor Schwartz, ATRA&rsquo;s general counsel, indicated he has never claimed
        that restricting litigation lowers rates in thirty years of advocacy. The American Insurance
        Association itself stated: &ldquo;The insurance industry never promised that tort reform
        would achieve specific premium savings.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The evidence confirms this. Oklahoma saw medical malpractice premiums <strong>increase 83
        percent</strong> after enacting damage caps. Maryland and Missouri saw insurance rates
        <strong> rise</strong> following adoption of damage caps. A 2022 insurance market study found
        that while damage caps reduce insurance costs, premiums &ldquo;do not fall in parallel with
        costs,&rdquo; leading to &ldquo;sustained supranormal profits&rdquo; for insurers. National
        Association of Insurance Commissioners research found malpractice insurer profits are
        <strong> 24 percent higher</strong> in states with caps, and states with caps took in
        <strong> 3.5 times more in premiums</strong> than they paid out in 2008.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In 2024, the property and casualty insurance industry posted <strong>$169 billion in
        profits</strong> &mdash; a 90 percent increase from 2023 and a 333 percent jump from 2022,
        marking its twenty-third consecutive profitable year. In over 90 percent of U.S. zip codes,
        insurers collected more in premiums than they paid out in claims every year.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Tort reform did not save consumers money. It made insurance companies more profitable while
        making it harder for injured people &mdash; including insurance policyholders &mdash; to hold
        those companies accountable.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Infrastructure Behind the Narrative
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The tort reform narrative did not emerge organically. It was built, funded, and maintained by
        a network of organizations with deep ties to the insurance industry.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <strong>American Tort Reform Association</strong>, founded in 1986, represented
        approximately 300 organizational members &mdash; none of which represented workers,
        homeowners, or average citizens. Tobacco industry archive documents reveal that Philip Morris
        alone allocated approximately $5.5 million to ATRA in 1995 &mdash; more than half of the
        organization&rsquo;s $10.2 million total budget that year. Insurance firms individually
        contributed $50,000 to $75,000. Despite this corporate backing, ATRA describes itself as
        representing &ldquo;the average citizen.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <strong>Manhattan Institute</strong>, founded in 1978 by former CIA director William J.
        Casey, received $50,000 or more each from Aetna and State Farm Insurance, plus $15,000 or
        more each from Prudential, Exxon, and Philip Morris. Its fellows produced books and articles
        framing tort litigation as a crisis, though critics noted the work relied &ldquo;almost
        exclusively on anecdotal information and inflated rhetoric&rdquo; without empirically based
        analysis.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <strong>U.S. Chamber of Commerce&rsquo;s Institute for Legal Reform</strong> vowed to
        pump $10 million into ads in seven battleground states urging voters to support lawsuit
        restrictions. It spent approximately $1 million on a single judicial election campaign in
        Mississippi. Before its campaign ads, the Chamber had already poured $100 million into
        antilawsuit lobbying and publicity.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The result: according to researchers, <strong>83 percent of jurors</strong> now believe there
        are &ldquo;far too many frivolous lawsuits&rdquo; &mdash; even though RAND Institute for
        Civil Justice research shows that only 10 percent of injured Americans even file a claim,
        only 2 percent file lawsuits, and 75 percent of jury awards are less than $152,000.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What This Has to Do With Your Insurance Claim
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The connection between the tort reform narrative and your insurance claim is not theoretical.
        It is direct, concrete, and it affects your claim today.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you file an insurance claim and the insurer lowballs your payment, you have the legal
        right to challenge that payment. If the insurer acted unreasonably &mdash; if it failed to
        investigate fairly, if it ignored its own evidence, if it delayed payment to pressure you
        into accepting less &mdash; you may have a bad faith claim that entitles you to damages
        beyond the policy benefits.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But the tort reform narrative has poisoned the well. The same campaign that turned Stella
        Liebeck into a punchline has trained the American public to be suspicious of anyone who
        challenges a corporation. When a policyholder fights for full payment on a fire claim, the
        insurer&rsquo;s narrative writes itself: the homeowner is exaggerating. The contractor is
        gouging. The Public Adjuster is inflating the claim. The lawsuit is frivolous.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This narrative operates at every level of the insurance claim process:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>In the claims department</strong>, policyholders who push back on underpayment are
        flagged as difficult or adversarial. Those who hire Public Adjusters or attorneys are
        sometimes referred to Special Investigative Units &mdash; not because there is evidence of
        fraud, but because the act of hiring representation is treated as a red flag.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>In litigation</strong>, insurers invoke the &ldquo;genuine dispute doctrine&rdquo; to
        argue that even clearly underpaid claims were the subject of legitimate disagreement, and
        therefore no bad faith occurred. Jurors who have spent years absorbing the tort reform
        narrative &mdash; that lawsuits are frivolous, that plaintiffs are greedy, that corporations
        are under siege &mdash; bring that skepticism into the jury box.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>In the legislature</strong>, tort reform laws cap the very damages that give bad
        faith claims their deterrent power. When punitive damages are capped, the cost of bad faith
        to the insurer drops. When non-economic damages are restricted, the emotional devastation of
        a family displaced by a fire and then betrayed by their insurer becomes legally irrelevant.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The tort reform campaign did not just change the law. It changed the culture. And that
        cultural shift is what the insurance industry was paying for all along.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Real Human Stories They Do Not Want You to Hear
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The tort reform narrative works because it strips the humanity from the plaintiff. It reduces
        a burned grandmother to &ldquo;the coffee lady.&rdquo; It reduces a displaced family to
        &ldquo;a lawsuit.&rdquo; It reduces a widow who lost everything to &ldquo;a claim.&rdquo;
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Rosina Crisci (1967)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Rosina Crisci was a seventy-year-old immigrant widow who owned a small apartment building.
        When a staircase tread gave way, her tenant fell through and was left dangling fifteen feet
        above the ground. The tenant suffered physical injuries and developed severe psychosis.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Crisci held a $10,000 liability policy with Security Insurance Company. The tenant&rsquo;s
        attorneys initially demanded $400,000, then reduced their demand to $10,000 &mdash; exactly
        the policy limit. Security&rsquo;s own attorneys and claims manager believed a jury would
        likely award at least $100,000. Despite this, Security offered only $3,000 for physical
        injuries and nothing for the tenant&rsquo;s mental illness. Crisci herself offered to
        contribute $2,500 of her own money toward a $9,000 settlement. Security refused.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The jury awarded $101,000. Security paid its $10,000 limit and walked away, leaving Crisci
        responsible for $91,000. The injured parties accepted $22,000 from Crisci and took a 40
        percent interest in her real property. Crisci became indigent, working as a babysitter while
        her grandchildren paid her rent. Her health declined. She attempted suicide multiple times.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The California Supreme Court held that Security had breached its duty of good faith and
        awarded Crisci $91,000 plus $25,000 for mental suffering. The court recognized what the
        insurer refused to: that insurance is purchased for peace of mind, and that the destruction
        of that peace of mind through corporate indifference has real, devastating consequences.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        Michael Egan (1974)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Michael Egan was an Irish immigrant who supported his disabled wife and young daughter by
        working as a roofer in Pomona, California. One morning, a rung on his ladder broke and he
        fell twelve feet, severely injuring his back.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Egan held a disability policy with Mutual of Omaha promising $200 per month for life if he
        became totally disabled by accident. After paying benefits for a few months, the company
        reclassified his injury from &ldquo;accident&rdquo; to &ldquo;sickness&rdquo; &mdash; a
        change that limited his benefits to just three months. They cut him off around the same time
        his doctor declared him totally disabled after a failed back surgery.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        What happened next was not a bureaucratic error. A claims manager visited the Egan home,
        laughed at Michael, called him a fraud, and made the entire family cry. During a second
        visit, another employee informed Egan he no longer qualified for benefits and offered a small
        payment if he would surrender his policy entirely. Internal documents later revealed the
        company had reviewed Egan&rsquo;s file approximately twenty times during the
        reclassification period &mdash; contradicting the defense&rsquo;s claim that the file had
        simply been misplaced.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Attorney William Shernoff took the case to trial. The jury awarded $45,600 in compensatory
        damages, $78,000 for emotional distress, and $5.1 million in punitive damages &mdash; a
        state record. The California Supreme Court affirmed the verdict in 1979, establishing that
        insurance companies have a duty to conduct thorough, unbiased investigations before denying
        claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Michael Egan was not a predator. He was a roofer who fell off a ladder and asked his
        insurance company to honor its promise. The insurer chose to laugh at him instead.
      </p>

      <h3 className="text-xl font-semibold text-[#1F3964] mb-3">
        The Wildfire Families (2018&ndash;2025)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Camp Fire of 2018 destroyed over 19,000 structures in Paradise, California, and
        displaced roughly 50,000 people. Insurance was supposed to be their safety net. For many, it
        became another source of devastation. Construction costs doubled in the region due to demand
        surge, meaning insurance payouts could not keep pace with rebuilding costs. One insurer,
        Merced Property, went insolvent, leaving policyholders with unpaid claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Palisades and Eaton fires of January 2025 destroyed 16,000 structures and killed
        thirty-one people. Insured losses were estimated at $22 to $35 billion. More than 42,000
        claims were filed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Surveys of survivors paint a picture of systematic failure. United Policyholders surveyed 453
        households and the Department of Angels surveyed 2,443 adults, finding that <strong>80
        percent of insured survivors reported serious insurance claim issues</strong>. Eighty-three
        percent reported worsened mental health. Seventy percent were still not home months later.
        Nearly 50 percent had exhausted their savings. Forty-three percent had taken on debt. Half
        received lowball settlement offers. Nearly half experienced payment delays. And 69 percent of
        households reported being underinsured by an average of $247 per square foot.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        These families are not litigious predators. They are people whose homes burned down. They
        paid their premiums. They filed their claims. And they were met with delay, underpayment, and
        indifference &mdash; the same conduct that bad faith law was invented to prevent.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Product Liability Parallel
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is a legal principle that applies to McDonald&rsquo;s and to insurance companies
        equally, and understanding it helps explain why the law holds both to a higher standard than
        an individual.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In 1944, California Supreme Court Justice Roger Traynor wrote a concurrence in <em>Escola v.
        Coca-Cola Bottling Co.</em> that would reshape American law. Traynor argued that when a
        manufacturer places a product on the market, the cost of injuries from defective products
        should be borne by the manufacturer &mdash; not the consumer &mdash; because the
        manufacturer is in the best position to prevent harm and can distribute the cost across all
        sales.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In 1963, in <em>Greenman v. Yuba Power Products, Inc.</em>, Traynor (now writing for the
        majority) established the doctrine of strict product liability: a manufacturer is liable for
        injuries caused by defective products regardless of whether the manufacturer was negligent.
        The rationale was that the manufacturer profits from millions of individual sales and is the
        entity best positioned to prevent harm, detect defects, and absorb the cost of the
        occasional injury by spreading it across the entire customer base.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The parallel to insurance is direct. Insurance companies collect premiums from millions of
        policyholders. They are the entities best positioned to investigate claims fairly, pay what
        is owed, and absorb the cost of doing so. When an insurer denies a legitimate claim or
        delays payment for months or years, the cost falls entirely on the individual policyholder
        &mdash; the family living in a hotel, the homeowner watching their credit collapse, the
        business owner who cannot reopen. As Traynor wrote, that cost &ldquo;may be an overwhelming
        misfortune to the person injured, and a needless one.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The tort reform movement exists to take that remedy away.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Numbers Behind the Narrative
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance industry and its allies spend enormous sums telling the public that fraud is
        rampant and lawsuits are out of control. The Coalition Against Insurance Fraud claims that
        fraud costs Americans $308.6 billion annually. Industry sources claim 10 to 20 percent of
        claims contain some element of fraud.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But the actual data tells a different story.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The RAND Institute for Civil Justice found that only <strong>10 percent of injured
        Americans</strong> even file a claim for compensation &mdash; including informal demands
        &mdash; and only <strong>2 percent file lawsuits</strong>. Seventy-five percent of jury
        awards in tort cases are less than $152,000. Only 0.2 percent of cases had judgments
        exceeding $500,000, and less than 0.1 percent exceeded $1 million.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A 2020 survey of 7,000 people found that <strong>78 percent hired lawyers due to poor claims
        experiences</strong> &mdash; delays, denials, or insufficient offers from insurers. They did
        not hire lawyers to game the system. They hired lawyers because the system was not working.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The &ldquo;fraud epidemic&rdquo; narrative serves the same function as the &ldquo;frivolous
        lawsuit&rdquo; narrative: it shifts the frame from the company&rsquo;s misconduct to the
        claimant&rsquo;s character. When an insurer refers a legitimate claim to its Special
        Investigative Unit, it transforms the policyholder from a customer seeking payment into a
        suspect under investigation. The claim slows down. The policyholder becomes anxious and
        defensive. The power dynamic shifts entirely in the insurer&rsquo;s favor.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Stella Liebeck and Your Insurance Claim Have in Common
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Stella Liebeck wanted $20,000 to pay her medical bills. McDonald&rsquo;s offered $800. The
        case went to trial not because Liebeck was greedy, but because McDonald&rsquo;s refused to
        take responsibility for serving a dangerous product to a seventy-nine-year-old woman.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When a homeowner whose house has been destroyed by fire asks the insurance company to pay for
        the repairs &mdash; and the insurer offers half of what it costs, or delays payment for
        months while the family lives in a hotel, or sends an engineer to write a report minimizing
        the damage &mdash; the dynamic is identical. The policyholder is not looking for a windfall.
        They are asking the company to honor its promise. And when the company refuses, the
        policyholder is left with a choice: accept the underpayment, or fight.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If they fight, the tort reform narrative is waiting for them. They are the greedy plaintiff.
        Their contractor is the gouging vendor. Their Public Adjuster is the ambulance chaser. Their
        lawsuit is the frivolous claim. The entire apparatus of tort reform &mdash; the think tanks,
        the lobbying groups, the judicial election campaigns, the &ldquo;lawsuit abuse&rdquo; talking
        points &mdash; exists to make sure that when a policyholder walks into a courtroom, the jury
        is already skeptical.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The tort reform movement did not invent bad faith. Insurance companies were mistreating
        policyholders long before Karl Rove made tort reform a political weapon. But the tort reform
        movement created the cultural environment in which bad faith thrives. It trained the public
        to sympathize with the corporation and suspect the victim. It made policyholders ashamed to
        assert their rights. And it gave insurance companies the political cover to push for laws
        that cap the damages that make bad faith claims worth pursuing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Stella Liebeck was not a predator. She was a grandmother who was badly burned by a
        corporation that knew its product was dangerous and chose to serve it anyway. The families
        displaced by wildfires, the homeowners waiting months for claim payments, the policyholders
        forced to hire attorneys just to get the benefits they were promised &mdash; they are not
        predators either. They are people who bought a product, were harmed by its failure, and had
        the audacity to ask for what they were owed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        The tort reform narrative exists to make that audacity look like greed. Understanding this is
        the first step to seeing through it.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Key Cases Referenced
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><em>Escola v. Coca-Cola Bottling Co.</em> (1944) 24 Cal.2d 453</li>
        <li><em>Greenman v. Yuba Power Products, Inc.</em> (1963) 59 Cal.2d 57</li>
        <li><em>Crisci v. Security Insurance Co.</em> (1967) 66 Cal.2d 425</li>
        <li><em>Egan v. Mutual of Omaha Insurance Co.</em> (1979) 24 Cal.3d 809</li>
        <li><em>Liebeck v. McDonald&rsquo;s Restaurants</em> (1994) No. D-202 CV-93-02419 (N.M. Dist. Ct.)</li>
      </ul>
      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        This article is for informational purposes only and does not constitute legal advice.
        Insurance policies and applicable law vary by state and by policy form. Consult with a
        licensed professional regarding your specific situation.
      </p>
      <p className="text-sm text-gray-500 mt-4 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
