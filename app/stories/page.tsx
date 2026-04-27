import type { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Real Stories from the Claims Trenches | Games Insurers Play',
  description:
    '35 real insurance claim stories from a California Licensed Public Adjuster — lowball offers, delay tactics, depreciation tricks, preferred vendor traps, and more.',
}

const PARTS = [
  {
    id: 'lowball',
    title: 'Part I: The Lowball',
    subtitle: 'When the check arrives but the math doesn\'t add up.',
    stories: [
      {
        id: 'cat-adjuster-dilemma',
        num: 1,
        title: 'The Cat Adjuster\'s Dilemma: $200,000 of Damage Written Up as $50,000',
        source: 'Claims Adjuster Network',
        date: 'October 2024',
        text: `Years ago it was normal for real adjusters who knew construction to have the experience and confidence to write for things like concrete and framing. Nowadays the carriers don't like it unless you have an opinion from an engineer. Of course the modern insurance carriers are going to love any kind of hurdle that delays or blocks a payment.

Don't believe me? Look how advance payments have almost completely gone away. Having the guts and the experience to eyeball $200,000 of damage and ask for a $100,000 advance payment the insured receives a few days later is how claims were adjusted for decades or longer. Not anymore.

So now we have adjusters that somehow think that's the most ethical and logical path to take — be super obedient and compliant with the file examiner who probably knows almost nothing. They won't write for major repairs unless an engineer tells them the obvious.

The modern way is to have a desk adjuster who's never built anything, doesn't have a contractor's license, doesn't know how to use Xactimate, doesn't know how to properly estimate — basically knows nothing — tell the field adjuster not to write what they see, and then have some weird justification for it. Sometimes nowadays I see adjusters who really believe that their lower numbers are correct and they actually have no idea that the contractor, plaintiff attorney, or public adjuster is getting so much more money paid later. Imagine going out to a house with $200,000 of damage and really believing that it's only $50,000 and even worse, imagine writing multiple estimates like that all over town and never having any idea that every one of those claims is getting a $150,000 supplement.

The cat adjusters who fall for this are just cutting their own throats with lower payouts. And when that claim increases by $100,000 or $200,000, the original catastrophe adjuster isn't going to see any percentage of that.`,
      },
      {
        id: 'preferred-vendor-bait-switch',
        num: 2,
        title: 'The Preferred Vendor Bait-and-Switch: "$50K to Start, Supplements Later"',
        source: 'Claims Adjuster Network',
        date: 'September 2024',
        text: `As a Public Adjuster I see this all the time. Many of the preferred vendor contractors are not very good. But there's a lot to unpack here.

A common game that's played in the business is for the insurance adjuster to refuse to include the granite countertop but let the contractor know he can supplement for it if he does in fact break it. The contractor fully expects to break it and once they break it they send in the supplement.

Here's what I see from many years of experience: the homeowner's contractor comes in at $70,000. The preferred vendor writes an estimate for $50,000, perhaps with some open items or a disclaimer that they might need to supplement for "hidden damage." Then the homeowner decides to hire the "cheaper" preferred vendor, perhaps at the urging of the insurance adjuster. Once in a while the preferred vendor might admit verbally they can't actually do the job for $50,000 and they fully intend to supplement. So the preferred vendor starts the job and then issues supplements for things that break and would have broken anyway. They supplement for things that they overlooked either by accident or on purpose. And lo and behold their total comes out to be $82,000 — more than the homeowner's contractor originally estimated. But it gets approved by the adjuster.

In my experience it's more likely for an insurance adjuster to approve a supplement from a preferred vendor that they feel friendly with, rather than to approve a legitimate estimate from the insured's contractor in the first place.

I've seen it working for two restoration contractors, I've seen it during my long career as an independent adjuster doing both heavy daily claims work and catastrophe work, I've seen it as a Public Adjuster and I've seen it as an appraiser. It's almost routine.

There's a very experienced restoration contractor I work with who's very good at getting people to talk. Several times he's gotten insurance company preferred vendors to straight up admit to him they wouldn't be profitable doing the job for the amount they estimated, and they relied on getting supplements approved.`,
      },
      {
        id: 'state-farm-elderly',
        num: 3,
        title: 'State Farm and the Elderly Couple: 30 Years of Loyalty, Zero Benefit of the Doubt',
        source: 'Roofing Sales and Claims Discussions',
        date: 'June 2024',
        text: `I worked for State Farm on Katrina. They were pretty honest in Louisiana but I saw them cheat people really hard in Mississippi. One of the things the engineering firms did was change engineering reports over the signature of the engineers. That's why engineers went to jail. State Farm put a lot of pressure on those engineering companies to make sure the claims were denied.

I'll tell you one example. I know a very nice elderly couple that has had State Farm for 30-plus years. They insured two houses, several vehicles, and their business with State Farm for decades. They had a sudden burst pipe in their dining area. The plumber determined it was a sudden leak — which it obviously was. There was no staining or mold or discoloration, no evidence whatsoever it had been leaking for a while.

The adjuster lied and said that the plumber told him it was a long-term leak. The plumber wasn't stupid and had experience in the business and swore that he had never even spoken to the adjuster. The adjuster also stated it was "reasonable to assume" it was long-term. Which of course is ridiculous — the insurance company has the burden of proof to prove the exclusion applies. You can't exclude a loss because of an assumption, especially an assumption that's not based on any evidence.

So these people had their claim denied after being a loyal customer for so many decades. This is just typical. These stories happen every day. That's just an average story, that's not one of the worst stories.`,
      },
      {
        id: 'electrical-claim-unlicensed',
        num: 4,
        title: 'The $100,000 Electrical Claim Estimated at $30,000 by an Unlicensed Outfit',
        source: 'Public Adjuster/Attorney Portal',
        date: 'July 2025',
        text: `I have a claim in California with commercial electrical damage. The repairs were estimated at about $100,000. The insurance company sent out a local California commercial electrician who also privately estimated to me in writing that it was a $100,000 repair. But this outfit in Texas — neither a licensed contractor nor a licensed adjuster — took his photos and wrote an estimate for $30,000.

Someone help me make it make sense. It's totally fraudulent dirty behavior in my opinion. When stuff like that happens the insured or their representative should object to the use of an unlicensed, unqualified person. In this case the company who wrote the estimate is not qualified in two different ways. First, you can't have someone who is not a licensed electrician write a credible bid for doing electrical work, especially commercial. The bid is not believable because it's not from someone who can actually do the work legally. And secondly it's doubtful that they have the experience and knowledge to write that estimate either.

The insurance company knows this or should know this. It's hard to imagine a world where the insurance company doesn't know it's wrong to rely on bids from people who can't legally do the work and don't have the minimum qualifications. How can they really call that a "genuine dispute"?`,
      },
      {
        id: 'auto-shop-owner',
        num: 5,
        title: 'The Auto Shop Owner Who Lost Everything: $700K of Equipment, $40K of Coverage',
        source: 'Facebook',
        date: 'July 2023',
        text: `Here's a typical story. When I was an adjuster I had a claim where a Ford F-150 pickup truck spontaneously combusted — you can look it up, they've been known to do that. The fire destroyed an automotive repair shop. The owner had come to America with almost no money and slowly but surely built up the business to where he was handling the local police and city cars. He had about eight or nine bays and a couple hundred thousand dollars worth of smog equipment among all the other tools. It had to be at least $700,000 or $800,000 of equipment. It had taken him years to build up to that point.

But the shop owner only had about $40,000 worth of business personal property coverage. That was the amount that had been set up maybe 15 or 20 years earlier and it had never been increased. So I asked him who his insurance agent was and he told me it was a friend from school years earlier. In 20 years you couldn't call your friend and say "hey let's go over your coverages?" By the way, that phone call would benefit the customer and the agent both in several ways. It's also an opportunity for the agent to sell additional coverage. So I really can't respect agents that neglect their customers that way. Maybe just once every five years call people up? It's something that not only is the right thing to do but also gets rewarded with more income for the agent. So what's the excuse?`,
      },
    ],
  },
  {
    id: 'delay',
    title: 'Part II: The Delay Game',
    subtitle: 'When the clock becomes the insurance company\'s best weapon.',
    stories: [
      {
        id: 'dumbest-adjusters',
        num: 6,
        title: 'The Dumbest Adjusters on Purpose: How Carriers Hire Inexperience to Save Money',
        source: 'Facebook',
        date: 'October 2024',
        text: `Years ago a young lady reached out to me. She was a video editor in Hollywood, California. She was partnering up with an ex-desk adjuster on a Florida hurricane who wanted to make the big money doing field adjusting. They had an informal partnership where he would do the inspections and she would write up the estimates. She came to my house at least twice and I really tried hard to help her, but as hard as I tried I couldn't even help her write one of the estimates from the documentation her partner created. He made hand-drawn floor plans that were missing most of the measurements.

Also it was clear from the photos the guy wasn't climbing on the roof because the photos were taken from about one foot above the gutter at the top of the ladder. He did get fired. His claims were reassigned. The guy was assigned 10 claims and even with help wasn't able to close a single one of them.

I talked to a really well-known adjuster, Chuck Deaton out of Arkansas (since passed away, but he was kind of famous in the industry because he mentored so many people). He told me about a husband and wife team that had been doing catastrophe claims for mobile homes for maybe 30 years. They were top-notch adjusters, well respected and very fast. They had an RV and were ready to go at a moment's notice. They were told to stand down on one of those hurricanes that hit the Florida Panhandle.

That's the same hurricane my video editor was getting claims assigned indirectly. The carriers made a move to hire the dumbest, newest people and give them only 10 claims each while turning away their experienced adjusters.

This was a craven decision made to save money. And it's actually a very effective way to save money. The new adjusters are paid less money. They're pressured to do the inspections, which satisfies state government regulatory requirements. They don't know how to write a proper estimate so naturally the dollar amount is lower, and also the commission paid to the adjuster is lower. And the insurance company knows they can have a desk adjuster in another state at a low salary fix the claims months or even years later. This also allows them to make interest on the money they're holding. This is the new business model for a lot of insurance carriers.`,
      },
      {
        id: 'art-of-war',
        num: 7,
        title: 'The Art of War in Claims: How Ignoring an Adjuster Got a $90,000 Check',
        source: 'Storm Ventures Group',
        date: 'April 2021',
        text: `Have you ever called another adjuster at the carrier to ask what the problem is with the one assigned to your claim? Have you ever sent in an Itel without identifying the carrier or claim number? Have you ever decided not to do a particular task, but to delegate it because your personality wasn't a good fit? Have you ever studied the building code or policy or insurance regulations but then kept your mouth shut during discussions, waiting for the adjuster to make a documented mistake you could use against them to win later? Have you ever been so mad that you wanted to demand appraisal but you waited until the timing was better?

If so, you have been using the tactics in a book written by a Chinese general 2,500 years ago. This book was on the United States Marine Corps reading list for a while. Many Los Angeles attorneys have told me they read this book.

I will tell some stories about claims negotiations like the time I convinced the carrier to investigate the electrical problems in a water loss and their "expert" started a fire — but the carrier did not yet even know I was involved in the claim.

For example, I just received a check a week ago for $90,000 to cover building permits and architectural fees. I was surprised the adjuster sent it, but we got it because I didn't ask for it and ignored the adjuster for weeks. We were hoping for much less.`,
      },
      {
        id: 'letter-never-written',
        num: 8,
        title: 'The Letter That Should Never Need to Be Written',
        source: 'Level the Playingfield',
        date: 'January 2025',
        text: `This is a long post but for an educational reason. I'm trying to write a comprehensive letter to an insurance company about their bad claim handling of a property claim. The property suffered a water leak and the insurance company paid a little bit but it wasn't adequate. Then the insured hired me and we sent in a much more detailed and accurate professional estimate which the insurance company didn't want to pay. So instead of paying it like they should, or coming up with some legitimate reason not to, they decided to send their own general contractor expert who wrote an estimate that was lower than ours but much higher than the one the insurance company originally wrote.

And then the insurance company sat on that estimate for months and months and never paid it, even though there are statutes in California that require them to pay it or deny it. There have been multiple statutory violations by the insurance company. Plus they didn't act in good faith.

So then they had lots of different insurance adjusters assigned — more than three — and when they do that there's another statute that says the insurance company has to give a special status report upon request of the insured. Finally after months they decided to pay their own contractor's estimate, but when they did, they applied 25% depreciation across the board which violates other statutes and case law. For one thing, you can't depreciate everything the same way. In California you can't depreciate labor. You can't depreciate materials that don't normally wear out during the life of the house. And you have to base the depreciation on the condition at the time of the loss, not age.`,
      },
    ],
  },
  {
    id: 'depreciation',
    title: 'Part III: The Depreciation Squeeze',
    subtitle: 'When carriers use depreciation as a weapon rather than a measurement.',
    stories: [
      {
        id: 'depreciation-rules-ignored',
        num: 9,
        title: 'The California Depreciation Rules That Carriers Routinely Ignore',
        source: 'Appraisal and Umpire Forum',
        date: 'February 2026',
        text: `In California you're not allowed to depreciate labor. You can't depreciate materials that don't normally wear out during the life of the house. Depreciation has to be reasonable. You can't apply blanket depreciation to the whole job.

One of the little-known Fair Claims rules is that you're not allowed to apply depreciation to areas that are undamaged and only being replaced to achieve a uniform reasonable appearance — which means you could apply depreciation to the damaged slope of the roof but not to the slope that is also being replaced to achieve matching.

And for personal property, we have Doan v. State Farm, which says you have to base depreciation on condition at the time of the loss, not age. And although that case is for personal property, I believe the same reasoning should be applied to building materials, which is pretty much the consensus in the industry anyway even among insurance adjusters.`,
      },
      {
        id: 'blanket-depreciation',
        num: 10,
        title: 'The 25% Blanket Depreciation on a Water Loss',
        source: 'Contractors Helping Contractors',
        date: 'September 2025',
        text: `I am a former catastrophe adjuster and former daily claims adjuster. I currently work as a public adjuster in California. My profession is to negotiate better property settlements with insurance carriers.

One common tactic I see is insurance companies applying blanket depreciation — the same percentage to every single line item regardless of what it is. They'll take 25% off the entire estimate. But you can't depreciate labor in California. You can't depreciate copper pipe that was in fine condition before the loss. You can't depreciate a subfloor that had decades of useful life remaining. The depreciation has to be item-by-item, reasonable, and based on the actual condition — not just a flat percentage slapped across the board because it's easier for the desk adjuster.

When I challenge this, adjusters often admit to me they're inexperienced and they really don't know any better. But the insurance company knows. And the blanket depreciation consistently goes in one direction: it saves the insurance company money at the expense of the policyholder.`,
      },
      {
        id: 'op-regulation',
        num: 11,
        title: 'The O&P Fight: A Regulation They Pretend Doesn\'t Exist',
        source: 'Level the Playingfield',
        date: 'December 2025',
        text: `Here's a California regulation that requires the insurance company to pay for overhead and profit. The same regulation requires the insurance company to pay for grass cloth wallpaper if you had grass cloth wallpaper, and it also requires the insurance company to pay for necessary temporary toilets for the workers. It just doesn't specify all of those details.

The regulation reads: "When a loss requires repair or replacement of an item or part, any consequential physical damage incurred in making the repair or replacement not otherwise excluded by the policy shall be included in the loss. The insured shall not have to pay for depreciation nor any other cost except for the applicable deductible."

"Shall not have to pay...any other cost." That's the wording right there. Overhead and profit is a necessary and reasonable cost for the contractor and is incorporated into the contractor's normal total price whether or not it's itemized. And the insured should not have to pay that out of pocket. The insurance company generally owes the overhead and profit that a general contractor would charge if a general contractor would be reasonably necessary. And the answer to that can be "yes" even if the homeowner intends to do their own work. The answer is not predicated on who does the work but whether it would generally be necessary based on the type of project.`,
      },
    ],
  },
  {
    id: 'scope-shrinking',
    title: 'Part IV: Scope Shrinking',
    subtitle: 'When damage mysteriously disappears from the estimate.',
    stories: [
      {
        id: 'engineer-paint-blend',
        num: 12,
        title: 'The Engineer Who Decided Paint Could Be "Blended In" on a Flat Wall',
        source: 'Claims Adjuster Network',
        date: 'May 2025',
        text: `So many insurance companies don't properly scope damage. So many adjusters don't do it. And then of course sadly, they jump on social media and say that it never happens. It happens all the time.

I worked in construction before I became an adjuster. I sold flooring and granite countertops. I managed lots of six-figure repair projects. But most adjusters don't have any of that background anymore. It's very frustrating and sad, the lack of professionalism with modern adjusters. They don't know anything about construction or material identification and they really don't care. When they send engineers it's just a pretext for a denial.

For example, I had a claim about a year ago where the insurance company hired an engineer. The engineer wrote an Xactimate repair estimate like a contractor would. This junior engineer employee — who was not even a licensed engineer himself — decided the paint could be blended in on a long wall and it didn't even need to have the one wall painted corner to corner.

Even Farmers Insurance doesn't do that. I've never heard of an insurance company not being willing to paint an entire wall corner to corner. There are insurance companies who will try to paint just one wall or maybe two coats on one wall and one coat on the others, but I've never in 20 years seen an insurance company try to paint only part of a wall. This is one long flat wall with no corners.

This was totally outside of the engineer's expertise and licensing, but of course this individual wasn't even licensed. Whether or not a wall has to be painted is really more in the skill set of an architect, a painting contractor, or a restoration contractor. You can make the argument that any one of those professionals could give a reliable opinion. But an engineer? Why is an engineer determining the cost and methods of construction labor? It's a cosmetic question, not a structural question.

We had to go to appraisal to get money for painting the whole wall. And the insurance company's chosen appraiser agreed with us.`,
      },
      {
        id: 'red-flags-contractor',
        num: 13,
        title: 'Red Flags When the Insurance Company Sends Their Own Contractor',
        source: 'Claims Adjuster Network',
        date: 'January 2026',
        text: `When the insurance adjuster sends a contractor to provide a comparative estimate there are often red flags.

One red flag is if they tell the homeowner they have to write the estimate low to keep the insurance company happy but they will supplement it later — but only if they first get hired by the homeowner. I've had that scenario happen many times and it's always a red flag.

Another red flag is if the comparative bid contractor normally writes all of their estimates in Xactimate but suddenly they're writing it in Symbility because the carrier asked them to. That's always a huge red flag which usually means the estimate will be about 30% lower than what will end up being determined months later in appraisal.

A red flag that often comes up is the estimate from the preferred vendor won't even be written on the preferred vendor's letterhead — it will show up on the adjuster's letterhead. Which of course is illegal in many states, especially California, where a contractor can't prepare an estimate and not put their name and license number on it.

I also see frequently that the insured might have an expert report that is very detailed, and the insurance company has one that leaves out a lot of information. For example, I have smoke damage claims in the Palisades where the insurance company hygienist has been told to only test for lead and asbestos, in spite of the fact the insured has already obtained a report from a well-respected hygienist who found things like arsenic and mercury. And the insurance adjuster will not inform their supposed cleaning expert that mercury was found. It's always a red flag when the adjuster hides information from their own vendor. And very often when I inform the vendor what's really been found at the property, they immediately back off because they're not qualified to clean the property or sometimes they're not even licensed to do it.`,
      },
      {
        id: 'contractor-quiet-part',
        num: 14,
        title: 'The Contractor Who Told the Homeowner the Quiet Part Out Loud',
        source: 'State Farm Insurance SUCKS!!',
        date: 'June 2025',
        text: `This is more and more common lately: an adjuster will randomly claim they've overpaid something and then refuse to pay some other part of the claim, often ALE (additional living expenses). I have one like this in litigation right now.

The carrier sent out a contractor to reinspect and that guy straight up told the homeowner that he was going to write the estimate low and would increase it $30,000 with supplements if the homeowner actually followed through and hired him. So then the third insurance adjuster had the audacity to tell me the dollar amount from their contractor was the number they were going to use to settle the claim, and since it was lower than what they'd already paid, they were going to refuse to pay $8,000 of temporary housing.

So I called the adjuster and explained what the contractor said during his visit, and the adjuster refused to believe me. But the bad faith kicks in when I gave the information to the adjuster and he did nothing to investigate to see if what I was saying was true. It's probably not bad faith for him to be skeptical of the story, but it is bad faith for him not to lift a finger to investigate it when it turns out to actually be true.

Another thing on this claim: they sent out an overzealous field adjuster for the first inspection who started telling the water mitigation company not to remove drywall that was already marked for removal. One of the later field adjusters who came on a reinspection admitted to me that she had a bad reputation for doing things like that and she'd already been fired by the time the new guy showed up. But when I called the desk adjuster, he refused to believe me.`,
      },
      {
        id: 'contents-claim-ai',
        num: 15,
        title: 'The Contents Claim: When AI Catches What Adjusters Miss',
        source: 'LA Attorney Network / Level the Playingfield',
        date: 'July-August 2025',
        text: `On this particular claim the carrier paid about $250,000 for personal property and then notified the insured they were going to take back $8,000 from her housing money because they supposedly overpaid her for personal property. This is a tactic that I see more frequently lately.

With a very detailed inventory, especially with the granular quality of AI, we can get the contents claim up much higher than $250,000. There are many tiny items that are hard to inventory just from the sheer volume of work. If you open up a travel toiletries bag and your camera catches a glimpse of a nail clipper, the AI will recognize it, identify it, and price it. All those little things like a half-used packet of paper clips really add up to way more money than you would expect. And it's all accurate and very difficult for the insurance company to disagree with.

I was thinking the other day: does the carrier owe for half a pack of Q-tips or the full pack? It's a good argument that you can't buy a half pack. I'm doing contents inventories in the Palisades and a lot of people have half a container of shampoo. But what I think is worth arguing over is when you have 500 contents items with light contamination that could theoretically be cleaned — a lot of times it's just not worth it because you have to consider the packing, the inventory, the transportation, the loading, the unloading, the storing for months, bringing it back, inventorying it again, throwing away the packing materials. If you have 500 relatively inexpensive items, it's going to cost way more money to deal with it than it is to just replace it.`,
      },
    ],
  },
  {
    id: 'preferred-vendor',
    title: 'Part V: The Preferred Vendor Trap',
    subtitle: 'When the insurance company\'s "recommended" contractor works for the wrong team.',
    stories: [
      {
        id: 'preferred-vendor-substandard',
        num: 16,
        title: 'The Preferred Vendor Problem: Substandard Work, Full Payment',
        source: 'Insurance Claims Questions, Discussions & Education',
        date: 'October 2024',
        text: `In my experience it's very common for preferred vendors of the carriers to do substandard work. I've seen it many times. There are some very good ones, but it's not unusual for them to do poor quality work. It's not unusual for them to skip things on the scope of work.

Another problem is the timing of the payments. Very often the payment from the carrier will have the contractor's name on it and they're getting paid way in advance of what they otherwise would be. For example, if you have a $230,000 repair job including the pending supplemental estimates and the insurance company pays the first agreed-upon $212,000 but puts the contractor's name on it, a lot of times the homeowner will turn that whole check over to the contractor before they even start work. Or even worse, the adjuster might mail it directly to the contractor, who even worse still might negotiate it without the homeowner's signature.

I'm certainly not trying to say all of these preferred vendors are bad — I worked for one that was very good quality. But many of them consider the insurance company to be their customer because that's who's feeding them. And the homeowner is treated like a second-class citizen.

Many times I've been asked to do a detailed inspection and make note of everything that was on the approved estimate but not done by the contractor. If the homeowner goes to the insurance company and points out all these problems with their recommended vendor, the insurance company will typically say it's not their problem and they're not responsible. They'll even go so far as to say they never recommended the contractor in the first place.`,
      },
      {
        id: 'contractor-abandonment-mold',
        num: 17,
        title: 'The Contractor Abandonment and the Mold That Followed',
        source: 'Level the Playingfield',
        date: 'November 2023',
        text: `In California a contractor can get in trouble with the Contractor State License Board for "abandonment of job." Contractors can protect themselves from false accusations of abandonment by responding in writing to verbal termination of a contract.

Sometimes mold will grow when a preferred vendor abandons a job, and it won't be paid by the insurance company either — because the insurance company will claim the insured failed to mitigate, or the mold damages might exceed a $10,000 mold sub-limit. In that case the contractor who abandoned the job, resulting in additional mold, could be liable to the insured for those costs that aren't covered by insurance. The insured can also have health problems — breathing in mold and getting sick would not be covered specifically by the insurance policy but would potentially be a liability of the bad contractor, and it could also become an extra-contractual liability of the insurance company if you could show that they were negligent in their recommendation.

Sometimes bad faith attorneys will try to draw in the insurance company by showing the insurance company has a pattern and practice of using preferred vendors who take shortcuts. But it's hard to pin the liability on the insurance company for merely recommending someone unless you can show it was a negligent recommendation because they knew or should have known the contractor wasn't licensed or qualified.

You have a better chance of making the insurance company liable if you have a smoking gun — like an email from the adjuster to the mitigation contractor telling them to stop drying because it's already been three days and it should be dry already. Or an email from the mitigation contractor saying they need to pull the cabinets in order to dry behind them and the adjuster telling them not to.`,
      },
    ],
  },
  {
    id: 'policy-language',
    title: 'Part VI: Policy Language Games',
    subtitle: 'When carriers weaponize ambiguity against the people who didn\'t write the contract.',
    stories: [
      {
        id: 'read-the-policy',
        num: 18,
        title: '"You Need to Read the Policy" — The Advice That Shows You Don\'t Know What You\'re Talking About',
        source: 'Insurance Claims Questions, Discussions & Education',
        date: 'January 2025',
        text: `People saying you have to read the policy don't actually know what they're talking about. They think they do, they really believe that, but it shows a level of ignorance. Because the policy is not going to tell you what the case law says and it's not going to tell you about the culture of the insurance company either. And those two things are probably at least as important as the policy.

If your loved one died a natural death, some insurance companies would interpret that as not being an "accident." They would not pay for any of the damages on the idea that it wasn't a sudden accidental physical loss. But this is not something that the policy spells out — it's an interpretation. Whether it's a correct interpretation is in the eye of the beholder. And your state's case law probably gives the answer.

You're never going to find an insurance policy that says "we will pay for the cleanup of body fluids from a person who died a natural death sitting in their chair." It's not going to say anything even remotely resembling that. So it's ridiculous how many people automatically give the knee-jerk response that you need to "read the policy."

Another coverage issue: suicide. Let's say the policy was a named peril policy like one of the state FAIR plans. In that case you'd be looking at a denial in most cases. But if someone shot themselves with a firearm — an actual firearm that uses gunpowder — then it could be considered the Peril of Explosion and the loss could be covered. I handled claims for about nine years for the California FAIR Plan and we routinely paid for things like this under the Peril of Explosion. But the last few years I worked there, the carrier's defense attorneys got involved and started talking about denying suicide claims using the theory that it was an intentional act. I believe there's some case law that counters that theory but I've never researched it thoroughly.`,
      },
      {
        id: 'state-farm-slab-leak',
        num: 19,
        title: 'State Farm and the Slab Leak: A Masterclass in Creative Denial',
        source: 'Adjuster Central',
        date: 'February 2024',
        text: `State Farm will typically exclude almost any water leak regardless of the evidence. With slab leaks, State Farm will sometimes insist that the homeowner jackhammer their slab even if they've already rerouted around the leak. For example, let's say a homeowner has a slab leak in a bathroom and rather than jackhammer the slab, the plumber recommends simply rerouting up through the wall and through the ceiling. I've had several claims where State Farm demanded the insured jackhammer the undamaged concrete floor so that State Farm could examine the actual leak — even though there's no such requirement in the policy and it's not reasonable to insist that the insured jackhammer their undamaged slab in order to help State Farm gather evidence that might help State Farm deny the claim.

What they're looking for is a pretext to say the leak was caused by lack of maintenance of the copper pipe, or wear and tear. But it's very common for State Farm to claim everything is long-term seepage even if there's no evidence of rot, odor, or discoloration, and they'll even do it when there's clear evidence that the water was squirting in a sudden burst.

Twice I've had State Farm adjusters lie and say that they spoke to the plumber and that the plumber reported long-term seepage, and I've checked with the plumbers later — both were very experienced plumbers and they insisted that they had never even spoken to the State Farm adjuster.

Another thing State Farm will do: if a pipe is underneath the slab they will say that it's an "underground pipe" and invoke the exclusion. But if a pipe is underneath the slab it's in the fill dirt most of the time. It's well above grade, maybe a foot above grade. The fill dirt is between the footings, it's a structural element, it's often imported from another area, compacted, and shown on the building plans. But most importantly, when it's above the natural grade I don't think it's accurate to say that it's underground. If six people think it's underground and six people think it's not, then it's an ambiguity that needs to be decided in favor of the insured according to the contra proferentem rule.

I had one case where State Farm just randomly made up stories and said the pipe was below the slab, and we proved it was in the slab by using ground-penetrating radar. But of course State Farm didn't trust our evidence and hired their own company to do another ground-penetrating radar test. I've also had cases where the slabs are post-tension and it's considered very dangerous to jackhammer them. Nevertheless, State Farm has demanded the insured jackhammer their undamaged slab in order that State Farm can gather evidence they could potentially use to deny the claim.`,
      },
      {
        id: 'reasonable-to-assume',
        num: 20,
        title: 'The "Reasonable to Assume" Denial',
        source: 'Adjuster Central',
        date: 'February 2024',
        text: `Let me pull the thread on that State Farm story a little further. That 30-year customer with the burst pipe in the dining area — the plumber wrote a report saying it was a sudden burst. There was a lot of saturation consistent with a sudden burst. There was no discoloration, mold, rot, or odor that would indicate longer-term seepage.

The adjuster told me with a straight face that it was "reasonable to assume" that the leak was long-term. He said that even though there was no evidence indicating long-term. Also, you can't deny a claim based on an assumption that an exclusion applies. If you're trying to apply an exclusion, the burden of proof is on the insurance company. The insurance company must prove that the exclusion is applicable. You can't use an exclusion because you think it's "reasonable" that the exclusion is applicable.

So in summary, State Farm is by far the most difficult insurance company for water leaks and especially slab leaks.`,
      },
      {
        id: 'contaminated-crawl-space',
        num: 21,
        title: 'The Contaminated Crawl Space: When Dirt Becomes a Coverage Argument',
        source: 'Total Claim Alliance',
        date: 'December 2023',
        text: `A lot of policies exclude damage to the earth. For example, if a car drove over your dirt lot front yard and put a big tire groove in it, that wouldn't be covered. But subsidence and earth movement are not the same type of loss as soil in the crawl space that has become contaminated.

Over the years I've seen many claims where the insurance company did not want to pay for the removal of the contaminated dirt because the dirt itself is generally not covered. However, there are some pretty good counter-arguments even if you agree the dirt itself is generally not covered.

First, you can't really work in the crawl space to dry out the underside of the subfloor — which is covered — if it's a contaminated area. It's more reasonable to remove the contamination so the workers can then bring equipment in.

Second, the dirt may in fact be a structural element. You have concrete piers and cripple posts which support girders that in turn support the floor joists. That soil is there as a structural element. It might have even been brought in from somewhere else and compacted. It's probably drawn on the building plans and in many cases approved by a structural engineer or architect. So you can argue the soil is essentially a building component and therefore part of the covered building property.

It's actually a really weird theoretical question: imagine if you had a bad smell in the air inside the house but it hadn't actually penetrated into any of the materials. Would the insurance company owe to remove the smell? This issue comes up a lot with wildfire smoke claims, where the carrier will argue that smoke may have gotten inside the house but didn't actually cause any damage.`,
      },
    ],
  },
  {
    id: 'clue-retaliation',
    title: 'Part VII: The CLUE Database and Retaliation',
    subtitle: 'When filing a claim becomes a black mark that follows you.',
    stories: [
      {
        id: 'farmers-clue',
        num: 22,
        title: 'Farmers Insurance and the CLUE Database: Inflating Claims to Punish Policyholders',
        source: 'LA Attorney Network',
        date: 'December 2019',
        text: `Farmers Insurance has been sued for reporting allegedly false information to the CLUE database — the Comprehensive Loss Underwriting Exchange operated by LexisNexis.

Eight plaintiffs alleged the insurance company submitted false and confidential information about their claims to the database after tornadoes swept through the state in 2013. For example, plaintiffs Jack and Melissa McSwain were paid about $7,000 on their tornado claim, but Farmers reported to CLUE that it paid almost $3 million to the McSwains. Lance and Leigh Ramsey received about $35,000 from their property claim, but Farmers again reported to CLUE that it paid more than $3 million to the Ramseys. The same situation occurred in six other instances.

According to the lawsuit, Farmers included litigation expenses, lawsuit settlements, and a variety of other claim-related expenses in the information submitted to CLUE. The lawsuit alleged the submission of false information defamed each plaintiff and made it difficult, perhaps impossible, for them to obtain new homeowners insurance.

As attorney Jeff Marr put it: "They don't even know what CLUE is. They probably think it's a board game." He describes CLUE as a "secret society" where insurance companies disclose claims information to their competitors so they can determine the risk level of a potential insurance client.

Marr believes Farmers' pattern of submitting false information to CLUE is a way to justify rate increase requests. "To get approval, insurers need to show justification to support the increase, which primarily includes claim payments. So if Farmers is falsely reporting legal settlements and expenses as claim payments, it can artificially inflate its claim payment numbers and seek a rate increase to which it is not entitled and is based on fraud."

Marr claims Farmers sought and received rate increases of 150% in less than two years for earthquake premiums when the company was denying the vast majority of those claims. After receiving those rate increases, Farmers later pulled earthquake coverage from Oklahoma when the company was denied yet another rate increase.

The rate increases, Marr said, should be based on need, not greed.`,
      },
      {
        id: 'non-renewal-trap',
        num: 23,
        title: 'The Non-Renewal Trap: Adding Insult to Underpayment',
        source: 'Public Insurance Adjuster Forum',
        date: 'October 2024',
        text: `There is a possibility the non-renewal could tie into additional extra-contractual and bad faith damages. Let's say for example the carrier has known for months their own expert thinks the damages are $400,000 to the elderly person's home who is on a fixed income. But the carrier has refused to pay their own expert's estimate and maybe even hidden that estimate.

Next, the carrier non-renews the policy while the roof is unrepaired and no other insurance company will pick up the homeowner because of the open claim and the unrepaired roof. That in turn causes the insured to suffer a tripling of their rate with a forced-place policy.

Theoretically, the insured could add the additional cost and other damages to an extra-contractual bad faith claim against the carrier on top of the unpaid repair cost. So yes, the carrier may have the right to non-renew, but it could create extra damages they might be liable for.`,
      },
    ],
  },
  {
    id: 'euo-siu',
    title: 'Part VIII: Examination Under Oath and SIU Tactics',
    subtitle: 'When the insurance company treats you like a suspect instead of a customer.',
    stories: [
      {
        id: 'siu-nothing-suspicious',
        num: 24,
        title: 'The SIU Investigator Who Admitted There Was Nothing Suspicious',
        source: 'Level the Playingfield',
        date: 'December 2024',
        text: `As a Public Adjuster, if they want to do a recorded interview by SIU I'm certainly going to cooperate because the alternative of an examination under oath is worse for the insured. If you refuse or don't cooperate on the SIU investigation, the carrier's Plan B is usually to demand an examination which you must cooperate with or get your claim denied. And the examination is going to take longer, be scheduled further in the future, and normally require an attorney for roughly $2,500 minimum in the Los Angeles area.

If it's the scenario where it's retaliatory or they're trying to investigate something that some third party might have done supposedly wrong, I'm going to sit in on the interview and very nicely ask if it's okay for me to help clarify or contribute information. I've never had an SIU person say no. And then when appropriate, I'm going to mention we have an estimate that hasn't been paid or apparently even looked at. Since the SIU person is investigating wrongdoing, we want to point out the wrongdoing of their own adjuster. And on the record, with the tape recorder running, I'm going to point out these things the SIU person needs to investigate about their own adjuster.

A lot of times these recorded interviews are actually fairly friendly because the SIU person knows it's all BS. They probably wonder why they've even been given the assignment sometimes. They also understand the adjusters use them for retaliatory purposes. And sometimes the adjusters send things to SIU just to get a claim off their desk.

I have a claim right now in litigation that's over a million dollars and I have a recording of the SIU person, with their permission, telling me straight up in answer to my question that there was nothing suspicious about the claim. But yet supposedly the insurance company's reason for not paying the undisputed amount for a year is they have some sort of "vague concern."`,
      },
      {
        id: 'siu-always-guilty',
        num: 25,
        title: 'The SIU Investigator Who Always Found Guilt: 30 Years of "Evidence"',
        source: 'Claims Adjuster Network',
        date: 'November 2024',
        text: `That's one of the things that really bothers me — how adjusters are so quick to assume that everybody, and I mean everybody, is lying. It's like one of the plaintiff attorneys that I know deposed an SIU investigator and he had something like 30 years of experience constantly doing examinations. And he said that every single person he ever examined was always guilty. It's just idiotic.

Like a claim I had where this really nice couple had their roughly $4,000 car stolen. The insurance company paid for a little bit of stolen personal property on the homeowner policy, but they hired an idiotic fake expert to say the car was stolen with its ordinary key. The homeowner lost way more money than the car was ever worth by the inconvenience to their business and not having a car.

And the other thing that really irritates me is they don't even know that it's public news that insurance company engineers have actually gone to prison for defrauding homeowners. Like how could you not know that's a thing?

The level of dishonesty is so over the top. When the insurance company sends out one of these engineers and they write a report saying concrete tiles are clay tiles and the solid hardwood floor is engineered — just endless idiotic errors in their reports, errors that someone with six months of experience should not be making. And if I or another public adjuster tries to talk to the adjuster about how wrong their engineer report is, they won't even respond. They have no motivation whatsoever to try to be honest.

When you confront the adjuster with very obvious wrong information in the engineer report, they just stare at you and don't say anything. But yet they go crazy trying to do examinations under oath of 85-year-old people that aren't even involved with running the property that got vandalized. On my side of the table we've always seen elderly people that get dragged into multiple examinations. Why? The only reason it's done is for the insurance attorneys to make money.`,
      },
      {
        id: 'badgering-elderly',
        num: 26,
        title: 'Badgering the Elderly: The Recorded Statement Trap',
        source: 'Facebook',
        date: 'March 2026',
        text: `It's not a courtroom so they can ask leading questions and try to put words in the respondent's mouth. Might not be legal but it happens.

For example, imagine an elderly person reporting a water loss and explaining that they thought it was sudden and recent. But the adjuster keeps asking over and over if there's a possibility that it could be long-term. And the homeowner calling in the claim doesn't realize the significance of admitting the possibility. Once the adjuster gets them to admit the possibility, then they move in for the kill and convince the person to say that yes, it probably was in fact long-term.

This type of thing happens. They will badger elderly people with dementia until they agree the loss was long-term even if it actually wasn't. It's horrific. It's such an abuse. And even for me to explain this sounds like I'm the crazy person because most people wouldn't believe it. But I know it happens — not every time, but it does happen.`,
      },
      {
        id: 'vandalized-house-boots',
        num: 27,
        title: 'The Vandalized House, the Boot Brand, and the Bail Bondsman',
        source: 'Facebook',
        date: 'February 2024',
        text: `I had this claim where the guy claimed his wife vandalized his house. He claimed she put a garden hose and filled his convertible with water and also broke the pipes under the sink and flooded the house. The guy seemed a little weird.

I was the insurance adjuster. He takes me all around the house and shows me everything. I just thought it was kind of odd because he didn't seem to be very educated but he had all kinds of different corporate paperwork for various businesses he was starting and luxury retail products and receipts everywhere. There was something a little bit off.

He told me he had somebody who'd already done the water mitigation and I asked for the receipts. A few days later he sends me a receipt from a company named "Don Luchesse," with a residential address somewhere out in the desert near Riverside. The insurance company approved his claim and sent him a check with the mortgage company's name.

About a week later he sent in a letter from the mortgage company. The vice president of claims decided to check into it and called the mortgage company, spoke to the lady who supposedly signed the letter. That lady didn't know anything about the letter and her name was spelled wrong. The insurance company determined the guy was committing fraud and denied the whole claim.

Then a few weeks later he made a new claim — he claimed that when the bail bondsman came to take him to jail, the bail bondsman broke his security cameras. When I talked to the bail bondsman, he was really surprised and wanted to know what time my appointment was because he wanted to arrest the guy. I was hoping my insured would be arrested during my inspection — I thought it would make for a really interesting report. Unfortunately the bail bondsman never showed up, so I just had a fairly boring report like normal.

But then about a year later I was coming back from working catastrophe claims on a Texas hurricane. On my way home I saw this huge boot warehouse outside of El Paso and decided to stop inside. I was going up and down the aisles and finally saw these really nice black boots and noticed the brand was Don Lucchesi. And that's when I realized the receipt the insured had sent me a year earlier was the receipt for some boots he had purchased that he altered to make it look like a water mitigation invoice. And then I thought, for sure I have to buy these boots. So I still have them today.`,
      },
    ],
  },
  {
    id: 'unlicensed-experts',
    title: 'Part IX: The Unlicensed "Expert" Game',
    subtitle: 'When the insurance company\'s hired guns don\'t have the credentials to back up their opinions.',
    stories: [
      {
        id: 'engineers-writing-estimates',
        num: 28,
        title: 'Engineers Writing Construction Estimates: Illegal But Common',
        source: 'Claims Adjuster Network',
        date: 'May 2025',
        text: `Using an engineer to write an estimate for construction cost is illegal. It's blatantly illegal. You can't have people who are not licensed adjusters adjusting a claim. And if you have an engineer writing a repair estimate with labor and material pricing, that's adjusting the claim.

If you don't understand that, ask yourself this: can an engineering firm legally do those repairs they estimated? Of course not — it would be illegal for them to contract that work. The only parties that should be writing estimates for repairs are the insurance company and their adjusters, contractors licensed to do that particular work, or public adjusters.

But this is just one example of thousands. And there are adjusters who will defend this. Many of them. And of course their wages are also low. Did they ever stop and think maybe the reason their wages are low is that insurance companies are using unlicensed people to adjust claims?

The stuff that adjusters do nowadays I never would have done when I was an adjuster. The pendulum has swung too far.`,
      },
      {
        id: 'biggest-problem-unlicensed',
        num: 29,
        title: 'The Biggest Problem in Insurance Claims: Unlicensed Adjusters',
        source: 'Public Adjuster/Attorney Portal',
        date: 'July 2025',
        text: `This is one of the biggest problems in insurance claims, in my opinion — the use of unlicensed adjusters. If someone is a licensed electrical contractor in the state of Texas, they have a right to prepare an estimate and give an opinion on electrical repairs. If someone is a licensed adjuster, they can do the same thing. But if the party is working for the insurance company to prepare an estimate or an opinion on scope and cost both, and they're not a contractor or a licensed adjuster, what gives them the right to give an opinion for money?

I think it's illegal. Unfortunately the Departments of Insurance often don't see this as something worth investigating or they might even think it's okay.

Also, what's actually pretty common is the contractor will be listed on the Contractor State License Board as not having any employees when they actually have 10 or 20. They do that to avoid paying workers' compensation, and that's actually pretty common with insurance company preferred vendors. Of course it's a red flag because it's illegal.`,
      },
    ],
  },
  {
    id: 'pistachio-rule',
    title: 'Part X: The Pistachio Ice Cream Rule',
    subtitle: 'Sometimes you have to play along to prove them wrong.',
    stories: [
      {
        id: 'lightning-truck-battery',
        num: 30,
        title: 'The Lightning-Struck Truck the Insurance Company Demanded Be Connected to a Battery',
        source: 'Roofing Sales & Claims Discussions',
        date: 'November 2025',
        text: `See the video I posted where the vehicle repair expert is showing a truck with a lightning strike and he told the insurance company it was a total loss due in part to the damaged circuitry. The insurance company insisted he connect a battery to test it and prove it was really damaged.

Keep in mind the truck was damaged but was repairable. He told the insurance company several times connecting a battery would probably start it on fire. But the insurance company thought they knew better. So he set up a camera and connected the battery, and as he began diagnosing and checking the OBD codes, the truck not only started on fire but blew the airbag on the passenger side, turning the truck into a total loss.

When you look at insurance claims it might seem like medical insurance, property insurance, and automobile insurance are all totally different. But the reality is the games are all the same, and the counter-tactics are all the same — just the details are different.

I call this the Pistachio Ice Cream Rule. If the insurance company insists that an EPDM commercial roof can be repaired by rubbing pistachio ice cream on it, the most productive move is often to go up on the roof with a camera, follow their instruction to the letter, and document the result. Ask the adjuster in writing whether the product should be natural or artificial flavor. Keep the receipt. Ask the store to confirm on their letterhead that what they sold you was, in fact, pistachio. Follow the method exactly as the carrier describes it.

If you refuse — because it is obviously absurd, and because you know it will not work — you create an impasse with nothing on the record except your protest and the carrier's position. You can argue for weeks without moving the file.

If you comply, document, and the method fails on video, the conversation changes completely. You now have evidence that the carrier's proposed repair method was attempted, implemented per their specifications, and did not produce the result they promised. That is a much stronger posture heading into negotiation, appraisal, or, if it comes to that, litigation. The lesson is that sometimes the most persuasive rebuttal of a bad-faith repair theory is to perform the experiment on video, not to refuse to run it. Pick your arguments carefully.`,
      },
      {
        id: 'deductible-shuffle',
        num: 31,
        title: 'The Deductible Shuffle: When Three Contractors Call the Homeowner a Fraud',
        source: 'Level the Playingfield',
        date: 'July 2024',
        text: `Imagine if a huge tree gets knocked over in the wind and it does exactly $10,000 of damage to the detached garage, knocks out a bunch of doors and windows on the main residence requiring a $10,000 board up, and also destroys a freestanding kiddie play set with an RCV of $10,000.

The insured hires three different contractors. The adjuster opens the email from the play set company first and immediately pays $9,000 — the RCV less the $1,000 deductible — under the contents coverage. A few hours later he sees the three invoices and issues full $10,000 payments for the other two.

The roofing contractor gets really upset and confused and reminds the insured he already took the $1,000 deductible. But the insured already paid the deductible on the play set. There's no legal or contractual or ethical requirement for the homeowner to pay the deductible on the roofing portion — it's perfectly fine for them to pay it on some other portion, which is what happened.

What happens next is where it gets really weird. Depending on the roofer's mentality and experience, he will call the insurance company and report the homeowner for fraud. The play set contractor also calls the adjuster and reports the homeowner for fraud. They get their legal education from Facebook and they get really upset when people don't do what they tell them to do.`,
      },
      {
        id: 'exposure-fires',
        num: 32,
        title: 'Exposure Fires: The Damage Next Door Nobody Tells You About',
        source: 'Level the Playingfield',
        date: 'July 2025',
        text: `The neighbor might be liable if their negligence caused a fire. But here's the thing: you need to go over and chat with the neighbor as soon as possible after the fire, like even an hour later. And they're going to be so surprised about what happened and more likely to admit their mistake. Two days later after they've had time to reflect on it, they're going to shut their mouth.

But the next-door people with their melted siding — they can make a first-party claim. That's a totally legitimate claim and it would even get paid on a named peril policy because it's fire damage. On a named peril policy, the fire doesn't have to be on or originating in the structure that's insured — it's okay if it's next door. It's often referred to as an "exposure fire."

By the way, if you're a contractor or public adjuster looking for work, sometimes it's a good idea to go talk to the neighbors on either side of a fire loss because they have melted vinyl windows and smoke damage which can be significant. And nobody's bothering to tell them about it a lot of times.`,
      },
      {
        id: 'pa-settlement-releases',
        num: 33,
        title: 'Why Public Adjusters Should Never Advise on Settlement Releases',
        source: 'Public Adjuster/Attorney Portal',
        date: 'November 2024',
        text: `Let's say a carrier offers an even $70,000 settlement in exchange for a mutual release. The policy limit is $100,000. Let's say the Public Adjuster advises the insured to take it, believing it to be a great settlement. One month later the insured learns from an attorney they could have theoretically won $220,000 of contractual and extra-contractual damages. So now you have a malpractice liability based on someone's theory.

Conversely, let's say you told the insured not to take the $70,000 deal. Next the insurance company gets a new manager who takes a very hard line and issues a denial letter for the entire claim. The insured goes around town trying to find an attorney that will take the case on contingency but no one will take a case that small that's a full-on denial.

Imagine if you're a super smart public adjuster with extensive experience and you believe a $500,000 settlement offer is a really good deal. On your advice the insured accepts the settlement and signs the release. Two months later the insured discovers they have a long-term partial lung disability from breathing the contaminants created by the insurance company's preferred vendor who worked on the property. So potentially they have a $2 million extra-contractual claim against the insurance company. But you told them to sign a release, so they can't make that case.

This is why it's not a good idea for Public Adjusters to advise insureds to accept or refuse settlement offers or sign releases.`,
      },
    ],
  },
  {
    id: 'system',
    title: 'Part XI: The System Behind the Stories',
    subtitle: 'Understanding why the game is played this way.',
    stories: [
      {
        id: 'statistical-fingerprint',
        num: 34,
        title: 'The Statistical Fingerprint of Claims Manipulation',
        source: 'American Policyholder Association',
        date: 'June 2024',
        text: `There was a case where a professor identified that the bid and ask prices on over-the-counter stocks did not show a normal random distribution. The market makers used social pressure and business pressure on other market makers to not split the 1/8th.

A similar example happens with catastrophe adjusters. If a catastrophe adjuster is paid a certain fee for claims that are above $100,000, and the payment jumps roughly $1,000 for claims that are $110,000, it would not be unusual to run a spreadsheet or better yet a graph to see visually how the claims cluster around certain dollar thresholds.

Claims should follow a certain natural pattern or distribution. And the more claims you have and the more disasters they span, the more the distribution should approach a normal bell curve — because you have a wide variety of property values, types of damage, ages, and building materials. So if you see a distribution that's not what you'd expect, and if you can show certain numbers are overrepresented or underrepresented, that's a clue that there's some sort of human intervention or stickiness in the process.

This kind of analysis has been used in the stock market, it's been used to detect fraud in elections, and it can be applied to insurance claims to show systemic patterns of underpayment.`,
      },
      {
        id: 'race-to-bottom',
        num: 35,
        title: 'The Race to the Bottom: How Adjuster Pay Drives Underpayment',
        source: 'Level the Playingfield',
        date: 'April 2022',
        text: `If you read the Facebook groups for adjusters you will see there is a determined race to the bottom, with pay being lowered constantly for catastrophe adjusters and daily claims adjusters alike. The carriers don't want experienced adjusters who know what things cost. They want cheap labor that follows internal guidelines designed to minimize payments.

10 years ago and before, catastrophe adjusters were paid commission on estimates that were probably 80% or 90% of what was fair. They didn't go to appraisal. They were paid and closed. Nowadays the estimates get paid out at maybe 50% or less of what's fair, and that means the catastrophe adjuster's pay is half of what it otherwise would be. Many catastrophe adjusters will tell stories of writing estimates that were rejected by the file examiner only to be paid later — and the catastrophe adjuster never got their commission on it.

It's not unusual at all for insurance adjusters to insist on claim payments that are less than a reasonable contractor's costs. Maybe even less than material costs. It happens all the time.`,
      },
    ],
  },
]

