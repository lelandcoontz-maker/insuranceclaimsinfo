"""
Generate all 5 paid PDF guides for insuranceclaimsinfo.com
Author: Leland Coontz, California Licensed Public Adjuster
"""

import sys
sys.path.insert(0, 'C:/Users/lelan/Desktop/Facebook Data/Insurance Content Database/PDF Guides')
from build_pdfs import InsuranceGuidePDF

OUTPUT_DIR = 'C:/Users/lelan/Desktop/Claude Projects/insuranceclaimsinfo/public/guides/paid'


# =============================================================================
# GUIDE 1: The California Appraisal Handbook
# =============================================================================
def build_appraisal_handbook():
    pdf = InsuranceGuidePDF(
        title="The California Appraisal Handbook",
        subtitle="Everything You Need to Know About Insurance Appraisal in California"
    )
    pdf.cover_page()
    pdf.disclaimer_page()

    # Chapter 1
    pdf.chapter_title("The Standard Fire Policy Appraisal Provision")
    pdf.body_text(
        "Every homeowner's insurance policy in California that covers fire loss includes an appraisal provision. "
        "This is not optional — it is mandated by the California Standard Fire Policy, which is codified in "
        "California Insurance Code Section 2071. The appraisal clause gives either party — the policyholder or the "
        "insurance company — the right to demand appraisal when there is a disagreement over the amount of a loss."
    )
    pdf.body_text(
        "The language of the standard provision reads, in essence, that if the insured and the company fail to agree "
        "on the actual cash value or the amount of loss, then either party may make a written demand for an appraisal. "
        "Each party selects a competent and impartial appraiser within 20 days after receiving the demand. The two "
        "appraisers then select an umpire. If the two appraisers cannot agree on an umpire within 15 days, either party "
        "may request a judge of a court of record in the state to select the umpire."
    )
    pdf.body_text(
        "The appraisers then separately set the amount of loss, stating the items and amounts in writing. If the "
        "appraisers submit a written report of agreement to the company, the amount agreed upon is the amount of the "
        "loss. If they fail to agree, they submit their differences to the umpire. A written agreement signed by any two "
        "of the three — whether two appraisers or one appraiser and the umpire — determines the amount of loss."
    )
    pdf.callout_box(
        "The appraisal clause is a contractual right, not a privilege. If you demand appraisal and the carrier refuses "
        "or delays without valid reason, you may have grounds for a breach of contract or bad faith claim.",
        title="Key Takeaway"
    )
    pdf.body_text(
        "Understanding this provision is foundational. Appraisal is not arbitration — it is narrower in scope. "
        "Appraisal is designed only to resolve disputes over the amount of loss, not coverage disputes. If the "
        "insurance company is denying coverage entirely, appraisal is typically not the right tool. But when the "
        "dispute is over how much damage exists or what it costs to repair, appraisal is one of the most powerful "
        "tools available to policyholders."
    )
    pdf.section_title("When Appraisal Applies — And When It Does Not")
    pdf.body_text(
        "Appraisal applies when both parties agree that coverage exists but disagree on the dollar amount. "
        "For example, if your carrier says the roof damage is $8,000 and your contractor says it is $35,000, that "
        "is a classic appraisal scenario. But if your carrier denies that wind caused the damage at all and says "
        "it is wear and tear, that is a coverage dispute — and appraisal typically cannot resolve it."
    )
    pdf.body_text(
        "That said, the line between amount disputes and coverage disputes is often blurry. Carriers sometimes "
        "use low estimates as a way to effectively deny a claim without formally denying it. They pay you $3,000 on "
        "a $50,000 loss and call it resolved. In these situations, appraisal can be an extremely effective mechanism "
        "to force the real numbers onto the table."
    )
    pdf.bullet_list([
        "Appraisal is appropriate for disputes over scope, pricing, or methodology of repair",
        "Appraisal is NOT typically appropriate when coverage is outright denied",
        "Appraisal can address matching disputes (e.g., carrier wants to patch, you need full replacement)",
        "Appraisal can address code upgrade cost disputes",
        "Appraisal can resolve ACV vs. RCV holdback disputes if the dispute is over the amount",
    ])

    # Chapter 2
    pdf.chapter_title("The Arbitration Code Framework (CCP 1280-1294.2)")
    pdf.body_text(
        "Here is something most policyholders — and even many attorneys — do not fully appreciate: insurance "
        "appraisal in California is governed by the California Arbitration Act, found in Code of Civil Procedure "
        "Sections 1280 through 1294.2. This matters enormously because it gives the appraisal process teeth. "
        "An appraisal award in California is not merely advisory — it is enforceable as if it were a court judgment."
    )
    pdf.body_text(
        "CCP Section 1280 defines arbitration broadly, and California courts have consistently held that insurance "
        "appraisal falls under this statutory framework. This means the procedural protections and enforcement "
        "mechanisms of arbitration law apply to appraisal proceedings. The award can be confirmed by a court under "
        "CCP 1285, and once confirmed, it has the same force and effect as a judgment."
    )
    pdf.callout_box(
        "Under CCP 1286.2, a court can vacate an appraisal award only in very limited circumstances: corruption, "
        "fraud, prejudicial misconduct, or where the appraiser exceeded their powers. The standard for overturning "
        "an appraisal award is extremely high, which is good news for policyholders who win at appraisal.",
        title="Important Legal Point"
    )
    pdf.body_text(
        "The practical significance of this legal framework cannot be overstated. When a carrier drags its feet, "
        "you can petition the court to compel appraisal under CCP 1281.2. When the carrier refuses to participate "
        "in umpire selection, you can ask a judge to appoint one under the policy language and the arbitration code. "
        "And when the appraisal results in an award favorable to you — which it does in the overwhelming majority "
        "of cases where the policyholder is represented by a competent public adjuster — the carrier cannot simply "
        "ignore it."
    )
    pdf.section_title("Petition to Compel Appraisal")
    pdf.body_text(
        "If the insurance company refuses to participate in appraisal after you have made a proper demand, your "
        "next step is to file a petition to compel appraisal in Superior Court. This is a straightforward motion. "
        "You attach the policy, your demand letter, and evidence that the carrier has failed or refused to comply. "
        "Courts routinely grant these petitions because the policy language and the Arbitration Act both support "
        "the right to appraise."
    )
    pdf.body_text(
        "The petition should be filed in the county where the loss occurred. Filing fees are modest, and many "
        "courts will hear the petition on shortened time if you can show urgency — for example, if you are living "
        "out of your home and the carrier's refusal to appraise is delaying your recovery."
    )
    pdf.numbered_list([
        "Send written demand for appraisal via certified mail with return receipt",
        "Wait 20 days for the carrier to select an appraiser",
        "If the carrier fails to respond or refuses, document the non-compliance",
        "File a Petition to Compel Appraisal in Superior Court",
        "Serve the petition on the carrier's registered agent for service of process",
        "Attend the hearing — most petitions are granted within 30 to 60 days of filing",
    ])

    # Chapter 3
    pdf.chapter_title("Key Case Law")
    pdf.section_title("Sharma v. American Family Mutual Insurance (2021)")
    pdf.body_text(
        "Sharma is arguably the most important California appraisal case of the last decade. In Sharma, the court "
        "addressed the question of whether an insurer waives its right to demand appraisal by engaging in conduct "
        "inconsistent with that right — such as denying the claim, litigating, or unreasonably delaying. The court "
        "held that waiver applies to insurance appraisal just as it applies to arbitration. If the carrier acts in "
        "a way that is inconsistent with its right to appraise, it can lose that right entirely."
    )
    pdf.body_text(
        "What makes Sharma particularly useful for policyholders is its application on the flip side. When a carrier "
        "has been low-balling you, forcing you to hire a public adjuster or attorney, and then suddenly demands "
        "appraisal only after you file suit, the carrier may have waived its right to do so. The court will look at "
        "whether the carrier's delay in invoking appraisal was unreasonable and whether the policyholder was "
        "prejudiced by that delay."
    )
    pdf.callout_box(
        "Sharma waiver: An insurer waives its right to appraisal by engaging in conduct inconsistent with that right, "
        "such as denying the claim, delaying unreasonably, or litigating coverage before invoking the appraisal clause. "
        "Prejudice to the policyholder must be shown.",
        title="Sharma v. AmFam — Rule"
    )

    pdf.section_title("Kacha v. Allstate Insurance Company (2006)")
    pdf.body_text(
        "Kacha addressed the scope of appraisal — specifically, what issues an appraisal panel can and cannot decide. "
        "The court held that the appraisal process is limited to determining the amount of loss and cannot decide "
        "questions of coverage or liability. However, the court recognized that amount-of-loss determinations "
        "sometimes necessarily involve some coverage-adjacent questions, such as whether particular items of damage "
        "fall within the scope of the covered loss."
    )
    pdf.body_text(
        "For policyholders, Kacha is a double-edged sword. On one hand, it confirms that carriers cannot use appraisal "
        "to smuggle in coverage defenses. On the other hand, it gives carriers a basis to argue that certain issues "
        "are outside the scope of appraisal. The key is to frame your appraisal demand and your appraiser's scope "
        "of work carefully to stay within the amount-of-loss boundary while still capturing everything you are owed."
    )

    pdf.section_title("Devonwood Condominium Owners Association v. Farmers (2008)")
    pdf.body_text(
        "Devonwood is critical for understanding how courts treat the umpire's role. In this case, the court "
        "affirmed that the umpire does not need to independently inspect the property or conduct their own "
        "investigation. The umpire's role is to resolve disagreements between the two appraisers. The umpire "
        "reviews the submissions from both sides and determines where the truth lies."
    )
    pdf.body_text(
        "This case also reinforced that appraisal awards are entitled to substantial deference from courts. "
        "A court will not second-guess the appraisal panel's factual findings unless there is evidence of fraud, "
        "corruption, or a clear excess of authority. This is why winning at appraisal is so powerful — once you "
        "have an award, the carrier has very limited ability to challenge it."
    )

    pdf.section_title("Lee v. California Capital Insurance Company (2015)")
    pdf.body_text(
        "Lee addressed the intersection of appraisal and bad faith. The court held that an insurer's obligation "
        "to pay a claim fairly and promptly is not suspended merely because appraisal has been demanded or is "
        "pending. In other words, the carrier cannot use appraisal as a delay tactic. If the carrier owes money "
        "that is not in dispute — for example, the undisputed portion of the claim — it must pay that amount "
        "promptly regardless of whether appraisal is underway for the disputed portion."
    )
    pdf.callout_box(
        "An insurer cannot hide behind the appraisal process to delay payment of undisputed amounts. The duty of "
        "good faith and fair dealing continues throughout appraisal. Lee v. California Capital Insurance Company.",
        title="Lee v. CalCap — Rule"
    )

    # Chapter 4
    pdf.chapter_title("Sharma Waivers and White Waivers")
    pdf.body_text(
        "Understanding the waiver doctrines in California appraisal law is essential for strategic decision-making. "
        "There are two primary types of waivers that come into play: the Sharma waiver (discussed above) and the "
        "so-called White waiver, which comes from White v. Western Title Insurance Company."
    )
    pdf.body_text(
        "A Sharma waiver occurs when the insurance company engages in conduct inconsistent with its right to "
        "appraisal. This typically happens when the carrier denies the claim, low-balls it for months or years, "
        "forces the policyholder into litigation, and then belatedly demands appraisal to avoid a bad faith trial. "
        "Courts look at three factors: (1) whether the party demanding appraisal knew of the right, (2) whether "
        "the party's conduct was inconsistent with the right, and (3) whether the other party was prejudiced by the "
        "inconsistent conduct."
    )
    pdf.body_text(
        "A White waiver is slightly different. It arises when the insurer's conduct constitutes an implied waiver "
        "of a policy condition — not just the appraisal clause. For example, if the carrier's adjuster tells the "
        "policyholder that appraisal is not available or that the policyholder does not have the right to demand it, "
        "the carrier may be estopped from later demanding appraisal itself. Similarly, if the carrier fails to comply "
        "with its own obligations under the appraisal clause — such as failing to select an appraiser within 20 days "
        "of the demand — it may waive its right to participate."
    )
    pdf.callout_box(
        "Strategy tip: If you suspect the carrier will try to demand appraisal after you file suit, document every "
        "instance of delay, denial, and inconsistent conduct. Build your Sharma waiver argument from day one by keeping "
        "meticulous records of the carrier's behavior throughout the claim.",
        title="Strategic Note"
    )
    pdf.bullet_list([
        "Sharma waiver focuses on litigation conduct — demanding appraisal too late after acting inconsistently",
        "White waiver focuses on implied waiver through statements or failure to perform policy obligations",
        "Both waivers require showing prejudice to the party opposing the late demand",
        "Document every carrier communication to build your waiver argument if needed",
        "Consult with an attorney before opposing appraisal — sometimes appraisal works in your favor even if the carrier demanded it",
    ])

    # Chapter 5
    pdf.chapter_title("Choosing Your Appraiser")
    pdf.body_text(
        "Your choice of appraiser is the single most important decision you will make in the appraisal process. "
        "I cannot stress this enough. The appraiser you select is your advocate within the appraisal panel. "
        "They are not required to be neutral — that is the umpire's job. Your appraiser should be a knowledgeable, "
        "experienced professional who will aggressively pursue the highest supportable amount of loss on your behalf."
    )
    pdf.body_text(
        "Ideally, your appraiser should be someone with deep construction knowledge, estimating experience, and "
        "familiarity with insurance claim procedures. Many policyholders make the mistake of selecting a general "
        "contractor or a friend who does some handyman work. While well-intentioned, these individuals often lack "
        "the specific expertise needed to prepare a compelling appraisal submission."
    )
    pdf.body_text(
        "The best appraisers are public adjusters or construction professionals who have handled appraisals before "
        "and understand how to prepare detailed, line-by-line estimates that withstand scrutiny. They should be "
        "comfortable with Xactimate or similar estimating software, and they should know how to present their "
        "findings clearly and persuasively."
    )
    pdf.callout_box(
        "Never select an appraiser suggested by the insurance company. Never select an appraiser who regularly works "
        "for insurance companies. Your appraiser is YOUR representative, and they should have a track record of "
        "advocating for policyholders.",
        title="Critical Warning"
    )
    pdf.bullet_list([
        "Look for appraisers with construction estimating experience",
        "Verify they have handled insurance appraisals before — this is not the same as arbitration",
        "Ask for references from policyholder-side cases",
        "Ensure they are competent with Xactimate or equivalent estimating tools",
        "Confirm they understand the scope of their role and the limits of appraisal",
        "Discuss their fee structure upfront — most charge a flat fee or hourly rate",
        "Ask about their approach to the umpire selection process",
    ])

    # Chapter 6
    pdf.chapter_title("The Umpire Selection Process")
    pdf.body_text(
        "Once both appraisers have been selected, they must agree on an umpire. The umpire is the neutral "
        "third party who breaks ties when the two appraisers cannot agree. The umpire's role is critical because, "
        "in practice, the two appraisers almost never agree on everything. The umpire's decision on the disputed "
        "items effectively determines the final award."
    )
    pdf.body_text(
        "The policy gives the appraisers 15 days to agree on an umpire. If they cannot agree, either party may "
        "petition a court to appoint one. In practice, the umpire selection process is often the most contentious "
        "part of the entire appraisal. The carrier's appraiser will push for an umpire who tends to be conservative "
        "in their valuations. Your appraiser should push for an umpire who is fair, experienced, and willing to "
        "follow the evidence."
    )
    pdf.body_text(
        "When the court appoints an umpire, judges typically select from a pool of retired judges, construction "
        "professionals, or other qualified individuals. Some courts maintain a list of approved umpires. Your "
        "appraiser should be familiar with the local pool and ready to make recommendations or objections as needed."
    )
    pdf.numbered_list([
        "Both appraisers exchange lists of proposed umpire candidates",
        "Each side researches the other's candidates for conflicts of interest and track record",
        "Negotiate in good faith — the best umpires are those both sides can live with",
        "If agreement cannot be reached within 15 days, petition the court for appointment",
        "When petitioning the court, submit a declaration explaining why the proposed umpires are problematic",
        "Prepare a list of acceptable umpire candidates for the court to consider",
    ])
    pdf.callout_box(
        "The umpire selection process is where many appraisals are won or lost. An umpire with construction "
        "experience who follows the evidence will almost always favor the policyholder, because the policyholder's "
        "numbers are usually closer to reality than the carrier's low-ball estimate.",
        title="Insider Tip"
    )

    # Chapter 7
    pdf.chapter_title("Strategy for Maximizing Your Award")
    pdf.body_text(
        "Going into appraisal without a strategy is like going to trial without a theory of the case. "
        "You need to know what you are asking for, why you are asking for it, and how you are going to prove it. "
        "The appraisal submission should be as thorough and detailed as anything you would present in court."
    )
    pdf.section_title("Prepare a Comprehensive Estimate")
    pdf.body_text(
        "Your appraiser should prepare a detailed Xactimate estimate — or equivalent — covering every element "
        "of the loss. This means going room by room, item by item, and line by line. Every damaged component "
        "should be documented with photographs, measurements, and detailed descriptions. The estimate should "
        "include proper labor categories, current material pricing, and all applicable overhead and profit."
    )
    pdf.section_title("Support Everything with Documentation")
    pdf.body_text(
        "The appraisal panel responds to evidence. Photographs, contractor bids, invoices, product specifications, "
        "code requirements, and expert reports all carry weight. If you are claiming that certain items require "
        "replacement rather than repair, show why with photographs of the damage and product data showing that "
        "the item cannot be restored to pre-loss condition."
    )
    pdf.section_title("Address the Carrier's Estimate Directly")
    pdf.body_text(
        "Do not ignore the carrier's estimate. Go through it line by line and identify every omission, "
        "undervaluation, and error. Prepare a comparison document showing your numbers alongside the carrier's "
        "numbers for each line item, with explanations for every difference. This makes it easy for the umpire "
        "to see where the carrier cut corners."
    )
    pdf.bullet_list([
        "Always include overhead and profit — contractors charge it, and you are entitled to it",
        "Include code upgrade costs where applicable — carriers routinely omit these",
        "Document matching requirements — you are entitled to a uniform appearance, not a patchwork",
        "Include all temporary repairs and emergency mitigation costs",
        "Account for debris removal, permit fees, and general conditions",
        "If applicable, address depreciation line by line — carriers often over-depreciate",
    ])

    # Chapter 8
    pdf.chapter_title("Common Mistakes to Avoid")
    pdf.body_text(
        "After handling hundreds of appraisals, I have seen the same mistakes repeatedly. These mistakes can cost "
        "policyholders thousands of dollars — or can result in a failed appraisal altogether. Here are the most "
        "common pitfalls and how to avoid them."
    )
    pdf.section_title("Mistake 1: Choosing the Wrong Appraiser")
    pdf.body_text(
        "As discussed, your appraiser selection is critical. Do not pick your uncle who does drywall work. "
        "Do not pick a contractor who has never been through an appraisal. Pick someone who understands insurance "
        "estimating, knows the appraisal process, and has a track record of results."
    )
    pdf.section_title("Mistake 2: Submitting a Weak Estimate")
    pdf.body_text(
        "If your estimate is not at least as detailed as the carrier's, you are already behind. Your estimate "
        "should be more detailed, more thorough, and better supported. Vague line items and round numbers do not "
        "impress umpires. Precision and documentation win appraisals."
    )
    pdf.section_title("Mistake 3: Missing the Deadlines")
    pdf.body_text(
        "The policy sets deadlines for selecting appraisers and umpires. Missing these deadlines can give the "
        "carrier an argument that you waived your rights. Calendar every deadline and follow up in writing. "
        "Always use certified mail or another method that provides proof of delivery."
    )
    pdf.section_title("Mistake 4: Confusing Appraisal with Mediation")
    pdf.body_text(
        "Appraisal is not a negotiation. Your appraiser is not there to split the difference or find a middle "
        "ground. They are there to determine the actual amount of loss. If the actual loss is $100,000 and the "
        "carrier says $30,000, the correct answer is not $65,000 — it is $100,000. Do not let anyone talk you "
        "into compromising before the process even begins."
    )
    pdf.section_title("Mistake 5: Not Addressing Causation")
    pdf.body_text(
        "While appraisal technically only addresses the amount of loss, causation questions inevitably arise. "
        "The carrier's appraiser will try to exclude items by claiming they are not related to the covered loss. "
        "Your appraiser needs to be prepared to explain why each item of damage is causally connected to the loss "
        "event. This is where expertise matters."
    )
    pdf.callout_box(
        "The biggest overall mistake is treating appraisal as informal or casual. Treat it like a hearing. "
        "Prepare meticulously, document thoroughly, and present your case as if a judge is watching — because "
        "one might be, if the carrier challenges the award.",
        title="Bottom Line"
    )

    # Chapter 9
    pdf.chapter_title("Sample Letters and Forms")
    pdf.section_title("Sample Demand for Appraisal")
    pdf.body_text(
        "[Date]\n\n"
        "[Insurance Company Name]\n"
        "[Claims Department Address]\n\n"
        "Re: Insured: [Your Name]\n"
        "Policy Number: [Policy Number]\n"
        "Claim Number: [Claim Number]\n"
        "Date of Loss: [Date of Loss]\n\n"
        "Dear Claims Manager:\n\n"
        "This letter constitutes a formal demand for appraisal pursuant to the appraisal provision contained "
        "in the above-referenced policy of insurance. We have been unable to agree on the amount of loss arising "
        "from the [describe loss event] that occurred on [date of loss].\n\n"
        "In accordance with the policy, I hereby demand that the amount of loss be determined by appraisal as "
        "provided in the policy. I have selected [Appraiser Name], [title/credentials], as my competent and "
        "impartial appraiser. Please provide the name and contact information of your selected appraiser within "
        "twenty (20) days of your receipt of this demand, as required by the policy.\n\n"
        "Please direct all appraisal-related correspondence to [your contact information or your representative's "
        "contact information].\n\n"
        "Sincerely,\n"
        "[Your Name]"
    )

    pdf.section_title("Sample Follow-Up for Non-Response")
    pdf.body_text(
        "[Date — 21+ days after initial demand]\n\n"
        "[Insurance Company Name]\n"
        "[Claims Department Address]\n\n"
        "Re: Insured: [Your Name]\n"
        "Policy Number: [Policy Number]\n"
        "Claim Number: [Claim Number]\n"
        "SECOND DEMAND FOR APPRAISAL — FAILURE TO RESPOND\n\n"
        "Dear Claims Manager:\n\n"
        "On [date of initial demand], I served a formal demand for appraisal on your company. More than twenty "
        "(20) days have elapsed and your company has failed to select an appraiser as required by the policy. "
        "Your failure to comply with the policy's appraisal provision constitutes a material breach of the "
        "insurance contract.\n\n"
        "I hereby demand that you select a competent and impartial appraiser within ten (10) days of receipt "
        "of this letter. If your company fails to do so, I will have no choice but to seek judicial intervention "
        "by filing a Petition to Compel Appraisal in Superior Court, and I will seek recovery of all costs and "
        "attorney's fees incurred in connection with that petition.\n\n"
        "Sincerely,\n"
        "[Your Name]"
    )

    # ADDITIONAL DEPTH — Table of Contents style overview
    pdf.chapter_title("The Appraisal Hearing: What to Expect")
    pdf.body_text(
        "While appraisal is not a formal hearing in the legal sense, the process has structure, and understanding "
        "that structure gives you a significant advantage. Typically, the two appraisers will schedule one or more "
        "joint inspections of the property. During these inspections, each appraiser examines the damage, takes "
        "measurements, and documents their findings. Your appraiser should bring their own camera, measuring "
        "tools, and a copy of their estimate."
    )
    pdf.body_text(
        "After the inspections, each appraiser prepares their independent estimate of the loss. These estimates "
        "are exchanged simultaneously or submitted to the umpire. The umpire then reviews both estimates and "
        "identifies the areas of agreement and disagreement. For items where the appraisers agree, those amounts "
        "are final. For disputed items, the umpire makes the determination."
    )
    pdf.body_text(
        "Some umpires hold a hearing where both appraisers present their positions on disputed items. Other "
        "umpires simply review the written submissions and issue a decision. Your appraiser should be prepared "
        "for either format. If a hearing is held, your appraiser should have a clear, organized presentation "
        "with photographs, documentation, and line-by-line explanations for each disputed item."
    )
    pdf.section_title("Joint Inspection Protocol")
    pdf.numbered_list([
        "Both appraisers and the umpire should inspect the property together when possible",
        "Your appraiser should document every area of damage, even items not in the carrier's estimate",
        "Bring all supporting documentation — contractor bids, code requirements, product specifications",
        "Photograph everything during the inspection, including areas the carrier's appraiser may try to skip",
        "Take notes on what the carrier's appraiser agrees or disagrees with during the inspection",
        "If destructive testing is needed (opening walls, lifting flooring), discuss this with all parties",
        "Request that the umpire physically inspect contested areas — do not let the inspection be cursory",
    ])
    pdf.callout_box(
        "The joint inspection is your chance to educate the umpire about the real scope of the damage. Make sure "
        "your appraiser uses this opportunity effectively. An umpire who sees the damage firsthand is far more "
        "likely to award appropriate amounts than one who only reviews paperwork.",
        title="Use the Inspection"
    )

    pdf.chapter_title("Preparing Your Appraisal Submission Package")
    pdf.body_text(
        "Your appraisal submission package is the most important document in the entire process. Think of it as "
        "your brief to the umpire. It should be comprehensive, well-organized, and persuasive. A sloppy or "
        "incomplete submission signals to the umpire that your numbers are unreliable."
    )
    pdf.section_title("Components of a Strong Submission")
    pdf.numbered_list([
        "Cover letter — summarize the loss, the scope of the dispute, and the total amount you are claiming",
        "Detailed Xactimate estimate — line by line, room by room, with full pricing and quantities",
        "Comparison document — your estimate side-by-side with the carrier's estimate, highlighting every difference",
        "Photograph binder — organized by room, clearly labeled, with captions explaining the damage shown",
        "Contractor bids — at least two independent bids supporting your repair costs",
        "Code compliance documentation — relevant building code sections requiring upgrades",
        "Product specifications — for materials that need to be matched to pre-loss quality",
        "Expert reports — if applicable (structural engineer, environmental consultant, etc.)",
    ])
    pdf.body_text(
        "The comparison document deserves special attention. Create a spreadsheet that lists every line item in "
        "both estimates. For each line item, show your amount, the carrier's amount, and the difference. Add a "
        "column for notes explaining why the carrier's amount is insufficient. This makes it easy for the umpire "
        "to see, at a glance, where the differences lie and how large they are."
    )
    pdf.body_text(
        "Organize the photograph binder chronologically and by room. Label each photograph with the date taken, "
        "the room or area shown, and a description of what the photograph demonstrates. Cross-reference photographs "
        "to specific line items in your estimate. The goal is to make the umpire's job as easy as possible — "
        "every disputed item should be supported by visual evidence and a clear explanation."
    )
    pdf.callout_box(
        "Professional presentation builds credibility. An umpire who receives a well-organized, thorough submission "
        "will take your numbers seriously. An umpire who receives a stack of loose papers and unlabeled photos "
        "will question whether the numbers are reliable.",
        title="Professionalism Wins"
    )

    pdf.chapter_title("After the Award: Enforcement and Next Steps")
    pdf.body_text(
        "Once the appraisal panel issues its award, the process is not necessarily over. The carrier must pay "
        "the award, and sometimes carriers resist. Understanding your rights after the award is issued is "
        "essential to ensuring you actually receive the money you are owed."
    )
    pdf.section_title("Confirming the Award")
    pdf.body_text(
        "Under the California Arbitration Act (CCP 1285), you can petition the court to confirm the appraisal "
        "award. Once confirmed, the award becomes a judgment of the court with full enforcement power. This "
        "means you can use all the collection tools available to judgment creditors — including wage garnishments, "
        "bank levies, and liens — although these are rarely necessary against insurance carriers. The confirmation "
        "petition should be filed within four years of the award under CCP 1288."
    )
    pdf.section_title("Carrier Challenges to the Award")
    pdf.body_text(
        "Carriers occasionally attempt to vacate (overturn) appraisal awards under CCP 1286.2. The grounds for "
        "vacating an award are extremely narrow: corruption or fraud, prejudicial misconduct by an appraiser, "
        "or the appraiser exceeding their powers. Courts apply these grounds very strictly, and most attempts "
        "to vacate appraisal awards fail. If the carrier files a petition to vacate, you will need an attorney "
        "to respond — but the law is strongly in your favor."
    )
    pdf.body_text(
        "The most common carrier argument is that the appraisers 'exceeded their powers' by deciding coverage "
        "questions rather than limiting themselves to amount-of-loss determinations. This is why it is so "
        "important to frame the appraisal around amount-of-loss issues from the beginning. If your submission "
        "was properly focused on the cost and scope of repairs, this argument will fail."
    )
    pdf.section_title("Interest on Late Payments")
    pdf.body_text(
        "If the carrier delays payment after the award is issued, you may be entitled to interest on the "
        "unpaid amount. Under California law, interest accrues at the legal rate (currently 10% per year under "
        "Civil Code Section 3289) from the date the payment was due. This can add up quickly on large awards "
        "and creates additional pressure on the carrier to pay promptly."
    )
    pdf.callout_box(
        "Once you have a favorable appraisal award, the carrier has very limited ability to avoid paying it. "
        "If they delay, confirm the award as a court judgment and demand payment with interest. Consult an "
        "attorney if the carrier is refusing to pay — the carrier's post-award conduct may support additional "
        "bad faith damages.",
        title="Enforce Your Award"
    )
    pdf.bullet_list([
        "File a petition to confirm the award within 4 years (but do it promptly — there is no reason to wait)",
        "The carrier has 100 days from service of the award to file a petition to vacate (CCP 1288.2)",
        "Interest accrues on unpaid amounts at the legal rate",
        "Post-award bad faith is a separate cause of action — the carrier cannot ignore the award without consequences",
        "Keep all appraisal documents indefinitely — they may be needed for tax purposes or future disputes",
    ])

    pdf.chapter_title("Appraisal vs. Litigation: When Each Path Makes Sense")
    pdf.body_text(
        "One of the most frequent questions I hear is: should I go to appraisal or should I file a lawsuit? "
        "The answer depends on several factors, and making the wrong choice can cost you time, money, and leverage. "
        "Let me break down the key considerations."
    )
    pdf.section_title("Advantages of Appraisal")
    pdf.body_text(
        "Appraisal is faster than litigation. A typical appraisal can be completed in 60 to 120 days from the "
        "date of the demand. Litigation can take two to four years. Appraisal is also less expensive — the costs "
        "are limited to your appraiser's fee and a share of the umpire's fee, typically a few thousand dollars "
        "total. Litigation involves attorney's fees, expert costs, deposition expenses, and court costs that can "
        "run into tens of thousands of dollars."
    )
    pdf.body_text(
        "Appraisal is also less adversarial. The process is private, there is no public record of the proceedings, "
        "and the parties can maintain a working relationship during and after the appraisal. This matters when you "
        "still have an ongoing claim with the carrier — you do not want to torch the relationship while you are "
        "still collecting ALE payments or waiting for supplement approvals."
    )
    pdf.section_title("Advantages of Litigation")
    pdf.body_text(
        "Litigation provides access to discovery — the ability to subpoena the carrier's internal documents, "
        "claim notes, emails, and guidelines. In a bad faith case, discovery is where the smoking gun evidence "
        "lives. Appraisal has no discovery mechanism. Litigation also allows you to pursue damages beyond the "
        "policy benefits — emotional distress, consequential damages, punitive damages, and attorney's fees. "
        "Appraisal is limited to the amount of the insured loss."
    )
    pdf.body_text(
        "If the carrier has engaged in bad faith conduct — not just underpaying your claim but doing so in a way "
        "that is unreasonable, oppressive, or fraudulent — litigation may be the better path because it allows "
        "you to hold the carrier accountable for the full scope of its misconduct. Appraisal only fixes the "
        "dollar amount; litigation can punish the behavior."
    )
    pdf.callout_box(
        "In many cases, the best strategy is both: demand appraisal to fix the amount of loss quickly, and "
        "preserve your bad faith claims for separate litigation if warranted. The two are not mutually exclusive. "
        "Appraisal resolves the amount dispute; litigation addresses the carrier's conduct.",
        title="You Can Do Both"
    )
    pdf.section_title("Decision Framework")
    pdf.numbered_list([
        "If the dispute is purely about the dollar amount and the carrier has acted in good faith — choose appraisal",
        "If the carrier has acted in bad faith but the primary goal is getting paid — choose appraisal first, then consider bad faith litigation",
        "If the carrier has denied coverage entirely — appraisal is not available; litigation is your path",
        "If the carrier's bad faith conduct has caused significant consequential damages — litigation may be the better primary path",
        "If time is critical (you need money to start repairs immediately) — appraisal is faster",
        "If you want to set a precedent or punish egregious carrier behavior — litigation is the tool for that",
    ])

    pdf.chapter_title("Appraisal for Commercial Properties")
    pdf.body_text(
        "Everything we have discussed applies to commercial property claims as well, but commercial appraisals "
        "have additional complexities. Commercial policies use different forms (typically ISO CP 00 10 or similar), "
        "and the appraisal language may differ from the standard fire policy. Commercial losses also involve "
        "business income (BI) and extra expense (EE) claims that may or may not be subject to appraisal."
    )
    pdf.body_text(
        "The scope of commercial property damage can be enormous. A warehouse fire, a commercial roof collapse, "
        "or water damage from a broken sprinkler system can result in millions of dollars in damage to the "
        "building, inventory, equipment, and business income. The appraisal process works the same way in "
        "principle — two appraisers and an umpire — but the stakes are higher and the issues are more complex."
    )
    pdf.section_title("Key Differences in Commercial Appraisal")
    pdf.bullet_list([
        "Commercial policies may have different appraisal language — read your specific policy carefully",
        "Business income losses are sometimes excluded from appraisal — check the policy and case law",
        "Extra expense claims may or may not be appraisable depending on the policy form",
        "Commercial properties often require specialized appraisers with commercial construction experience",
        "The amounts at stake justify higher appraiser and umpire fees — choose the best, not the cheapest",
        "Commercial leases may give the tenant appraisal rights under the landlord's policy — check the lease",
        "Inventory losses require detailed documentation — perpetual inventory records are extremely valuable",
    ])
    pdf.body_text(
        "If you own a business and are considering appraisal, hire an appraiser with specific commercial claims "
        "experience. Commercial estimating is a different discipline from residential estimating. An appraiser "
        "who is excellent at residential claims may be out of their depth with a commercial warehouse or a "
        "multi-tenant office building. Ask about their commercial experience before you hire them."
    )
    pdf.callout_box(
        "Commercial policyholders should also consider whether they need a forensic accountant in addition to "
        "a construction appraiser. Business income and extra expense calculations require accounting expertise "
        "that most construction professionals do not have.",
        title="Consider a Forensic Accountant"
    )

    pdf.chapter_title("Frequently Asked Questions About Appraisal")
    pdf.section_title("Q: How long does the appraisal process take?")
    pdf.body_text(
        "A: From the date of the initial demand to the issuance of an award, a typical appraisal takes 60 to "
        "120 days. The timeline can be shorter if both parties are cooperative, or longer if there are disputes "
        "over the umpire selection or one side is dragging their feet. Complex losses with multiple buildings "
        "or extensive damage may take longer."
    )
    pdf.section_title("Q: How much does appraisal cost?")
    pdf.body_text(
        "A: You pay for your own appraiser (typically $2,000 to $10,000 depending on the complexity of the loss) "
        "and you split the umpire's fee equally with the carrier. Umpire fees vary widely but typically range from "
        "$2,000 to $10,000. So your total out-of-pocket cost for appraisal is usually $3,000 to $15,000. Given "
        "that appraisal awards typically increase the policyholder's recovery by $20,000 to $100,000 or more, the "
        "return on investment is substantial."
    )
    pdf.section_title("Q: Can the carrier demand appraisal to avoid paying my claim?")
    pdf.body_text(
        "A: The carrier can demand appraisal, but it cannot use appraisal as a delay tactic. Under Lee v. California "
        "Capital, the carrier must continue to act in good faith during appraisal, including paying undisputed "
        "amounts promptly. If the carrier's demand for appraisal appears to be a stalling strategy, you may be "
        "able to argue Sharma waiver."
    )
    pdf.section_title("Q: Do I need a lawyer for appraisal?")
    pdf.body_text(
        "A: Not necessarily. Appraisal is not a legal proceeding, and lawyers do not typically participate in the "
        "appraisal hearing itself. However, an attorney can be invaluable for drafting the demand, handling the "
        "petition to compel (if needed), advising on strategy, and addressing any bad faith issues that arise. "
        "Many policyholders use a public adjuster as their appraiser and an attorney for legal advice — this "
        "combination provides both technical expertise and legal protection."
    )
    pdf.section_title("Q: What if I am not happy with the appraisal award?")
    pdf.body_text(
        "A: If the award is lower than you expected, your options are very limited. Under the Arbitration Act, "
        "courts can only vacate an award for corruption, fraud, misconduct, or excess of authority. A low award "
        "that you disagree with is not grounds for vacating it. This is why the choice of appraiser is so critical — "
        "once the award is issued, you are generally stuck with it. Choose your appraiser carefully and prepare your "
        "submission thoroughly."
    )
    pdf.section_title("Q: Can I demand appraisal and file a bad faith lawsuit at the same time?")
    pdf.body_text(
        "A: Yes. Appraisal resolves the amount-of-loss dispute. A bad faith lawsuit addresses the carrier's "
        "unreasonable conduct in handling the claim. These are separate issues, and pursuing one does not waive "
        "your right to pursue the other. In fact, winning a favorable appraisal award often strengthens your bad "
        "faith case because it proves the carrier was underpaying the claim."
    )
    pdf.callout_box(
        "A favorable appraisal award is powerful evidence in a bad faith case. If the appraisal awards $100,000 "
        "and the carrier originally offered $35,000, the $65,000 gap speaks for itself. The carrier's defense "
        "that its estimate was 'reasonable' becomes very difficult to sustain.",
        title="Appraisal Supports Bad Faith"
    )

    pdf.chapter_title("The Role of the Public Adjuster in Appraisal")
    pdf.body_text(
        "A California Licensed Public Adjuster is uniquely qualified to serve as your appraiser in the appraisal "
        "process. Public adjusters work exclusively for policyholders — never for insurance companies. They "
        "understand both the insurance side and the construction side of property claims, which makes them "
        "exceptionally effective appraisers."
    )
    pdf.body_text(
        "When you hire a public adjuster as your appraiser, you get someone who can prepare a detailed Xactimate "
        "estimate, understand the carrier's estimate methodology and challenge it effectively, present your case "
        "to the umpire with professional credibility, and navigate the procedural requirements of the appraisal "
        "process. This combination of insurance knowledge and construction expertise is exactly what the "
        "appraisal process demands."
    )
    pdf.section_title("Public Adjuster vs. Contractor as Appraiser")
    pdf.body_text(
        "Some policyholders choose to use a contractor as their appraiser. While contractors have construction "
        "knowledge, they often lack the insurance expertise needed to frame the appraisal effectively. A contractor "
        "may know what the repairs cost, but they may not understand how to present that cost in a way that "
        "the umpire will accept. They may not understand depreciation methodology, code upgrade coverage, "
        "matching requirements, or the specific line-item format that umpires expect."
    )
    pdf.body_text(
        "A public adjuster, by contrast, speaks both languages. They understand construction and they understand "
        "insurance. They know what the carrier's appraiser will argue and they know how to counter it. They have "
        "been through the process dozens or hundreds of times. This experience matters when the umpire is deciding "
        "between two competing estimates."
    )
    pdf.callout_box(
        "When choosing between a public adjuster and a contractor as your appraiser, choose the person with the "
        "most appraisal experience. Appraisal is a specialized process, and experience in that process is more "
        "valuable than general construction knowledge.",
        title="Experience in Appraisal Matters Most"
    )

    pdf.chapter_title("Special Appraisal Issues: ACV, Code Upgrades, and Contents")
    pdf.section_title("ACV Holdback Disputes")
    pdf.body_text(
        "When the carrier pays you the Actual Cash Value (ACV) of the loss, they hold back the depreciation "
        "until you complete repairs and submit receipts. But what if the ACV itself is calculated incorrectly? "
        "Appraisal can address both the full replacement cost and the proper ACV by correcting depreciation "
        "errors, adjusting useful life assumptions, and ensuring that labor is not being depreciated."
    )
    pdf.body_text(
        "In California, the holdback amount should be released as you complete repairs — you do not have to wait "
        "until the entire project is finished. If you have completed the roofing and want the roof depreciation "
        "holdback released, submit the roofing invoice and demand payment of the holdback for that line item. "
        "The carrier cannot hold the entire depreciation hostage until the last nail is driven."
    )
    pdf.section_title("Code Upgrades in Appraisal")
    pdf.body_text(
        "Code upgrade costs are absolutely within the scope of appraisal when the dispute is over the amount of "
        "the code upgrade cost, not whether the policy covers code upgrades. If the carrier agrees that code "
        "upgrades are covered but disputes the dollar amount, your appraiser should include the full code upgrade "
        "cost in their estimate. This includes current electrical code requirements, energy efficiency upgrades, "
        "fire resistance requirements, seismic requirements, and all other applicable building codes."
    )
    pdf.section_title("Contents in Appraisal")
    pdf.body_text(
        "While most appraisals focus on the dwelling (Coverage A), contents (Coverage C) disputes can also be "
        "resolved through appraisal if the dispute is over the amount of loss. If you and the carrier disagree "
        "on the replacement cost or depreciation of your personal property items, appraisal may be available. "
        "However, contents appraisals are less common and require an appraiser with specific expertise in "
        "personal property valuation."
    )
    pdf.callout_box(
        "When invoking appraisal, be specific about what categories of loss you are including. If your dispute "
        "covers dwelling, other structures, and contents, make sure the appraisal demand includes all three. "
        "You do not want to win an appraisal on the dwelling and then have to start a separate appraisal on "
        "contents because you forgot to include them.",
        title="Include All Disputed Coverages"
    )

    pdf.chapter_title("Real-World Appraisal Results: What to Expect")
    pdf.body_text(
        "I want to give you a realistic sense of what appraisal can accomplish. These are generalized examples "
        "drawn from real cases — specific details changed to protect confidentiality — that illustrate the range "
        "of outcomes policyholders can expect."
    )
    pdf.section_title("Example 1: Roof Replacement Dispute")
    pdf.body_text(
        "A carrier estimated roof damage at $12,000. The policyholder's contractor bid was $38,000 for a full "
        "replacement (matching requirement due to discontinued shingles). At appraisal, the award came in at "
        "$34,500 — nearly triple the carrier's estimate. The appraisal took 75 days from demand to award."
    )
    pdf.section_title("Example 2: Kitchen Water Damage")
    pdf.body_text(
        "A burst pipe caused extensive water damage to a kitchen and adjoining family room. The carrier's estimate "
        "was $23,000. The policyholder's public adjuster estimated $67,000 including cabinet replacement, "
        "flooring replacement (matching), and code upgrades. The appraisal award was $58,000 — more than double "
        "the carrier's estimate. The key disputed items were the matching requirement for flooring and the "
        "inclusion of O&P."
    )
    pdf.section_title("Example 3: Total Fire Loss")
    pdf.body_text(
        "A total fire loss where the carrier estimated the dwelling rebuilding cost at $380,000 and the "
        "policyholder's estimate was $520,000. The dispute centered on current construction costs versus the "
        "carrier's outdated pricing, code upgrade costs, and demolition and debris removal. The appraisal "
        "award was $485,000. The $105,000 difference between the carrier's estimate and the award was the "
        "difference between a home that could and could not be rebuilt."
    )
    pdf.callout_box(
        "In my experience, policyholders who are represented by a competent public adjuster win at appraisal "
        "in the overwhelming majority of cases, and the average increase over the carrier's estimate is 50-200%. "
        "Appraisal works because the process forces an objective look at the real numbers.",
        title="Appraisal Works"
    )

    pdf.closing_page()
    path = f"{OUTPUT_DIR}/appraisal-handbook.pdf"
    pdf.output(path)
    print(f"  [OK] {path} ({pdf.page_no()} pages)")


