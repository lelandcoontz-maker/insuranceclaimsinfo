import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title:
    "E-Commerce Business Insurance Claims: When Your Property Is Digital, Your Warehouse Is Rented, and Your Policy Wasn't Designed for This",
  description:
    "E-commerce businesses fall through traditional insurance gaps: the home-based business exclusion, electronic data sublimits, off-premises inventory, and business income when your website goes down. Learn how to identify and close the coverage gaps before a loss exposes them.",
  summary:
    'E-commerce sellers fall through standard insurance gaps: the home-based business exclusion, low electronic-data sublimits, off-premises inventory, and business income when the website goes down. Identify and close these gaps before a loss exposes them.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s interpretation of
          California insurance law as a Licensed Public Adjuster. It is not legal advice. E-commerce
          insurance involves specialized commercial property forms, cyber liability endorsements, and
          coverage issues that vary based on business structure, platform, and jurisdiction. If you
          have a disputed claim involving an e-commerce business, consult with a licensed California
          attorney who specializes in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Traditional commercial property insurance was designed for businesses that own tangible
        things and keep them in a building they occupy. A manufacturer has equipment and raw
        materials. A retailer has inventory on shelves. A restaurant has kitchen equipment and
        furniture. The standard commercial property policy &mdash; ISO form CP 00 10 &mdash;
        was built for these businesses. It covers{' '}
        <Link href="/resources/business-personal-property-claims" className="text-blue-700 underline hover:text-blue-900">
          business personal property
        </Link>{' '}
        at the described premises, the building itself, and{' '}
        <Link href="/resources/business-interruption" className="text-blue-700 underline hover:text-blue-900">
          business income
        </Link>{' '}
        lost when a covered peril shuts down operations.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        An e-commerce business breaks every one of those assumptions. Your most valuable
        &ldquo;property&rdquo; may be digital &mdash; product listings, customer databases,
        photography, website code, and supplier relationships managed through platforms you do
        not control. Your physical inventory may sit in a third-party warehouse or Amazon FBA
        fulfillment center hundreds of miles away. Your &ldquo;premises&rdquo; may be a spare
        bedroom, a kitchen table, or a laptop at a coffee shop. And your revenue depends not on
        a building staying intact but on a website staying online, a platform not suspending your
        account, and a supply chain delivering products you may never physically touch.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When something goes wrong &mdash; a warehouse fire destroys your inventory, a server
        crash takes your site offline, a data breach exposes customer information, or a product
        injures a consumer &mdash; the insurance policy you thought covered your business may
        have gaps wide enough to bankrupt you. This article identifies those gaps and explains
        how to close them before a loss exposes them.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Home-Based Business Exclusion Trap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The most common and most dangerous coverage gap for e-commerce sellers is also the
        simplest: <strong>your homeowner&rsquo;s or renter&rsquo;s policy does not cover your
        business</strong>. Most e-commerce businesses start at home. Many stay there permanently.
        The seller assumes their homeowner&rsquo;s policy provides some level of protection. It
        does not.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard ISO HO 00 03 homeowner&rsquo;s policy contains a business property
        exclusion under Coverage C (Personal Property). The policy limits coverage for
        &ldquo;property used at any time or in any manner for any business purpose&rdquo; to
        $2,500 on the premises and $500 away from the premises. For an e-commerce seller with
        $50,000 in inventory stored in a spare bedroom, that $2,500 limit is functionally
        worthless.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The exclusion goes deeper than property. The homeowner&rsquo;s liability coverage
        (Coverage E) excludes bodily injury or property damage &ldquo;arising out of or in
        connection with a business.&rdquo; If a product you sell from your home injures a
        customer, your homeowner&rsquo;s policy will not defend you. If a delivery driver trips
        on your front steps while picking up a shipment, your homeowner&rsquo;s liability
        coverage will likely deny the claim.
      </p>

      <CalloutBox variant="warning" title="The $2,500 Limit Is Not Coverage &mdash; It Is a Trap">
        <p>
          Many home-based e-commerce sellers point to the $2,500 business property allowance in
          their homeowner&rsquo;s policy and assume they have coverage. They do not. The $2,500
          limit is a sublimit within the personal property coverage &mdash; it applies to
          incidental business property, not to an operating business. Once the insurer
          determines that the property is part of an active business operation, coverage
          disputes multiply. And the liability exclusion has no sublimit at all &mdash; business
          liability is simply excluded.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        The solution is a <strong>Business Owner&rsquo;s Policy (BOP)</strong> or a standalone
        commercial property and general liability policy. A BOP combines commercial property
        coverage, general liability coverage, and business income coverage into a single package.
        It is designed for small businesses and is typically affordable. But most home-based
        e-commerce sellers never purchase one, either because they do not realize they need it or
        because they assume their homeowner&rsquo;s policy is sufficient.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        In California, Insurance Code &sect; 790.03(h) prohibits unfair claims practices, but
        this protection only applies when you actually have a valid policy covering the loss. If
        your homeowner&rsquo;s policy legitimately excludes business property and business
        liability, there is no bad faith claim when the insurer denies your business loss. The
        exclusion is clear, and it applies.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Inventory in Third-Party Warehouses: The Off-Premises Coverage Problem
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many e-commerce businesses store physical inventory at locations they do not own or
        occupy &mdash; Amazon FBA warehouses, third-party logistics (3PL) providers, or rented
        warehouse space. This creates a fundamental coverage question: whose insurance covers
        the inventory when it is damaged?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the standard commercial property form (ISO CP 00 10), business personal property
        is covered at the &ldquo;described premises&rdquo; listed on the policy. If your policy
        lists your home address as the premises, inventory stored at an Amazon warehouse in
        Riverside is not at the described premises. The policy does include coverage for
        &ldquo;your business personal property in the open (or in a vehicle) within 100 feet
        of the described premises&rdquo; and for personal property &ldquo;temporarily at a
        location you don&rsquo;t own, lease, or operate&rdquo; &mdash; but that temporary
        off-premises coverage is severely sublimited, typically $10,000 or less.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your inventory is <em>permanently</em> stored at a third-party warehouse, it is
        not &ldquo;temporarily&rdquo; there. The off-premises sublimit does not apply to
        permanent storage. You need either: (1) the warehouse address listed as an additional
        described premises on your policy, (2) a separate floater or inland marine policy
        covering property at any location, or (3) confirmed coverage under the warehouse
        operator&rsquo;s policy (which usually requires a contractual arrangement).
      </p>

      <CalloutBox variant="warning" title="Amazon FBA Does Not Insure Your Inventory">
        <p>
          Amazon&rsquo;s FBA terms of service make clear that Amazon is not responsible for
          loss or damage to inventory stored in its fulfillment centers except to the extent
          caused by Amazon&rsquo;s negligence &mdash; and even then, reimbursement is limited.
          If an Amazon warehouse burns down or floods, your inventory loss is your problem. The
          same is true for most 3PL providers. Their{' '}
          <Link href="/resources/business-personal-property-claims" className="text-blue-700 underline hover:text-blue-900">
            warehouse operator&rsquo;s policy
          </Link>{' '}
          may cover their building and equipment, but your goods are your responsibility unless
          you have negotiated bailee coverage or contractual liability.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Digital Assets and the Electronic Data Limitation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For many e-commerce businesses, the most valuable assets are not physical at all.
        Consider what an online seller actually owns:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Product listings and descriptions:</strong> Hundreds or thousands of product
          pages, each with custom descriptions, specifications, and SEO optimization developed
          over years.
        </li>
        <li>
          <strong>Product photography:</strong> Professional photos that cost thousands of
          dollars to produce and are essential for sales.
        </li>
        <li>
          <strong>Customer databases:</strong> Order history, customer contact information,
          marketing lists, and analytics data.
        </li>
        <li>
          <strong>Website code and design:</strong> Custom-developed e-commerce platforms,
          plugins, integrations, and design elements.
        </li>
        <li>
          <strong>Supplier relationships and pricing:</strong> Negotiated terms, supplier
          contact databases, and pricing agreements managed through digital systems.
        </li>
        <li>
          <strong>Reviews and reputation data:</strong> Years of accumulated product reviews
          and seller ratings that directly drive revenue.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The standard commercial property policy treats all of this as &ldquo;electronic data&rdquo;
        and severely sublimits coverage. Under the standard ISO form, electronic data is
        defined as &ldquo;information, facts, or computer programs stored as or on, created or
        used on, or transmitted to or from computer software, including systems and applications
        software, on hard or floppy disks, CD-ROMs, tapes, drives, cells, data processing
        devices, or any other repositories of computer software which are used with
        electronically controlled equipment.&rdquo; The standard sublimit for electronic data
        is typically $2,500 &mdash; a limit that would not cover a week&rsquo;s worth of
        product photography for most e-commerce businesses.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Electronic Data additional coverage (ISO CP 00 10, Section A.5.e) provides coverage
        for the cost to replace or restore electronic data destroyed by a covered cause of loss.
        But even when this coverage applies, it is limited to the cost of reproducing the data
        from existing duplicates or from purchased software &mdash; it does not cover the loss
        of data that cannot be reproduced, and the sublimit remains inadequate for most
        e-commerce operations.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Business Income When Your Website Goes Down
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard{' '}
        <Link href="/resources/business-interruption" className="text-blue-700 underline hover:text-blue-900">
          business income coverage
        </Link>{' '}
        (ISO CP 00 30) covers lost income and continuing expenses when a covered cause of loss
        at the described premises causes a &ldquo;necessary suspension&rdquo; of operations.
        The coverage requires &ldquo;direct physical loss of or damage to property at the
        described premises.&rdquo;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For an e-commerce business, this creates a fundamental problem. Your revenue does not
        depend on a building. It depends on a website. When your site goes down &mdash; whether
        from a server crash, a DDoS attack, a hosting provider failure, or a software bug
        &mdash; your income stops just as completely as if a fire destroyed a retail store. But
        is a server crash &ldquo;direct physical loss of or damage to property&rdquo;? Courts
        have generally answered <strong>no</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The question of whether electronic events constitute &ldquo;direct physical loss&rdquo;
        has been extensively litigated, particularly after the COVID-19 pandemic generated
        thousands of business interruption claims based on government closure orders. While the
        legal landscape continues to evolve, the prevailing view &mdash; reinforced by cases
        like <em>Santo&rsquo;s Italian Caf&eacute; LLC v. Acuity Ins. Co.</em> (6th Cir. 2021)
        and <em>Mudpie, Inc. v. Travelers Cas. Ins. Co.</em> (N.D. Cal. 2020) &mdash; is that
        &ldquo;direct physical loss&rdquo; requires some tangible alteration to property.
        A server going offline, a software bug, or a DDoS attack does not meet this threshold
        under a standard property policy.
      </p>

      <CalloutBox variant="important" title="Your Website Going Down Is Probably Not Covered by Standard BI">
        <p>
          Standard business income coverage requires &ldquo;direct physical loss of or damage to
          property.&rdquo; A website outage caused by server failure, cyberattack, or hosting
          provider problems is not &ldquo;physical loss&rdquo; under prevailing case law. To
          cover website downtime, you need either a{' '}
          <Link href="/resources/business-cyber-liability-insurance" className="text-blue-700 underline hover:text-blue-900">
            cyber liability policy
          </Link>{' '}
          with business interruption coverage or a specialized technology errors and omissions
          policy.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Business Income When Your Fulfillment Center Burns
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Now consider a different scenario: the Amazon FBA warehouse storing your inventory
        suffers a fire. Your website is still online, but you have no inventory to ship. Orders
        come in, but you cannot fulfill them. Your income drops to zero. Is this covered?
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a{' '}
        <Link href="/resources/dependent-property-business-income" className="text-blue-700 underline hover:text-blue-900">
          dependent property
        </Link>{' '}
        or{' '}
        <Link href="/resources/contingent-business-interruption" className="text-blue-700 underline hover:text-blue-900">
          contingent business interruption
        </Link>{' '}
        question. Standard business income coverage only applies to losses caused by damage at
        <em> your</em> described premises. When the damage occurs at someone else&rsquo;s
        premises &mdash; a supplier, a customer, a manufacturer, or a warehouse &mdash; you
        need contingent business interruption (CBI) or dependent property coverage to recover
        lost income.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ISO Business Income from Dependent Properties form (CP 15 08) provides four
        categories of dependent properties: contributing locations (suppliers), recipient
        locations (customers), manufacturing locations, and leader locations (businesses that
        attract customers to yours). A third-party warehouse where you store inventory is
        likely a &ldquo;contributing location&rdquo; &mdash; a location from which goods are
        delivered to the insured or to the insured&rsquo;s customers.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But here is the catch: dependent property coverage must be specifically purchased.
        It is not included in a standard BOP or commercial property policy. Many e-commerce
        sellers who rely entirely on third-party fulfillment have no contingent business
        interruption coverage at all. When the warehouse burns, they discover the gap.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Platform Dependency Risk: The Uninsurable Exposure
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some of the most catastrophic business interruption scenarios for e-commerce sellers
        have nothing to do with fire, theft, or cyberattacks. They involve platforms.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Amazon suspends your seller account.</strong> A competitor files false
          intellectual property complaints. Amazon suspends your account &ldquo;pending
          investigation.&rdquo; Your revenue drops to zero overnight. The suspension lasts
          weeks or months.
        </li>
        <li>
          <strong>Shopify goes down.</strong> The platform hosting your entire storefront
          experiences a prolonged outage. You cannot process orders. Customers go elsewhere.
        </li>
        <li>
          <strong>PayPal freezes your funds.</strong> A payment processor flags your account
          and holds your funds for 180 days while they investigate.
        </li>
        <li>
          <strong>A social media algorithm change destroys your traffic.</strong> An Instagram
          or Facebook algorithm update reduces your organic reach by 80%. Your advertising
          costs triple overnight.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        None of these scenarios is covered by any standard property insurance policy.
        There is no &ldquo;direct physical loss.&rdquo; There is no covered cause of loss.
        There is no damaged property. These are <strong>business risks</strong> that fall
        entirely outside the scope of property insurance. Even cyber liability policies,
        which cover some technology-related losses, do not cover platform account
        suspensions or algorithm changes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a coverage gap that can be closed with a better policy. It is an inherent
        risk of building a business on platforms you do not control. The only mitigation is
        diversification &mdash; selling on multiple platforms, maintaining your own website,
        building a direct customer relationship through email lists, and keeping enough cash
        reserves to survive a platform disruption.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Cyber Liability and Customer Data
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every e-commerce business collects customer data &mdash; names, addresses, email
        addresses, and often payment information. Under the California Consumer Privacy Act
        (CCPA, Civil Code &sect; 1798.100 et seq.) and its successor, the California Privacy
        Rights Act (CPRA), California consumers have specific rights regarding their personal
        information, and businesses that suffer data breaches face statutory damages of
        $100&ndash;$750 per consumer per incident under Civil Code &sect; 1798.150.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A{' '}
        <Link href="/resources/business-cyber-liability-insurance" className="text-blue-700 underline hover:text-blue-900">
          cyber liability policy
        </Link>{' '}
        covers the costs associated with a data breach: forensic investigation, customer
        notification, credit monitoring, legal defense, regulatory fines, and business
        interruption caused by the cyber event. Standard commercial general liability (CGL)
        policies do not cover data breaches. The ISO CGL form (CG 00 01) contains an
        &ldquo;electronic data&rdquo; exclusion (Exclusion p) that eliminates coverage for
        damages arising out of the loss of, loss of use of, damage to, corruption of, inability
        to access, or inability to manipulate electronic data.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For e-commerce businesses, cyber liability is not optional. If you collect customer
        data &mdash; and every e-commerce business does &mdash; you have a legal obligation to
        protect it and a financial exposure when you fail. The cost of a cyber liability policy
        for a small e-commerce business is typically $500&ndash;$2,000 per year. The cost of a
        data breach without one can be hundreds of thousands of dollars.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Product Liability for Goods Sold Online
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you sell products &mdash; whether you manufacture them, source them from suppliers,
        or dropship them &mdash; you have product liability exposure. A customer is injured by
        a defective product. A child swallows a small component. A battery overheats and starts
        a fire. The product does not perform as advertised and causes economic loss.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under California&rsquo;s strict product liability doctrine, established in
        <em> Greenman v. Yuba Power Products, Inc.</em> (1963) 59 Cal.2d 57 and codified
        through subsequent case law, every entity in the chain of distribution &mdash;
        manufacturer, distributor, and retailer &mdash; can be held strictly liable for
        injuries caused by a defective product. You do not need to have manufactured the product.
        You do not need to have known about the defect. If you sold it, you are potentially liable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For e-commerce sellers who source products from overseas manufacturers, this exposure is
        particularly acute. If the manufacturer is in China and has no U.S. presence, the
        injured consumer&rsquo;s attorney will look for a U.S.-based defendant. That defendant
        is you &mdash; the seller whose name appears on the Amazon listing, the Shopify store,
        or the invoice. California courts have consistently held that online sellers can be
        treated as &ldquo;retailers&rdquo; or &ldquo;distributors&rdquo; for purposes of strict
        product liability, regardless of whether they ever physically handled the product.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Product liability coverage is included in a standard CGL policy (ISO CG 00 01) under
        &ldquo;products-completed operations hazard.&rdquo; But some BOPs designed for
        service businesses exclude product liability or provide minimal limits. If you sell
        physical products, verify that your policy includes products-completed operations
        coverage with adequate limits &mdash; at minimum $1,000,000 per occurrence, and
        consider an umbrella policy for higher limits.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Shipping and Transit Gap
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When does ownership of a product transfer from you to the customer? And whose insurance
        covers goods in transit? These questions matter more than most e-commerce sellers realize.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under the Uniform Commercial Code (UCC), adopted in California as Cal. Com. Code
        &sect; 2319, the terms of sale determine when risk of loss passes from seller to buyer.
        For shipment contracts (&ldquo;FOB origin&rdquo; or &ldquo;FOB shipping point&rdquo;),
        risk passes when the seller delivers the goods to the carrier. For destination contracts
        (&ldquo;FOB destination&rdquo;), risk remains with the seller until the goods arrive at
        the buyer&rsquo;s location.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most e-commerce sales are effectively <strong>destination contracts</strong> in practice,
        even if the seller&rsquo;s terms of service attempt to shift risk earlier. Customers
        expect to receive their products, and if a package is lost or damaged in transit, the
        customer will demand a replacement or refund from the seller &mdash; not from UPS or
        FedEx. The seller bears the practical risk regardless of the legal technicalities.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Standard commercial property insurance covers business personal property at the
        described premises. It does not cover goods in transit unless transit coverage is
        specifically added. An <strong>inland marine transit policy</strong> or cargo insurance
        covers goods from the point of shipment to delivery. For high-volume shippers, this
        coverage is essential. For smaller sellers, carrier-provided insurance (UPS declared
        value, FedEx declared value) may be sufficient for individual shipments, though
        carriers&rsquo; liability limits are typically low ($100 for most domestic shipments
        by default) and their claims processes are notoriously difficult.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        California-Specific Considerations
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        California e-commerce businesses face additional regulatory and insurance considerations:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Workers&rsquo; compensation:</strong> If you have employees &mdash; including
          warehouse packers, customer service representatives, or even part-time helpers &mdash;
          California Labor Code &sect; 3700 requires workers&rsquo; compensation insurance. There
          is no exception for small businesses. A single employee triggers the requirement.
          Independent contractors may also require coverage depending on the ABC test under
          <em> Dynamex Operations West, Inc. v. Superior Court</em> (2018) 4 Cal.5th 903.
        </li>
        <li>
          <strong>Home-based business permits:</strong> Many California cities require a home
          occupation permit or business license to operate a business from a residence. Operating
          without one can void certain insurance coverages and create regulatory exposure.
        </li>
        <li>
          <strong>Sales tax and nexus:</strong> Under California Revenue &amp; Taxation Code
          &sect; 6203, economic nexus rules require out-of-state sellers to collect California
          sales tax if they exceed $500,000 in California sales. For in-state e-commerce sellers,
          California sales tax obligations apply to all taxable sales. Tax disputes can create
          financial exposure that insurance does not cover.
        </li>
        <li>
          <strong>California&rsquo;s Proposition 65:</strong> If you sell products in California
          that contain chemicals listed under Prop 65 (Health &amp; Safety Code &sect; 25249.5
          et seq.), you must provide warnings. Failure to warn can result in lawsuits with
          statutory penalties of up to $2,500 per day per violation. Product liability insurance
          may or may not cover Prop 65 claims depending on the policy language.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Practical Coverage Checklist for E-Commerce Businesses
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every e-commerce business should evaluate the following coverage areas. The specific
        policies and limits you need depend on your revenue, inventory value, number of
        employees, and the platforms you use. But every e-commerce business &mdash; from the
        $10,000-a-year side hustle to the $10,000,000 operation &mdash; should address each
        of these exposures.
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Commercial general liability (CGL):</strong> Covers bodily injury and property
          damage liability, including product liability. Do not rely on homeowner&rsquo;s
          liability. Minimum $1,000,000 per occurrence.
        </li>
        <li>
          <strong>Commercial property or BOP:</strong> Covers your{' '}
          <Link href="/resources/business-personal-property-claims" className="text-blue-700 underline hover:text-blue-900">
            business personal property
          </Link>{' '}
          &mdash; inventory, equipment, supplies &mdash; at the described premises. Include
          all locations where you store inventory.
        </li>
        <li>
          <strong>Off-premises or floater coverage:</strong> If inventory is stored at third-party
          locations, ensure coverage extends to those locations or purchase a separate floater.
        </li>
        <li>
          <strong>Contingent business interruption:</strong>{' '}
          <Link href="/resources/contingent-business-interruption" className="text-blue-700 underline hover:text-blue-900">
            CBI coverage
          </Link>{' '}
          for income lost when a supplier, warehouse, or fulfillment center suffers a covered loss.
        </li>
        <li>
          <strong>Cyber liability:</strong>{' '}
          <Link href="/resources/business-cyber-liability-insurance" className="text-blue-700 underline hover:text-blue-900">
            Cyber coverage
          </Link>{' '}
          for data breaches, including breach notification costs, credit monitoring, regulatory
          defense, and cyber business interruption (income lost due to a cyber event taking
          your website offline).
        </li>
        <li>
          <strong>Inland marine / transit coverage:</strong> Covers goods in transit from your
          warehouse to the customer. Essential for high-value or high-volume shippers.
        </li>
        <li>
          <strong>Product liability:</strong> Included in CGL but verify it is not excluded or
          sublimited. If you sell products sourced from overseas, consider higher limits.
        </li>
        <li>
          <strong>Electronic data coverage:</strong> Increase the electronic data sublimit to
          reflect the actual cost of recreating your digital assets &mdash; product listings,
          photography, databases, and website code.
        </li>
        <li>
          <strong>Workers&rsquo; compensation:</strong> Required in California if you have
          any employees. No exceptions.
        </li>
        <li>
          <strong>Umbrella / excess liability:</strong> Provides additional limits above the
          CGL, auto, and employer&rsquo;s liability. Consider for any business with more than
          $100,000 in annual revenue.
        </li>
      </ol>

      <CalloutBox variant="tip" title="Review Your Coverage Annually">
        <p>
          E-commerce businesses grow quickly. The policy you purchased when you were selling
          $5,000 a month may be dangerously inadequate when you are selling $50,000 a month.
          Review your inventory values, revenue, number of employees, and storage locations
          at least annually, and update your coverage to match. A ten-minute call to your
          insurance broker each year can prevent a six-figure coverage gap.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        When to Get Professional Help
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you are an e-commerce business owner dealing with any of the following situations,
        consider consulting a licensed public adjuster or an attorney who handles commercial
        insurance disputes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          A warehouse fire, natural disaster, or other loss has destroyed inventory stored at
          a third-party location and the insurer is disputing coverage.
        </li>
        <li>
          Your business income claim was denied because the insurer says a server outage or
          cyber event is not &ldquo;direct physical loss.&rdquo;
        </li>
        <li>
          Your homeowner&rsquo;s insurer denied a claim for business property stored at
          your home, citing the business property exclusion.
        </li>
        <li>
          You are facing a product liability claim and your insurer is disputing whether your
          policy covers the product or the type of injury alleged.
        </li>
        <li>
          A data breach has exposed customer information and you are unsure whether your
          existing coverage responds.
        </li>
        <li>
          Your claim involves{' '}
          <Link href="/resources/contents-claims" className="text-blue-700 underline hover:text-blue-900">
            contents
          </Link>{' '}
          that are difficult to value &mdash; unique products, custom photography,
          intellectual property, or digital assets with no clear replacement cost.
        </li>
      </ul>

      <div className="bg-[#EFF4FB] border border-[#C5D9F0] rounded-xl p-6 text-center mt-8">
        <h3 className="text-lg font-bold text-[#1F3964] mb-2">E-Commerce Insurance Claim?</h3>
        <p className="text-gray-600 text-sm mb-4">
          E-commerce claims involve coverage questions that most adjusters rarely encounter &mdash;
          off-premises inventory, electronic data limitations, contingent business interruption,
          and the intersection of cyber and property coverage. We can review your policy, identify
          the coverage that applies, and help you maximize your recovery.
        </p>
        <Link href="/contact" className="inline-block bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
          Request a Free Claim Review &rarr;
        </Link>
      </div>

      <CalloutBox variant="legal" title="Important Notice">
        <p>
          This article is provided for general educational purposes only and does not constitute
          legal advice. Insurance policies, regulations, and case law can vary significantly based
          on individual circumstances. Consult a licensed attorney for advice about your specific
          situation.
        </p>
      </CalloutBox>
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
