import json, sys, os
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

with open('C:/Users/lelan/Desktop/Claude Projects/insuranceclaimsinfo/fb_videos_raw.json', 'r', encoding='utf-8') as f:
    videos = json.load(f)

# Manual curation - index -> (category, override_description or None)
# Categories:
# 1 = Xactimate & Estimating
# 2 = Fire & Smoke Damage
# 3 = Water Damage
# 4 = Claims Strategy & Insurance Law
# 5 = Contractors & Bad Faith
# 6 = The Public Adjuster Profession
# 7 = Construction Details for Claims
# 8 = AI & Technology in Claims
# 9 = Conference & Presentations

categorized = {
    6: (2, "Burn & Learn fire cause and origin training"),
    7: (7, "Inspecting a roof in Cabo - roof needs to be removed and replaced"),
    9: (7, "Mom helping with roof tear off"),
    13: (7, "Porcelain tile and how to document it with a video for claims"),
    17: (7, "Paint does not restore previously unpainted stucco to pre-loss condition"),
    18: (7, "Painting repaired stucco is not restoring color coat stucco to pre-loss condition"),
    20: (7, "Details on damaged old Craftsman style home - over 200k restoration after vehicle impact"),
    21: (1, "Xactimate breakout session - practical interior estimating/strategy class"),
    22: (1, "Rooforders.com roof measuring service with Xactimate ESX integration - only $25"),
    23: (9, "Need an Experienced Umpire for a Stolen Monkey Claim? Experts at WTS conference"),
    24: (1, "Who is leaving tens of thousands of dollars of electrical damage on the table?"),
    26: (7, "Why is the drywall sandwiched like this? Construction anomaly investigation"),
    27: (4, "When and how can covered personal property become land that is not covered?"),
    28: (1, "How to save or print beautiful reports explaining each Xactimate line item"),
    29: (4, "Waiting for the insurance company to send the improper denial letter to turn file over to attorney"),
    30: (7, "Tile geek comes out! Tile identification"),
    31: (7, "Basic porcelain tile vs ceramic identification - rectified tile and lippage explained"),
    32: (3, "Interior water damage scoping"),
    33: (1, "Ordinary kitchen and bath counter tile items - only half of which are in Xactimate"),
    34: (4, "How to tell if the carrier will replace the carpet"),
    36: (1, "Plaster wall height at 8 foot 3 inches - extra 3 inches means more money on the estimate"),
    37: (3, "Insurance company engineer using a golf ball to check engineered floor for water damage"),
    38: (7, "Basic electrical concepts: 3 way switch"),
    39: (1, "The truth is out there - put the supply lines in your Xactimate estimates"),
    40: (1, "Moldings - fingerjoint vs non-fingerjoint pricing, brickmold for stucco, streamline"),
    41: (6, "Public Adjusting is more than just wind damage to asphalt composition residential roofs"),
    42: (7, "Vehicle vs building - code upgrades could be more money than the basic repairs"),
    43: (2, "Chandelier taken outside after a fire loss - needs to be taken apart, cleaned, and rewired"),
    45: (2, "Fire losses are the best"),
    46: (4, "Is FIRE the efficient proximate cause of loss for damage done by meth addicts a week after the fire?"),
    47: (5, "Sales and marketing thoughts for contractors - before and after photos and testimonials"),
    49: (7, "You can learn a lot about restoration and finish hardware at stores like Restoration Hardware"),
    50: (5, "Make your customer sign a disclaimer - natural products have flaws, loop carpet has visible seams"),
    51: (7, "Grass cloth wallpaper - hard to find installers, bid item not in Xactimate"),
    52: (4, "You have to get down and touch stuff - insurance companies should send adjusters to the loss, not Zoom"),
    53: (4, "Explain more than one way this home could be insured for this loss"),
    54: (7, "Santa Barbara smooth troweled stucco finish - applied with a pool trowel"),
    55: (1, "When you are at a property what do you really see? Missing FPS category Xactimate line items"),
    56: (4, "Is illegal dumping a covered loss? What if carrier says no direct physical damage to asphalt?"),
    57: (5, "One of the biggest challenges to selling roofs - customers don't see or care about their roofs"),
    58: (2, "Always look for damage from firefighters"),
    59: (1, "Visiting the paint store - lots of paint is more expensive than regular Xactimate line items"),
    60: (4, "Inspection of property where lady was killed by SUV entering building at 80 mph"),
    61: (7, "A company that specializes in restoring fire and water damaged personal property"),
    62: (1, "What is bentonite for? Water mitigation contractors and whether it is in Xactimate"),
    63: (7, "Tilt wall construction, saw cutting vs jackhammering, concrete bonding primer, OSHA silica dust rules"),
    64: (1, "New construction vs old construction pricing - Xactimate might be set at new construction pricing"),
    65: (7, "Types of drywall mud and VCT tile installation"),
    66: (7, "Top plate butt joints go over studs - building inspector will not pass framing if done wrong"),
    67: (3, "Some suggestions for scoping a water loss"),
    68: (2, "Concrete roof tile color matching - dark chocolate brown is not light gray"),
    69: (1, "Fire repair estimate - does it include drip pan for AC unit and copper/PVC condensation line?"),
    70: (1, "Using fire escape drawings as underlay in Xactimate - plinth blocks, chair rail, moldings"),
    71: (2, "Fire loss related to attempted theft of copper plumbing - homeless breaking into commercial properties"),
    72: (2, "Why smoke and asbestos damage results in total loss appliances"),
    73: (7, "Asbestos testing - roofing mastic, VCT, floor tile, joint compound, drywall, popcorn ceiling"),
    74: (7, "Sanitary cove base tile, lippage, why inside tile walls should be caulked not grouted"),
    75: (1, "Silicosis from cutting manufactured stone countertops - silica dust control protocol in Xactimate"),
    76: (8, "USING ARTIFICIAL INTELLIGENCE TO WRITE LETTERS TO INSURANCE COMPANIES"),
    77: (8, "Using free artificial intelligence app to write a letter to an insurance company"),
    78: (1, "Closing the door when measuring a room - how homeowners react"),
    79: (2, "Discharging the fire sprinkler system - needs to be done every 5 years"),
    80: (5, "Restoration contractor can sue insurance company for bad faith and get overhead and profit on mitigation"),
    81: (5, "Contractor can sue insurance company for bad faith - overhead and profit on mitigation"),
    82: (5, "Edward Cross explaining how restoration contractor can sue insurance company for O&P on mitigation"),
    83: (5, "Insurance restoration contractors may be able to sue an insurance company for bad faith"),
    84: (1, "Seth Harrison explaining how the new Actionable Insights Xactimate profile works"),
    85: (1, "Seth Harrison explaining the Actionable Insights Xactimate profile"),
    86: (6, "The Public Adjuster visits the slab yard"),
    87: (4, "If an insurance adjuster quits, are they exempt from response and payment time requirements?"),
    88: (4, "State Insurance codes generally do not require matching for ACV policies"),
    89: (4, "Narrow streets in Hollywood Hills - California FAIR Plan named peril policies are prevalent"),
    90: (3, "How forensic architects check water intrusion"),
    91: (7, "Hawthorn concrete tile with David Pelaez"),
    92: (7, "Best way to attach sole plate to slab - j-bolt, epoxy bolt, California code requirements"),
    93: (5, "How to tell that a General Contractor has been in business a long time"),
    95: (7, "Crew working after sunset on a historical roof in Orange California - 1920s gas station"),
    96: (1, "In Xactimate do you account for the time to set up jigs?"),
    97: (7, "Shear panel for seismic strength in California - prevents racking in high winds or earthquake"),
    99: (4, "Tile tenting caught on video - covered under most insurance policies, more likely with temperature differences"),
    100: (4, "Can we really trust common sense to determine what evidence means? Green mold and leak age analysis"),
    101: (1, "Using proprioception (your sixth sense) to help sketch properties in Xactimate"),
    102: (6, "This is why Public Adjusters are needed - adjuster estimated standard tile but it was above average"),
    103: (1, "Common Xactimate question - how to add stairs after drawing the room"),
    104: (1, "Looking at construction details - where to add a nailer for drywall - supplement opportunity"),
    105: (1, "What is cutting in? Extra painting time that should be included in the estimate"),
    106: (1, "Why old construction labor is slower and more expensive than new construction labor"),
    107: (7, "Certified arborist doing inspections for attorneys and contractors - ground penetrating radar"),
    108: (4, "When is it reasonable for insurance company to pay for a repair? Contract, statute, case law, and construction standard"),
    109: (4, "Short video on analyzing the details of a policy"),
    110: (8, "Matterport removes furniture from images - draw on picture to show damage to walls and flooring"),
    111: (4, "Lawn sprinklers are other structures on most policies"),
    112: (6, "Public Adjusters favorite music"),
    113: (2, "Commercial smoke damage"),
    114: (4, "Potential cross-contamination on condo and rental policy claims"),
    115: (1, "Buy materials in bulk, read your paperwork, include accessories in your estimate"),
    116: (2, "Concrete and cement materials turn pink from heat damage"),
    118: (2, "Post fire concrete testing"),
    121: (4, "Psychology of claims - unauthorized training video"),
    122: (1, "Xactimate line item for hardwired smoke detectors vs battery operated - code might require hardwired"),
    123: (2, "Heavy smoke going up into attic through outlet - update to previous fire damage photo"),
    124: (4, "Mudslide covered as fire loss - anti-concurrent causation language and efficient proximate cause"),
    125: (4, "Revisiting the scene to examine physical evidence and gather human evidence from neighbors"),
    126: (4, "Newest trend in claims adjusting - carriers taking money back from policyholders"),
    127: (7, "Drilling caissons for new foundation in Pacific Palisades for burned down home"),
    128: (7, "Trade standards and quality construction may be different from minimum building codes"),
    129: (4, "Does your state require insurance company to give insured the name of a contractor for the estimate amount?"),
}

