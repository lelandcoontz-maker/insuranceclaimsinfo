import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'How to Document a Contents Inventory After a Total Loss',
  description:
    'A step-by-step guide for policyholders who have lost everything in a fire or disaster. How to build a room-by-room personal property inventory, establish replacement values, and maximize your contents claim under California law.',
  summary:
    'After losing everything, rebuild your contents claim room by room, listing each item with its replacement value and using photos, receipts, and memory aids. A complete inventory is what gets a total-loss contents claim paid fully under California law.',
}

export default function Content() {
  return (
    <>
      <CalloutBox variant="legal" title="This Article Is Not Legal Advice">
        <p>
          This article is educational in nature and reflects the author&rsquo;s experience as a
          California Licensed Public Adjuster. It is not legal advice. Every claim involves unique
          facts, policy language, and circumstances. If you have questions about your specific
          contents claim, consult with a licensed Public Adjuster or a California attorney who
          specializes in insurance coverage disputes.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        Everything is gone. Every piece of furniture, every shirt in the closet, every fork in
        the drawer, every family photo on the wall. If you are reading this, you are probably
        facing the most overwhelming task in the entire insurance claims process: documenting
        everything you owned. Not just the big things &mdash; the couch, the TV, the bed &mdash;
        but everything. The spice rack. The shower curtain. The extension cords. The flashlight
        in the junk drawer. All of it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is painful work. It forces you to mentally walk through a home that no longer exists
        and account for a lifetime of accumulated belongings. There is no shortcut. But there is
        a method, and there are tools and protections &mdash; especially under California law &mdash;
        that can make the process manageable and ensure you recover what you are owed.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Before You Start: California&rsquo;s 60% Advance Rule (SB 495)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your total loss occurred in a state-declared state of emergency, California Insurance
        Code <strong>&sect; 10103.7</strong> (as amended by SB 495, effective January 2026)
        requires your insurer to advance <strong>60% of your personal property coverage
        limit</strong> &mdash; up to $350,000 &mdash; without requiring you to submit a detailed
        inventory. You have at least <strong>100 days</strong> before the insurer can require a
        complete itemized list. This money is yours to use immediately for clothing, essentials,
        and furnishing temporary housing. Do not let anyone tell you that you must produce an
        inventory before receiving this advance.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a detailed breakdown of how this law works, see our{' '}
        <Link href="/resources/sb495-contents-rule" className="text-blue-700 underline hover:text-blue-900">
          SB 495 Contents Payment Rule
        </Link>{' '}
        article.
      </p>

      <CalloutBox variant="important" title="Do Not Wait 100 Days to Start">
        <p>
          The 100-day window is a protection, not a deadline strategy. Start your inventory as
          soon as you are emotionally able. Memories fade. The sooner you begin, the more items
          you will remember. The 60% advance exists so you can focus on immediate needs while
          building your inventory at a sustainable pace.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        The Room-by-Room Method
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The single most effective way to build a contents inventory is to mentally walk through
        your home, one room at a time. Close your eyes. Stand at the door of each room in your
        mind. Look left. Look right. Look up. Look down. Open every drawer. Open every closet.
        Look under the bed. Look on top of the refrigerator. Think about what was on every shelf,
        in every cabinet, hanging on every wall.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not try to do the entire house in one sitting. Pick one room per session. Take breaks.
        Come back to rooms you have already done &mdash; you will remember things you missed. Many
        policyholders find that items come back to them over days and weeks, triggered by everyday
        activities: you reach for a spatula and remember the entire contents of your utensil drawer.
      </p>

      <h3 className="text-xl font-bold text-[#1F3964] mb-3">
        Start With These Rooms and Areas
      </h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Kitchen:</strong> Appliances (large and small), cookware, bakeware, utensils,
          dishes, glassware, silverware, food storage containers, spices, pantry items, cleaning
          supplies under the sink, dish towels, pot holders, cutting boards, knife sets
        </li>
        <li>
          <strong>Living room / family room:</strong> Furniture, electronics (TV, sound system,
          gaming consoles), lamps, rugs, curtains, throw pillows, blankets, books, DVDs, artwork,
          decorative items, remote controls, surge protectors
        </li>
        <li>
          <strong>Bedrooms:</strong> Bed frame, mattress, box spring, pillows, sheets, comforter,
          dressers, nightstands, lamps, alarm clocks, clothing (every category: casual, work,
          formal, seasonal, outerwear, shoes, belts, hats, accessories), jewelry, personal items
        </li>
        <li>
          <strong>Bathrooms:</strong> Towels, bath mats, shower curtain and rings, toiletries,
          medications, first aid supplies, hair dryer, electric razor, scale, hamper, cleaning supplies
        </li>
        <li>
          <strong>Home office:</strong> Computer, monitor, keyboard, mouse, printer, desk, chair,
          filing cabinet, office supplies, paper, books, software
        </li>
        <li>
          <strong>Garage / workshop:</strong> Tools (hand tools and power tools), lawn equipment,
          garden hoses, ladders, workbench, hardware (screws, nails, brackets), automotive supplies,
          bicycles, sports equipment, seasonal decorations, paint and supplies
        </li>
        <li>
          <strong>Laundry room:</strong> Washer, dryer, iron, ironing board, detergent, hangers,
          drying rack, laundry baskets
        </li>
        <li>
          <strong>Outdoor / patio:</strong> Patio furniture, grill, gardening tools, planters,
          outdoor lighting, umbrellas, pool supplies, outdoor toys
        </li>
        <li>
          <strong>Closets and storage:</strong> Seasonal clothing, luggage, holiday decorations,
          board games, photo albums, memorabilia, extra linens, vacuum cleaner, brooms and mops
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What to Document for Each Item
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For every item on your inventory, record as much of the following as you can:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Description:</strong> What it was (brand, model, size, color, material). The more
          specific, the better. &ldquo;Couch&rdquo; is not enough. &ldquo;Ashley Furniture Darcy
          sofa, full size, cobblestone gray fabric&rdquo; is what you need.
        </li>
        <li>
          <strong>Room or location:</strong> Where it was in the home.
        </li>
        <li>
          <strong>Quantity:</strong> How many. You probably owned more than one bath towel.
        </li>
        <li>
          <strong>Age or purchase date:</strong> When you bought it, or your best estimate.
        </li>
        <li>
          <strong>Original purchase price:</strong> If you remember or can document it.
        </li>
        <li>
          <strong>Replacement cost:</strong> What it would cost today to buy a comparable item of
          like kind and quality. This is the number that matters most on a replacement cost policy.
        </li>
        <li>
          <strong>Condition before the loss:</strong> Was it new, gently used, well-worn?
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How to Establish Replacement Values
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You do not need the original receipt for every item. The standard is{' '}
        <strong>like kind and quality</strong> &mdash; what it would cost to replace the item
        today with a comparable item of similar quality, features, and utility. Here is how to
        find that number:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Online retailers:</strong> Search Amazon, Walmart, Target, Home Depot, Wayfair,
          or the manufacturer&rsquo;s website for the same or comparable item. Screenshot the
          listing with the price. If the exact model is discontinued, find the current equivalent.
        </li>
        <li>
          <strong>Purchase history:</strong> Check your Amazon order history, email receipts, credit
          card and bank statements, and online accounts (Best Buy, Costco, etc.). Many retailers
          store your complete purchase history online going back years.
        </li>
        <li>
          <strong>Social media and cloud photos:</strong> Search your Google Photos, iCloud, Facebook,
          and Instagram for photos taken inside your home. Birthday parties, holiday photos, video
          calls &mdash; these often capture furniture, electronics, artwork, and other items in the
          background. These photos also help establish that you owned the item.
        </li>
        <li>
          <strong>Prior insurance inventories:</strong> If you ever did a home inventory for
          insurance purposes, or if you filed a prior claim that included a contents list, those
          records are valuable evidence.
        </li>
        <li>
          <strong>Registrations and warranties:</strong> Product registration cards, extended
          warranty purchases, and recall notices all document ownership and model information.
        </li>
      </ul>

      <CalloutBox variant="tip" title="The &ldquo;Like Kind and Quality&rdquo; Standard">
        <p>
          You are not required to replace your items at the cheapest possible price. If you owned
          a solid wood dining table, the replacement cost is a comparable solid wood dining table
          &mdash; not a particleboard table from a discount store. &ldquo;Like kind and quality&rdquo;
          means comparable quality, not the cheapest available option. If your insurer substitutes
          inferior items in their valuation, push back. For more on how insurers calculate values,
          see our{' '}
          <Link href="/resources/acv-rcv" className="text-blue-700 underline hover:text-blue-900">
            ACV vs. RCV
          </Link>{' '}
          guide.
        </p>
      </CalloutBox>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Know Your Sub-Limits Before You Start
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before spending hours documenting every piece of jewelry, every collectible coin, or every
        firearm, check your policy&rsquo;s{' '}
        <Link href="/resources/special-limits-of-liability" className="text-blue-700 underline hover:text-blue-900">
          Special Limits of Liability
        </Link>. These are built-in caps on specific categories of personal property &mdash;
        typically $1,500 for jewelry, $2,500 for firearms, $200 for coins, and similar low figures
        for silverware, furs, and business property. If you did not have a scheduled personal
        property endorsement (a &ldquo;rider&rdquo; or &ldquo;floater&rdquo;) that specifically
        listed high-value items, your recovery for those categories is capped at the sub-limit
        regardless of how many items you document.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This does not mean you should skip those items entirely. Document them &mdash; but know
        that your recovery may be limited. And for future reference, once you rebuild and
        repurchase, schedule your high-value items on your new policy.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Clothing: The Category Everyone Underestimates
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Clothing is almost always the most tedious and most undervalued category on a contents
        inventory. Most people dramatically undercount their clothing because they do not think
        systematically. Use categories to trigger your memory:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>T-shirts, casual shirts, dress shirts, blouses</li>
        <li>Jeans, casual pants, dress pants, shorts, skirts</li>
        <li>Suits, sport coats, blazers, dresses</li>
        <li>Sweaters, hoodies, sweatshirts, fleeces</li>
        <li>Jackets, coats, raincoats, vests</li>
        <li>Underwear, socks, bras, undershirts</li>
        <li>Pajamas, robes, slippers</li>
        <li>Athletic wear, workout clothes, swimsuits</li>
        <li>Shoes: casual, dress, athletic, boots, sandals, slippers</li>
        <li>Belts, ties, scarves, hats, gloves</li>
        <li>Handbags, wallets, backpacks, briefcases</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do this for every member of the household. Children&rsquo;s clothing counts. Every item
        counts. A household of four can easily have 500 to 1,000 individual clothing items. At
        an average replacement cost of $20 to $50 per item, clothing alone can represent $10,000
        to $50,000 in replacement value.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Electronics and Technology
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Modern households are full of electronics that add up quickly. Beyond the obvious (TVs,
        computers, tablets, phones), do not forget:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Smart home devices (speakers, thermostats, cameras, doorbells)</li>
        <li>Gaming consoles and accessories (controllers, headsets, games)</li>
        <li>Chargers, cables, adapters, power strips, surge protectors</li>
        <li>External hard drives, USB drives, memory cards</li>
        <li>Printers, scanners, monitors, keyboards, mice</li>
        <li>Headphones, earbuds, Bluetooth speakers</li>
        <li>Routers, modems, mesh Wi-Fi systems</li>
        <li>E-readers, digital photo frames</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Documents and Irreplaceable Items
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some items cannot be replaced at any price &mdash; family photos, heirlooms, children&rsquo;s
        artwork, handwritten letters. While you cannot recover their sentimental value, you can
        and should include them on your inventory at their replacement cost (for physical items
        like frames, albums, and storage boxes) and note their nature. Additionally, document the
        cost of replacing important papers:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Passports, birth certificates, marriage certificates (replacement fees)</li>
        <li>Diplomas and professional certificates (replacement fees from institutions)</li>
        <li>Vehicle titles, property deeds (replacement fees from DMV and county recorder)</li>
        <li>Tax records, financial documents (accountant fees to reconstruct)</li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Photo and Video Documentation
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you took a home inventory video or photos before the loss, those are invaluable now.
        If you did not, you can still build visual evidence:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Search every cloud photo service you use (Google Photos, iCloud, Amazon Photos) for
          photos taken at your home address or geotagged to your location
        </li>
        <li>
          Search social media posts, including posts by family members and friends who visited
          your home &mdash; holiday gatherings, birthdays, and dinner parties often show your
          furnishings and belongings in the background
        </li>
        <li>
          Check real estate listing photos if you purchased the home in recent years &mdash; they
          may show built-in features, fixtures, and sometimes furnishings
        </li>
        <li>
          Ask family members and friends if they have photos or videos taken inside your home
        </li>
        <li>
          Check video call history &mdash; Zoom, FaceTime, and similar apps may have recordings
          or screenshots that show rooms in your home
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Working With a Public Adjuster on Contents Claims
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Contents claims on a total loss are enormous undertakings. A typical household inventory
        can run 500 to 2,000 line items. Each item must be described, valued, and supported.
        The insurer will scrutinize the list, challenge values, and apply depreciation. A{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          licensed Public Adjuster
        </Link>{' '}
        can help by:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          Guiding you through the inventory process systematically so you do not miss categories
        </li>
        <li>
          Pricing items at proper like-kind-and-quality replacement cost, not the cheapest
          available substitute
        </li>
        <li>
          Challenging the insurer&rsquo;s depreciation calculations, which are often excessive
          (see our article on{' '}
          <Link href="/resources/excessive-depreciation" className="text-blue-700 underline hover:text-blue-900">
            excessive depreciation
          </Link>)
        </li>
        <li>
          Ensuring the insurer pays the full replacement cost, not just the initial actual cash
          value payment
        </li>
        <li>
          Handling disputes over individual item valuations so you do not have to argue over every
          line item yourself
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more on the contents claims process generally, including cleaning vs. total loss
        determinations and pack-out procedures, see our{' '}
        <Link href="/resources/contents-claims" className="text-blue-700 underline hover:text-blue-900">
          Personal Property and Contents Claims
        </Link>{' '}
        guide. And for a comprehensive overview of every coverage that activates after a total
        loss, see our{' '}
        <Link href="/resources/total-loss" className="text-blue-700 underline hover:text-blue-900">
          Total Loss Insurance Claims
        </Link>{' '}
        article.
      </p>

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Common Mistakes to Avoid
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <strong>Submitting an incomplete inventory because you are exhausted.</strong> Take your
          time. The 100-day window under SB 495 exists for a reason. Items you forget to list are
          items you do not get paid for.
        </li>
        <li>
          <strong>Undervaluing items to seem &ldquo;reasonable.&rdquo;</strong> Your job is to
          document the actual replacement cost of comparable items, not to discount your own claim.
          If a comparable replacement costs $200, write $200.
        </li>
        <li>
          <strong>Using the insurer&rsquo;s software exclusively.</strong> Some insurers provide
          contents inventory software that steers you toward lower-cost replacements. You are not
          required to use their tool. A spreadsheet works fine.
        </li>
        <li>
          <strong>Forgetting consumables and disposables.</strong> Food in the pantry, cleaning
          supplies, toiletries, medications, batteries, light bulbs, printer ink &mdash; these are
          all personal property with replacement value.
        </li>
        <li>
          <strong>Assuming the insurer will fill in what you missed.</strong> They will not. The
          insurer pays based on what you submit. If it is not on the list, it does not exist as
          far as the claim is concerned.
        </li>
      </ol>

      <CalloutBox variant="tip" title="One Room at a Time, One Day at a Time">
        <p>
          This process is a marathon, not a sprint. Set a goal of one room per sitting. Keep a
          running list on your phone so you can add items as they come to mind throughout the day.
          Enlist family members &mdash; they will remember things you will not. And give yourself
          grace. This is hard. But every item you document is money recovered.
        </p>
      </CalloutBox>

      <hr className="my-8 border-gray-300" />
      <p className="text-sm text-gray-500 italic">
        Written by Leland Coontz III, Licensed Public Adjuster, CA License #2B53445.
      </p>
    </>
  )
}
