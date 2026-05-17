import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'How to Make a Personal Property (Contents) List After a Loss',
  description:
    'Practical techniques for remembering and documenting every item in your home for your insurance contents claim, including the room-by-room method, day-in-the-life approach, and using digital records.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a major loss, your insurance company will ask you to list every personal item that
        was damaged or destroyed. Everything. The contents of every room, every drawer, every
        closet. This task is overwhelming. Most people cannot remember what was in their junk
        drawer, let alone their entire home.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This guide gives you proven techniques for building a thorough inventory. The more complete
        your list, the more you get paid. Items you forget to list are items you never recover
        money for. Take your time. Work in sessions. Use every resource available.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Understanding What You Are Building
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your personal property inventory (sometimes called a &ldquo;contents list&rdquo; or
        &ldquo;Schedule of Loss&rdquo;) needs these elements for each item:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Description (brand, model, color, size)</li>
        <li>Room or location where it was kept</li>
        <li>Approximate age or purchase date</li>
        <li>Original purchase price (if known)</li>
        <li>Replacement cost (what it costs to buy the same or comparable item today)</li>
        <li>Condition before the loss</li>
        <li>Quantity</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        You do not need receipts for every item. The insurer may ask for proof of ownership on
        high-value items, but for most household goods, your sworn statement is sufficient. For a
        detailed explanation of how contents claims work, see our{' '}
        <Link href="/resources/contents-claims" className="text-blue-700 underline hover:text-blue-900">
          contents claims guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Method 1: The Room-by-Room Walkthrough
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the foundation technique. Close your eyes and mentally walk through each room of
        your home. Start at the front door and move through every space.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For each room, mentally stand in the doorway and scan:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Floor to ceiling on the left wall</li>
        <li>Floor to ceiling on the far wall</li>
        <li>Floor to ceiling on the right wall</li>
        <li>The center of the room (furniture, rugs, lighting)</li>
        <li>The ceiling (fans, light fixtures)</li>
        <li>The floor (rugs, floor coverings)</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Then open every storage space mentally:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Each closet, shelf by shelf</li>
        <li>Each dresser drawer, top to bottom</li>
        <li>Each cabinet</li>
        <li>Under the bed</li>
        <li>Behind furniture</li>
        <li>On top of shelves and cabinets</li>
      </ul>

      <CalloutBox variant="tip" title="Work in Short Sessions">
        <p>
          Do not try to complete your inventory in one sitting. Memory works better in short bursts.
          Work for 30 to 45 minutes, then take a break. Items you forgot will come to you later,
          often at unexpected moments. Keep a notepad or phone handy at all times to capture these
          memories.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Method 2: The &ldquo;Day in the Life&rdquo; Approach
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Walk through a typical day and list every item you touch or use:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Morning:</strong> Alarm clock, phone charger, bedside lamp, slippers, robe,
          toothbrush, toothpaste, soap, shampoo, conditioner, razor, towels, bath mat, hair dryer,
          makeup, mirror, clothing from your closet and drawers...
        </li>
        <li>
          <strong>Breakfast:</strong> Coffee maker, mugs, plates, silverware, toaster, cereal bowls,
          food in the pantry, spices, cooking utensils, pots and pans...
        </li>
        <li>
          <strong>Work from home:</strong> Computer, monitor, desk, chair, printer, office supplies,
          reference books, file cabinet contents...
        </li>
        <li>
          <strong>Evening:</strong> TV, remote, streaming device, couch pillows, blankets, books,
          games, hobby supplies...
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Then walk through less frequent activities: holidays (decorations, serving platters, guest
        bedding), home maintenance (tools, supplies), hobbies (sports equipment, art supplies,
        musical instruments), and seasonal changes (winter coats, summer gear).
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Method 3: The Drawer-by-Drawer Method
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        People forget what is inside closed storage. This method forces you to mentally open every
        drawer, cabinet, and container in each room:
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Kitchen example:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Junk drawer: scissors, tape, batteries, flashlight, pens, notepads, coupons, keys</li>
        <li>Silverware drawer: full set of flatware, serving spoons, specialty utensils</li>
        <li>Upper cabinets: plates, bowls, glasses, mugs, food storage containers, spices</li>
        <li>Lower cabinets: pots, pans, baking sheets, mixing bowls, small appliances</li>
        <li>Under the sink: cleaning supplies, trash bags, dish soap, sponges</li>
        <li>Pantry: every food item, storage containers, paper goods</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Apply this to every room. The bathroom medicine cabinet. The bedroom nightstand. The hall
        closet. The garage shelving. People consistently undercount by 40 to 60 percent when they
        skip storage spaces.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Method 4: Digital Records Mining
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your purchase history is documented in places you might not think of:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Amazon order history:</strong> Go to Your Orders and scroll back years. Every item
          you purchased that was in your home belongs on the list.
        </li>
        <li>
          <strong>Credit card and bank statements:</strong> Request 3 to 5 years of statements. Each
          purchase at a furniture store, electronics store, clothing store, or home improvement store
          represents items in your home.
        </li>
        <li>
          <strong>Email receipts:</strong> Search your email for &ldquo;receipt,&rdquo;
          &ldquo;order confirmation,&rdquo; &ldquo;shipping confirmation.&rdquo;
        </li>
        <li>
          <strong>Store loyalty programs:</strong> Target Circle, Costco, Best Buy, Home Depot, and
          similar programs track your purchases.
        </li>
        <li>
          <strong>PayPal, Venmo, Apple Pay:</strong> Check transaction histories for purchases.
        </li>
        <li>
          <strong>Wedding or gift registries:</strong> If you registered for gifts, that list
          represents items in your home.
        </li>
      </ul>

      <CalloutBox variant="tip" title="Photos Are Your Best Friend">
        <p>
          Search your phone photo library, cloud backups, and social media for any photos taken
          inside your home. Birthday party photos show the living room. Kitchen photos show
          appliances. Holiday photos show decorations and furniture. Video calls show backgrounds.
          Even a partial glimpse of a bookshelf lets you reconstruct its contents.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Commonly Forgotten Categories
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        These categories are missed on nearly every contents claim:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Cleaning supplies under every sink</li>
        <li>Light bulbs, batteries, and hardware supplies</li>
        <li>Food in the refrigerator, freezer, and pantry (perishables count)</li>
        <li>Medicine cabinet contents and first aid supplies</li>
        <li>Seasonal decorations (holiday, Halloween, birthday supplies)</li>
        <li>Garage and shed contents (tools, garden supplies, sports equipment)</li>
        <li>Attic and crawl space storage (holiday items, keepsakes, archived files)</li>
        <li>Wall hangings, artwork, mirrors, and window treatments (curtains, blinds)</li>
        <li>Plants (indoor and potted outdoor plants have value)</li>
        <li>Children&rsquo;s items (toys accumulate faster than parents realize)</li>
        <li>Pet supplies (beds, crates, food, toys, grooming tools)</li>
        <li>Craft and hobby supplies</li>
        <li>Books, magazines, and media collections</li>
        <li>Linens: sheets, towels, blankets, tablecloths, napkins</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Finding Replacement Costs
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For each item, you need the current replacement cost: what it would cost to buy the same
        or comparable item new today. Tips for finding prices:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Search the item on the retailer where you would buy it today</li>
        <li>If the exact item is discontinued, find the current equivalent model</li>
        <li>Use the mid-range price, not the cheapest available option</li>
        <li>Include tax in your replacement cost (you will pay tax when you replace it)</li>
        <li>For clothing, price at the store where you actually shop, not Walmart</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy entitles you to replace items of &ldquo;like kind and quality.&rdquo; That
        means if you owned a $1,200 sofa, the replacement is a comparable $1,200 sofa at
        today&rsquo;s prices, not a $400 budget model. For more on how valuation works, see our{' '}
        <Link href="/resources/acv-rcv" className="text-blue-700 underline hover:text-blue-900">
          ACV vs. RCV guide
        </Link>.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        High-Value and Specialty Items
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Certain items require special attention:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Jewelry and watches:</strong> May be subject to special limits (often $1,500 to
          $2,500 per item) unless separately scheduled on your policy.
        </li>
        <li>
          <strong>Electronics:</strong> Document brand, model number, screen size, storage capacity.
          Replacement cost is the current equivalent, not what you paid years ago.
        </li>
        <li>
          <strong>Collections:</strong> Coins, stamps, wine, art, and similar collections often have
          sub-limits. Document each piece individually.
        </li>
        <li>
          <strong>Antiques and irreplaceable items:</strong> These may be valued at actual cash value
          even on a replacement cost policy because an exact replacement does not exist.
        </li>
      </ul>

      <CalloutBox variant="warning" title="Do Not Inflate or Fabricate">
        <p>
          List every legitimate item, but never add items you did not own or inflate values beyond
          actual replacement cost. Insurance fraud is a felony. More practically, if the insurer
          catches one inflated item, they will scrutinize your entire list and may use it to delay
          or deny the claim. Be thorough and honest. A complete, accurate list will recover far more
          than a short, padded one.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Organizing Your Inventory
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Use a spreadsheet with these columns:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>Room/Location</li>
        <li>Item Description</li>
        <li>Brand/Model (if applicable)</li>
        <li>Quantity</li>
        <li>Age (years)</li>
        <li>Original Cost</li>
        <li>Replacement Cost</li>
        <li>Condition (excellent, good, fair)</li>
        <li>Notes (receipts available, photos, etc.)</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your insurer may provide their own form. You can use their form, but keep your own
        spreadsheet as backup. Their form may limit the detail you can include.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        After You Submit: What Happens Next
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once you submit your inventory, the insurer will review it and may:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Accept some items and dispute others</li>
        <li>Ask for proof of ownership on specific items (this is where photos and receipts help)</li>
        <li>Apply depreciation to calculate ACV payments</li>
        <li>Issue a partial payment while reviewing the full list</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        You can supplement your inventory later if you remember additional items. Most insurers
        allow supplements for a reasonable period after the initial submission. Do not rush to
        submit an incomplete list. Take the time to be thorough.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For guidance on what to do immediately after a loss, including protecting your belongings,
        see our{' '}
        <Link href="/resources/first-72-hours-after-loss" className="text-blue-700 underline hover:text-blue-900">
          first 72 hours guide
        </Link>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        Your contents claim may be the largest check you ever receive. The difference between a
        thorough inventory and a rushed one can be tens of thousands of dollars. Use every
        technique in this guide. Work in sessions. Mine your digital records. Open every mental
        drawer. The time you invest here pays dollar-for-dollar in your settlement.
      </p>
    </>
  )
}