# Build category buckets
categories = {
    1: {"name": "Xactimate & Estimating", "videos": []},
    2: {"name": "Fire & Smoke Damage", "videos": []},
    3: {"name": "Water Damage", "videos": []},
    4: {"name": "Claims Strategy & Insurance Law", "videos": []},
    5: {"name": "Contractors & Bad Faith", "videos": []},
    6: {"name": "The Public Adjuster Profession", "videos": []},
    7: {"name": "Construction Details for Claims", "videos": []},
    8: {"name": "AI & Technology in Claims", "videos": []},
    9: {"name": "Conference & Presentations", "videos": []},
}

for idx, (cat, override_desc) in categorized.items():
    if idx < len(videos):
        v = videos[idx]
        entry = {
            "filename": v["filename"],
            "date": v["date"],
            "size": v["size"],
            "description": override_desc if override_desc else v["description"][:200],
            "original_description": v["description"]
        }
        categories[cat]["videos"].append(entry)

# Remove duplicates (same description, keep first)
for cat_id in categories:
    seen = set()
    deduped = []
    for v in categories[cat_id]["videos"]:
        key = v["description"][:60]
        if key not in seen:
            seen.add(key)
            deduped.append(v)
    categories[cat_id]["videos"] = deduped

print(f"Categorized {len(categorized)} videos total\n")
for cat_id in sorted(categories.keys()):
    cat = categories[cat_id]
    print(f"Category {cat_id}: {cat['name']} - {len(cat['videos'])} videos")