# =============================================================================
# GUIDE 2: Xactimate Dispute Guide: Line by Line
# =============================================================================
def build_xactimate_guide():
    pdf = InsuranceGuidePDF(
        title="Xactimate Dispute Guide: Line by Line",
        subtitle="How to Read, Challenge, and Supplement Insurance Estimates"
    )
    pdf.cover_page()
    pdf.disclaimer_page()

    # Chapter 1
    pdf.chapter_title("Understanding Xactimate")
    pdf.section_title("What Is Xactimate?")
    pdf.body_text(
        "Xactimate is the industry-standard estimating software used by virtually every insurance carrier in the "
        "United States. Developed by Verisk Analytics (formerly Xactware), it is a pricing database and estimating "
        "platform that generates line-item construction estimates for property damage claims. When your insurance "
        "adjuster comes to your home, inspects the damage, and produces an estimate, that estimate was almost "
        "certainly created in Xactimate."
    )
    pdf.body_text(
        "Understanding this software is critical for policyholders because Xactimate is simultaneously the tool "
        "that determines what you get paid and the tool that carriers use to minimize what they pay. The software "
        "itself is neutral — it is a database of prices and activities. But the person operating the software makes "
        "choices about what to include, what to exclude, what quality of materials to use, and how to measure "
        "quantities. Those choices are where the dispute lives."
    )
    pdf.callout_box(
        "Xactimate is not your enemy — it is a tool. The problem is not the software; it is how the carrier's adjuster "
        "uses it. When you understand the tool, you can fight on equal ground.",
        title="Key Principle"
    )

    pdf.section_title("How Carriers Use Xactimate")
    pdf.body_text(
        "Insurance carriers subscribe to Xactimate's pricing database, which is updated monthly with local labor "
        "and material costs. In theory, this means the estimates should reflect real-world pricing. In practice, "
        "carriers manipulate the software in several ways to lower their payouts."
    )
    pdf.bullet_list([
        "Using 'program pricing' — custom price lists that override Xactimate's default local pricing with lower rates",
        "Excluding line items for work that is clearly necessary (e.g., removing baseboards to do drywall repair)",
        "Using minimum-charge thresholds to avoid paying for small but real items of damage",
        "Selecting the cheapest material grade instead of matching what you actually have",
        "Underestimating quantities by using shortcuts instead of actual measurements",
        "Omitting overhead and profit even when the job clearly requires a general contractor",
        "Excluding code upgrade line items that are required by current building codes",
    ])

    # Chapter 2
    pdf.chapter_title("Reading an Xactimate Estimate Page by Page")
    pdf.body_text(
        "An Xactimate estimate has a standard structure that, once you learn to read it, will tell you everything "
        "you need to know about what the carrier is and is not paying for. Let me walk you through the key sections."
    )
    pdf.section_title("The Summary Page")
    pdf.body_text(
        "The first page or pages of an Xactimate estimate are the summary. This shows the total amounts broken "
        "down by category — typically Dwelling (Coverage A), Other Structures (Coverage B), and sometimes "
        "Contents (Coverage C). You will see line items for the total Replacement Cost Value (RCV), depreciation "
        "applied, and the resulting Actual Cash Value (ACV). Check the math here first. I have seen carriers "
        "apply depreciation incorrectly at the summary level, resulting in a lower ACV than the individual line "
        "items support."
    )
    pdf.section_title("Room-by-Room Detail Pages")
    pdf.body_text(
        "After the summary, you will find detailed pages organized by room or area. Each page lists individual "
        "line items representing specific construction activities. Every line item has several components you "
        "need to understand."
    )
    pdf.bullet_list([
        "Selector Code — a unique identifier for the activity (e.g., DRY60 for drywall removal)",
        "Description — what the line item covers",
        "Quantity — the amount (measured in square feet, linear feet, each, etc.)",
        "Unit Price — the cost per unit (this is where program pricing manipulation shows up)",
        "Total — quantity multiplied by unit price",
        "Depreciation — the age-based reduction applied to get from RCV to ACV",
        "ACV — the actual cash value after depreciation is applied",
    ])
    pdf.section_title("The Depreciation Schedule")
    pdf.body_text(
        "Somewhere in the estimate — usually at the end — you will find the depreciation schedule. This shows "
        "the depreciation percentage and dollar amount applied to each line item. Review this carefully. Carriers "
        "often apply blanket depreciation rates that do not account for the actual condition and remaining useful "
        "life of the damaged items. A 10-year-old roof does not depreciate the same way as a 10-year-old carpet."
    )
    pdf.callout_box(
        "Always compare the depreciation applied to each line item against the actual age and condition of the "
        "item. Over-depreciation is one of the most common ways carriers underpay claims. In California, labor "
        "cannot be depreciated — only materials. This is per the FAIR Claims Settlement Practices Regulations.",
        title="Depreciation Alert"
    )

    # Chapter 3
    pdf.chapter_title("The 25 Most Commonly Omitted Line Items")
    pdf.body_text(
        "Based on decades of experience reviewing carrier estimates, these are the 25 line items that insurance "
        "adjusters most frequently leave out. Every one of these represents real work that must be done — and real "
        "money that the policyholder is owed."
    )
    pdf.numbered_list([
        "Content manipulation — moving furniture and belongings to access damaged areas",
        "Floor protection during repairs — covering existing floors to prevent construction damage",
        "Baseboard removal and reset — required for most drywall and flooring repairs",
        "Shoe mold removal and reset — frequently overlooked at floor transitions",
        "Door and window casing removal and reset — necessary when adjacent walls are repaired",
        "Texture matching on repaired drywall — carriers often pay for smooth finish when texture exists",
        "Paint primer — required before repainting repaired areas, almost always omitted",
        "Multiple coats of paint — most surfaces require two coats for proper coverage",
        "Masking and preparation for painting — time-consuming but essential",
        "Matching paint on entire wall or room — you cannot just paint a patch",
        "Electrical cover plate removal and reset — must be removed for drywall and painting",
        "Light fixture removal and reset — same as above for overhead lighting",
        "HVAC register removal and reset — vents must come off for drywall and painting",
        "Toilet removal and reset — required for most bathroom floor replacements",
        "Appliance disconnect and reconnect — when working behind or under appliances",
        "Carpet transition strips — needed at doorways and room transitions",
        "Carpet seaming — when matching new carpet to existing",
        "Underlayment for flooring — carriers often price only the finish floor, not what goes under it",
        "Rough carpentry for structural repairs — framing work behind drywall",
        "Window and door hardware adjustment — necessary after structural or drywall movement",
        "Code upgrades — current building code requirements that did not exist when the home was built",
        "Permit fees — required for most structural, electrical, and plumbing work",
        "General contractor overhead and profit — 10% overhead plus 10% profit is industry standard",
        "Debris removal and dump fees — carriers routinely underestimate the volume and cost",
        "Final cleaning after construction — standard on every job, frequently omitted",
    ])
    pdf.callout_box(
        "Individually, each of these omissions might only be a few hundred dollars. But when 10 or 15 of them "
        "are missing from a single estimate, the cumulative underpayment can easily reach $10,000 to $20,000 or more.",
        title="The Cumulative Effect"
    )

    # Chapter 4
    pdf.chapter_title("Understanding Labor and Material Pricing")
    pdf.body_text(
        "Xactimate's pricing database is based on surveys of contractors and suppliers in each geographic area. "
        "Prices are organized by zip code and updated monthly. In theory, the prices should reflect what contractors "
        "actually charge. In reality, there are several ways the pricing can be manipulated or may not reflect "
        "the true cost of repairs."
    )
    pdf.section_title("Program Pricing")
    pdf.body_text(
        "Some carriers use what is called 'program pricing' — custom price lists that they negotiate with "
        "preferred vendors and then load into Xactimate to override the default local pricing. These prices are "
        "almost always lower than market rates because they reflect volume discounts that the policyholder does "
        "not benefit from. You are not required to use the carrier's preferred vendors, and you are not bound by "
        "their program pricing."
    )
    pdf.section_title("Labor Minimums")
    pdf.body_text(
        "Xactimate has built-in minimum charges for most activities. For example, the minimum charge for a "
        "painting activity might cover up to 100 square feet. If the carrier's adjuster only scopes 50 square "
        "feet of painting, Xactimate will still charge the minimum. But if the carrier's adjuster underestimates "
        "the quantity, you might get less than you should because the minimum was not triggered or the excess "
        "quantity above the minimum was underestimated."
    )
    pdf.section_title("Material Quality Grades")
    pdf.body_text(
        "Xactimate offers multiple quality grades for most materials. Standard grade, high grade, and premium "
        "grade each have different price points. If your home has high-quality materials and the carrier's "
        "adjuster selects standard grade, you are being underpaid. Check every material line item against what "
        "is actually in your home."
    )
    pdf.callout_box(
        "You are entitled to be made whole — meaning your home should be restored to its pre-loss condition "
        "using materials of like kind and quality. If you have premium granite countertops, the carrier cannot "
        "pay you for builder-grade laminate.",
        title="Like Kind and Quality"
    )

    # Chapter 5
    pdf.chapter_title("Overhead and Profit: When You Are Entitled to It")
    pdf.body_text(
        "Overhead and Profit — commonly called O&P — is one of the most contentious issues in property insurance "
        "claims. O&P refers to the general contractor's overhead (typically 10%) and profit (typically 10%) that "
        "are added on top of the direct repair costs. When a general contractor manages a project, they charge "
        "O&P to cover their business expenses and earn a profit. This is standard in the construction industry."
    )
    pdf.body_text(
        "Insurance carriers routinely exclude O&P from their estimates, arguing that the repairs do not require "
        "a general contractor. They claim the policyholder can hire individual subcontractors — a roofer, a "
        "drywall installer, a painter — and manage the job themselves. This is absurd in most cases. The "
        "average homeowner is not a construction manager and should not be expected to act as one."
    )
    pdf.section_title("The Three-Trade Rule")
    pdf.body_text(
        "A commonly cited (though not universally accepted) guideline is the 'three-trade rule': if the repairs "
        "require three or more distinct trades — for example, a roofer, a drywall contractor, and a painter — "
        "then the job clearly requires general contractor coordination and O&P should be included. While this "
        "is not a formal legal standard, it is a persuasive argument in most appraisal and litigation settings."
    )
    pdf.callout_box(
        "If your repair requires multiple trades, you are almost certainly entitled to O&P. The carrier's argument "
        "that you should manage the project yourself does not hold up. You are entitled to hire a general contractor "
        "to manage the repairs, and that contractor is entitled to charge overhead and profit.",
        title="O&P Rule of Thumb"
    )
    pdf.bullet_list([
        "O&P is standard at 10% overhead + 10% profit (20% combined) on the repair subtotal",
        "Carriers exclude it to save money, not because you are not entitled to it",
        "The more trades involved, the stronger your argument for O&P",
        "Some policies explicitly state O&P is included — check your policy language",
        "In California, DOI guidance supports O&P when a GC is reasonably required",
        "Get a written statement from a general contractor confirming they charge O&P on the type of work at issue",
    ])

    # Chapter 6
    pdf.chapter_title("Preparing a Supplement")
    pdf.body_text(
        "A supplement is a formal request to the insurance company to revise its estimate to include items that "
        "were omitted, undervalued, or discovered after the initial inspection. Supplements are a normal part "
        "of the claims process — damage is often more extensive than it first appears, and not everything can "
        "be seen during a first visit."
    )
    pdf.body_text(
        "The key to a successful supplement is preparation. You need to present the carrier with clear, documented "
        "evidence of the additional damage or costs. A well-prepared supplement includes a revised Xactimate "
        "estimate, photographs, contractor statements, and a cover letter explaining each additional item."
    )
    pdf.section_title("Structure of a Supplement Submission")
    pdf.numbered_list([
        "Cover letter identifying the claim, the original estimate amount, and the supplemental amount requested",
        "Comparison spreadsheet showing original line items vs. supplemental line items",
        "Revised Xactimate estimate incorporating all supplemental items",
        "Photographs documenting the additional or newly discovered damage",
        "Contractor statements or bids supporting the supplemental items",
        "Code compliance documentation for any code upgrade items",
        "Building permit documentation if applicable",
    ])
    pdf.body_text(
        "When writing your supplement, be specific. Do not just say 'additional drywall damage discovered.' "
        "Instead, write: 'Upon removal of damaged drywall in the master bedroom east wall, additional water "
        "staining and mold growth was discovered on the interior framing, extending 8 linear feet from the "
        "southeast corner. See attached photographs DSC_0341 through DSC_0348.' The more specific you are, "
        "the harder it is for the carrier to deny the supplement."
    )
    pdf.callout_box(
        "Always submit supplements in writing, with photographs, and keep a copy for your records. Verbal "
        "supplement requests are useless — they can be denied or forgotten. Put everything in writing.",
        title="Documentation Rule"
    )

    # Chapter 7
    pdf.chapter_title("The Bid Comparison Method")
    pdf.body_text(
        "The bid comparison method is one of the most effective tools in your arsenal for challenging an insurance "
        "carrier's Xactimate estimate. The concept is simple: you obtain two or three written bids from licensed, "
        "reputable contractors for the full scope of repairs, and then you compare those bids to the carrier's "
        "Xactimate estimate."
    )
    pdf.body_text(
        "If three independent contractors all say the job costs $85,000 and the carrier's estimate says $45,000, "
        "you have extremely powerful evidence that the carrier's estimate is insufficient. Contractors do not have "
        "a financial incentive to inflate bids to insurance companies — they get paid the same regardless. "
        "The carrier's claim that its Xactimate estimate represents the real cost of repairs falls apart when "
        "real-world contractors disagree by 40% or more."
    )
    pdf.section_title("How to Obtain Effective Bids")
    pdf.bullet_list([
        "Use only licensed, insured contractors with experience in insurance restoration work",
        "Provide each contractor with the same scope of work for consistency",
        "Ask for itemized bids, not lump-sum proposals",
        "Ensure bids include overhead, profit, permits, and all necessary work",
        "Get bids from three contractors to establish a pattern",
        "Ask contractors to note any items in the carrier's scope that are missing or insufficient",
    ])
    pdf.body_text(
        "The bid comparison method works especially well when the carrier has used program pricing or has "
        "significantly underscoped the work. It also works well in post-disaster scenarios when labor and "
        "material prices spike due to demand. Xactimate's monthly price updates often lag behind real-time "
        "market conditions, so in a post-disaster market, the database prices may be 20-30% below what "
        "contractors actually charge."
    )
    pdf.callout_box(
        "Present the bids alongside the Xactimate estimate in a side-by-side comparison. Highlight the total "
        "gap and the most significant line-item differences. This visual comparison is compelling to adjusters, "
        "appraisers, and judges alike.",
        title="Presentation Tip"
    )

    # Chapter 8
    pdf.chapter_title("Commonly Missed Items by Room")
    pdf.body_text(
        "Different rooms have different repair complexities and different items that carriers commonly miss. "
        "Here is a room-by-room breakdown of the most frequently omitted items."
    )
    pdf.section_title("Kitchen")
    pdf.bullet_list([
        "Appliance disconnect and reconnect (gas, electric, water lines)",
        "Countertop removal and replacement when cabinets below are damaged",
        "Backsplash removal and replacement when countertops are replaced",
        "Under-cabinet lighting removal and reinstallation",
        "Plumbing disconnect and reconnect for sinks and dishwashers",
        "Cabinet hardware replacement when refinishing or replacing cabinets",
    ])
    pdf.section_title("Bathroom")
    pdf.bullet_list([
        "Toilet removal and reset (required for nearly all floor repairs)",
        "Vanity removal and reset when walls or floors behind them need work",
        "Mirror removal and replacement — old mirrors often break during removal",
        "Medicine cabinet removal and reset",
        "Shower enclosure removal when adjacent walls need repair",
        "Waterproofing membrane on floors and behind tile — code-required in many jurisdictions",
    ])
    pdf.section_title("Living Areas and Bedrooms")
    pdf.bullet_list([
        "Baseboard removal, disposal, and replacement with matching profile",
        "Window casing and door casing removal and reset",
        "Closet systems (shelving, rods, organizers) removal and reinstallation",
        "Ceiling fan removal and reinstallation (including re-wiring if needed)",
        "Smoke detector relocation or replacement to meet current code",
        "Paint matching — entire walls or rooms, not just patched areas",
    ])
    pdf.section_title("Garage")
    pdf.bullet_list([
        "Garage door opener removal and reinstallation",
        "Wall-mounted storage systems",
        "Water heater disconnection and reconnection when walls behind it are affected",
        "Attic access panel removal and replacement",
        "Firewall drywall repairs (garage-to-house firewall requires specific materials)",
    ])

    # Chapter 9
    pdf.chapter_title("Code Upgrades the Carrier Did Not Include")
    pdf.body_text(
        "Building codes change over time. When your home was built, it met the code requirements of that era. "
        "When you repair or replace damaged components today, the repairs must meet current code. This often "
        "means additional costs that did not exist when the home was originally built. These are called code "
        "upgrades, and most insurance policies include coverage for them — even though carriers routinely fail "
        "to include them in their estimates."
    )
    pdf.section_title("Common Code Upgrade Items")
    pdf.numbered_list([
        "Electrical panel upgrades — older homes may have panels that no longer meet code",
        "Arc-fault circuit interrupter (AFCI) breakers — required in bedrooms and living areas in most jurisdictions",
        "Ground-fault circuit interrupter (GFCI) outlets — required in kitchens, bathrooms, garages, and outdoors",
        "Tempered or safety glass — required near doors, in bathrooms, and at low elevations",
        "Smoke detector hardwiring and interconnection — modern code requires hardwired interconnected detectors",
        "Carbon monoxide detector installation — required on every level with sleeping areas",
        "Stair riser and handrail upgrades — current code has specific height and spacing requirements",
        "Attic and wall insulation to current R-value requirements — triggered by re-roofing or wall opening",
        "Roofing underlayment upgrades — modern code often requires synthetic underlayment or ice and water shield",
        "Plumbing venting and supply line upgrades when fixtures are replaced",
    ])
    pdf.callout_box(
        "Your policy likely includes 'ordinance or law' coverage (Coverage E or an endorsement) that specifically "
        "pays for code upgrade costs. Check your declarations page. If you have this coverage and the carrier "
        "did not include code upgrades in their estimate, you are being underpaid.",
        title="Check Your Policy"
    )
    pdf.body_text(
        "Many policyholders do not even realize that code upgrades are a covered expense. Carriers certainly "
        "are not going to volunteer the information. When you review your estimate, ask yourself: would any of "
        "the repairs trigger a code upgrade? If the answer is yes — and it almost always is in homes more than "
        "10 years old — then the carrier should be paying for it."
    )

    # Chapter 10
    pdf.chapter_title("Sample Supplement Letter")
    pdf.body_text(
        "[Date]\n\n"
        "[Insurance Company Name]\n"
        "[Claims Department Address]\n\n"
        "Re: Insured: [Your Name]\n"
        "Policy Number: [Policy Number]\n"
        "Claim Number: [Claim Number]\n"
        "Date of Loss: [Date of Loss]\n"
        "SUPPLEMENTAL CLAIM — ADDITIONAL DAMAGE AND OMITTED ITEMS\n\n"
        "Dear [Adjuster Name]:\n\n"
        "I am writing to supplement the above-referenced claim. Upon further inspection and during the course of "
        "repairs, additional damage has been identified and several items were omitted from your company's original "
        "estimate dated [date]. This supplement addresses those items.\n\n"
        "Enclosed please find:\n"
        "1. A revised Xactimate estimate incorporating all supplemental items (total supplement: $[amount])\n"
        "2. A line-item comparison between your original estimate and the revised estimate\n"
        "3. Photographs documenting the additional damage (labeled and referenced in the estimate)\n"
        "4. [Contractor bid / code requirement documentation / other supporting documents]\n\n"
        "The following categories of items are addressed in this supplement:\n\n"
        "A. Omitted Line Items: Items that should have been included in the original estimate but were not. "
        "These include [list major categories, e.g., content manipulation, baseboard removal and reset, primer "
        "and additional coats of paint, etc.].\n\n"
        "B. Newly Discovered Damage: Damage that was not visible during the initial inspection. Upon "
        "[removing damaged drywall / lifting carpet / opening walls], the following additional damage was "
        "discovered: [describe].\n\n"
        "C. Code Upgrades: The following code upgrades are required by current building code and are covered "
        "under the ordinance or law coverage in the policy: [list items].\n\n"
        "D. Overhead and Profit: This repair requires coordination of [number] trades and general contractor "
        "management. Overhead (10%) and profit (10%) have been included per industry standard.\n\n"
        "Please review this supplement and issue revised payment within 30 days. If you wish to re-inspect the "
        "property, please contact me to arrange a mutually convenient time.\n\n"
        "Sincerely,\n"
        "[Your Name]"
    )
    pdf.callout_box(
        "Keep a copy of every supplement submission, including all attachments. Send via certified mail or "
        "email with read receipt. Document the date sent and the date the carrier acknowledges receipt.",
        title="Record Keeping"
    )

    pdf.section_title("Handling Supplement Denials")
    pdf.body_text(
        "When the carrier denies your supplement — and they often will on the first attempt — do not give up. "
        "Ask for the denial in writing with specific reasons for each denied item. Carriers often deny supplements "
        "by simply ignoring them or by issuing a vague response saying 'we have reviewed your supplement and "
        "find no additional payment is owed.' This is not an adequate response under California regulations."
    )
    pdf.body_text(
        "Under 10 CCR 2695.7(b)(1), any denial must be in writing, must reference the specific policy provisions "
        "relied upon, and must provide specific factual reasons for the denial. If the carrier's supplement denial "
        "does not meet this standard, push back. Respond in writing citing the regulation and demanding a compliant "
        "denial. This creates a paper trail for a potential bad faith claim and often prompts the carrier to take "
        "a closer look at the supplement."
    )

    # Additional chapters for depth
    pdf.chapter_title("Depreciation Line by Line: How Carriers Over-Depreciate")
    pdf.body_text(
        "Depreciation is one of the most abused tools in the carrier's arsenal. When the carrier issues an ACV "
        "(Actual Cash Value) payment, they subtract depreciation from the replacement cost. The amount they depreciate "
        "directly reduces your initial payment. Over-depreciation is epidemic in the industry, and most policyholders "
        "do not know enough to challenge it."
    )
    pdf.section_title("How Depreciation Should Work")
    pdf.body_text(
        "Depreciation is supposed to reflect the actual loss in value of a building component due to age, wear, "
        "and condition. A brand-new roof has a useful life of approximately 25-30 years depending on the material. "
        "If the roof is 10 years old and in good condition, a reasonable depreciation might be 33-40%. But carriers "
        "routinely apply 50-60% depreciation to the same roof, pocketing the difference."
    )
    pdf.body_text(
        "Here is a critical point that most people do not know: in California, labor cannot be depreciated. Only "
        "materials can be depreciated. This comes from the Fair Claims Settlement Practices Regulations and has been "
        "reinforced by case law. When a roofing job costs $30,000, roughly 40-50% of that cost is labor. If the "
        "carrier depreciates the entire $30,000, they are illegally depreciating labor. The depreciation should "
        "only apply to the material portion of the cost."
    )
    pdf.callout_box(
        "California law prohibits the depreciation of labor costs. If the carrier's estimate shows depreciation "
        "applied to the full line item amount (labor plus materials), they are over-depreciating your claim. "
        "Challenge it — the carrier must separate labor and materials for depreciation purposes.",
        title="Labor Cannot Be Depreciated"
    )
    pdf.section_title("Challenging Depreciation Rates")
    pdf.bullet_list([
        "Request the carrier's depreciation schedule in writing — they must provide one",
        "Compare the depreciation rate to the item's actual condition, not just its age",
        "A well-maintained 15-year-old roof may warrant less depreciation than a neglected 10-year-old roof",
        "Challenge blanket depreciation rates — each item should be depreciated individually",
        "Verify that labor is NOT being depreciated in any line item",
        "Check whether the carrier is using the correct useful life for each material",
        "Provide photos showing the pre-loss condition of items if available",
    ])

    pdf.chapter_title("Matching Requirements: You Deserve a Uniform Result")
    pdf.body_text(
        "One of the most overlooked rights policyholders have is the right to a uniform and consistent appearance "
        "after repairs. This is called the 'matching requirement,' and it can dramatically increase the scope and "
        "cost of repairs. The principle is simple: when you repair or replace a damaged component, the result must "
        "match the surrounding undamaged components in appearance, quality, and function."
    )
    pdf.body_text(
        "For example, if a hailstorm damages half of your roof shingles and those shingles are discontinued, you "
        "cannot be left with a roof that is half new shingles and half old mismatched shingles. The carrier must "
        "pay to replace the entire roof so that it matches. The same principle applies to siding, flooring, paint, "
        "countertops, and virtually every visible component of your home."
    )
    pdf.body_text(
        "Carriers hate matching claims because they multiply the cost of repairs. A carrier would love to replace "
        "only the 10 damaged tiles in your kitchen floor, even if the replacement tiles are a slightly different "
        "color and the pattern does not match. That is not acceptable. You are entitled to a uniform appearance, "
        "and if that means replacing the entire floor to achieve it, the carrier must pay for the entire floor."
    )
    pdf.callout_box(
        "The matching requirement is not about cosmetic preference — it is about restoring your property to "
        "pre-loss condition. If the repair is visible and does not match, it has not been restored to pre-loss "
        "condition, and the carrier has not fulfilled its obligation under the policy.",
        title="Matching Is a Right"
    )
    pdf.section_title("Common Matching Disputes")
    pdf.bullet_list([
        "Roofing — discontinued shingles that cannot be matched require full roof replacement",
        "Siding — faded or discontinued siding panels require replacement of the entire elevation or home",
        "Flooring — hardwood, tile, or carpet that cannot be matched requires full room or area replacement",
        "Paint — you cannot paint one wall a slightly different shade; the entire room must match",
        "Countertops — if the countertop material is discontinued, the entire surface must be replaced",
        "Cabinetry — replacing one cabinet with a non-matching style is not acceptable",
    ])

    pdf.chapter_title("Program Pricing Exposed: What Carriers Do Not Want You to Know")
    pdf.body_text(
        "Program pricing is the insurance industry's dirty little secret. Most policyholders have never heard of "
        "it, and carriers certainly do not advertise it. Here is how it works: insurance carriers negotiate volume "
        "discounts with preferred contractor networks. They then load these discounted prices into Xactimate, "
        "overriding the software's default local market pricing. When your estimate is prepared using these "
        "program prices, every line item is artificially reduced."
    )
    pdf.body_text(
        "The problem is that you — the policyholder — are not a party to these volume agreements. You have "
        "the right to hire any licensed contractor you choose. And the contractor you hire charges market rates, "
        "not the carrier's negotiated program rates. If the carrier's estimate uses program pricing, it will "
        "not cover the actual cost of repairs from an independent contractor."
    )
    pdf.body_text(
        "How do you know if program pricing is being used? Look at the pricing page of the Xactimate estimate. "
        "It will show the price list name. If the price list is anything other than a standard Xactimate local "
        "price list — if it has the carrier's name in it, or a code that indicates a managed repair network — "
        "program pricing is likely in play. You can also compare individual line item prices to the standard "
        "Xactimate rates for your zip code. If the estimate prices are consistently lower, program pricing is "
        "the likely culprit."
    )
    pdf.callout_box(
        "You are not bound by the carrier's program pricing. If their estimate does not cover the actual cost "
        "of repairs from a licensed contractor of your choosing, the estimate is inadequate. Challenge it with "
        "contractor bids and demand standard market-rate pricing.",
        title="You Choose Your Contractor"
    )

    pdf.chapter_title("Water Mitigation and Emergency Services Line Items")
    pdf.body_text(
        "If your loss involved water damage — from a burst pipe, a roof leak, or firefighting efforts — the "
        "estimate will include (or should include) water mitigation line items. Water mitigation is the emergency "
        "process of extracting standing water, setting up drying equipment, monitoring moisture levels, and "
        "preventing mold growth. These services are provided by water restoration companies and are billed "
        "separately from the permanent repairs."
    )
    pdf.body_text(
        "Water mitigation invoices are among the most frequently disputed items in insurance claims. Carriers "
        "routinely challenge the number of drying days, the quantity of equipment placed, the necessity of certain "
        "services, and the pricing. Understanding the line items on a mitigation invoice helps you push back when "
        "the carrier tries to reduce the payment."
    )
    pdf.section_title("Common Water Mitigation Line Items")
    pdf.bullet_list([
        "Water extraction — removing standing water with truck-mounted or portable extractors",
        "Air mover placement — fans placed to create airflow and accelerate drying",
        "Dehumidifier placement — industrial dehumidifiers to remove moisture from the air",
        "Moisture monitoring — daily readings to track the drying progress",
        "Antimicrobial application — chemical treatment to prevent mold and bacterial growth",
        "Content manipulation — moving furniture and belongings to access wet areas",
        "Carpet and pad removal — wet carpet padding almost always needs to be replaced",
        "Baseboard removal — required to access and dry wall cavities",
        "Demolition of water-damaged materials — drywall, insulation, and flooring that cannot be dried",
        "Equipment daily charges — air movers and dehumidifiers are charged per unit per day",
    ])
    pdf.body_text(
        "The IICRC S500 Standard is the industry standard for professional water damage restoration. It sets "
        "guidelines for how many air movers and dehumidifiers should be placed based on the area affected, and "
        "it establishes standards for when drying is complete. If the carrier's reviewer is trying to reduce your "
        "mitigation invoice, ask them to cite which IICRC standard they believe was violated. More often than not, "
        "the mitigation company followed the standard and the carrier is just looking for a discount."
    )
    pdf.callout_box(
        "Never let the carrier delay water mitigation. Every hour that water sits, the damage increases and the "
        "risk of mold grows. If you have water damage, call a mitigation company immediately — do not wait for "
        "the carrier to approve it. The policy requires you to protect the property from further damage.",
        title="Mitigate Immediately"
    )

    pdf.chapter_title("Xactimate Estimate Review Checklist")
    pdf.body_text(
        "Use this chapter as a quick-reference checklist every time you receive an Xactimate estimate from your "
        "insurance carrier. Go through each item systematically and note any deficiencies."
    )
    pdf.section_title("General Estimate Review")
    pdf.bullet_list([
        "Is the correct price list being used? (Check for program pricing vs. standard local rates)",
        "Are the measurements accurate? (Verify room dimensions against your own measurements)",
        "Are all affected rooms included? (Check that no rooms were skipped or partially scoped)",
        "Is the correct quality grade of materials selected? (Standard, high, premium)",
        "Does the scope match what you see? (Are all damaged items included?)",
    ])
    pdf.section_title("Line Item Review")
    pdf.bullet_list([
        "Are all necessary removal items included? (Baseboards, shoe mold, casing, hardware, fixtures)",
        "Are all necessary prep items included? (Content manipulation, floor protection, masking)",
        "Is primer included before painting?",
        "Are multiple coats of paint included where needed?",
        "Is the correct paint type specified? (Flat, eggshell, semi-gloss per the room)",
        "Are matching requirements addressed? (Full wall/room painting, continuous flooring, matching siding)",
        "Is drywall texture matching included?",
        "Are electrical and plumbing disconnects and reconnects included?",
        "Is toilet removal and reset included for bathroom floor work?",
    ])
    pdf.section_title("Overhead, Profit, and Other Charges")
    pdf.bullet_list([
        "Is overhead and profit included? (If multiple trades are needed, it should be)",
        "Are permit fees included? (Required for most structural, electrical, and plumbing work)",
        "Are debris removal and dump fees included at realistic quantities?",
        "Is final cleaning included?",
        "Are code upgrades included under Ordinance or Law coverage?",
    ])
    pdf.section_title("Depreciation Review")
    pdf.bullet_list([
        "Is the depreciation rate reasonable for each item's age and condition?",
        "Is labor being depreciated? (It should NOT be — California law prohibits this)",
        "Are the useful life assumptions reasonable?",
        "Is there a depreciation schedule that breaks down each item individually?",
    ])
    pdf.callout_box(
        "Print this checklist and use it every time you review a carrier estimate. Identify every deficiency, "
        "document it, and include it in your supplement or appraisal submission.",
        title="Use This Checklist"
    )

    pdf.chapter_title("Frequently Asked Questions About Xactimate Disputes")
    pdf.section_title("Q: Can I get my own Xactimate estimate prepared?")
    pdf.body_text(
        "A: Yes. Any licensed public adjuster, contractor, or estimator with an Xactimate subscription can prepare "
        "an estimate for you. Having your own Xactimate estimate is extremely powerful because it allows you to "
        "make an apples-to-apples comparison with the carrier's estimate. The cost for a professional Xactimate "
        "estimate ranges from $500 to $3,000 depending on the size and complexity of the loss."
    )
    pdf.section_title("Q: What if the carrier says their estimate is 'generated by the computer' and cannot be changed?")
    pdf.body_text(
        "A: This is a common tactic and it is nonsense. Xactimate does not generate estimates by itself — a human "
        "enters the data. Every line item, every quantity, and every material selection was chosen by the carrier's "
        "adjuster. The estimate can absolutely be changed by the same adjuster who created it. If the carrier "
        "claims the estimate is computer-generated and final, demand to speak with the person who prepared it."
    )
    pdf.section_title("Q: The carrier says they will only pay Xactimate pricing. My contractor charges more. What do I do?")
    pdf.body_text(
        "A: You are entitled to the actual cost of repair, not an arbitrary software-generated price. If your "
        "licensed contractor charges more than Xactimate pricing, submit the contractor's bid and demand the "
        "difference. The California Fair Claims Settlement Practices Regulations require the carrier to pay "
        "the actual cost of repair — not the cost according to their preferred estimating software."
    )
    pdf.section_title("Q: How do I know if the carrier used program pricing on my estimate?")
    pdf.body_text(
        "A: Look at the pricing page of the Xactimate estimate. It will show the price list name and version. "
        "If it says something like 'XACTIMATE LOCAL' or similar standard naming, it is likely the default price "
        "list. If it has the carrier's name, a code, or a reference to a managed repair network, program pricing "
        "is in use. You can also compare individual line item prices to published Xactimate pricing for your "
        "zip code — if the prices are consistently lower, program pricing is the likely cause."
    )

    pdf.closing_page()
    path = f"{OUTPUT_DIR}/xactimate-dispute-guide.pdf"
    pdf.output(path)
    print(f"  [OK] {path} ({pdf.page_no()} pages)")


