import json, sys, os
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

with open('C:/Users/lelan/Desktop/Facebook Data/your_facebook_activity/posts/your_videos.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

from datetime import datetime

video_dir = 'C:/Users/lelan/Desktop/Facebook Data/your_facebook_activity/posts/media/videos/'

# Build a lookup by filename
all_videos = {}
for v in data['videos_v2']:
    fn = os.path.basename(v['uri'])
    ts = v.get('creation_timestamp', 0)
    date_str = datetime.fromtimestamp(ts).strftime('%Y-%m-%d') if ts else 'Unknown'
    filepath = os.path.join(video_dir, fn)
    if os.path.exists(filepath):
        size_mb = os.path.getsize(filepath) / (1024*1024)
        size_str = f'{size_mb:.1f} MB'
    else:
        size_str = 'FILE NOT FOUND'
    all_videos[fn] = {
        'filename': fn,
        'date': date_str,
        'timestamp': ts,
        'size': size_str,
        'description': v.get('description', '').strip()
    }

# Now define picks by FILENAME -> (category, clean_title)
# I will use the actual filenames from the printed output which I verified
picks = {
    # ============================================================
    # CATEGORY 1: Xactimate & Estimating
    # ============================================================
    '523294372246021.mp4': (1, 'How to Save/Print Xactimate Line Item Reports'),
    '2121612941349598.mp4': (1, 'New vs Old Construction Pricing in Xactimate'),
    '855897155581738.mp4': (1, 'Using Fire Escape Drawings as Xactimate Underlay'),
    '3980190918671035.mp4': (1, 'Tens of Thousands in Electrical Damage Left on the Table'),
    '305867254746516.mp4': (1, 'Plaster Wall Heights: That Extra 3 Inches Means More Money'),
    '1138415256939655.mp4': (1, 'Paint Store Visit: Many Paints Cost More Than Xactimate Line Items'),
    '715482579986048.mp4': (1, 'Actionable Insights Xactimate Profile Explained (Seth Harrison)'),
    '384120117800745.mp4': (1, 'How to Add Stairs in Xactimate After Drawing the Room'),
    '433218462735067.mp4': (1, 'Construction Details: Adding a Nailer for Drywall - Supplement Opportunity'),
    '1213663266678220.mp4': (1, 'Why Old Construction Labor Is More Expensive Than New Construction'),
    '491220475831339.mp4': (1, 'Put the Supply Lines in Your Xactimate Estimates'),
    '483954600035796.mp4': (1, 'Moldings: Fingerjoint vs Non-Fingerjoint, Brickmold, Streamline'),
    '556959269200625.mp4': (1, 'What Do You Really See at a Property? Missing Xactimate FPS Items'),
    '593076328566833.mp4': (1, 'Kitchen & Bath Counter Tile Items: Only Half Are in Xactimate'),
    '4139706742923352.mp4': (1, 'In Xactimate: Account for Time to Set Up Jigs'),
    '858159709486832.mp4': (1, 'What Is Cutting In? Painting Time That Should Be in the Estimate'),
    '511556071679805.mp4': (1, 'Xactimate Line Items: Hardwired vs Battery Smoke Detectors'),
    '912232119759670.mp4': (1, 'Silicosis from Manufactured Stone: Silica Dust Protocol in Xactimate'),
    '1118037459144887.mp4': (1, 'What Is Bentonite? Water Mitigation Product in Xactimate'),
    '1135359290735697.mp4': (1, 'Overlooked: AC Drip Pan and Condensation Line in Fire Estimates'),
    '3941869302503197.mp4': (1, 'Xactimate Breakout Session: Practical Interior Estimating & Strategy'),
    '3953123078044486.mp4': (1, 'Rooforders.com: $25 Roof Measuring with Xactimate ESX'),
    '232908949900643.mp4': (1, 'Using Proprioception to Sketch Properties'),
    '1044386423331562.mp4': (1, 'Can You Trust Common Sense? Mold Age vs Leak Evidence'),

    # ============================================================
    # CATEGORY 2: Fire & Smoke Damage
    # ============================================================
    '979848060067950.mp4': (2, 'Why Smoke and Asbestos Damage Means Total Loss Appliances'),
    '955306964492794.mp4': (2, 'Burn & Learn: Fire Cause and Origin Training'),
    '5469547596411487.mp4': (2, 'Always Look for Damage from Firefighters'),
    '1393794294939084.mp4': (2, 'Post Fire Concrete Testing'),
    '1721179461770488.mp4': (2, 'Concrete/Cement Turns Pink from Heat Damage'),
    '4139706742923352.mp4': (2, 'Commercial Smoke Damage'),  # Will check
    '545192480291265.mp4': (2, 'Efficient Proximate Cause: Meth Addicts After a Fire'),
    '565957421618351.mp4': (2, 'Fire Losses Are the Best'),
    '1014876119145684.mp4': (2, 'Chandelier After Fire: Taken Apart, Cleaned, and Rewired'),
    '538278752113757.mp4': (2, 'Smoke Is Pressurized: How It Travels Through Walls and Attics'),
    '1217584579112471.mp4': (2, 'Fire Loss from Attempted Copper Theft at Commercial Property'),
    '1255835586181859.mp4': (2, 'Mudslide Covered as Fire Loss: Anti-Concurrent Causation'),
    '5553206884700350.mp4': (2, 'Concrete Roof Tile Color Matching Dispute After Fire'),
    '495356366041006.mp4': (2, 'Fire Sprinkler System: Discharge Every 5 Years'),
    '3409457795744353.mp4': (2, 'Neighborhood Fire from Derelicts in the River Bed'),

    # ============================================================
    # CATEGORY 3: Water Damage
    # ============================================================
    '630373271667873.mp4': (3, 'Interior Water Damage Scoping'),
    '727647241786524.mp4': (3, 'Suggestions for Scoping a Water Loss'),
    '3444128715903978.mp4': (3, 'How Forensic Architects Check Water Intrusion'),
    '217141123898667.mp4': (3, 'Insurance Engineer Uses Golf Ball to Check Floor for Water Damage'),
    '606765722101518.mp4': (3, 'Cross-Contamination on Condo and Rental Policy Claims'),

    # ============================================================
    # CATEGORY 4: Claims Strategy & Insurance Law
    # ============================================================
    '888467633172866.mp4': (4, 'When Must an Insurer Pay? Contract, Statute, Case Law, and Trade Standard'),
    '1471650734227629.mp4': (4, 'Analyzing the Details of a Policy'),
    '593935849333377.mp4': (4, 'State Insurance Codes: Matching Not Required for ACV Policies'),
    '731631096029239.mp4': (4, 'Newest Trend: Carriers Taking Money Back from Policyholders'),
    '3758051624490612.mp4': (4, 'Does Your State Require Insurer to Name a Contractor for the Estimate?'),
    '978231510903213.mp4': (4, 'Psychology of Claims: Unauthorized Training Video'),
    '521624392477568.mp4': (4, 'When Does Covered Personal Property Become Uncovered Land?'),
    '760643622599441.mp4': (4, 'Tile Tenting: Covered Under Most Insurance Policies'),
    '542609804717592.mp4': (4, 'Adjuster Quits: Are They Exempt from Response Time Requirements?'),
    '1073855479894392.mp4': (4, 'Is Illegal Dumping a Covered Loss? Direct Physical Damage?'),
    '527311358965260.mp4': (4, 'Multiple Ways a Home Could Be Insured for This Loss'),
    '513783617000587.mp4': (4, 'You Have to Get Down and Touch Stuff: No More Zoom Adjusting'),
    '848485139178842.mp4': (4, 'How to Tell If the Carrier Will Replace the Carpet'),
    '1162665862294686.mp4': (4, 'Engineers Never Ask Witnesses: Physical Evidence vs Human Intelligence'),
    '1010946176411660.mp4': (4, 'Waiting for the Improper Denial Letter to Turn File Over to Attorney'),
    '1557519028189595.mp4': (4, 'Lawn Sprinklers Are Other Structures on Most Policies'),
    '9277246379016171.mp4': (4, 'California FAIR Plan Named Peril Policies in Narrow Hillside Streets'),
    '4699432570280871.mp4': (4, 'Matterport: Remove Furniture to Show Wall/Floor Damage'),
    '790483359025286.mp4': (4, 'Vehicle vs Building Fatality: Commercial Building Inspection'),

    # ============================================================
    # CATEGORY 5: Contractors & Bad Faith
    # ============================================================
    '729582682070992.mp4': (5, 'Contractor Can Sue Insurer for Bad Faith + O&P on Mitigation'),
    '1134051480601625.mp4': (5, 'Insurance Restoration Contractors Can Sue for Bad Faith'),
    '298019149184904.mp4': (5, 'Make Customers Sign Disclaimers: Natural Product Flaws'),
    '509553340911310.mp4': (5, 'Sales & Marketing for Contractors: Before/After Photos'),
    '1029865021391688.mp4': (5, 'How to Tell a GC Has Been in Business a Long Time'),
    '559375792502310.mp4': (5, 'Biggest Challenge Selling Roofs: Customers Dont Care'),
    '1140410783292519.mp4': (5, 'Edward Cross: Contractor Sues Insurance for O&P on Mitigation'),
    '1227139811554020.mp4': (5, 'Edward Cross: How to Sue for O&P on Mitigation Bills'),

    # ============================================================
    # CATEGORY 6: The Public Adjuster Profession
    # ============================================================
    '777714217090303.mp4': (6, 'Why Public Adjusters Are Needed: Standard vs Above Average Tile'),
    '316809123776442.mp4': (6, 'PA Work Is More Than Wind Damage to Residential Roofs'),
    '1882724708756729.mp4': (6, 'The Public Adjuster Visits the Slab Yard'),
    '1484297985597956.mp4': (6, 'Public Adjusters Favorite Music'),

    # ============================================================
    # CATEGORY 7: Construction Details for Claims
    # ============================================================
    '397827255255476.mp4': (7, 'Porcelain vs Ceramic Tile: Rectified Tile and Lippage'),
    '736040697430847.mp4': (7, 'Tilt Wall Construction: Saw Cutting, OSHA Silica, Cold Joints'),
    '806914210593787.mp4': (7, 'Asbestos Testing: Every Layer of Flooring, Mastic, and Drywall'),
    '1018651962405245.mp4': (7, 'Vehicle vs Building: Code Upgrades Worth More Than Basic Repairs'),
    '653179386780207.mp4': (7, 'Shear Panel for Seismic Strength in California'),
    '1125254726134036.mp4': (7, 'Trade Standards vs Minimum Building Codes'),
    '2236970993403062.mp4': (7, 'Drilling Caissons for New Foundation in Pacific Palisades'),
    '3896113033745491.mp4': (7, 'Damaged Old Craftsman Home: 200K Restoration After Vehicle Impact'),
    '1661113020578848.mp4': (7, 'Porcelain Tile: How to Document It with Video'),
    '1965501703473310.mp4': (7, 'Paint Does Not Restore Unpainted Stucco to Pre-Loss Condition'),
    '1965513826805431.mp4': (7, 'Painting Repaired Stucco Is Not Restoring Color Coat Stucco'),
    '5469547596411487.mp4': (7, 'Drywall Sandwiched: Construction Anomaly Investigation'),  # dup
    '2995275067412671.mp4': (7, 'Tile Geek: Tile Identification'),
    '651920476426028.mp4': (7, 'Sanitary Cove Base Tile, Lippage, Caulk vs Grout'),
    '3126866050973692.mp4': (7, 'Basic Electrical Concepts: 3-Way Switch'),
    '690253222052505.mp4': (7, 'Grass Cloth Wallpaper: Bid Item Not in Xactimate'),
    '414256103854357.mp4': (7, 'Santa Barbara Smooth Troweled Stucco Finish'),
    '736504990835491.mp4': (7, 'Company Specializing in Restoring Fire/Water Damaged Property'),
    '3365146830366245.mp4': (7, 'Types of Drywall Mud and VCT Tile Installation'),
    '413523940830621.mp4': (7, 'Top Plate Butt Joints: Building Inspector Framing Requirements'),
    '1347528039511189.mp4': (7, 'Hawthorn Concrete Tile with David Pelaez'),
    '336054411190944.mp4': (7, 'Sound Proof Windows and Doors Under the Flight Path'),
    '1333371967174040.mp4': (7, 'Restoration and Finish Hardware at Stores Like RH'),
    '1489982248084840.mp4': (7, 'Identifying Reverse Painted Glass'),
    '329321539330978.mp4': (7, 'Chainsaw Maintenance: Ready for Storm Season'),
    '343703105187671.mp4': (7, 'Crew Working on Historical Roof in Orange CA: 1920s Gas Station'),
    '1166674707634079.mp4': (7, 'Tile Tenting Caught on Video'),
    '1105630793676310.mp4': (7, 'Illegal Child Labor Roofers'),

    # ============================================================
    # CATEGORY 8: AI & Technology in Claims
    # ============================================================
    '552890763320870.mp4': (8, 'Using AI to Write Letters to Insurance Companies'),
    '1182180132399227.mp4': (8, 'Free AI App: Writing Letters to Insurance Companies'),
    '4699432570280871.mp4': (8, 'Matterport: Remove Furniture to Show Damage in Images'),

    # ============================================================
    # CATEGORY 9: Conference & Presentations
    # ============================================================
    '3957637994259661.mp4': (9, 'WTS Conference: Finding Expert Umpires'),
    '3941869302503197.mp4': (9, 'Xactimate Breakout: Practical Interior Estimating & Strategy'),
    '3953123078044486.mp4': (9, 'WTS: Rooforders.com $25 Roof Measuring with Xactimate ESX'),
}

# Build categories
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

missing_files = []
for fn, (cat, title) in picks.items():
    if fn in all_videos:
        v = all_videos[fn]
        entry = {
            'filename': fn,
            'title': title,
            'date': v['date'],
            'size': v['size'],
            'original_description': v['description']
        }
        categories[cat]['videos'].append(entry)
    else:
        missing_files.append(fn)

if missing_files:
    print(f"WARNING: {len(missing_files)} files not found in JSON:")
    for m in missing_files:
        print(f"  {m}")
    print()

# Sort each category by date
for cat_id in categories:
    categories[cat_id]['videos'].sort(key=lambda x: x['date'])

# Now select TOP 5 per category
# For categories with many videos, I'll pick the best ones
# For categories with few, keep all

# Category 1: Xactimate - pick top 5
cat1_top = [
    '3980190918671035.mp4',  # Electrical damage - 27MB, longest
    '305867254746516.mp4',   # Wall height measurements
    '2121612941349598.mp4',  # New vs old construction pricing
    '523294372246021.mp4',   # Xactimate reports
    '855897155581738.mp4',   # Fire escape drawings underlay
]

# Category 2: Fire - pick top 5
cat2_top = [
    '979848060067950.mp4',   # Smoke + asbestos total loss
    '955306964492794.mp4',   # Burn & Learn
    '545192480291265.mp4',   # Efficient proximate cause
    '1255835586181859.mp4',  # Mudslide as fire loss
    '538278752113757.mp4',   # Smoke pressurized through walls
]

# Category 3: Water - keep all (5)
cat3_top = [
    '630373271667873.mp4',
    '727647241786524.mp4',
    '3444128715903978.mp4',
    '217141123898667.mp4',
    '606765722101518.mp4',
]

# Category 4: Claims Strategy - pick top 5
cat4_top = [
    '888467633172866.mp4',   # When must insurer pay
    '593935849333377.mp4',   # ACV matching
    '731631096029239.mp4',   # Carriers taking money back
    '978231510903213.mp4',   # Psychology of claims
    '1162665862294686.mp4',  # Engineers never ask witnesses
]

# Category 5: Contractors - pick top 4
cat5_top = [
    '729582682070992.mp4',   # Sue for bad faith + O&P
    '1134051480601625.mp4',  # Contractors sue for bad faith
    '298019149184904.mp4',   # Disclaimers
    '509553340911310.mp4',   # Marketing for contractors
]

# Category 6: PA Profession - keep all (4)
cat6_top = [
    '777714217090303.mp4',
    '316809123776442.mp4',
    '1882724708756729.mp4',
    '1484297985597956.mp4',
]

# Category 7: Construction - pick top 5
cat7_top = [
    '736040697430847.mp4',   # Tilt wall construction
    '806914210593787.mp4',   # Asbestos testing
    '397827255255476.mp4',   # Porcelain vs ceramic
    '653179386780207.mp4',   # Shear panel seismic
    '3896113033745491.mp4',  # Craftsman home restoration
]

# Category 8: AI - keep all (3) but deduplicate
cat8_top = [
    '552890763320870.mp4',
    '1182180132399227.mp4',
    '4699432570280871.mp4',
]

# Category 9: Conference - keep all (3)
cat9_top = [
    '3957637994259661.mp4',
    '3941869302503197.mp4',
    '3953123078044486.mp4',
]

top_lists = {
    1: cat1_top, 2: cat2_top, 3: cat3_top, 4: cat4_top,
    5: cat5_top, 6: cat6_top, 7: cat7_top, 8: cat8_top, 9: cat9_top
}

# Build final output
final = {}
for cat_id in sorted(categories.keys()):
    cat = categories[cat_id]
    top_fns = top_lists[cat_id]
    top_videos = []
    for fn in top_fns:
        for v in cat['videos']:
            if v['filename'] == fn:
                top_videos.append(v)
                break
    final[cat['name']] = {
        'top_picks': top_videos,
        'total_in_category': len(cat['videos']),
        'all_videos': cat['videos']
    }

# Print report
print("=" * 80)
print("  CURATED INSURANCE VIDEO CATALOG FROM FACEBOOK DATA EXPORT")
print("  For insuranceclaimsinfo.com Video Page")
print("=" * 80)

total_top = 0
total_all = 0
for cat_id in sorted(categories.keys()):
    cat = categories[cat_id]
    top_fns = top_lists[cat_id]
    top_videos = final[cat['name']]['top_picks']
    total_top += len(top_videos)
    total_all += len(cat['videos'])

    print(f"\n{'='*70}")
    print(f"  {cat_id}. {cat['name']}")
    print(f"  ({len(top_videos)} top picks from {len(cat['videos'])} total)")
    print(f"{'='*70}")

    for i, v in enumerate(top_videos, 1):
        print(f"\n  [{i}] {v['title']}")
        print(f"      File: {v['filename']}")
        print(f"      Date: {v['date']}  |  Size: {v['size']}")
        orig = v['original_description'].encode('ascii', 'replace').decode('ascii')
        # Wrap at ~70 chars
        words = orig.split()
        lines = []
        line = '      '
        for w in words:
            if len(line) + len(w) + 1 > 76:
                lines.append(line)
                line = '      ' + w
            else:
                line += ' ' + w if line.strip() else '      ' + w
        if line.strip():
            lines.append(line)
        desc_text = '\n'.join(lines[:4])
        if len(lines) > 4:
            desc_text += '\n      [...]'
        print(f"      Original: {desc_text.strip()}")

print(f"\n{'='*70}")
print(f"  TOTALS: {total_top} top picks across {total_all} categorized videos")
print(f"{'='*70}")

# Save final JSON
with open('C:/Users/lelan/Desktop/Claude Projects/insuranceclaimsinfo/fb_videos_final_catalog.json', 'w', encoding='utf-8') as f:
    json.dump(final, f, indent=2, ensure_ascii=False)

print(f"\nFull catalog saved to: fb_videos_final_catalog.json")