# Now pick TOP 3-5 per category based on description quality and relevance
# Scoring: longer description = more informative, bigger file = longer video = more content
# But mainly manual selection based on description quality

top_picks = {
    1: {  # Xactimate & Estimating - pick top 5
        "name": "Xactimate & Estimating",
        "picks": []
    },
    2: {"name": "Fire & Smoke Damage", "picks": []},
    3: {"name": "Water Damage", "picks": []},
    4: {"name": "Claims Strategy & Insurance Law", "picks": []},
    5: {"name": "Contractors & Bad Faith", "picks": []},
    6: {"name": "The Public Adjuster Profession", "picks": []},
    7: {"name": "Construction Details for Claims", "picks": []},
    8: {"name": "AI & Technology in Claims", "picks": []},
    9: {"name": "Conference & Presentations", "picks": []},
}

# Manual top picks by index in the categorized videos list
# For Category 1: Xactimate & Estimating
cat1_picks = [
    # Best Xactimate videos by educational value
    "How to save or print beautiful reports explaining each Xactimate line item",
    "New construction vs old construction pricing - Xactimate might be set at new construction pricing",
    "Using fire escape drawings as underlay in Xactimate - plinth blocks, chair rail, moldings",
    "Who is leaving tens of thousands of dollars of electrical damage on the table?",
    "Plaster wall height at 8 foot 3 inches - extra 3 inches means more money on the estimate",
    "Visiting the paint store - lots of paint is more expensive than regular Xactimate line items",
    "Seth Harrison explaining how the new Actionable Insights Xactimate profile works",
    "Common Xactimate question - how to add stairs after drawing the room",
    "Looking at construction details - where to add a nailer for drywall - supplement opportunity",
    "Why old construction labor is slower and more expensive than new construction labor",
]