# =============================================================================
# GUIDE 3: California Wildfire Claims Recovery Guide
# =============================================================================
def build_wildfire_guide():
    pdf = InsuranceGuidePDF(
        title="California Wildfire Claims Recovery Guide",
        subtitle="Step-by-Step Guidance for Total and Partial Wildfire Losses"
    )
    pdf.cover_page()
    pdf.disclaimer_page()

    # Chapter 1
    pdf.chapter_title("Forest Fire vs. Urban Wildfire Smoke: Why It Matters")
    pdf.body_text(
        "Not all wildfire damage is created equal, and understanding the difference between a forest fire and "
        "an urban wildfire is critical to your claim. When a wildfire burns through forested or brush areas and "
        "produces smoke that reaches your home, that smoke is composed primarily of burned vegetation — wood, "
        "leaves, grass, and soil. It is unpleasant, but its chemical composition is relatively straightforward."
    )
    pdf.body_text(
        "When a wildfire enters an urban area and burns homes, vehicles, infrastructure, and commercial buildings, "
        "the smoke profile changes dramatically. Urban wildfire smoke contains toxins from burned plastics, "
        "electronics, synthetic building materials, asbestos, lead paint, chemical storage, vehicles, tires, and "
        "everything else that exists in a developed community. This smoke is orders of magnitude more hazardous "
        "than forest fire smoke."
    )
    pdf.body_text(
        "Why does this matter for your insurance claim? Because the cleanup and remediation standards for urban "
        "wildfire contamination are far more rigorous and expensive than for simple forest fire smoke. A carrier "
        "that sends a crew to wipe down your surfaces with a soot sponge is not adequately addressing contamination "
        "from urban wildfire smoke. You may need environmental testing, professional hazmat-level cleaning, HVAC "
        "system decontamination, and in some cases, removal and replacement of porous materials that have absorbed "
        "toxic compounds."
    )
    pdf.callout_box(
        "If your home was affected by smoke from an urban wildfire that burned structures, demand environmental "
        "testing before accepting any carrier's 'smoke cleaning' estimate. The contamination may be far more "
        "serious than surface soot.",
        title="Critical Distinction"
    )
    pdf.bullet_list([
        "Forest fire smoke: primarily organic compounds from vegetation combustion",
        "Urban wildfire smoke: contains heavy metals, asbestos, dioxins, VOCs, and synthetic chemicals",
        "Cleaning standards differ dramatically — urban wildfire contamination often requires hazmat protocols",
        "Environmental testing (air quality, surface wipe samples) may be necessary to determine contamination levels",
        "Carriers will try to apply forest fire cleanup standards to urban wildfire losses — push back",
    ])

    # Chapter 2
    pdf.chapter_title("Coverage A Through D Walkthrough for Wildfire")
    pdf.body_text(
        "A standard California homeowner's policy has four main coverage categories. Understanding how each one "
        "applies to wildfire losses is essential for maximizing your recovery."
    )
    pdf.section_title("Coverage A: Dwelling")
    pdf.body_text(
        "Coverage A pays for damage to the structure of your home — the building itself, including attached "
        "structures like a garage. For a total wildfire loss, Coverage A pays the full cost to rebuild your home, "
        "subject to your policy limits. For partial losses, it pays the cost to repair the damage. Key issues "
        "to watch for: carriers underestimating rebuilding costs, failing to account for current code requirements, "
        "and using pre-fire pricing in a post-disaster market where construction costs have spiked 30-50% or more."
    )
    pdf.section_title("Coverage B: Other Structures")
    pdf.body_text(
        "Coverage B covers structures on your property that are not attached to the main dwelling — detached "
        "garages, sheds, fences, retaining walls, pool equipment, guest houses, and similar structures. This "
        "coverage is typically 10% of your Coverage A limit, but it can be increased by endorsement. Many "
        "policyholders forget to claim damaged fences, retaining walls, driveways, and landscaping hardscape "
        "under Coverage B."
    )
    pdf.section_title("Coverage C: Personal Property / Contents")
    pdf.body_text(
        "Coverage C is for your personal belongings — furniture, clothing, electronics, appliances, and "
        "everything else inside your home. In a total wildfire loss, you must compile a complete inventory of "
        "everything you owned. This is one of the most time-consuming and emotionally difficult parts of the "
        "claim. I dedicate an entire chapter to this process later in this guide."
    )
    pdf.section_title("Coverage D: Additional Living Expenses (ALE)")
    pdf.body_text(
        "Coverage D pays for the increased cost of living while you cannot occupy your home. This includes "
        "hotel or rental housing costs, restaurant meals (above what you would normally spend on food), storage "
        "fees, laundry costs, pet boarding, and other expenses that are over and above your normal living costs. "
        "In a total loss scenario, ALE can run for two years or more while your home is rebuilt."
    )
    pdf.callout_box(
        "Coverage D is not just for housing. It covers any reasonable increase in living expenses caused by the "
        "loss. If you normally spend $600/month on groceries but are now spending $1,500 because you are eating "
        "out, the $900 difference is an ALE expense.",
        title="ALE Is Broader Than You Think"
    )

    # Chapter 3
    pdf.chapter_title("Contamination Testing and Remediation Standards")
    pdf.body_text(
        "After a wildfire, contamination testing is critical — especially for homes that were not destroyed but "
        "were exposed to smoke. The question is not whether your home has smoke damage, but how extensive the "
        "contamination is and what it will cost to properly remediate it."
    )
    pdf.section_title("Types of Testing")
    pdf.bullet_list([
        "Air quality testing — measures particulate matter and volatile organic compounds in indoor air",
        "Surface wipe sampling — tests specific surfaces for soot, ash, and chemical residue",
        "HVAC system testing — checks ductwork and components for contamination",
        "Insulation testing — attic and wall insulation can trap smoke particles",
        "Structural testing — checks for contamination in porous materials (drywall, wood framing)",
    ])
    pdf.body_text(
        "Testing should be performed by a certified industrial hygienist (CIH) or environmental consultant, not "
        "by the carrier's preferred cleaning company. The carrier's cleaning vendor has a financial incentive to "
        "minimize the scope of work. An independent environmental professional has an incentive to be thorough "
        "and accurate."
    )
    pdf.section_title("Remediation Standards")
    pdf.body_text(
        "Remediation standards for wildfire contamination vary depending on the type and level of contamination. "
        "At a minimum, contaminated homes typically require professional HEPA vacuuming, chemical sponge cleaning "
        "of all surfaces, HVAC system cleaning and filter replacement, and air scrubbing. For more severe "
        "contamination, the remediation may include removal of contaminated insulation, carpet, padding, window "
        "treatments, and other porous materials that cannot be adequately cleaned."
    )
    pdf.callout_box(
        "Never accept a carrier's cleanup estimate at face value after a wildfire. Demand independent testing "
        "first. If the testing reveals contamination beyond surface soot, the carrier must pay for proper "
        "remediation — not just a surface wipe-down.",
        title="Demand Testing First"
    )

    # Chapter 4
    pdf.chapter_title("ALE Documentation and Timeline Management")
    pdf.body_text(
        "Additional Living Expenses (ALE) claims are where many wildfire survivors leave money on the table. "
        "Carriers count on policyholders being too overwhelmed to track their expenses carefully. They also count "
        "on policyholders accepting inadequate housing or cutting their ALE short to avoid the hassle. Do not fall "
        "into this trap."
    )
    pdf.section_title("What ALE Covers")
    pdf.bullet_list([
        "Temporary housing — hotel, short-term rental, or lease (above your normal housing cost)",
        "Meals and dining — the increase over your normal food budget",
        "Storage fees — for salvageable belongings that need to be stored during repairs",
        "Laundry and dry cleaning — especially during the initial displacement period",
        "Pet boarding or pet-friendly housing premiums",
        "Commuting cost increases — if your temporary housing is farther from work",
        "Utility cost differences — deposits and setup fees at temporary housing",
        "Moving costs — between temporary locations and back to your home",
    ])
    pdf.section_title("Documentation Best Practices")
    pdf.numbered_list([
        "Keep every receipt — create a folder (physical and digital) for ALE receipts from day one",
        "Track meals with a daily log — note the date, restaurant, amount, and number of people",
        "Document your pre-loss monthly expenses as a baseline for comparison",
        "Keep hotel and rental receipts, including reservation confirmations showing dates and rates",
        "Save gas receipts if your commute has increased",
        "Photograph any temporary housing arrangements for your records",
        "Submit ALE claims monthly — do not wait until the end to submit a year of expenses",
    ])
    pdf.body_text(
        "Carriers will sometimes try to limit your ALE to a specific dollar amount or time period that is "
        "unrealistically short. In California, ALE continues for as long as it is reasonably necessary to "
        "repair or rebuild your home. If rebuilding takes two years, your ALE coverage should extend for two "
        "years (subject to your policy limits). Do not let the carrier pressure you into accepting a lump-sum "
        "ALE settlement unless the amount is genuinely fair."
    )
    pdf.callout_box(
        "Under California law (CCP 2051.5), after a declared disaster, ALE coverage must extend for at least "
        "24 months from the date of the loss for total losses, and possibly longer if delays are beyond your "
        "control. Many carriers will try to cut you off at 12 months — know your rights.",
        title="California ALE Protections"
    )

    # Chapter 5
    pdf.chapter_title("Contents Inventory for Total Losses")
    pdf.body_text(
        "Compiling a contents inventory after a total wildfire loss is one of the most challenging tasks you will "
        "ever face. You are being asked to remember — and document — every single thing you owned. Every piece "
        "of furniture, every kitchen utensil, every book on the shelf, every tool in the garage, every item of "
        "clothing in every closet. It is overwhelming, and carriers know it."
    )
    pdf.body_text(
        "Carriers benefit from your exhaustion and frustration. Every item you forget to list is money they do "
        "not have to pay. That is why a systematic approach is essential. Do not try to do this from memory in "
        "one sitting. Instead, use the room-by-room methodology described below and take it one space at a time."
    )
    pdf.section_title("Room-by-Room Methodology")
    pdf.body_text(
        "Go through your home mentally, room by room, starting at the front door and working through every space "
        "including closets, the attic, the garage, and outdoor areas. For each room, work around the perimeter — "
        "what was against each wall? What was on each shelf? What was in each drawer? Use photographs, home "
        "videos, social media posts, and other visual records to trigger your memory."
    )
    pdf.section_title("Sources for Reconstruction")
    pdf.bullet_list([
        "Photographs and videos — check your phone, cloud storage, social media, and family members' devices",
        "Amazon and online shopping purchase histories — log into every retailer account you have used",
        "Credit card and bank statements — review years of purchase history for major items",
        "Home insurance applications — your original policy application may list high-value items",
        "Wedding, birthday, and holiday gift records",
        "Warranty registrations and product registration emails",
        "Moving company inventories from your last move",
        "Home improvement store purchase histories (Home Depot, Lowe's, etc.)",
    ])
    pdf.callout_box(
        "The average American household contains over 300,000 items. Even with a systematic approach, you "
        "will forget things. That is okay. You can supplement your inventory as items come to mind. Do not "
        "let the carrier tell you that your inventory window has closed.",
        title="Keep Adding Items"
    )

    # Chapter 6
    pdf.chapter_title("Working with Contractors in Post-Disaster Markets")
    pdf.body_text(
        "After a major wildfire, the construction market in the affected area is thrown into chaos. Demand for "
        "contractors skyrockets, supply of labor and materials is constrained, and prices increase significantly. "
        "This is the reality of a post-disaster construction market, and your insurance claim needs to reflect it."
    )
    pdf.body_text(
        "Carriers will try to use pre-disaster pricing in their estimates. They will point to Xactimate's "
        "database and say, 'This is what the work costs.' But Xactimate's monthly updates lag behind real-time "
        "market conditions. In a post-disaster environment, the actual cost to hire a contractor can be 30-50% "
        "higher than Xactimate's published rates. You are entitled to the actual cost of repair, not a "
        "hypothetical cost based on an outdated database."
    )
    pdf.section_title("Strategies for Working with Contractors")
    pdf.bullet_list([
        "Get bids early — contractor availability decreases rapidly after a major fire",
        "Verify licenses and insurance — disaster areas attract unlicensed and uninsured contractors",
        "Get everything in writing — scope of work, timeline, payment schedule, and change order process",
        "Do not sign contracts that require large upfront payments — 10% is reasonable; 50% is not",
        "Document demand-surge pricing with actual bids for your carrier",
        "Consider contractors from outside the immediate disaster area who are willing to travel for work",
        "Check the Contractors State License Board (CSLB) for complaints and disciplinary actions",
    ])
    pdf.callout_box(
        "California Business and Professions Code Section 7099.2 prohibits contractors from charging unconscionable "
        "prices after a declared emergency, but 'unconscionable' is not the same as 'pre-disaster.' Legitimate "
        "demand-surge pricing is not price gouging — it reflects real market conditions. Your carrier must pay "
        "the real cost, not the pre-disaster cost.",
        title="Demand Surge Is Real"
    )

    # Chapter 7
    pdf.chapter_title("California Regulatory Protections After Declared Disasters")
    pdf.body_text(
        "California provides some of the strongest regulatory protections for policyholders in the nation, and "
        "these protections are enhanced after the Governor declares a state of emergency. Understanding these "
        "protections is essential to ensuring your carrier treats you fairly."
    )
    pdf.section_title("Key Regulatory Protections")
    pdf.numbered_list([
        "Non-Renewal Moratorium: After a declared disaster, carriers cannot non-renew policies in the affected "
        "area for one year (Insurance Code Section 675.1). The CDI can extend this to two years.",
        "Extended Deadlines: Carriers must grant reasonable extensions for submitting proofs of loss and "
        "documentation after a declared disaster.",
        "ALE Extension: ALE coverage must extend for at least 24 months for total losses after a declared "
        "disaster, and may be extended further if delays are beyond the policyholder's control.",
        "Contents Replacement: Under SB 49, after a declared disaster, carriers must allow policyholders "
        "to collect the full replacement cost on contents claims without requiring proof of actual replacement.",
        "Contractor Choice: You have the right to use any licensed contractor — the carrier cannot require "
        "you to use their preferred vendor program.",
        "Advance Payments: Carriers should issue advance payments on undisputed portions of the claim within "
        "30 days of the proof of loss.",
        "Prohibited Lowball Practices: Carriers cannot use the disaster as a pretext for offering unreasonably "
        "low settlements — the Fair Claims Settlement Practices Regulations (10 CCR 2695) still apply.",
    ])
    pdf.callout_box(
        "The California Department of Insurance (CDI) becomes much more active after declared disasters. File "
        "a complaint with CDI if your carrier is violating any of these protections. Complaints can be filed "
        "online at insurance.ca.gov.",
        title="Use the CDI"
    )

    # Chapter 8
    pdf.chapter_title("The FAIR Plan and DIC Policies")
    pdf.body_text(
        "The California FAIR Plan (Fair Access to Insurance Requirements) is the state's insurer of last resort "
        "for property owners who cannot obtain coverage in the private market. As wildfire risk has increased "
        "in California, more and more homeowners are being forced onto the FAIR Plan — particularly in "
        "wildfire-prone areas where private carriers have non-renewed policies en masse."
    )
    pdf.body_text(
        "The FAIR Plan provides fire insurance, but it is basic coverage. It does not include liability, theft, "
        "or many of the endorsements that come standard with a typical homeowner's policy. To fill the gaps, "
        "many FAIR Plan policyholders purchase a DIC (Difference in Conditions) policy from a private carrier. "
        "The DIC policy wraps around the FAIR Plan policy and provides coverage for perils and loss categories "
        "that the FAIR Plan does not cover."
    )
    pdf.section_title("FAIR Plan Claim Challenges")
    pdf.bullet_list([
        "FAIR Plan limits are often insufficient for total rebuilds — make sure your limits are adequate",
        "FAIR Plan claims processing is slower than private carriers — plan for delays",
        "DIC coordination can be complicated — the FAIR Plan pays first, then the DIC fills gaps",
        "Understand which coverage (FAIR Plan or DIC) applies to each category of loss",
        "Keep both insurers informed throughout the claim — do not assume they communicate with each other",
        "If your FAIR Plan limits are exhausted, the DIC policy may provide additional dwelling coverage",
    ])
    pdf.callout_box(
        "If you have both a FAIR Plan policy and a DIC policy, treat them as separate claims that must be "
        "coordinated. File with both carriers simultaneously. Do not wait for one to pay before filing with "
        "the other. Time is critical.",
        title="Coordinate Both Policies"
    )

    # Chapter 9
    pdf.chapter_title("The Smoke Damage Recovery Act")
    pdf.body_text(
        "In response to the increasing frequency and severity of California wildfires, the legislature has enacted "
        "several bills addressing smoke damage claims. These legislative actions recognize that smoke damage — even "
        "without direct fire contact — can cause significant harm to homes and their occupants."
    )
    pdf.body_text(
        "The key provisions affecting policyholders include expanded definitions of covered smoke damage, "
        "requirements for carriers to provide smoke testing when requested by the policyholder, and prohibitions "
        "on carriers denying smoke damage claims based solely on the absence of direct flame contact with the "
        "property. These provisions recognize the reality that homes miles from the fire line can sustain "
        "significant smoke contamination."
    )
    pdf.section_title("Policyholder Rights Under Smoke Damage Legislation")
    pdf.bullet_list([
        "You have the right to request environmental testing for smoke contamination at the carrier's expense",
        "Carriers cannot deny smoke damage claims solely because the fire did not directly reach your property",
        "Smoke damage coverage includes both structural damage and health hazard contamination",
        "You may be entitled to ALE if smoke contamination renders your home uninhabitable during remediation",
        "Contents damaged by smoke — including soft goods, fabrics, and electronics — are covered losses",
        "The carrier must pay for remediation to a safe standard, not merely a cosmetically acceptable standard",
    ])
    pdf.body_text(
        "If your home sustained smoke damage from a wildfire, document everything from day one. Photograph the "
        "smoke residue. Save samples of soot and ash. Keep windows and doors closed until testing is performed. "
        "And most importantly, do not let the carrier's cleaning crew start work before independent testing "
        "establishes the baseline contamination levels. Once the evidence is cleaned up, it is gone."
    )
    pdf.callout_box(
        "Take photographs and video of smoke damage immediately — before any cleaning. Visible soot on surfaces, "
        "discoloration on walls, ash accumulation on exterior surfaces, and the smell of smoke are all evidence "
        "that should be documented before it is removed.",
        title="Preserve the Evidence"
    )

    # Additional chapters for depth
    pdf.chapter_title("Rebuilding After Total Loss: The Extended Replacement Cost Provision")
    pdf.body_text(
        "If your home was a total loss in a wildfire, one of the most important policy provisions you need to "
        "understand is Extended Replacement Cost (ERC). Most California homeowner's policies include ERC coverage, "
        "which provides additional coverage — typically 25% to 50% above your Coverage A limit — if the actual "
        "cost to rebuild exceeds your stated policy limits."
    )
    pdf.body_text(
        "Here is why this matters: after a major wildfire, construction costs in the affected area spike dramatically. "
        "Demand for contractors, laborers, and materials surges while supply is constrained. A home that would have "
        "cost $400,000 to build before the fire may cost $550,000 or more to rebuild in the post-disaster market. "
        "If your Coverage A limit is $400,000, your ERC provision may give you an additional $100,000 to $200,000 "
        "to cover the gap."
    )
    pdf.body_text(
        "There are conditions you must meet to trigger ERC. Most policies require that you actually rebuild on the "
        "same site or within the same county. Some policies require that you rebuild a home of the same size and "
        "quality. You must also incur the additional cost — the carrier will not just hand you a check for the "
        "ERC amount. You need to demonstrate that the actual rebuilding cost exceeds your Coverage A limit."
    )
    pdf.callout_box(
        "Check your declarations page for Extended Replacement Cost coverage. Know the percentage (25%, 50%, etc.) "
        "and any conditions for triggering it. After a total loss, ERC can mean the difference between a home that "
        "is fully rebuilt and one that is not.",
        title="Know Your ERC"
    )
    pdf.section_title("The Code Upgrade Wildcard")
    pdf.body_text(
        "In addition to ERC, your Ordinance or Law coverage (sometimes called Coverage E or an endorsement) pays "
        "for the cost of bringing your rebuilt home into compliance with current building codes. After a total loss, "
        "code upgrade costs can be enormous. Homes built 20 or 30 years ago were built to codes that are now "
        "significantly outdated. Modern codes require upgraded electrical panels, enhanced fire resistance, seismic "
        "retrofitting, energy efficiency measures, and much more."
    )
    pdf.body_text(
        "Ordinance or Law coverage typically has three components: Coverage A pays for the increased cost of "
        "construction to comply with current codes. Coverage B pays for the cost to demolish the undamaged portion "
        "of the building (if applicable). Coverage C pays for the loss in value of the undamaged portion that must "
        "be demolished. In a total wildfire loss, all three components may apply."
    )

    pdf.chapter_title("Debris Removal: The Hidden Six-Figure Cost")
    pdf.body_text(
        "After a total wildfire loss, one of the first — and most expensive — steps in the recovery process is "
        "debris removal. The charred remains of your home, foundation, vehicles, trees, and personal property must "
        "be removed before rebuilding can begin. This is not a minor expense. In recent California wildfires, debris "
        "removal costs have ranged from $50,000 to over $200,000 per lot, depending on the size of the home, the "
        "presence of hazardous materials, and the accessibility of the site."
    )
    pdf.body_text(
        "Your policy includes coverage for debris removal, but the limits may be insufficient. Most policies include "
        "debris removal as part of the Coverage A limit or provide a separate sublimit (often 5% of Coverage A). "
        "After a declared disaster, the government may provide debris removal through FEMA and CalRecycle programs, "
        "but there can be trade-offs — government debris removal programs sometimes require you to waive your "
        "right to pursue private debris removal under your insurance policy."
    )
    pdf.section_title("Government vs. Private Debris Removal")
    pdf.bullet_list([
        "Government programs (Right-of-Entry) are typically free to the homeowner and funded by FEMA/CalOES",
        "Government debris removal may be slower due to the scale of the operation",
        "Private debris removal gives you more control over the timeline and the contractor",
        "If you opt out of the government program, your insurance must cover the cost",
        "Some policies have insufficient debris removal limits — check before making a decision",
        "Government programs may not remove all debris (e.g., they may leave the concrete foundation slab)",
        "Consult with your public adjuster or attorney before signing any Right-of-Entry agreement",
    ])
    pdf.callout_box(
        "Do not sign a government Right-of-Entry agreement without understanding the implications for your "
        "insurance claim. In some cases, the government program is the better choice. In others, private debris "
        "removal gives you more flexibility and better results. Get professional advice first.",
        title="Right-of-Entry Decision"
    )

    pdf.chapter_title("The Emotional Toll: Protecting Your Mental Health")
    pdf.body_text(
        "I include this chapter because it is real, it is important, and nobody else is going to tell you about it. "
        "Losing your home to a wildfire is one of the most traumatic experiences a person can go through. The "
        "combination of grief, displacement, financial stress, and the exhausting process of dealing with your "
        "insurance company takes a serious toll on mental health."
    )
    pdf.body_text(
        "I have seen policyholders give up on legitimate claims because they are simply too exhausted to fight. "
        "I have seen families accept settlements worth half of what they are owed because they cannot bear to "
        "spend one more day dealing with the carrier. The insurance industry knows this — they count on it. "
        "Delay is a strategy precisely because it wears people down."
    )
    pdf.body_text(
        "So here is my advice: take care of yourself first. Accept help from friends, family, community "
        "organizations, and mental health professionals. Hire a public adjuster or attorney to handle the "
        "insurance fight so you can focus on your family and your recovery. The fee you pay a professional is "
        "worth it if it means you actually receive what you are owed — and you preserve your sanity in the process."
    )
    pdf.section_title("Resources for Wildfire Survivors")
    pdf.bullet_list([
        "California Department of Insurance Wildfire Hotline — call for help with claim disputes",
        "FEMA Disaster Assistance — financial assistance, temporary housing, and other programs",
        "Local community organizations — many communities set up recovery centers after major fires",
        "United Policyholders (uphelp.org) — nonprofit that helps disaster survivors navigate insurance claims",
        "Mental health services — many communities offer free counseling for disaster survivors",
        "Legal aid organizations — free or low-cost legal help for disaster-related issues",
    ])
    pdf.callout_box(
        "You did not cause this disaster, and you should not have to fight your own insurance company to recover "
        "from it. If the process feels overwhelming, that is normal. Get help. A licensed public adjuster works "
        "for you — not the insurance company — and handles the entire claim so you do not have to.",
        title="You Do Not Have to Do This Alone"
    )

    pdf.chapter_title("Landscaping and Hardscape Recovery")
    pdf.body_text(
        "After a wildfire, many policyholders focus on the house and forget about the landscaping and hardscape. "
        "Mature trees, custom landscaping, irrigation systems, retaining walls, driveways, patios, fences, and "
        "walkways can represent tens of thousands of dollars in value. Your policy may cover some or all of "
        "these losses under Coverage B (Other Structures) or through specific landscaping endorsements."
    )
    pdf.body_text(
        "Most standard policies include limited coverage for trees, shrubs, and other plants — typically 5% of "
        "the Coverage A limit, with a per-item cap (often $500 per tree or plant). While this is inadequate for "
        "mature specimen trees or custom landscaping, it is still money you are owed. Do not leave it on the table."
    )
    pdf.section_title("Commonly Overlooked Landscaping Items")
    pdf.bullet_list([
        "Mature trees — even at the $500 per-tree cap, 20 trees is $10,000",
        "Shrubs, hedges, and ornamental plants — document every plant you can remember",
        "Irrigation systems — including pipes, sprinkler heads, valves, timers, and controllers",
        "Retaining walls — these can be extremely expensive to replace, especially on hillside lots",
        "Fencing — wood, vinyl, wrought iron, chain link — measure the linear footage",
        "Driveways and walkways — concrete, pavers, asphalt, and gravel surfaces",
        "Outdoor lighting — landscape lighting, post lights, and wiring",
        "Patios and decks — including any built-in features like pergolas, arbors, or built-in seating",
        "Outdoor kitchens and barbecue islands — these can be worth $10,000 to $50,000 or more",
        "Swimming pools and spas — including equipment, covers, fencing, and decking",
    ])
    pdf.callout_box(
        "Coverage B (Other Structures) is typically 10% of your Coverage A limit. This covers detached garages, "
        "sheds, fences, retaining walls, and hardscape. For a home with $500,000 in Coverage A, that is $50,000 "
        "in Coverage B. Make sure you are claiming everything that falls under this coverage.",
        title="Do Not Forget Coverage B"
    )

    pdf.chapter_title("Tax Implications of Wildfire Insurance Payments")
    pdf.body_text(
        "Insurance claim payments for property damage are generally not taxable income. When you receive a payment "
        "from your carrier to repair or replace your home, that payment is not income — it is reimbursement for a "
        "loss. However, there are important exceptions and considerations you need to understand."
    )
    pdf.section_title("Key Tax Considerations")
    pdf.bullet_list([
        "Insurance proceeds that exceed your adjusted basis in the property may trigger a taxable gain",
        "If you do not rebuild or use the funds to purchase a replacement property, you may owe capital gains tax",
        "Federal tax law (IRC Section 1033) allows you to defer gain if you invest the proceeds in similar property",
        "The replacement period for federally declared disasters is typically 4 years from the end of the tax year",
        "California may extend the replacement period beyond the federal deadline — check current state law",
        "ALE payments are generally not taxable because they reimburse actual expenses, not income",
        "Any payments for emotional distress or punitive damages (from a bad faith lawsuit) are taxable",
        "Casualty loss deductions on your federal return may reduce your tax liability",
    ])
    pdf.body_text(
        "Consult a tax professional — preferably a CPA or tax attorney with experience in casualty losses and "
        "insurance claim taxation. The tax implications of a total wildfire loss can be complex, especially if "
        "your insurance proceeds exceed your basis in the property or if you decide not to rebuild in the same "
        "location. A few hundred dollars spent on tax advice can save you thousands in unnecessary tax payments."
    )
    pdf.callout_box(
        "Keep records of every insurance payment you receive and every dollar you spend on rebuilding. You will "
        "need this documentation for your tax return. Your CPA will need to know the total amount received from "
        "the carrier, the total amount spent on rebuilding, and the timing of both.",
        title="Keep Tax Records"
    )

    pdf.chapter_title("Wildfire Recovery Timeline and Checklist")
    pdf.body_text(
        "Use this timeline as a general guide to the wildfire recovery process. Every claim is different, but this "
        "gives you a framework for what to expect and when."
    )
    pdf.section_title("Week 1: Immediate Actions")
    pdf.numbered_list([
        "Ensure the safety of your family — do not return to the property until authorities say it is safe",
        "Contact your insurance carrier to report the loss",
        "Begin documenting your contents inventory from memory while details are fresh",
        "Contact FEMA and register for disaster assistance",
        "Gather important documents — insurance policy, identification, financial records",
        "Find temporary housing and begin tracking ALE expenses",
        "Take photographs of the property from the public right-of-way if accessible",
    ])
    pdf.section_title("Weeks 2-4: Initial Claim Setup")
    pdf.numbered_list([
        "Meet with the carrier's adjuster for the initial inspection (bring your own representative if possible)",
        "Begin the formal contents inventory using the room-by-room methodology",
        "Obtain certified copies of important documents (birth certificates, titles, etc.)",
        "Research contractors and begin getting rebuilding estimates",
        "Contact a public adjuster for a free consultation on your claim",
        "Set up a filing system for all claim-related documents",
        "Apply for any available government assistance programs",
    ])
    pdf.section_title("Months 1-3: Claim Development")
    pdf.numbered_list([
        "Submit your contents inventory (you can supplement later)",
        "Review the carrier's initial estimate and identify deficiencies",
        "Submit your first supplement with supporting documentation",
        "Secure stable temporary housing if not already done",
        "Submit monthly ALE claims with receipts",
        "Begin architectural and engineering work for rebuilding plans",
        "Decide on government vs. private debris removal",
    ])
    pdf.section_title("Months 3-12: Active Claim Management")
    pdf.numbered_list([
        "Continue submitting ALE claims monthly",
        "Continue supplementing your contents inventory as you remember items",
        "Push for resolution of disputed items — supplement, appraisal, or escalation",
        "Finalize rebuilding plans and obtain permits",
        "Begin construction when insurance funds are sufficient",
        "Monitor the carrier's compliance with regulatory deadlines",
        "File CDI complaints for any regulatory violations",
    ])
    pdf.section_title("Year 1-2+: Rebuilding and Final Settlement")
    pdf.numbered_list([
        "Manage the construction process (or hire a project manager to do so)",
        "Submit change orders and additional supplements as construction reveals hidden issues",
        "Collect recoverable depreciation as construction milestones are completed",
        "Finalize the contents claim and collect any remaining recoverable depreciation",
        "Close out the ALE claim when you move back into your home",
        "Review the entire claim file for any unpaid items before signing a final release",
        "Consult with an attorney about bad faith if the carrier's conduct warrants it",
    ])
    pdf.callout_box(
        "Do NOT sign a final release until you are 100% certain that every aspect of your claim has been resolved. "
        "A final release typically waives all future claims related to the loss. Once you sign it, you cannot go "
        "back for more money even if you discover additional damage or costs.",
        title="Never Sign a Release Early"
    )

    pdf.closing_page()
    path = f"{OUTPUT_DIR}/wildfire-recovery-guide.pdf"
    pdf.output(path)
    print(f"  [OK] {path} ({pdf.page_no()} pages)")