export default function StoriesPage() {
  const totalStories = PARTS.reduce((sum, p) => sum + p.stories.length, 0)

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Real Stories from the Claims Trenches',
          description: `${totalStories} real insurance claim stories from a California Licensed Public Adjuster.`,
          author: {
            '@type': 'Person',
            name: 'Leland Coontz III',
            jobTitle: 'Licensed Public Adjuster',
          },
          publisher: {
            '@type': 'Organization',
            name: 'InsuranceClaimsInfo.com',
            url: 'https://insuranceclaimsinfo.com',
          },
        }}
      />

      {/* Hero */}
      <div className="bg-[#1F3964] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/resources"
            className="text-blue-300 hover:text-white text-sm mb-4 inline-block"
          >
            ← Back to Resources
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Real Stories from the Claims Trenches
          </h1>
          <p className="text-blue-200 max-w-3xl leading-relaxed text-lg">
            {totalStories} stories drawn from a career spanning both sides of the
            insurance desk. Identifying details have been changed to protect the
            privacy of policyholders: individual names are omitted, specific
            addresses and personally identifying facts have been generalized,
            and dollar amounts are rounded to the nearest $1,000.
          </p>
          <p className="text-blue-200 max-w-3xl leading-relaxed text-sm mt-4 italic">
            Where a specific insurance company is named in an anecdote (as
            opposed to a published case citation or a matter of public record),
            that name may be altered. The patterns described are real; the
            intent is to illustrate systemic tactics, not to single out any one
            company by reference to any specific policyholder&apos;s file.
          </p>
        </div>
      </div>

      {/* Author intro */}
      <div className="max-w-4xl mx-auto px-4 pt-10 pb-2">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <p className="text-gray-700 leading-relaxed">
            Every year, millions of Americans file insurance claims believing their
            carrier will honor the contract they&apos;ve been paying premiums on for
            years, sometimes decades. Most of the time, the process works
            reasonably well. But when it doesn&apos;t, the tactics insurance companies
            use to underpay, delay, and deny legitimate claims follow remarkably
            consistent patterns. These aren&apos;t random mistakes by overworked
            adjusters. They are systemic practices refined over decades, and they
            cause real financial harm to real families.
          </p>
          <p className="text-gray-600 text-sm mt-4 italic">
            — Leland Coontz, California Licensed Public Adjuster
          </p>
        </div>

        <div className="mt-4 bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-700 leading-relaxed">
          <p className="font-semibold text-[#1F3964] mb-2">Privacy &amp; Source Notes</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              No policyholder is identified by name, address, or any combination
              of facts that could reasonably identify them.
            </li>
            <li>
              Dollar amounts are <strong>rounded to the nearest $1,000</strong>.
              The intent is to preserve the order of magnitude and the point of
              the story without attaching a precise figure to any individual
              claim.
            </li>
            <li>
              Insurance-carrier names in <em>personal anecdotes</em> may be
              altered or generalized. Where a carrier is named in connection
              with <strong>published case law</strong> (for example,{' '}
              <em>Doan v. State Farm</em> or the{' '}
              <em>Farmers/CLUE</em> class action), the name is part of the public
              record and remains as it appears in the court filings or press
              coverage.
            </li>
            <li>
              Nothing on this page is legal advice. Only a licensed attorney can
              advise you on a specific claim.
            </li>
          </ul>
        </div>
      </div>

      {/* Table of Contents */}
      <nav className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="font-bold text-[#1F3964] text-lg mb-4">
          Jump to a Section
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {PARTS.map((part) => (
            <a
              key={part.id}
              href={`#${part.id}`}
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#1F3964] hover:bg-blue-50 rounded-lg px-3 py-2 transition-colors"
            >
              <span className="text-[#C9A84C] font-bold text-xs">
                {part.stories.length}
              </span>
              <span>{part.title}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Story sections */}
      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-16">
        {PARTS.map((part) => (
          <section key={part.id} id={part.id}>
            <div className="border-b-2 border-[#1F3964] pb-2 mb-2">
              <h2 className="text-2xl font-bold text-[#1F3964]">
                {part.title}
              </h2>
            </div>
            <p className="text-gray-500 italic mb-8">{part.subtitle}</p>

            <div className="space-y-10">
              {part.stories.map((story) => (
                <article
                  key={story.id}
                  id={story.id}
                  className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <span className="bg-[#1F3964] text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      {story.num}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">
                        {story.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">
                        {story.date} | {story.source}
                      </p>
                    </div>
                  </div>
                  <div className="prose-content text-gray-700 leading-relaxed space-y-4">
                    {story.text.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Closing */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-xl font-bold text-[#1F3964] mb-3">
            A Final Word
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            These stories represent a fraction of what happens every day in the
            insurance claims industry. The insurance industry is not
            monolithically corrupt. There are good adjusters, fair carriers, and
            claims that get handled properly. But the patterns described here are
            real, documented, and persistent. They exist because they work —
            because most policyholders don&apos;t know the rules, don&apos;t know their
            rights, and don&apos;t have the resources to fight back.
          </p>
          <p className="text-gray-700 leading-relaxed font-medium">
            The purpose of this collection is education. An informed policyholder
            is the best defense against these tactics. Know your policy. Know your
            state&apos;s fair claims regulations. Document everything in writing. And
            when the numbers don&apos;t add up, don&apos;t be afraid to ask why.
          </p>
          <p className="text-gray-500 text-sm mt-4 italic">
            Stories collected from insurance industry groups, 2019–2026. All
            situations are real. Original posts have been edited for clarity and
            readability while preserving factual content.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#1F3964] text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">
            Recognize Your Situation in These Stories?
          </h2>
          <p className="text-blue-200 mb-6">
            If your insurance company is using any of these tactics on your claim,
            you don&apos;t have to fight alone. A licensed Public Adjuster can review
            your file and represent you in negotiations.
          </p>
          <Link href="/contact" className="btn-gold">
            Request a Free Claim Review →
          </Link>
        </div>
      </div>
    </>
  )
}