cat2_picks = [
    "Why smoke and asbestos damage results in total loss appliances",
    "Burn & Learn fire cause and origin training",
    "Always look for damage from firefighters",
    "Post fire concrete testing",
    "Concrete and cement materials turn pink from heat damage",
    "Commercial smoke damage",
    "Is FIRE the efficient proximate cause of loss for damage done by meth addicts a week after the fire?",
]

cat3_picks = [
    "Interior water damage scoping",
    "Some suggestions for scoping a water loss",
    "How forensic architects check water intrusion",
    "Insurance company engineer using a golf ball to check engineered floor for water damage",
]

cat4_picks = [
    "When is it reasonable for insurance company to pay for a repair? Contract, statute, case law, and construction standard",
    "Short video on analyzing the details of a policy",
    "Mudslide covered as fire loss - anti-concurrent causation language and efficient proximate cause",
    "State Insurance codes generally do not require matching for ACV policies",
    "Newest trend in claims adjusting - carriers taking money back from policyholders",
    "Does your state require insurance company to give insured the name of a contractor for the estimate amount?",
    "Psychology of claims - unauthorized training video",
    "When and how can covered personal property become land that is not covered?",
    "Tile tenting caught on video - covered under most insurance policies, more likely with temperature differences",
    "Can we really trust common sense to determine what evidence means? Green mold and leak age analysis",
]

cat5_picks = [
    "Restoration contractor can sue insurance company for bad faith and get overhead and profit on mitigation",
    "Insurance restoration contractors may be able to sue an insurance company for bad faith",
    "Make your customer sign a disclaimer - natural products have flaws, loop carpet has visible seams",
    "Sales and marketing thoughts for contractors - before and after photos and testimonials",
    "How to tell that a General Contractor has been in business a long time",
]

cat6_picks = [
    "This is why Public Adjusters are needed - adjuster estimated standard tile but it was above average",
    "Public Adjusting is more than just wind damage to asphalt composition residential roofs",
    "The Public Adjuster visits the slab yard",
]

cat7_picks = [
    "Basic porcelain tile vs ceramic identification - rectified tile and lippage explained",
    "Tilt wall construction, saw cutting vs jackhammering, concrete bonding primer, OSHA silica dust rules",
    "Asbestos testing - roofing mastic, VCT, floor tile, joint compound, drywall, popcorn ceiling",
    "Vehicle vs building - code upgrades could be more money than the basic repairs",
    "Shear panel for seismic strength in California - prevents racking in high winds or earthquake",
    "Trade standards and quality construction may be different from minimum building codes",
    "Drilling caissons for new foundation in Pacific Palisades for burned down home",
]

cat8_picks = [
    "USING ARTIFICIAL INTELLIGENCE TO WRITE LETTERS TO INSURANCE COMPANIES",
    "Using free artificial intelligence app to write a letter to an insurance company",
    "Matterport removes furniture from images - draw on picture to show damage to walls and flooring",
]

cat9_picks = [
    "Need an Experienced Umpire for a Stolen Monkey Claim? Experts at WTS conference",
]

all_pick_lists = {
    1: cat1_picks, 2: cat2_picks, 3: cat3_picks, 4: cat4_picks,
    5: cat5_picks, 6: cat6_picks, 7: cat7_picks, 8: cat8_picks, 9: cat9_picks
}

# Now match picks to actual video entries
print("\n" + "="*80)
print("TOP PICKS BY CATEGORY")
print("="*80)

final_output = {}

for cat_id in sorted(categories.keys()):
    cat = categories[cat_id]
    pick_descs = all_pick_lists.get(cat_id, [])
    picks = []
    for pd in pick_descs:
        for v in cat["videos"]:
            if v["description"] == pd:
                picks.append(v)
                break

    # Limit to 5 max
    picks = picks[:5]

    final_output[cat["name"]] = picks

    print(f"\n{'='*60}")
    print(f"  {cat_id}. {cat['name']} ({len(picks)} picks)")
    print(f"{'='*60}")
    for i, p in enumerate(picks, 1):
        print(f"\n  [{i}] {p['filename']}")
        print(f"      Date: {p['date']}")
        print(f"      Size: {p['size']}")
        print(f"      {p['description']}")

# Save final picks
with open('C:/Users/lelan/Desktop/Claude Projects/insuranceclaimsinfo/fb_videos_top_picks.json', 'w', encoding='utf-8') as f:
    json.dump(final_output, f, indent=2, ensure_ascii=False)

print(f"\n\nSaved top picks to fb_videos_top_picks.json")

# Also count totals
total = sum(len(v) for v in final_output.values())
print(f"Total top picks: {total}")