# =============================================================================
# GUIDE 4: Bad Faith Documentation Kit
# =============================================================================
def build_bad_faith_kit():
    pdf = InsuranceGuidePDF(
        title="Bad Faith Documentation Kit",
        subtitle="Building Your Paper Trail from Day One"
    )
    pdf.cover_page()
    pdf.disclaimer_page()

    # Chapter 1
    pdf.chapter_title("What Is Bad Faith in California?")
    pdf.body_text(
        "In California, every insurance policy includes an implied covenant of good faith and fair dealing. This "
        "means the insurance company has a legal obligation to handle your claim fairly, promptly, and in good "
        "faith. When the carrier violates this obligation — by unreasonably delaying, denying, or underpaying "
        "your claim — it commits what is legally known as 'bad faith.'"
    )
    pdf.body_text(
        "Bad faith is not just about the carrier getting the answer wrong. Insurance companies are allowed to "
        "make reasonable mistakes. Bad faith occurs when the carrier's conduct is unreasonable — when no "
        "reasonable insurer in the same position would have acted the way your carrier acted. The distinction "
        "between a reasonable disagreement and bad faith is the key legal question in every bad faith case."
    )
    pdf.body_text(
        "California recognizes two types of bad faith: first-party bad faith (where the carrier mistreats its "
        "own policyholder) and third-party bad faith (where the carrier mishandles a liability claim against "
        "its policyholder). This guide focuses on first-party bad faith — the type that arises from property "
        "damage claims."
    )
    pdf.section_title("The Legal Standard")
    pdf.body_text(
        "The seminal California bad faith case is Gruenberg v. Aetna Insurance Co. (1973), which established "
        "that the insurer's duty of good faith and fair dealing is a non-waivable obligation implied by law "
        "in every insurance contract. Subsequent cases — including Egan v. Mutual of Omaha (1979), which "
        "introduced the availability of punitive damages for bad faith — have built on this foundation to "
        "create one of the most policyholder-protective bad faith frameworks in the nation."
    )
    pdf.callout_box(
        "In California, bad faith can result in damages far beyond the policy limits. The policyholder can "
        "recover emotional distress damages, punitive damages, and attorney's fees in addition to the unpaid "
        "policy benefits. This is why carriers take bad faith exposure seriously — when they are caught.",
        title="Damages Beyond Policy Limits"
    )

    # Chapter 2
    pdf.chapter_title("The Communication Log: Why Every Call Matters")
    pdf.body_text(
        "The single most important tool in a bad faith case is the communication log. This is a chronological "
        "record of every interaction between you and your insurance company — every phone call, every email, "
        "every letter, every inspection, and every promise made. If you do nothing else in this guide, start "
        "and maintain a communication log."
    )
    pdf.body_text(
        "Bad faith cases are won and lost on documentation. The carrier's adjuster is trained to document "
        "their side of every interaction in their claim notes. If your version of events contradicts theirs, "
        "and you have no contemporaneous records to support your version, the carrier wins. A detailed, "
        "real-time communication log changes that dynamic entirely."
    )
    pdf.section_title("What to Record")
    pdf.bullet_list([
        "Date and time of every communication",
        "Method of communication (phone, email, letter, in-person)",
        "Name and title of every person you speak with",
        "Summary of what was discussed — as detailed as possible",
        "Any promises or commitments made by the carrier's representative",
        "Any requests for documents or information — and when you provided them",
        "Any deadlines mentioned or agreed to",
        "Your emotional state during significant communications (for emotional distress documentation)",
    ])
    pdf.section_title("Communication Log Template")
    pdf.body_text(
        "Use a simple spreadsheet or notebook with the following columns: Date | Time | Contact Method | "
        "Person Contacted (Name/Title) | Summary of Communication | Promises/Commitments Made | Follow-Up "
        "Needed | Documents Requested/Provided."
    )
    pdf.callout_box(
        "Write your log entries immediately after each communication — not days or weeks later. "
        "Contemporaneous notes carry far more weight than after-the-fact recollections. If you can, send a "
        "follow-up email after every phone call summarizing what was discussed: 'Per our conversation today, "
        "you agreed to...' This creates a written record the carrier cannot later deny.",
        title="Write It Down Now"
    )

    # Chapter 3
    pdf.chapter_title("Regulatory Deadlines Under 10 CCR 2695")
    pdf.body_text(
        "The California Fair Claims Settlement Practices Regulations — found at Title 10, California Code of "
        "Regulations, Section 2695 — establish specific deadlines and requirements that every insurance carrier "
        "must follow when handling claims in California. These regulations have teeth: violations can support "
        "bad faith claims and can result in regulatory action by the California Department of Insurance."
    )
    pdf.section_title("Key Regulatory Deadlines")
    pdf.numbered_list([
        "Acknowledgment: The carrier must acknowledge receipt of your claim within 15 calendar days (10 CCR 2695.5(e))",
        "Initial Response: Within 15 days of acknowledgment, the carrier must begin investigating or provide a "
        "reasonable explanation for any delay (10 CCR 2695.5(e))",
        "Status Updates: If the investigation is not complete, the carrier must provide written status updates "
        "every 30 days until the claim is resolved (10 CCR 2695.7(c)(1))",
        "Accept or Deny: The carrier must accept or deny the claim within 40 days of receiving proof of loss, "
        "unless additional time is needed and the reasons for the delay are documented in writing (10 CCR 2695.7(b))",
        "Payment: Once the claim is accepted, payment must be made within 30 days (10 CCR 2695.7(h))",
        "Denial in Writing: Any denial must be in writing, must state the specific reasons for the denial, and "
        "must reference the specific policy provisions relied upon (10 CCR 2695.7(b)(1))",
    ])
    pdf.callout_box(
        "These deadlines are not suggestions — they are legal requirements. Every time the carrier misses a "
        "deadline, document it. Every missed deadline is a potential building block for a bad faith case.",
        title="Deadlines Are Mandatory"
    )
    pdf.body_text(
        "The regulations also impose substantive requirements beyond deadlines. Carriers must conduct a thorough "
        "investigation. They cannot deny a claim without a reasonable basis for doing so. They cannot make "
        "settlement offers that are unreasonably low. They cannot misrepresent the law or the policy provisions "
        "to discourage claims. And they cannot require policyholders to file suit as a prerequisite to receiving "
        "benefits that are clearly owed."
    )

    # Chapter 4
    pdf.chapter_title("Common Bad Faith Indicators Checklist")
    pdf.body_text(
        "How do you know if your carrier is acting in bad faith? While every claim is different, there are "
        "common patterns of conduct that, individually or collectively, can support a bad faith claim. The "
        "following checklist is drawn from decades of claims handling experience and California case law."
    )
    pdf.section_title("Delay Tactics")
    pdf.bullet_list([
        "Failing to acknowledge your claim within 15 days",
        "Failing to assign an adjuster for weeks or months",
        "Repeatedly requesting the same documents you have already provided",
        "Transferring your claim to a new adjuster multiple times",
        "Scheduling inspections and then canceling or rescheduling repeatedly",
        "Claiming they need 'more time to investigate' without specifying what they are investigating",
        "Refusing to respond to phone calls, emails, or letters for extended periods",
    ])
    pdf.section_title("Lowball and Underpayment Tactics")
    pdf.bullet_list([
        "Offering a settlement that is clearly insufficient based on the damage",
        "Using program pricing or outdated material costs instead of current market rates",
        "Excluding legitimate line items from the estimate without explanation",
        "Refusing to include overhead and profit when multiple trades are required",
        "Over-depreciating items to reduce the ACV payment",
        "Misrepresenting policy provisions to exclude coverage that exists",
        "Ignoring your contractor's bid and insisting their Xactimate estimate is correct",
    ])
    pdf.section_title("Denial and Coverage Tactics")
    pdf.bullet_list([
        "Denying the claim without conducting a thorough investigation",
        "Denying based on a policy exclusion that does not actually apply",
        "Claiming your damage is from a non-covered cause without evidence",
        "Issuing a verbal denial but refusing to put it in writing",
        "Applying an exclusion that was not in your policy at the time of the loss",
        "Failing to inform you of all coverages that may apply to your loss",
    ])
    pdf.callout_box(
        "No single item on this list necessarily proves bad faith. But when multiple items are present — and "
        "especially when they form a pattern — the evidence becomes compelling. Document every instance.",
        title="Pattern Matters"
    )

    # Chapter 5
    pdf.chapter_title("Documenting Violations in Real Time")
    pdf.body_text(
        "The difference between a policyholder who wins a bad faith case and one who does not often comes down "
        "to documentation. It is not enough to know that your carrier acted badly — you have to be able to prove "
        "it. That means creating a real-time record of violations as they happen, not trying to reconstruct the "
        "timeline months or years later."
    )
    pdf.section_title("Documentation Tools and Methods")
    pdf.numbered_list([
        "Communication log (described in Chapter 2) — maintain this daily during active claim periods",
        "Written correspondence — always follow up phone calls with an email or letter summarizing the conversation",
        "Timeline chart — create a visual timeline showing key dates, deadlines, and carrier actions/inactions",
        "Violation tracker — maintain a separate document listing each regulatory violation with the specific "
        "regulation number, the date of the violation, and the supporting evidence",
        "Photograph and video log — document the condition of your property at each stage with timestamps",
        "Financial impact records — track every dollar of additional cost caused by the carrier's delays "
        "(extended ALE, increased contractor costs, interest on loans, etc.)",
    ])
    pdf.body_text(
        "Every document should be saved in at least two places — an electronic copy and a physical copy or a "
        "second electronic backup. If you are working with a public adjuster or attorney, provide them with "
        "copies of everything. Do not rely on any single storage location."
    )
    pdf.callout_box(
        "The best documentation is created in real time. An email sent on the day the carrier missed a deadline "
        "saying 'Today marks 45 days since I submitted my proof of loss and I have received no response' is far "
        "more powerful than a declaration written two years later saying 'I believe it was around 45 days.'",
        title="Real Time Is Everything"
    )

    # Chapter 6
    pdf.chapter_title("The Interplay of Statutes, Regulations, and Case Law")
    pdf.body_text(
        "California bad faith law sits at the intersection of three bodies of authority: statutes enacted by the "
        "legislature, regulations promulgated by the Department of Insurance, and case law developed by the "
        "courts. Understanding how these three sources interact is essential for building a comprehensive bad "
        "faith documentation strategy."
    )
    pdf.section_title("Key Statutes")
    pdf.bullet_list([
        "Insurance Code Section 790.03 — the Unfair Insurance Practices Act, which lists prohibited "
        "practices including misrepresentation, unreasonable delay, and failure to investigate",
        "Insurance Code Section 790.06 — authorizes the Insurance Commissioner to take enforcement action "
        "against carriers that violate Section 790.03",
        "Civil Code Section 3294 — authorizes punitive damages where the defendant's conduct is oppressive, "
        "fraudulent, or malicious (applicable to bad faith cases)",
        "Insurance Code Section 2071 — the Standard Fire Policy, which establishes the baseline terms for "
        "fire insurance in California",
    ])
    pdf.section_title("Key Regulations")
    pdf.bullet_list([
        "10 CCR 2695.1 through 2695.17 — the Fair Claims Settlement Practices Regulations, establishing "
        "specific standards and deadlines for claims handling",
        "10 CCR 2695.7 — the most cited regulation, covering investigation, acceptance/denial, and payment "
        "timelines",
        "10 CCR 2695.9 — additional standards for first-party residential and commercial property claims",
    ])
    pdf.section_title("Key Cases")
    pdf.body_text(
        "Gruenberg v. Aetna (1973) — established the implied covenant of good faith in insurance. "
        "Egan v. Mutual of Omaha (1979) — allowed punitive damages for bad faith. "
        "Brandt v. Superior Court (1985) — allowed recovery of attorney's fees incurred to obtain policy "
        "benefits wrongfully withheld. Wilson v. 21st Century (2007) — held that a single violation of the "
        "Fair Claims Settlement Practices Regulations can constitute bad faith per se. Chateau Chamberay v. "
        "Associated International (2001) — held that the genuine dispute doctrine does not protect a carrier "
        "that fails to properly investigate before denying a claim."
    )
    pdf.callout_box(
        "The Wilson case is particularly important: a single violation of the regulations can be sufficient "
        "to establish bad faith. You do not need to prove a pattern of violations — although a pattern makes "
        "the case much stronger and supports punitive damages.",
        title="One Violation Can Be Enough"
    )

    # Chapter 7
    pdf.chapter_title("Sample Follow-Up Letters for Missed Deadlines")
    pdf.section_title("15-Day Acknowledgment Deadline Missed")
    pdf.body_text(
        "[Date]\n\n"
        "[Insurance Company Name]\n"
        "[Claims Department Address]\n\n"
        "Re: Insured: [Your Name]\n"
        "Policy Number: [Policy Number]\n"
        "Claim Number: [If assigned]\n"
        "Date of Loss: [Date of Loss]\n"
        "NOTICE OF FAILURE TO ACKNOWLEDGE CLAIM\n\n"
        "Dear Claims Department:\n\n"
        "On [date], I reported a loss to your company. As of today, [number] days have elapsed and I have not "
        "received written acknowledgment of my claim as required by California Code of Regulations, Title 10, "
        "Section 2695.5(e), which requires insurers to acknowledge receipt of a claim within 15 calendar days.\n\n"
        "Your company's failure to comply with this regulatory requirement is noted and documented. I demand "
        "immediate acknowledgment of my claim and assignment of an adjuster.\n\n"
        "Please be advised that I am maintaining a detailed record of all communications and regulatory "
        "violations related to this claim.\n\n"
        "Sincerely,\n"
        "[Your Name]"
    )
    pdf.section_title("40-Day Accept/Deny Deadline Missed")
    pdf.body_text(
        "[Date]\n\n"
        "[Insurance Company Name]\n"
        "[Claims Department Address]\n\n"
        "Re: Insured: [Your Name]\n"
        "Policy Number: [Policy Number]\n"
        "Claim Number: [Claim Number]\n"
        "Date of Loss: [Date of Loss]\n"
        "NOTICE OF FAILURE TO ACCEPT OR DENY CLAIM\n\n"
        "Dear [Adjuster Name]:\n\n"
        "On [date], I submitted a complete proof of loss for the above-referenced claim. As of today, [number] "
        "days have elapsed and your company has neither accepted nor denied my claim. Under 10 CCR 2695.7(b), "
        "your company was required to accept or deny the claim within 40 days of receipt of the proof of loss, "
        "or to provide written notice of the need for additional time with a specific explanation.\n\n"
        "No such notice has been received. Your company's failure to comply with this regulatory requirement "
        "constitutes a violation of the Fair Claims Settlement Practices Regulations and may constitute bad "
        "faith under California law.\n\n"
        "I demand an immediate written response accepting or denying my claim, with specific reasons if denied, "
        "as required by regulation.\n\n"
        "Sincerely,\n"
        "[Your Name]"
    )
    pdf.section_title("30-Day Payment Deadline Missed")
    pdf.body_text(
        "[Date]\n\n"
        "[Insurance Company Name]\n"
        "[Claims Department Address]\n\n"
        "Re: Insured: [Your Name]\n"
        "Policy Number: [Policy Number]\n"
        "Claim Number: [Claim Number]\n"
        "NOTICE OF FAILURE TO ISSUE PAYMENT\n\n"
        "Dear [Adjuster Name]:\n\n"
        "On [date], your company accepted my claim and agreed to payment in the amount of $[amount]. As of "
        "today, [number] days have elapsed and no payment has been received. Under 10 CCR 2695.7(h), payment "
        "must be issued within 30 calendar days of the date the claim is accepted.\n\n"
        "Your company's continued failure to issue payment constitutes an ongoing violation of the Fair Claims "
        "Settlement Practices Regulations. I demand immediate payment.\n\n"
        "Sincerely,\n"
        "[Your Name]"
    )

    # Chapter 8
    pdf.chapter_title("When Bad Faith Becomes a Lawsuit")
    pdf.body_text(
        "Not every claim handling dispute is a bad faith lawsuit. But when the carrier's conduct crosses the "
        "line from negligent to unreasonable — and especially when the carrier's actions appear to be part of a "
        "deliberate strategy to minimize or deny a legitimate claim — a bad faith lawsuit may be appropriate."
    )
    pdf.section_title("Elements of a Bad Faith Claim")
    pdf.numbered_list([
        "The existence of an insurance policy and a covered loss",
        "The carrier's failure to properly investigate, evaluate, or pay the claim",
        "The carrier's conduct was unreasonable — meaning no reasonable insurer would have acted the same way",
        "The policyholder suffered damages as a result of the carrier's unreasonable conduct",
    ])
    pdf.body_text(
        "Damages in a bad faith case can include the unpaid policy benefits, consequential damages (such as "
        "increased repair costs caused by delay), emotional distress damages, Brandt attorney's fees (fees "
        "incurred to obtain the wrongfully withheld benefits), and punitive damages where the carrier's conduct "
        "was oppressive, fraudulent, or malicious."
    )
    pdf.section_title("The Genuine Dispute Doctrine")
    pdf.body_text(
        "Carriers frequently raise the 'genuine dispute doctrine' as a defense to bad faith claims. This doctrine "
        "holds that when there is a genuine dispute over coverage or the amount of loss, the carrier's denial or "
        "low payment is not bad faith because the disagreement was reasonable. However, this doctrine has "
        "significant limitations."
    )
    pdf.body_text(
        "The genuine dispute doctrine does not protect a carrier that fails to conduct a thorough investigation. "
        "It does not protect a carrier that relies on its own biased experts while ignoring the policyholder's "
        "evidence. And it does not protect a carrier whose dispute is manufactured rather than genuine. "
        "A carrier cannot create a 'genuine dispute' by hiring an engineer to write a pre-determined report "
        "denying damage that clearly exists."
    )
    pdf.callout_box(
        "The genuine dispute doctrine is the carrier's favorite defense, but it is not a blank check. If the "
        "carrier's 'dispute' is based on a biased investigation, cherry-picked evidence, or willful ignorance "
        "of contrary evidence, the doctrine does not apply.",
        title="Genuine Dispute Has Limits"
    )

    # Chapter 9
    pdf.chapter_title("Working with a Bad Faith Attorney")
    pdf.body_text(
        "If you believe your carrier has acted in bad faith, you need an attorney who specializes in insurance "
        "bad faith litigation. This is not a general practice area — it requires specific knowledge of insurance "
        "law, regulations, and the claims handling process. A good bad faith attorney will know the regulations, "
        "the case law, and the carrier's playbook."
    )
    pdf.section_title("When to Hire an Attorney")
    pdf.bullet_list([
        "When the carrier has denied your claim and you believe the denial is wrong",
        "When the carrier has significantly underpaid your claim and refuses to negotiate",
        "When the carrier has violated multiple regulatory deadlines",
        "When the carrier's conduct shows a pattern of unreasonable behavior",
        "When the carrier has misrepresented your policy provisions or the law",
        "When you have substantial damages beyond the policy benefits (emotional distress, consequential damages)",
    ])
    pdf.section_title("What to Look for in an Attorney")
    pdf.bullet_list([
        "Specific experience with first-party insurance bad faith cases (not just general litigation)",
        "Familiarity with the Fair Claims Settlement Practices Regulations (10 CCR 2695)",
        "Track record of results — verdicts and settlements in bad faith cases",
        "Contingency fee arrangement — most bad faith attorneys work on contingency (typically 33-40%)",
        "Resources to handle discovery and trial — bad faith cases can be document-intensive",
        "Willingness to take the case to trial if necessary — carriers settle cases they might lose at trial",
    ])
    pdf.section_title("What to Bring to Your First Meeting")
    pdf.numbered_list([
        "Your complete communication log (this is why Chapter 2 is so important)",
        "All correspondence with the carrier — letters, emails, and claim documents",
        "Your policy (declarations page and full policy form)",
        "The carrier's estimate and your contractor's estimate or supplemental estimate",
        "Your violation tracker and timeline chart",
        "Photographs and documentation of the damage",
        "Any documents the carrier relied upon in denying or underpaying your claim",
    ])
    pdf.callout_box(
        "The better your documentation, the more attractive your case will be to a quality attorney. Attorneys "
        "evaluate cases based on the strength of the evidence. A policyholder who walks in with a detailed "
        "communication log, a violation tracker, and a complete file will get a very different reception than "
        "one who walks in with nothing but a complaint.",
        title="Preparation Matters"
    )

    # Additional chapters for depth
    pdf.chapter_title("The CDI Complaint: How to File and What to Expect")
    pdf.body_text(
        "The California Department of Insurance (CDI) is the regulatory body that oversees insurance carriers "
        "operating in California. Filing a complaint with the CDI is one of the most effective tools available "
        "to policyholders — and it is free. When you file a CDI complaint, the Department opens a file, contacts "
        "the carrier, and demands a response. Carriers take CDI complaints seriously because repeated violations "
        "can lead to market conduct examinations, fines, and other regulatory consequences."
    )
    pdf.body_text(
        "A CDI complaint is not a substitute for a lawsuit, and the CDI does not award damages. But a CDI "
        "complaint can accomplish several things: it creates an official record of the carrier's conduct, it often "
        "prompts the carrier to re-examine the claim, and it can lead to regulatory action that benefits you and "
        "other policyholders. Additionally, the CDI's findings can be used as evidence in a subsequent bad faith "
        "lawsuit."
    )
    pdf.section_title("How to File a CDI Complaint")
    pdf.numbered_list([
        "Go to insurance.ca.gov and navigate to the File a Complaint section",
        "You can file online, by mail, or by phone — online is fastest",
        "Provide your policy number, claim number, and the carrier's name",
        "Describe the specific conduct you are complaining about — be detailed and factual",
        "Reference the specific regulations the carrier has violated (10 CCR 2695 sections)",
        "Attach supporting documents — your communication log, correspondence, and evidence of violations",
        "Be patient — the CDI may take 30 to 60 days to investigate and respond",
    ])
    pdf.body_text(
        "When you file your complaint, be specific about which regulations the carrier violated and when. "
        "Do not just say 'they are taking too long.' Instead, say: 'On [date], I submitted my proof of loss. "
        "As of [date], 55 days have elapsed and the carrier has neither accepted nor denied the claim in violation "
        "of 10 CCR 2695.7(b), which requires acceptance or denial within 40 days.' Specificity gets results."
    )
    pdf.callout_box(
        "File CDI complaints early and often. Every complaint creates a record. If the carrier has a pattern of "
        "violations across multiple policyholders, the CDI may initiate a market conduct examination — which is "
        "every carrier's worst nightmare. Your complaint could be the one that triggers it.",
        title="File Early, File Often"
    )

    pdf.chapter_title("Punitive Damages: When the Carrier Crossed the Line")
    pdf.body_text(
        "In California, bad faith claims can include punitive damages when the carrier's conduct rises to the "
        "level of fraud, oppression, or malice. Punitive damages are designed not to compensate you for your loss "
        "but to punish the carrier and deter similar conduct in the future. There is no cap on punitive damages "
        "in California, and jury awards can be substantial — sometimes many multiples of the actual damages."
    )
    pdf.body_text(
        "To obtain punitive damages, you must show by clear and convincing evidence that the carrier's conduct "
        "was (a) fraudulent — meaning the carrier made intentional misrepresentations with the intent to deceive, "
        "(b) oppressive — meaning the carrier subjected you to cruel and unjust hardship in conscious disregard "
        "of your rights, or (c) malicious — meaning the carrier's conduct was intended to cause injury or was "
        "done with a willful and conscious disregard of the rights of others."
    )
    pdf.section_title("Conduct That Supports Punitive Damages")
    pdf.bullet_list([
        "Destroying or concealing evidence that supported the policyholder's claim",
        "Instructing adjusters to deny or reduce claims regardless of merit (claims manual violations)",
        "Using biased experts who are paid to reach predetermined conclusions",
        "Deliberately misrepresenting policy provisions to discourage claims",
        "Retaliating against a policyholder who filed a CDI complaint or hired an attorney",
        "Implementing company-wide policies designed to systematically underpay claims",
        "Continuing to deny a claim after receiving overwhelming evidence of coverage and damages",
    ])
    pdf.body_text(
        "Documentation is the key to punitive damages. Your communication log, violation tracker, and correspondence "
        "file are the evidence that transforms a routine underpayment into a punitive damages case. Every time the "
        "carrier acts unreasonably, document it. Every time they ignore your evidence, document it. Every time they "
        "miss a deadline, document it. The cumulative weight of the documentation tells the story."
    )
    pdf.callout_box(
        "Punitive damages are the carrier's greatest fear in a bad faith case. A $100,000 underpayment can turn "
        "into a $1,000,000+ verdict when the jury sees a pattern of deliberate, oppressive conduct. This is why "
        "documentation from day one matters — it is the foundation of the punitive damages case.",
        title="The Punitive Damages Multiplier"
    )

    pdf.chapter_title("Bad Faith Checklist and Quick Reference")
    pdf.body_text(
        "Use this chapter as your quick reference throughout your claim. Photocopy this section or keep it bookmarked "
        "so you can check it regularly against your carrier's conduct."
    )
    pdf.section_title("Regulatory Deadlines Quick Reference")
    pdf.bullet_list([
        "15 days — carrier must acknowledge receipt of your claim",
        "15 days after acknowledgment — carrier must begin investigation or explain the delay",
        "30 days — carrier must provide written status updates while investigation is pending",
        "40 days — carrier must accept or deny the claim after receiving proof of loss",
        "30 days — carrier must issue payment after accepting the claim",
        "Every denial must be in writing with specific policy provisions and factual reasons cited",
    ])
    pdf.section_title("Documentation Checklist")
    pdf.bullet_list([
        "Communication log — maintained daily during active claim periods",
        "Correspondence file — every letter, email, and written communication",
        "Violation tracker — every regulatory violation with date, regulation number, and evidence",
        "Timeline chart — visual timeline of key events and deadlines",
        "Financial impact records — all costs caused by the carrier's delays",
        "Photograph and video log — timestamped visual documentation",
        "Policy copy — full policy form and declarations page",
        "Carrier's estimate and all supplements — with your annotations noting deficiencies",
        "Your contractor's estimate or public adjuster's estimate — showing the real cost of repairs",
    ])
    pdf.section_title("Red Flags to Watch For")
    pdf.numbered_list([
        "The carrier stops returning your calls or emails for more than 10 business days",
        "Your claim is reassigned to a new adjuster without explanation (and the new adjuster starts over)",
        "The carrier requests documents you have already provided — more than once",
        "The carrier's estimate is less than 50% of your contractor's bid",
        "The carrier denies coverage without citing a specific policy exclusion",
        "The carrier pressures you to accept a settlement with phrases like 'take it or leave it'",
        "The carrier threatens to close your file if you do not accept their offer",
        "The carrier hires a 'forensic' expert who concludes the damage is not from the covered event",
    ])
    pdf.callout_box(
        "If three or more of these red flags are present in your claim, consult with a bad faith attorney "
        "immediately. You may have a case worth significantly more than the underpaid claim amount alone.",
        title="When to Call an Attorney"
    )

    pdf.chapter_title("The Biased Expert Problem")
    pdf.body_text(
        "One of the most insidious bad faith tactics is the carrier's use of biased experts — engineers, "
        "consultants, or other professionals hired specifically to support the carrier's position. These "
        "experts are not truly independent. They work almost exclusively for insurance carriers, their "
        "conclusions are predictable before they even inspect the property, and their reports are designed to "
        "give the carrier cover for denying or reducing the claim."
    )
    pdf.body_text(
        "The most common biased experts in property insurance claims are forensic engineers who are hired to "
        "determine the cause of damage. The carrier presents the engineer's report as an independent, scientific "
        "analysis. In reality, many of these engineers work for firms that derive 80-90% of their revenue from "
        "insurance carriers. Their business model depends on producing reports that support denials. They know "
        "that if they start finding in favor of policyholders, the referrals will stop."
    )
    pdf.section_title("How to Spot a Biased Expert")
    pdf.bullet_list([
        "The expert works for a firm that primarily serves insurance carriers",
        "The expert's conclusions always seem to favor the carrier",
        "The report focuses on alternative causes for the damage while ignoring the obvious cause",
        "The expert did not spend adequate time inspecting the property",
        "The report does not address or even mention evidence that contradicts the expert's conclusions",
        "The expert has a history of being challenged or excluded in litigation",
        "The report was commissioned after the adjuster already made a coverage decision",
    ])
    pdf.body_text(
        "If the carrier sends an expert to your property, you have the right to be present during the inspection "
        "and to hire your own expert. Document everything the carrier's expert does — photograph them photographing "
        "your property, note how long they spend in each area, and record what they examine and what they skip. "
        "If the expert spends 20 minutes inspecting a complex loss and then produces a 15-page report denying "
        "the damage, that discrepancy is itself evidence of bias."
    )
    pdf.callout_box(
        "When the carrier denies your claim based on an expert report, demand the expert's full CV, a list of "
        "all cases they have worked for insurance carriers in the last 5 years, and the percentage of their "
        "revenue that comes from carrier-hired work. If the expert cannot or will not provide this information, "
        "it tells you everything you need to know about their objectivity.",
        title="Challenge the Expert"
    )

    pdf.chapter_title("Sample Violation Log Template")
    pdf.body_text(
        "This template provides a structured format for documenting every regulatory violation by your insurance "
        "carrier. Maintain this log in a spreadsheet and update it every time a violation occurs. This document "
        "will be invaluable if you file a CDI complaint or a bad faith lawsuit."
    )
    pdf.section_title("Violation Log Columns")
    pdf.body_text(
        "Set up your spreadsheet with these columns:\n\n"
        "Column A: Violation Number (sequential, starting at 1)\n"
        "Column B: Date of Violation\n"
        "Column C: Regulation Violated (cite the specific CCR section)\n"
        "Column D: Description of Violation (detailed, factual narrative)\n"
        "Column E: Required Deadline (per regulation)\n"
        "Column F: Actual Response Date (if any)\n"
        "Column G: Days Late (auto-calculated)\n"
        "Column H: Supporting Evidence (list documents that prove the violation)\n"
        "Column I: Follow-Up Action Taken (letter sent, CDI complaint filed, etc.)\n"
        "Column J: Carrier Response (if any)"
    )
    pdf.section_title("Sample Entries")
    pdf.body_text(
        "Violation #1: Date: 1/15/2026 | Regulation: 10 CCR 2695.5(e) | Description: Claim reported on 12/28/2025. "
        "As of 1/15/2026 (18 days), no written acknowledgment received. Regulation requires acknowledgment within "
        "15 calendar days. | Deadline: 1/12/2026 | Response: None | Days Late: 3+ | Evidence: Claim submission "
        "confirmation email dated 12/28/2025, no acknowledgment in mail or email as of 1/15/2026 | Action: "
        "Letter sent per Chapter 7 template."
    )
    pdf.body_text(
        "Violation #2: Date: 3/15/2026 | Regulation: 10 CCR 2695.7(b) | Description: Proof of loss submitted on "
        "1/30/2026. As of 3/15/2026 (44 days), carrier has neither accepted nor denied claim. Regulation requires "
        "acceptance or denial within 40 days. | Deadline: 3/11/2026 | Response: None | Days Late: 4+ | Evidence: "
        "Certified mail receipt showing proof of loss delivery on 1/30/2026, no written response as of 3/15/2026 | "
        "Action: Letter sent and CDI complaint filed."
    )
    pdf.callout_box(
        "This violation log becomes the backbone of your bad faith case. Attorneys and judges can see at a glance "
        "how many violations occurred, when they occurred, and how the carrier responded (or failed to respond). "
        "A well-maintained violation log with 10 or more documented violations is powerful evidence.",
        title="The Backbone of Your Case"
    )

    pdf.chapter_title("Emotional Distress Documentation for Bad Faith Claims")
    pdf.body_text(
        "Bad faith damages in California include compensation for emotional distress — the anxiety, frustration, "
        "sleeplessness, depression, and other emotional harm caused by the carrier's unreasonable conduct. "
        "Emotional distress damages can be substantial, but they require documentation just like every other "
        "element of your claim."
    )
    pdf.body_text(
        "The insurance company's bad faith conduct affects real people in real ways. When a carrier refuses to "
        "pay for repairs and you are living in a damaged home, that causes stress. When a carrier refuses to pay "
        "ALE and you are scrambling to cover a hotel bill, that causes anxiety. When a carrier denies a "
        "legitimate claim and you cannot afford to fix your roof before the next rainstorm, that causes fear. "
        "These emotional responses are compensable damages."
    )
    pdf.section_title("How to Document Emotional Distress")
    pdf.bullet_list([
        "Keep a journal noting how the carrier's conduct affects your daily life",
        "Record sleep disturbances — difficulty falling asleep, waking during the night, nightmares",
        "Note any changes in appetite, weight, energy level, or mood",
        "Document missed work days or reduced productivity due to claim-related stress",
        "Record impacts on family relationships and social activities",
        "If you seek medical or psychological treatment, keep all records and receipts",
        "Note specific carrier actions and their emotional impact — e.g., 'When the adjuster denied our claim on the phone, my wife broke down in tears'",
        "Ask family members and close friends if they would be willing to describe the changes they have observed in you",
    ])
    pdf.body_text(
        "If the emotional distress is severe enough to warrant professional help — therapy, counseling, or "
        "medication — seek it and document it. Treatment records from a mental health professional are powerful "
        "evidence in a bad faith case. They show that the carrier's conduct caused real, clinically significant harm."
    )
    pdf.callout_box(
        "Emotional distress damages in California bad faith cases routinely reach $50,000 to $500,000 or more, "
        "depending on the severity of the carrier's conduct and the impact on the policyholder. Do not neglect "
        "this category of damages — it can be the largest component of a bad faith recovery.",
        title="Emotional Distress Is Real Money"
    )

    pdf.closing_page()
    path = f"{OUTPUT_DIR}/bad-faith-documentation-kit.pdf"
    pdf.output(path)
    print(f"  [OK] {path} ({pdf.page_no()} pages)")


# =============================================================================
# GUIDE 5: The Complete Contents Claim Workbook
# =============================================================================
def build_contents_workbook():
    pdf = InsuranceGuidePDF(
        title="The Complete Contents Claim Workbook",
        subtitle="Room-by-Room Methodology for Personal Property Claims"
    )
    pdf.cover_page()
    pdf.disclaimer_page()

    # Chapter 1
    pdf.chapter_title("How Contents Claims Work")
    pdf.body_text(
        "Coverage C — Personal Property — is the part of your homeowner's policy that covers your belongings. "
        "Everything inside your home that is not part of the structure itself falls under this coverage: "
        "furniture, clothing, electronics, appliances, kitchenware, books, artwork, tools, sporting equipment, "
        "toys, and thousands of other items. Your Coverage C limit is typically 50-75% of your Coverage A "
        "(dwelling) limit, though this varies by policy."
    )
    pdf.body_text(
        "Contents claims are handled differently from structural claims in several important ways. First, the "
        "burden of proof is on you — the policyholder — to document what you owned and what it was worth. "
        "The carrier will not inventory your home for you. Second, contents are subject to depreciation, which "
        "means the carrier will first pay you the actual cash value (ACV) of your items and withhold a "
        "depreciation holdback that you can recover later when you actually replace the items."
    )
    pdf.body_text(
        "Third, contents claims have special limits — also called sublimits — for certain categories of items. "
        "For example, your policy may limit coverage for jewelry to $2,500, firearms to $2,500, silverware to "
        "$2,500, and so on, unless you have purchased a scheduled endorsement for higher limits. Check your "
        "policy declarations page for these sublimits."
    )
    pdf.callout_box(
        "Review your policy's special limits NOW — before a loss occurs if possible. If your jewelry, firearms, "
        "collectibles, or other high-value items exceed the sublimits, you need a scheduled endorsement to get "
        "full coverage.",
        title="Check Your Sublimits"
    )

    # Chapter 2
    pdf.chapter_title("ACV vs. RCV: How to Get Full Replacement")
    pdf.body_text(
        "Understanding the difference between Actual Cash Value (ACV) and Replacement Cost Value (RCV) is "
        "fundamental to maximizing your contents claim recovery. Most modern homeowner's policies provide "
        "replacement cost coverage for contents, which means you are entitled to the full cost of replacing "
        "your items with new items of like kind and quality. But the payment comes in two stages."
    )
    pdf.section_title("Stage 1: The ACV Payment")
    pdf.body_text(
        "When you submit your contents inventory, the carrier calculates the replacement cost of each item and "
        "then subtracts depreciation based on the item's age and condition. The result is the ACV — and that is "
        "what you are paid initially. For example, if a sofa costs $2,000 to replace and is 5 years old with a "
        "15-year useful life, the carrier might depreciate it by 33%, paying you $1,340 as the ACV."
    )
    pdf.section_title("Stage 2: The Recoverable Depreciation Payment")
    pdf.body_text(
        "Once you actually replace the item — meaning you buy a new sofa of comparable kind and quality — you "
        "can submit the receipt to the carrier and recover the depreciation holdback. In the example above, you "
        "would recover the remaining $660. Your total recovery is the full replacement cost."
    )
    pdf.callout_box(
        "After a declared disaster in California, SB 49 changed the rules: carriers must allow policyholders to "
        "collect full replacement cost for contents WITHOUT requiring proof of actual replacement. This means you "
        "get the full RCV for contents upfront without having to buy replacement items first. This applies only "
        "after a declared disaster.",
        title="SB 49 Game Changer"
    )
    pdf.section_title("Strategies for Maximizing Recovery")
    pdf.bullet_list([
        "Always claim replacement cost, not what you originally paid — prices go up over time",
        "Use current retail pricing from major retailers as your replacement cost source",
        "Challenge excessive depreciation — a well-maintained item depreciates less than a neglected one",
        "Remember that labor cannot be depreciated in California — only materials",
        "Replace items within your policy's time limit (usually 180 days to 2 years after ACV payment)",
        "You can replace with any item of like kind and quality — it does not have to be the same brand",
        "Keep all replacement receipts organized for recoverable depreciation claims",
    ])

    # Chapter 3
    pdf.chapter_title("Room-by-Room Inventory Methodology")
    pdf.body_text(
        "This is the heart of this workbook. A thorough room-by-room inventory is the difference between a "
        "contents claim that recovers 40% of your losses and one that recovers 90% or more. The methodology "
        "is straightforward, but it requires patience and persistence."
    )
    pdf.section_title("General Approach")
    pdf.numbered_list([
        "Start with one room at a time — do not try to inventory your entire home in one session",
        "Work around the room clockwise, wall by wall, starting at the door",
        "For each wall, list what was against it, on it, or near it",
        "Open every drawer, cabinet, and closet in your mind — list everything inside",
        "Look up at the ceiling (light fixtures, fans, smoke detectors) and down at the floor (rugs, mats)",
        "Use old photographs, videos, and shopping records to trigger your memory",
        "Take breaks — this process is emotionally exhausting and memory works better in short sessions",
        "Come back to each room multiple times over several weeks — you will remember more each time",
    ])
    pdf.section_title("Living Room / Family Room")
    pdf.bullet_list([
        "Sofas, loveseats, chairs, recliners — note material, brand, and size",
        "Coffee tables, end tables, sofa tables, console tables",
        "Entertainment center, TV stand, or media furniture",
        "Television(s) — note size, brand, and whether they were smart TVs",
        "Sound system, speakers, soundbar, subwoofer",
        "Streaming devices (Roku, Apple TV, Fire Stick)",
        "Gaming consoles and games (PS5, Xbox, Nintendo Switch)",
        "Lamps — table lamps, floor lamps, accent lighting",
        "Area rugs and decorative mats",
        "Artwork, framed photographs, wall decorations",
        "Books, magazines, and bookshelf contents",
        "Throw pillows, blankets, and decorative items",
        "Curtains, drapes, and window treatments",
        "Plants and planters",
        "Remote controls, batteries, chargers",
    ])
    pdf.section_title("Kitchen")
    pdf.bullet_list([
        "Small appliances: toaster, blender, food processor, coffee maker, mixer, etc.",
        "Pots and pans — list each piece, including lids",
        "Baking sheets, muffin tins, cake pans, cooling racks",
        "Dishes and dinnerware — count full sets, note pattern and manufacturer",
        "Glasses and stemware — everyday and special occasion",
        "Flatware/silverware — everyday and formal sets",
        "Knives — knife block or individual quality knives",
        "Cutting boards",
        "Utensils — spatulas, whisks, tongs, ladles, serving spoons (count them all)",
        "Storage containers (Tupperware, glass containers)",
        "Spice collection — check current prices, spices are expensive",
        "Cookbooks",
        "Kitchen towels, pot holders, oven mitts",
        "Under-sink cleaning supplies and chemicals",
        "Pantry contents — food items are covered if they were contaminated or destroyed",
    ])
    pdf.section_title("Master Bedroom")
    pdf.bullet_list([
        "Bed frame, headboard, footboard — note size (king, queen, etc.)",
        "Mattress and box spring — note brand and quality level",
        "Bedding: sheets, pillowcases, comforter, duvet, bed skirt, decorative pillows",
        "Nightstands and bedside lamps",
        "Dresser and/or chest of drawers",
        "Clothing — this is a major category; go through by type (see below)",
        "Shoes — count every pair including athletic, casual, dress, boots, sandals",
        "Jewelry — note high-value items separately for sublimit purposes",
        "Watches",
        "Closet organizers, hangers, storage boxes",
        "Alarm clock, phone charger, personal electronics",
    ])
    pdf.section_title("Clothing Inventory Tips")
    pdf.body_text(
        "Clothing is one of the most frequently undervalued categories in contents claims. People forget how "
        "much clothing they actually own. Work through it systematically by category: shirts, pants, shorts, "
        "dresses, skirts, suits, jackets, coats, underwear, socks, athletic wear, sleepwear, and seasonal items. "
        "For each category, count the quantity and estimate the average replacement cost per item."
    )
    pdf.callout_box(
        "The average American adult owns approximately 100 items of clothing. At an average replacement cost of "
        "$30 per item, that is $3,000 per person in clothing alone. Many families significantly undercount their "
        "clothing inventory.",
        title="Clothing Adds Up Fast"
    )

    # Chapter 4
    pdf.chapter_title("Cleaning vs. Replacement Determination")
    pdf.body_text(
        "Not every item of personal property that is damaged in a loss needs to be replaced. Some items can "
        "be professionally cleaned and restored. The question of whether an item should be cleaned or replaced "
        "is a significant source of dispute between policyholders and carriers."
    )
    pdf.body_text(
        "Carriers have a financial incentive to clean rather than replace — cleaning is almost always cheaper. "
        "But cleaning is only appropriate when it can restore the item to its pre-loss condition. If professional "
        "cleaning cannot fully remove smoke odor from a sofa, the sofa needs to be replaced. If cleaning cannot "
        "remove staining from clothing, the clothing needs to be replaced."
    )
    pdf.section_title("General Guidelines")
    pdf.bullet_list([
        "Hard, non-porous surfaces (glass, metal, sealed wood) can often be cleaned successfully",
        "Soft, porous items (upholstery, mattresses, pillows, stuffed animals) may retain odor even after cleaning",
        "Electronics may be damaged internally even if they appear clean externally — circuitry is vulnerable",
        "Food items exposed to smoke or contamination should always be replaced, never cleaned",
        "Baby items, children's toys, and items used near the face/mouth should be replaced for safety reasons",
        "Clothing depends on the fabric and the type of contamination — some can be cleaned, some cannot",
        "Documents, books, and paper items are extremely difficult to fully decontaminate from smoke",
    ])
    pdf.callout_box(
        "You are not required to accept cleaned items that still smell, are stained, or are otherwise not "
        "restored to pre-loss condition. If the cleaning company returns your items and they are not right, "
        "document the deficiency and demand replacement.",
        title="Your Right to Replacement"
    )
    pdf.body_text(
        "When the carrier proposes cleaning, ask for specifics: what cleaning method will be used? What is the "
        "success rate for that method on that type of item? Will the carrier guarantee the cleaning restores the "
        "item to pre-loss condition? If the cleaning fails, will the carrier then pay for replacement? Get these "
        "answers in writing before you agree to cleaning."
    )

    # Chapter 5
    pdf.chapter_title("Electronics and Specialty Items")
    pdf.body_text(
        "Electronics deserve special attention in contents claims because they are high-value, technology changes "
        "rapidly, and damage from smoke, water, or power surges is often invisible. A television that appears to "
        "work after a fire may fail weeks later due to corrosion on internal circuitry caused by smoke exposure."
    )
    pdf.section_title("Common Electronics to Inventory")
    pdf.bullet_list([
        "Televisions — each one, with size and brand",
        "Computers — desktops, laptops, tablets",
        "Smartphones and cell phones",
        "Printers, scanners, and peripherals",
        "Gaming consoles and controllers",
        "Smart home devices (Alexa, Google Home, smart thermostats, cameras)",
        "Routers, modems, and networking equipment",
        "External hard drives, USB drives, and storage devices",
        "Headphones and earbuds",
        "Camera equipment — bodies, lenses, accessories",
        "Musical instruments and amplifiers",
        "Power tools (these are often overlooked — they are expensive)",
    ])
    pdf.section_title("Specialty Items")
    pdf.body_text(
        "Specialty items include collections, artwork, antiques, musical instruments, wine, firearms, and other "
        "items that may have special value or require specialized valuation. These items often bump up against "
        "policy sublimits and may require a scheduled endorsement for full coverage."
    )
    pdf.callout_box(
        "For high-value electronics and specialty items, always provide the replacement cost with a current "
        "equivalent model — not the original purchase price. Technology depreciates in value but the replacement "
        "cost for a comparable current model is what matters.",
        title="Current Replacement Cost"
    )
    pdf.bullet_list([
        "Art and collectibles — get independent appraisals for high-value items",
        "Wine collections — document vintage, quantity, and current market value per bottle",
        "Firearms — check current retail prices, not what you paid years ago",
        "Musical instruments — professional-grade instruments can be extremely valuable",
        "Sporting equipment — golf clubs, bikes, ski equipment, fishing gear all add up",
        "Tools and workshop equipment — go shelf by shelf through your workshop or garage",
    ])

    # Chapter 6
    pdf.chapter_title("Pack-Out and Storage Documentation")
    pdf.body_text(
        "When your home is damaged but not destroyed, the carrier will often arrange for a 'pack-out' — a "
        "process where a contents restoration company comes to your home, inventories your belongings, packs "
        "them into boxes, and transports them to a storage facility for cleaning, restoration, or safekeeping "
        "during repairs."
    )
    pdf.body_text(
        "The pack-out process creates several documentation challenges. Items can be damaged during packing "
        "or transport. Items can be lost in storage. Items can be returned in worse condition than when they "
        "left. And the carrier's preferred pack-out company may not properly document what they took or the "
        "condition it was in when they took it."
    )
    pdf.section_title("Protecting Yourself During Pack-Out")
    pdf.numbered_list([
        "Be present during the entire pack-out process — or have a trusted representative present",
        "Take photographs of every room before the pack-out begins",
        "Photograph items as they are packed — document the condition before packing",
        "Get a complete inventory list from the pack-out company, with room assignments for each box",
        "Note the condition of items on the inventory list — add your own notes if the company's notes are vague",
        "Record the serial numbers and model numbers of electronics before they are packed",
        "Mark or tag high-value items for special handling",
        "Get the storage facility address and confirm you will have access to your belongings if needed",
    ])
    pdf.callout_box(
        "The pack-out company's inventory is often used as the basis for the contents claim. If their inventory "
        "is incomplete or inaccurate, it will hurt your claim. Review their inventory carefully and supplement it "
        "with your own documentation.",
        title="Review the Pack-Out Inventory"
    )
    pdf.body_text(
        "When items are returned after cleaning, inspect every single item. Compare returned items to the pack-out "
        "inventory. Note any items that are missing, damaged, or not properly cleaned. Document deficiencies "
        "in writing immediately and notify the carrier. You are entitled to replacement for any items that were "
        "lost or damaged during the pack-out and storage process."
    )

    # Chapter 7
    pdf.chapter_title("Presenting Your Inventory to the Insurance Company")
    pdf.body_text(
        "How you present your contents inventory to the carrier matters almost as much as what is on it. A "
        "well-organized, clearly formatted inventory with supporting documentation will be processed faster and "
        "with fewer disputes than a handwritten list on notebook paper."
    )
    pdf.section_title("Inventory Format")
    pdf.body_text(
        "Use a spreadsheet with the following columns for each item: Room | Item Description | Quantity | "
        "Age (Years) | Condition (Excellent/Good/Fair/Poor) | Original Purchase Price (if known) | Replacement "
        "Cost | Source for Replacement Cost (retailer name and URL) | Depreciation (carrier will calculate, but "
        "you can note your position)."
    )
    pdf.section_title("Supporting Documentation")
    pdf.bullet_list([
        "Photographs showing items in your home (pre-loss if available)",
        "Purchase receipts, credit card statements, or bank records for major items",
        "Printouts showing current retail prices for replacement items",
        "Appraisals for high-value items (jewelry, art, antiques)",
        "Product registration records or warranty documentation",
        "Screenshots from online retailer websites showing current pricing",
    ])
    pdf.section_title("Submission Best Practices")
    pdf.numbered_list([
        "Submit the inventory electronically (email or carrier's portal) and by mail for a paper trail",
        "Include a cover letter summarizing the total claim amount and the number of items",
        "Organize the inventory by room for easy review",
        "Flag high-value items that approach or exceed sublimits",
        "Note any items for which you are requesting an exception to cleaning (i.e., replacement instead)",
        "Keep a complete copy of everything you submit — never send your only copy of anything",
    ])
    pdf.callout_box(
        "Make the adjuster's job easy. A clean, well-organized inventory with supporting documentation gets "
        "processed faster and with less pushback. A messy, incomplete inventory invites scrutiny and delays.",
        title="Presentation Matters"
    )

    # Chapter 8
    pdf.chapter_title("Common Contents Claim Mistakes")
    pdf.body_text(
        "Having handled thousands of contents claims, I see the same mistakes over and over. Each one costs "
        "policyholders money — sometimes a lot of money. Avoid these common pitfalls."
    )
    pdf.section_title("Mistake 1: Underestimating What You Owned")
    pdf.body_text(
        "This is the most common and most costly mistake. People think they do not own that much stuff — until "
        "they try to list everything. The average American household contains an astonishing number of items. "
        "Go room by room, drawer by drawer, shelf by shelf. You will be surprised at how much you forgot."
    )
    pdf.section_title("Mistake 2: Using Purchase Price Instead of Replacement Cost")
    pdf.body_text(
        "Your coverage is for replacement cost — what it costs to buy a comparable item today — not what you "
        "paid five or ten years ago. Prices go up. The sofa you bought for $800 in 2015 costs $1,200 to replace "
        "today. Always use current retail pricing."
    )
    pdf.section_title("Mistake 3: Not Claiming Partially Damaged Items")
    pdf.body_text(
        "If an item is damaged but not destroyed, it is still a covered loss. A smoke-damaged suit that needs "
        "professional cleaning is a claim. A water-stained dining table that needs refinishing is a claim. "
        "You do not have to lose an item completely for it to be covered."
    )
    pdf.section_title("Mistake 4: Missing the Replacement Deadline")
    pdf.body_text(
        "Most policies require you to actually replace items within a specified time period (often 180 days to "
        "2 years) after receiving the ACV payment in order to collect the recoverable depreciation. If you miss "
        "this deadline, you lose the depreciation holdback forever. Calendar this deadline and prioritize replacing "
        "high-value items first."
    )
    pdf.section_title("Mistake 5: Accepting the Carrier's Cleaning Determination Without Challenge")
    pdf.body_text(
        "As discussed in Chapter 4, carriers prefer cleaning to replacement because it is cheaper. If the "
        "cleaning does not restore the item to pre-loss condition, push back. Document the failure and demand "
        "replacement."
    )
    pdf.callout_box(
        "The cumulative effect of these mistakes can easily be $20,000 to $50,000 or more on a large contents "
        "claim. Take your time, be thorough, and do not let the carrier rush you into settling for less than "
        "you are owed.",
        title="The Cost of Mistakes"
    )

    # Chapter 9
    pdf.chapter_title("SB 49 and Disaster Contents Rules")
    pdf.body_text(
        "Senate Bill 49, signed into law in California, changed the game for contents claims after declared "
        "disasters. Before SB 49, policyholders had to physically replace each item and submit a receipt before "
        "they could collect the recoverable depreciation — the difference between ACV and full replacement cost. "
        "This created an absurd burden: families who had just lost everything were expected to go shopping for "
        "thousands of items and save every receipt, all within a tight deadline, just to collect insurance "
        "benefits they had already paid for."
    )
    pdf.body_text(
        "SB 49 eliminated this requirement for claims arising from declared disasters. After a declared disaster, "
        "your carrier must pay the full replacement cost of your contents without requiring proof that you "
        "actually replaced the items. You still need to document what you owned and its replacement cost, but "
        "you do not need to produce purchase receipts for replacement items."
    )
    pdf.callout_box(
        "SB 49 applies only to losses that arise from a declared disaster — a governor-declared state of "
        "emergency. It does not apply to ordinary fire losses, water damage, or other non-disaster claims. "
        "For non-disaster claims, the traditional two-step ACV-then-RCV process still applies.",
        title="When SB 49 Applies"
    )
    pdf.section_title("Key Provisions of SB 49")
    pdf.bullet_list([
        "Carriers must pay full replacement cost for contents without requiring proof of actual replacement",
        "Policyholders still must document what they owned and its replacement cost",
        "The law applies to policies issued or renewed after its effective date for declared disaster losses",
        "Carriers cannot use the old two-step process to delay full payment on disaster contents claims",
        "The law does not change sublimits or other policy provisions — it only affects the replacement requirement",
    ])
    pdf.body_text(
        "If your loss is from a declared disaster and your carrier is insisting you must replace items before "
        "collecting the full replacement cost, cite SB 49 (Insurance Code Section 2051.5) and demand full "
        "payment. If the carrier refuses, file a complaint with the California Department of Insurance and "
        "consult with an attorney about bad faith."
    )
    pdf.section_title("Practical Tips Under SB 49")
    pdf.numbered_list([
        "Confirm your loss qualifies as a declared disaster — check the Governor's executive orders",
        "Submit your contents inventory with current replacement pricing from major retailers",
        "Cite Insurance Code Section 2051.5 in your cover letter when demanding full replacement cost",
        "If the carrier issues only an ACV payment, respond in writing demanding the recoverable depreciation",
        "Document the carrier's refusal to comply with SB 49 — this is a regulatory violation and potential bad faith",
        "File a CDI complaint if the carrier does not comply within 30 days of your written demand",
    ])

    # Additional chapters for depth
    pdf.chapter_title("The Garage, Attic, and Outdoor Areas")
    pdf.body_text(
        "These areas are the most commonly forgotten in contents claims, and they contain some of the most "
        "expensive items you own. Think about it — your garage might hold $5,000 to $20,000 in tools alone, "
        "plus sporting equipment, holiday decorations, automotive supplies, and stored household goods. The "
        "attic may contain seasonal items, family keepsakes, and extra furniture. Your outdoor areas include "
        "patio furniture, barbecue grills, garden tools, and landscaping equipment."
    )
    pdf.section_title("Garage Inventory")
    pdf.bullet_list([
        "Power tools — drill, circular saw, jigsaw, sander, reciprocating saw, table saw, miter saw",
        "Hand tools — hammers, screwdrivers, wrenches, pliers, socket sets, levels, tape measures",
        "Tool storage — toolbox, tool chest, workbench, pegboard organizer, wall-mounted storage",
        "Automotive supplies — jack, jack stands, jumper cables, oil, filters, cleaning supplies",
        "Lawn and garden — mower, edger, blower, trimmer, rake, shovel, hose, sprinklers, pots",
        "Sporting equipment — bicycles, golf clubs, ski equipment, camping gear, fishing gear, surfboards",
        "Holiday decorations — Christmas, Halloween, Easter, and seasonal items (these add up fast)",
        "Storage bins and containers — and their contents (do not forget what is inside them)",
        "Ladders — extension ladder, step ladder, folding ladder",
        "Workbench items — nuts, bolts, screws, nails, adhesives, paint supplies, sandpaper",
    ])
    pdf.section_title("Attic and Storage Areas")
    pdf.bullet_list([
        "Seasonal clothing stored in bins or garment bags",
        "Family photos and photo albums (these may have sentimental value beyond replacement cost)",
        "Baby items — cribs, strollers, car seats, clothing (even if your children have outgrown them)",
        "Extra furniture — pieces not currently in use but in storage",
        "Old electronics — computers, phones, cameras that still have value",
        "Books and media — boxes of books, DVDs, CDs, vinyl records",
        "Luggage and travel bags",
        "Craft and hobby supplies — sewing machines, fabric, art supplies, musical instruments",
    ])
    pdf.section_title("Outdoor and Patio")
    pdf.bullet_list([
        "Patio furniture — table, chairs, umbrella, cushions, covers",
        "Barbecue grill and accessories — propane tank, tools, cover, smoker",
        "Outdoor lighting — string lights, solar lights, path lights",
        "Planters, pots, and garden ornaments",
        "Outdoor toys and play equipment — swing sets, trampolines, sports nets",
        "Pool or spa supplies — if applicable, chemicals, vacuum, covers, floats",
        "Firewood and fire pit accessories",
    ])
    pdf.callout_box(
        "Garage contents alone can easily total $10,000 to $30,000 in a typical home. Do not skip these areas. "
        "Walk through them mentally just as carefully as you walk through the interior of your home.",
        title="Garages Are Goldmines"
    )

    pdf.chapter_title("Challenging the Carrier's Contents Valuation")
    pdf.body_text(
        "After you submit your contents inventory, the carrier will review it, assign values, and issue a payment. "
        "In my experience, the carrier's initial valuation is almost always lower than it should be. They use "
        "lower-quality replacement items, apply excessive depreciation, and sometimes simply reduce quantities "
        "without explanation."
    )
    pdf.section_title("Common Carrier Valuation Tricks")
    pdf.bullet_list([
        "Substituting lower-quality replacement items — replacing your premium cookware with budget brands",
        "Using wholesale or clearance pricing instead of standard retail pricing",
        "Depreciating items beyond their actual condition — a well-maintained item depreciates less",
        "Grouping items into categories and applying a blanket value instead of pricing each item individually",
        "Ignoring specialty or high-value items that they do not want to research",
        "Claiming items are 'used' and applying garage-sale pricing instead of replacement cost",
        "Applying a 'reasonableness' reduction to the total without item-by-item justification",
    ])
    pdf.body_text(
        "When you receive the carrier's valuation, review it line by line. For every item where the carrier's "
        "value differs from yours, ask for a written explanation. If the carrier used a lower-quality replacement "
        "item, provide evidence of the actual quality you owned — brand name, product line, purchase receipt, "
        "or photograph. If the carrier over-depreciated, explain the actual condition of the item and provide "
        "evidence of its maintenance history if available."
    )
    pdf.callout_box(
        "The replacement cost is the cost to buy a new item of like kind and quality — not the cheapest possible "
        "substitute. If you owned a KitchenAid stand mixer, the carrier cannot value it at the price of a generic "
        "mixer from a discount store. Like kind and quality means comparable brand, features, and quality level.",
        title="Like Kind and Quality"
    )

    pdf.chapter_title("Sample Contents Inventory Cover Letter")
    pdf.body_text(
        "[Date]\n\n"
        "[Insurance Company Name]\n"
        "[Claims Department Address]\n\n"
        "Re: Insured: [Your Name]\n"
        "Policy Number: [Policy Number]\n"
        "Claim Number: [Claim Number]\n"
        "Date of Loss: [Date of Loss]\n"
        "PERSONAL PROPERTY CONTENTS INVENTORY — COVERAGE C CLAIM\n\n"
        "Dear [Adjuster Name]:\n\n"
        "Please find enclosed my personal property inventory for the above-referenced claim. This inventory "
        "covers [number] items across [number] rooms and areas, with a total claimed replacement cost value of "
        "$[amount].\n\n"
        "The inventory is organized room by room and includes the following information for each item: "
        "description, quantity, age, condition at the time of loss, and current replacement cost with a source "
        "citation (retailer name and price as of the date of this submission).\n\n"
        "I have also enclosed supporting documentation including:\n"
        "- Pre-loss photographs showing items in my home\n"
        "- Purchase receipts and credit card statements for major items\n"
        "- Current retail pricing printouts from major retailers\n\n"
        "Please note that this inventory may be supplemented as I continue to recall additional items. Per "
        "California law, my right to supplement this inventory does not expire with this initial submission.\n\n"
        "I request that your valuation be provided in writing on a line-by-line basis, showing the replacement "
        "item selected, the replacement cost, and the depreciation applied for each item. This will allow me "
        "to review your valuation and identify any items where additional documentation may be needed.\n\n"
        "Please process this claim and issue payment within 30 days as required by 10 CCR 2695.7(h).\n\n"
        "Sincerely,\n"
        "[Your Name]"
    )
    pdf.callout_box(
        "Always request the carrier's line-by-line valuation in writing. This forces the carrier to justify "
        "every number and makes it easy to identify and challenge items where they have undervalued your property.",
        title="Demand Line-by-Line"
    )

    pdf.chapter_title("Bathroom and Laundry Room Inventory")
    pdf.body_text(
        "Bathrooms and laundry rooms are often underinventoried because we take for granted the dozens of small "
        "items they contain. But these items add up quickly. A well-stocked master bathroom can easily contain "
        "$2,000 to $5,000 in contents between toiletries, towels, personal care appliances, medications, and "
        "decorative items."
    )
    pdf.section_title("Master Bathroom")
    pdf.bullet_list([
        "Towels — bath towels, hand towels, washcloths (count each set)",
        "Bath mat and rug",
        "Shower curtain, liner, and rings (or glass enclosure accessories)",
        "Toiletries — shampoo, conditioner, body wash, soap, face wash, lotion",
        "Cosmetics and makeup — foundation, concealer, eye products, lip products, brushes",
        "Fragrances and cologne — high-end fragrances can be very expensive",
        "Hair appliances — blow dryer, flat iron, curling iron, clippers",
        "Electric toothbrush, water flosser, oral care products",
        "Medications — both prescription and over-the-counter (list each one)",
        "First aid supplies — bandages, antibiotic ointment, thermometer, etc.",
        "Scale, tissue box holder, wastebasket, organizers",
        "Decorative items — candles, art, plants, mirrors",
    ])
    pdf.section_title("Guest Bathroom")
    pdf.bullet_list([
        "Towels, bath mat, shower curtain (just as fully stocked as the master, often forgotten)",
        "Guest toiletries and supplies",
        "Decorative items specific to this bathroom",
    ])
    pdf.section_title("Laundry Room")
    pdf.bullet_list([
        "Laundry detergent, fabric softener, stain remover, bleach",
        "Iron and ironing board",
        "Drying rack",
        "Laundry baskets and hampers",
        "Cleaning supplies stored here — mop, broom, vacuum, Swiffer, cleaning chemicals",
        "Storage items — extra paper towels, toilet paper, trash bags",
        "Sewing kit and mending supplies",
    ])

    pdf.chapter_title("Home Office and Children's Rooms")
    pdf.section_title("Home Office")
    pdf.body_text(
        "With the rise of remote work, home offices have become significant concentrations of value. A well-equipped "
        "home office can easily contain $5,000 to $15,000 in contents between computers, monitors, printers, "
        "furniture, and supplies."
    )
    pdf.bullet_list([
        "Desk and office chair",
        "Computer — desktop or laptop, with specifications noted (RAM, storage, processor)",
        "Monitor(s) — size and brand for each",
        "Keyboard, mouse, mousepad, webcam, microphone",
        "Printer, scanner, copier — including ink or toner supplies",
        "External hard drives, USB drives, docking station",
        "Desk lamp and any other lighting",
        "Office supplies — paper, pens, staplers, tape, files, folders, binders",
        "Bookshelf contents — reference books, manuals, binders",
        "Filing cabinet and contents (the cabinet itself has value)",
        "Decorative items — art, plants, awards, diplomas, photo frames",
        "Surge protector, UPS battery backup, power strips, cable management",
    ])
    pdf.section_title("Children's Bedrooms")
    pdf.body_text(
        "Children's rooms are inventory-dense. Between clothing, toys, books, electronics, and school supplies, "
        "a child's room can easily contain $3,000 to $8,000 or more in contents. Teenagers' rooms often contain "
        "even more, especially if they have gaming systems, musical instruments, or hobby equipment."
    )
    pdf.bullet_list([
        "Bed, mattress, and all bedding (sheets, comforter, pillows, decorative pillows)",
        "Dresser and/or chest of drawers",
        "Desk and chair for homework",
        "Clothing — children grow fast; they often have more clothes than adults",
        "Shoes — athletic, casual, dress, seasonal",
        "Toys — action figures, dolls, building sets, board games, puzzles, stuffed animals",
        "Books — picture books, chapter books, textbooks, reference books",
        "Electronics — tablet, gaming console, games, headphones, phone",
        "Sports equipment — cleats, shin guards, bats, balls, helmets, gear bags",
        "Musical instruments — if applicable",
        "School supplies — backpack, notebooks, calculators, art supplies",
        "Decorative items — posters, wall art, lamps, clocks, piggy banks",
    ])
    pdf.callout_box(
        "Do not underestimate children's contents. Parents often say 'they did not have much' but when you go "
        "drawer by drawer and shelf by shelf, the total is almost always higher than expected. Lego sets alone "
        "can be worth hundreds or thousands of dollars per collection.",
        title="Children Own More Than You Think"
    )

    pdf.chapter_title("Contents Claim Quick Reference and Summary")
    pdf.body_text(
        "Use this final chapter as your at-a-glance reference for managing your contents claim from start to finish."
    )
    pdf.section_title("Contents Claim Process Summary")
    pdf.numbered_list([
        "Review your policy — know your Coverage C limit, sublimits, and whether you have RCV or ACV coverage",
        "Begin your inventory immediately — memory fades fast; start while details are fresh",
        "Use the room-by-room methodology — work systematically to avoid missing items",
        "Gather supporting documentation — photos, receipts, purchase histories, bank statements",
        "Price every item at current replacement cost — use major retailer websites for pricing sources",
        "Submit the inventory with a professional cover letter and supporting documentation",
        "Review the carrier's valuation line by line — challenge every item where they undervalued",
        "Supplement the inventory as you remember additional items — do not assume the window has closed",
        "Track the replacement deadline — replace high-value items first to collect recoverable depreciation",
        "After a declared disaster, cite SB 49 for full replacement cost without proof of actual replacement",
    ])
    pdf.section_title("Key Dollar Amounts to Remember")
    pdf.bullet_list([
        "Average US household contents value: $100,000 to $200,000 (many people underestimate by 50% or more)",
        "Average clothing per adult: $3,000 to $5,000 replacement cost",
        "Average kitchen contents: $5,000 to $15,000 replacement cost",
        "Average garage contents: $5,000 to $20,000 replacement cost",
        "Average electronics per household: $5,000 to $15,000 replacement cost",
        "Average master bedroom including closet: $8,000 to $20,000 replacement cost",
    ])
    pdf.callout_box(
        "The total replacement cost of your household contents is almost certainly higher than you think. Most "
        "families estimate their contents at $50,000 to $75,000 when the actual replacement cost is $150,000 to "
        "$250,000. Take your time, be thorough, and do not leave money on the table.",
        title="You Own More Than You Think"
    )

    pdf.closing_page()
    path = f"{OUTPUT_DIR}/contents-claim-workbook.pdf"
    pdf.output(path)
    print(f"  [OK] {path} ({pdf.page_no()} pages)")


# =============================================================================
# MAIN — Generate all 5 guides
# =============================================================================
if __name__ == "__main__":
    print("\n=== Generating Paid PDF Guides for insuranceclaimsinfo.com ===\n")

    print("1/5  The California Appraisal Handbook...")
    build_appraisal_handbook()

    print("2/5  Xactimate Dispute Guide: Line by Line...")
    build_xactimate_guide()

    print("3/5  California Wildfire Claims Recovery Guide...")
    build_wildfire_guide()

    print("4/5  Bad Faith Documentation Kit...")
    build_bad_faith_kit()

    print("5/5  The Complete Contents Claim Workbook...")
    build_contents_workbook()

    print("\n=== All 5 PDF guides generated successfully! ===\n")
