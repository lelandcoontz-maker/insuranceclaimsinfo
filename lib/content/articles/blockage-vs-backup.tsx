import Link from 'next/link'
import { CalloutBox } from '@/components/content/CalloutBox'

export const meta = {
  title: 'Blockage & Overflow vs. Sewer Backup: Why the Distinction Matters',
  description:
    'A plumbing blockage that causes water to overflow from your fixtures is not a sewer backup. Learn the mechanical difference, why it matters for coverage, and what the courts have said.',
}

export default function Content() {
  return (
    <>
      <p className="text-gray-700 leading-relaxed mb-4">
        Few coverage issues create as much confusion &mdash; for homeowners, plumbers, and even
        insurance adjusters &mdash; as the difference between a <strong>sewer backup</strong> and
        an <strong>internal plumbing blockage with overflow</strong>. The two situations look similar
        at first glance: water is coming up from the drains in your home. But the cause, the
        mechanism, and &mdash; most importantly &mdash; the insurance coverage implications are very
        different.
      </p>

      <CalloutBox variant="important" title="Do Not Use the Word &quot;Backup&quot;">
        <p>
          Do not describe what happens when your own plumbing develops a blockage and water overflows
          from a low fixture in your home as a &quot;backup.&quot; Using that word can trigger a policy
          exclusion that may not actually apply to your loss. The more precise &mdash; and correct &mdash;
          terms are <strong>blockage</strong> (or <strong>stoppage</strong>) and <strong>overflow</strong> (or <strong>fill-up</strong>).
        </p>
      </CalloutBox>

      {/* ================================================================ */}
      {/* SECTION: HOW SECOND-FLOOR PLUMBING WORKS */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        How a Second-Floor Bathroom Drains &mdash; and What Happens When It Cannot
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        To understand why water comes out of the fixtures it does, you need to understand the basic
        layout of a second-floor bathroom&apos;s drain system. Consider this common arrangement:
      </p>

      {/* DIAGRAM 1: SECOND-FLOOR BATHROOM — DETAILED PLUMBING CROSS-SECTION */}
      <div className="my-8 text-center">
        <svg viewBox="0 0 940 720" xmlns="http://www.w3.org/2000/svg" className="max-w-full h-auto border border-gray-200 rounded-lg shadow-md" style={{ fontFamily: "'Source Sans Pro', 'Segoe UI', sans-serif" }}>
          <defs>
            <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ede7dc"/>
              <stop offset="100%" stopColor="#ddd5c8"/>
            </linearGradient>
            <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b7355"/>
              <stop offset="100%" stopColor="#6d5a43"/>
            </linearGradient>
            <linearGradient id="pipeGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4a4a4a"/>
              <stop offset="50%" stopColor="#6e6e6e"/>
              <stop offset="100%" stopColor="#4a4a4a"/>
            </linearGradient>
            <linearGradient id="ventGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3a6a3a"/>
              <stop offset="50%" stopColor="#5a9a5a"/>
              <stop offset="100%" stopColor="#3a6a3a"/>
            </linearGradient>
            <linearGradient id="copperGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8a5c2a"/>
              <stop offset="50%" stopColor="#b87333"/>
              <stop offset="100%" stopColor="#8a5c2a"/>
            </linearGradient>
            <filter id="shadow" x="-5%" y="-5%" width="115%" height="115%">
              <feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.12"/>
            </filter>
            <filter id="innerShadow">
              <feOffset dx="0" dy="1"/>
              <feGaussianBlur stdDeviation="1" result="blur"/>
              <feComposite in="SourceGraphic" in2="blur" operator="over"/>
            </filter>
            <marker id="arrowRed" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#c45028"/>
            </marker>
            <marker id="arrowBlue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#3d7ab5"/>
            </marker>
            <pattern id="tilePattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <rect width="24" height="24" fill="#e6e0d6"/>
              <rect x="0.5" y="0.5" width="11" height="11" rx="0.5" fill="#ede8df"/>
              <rect x="12.5" y="0.5" width="11" height="11" rx="0.5" fill="#ede8df"/>
              <rect x="0.5" y="12.5" width="11" height="11" rx="0.5" fill="#ede8df"/>
              <rect x="12.5" y="12.5" width="11" height="11" rx="0.5" fill="#ede8df"/>
            </pattern>
            <pattern id="hatchPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="8" height="8" fill="#f0ebe3"/>
              <line x1="0" y1="0" x2="0" y2="8" stroke="#e0d8cc" strokeWidth="1"/>
            </pattern>
          </defs>

          {/* TITLE BAR */}
          <rect x="0" y="0" width="940" height="60" fill="#1a2744" rx="10"/>
          <text x="470" y="28" textAnchor="middle" fontSize="17" fontWeight="700" fill="#fff">SECOND-FLOOR BATHROOM — PLUMBING CROSS-SECTION</text>
          <text x="470" y="48" textAnchor="middle" fontSize="12" fill="#8aa4c8">Drain-Waste-Vent (DWV) System with Fixture Heights, P-Traps, and Vent Stack</text>

          {/* ATTIC / ROOF AREA (for vent stack) */}
          <rect x="40" y="60" width="860" height="40" fill="#c8b8a4" stroke="#b8a892" strokeWidth="1"/>
          <text x="470" y="85" textAnchor="middle" fontSize="10" fill="#8a7a66" fontWeight="600">ROOF / ATTIC SPACE</text>
          <rect x="40" y="60" width="860" height="5" fill="#6b4c3a"/>

          {/* 2ND FLOOR BATHROOM */}
          <rect x="40" y="100" width="860" height="290" fill="url(#wallGrad)" stroke="#c8bca8" strokeWidth="1"/>
          <rect x="40" y="390" width="860" height="28" fill="url(#floorGrad)"/>
          <rect x="40" y="418" width="860" height="12" fill="#b8a080" stroke="#a89070" strokeWidth="0.5"/>

          {/* 1ST FLOOR WALL CAVITY */}
          <rect x="40" y="430" width="860" height="250" fill="url(#hatchPattern)" stroke="#c8bca8" strokeWidth="1"/>

          {/* Zone labels */}
          <text x="26" y="255" textAnchor="middle" fontSize="11" fill="#777" transform="rotate(-90,26,255)" fontWeight="700" letterSpacing="1">2ND FLOOR BATHROOM</text>
          <text x="26" y="555" textAnchor="middle" fontSize="11" fill="#777" transform="rotate(-90,26,555)" fontWeight="700" letterSpacing="1">1ST FLOOR WALL CAVITY</text>

          {/* VENT STACK (green) — runs floor to roof */}
          <rect x="786" y="62" width="10" height="370" fill="url(#ventGrad)" rx="2" opacity="0.9"/>
          <rect x="783" y="58" width="16" height="8" rx="2" fill="#555" stroke="#444" strokeWidth="1"/>
          <text x="810" y="75" fontSize="9" fill="#2e7d32" fontWeight="700">VENT</text>
          <text x="810" y="85" fontSize="9" fill="#2e7d32" fontWeight="700">STACK</text>
          <rect x="786" y="430" width="10" height="60" fill="url(#ventGrad)" rx="2" opacity="0.9"/>

          {/* ================================================================ */}
          {/* SINK (highest fixture) with visible P-TRAP                       */}
          {/* ================================================================ */}

          {/* Vanity cabinet */}
          <rect x="70" y="250" width="120" height="140" rx="4" fill="#9a7650" stroke="#7a5c38" strokeWidth="1.5" filter="url(#shadow)"/>
          <line x1="130" y1="258" x2="130" y2="382" stroke="#8a6840" strokeWidth="0.8"/>
          <rect x="78" y="255" width="44" height="125" rx="2" fill="none" stroke="#8a6840" strokeWidth="0.8"/>
          <rect x="138" y="255" width="44" height="125" rx="2" fill="none" stroke="#8a6840" strokeWidth="0.8"/>
          <circle cx="118" cy="318" r="3" fill="#c4a050" stroke="#a08030" strokeWidth="0.8"/>
          <circle cx="142" cy="318" r="3" fill="#c4a050" stroke="#a08030" strokeWidth="0.8"/>
          <rect x="66" y="244" width="128" height="10" rx="3" fill="#d4c0a0" stroke="#b8a480" strokeWidth="1"/>

          {/* Sink basin */}
          <ellipse cx="130" cy="230" rx="45" ry="18" fill="#fff" stroke="#bbb" strokeWidth="1.5"/>
          <ellipse cx="130" cy="232" rx="38" ry="14" fill="#e8f4fc" stroke="#c0d8e8" strokeWidth="1"/>
          {/* Faucet */}
          <rect x="126" y="200" width="8" height="30" rx="2" fill="#c8c8c8" stroke="#aaa" strokeWidth="1"/>
          <path d="M 120 198 Q 130 188, 140 198" fill="none" stroke="#d0d0d0" strokeWidth="4" strokeLinecap="round"/>
          <circle cx="118" cy="200" r="4" fill="#d8d8d8" stroke="#aaa" strokeWidth="0.8"/>
          <circle cx="142" cy="200" r="4" fill="#d8d8d8" stroke="#aaa" strokeWidth="0.8"/>
          <text x="118" y="202" textAnchor="middle" fontSize="5" fill="#888">H</text>
          <text x="142" y="202" textAnchor="middle" fontSize="5" fill="#888">C</text>

          {/* TAILPIECE (vertical pipe from sink drain down into cabinet) */}
          <rect x="127" y="247" width="7" height="30" fill="url(#copperGrad)" rx="1"/>

          {/* P-TRAP (clearly visible U-shape inside cabinet) */}
          <path d="M 130 277 L 130 305 Q 130 325, 148 325 Q 166 325, 166 305 L 166 290" fill="none" stroke="#b87333" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          {/* P-trap water seal */}
          <path d="M 133 310 Q 133 322, 148 322 Q 163 322, 163 310" fill="#a8d4f0" opacity="0.6" stroke="none"/>
          {/* P-trap label */}
          <text x="185" y="312" fontSize="9" fill="#8a5c2a" fontWeight="700">P-TRAP</text>
          <line x1="168" y1="310" x2="183" y2="312" stroke="#8a5c2a" strokeWidth="0.8"/>

          {/* Drain arm from P-trap going horizontal into wall, then down */}
          <rect x="163" y="287" width="30" height="6" fill="url(#pipeGrad)" rx="1"/>
          <rect x="190" y="290" width="8" height="100" fill="url(#pipeGrad)" rx="2"/>
          <rect x="190" y="418" width="8" height="80" fill="url(#pipeGrad)" rx="2"/>

          {/* VENT BRANCH from sink */}
          <rect x="175" y="140" width="6" height="150" fill="url(#ventGrad)" rx="1" opacity="0.85"/>
          <rect x="178" y="138" width="612" height="6" fill="url(#ventGrad)" rx="1" opacity="0.85"/>
          <text x="480" y="133" textAnchor="middle" fontSize="9" fill="#2e7d32" fontWeight="600">VENT BRANCH (connects to vent stack — allows air in, prevents siphoning traps)</text>

          {/* LABEL */}
          <text x="130" y="185" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1a2744">SINK</text>
          {/* Height marker */}
          <line x1="52" y1="230" x2="52" y2="390" stroke="#c45028" strokeWidth="1.2" strokeDasharray="4,3"/>
          <text x="48" y="310" textAnchor="end" fontSize="10" fill="#c45028" fontWeight="700">HIGHEST</text>
          <text x="48" y="322" textAnchor="end" fontSize="9" fill="#c45028">drain at</text>
          <text x="48" y="333" textAnchor="end" fontSize="9" fill="#c45028">~30&quot;</text>

          {/* ================================================================ */}
          {/* TOILET (second highest) with built-in trap shown                 */}
          {/* ================================================================ */}

          {/* Toilet base/pedestal */}
          <path d="M 290 390 L 290 355 Q 290 340, 305 340 L 345 340 Q 360 340, 360 355 L 360 390 Z" fill="#fff" stroke="#ccc" strokeWidth="1.5" filter="url(#shadow)"/>
          <ellipse cx="320" cy="350" rx="28" ry="10" fill="#f5f5f5" stroke="#ccc" strokeWidth="1"/>
          <ellipse cx="318" cy="354" rx="20" ry="6" fill="#d4e8f5" opacity="0.6"/>
          {/* Tank */}
          <rect x="348" y="290" width="28" height="68" rx="6" fill="#fff" stroke="#ccc" strokeWidth="1.5" filter="url(#shadow)"/>
          <rect x="346" y="286" width="32" height="8" rx="3" fill="#f0f0f0" stroke="#ccc" strokeWidth="1"/>
          <line x1="377" y1="300" x2="385" y2="297" stroke="#c8c8c8" strokeWidth="2" strokeLinecap="round"/>

          {/* Built-in toilet trap */}
          <path d="M 318 365 L 318 378 Q 318 395, 305 395 Q 292 395, 292 378 L 292 370 Q 292 358, 305 355" fill="none" stroke="#ccc" strokeWidth="3" strokeDasharray="4,2" opacity="0.6"/>
          <text x="280" y="388" fontSize="8" fill="#999" fontWeight="600">BUILT-IN</text>
          <text x="280" y="397" fontSize="8" fill="#999" fontWeight="600">TRAP</text>

          {/* Closet flange / drain through floor */}
          <rect x="313" y="390" width="14" height="28" fill="url(#pipeGrad)" rx="2"/>
          <ellipse cx="320" cy="392" rx="12" ry="3" fill="#686868" stroke="#555" strokeWidth="1"/>
          <rect x="313" y="430" width="14" height="70" fill="url(#pipeGrad)" rx="2"/>

          {/* Vent branch from toilet */}
          <rect x="370" y="160" width="6" height="175" fill="url(#ventGrad)" rx="1" opacity="0.85"/>
          <rect x="373" y="158" width="417" height="6" fill="url(#ventGrad)" rx="1" opacity="0.85"/>

          {/* LABEL */}
          <text x="330" y="278" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1a2744">TOILET</text>
          <line x1="275" y1="350" x2="275" y2="390" stroke="#c45028" strokeWidth="1.2" strokeDasharray="4,3"/>
          <text x="271" y="373" textAnchor="end" fontSize="10" fill="#c45028" fontWeight="700">2ND</text>
          <text x="271" y="384" textAnchor="end" fontSize="9" fill="#c45028">rim ~15&quot;</text>

          {/* ================================================================ */}
          {/* BATHTUB with P-trap below floor                                  */}
          {/* ================================================================ */}

          <path d="M 440 390 L 440 335 Q 440 320, 455 320 L 575 320 Q 590 320, 590 335 L 590 390 Z" fill="#fff" stroke="#bbb" strokeWidth="1.8" filter="url(#shadow)"/>
          <path d="M 447 390 L 447 340 Q 447 328, 458 328 L 572 328 Q 583 328, 583 340 L 583 390 Z" fill="#f0f8ff" stroke="none"/>
          <rect x="450" y="355" width="130" height="33" rx="2" fill="#d4e8f5" opacity="0.45"/>
          <rect x="436" y="316" width="158" height="8" rx="4" fill="#eee" stroke="#ccc" strokeWidth="1"/>
          <rect x="575" y="300" width="6" height="20" rx="2" fill="#c8c8c8" stroke="#aaa" strokeWidth="0.8"/>
          <path d="M 570 298 Q 578 290, 586 298" fill="none" stroke="#d0d0d0" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="455" cy="340" r="5" fill="#999" stroke="#777" strokeWidth="0.8"/>
          <circle cx="515" cy="388" r="6" fill="#888" stroke="#666" strokeWidth="1.2"/>
          <line x1="511" y1="388" x2="519" y2="388" stroke="#555" strokeWidth="1"/>
          <line x1="515" y1="384" x2="515" y2="392" stroke="#555" strokeWidth="1"/>

          {/* Drain pipe from tub through floor */}
          <rect x="511" y="390" width="8" height="28" fill="url(#pipeGrad)" rx="1"/>
          {/* P-trap below tub (under subfloor) */}
          <path d="M 515 418 L 515 450 Q 515 468, 530 468 Q 545 468, 545 450 L 545 440" fill="none" stroke="#5a5a5a" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M 518 453 Q 518 465, 530 465 Q 542 465, 542 453" fill="#a8d4f0" opacity="0.5" stroke="none"/>
          <text x="558" y="462" fontSize="9" fill="#555" fontWeight="700">P-TRAP</text>
          <rect x="542" y="437" width="8" height="63" fill="url(#pipeGrad)" rx="2"/>

          {/* Vent branch from tub */}
          <rect x="540" y="180" width="6" height="255" fill="url(#ventGrad)" rx="1" opacity="0.85"/>
          <rect x="543" y="178" width="250" height="6" fill="url(#ventGrad)" rx="1" opacity="0.85"/>

          {/* LABEL */}
          <text x="515" y="308" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1a2744">BATHTUB</text>
          <line x1="426" y1="385" x2="426" y2="390" stroke="#c45028" strokeWidth="1.2" strokeDasharray="4,3"/>
          <text x="422" y="376" textAnchor="end" fontSize="10" fill="#c45028" fontWeight="700">LOW</text>
          <text x="422" y="387" textAnchor="end" fontSize="9" fill="#c45028">drain at floor</text>

          {/* ================================================================ */}
          {/* SHOWER (lowest — floor drain) with P-trap below floor            */}
          {/* ================================================================ */}

          <rect x="640" y="150" width="150" height="240" rx="3" fill="url(#tilePattern)" stroke="#b8c8d4" strokeWidth="1.5" filter="url(#shadow)" opacity="0.4"/>
          <rect x="640" y="150" width="150" height="240" rx="3" fill="#f0f8ff" stroke="#b8c8d4" strokeWidth="1.5" opacity="0.25"/>
          <line x1="640" y1="150" x2="640" y2="390" stroke="#88b8d8" strokeWidth="3" opacity="0.7"/>
          <line x1="640" y1="150" x2="640" y2="390" stroke="#c0e0f0" strokeWidth="1.5" opacity="0.5"/>
          <rect x="640" y="374" width="150" height="16" rx="2" fill="#ddd5c8" stroke="#c0b8a8" strokeWidth="1"/>
          <circle cx="772" cy="170" r="12" fill="#d4d4d4" stroke="#aaa" strokeWidth="1.2"/>
          <circle cx="772" cy="170" r="8" fill="#ddd" stroke="#bbb" strokeWidth="0.5"/>
          <rect x="778" y="158" width="4" height="35" fill="#c8c8c8" rx="1"/>
          <line x1="766" y1="182" x2="762" y2="200" stroke="#b8d8f0" strokeWidth="0.8" opacity="0.5"/>
          <line x1="772" y1="182" x2="772" y2="202" stroke="#b8d8f0" strokeWidth="0.8" opacity="0.5"/>
          <line x1="778" y1="182" x2="782" y2="200" stroke="#b8d8f0" strokeWidth="0.8" opacity="0.5"/>

          {/* Floor drain */}
          <circle cx="715" cy="384" r="8" fill="#999" stroke="#777" strokeWidth="1.5"/>
          <circle cx="715" cy="384" r="5" fill="#888" stroke="#666" strokeWidth="0.5"/>
          <line x1="711" y1="384" x2="719" y2="384" stroke="#555" strokeWidth="1"/>
          <line x1="715" y1="380" x2="715" y2="388" stroke="#555" strokeWidth="1"/>
          <line x1="712" y1="381" x2="718" y2="387" stroke="#555" strokeWidth="0.7"/>
          <line x1="712" y1="387" x2="718" y2="381" stroke="#555" strokeWidth="0.7"/>

          {/* Drain pipe from shower through floor */}
          <rect x="711" y="390" width="8" height="28" fill="url(#pipeGrad)" rx="1"/>
          {/* P-trap below shower pan */}
          <path d="M 715 418 L 715 448 Q 715 466, 730 466 Q 745 466, 745 448 L 745 438" fill="none" stroke="#5a5a5a" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M 718 451 Q 718 463, 730 463 Q 742 463, 742 451" fill="#a8d4f0" opacity="0.5" stroke="none"/>
          <text x="758" y="460" fontSize="9" fill="#555" fontWeight="700">P-TRAP</text>
          <rect x="742" y="435" width="8" height="65" fill="url(#pipeGrad)" rx="2"/>

          {/* Vent branch from shower connects to main vent stack */}
          <rect x="724" y="200" width="6" height="233" fill="url(#ventGrad)" rx="1" opacity="0.85"/>
          <rect x="727" y="198" width="63" height="6" fill="url(#ventGrad)" rx="1" opacity="0.85"/>

          {/* LABEL */}
          <text x="715" y="142" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1a2744">SHOWER</text>
          <line x1="804" y1="382" x2="804" y2="390" stroke="#c45028" strokeWidth="1.2" strokeDasharray="4,3"/>
          <text x="812" y="380" fontSize="10" fill="#c45028" fontWeight="700">LOWEST</text>
          <text x="812" y="391" fontSize="9" fill="#c45028">floor drain</text>

          {/* ================================================================ */}
          {/* HORIZONTAL MAIN DRAIN collecting all fixtures                    */}
          {/* ================================================================ */}
          <rect x="194" y="493" width="554" height="14" fill="url(#pipeGrad)" rx="3"/>
          <text x="400" y="525" textAnchor="middle" fontSize="10" fill="#555" fontWeight="600">MAIN HORIZONTAL DRAIN (in wall cavity)</text>

          {/* Elbow fittings */}
          <circle cx="194" cy="497" r="5" fill="#5a5a5a" stroke="#444" strokeWidth="1"/>
          <circle cx="320" cy="497" r="6" fill="#5a5a5a" stroke="#444" strokeWidth="1"/>
          <circle cx="546" cy="497" r="5" fill="#5a5a5a" stroke="#444" strokeWidth="1"/>
          <circle cx="746" cy="497" r="5" fill="#5a5a5a" stroke="#444" strokeWidth="1"/>

          {/* Main drain continues to vertical stack going down */}
          <rect x="743" y="500" width="10" height="55" fill="url(#pipeGrad)" rx="2"/>
          <rect x="748" y="548" width="152" height="14" fill="url(#pipeGrad)" rx="3"/>
          <text x="830" y="575" textAnchor="middle" fontSize="9" fill="#888" fontWeight="600">TO SEWER</text>
          <text x="830" y="585" textAnchor="middle" fontSize="9" fill="#888" fontWeight="600">{'LATERAL \u2192'}</text>

          {/* ================================================================ */}
          {/* BLOCKAGE in the main drain                                       */}
          {/* ================================================================ */}
          <g transform="translate(748, 530)">
            <ellipse cx="0" cy="0" rx="24" ry="14" fill="#c45028" opacity="0.15" stroke="#c45028" strokeWidth="2"/>
            <line x1="-10" y1="-7" x2="10" y2="7" stroke="#c45028" strokeWidth="3.5" strokeLinecap="round"/>
            <line x1="-10" y1="7" x2="10" y2="-7" stroke="#c45028" strokeWidth="3.5" strokeLinecap="round"/>
          </g>
          <text x="748" y="508" textAnchor="middle" fontSize="10" fontWeight="700" fill="#c45028">BLOCKAGE</text>

          {/* WATER RISING in pipes */}
          <rect x="196" y="497" width="552" height="8" fill="#5ba3d9" opacity="0.3" rx="2"/>
          <line x1="746" y1="490" x2="746" y2="445" stroke="#3d7ab5" strokeWidth="2" markerEnd="url(#arrowBlue)" strokeDasharray="5,3"/>
          <line x1="546" y1="490" x2="546" y2="445" stroke="#3d7ab5" strokeWidth="2" markerEnd="url(#arrowBlue)" strokeDasharray="5,3"/>
          <line x1="320" y1="490" x2="320" y2="445" stroke="#3d7ab5" strokeWidth="2" markerEnd="url(#arrowBlue)" strokeDasharray="5,3"/>
          <line x1="194" y1="490" x2="194" y2="445" stroke="#3d7ab5" strokeWidth="2" markerEnd="url(#arrowBlue)" strokeDasharray="5,3"/>

          {/* ANNOTATION BOX */}
          <rect x="60" y="610" width="380" height="65" rx="8" fill="#fff4ec" stroke="#c45028" strokeWidth="1.5"/>
          <text x="250" y="632" textAnchor="middle" fontSize="12" fontWeight="700" fill="#c45028">Water rises and overflows from the</text>
          <text x="250" y="650" textAnchor="middle" fontSize="12" fontWeight="700" fill="#c45028">LOWEST fixtures (shower &amp; bathtub) first</text>
          <text x="250" y="668" textAnchor="middle" fontSize="10" fill="#888">{"Sink will not overflow until water rises above 30\""}</text>
          <line x1="350" y1="610" x2="546" y2="540" stroke="#c45028" strokeWidth="1.2" markerEnd="url(#arrowRed)" strokeDasharray="4,3"/>

          {/* LEGEND */}
          <rect x="500" y="610" width="390" height="78" rx="8" fill="#fff" stroke="#dde3eb" strokeWidth="1"/>
          <text x="516" y="630" fontSize="11" fontWeight="700" fill="#1a2744">LEGEND</text>
          <rect x="516" y="638" width="18" height="6" fill="url(#pipeGrad)" rx="1"/>
          <text x="542" y="645" fontSize="10" fill="#444">Drain/waste pipes (DWV)</text>
          <rect x="516" y="652" width="18" height="6" fill="url(#ventGrad)" rx="1" opacity="0.85"/>
          <text x="542" y="659" fontSize="10" fill="#444">Vent pipes (allow air in, prevent trap siphon)</text>
          <rect x="516" y="666" width="18" height="6" fill="#b87333" rx="1"/>
          <text x="542" y="673" fontSize="10" fill="#444">P-trap (water seal prevents sewer gas)</text>
          <rect x="700" y="638" width="18" height="6" fill="#5ba3d9" opacity="0.4" rx="1"/>
          <text x="726" y="645" fontSize="10" fill="#444">Water filling from blockage</text>
          <line x1="700" y1="660" x2="718" y2="660" stroke="#3d7ab5" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#arrowBlue)"/>
          <text x="726" y="663" fontSize="10" fill="#444">Direction of water rise</text>

          {/* COPYRIGHT */}
          <text x="470" y="708" textAnchor="middle" fontSize="9" fill="#999">{'\u00A9 2026 Leland Coontz, Licensed Public Adjuster \u2022 All rights reserved'}</text>
        </svg>
        <p className="text-gray-500 text-sm mt-3 italic">
          Figure 1: A detailed cross-section of a second-floor bathroom&apos;s drain-waste-vent (DWV)
          system. Each fixture has a P-trap (water seal) and connects to the vent stack, which allows
          air into the system and prevents trap siphoning. When a blockage occurs in the main drain
          line within the first-floor wall cavity, water rises and overflows from the lowest-connected
          fixtures &mdash; the shower floor drain and bathtub drain &mdash; long before it reaches the
          toilet bowl rim or the sink.
        </p>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        A typical second-floor bathroom has four fixtures connected to a common drain line: a <strong>sink</strong>,
        a <strong>toilet</strong>, a <strong>bathtub</strong>, and a <strong>shower</strong>. These are
        all at different heights:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Sink</strong> &mdash; the highest fixture. Its drain opening sits inside a vanity, well above the floor. The P-trap is clearly visible under the sink (the U-shaped pipe that holds water to block sewer gas).</li>
        <li><strong>Toilet</strong> &mdash; second highest. The bowl rim sits roughly 15 inches above the floor. The toilet has a built-in trap molded into the porcelain.</li>
        <li><strong>Bathtub</strong> &mdash; low. The drain is at or very near floor level, with a P-trap located beneath the subfloor.</li>
        <li><strong>Shower</strong> &mdash; the lowest. A shower pan with a floor drain sits flush with or slightly below the bathroom floor, with its P-trap beneath the subfloor.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        All four fixtures connect to a shared drain line that runs down through the floor, through the
        wall cavity of the first floor, and eventually exits the building to a sewer lateral or septic
        system. Each fixture also connects to a <strong>vent stack</strong> &mdash; a vertical pipe that
        extends through the roof. The vent allows air into the drain system so water flows freely, and
        it prevents the water seals in the P-traps from being siphoned out.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">What Happens When the Drain Blocks</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a blockage develops in the main drain line &mdash; say, within the walls of the first floor &mdash;
        the water has nowhere to go. As anyone uses any fixture in the bathroom (or even on another floor
        that shares the same drain stack), water begins to fill the pipe system from the blockage point upward.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Physics dictates what happens next: <strong>water seeks the lowest exit point</strong>. The water
        will begin overflowing from the shower floor drain and the bathtub drain <em>long before</em> it
        would ever rise high enough to spill over the toilet bowl rim, let alone reach the sink.
      </p>

      <CalloutBox variant="tip" title="This Is a Blockage and Overflow &mdash; Not a Backup">
        <p>
          The water is coming from the building&apos;s own plumbing system. Nothing is entering the
          property from an external sewer. The mechanism is purely internal: a clog in the pipe, water
          filling up behind it, and gravity pushing it out the lowest available opening.
        </p>
      </CalloutBox>

      {/* ================================================================ */}
      {/* SECTION: BACKUP VS. BLOCKAGE */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What Is a &quot;Backup&quot; &mdash; and Why This Is not One
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the insurance adjusting world &mdash; at least among adjusters who understood the distinction
        &mdash; a <strong>sewer backup</strong> has a specific meaning: it refers to sewage from
        an <em>external source</em> (typically a municipal sewer main or a neighboring property&apos;s
        sewer line) being forced <em>into</em> the insured&apos;s property through the sewer connection.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A true sewer backup might occur when:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>The city sewer main becomes overwhelmed during heavy rain and sewage reverses direction into homes connected to the system</li>
        <li>A tree root intrusion in the city&apos;s sewer line causes sewage to back up into homes on the block</li>
        <li>A neighboring property&apos;s septic system fails and sewage enters the insured&apos;s property through shared drainage</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        In all of these scenarios, the common element is that <strong>sewage or water from outside the
        insured&apos;s property line is being forced into the home</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Contrast that with our second-floor bathroom scenario: the blockage is in the homeowner&apos;s
        own pipe, inside the homeowner&apos;s own walls, on the homeowner&apos;s own property. The water
        overflowing from the shower drain is the same water that went down the sink or toilet moments
        earlier. Nothing is entering from outside. This is, mechanically, no different from plugging
        your kitchen sink drain and letting the faucet run &mdash; the water overflows because it
        cannot drain, not because something is pushing it in from outside.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The term &quot;fill-up&quot; is more commonly used in the South and Midwest than on the West
        Coast, but it accurately describes what happens: the drain system fills up behind a blockage
        and overflows from the lowest fixture. Whether you call it an overflow or a fill-up,
        it is <em>not</em> a backup. Homeowners, plumbers, and even some insurance adjusters sometimes
        use the word &quot;backup&quot; loosely to describe this situation, but that imprecise language
        can have real consequences for your insurance claim.
      </p>

      {/* ================================================================ */}
      {/* SECTION: WHY IT MATTERS FOR COVERAGE */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        Why the Distinction Matters for Your Insurance Coverage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many homeowner&apos;s insurance policies contain an exclusion for &quot;sewer backup&quot; or
        &quot;water that backs up through sewers or drains.&quot; Some policies offer backup coverage as
        an optional endorsement (often with a lower sub-limit). But the standard peril insured against in
        an HO-3 policy is <strong>sudden and accidental direct physical loss</strong> &mdash; and a plumbing
        blockage that causes an overflow fits squarely within that coverage grant.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Consider this example: a family member flushes something down the second-floor toilet that
        should not have been flushed &mdash; a child&apos;s toy, a clump of supposedly &quot;flushable&quot;
        wipes, or an excessive amount of toilet paper. This creates a blockage in the drain line within the
        wall cavity. The next morning, when someone takes a shower, the water has nowhere to go and begins
        pouring out of the shower drain and bathtub drain onto the bathroom floor, eventually seeping through
        to the first-floor ceiling below.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is a <strong>sudden, accidental occurrence</strong>. The cause is an internal plumbing blockage.
        The result is an overflow from the home&apos;s own plumbing system. Under a standard HO-3 policy,
        this type of loss is covered &mdash; it is not excluded, because <em>it is not a sewer backup</em>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        But if the homeowner calls the insurance company and says &quot;my sewer backed up,&quot; or the
        plumber writes on the invoice &quot;cleared sewer backup,&quot; the insurance company may seize on
        that language to apply the backup exclusion and deny the claim &mdash; even though no actual sewer
        backup occurred.
      </p>

      {/* DIAGRAM 2: PROPERTY LINE — BLOCKAGE LOCATIONS */}
      <div className="my-8 text-center">
        <svg viewBox="0 0 900 560" xmlns="http://www.w3.org/2000/svg" className="max-w-full h-auto border border-gray-200 rounded-lg shadow-md" style={{ fontFamily: "'Source Sans Pro', 'Segoe UI', sans-serif" }}>
          <defs>
            <linearGradient id="soilGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9a8b6f"/>
              <stop offset="100%" stopColor="#7a6d55"/>
            </linearGradient>
            <linearGradient id="houseGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ede7dc"/>
              <stop offset="100%" stopColor="#ddd5c8"/>
            </linearGradient>
            <linearGradient id="roofGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6b4c3a"/>
              <stop offset="100%" stopColor="#5a3d2c"/>
            </linearGradient>
            <linearGradient id="pipe2Grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4a4a4a"/>
              <stop offset="50%" stopColor="#6e6e6e"/>
              <stop offset="100%" stopColor="#4a4a4a"/>
            </linearGradient>
            <pattern id="grass2" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
              <rect width="14" height="14" fill="#7a9a68"/>
              <line x1="4" y1="14" x2="5" y2="6" stroke="#8aaa78" strokeWidth="1.2"/>
              <line x1="10" y1="14" x2="9" y2="7" stroke="#8aaa78" strokeWidth="1.2"/>
            </pattern>
            <marker id="aRed2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#c45028"/>
            </marker>
            <marker id="aGreen2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#2e7d32"/>
            </marker>
            <linearGradient id="ventGrad2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3a6a3a"/>
              <stop offset="50%" stopColor="#5a9a5a"/>
              <stop offset="100%" stopColor="#3a6a3a"/>
            </linearGradient>
          </defs>

          {/* Title bar */}
          <rect x="0" y="0" width="900" height="55" fill="#1a2744" rx="10"/>
          <text x="450" y="25" textAnchor="middle" fontSize="17" fontWeight="700" fill="#fff">BLOCKAGE LOCATION RELATIVE TO THE PROPERTY LINE</text>
          <text x="450" y="44" textAnchor="middle" fontSize="12" fill="#8aa4c8">{'The location of the blockage determines whether the "backup" exclusion can apply'}</text>

          {/* Sky */}
          <rect x="0" y="55" width="900" height="200" fill="#d6e8f5"/>
          {/* Ground */}
          <rect x="0" y="255" width="900" height="20" fill="url(#grass2)"/>
          {/* Underground */}
          <rect x="0" y="275" width="900" height="285" fill="url(#soilGrad2)"/>

          {/* Property line */}
          <line x1="580" y1="60" x2="580" y2="550" stroke="#c45028" strokeWidth="2.5" strokeDasharray="12,6"/>
          <rect x="548" y="62" width="66" height="22" rx="4" fill="#c45028"/>
          <text x="581" y="78" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">PROPERTY</text>
          <rect x="556" y="84" width="50" height="18" rx="4" fill="#c45028"/>
          <text x="581" y="97" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">LINE</text>

          {/* House */}
          <rect x="120" y="140" width="300" height="115" rx="3" fill="url(#houseGrad2)" stroke="#c8bca8" strokeWidth="1.5" filter="url(#shadow)"/>
          <polygon points="100,140 270,75 440,140" fill="url(#roofGrad2)" stroke="#4a3528" strokeWidth="1.5"/>
          {/* Vent pipe through roof */}
          <rect x="340" y="95" width="8" height="50" fill="url(#ventGrad2)" rx="1"/>
          <rect x="337" y="92" width="14" height="6" rx="2" fill="#555"/>
          {/* Windows */}
          <rect x="160" y="165" width="42" height="42" rx="2" fill="#a8cce0" stroke="#888" strokeWidth="1"/>
          <line x1="181" y1="165" x2="181" y2="207" stroke="#888" strokeWidth="0.8"/>
          <line x1="160" y1="186" x2="202" y2="186" stroke="#888" strokeWidth="0.8"/>
          <rect x="310" y="165" width="42" height="42" rx="2" fill="#a8cce0" stroke="#888" strokeWidth="1"/>
          <line x1="331" y1="165" x2="331" y2="207" stroke="#888" strokeWidth="0.8"/>
          <line x1="310" y1="186" x2="352" y2="186" stroke="#888" strokeWidth="0.8"/>
          {/* Door */}
          <rect x="235" y="200" width="35" height="55" rx="2" fill="#8b6e4e" stroke="#6d5a43" strokeWidth="1.5"/>
          <circle cx="262" cy="230" r="3" fill="#d4a847"/>
          <text x="270" y="132" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1a2744">INSURED&apos;S HOME</text>

          {/* Foundation */}
          <rect x="120" y="255" width="300" height="22" fill="#888" opacity="0.25" rx="2"/>

          {/* Internal plumbing */}
          <rect x="266" y="220" width="8" height="35" fill="url(#pipe2Grad)" rx="2"/>
          <rect x="266" y="277" width="8" height="45" fill="url(#pipe2Grad)" rx="2"/>

          {/* Horizontal sewer lateral */}
          <rect x="270" y="345" width="510" height="14" fill="url(#pipe2Grad)" rx="3"/>
          <circle cx="274" cy="340" r="6" fill="#5a5a5a" stroke="#444" strokeWidth="1"/>

          {/* Labels on pipe */}
          <text x="460" y="380" textAnchor="middle" fontSize="10" fill="#c8b898" fontWeight="600">SEWER LATERAL (PIPE FROM HOUSE TO CITY MAIN)</text>

          {/* Blockage A — inside property */}
          <g transform="translate(390, 352)">
            <ellipse cx="0" cy="0" rx="20" ry="10" fill="#2e7d32" opacity="0.2" stroke="#2e7d32" strokeWidth="2"/>
            <line x1="-8" y1="-5" x2="8" y2="5" stroke="#2e7d32" strokeWidth="3.5" strokeLinecap="round"/>
            <line x1="-8" y1="5" x2="8" y2="-5" stroke="#2e7d32" strokeWidth="3.5" strokeLinecap="round"/>
          </g>
          <rect x="315" y="400" width="150" height="75" rx="8" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="1.5"/>
          <text x="390" y="420" textAnchor="middle" fontSize="12" fontWeight="700" fill="#2e7d32">BLOCKAGE &quot;A&quot;</text>
          <text x="390" y="436" textAnchor="middle" fontSize="10" fill="#2e7d32">Inside property line</text>
          <text x="390" y="452" textAnchor="middle" fontSize="11" fontWeight="700" fill="#2e7d32">= Internal stoppage</text>
          <text x="390" y="468" textAnchor="middle" fontSize="11" fontWeight="700" fill="#2e7d32">{'\u2713 COVERED'}</text>
          <line x1="390" y1="398" x2="390" y2="368" stroke="#2e7d32" strokeWidth="1.5" markerEnd="url(#aGreen2)"/>

          {/* City sewer main */}
          <rect x="775" y="320" width="22" height="150" fill="#4a4a4a" rx="5" stroke="#3a3a3a" strokeWidth="1.5"/>
          <text x="786" y="310" textAnchor="middle" fontSize="10" fontWeight="700" fill="#999">CITY</text>
          <text x="786" y="296" textAnchor="middle" fontSize="10" fontWeight="700" fill="#999">SEWER</text>
          <text x="786" y="282" textAnchor="middle" fontSize="10" fontWeight="700" fill="#999">MAIN</text>

          {/* Connection to city main */}
          <circle cx="778" cy="352" r="5" fill="#5a5a5a" stroke="#444" strokeWidth="1"/>

          {/* Blockage B — outside property */}
          <g transform="translate(690, 352)">
            <ellipse cx="0" cy="0" rx="20" ry="10" fill="#c45028" opacity="0.2" stroke="#c45028" strokeWidth="2"/>
            <line x1="-8" y1="-5" x2="8" y2="5" stroke="#c45028" strokeWidth="3.5" strokeLinecap="round"/>
            <line x1="-8" y1="5" x2="8" y2="-5" stroke="#c45028" strokeWidth="3.5" strokeLinecap="round"/>
          </g>
          <rect x="615" y="400" width="155" height="75" rx="8" fill="#fbe9e7" stroke="#c45028" strokeWidth="1.5"/>
          <text x="693" y="420" textAnchor="middle" fontSize="12" fontWeight="700" fill="#c45028">BLOCKAGE &quot;B&quot;</text>
          <text x="693" y="436" textAnchor="middle" fontSize="10" fill="#c45028">Outside property line</text>
          <text x="693" y="452" textAnchor="middle" fontSize="11" fontWeight="700" fill="#c45028">= Sewer &quot;backup&quot;</text>
          <text x="693" y="468" textAnchor="middle" fontSize="11" fontWeight="700" fill="#c45028">{'\u2717 MAY BE EXCLUDED'}</text>
          <line x1="693" y1="398" x2="693" y2="368" stroke="#c45028" strokeWidth="1.5" markerEnd="url(#aRed2)"/>

          {/* Zone labels */}
          <rect x="80" y="510" width="220" height="28" rx="6" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="1"/>
          <text x="190" y="529" textAnchor="middle" fontSize="12" fontWeight="700" fill="#2e7d32">INSURED&apos;S PROPERTY</text>
          <rect x="620" y="510" width="220" height="28" rx="6" fill="#fbe9e7" stroke="#c45028" strokeWidth="1"/>
          <text x="730" y="529" textAnchor="middle" fontSize="12" fontWeight="700" fill="#c45028">PUBLIC RIGHT-OF-WAY</text>

          {/* COPYRIGHT */}
          <text x="450" y="555" textAnchor="middle" fontSize="9" fill="#aaa">{'\u00A9 2026 Leland Coontz, Licensed Public Adjuster \u2022 All rights reserved'}</text>
        </svg>
        <p className="text-gray-500 text-sm mt-3 italic">
          Figure 2: The same pipe, two very different coverage outcomes. Blockage &quot;A&quot; is inside
          the property line &mdash; it is an internal plumbing stoppage, and the resulting overflow
          is a covered loss. Blockage &quot;B&quot; is outside the property line in the public sewer
          system &mdash; if sewage is forced back into the home from this external source, the sewer
          backup exclusion may apply.
        </p>
      </div>

      {/* ================================================================ */}
      {/* SECTION: TRUE BACKUP */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        What a True Sewer Backup Actually Looks Like
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Now that we have established what a backup <em>is not</em>, let us illustrate what a true
        sewer backup actually is &mdash; because the contrast makes the distinction unmistakable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Imagine this scenario: A fish restaurant sits at the top of a hill. A residential home sits in
        the valley below. Both properties connect to the same municipal sewer line. The sewer line runs
        downhill, and at the junction where the home&apos;s lateral meets the main line, there is
        a <strong>wye fitting</strong> &mdash; a Y-shaped pipe connection that joins the home&apos;s sewer
        lateral to the main sewer at an angle designed to allow waste to flow downhill toward the sewage
        treatment plant.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Now imagine a blockage develops in the main sewer line <em>downstream</em> of that wye &mdash;
        between the junction and the treatment plant. Sewage from the restaurant continues flowing downhill,
        hits the blockage, and has nowhere to go. The pipe fills up. Because the home in the valley sits
        at a lower elevation, physics takes over: the column of sewage in the main line exerts hydraulic
        pressure back up through the wye fitting and into the home&apos;s sewer lateral. It is
        essentially an <strong>artesian well effect</strong> &mdash; but instead of fresh groundwater,
        it is sewage flowing the wrong direction, forced uphill by the weight of the sewage column
        above it, and out through the home&apos;s lowest fixtures.
      </p>

      {/* DIAGRAM 3: TRUE BACKUP — RESTAURANT ON HILL, HOUSE IN VALLEY */}
      <div className="my-8 text-center">
        <svg viewBox="0 0 940 640" xmlns="http://www.w3.org/2000/svg" className="max-w-full h-auto border border-gray-200 rounded-lg shadow-md" style={{ fontFamily: "'Source Sans Pro', 'Segoe UI', sans-serif" }}>
          <defs>
            <linearGradient id="sky3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b0cce8"/>
              <stop offset="100%" stopColor="#d6e8f5"/>
            </linearGradient>
            <linearGradient id="hill3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7a9a68"/>
              <stop offset="100%" stopColor="#5c7a4a"/>
            </linearGradient>
            <linearGradient id="soil3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9a8b6f"/>
              <stop offset="100%" stopColor="#7a6d55"/>
            </linearGradient>
            <linearGradient id="pipe3" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4a4a4a"/>
              <stop offset="50%" stopColor="#6e6e6e"/>
              <stop offset="100%" stopColor="#4a4a4a"/>
            </linearGradient>
            <linearGradient id="rest3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d4a87a"/>
              <stop offset="100%" stopColor="#c09060"/>
            </linearGradient>
            <linearGradient id="house3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ede7dc"/>
              <stop offset="100%" stopColor="#ddd5c8"/>
            </linearGradient>
            <linearGradient id="roof3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6b4c3a"/>
              <stop offset="100%" stopColor="#5a3d2c"/>
            </linearGradient>
            <marker id="aSew3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#8b6914"/>
            </marker>
            <marker id="aRed3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#c45028"/>
            </marker>
            <filter id="sh3" x="-5%" y="-5%" width="115%" height="115%">
              <feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.12"/>
            </filter>
          </defs>

          {/* Title bar */}
          <rect x="0" y="0" width="940" height="55" fill="#1a2744" rx="10"/>
          <text x="470" y="25" textAnchor="middle" fontSize="17" fontWeight="700" fill="#fff">{'A TRUE SEWER BACKUP \u2014 THE "ARTESIAN WELL" EFFECT'}</text>
          <text x="470" y="44" textAnchor="middle" fontSize="12" fill="#8aa4c8">Sewage from an uphill property reverses direction through the wye fitting into a downhill home</text>

          {/* Sky */}
          <rect x="0" y="55" width="940" height="380" fill="url(#sky3)"/>

          {/* Terrain (hill sloping down left to right) */}
          <path d="M 0 200 Q 80 190, 160 210 Q 240 230, 320 280 Q 400 320, 480 340 Q 560 355, 640 360 Q 720 362, 800 362 L 940 362 L 940 640 L 0 640 Z" fill="url(#hill3)" stroke="#4a6a38" strokeWidth="1"/>
          <path d="M 0 260 Q 80 250, 160 270 Q 240 290, 320 340 Q 400 380, 480 400 Q 560 415, 640 420 Q 720 422, 800 422 L 940 422 L 940 640 L 0 640 Z" fill="url(#soil3)"/>

          {/* RESTAURANT on the hill */}
          <rect x="60" y="108" width="170" height="92" rx="3" fill="url(#rest3)" stroke="#a07848" strokeWidth="1.5" filter="url(#sh3)"/>
          <rect x="50" y="100" width="190" height="12" rx="3" fill="#8b6e4e" stroke="#6d5a43" strokeWidth="1"/>
          <rect x="90" y="72" width="110" height="28" rx="5" fill="#c45028" stroke="#a03820" strokeWidth="1"/>
          <text x="145" y="91" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">FISH RESTAURANT</text>
          <rect x="80" y="128" width="32" height="32" rx="2" fill="#ffeebb" stroke="#888" strokeWidth="1"/>
          <rect x="128" y="128" width="32" height="32" rx="2" fill="#ffeebb" stroke="#888" strokeWidth="1"/>
          <rect x="176" y="128" width="32" height="32" rx="2" fill="#ffeebb" stroke="#888" strokeWidth="1"/>
          <rect x="132" y="168" width="24" height="32" rx="2" fill="#6d5a43" stroke="#5a4838" strokeWidth="1"/>
          <text x="145" y="65" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1a2744">UP THE HILL</text>

          {/* HOUSE in the valley */}
          <rect x="630" y="268" width="170" height="92" rx="3" fill="url(#house3)" stroke="#c8bca8" strokeWidth="1.5" filter="url(#sh3)"/>
          <polygon points="618,268 715,220 812,268" fill="url(#roof3)" stroke="#4a3528" strokeWidth="1.5"/>
          <rect x="655" y="288" width="32" height="30" rx="2" fill="#a8cce0" stroke="#888" strokeWidth="1"/>
          <line x1="671" y1="288" x2="671" y2="318" stroke="#888" strokeWidth="0.7"/>
          <line x1="655" y1="303" x2="687" y2="303" stroke="#888" strokeWidth="0.7"/>
          <rect x="735" y="288" width="32" height="30" rx="2" fill="#a8cce0" stroke="#888" strokeWidth="1"/>
          <line x1="751" y1="288" x2="751" y2="318" stroke="#888" strokeWidth="0.7"/>
          <line x1="735" y1="303" x2="767" y2="303" stroke="#888" strokeWidth="0.7"/>
          <rect x="698" y="322" width="26" height="38" rx="2" fill="#8b6e4e" stroke="#6d5a43" strokeWidth="1.5"/>
          <circle cx="718" cy="344" r="2.5" fill="#d4a847"/>
          <text x="715" y="213" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1a2744">HOMEOWNER&apos;S HOUSE</text>
          <text x="715" y="258" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1a2744">IN THE VALLEY</text>

          {/* Sewer pipes underground */}
          <rect x="140" y="200" width="10" height="80" fill="url(#pipe3)" rx="2"/>

          {/* Main sewer line downhill */}
          <line x1="145" y1="280" x2="510" y2="435" stroke="#4a4a4a" strokeWidth="16" strokeLinecap="round"/>
          <line x1="145" y1="280" x2="510" y2="435" stroke="#6e6e6e" strokeWidth="10" strokeLinecap="round"/>

          {/* Wye fitting */}
          <g transform="translate(510, 435)">
            <line x1="0" y1="0" x2="160" y2="22" stroke="#4a4a4a" strokeWidth="16" strokeLinecap="round"/>
            <line x1="0" y1="0" x2="160" y2="22" stroke="#6e6e6e" strokeWidth="10" strokeLinecap="round"/>
            <line x1="0" y1="0" x2="200" y2="-72" stroke="#4a4a4a" strokeWidth="13" strokeLinecap="round"/>
            <line x1="0" y1="0" x2="200" y2="-72" stroke="#6e6e6e" strokeWidth="8" strokeLinecap="round"/>
            <circle cx="0" cy="0" r="12" fill="#5a5a5a" stroke="#444" strokeWidth="2"/>
            <text x="0" y="4" textAnchor="middle" fontSize="8" fontWeight="700" fill="#ddd">Y</text>
            <rect x="-65" y="16" width="130" height="24" rx="5" fill="#fff" stroke="#686868" strokeWidth="1" opacity="0.95"/>
            <text x="0" y="33" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1a2744">WYE FITTING</text>
          </g>

          {/* House lateral up to foundation */}
          <line x1="710" y1="363" x2="710" y2="385" stroke="#4a4a4a" strokeWidth="13" strokeLinecap="round"/>
          <line x1="710" y1="363" x2="710" y2="385" stroke="#6e6e6e" strokeWidth="8" strokeLinecap="round"/>

          {/* Blockage downstream of wye */}
          <g transform="translate(635, 452)">
            <ellipse cx="0" cy="0" rx="24" ry="14" fill="#c45028" opacity="0.2" stroke="#c45028" strokeWidth="2"/>
            <line x1="-10" y1="-7" x2="10" y2="7" stroke="#c45028" strokeWidth="4" strokeLinecap="round"/>
            <line x1="-10" y1="7" x2="10" y2="-7" stroke="#c45028" strokeWidth="4" strokeLinecap="round"/>
            <text x="0" y="-22" textAnchor="middle" fontSize="10" fontWeight="700" fill="#c45028">BLOCKAGE IN</text>
            <text x="0" y="-12" textAnchor="middle" fontSize="10" fontWeight="700" fill="#c45028">MAIN LINE</text>
          </g>

          {/* Treatment plant direction */}
          <text x="800" y="468" fontSize="10" fontWeight="600" fill="#888">To Treatment</text>
          <text x="800" y="480" fontSize="10" fontWeight="600" fill="#888">{'\u2192 Plant'}</text>

          {/* Flow arrows: normal restaurant sewage downhill */}
          <line x1="160" y1="290" x2="320" y2="365" stroke="#8b6914" strokeWidth="2.5" markerEnd="url(#aSew3)" strokeDasharray="6,4"/>
          <text x="210" y="318" textAnchor="middle" fontSize="10" fontWeight="700" fill="#8b6914" transform="rotate(24,210,318)">Sewage flows</text>
          <text x="230" y="333" textAnchor="middle" fontSize="10" fontWeight="700" fill="#8b6914" transform="rotate(24,230,333)">downhill</text>

          {/* REVERSED FLOW — up the wye into the house */}
          <path d="M 520 430 Q 570 408, 625 392 Q 670 378, 705 368" fill="none" stroke="#c45028" strokeWidth="3.5" markerEnd="url(#aRed3)" strokeDasharray="6,3"/>
          <rect x="535" y="375" width="115" height="28" rx="5" fill="#fbe9e7" stroke="#c45028" strokeWidth="1.5"/>
          <text x="593" y="394" textAnchor="middle" fontSize="11" fontWeight="700" fill="#c45028">REVERSED FLOW</text>

          {/* Sewage overflow at house */}
          <g transform="translate(715, 278)">
            <ellipse cx="0" cy="0" rx="20" ry="6" fill="#8b6914" opacity="0.35"/>
            <text x="0" y="-12" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c45028">Sewage overflows</text>
            <text x="0" y="-2" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c45028">from fixtures!</text>
          </g>

          {/* "Whose waste is it?" annotation */}
          <rect x="50" y="500" width="400" height="105" rx="10" fill="#fff4ec" stroke="#c45028" strokeWidth="1.5"/>
          <text x="250" y="524" textAnchor="middle" fontSize="14" fontWeight="700" fill="#c45028">{'The Adjuster\'s Test: "Whose Waste Is It?"'}</text>
          <text x="250" y="544" textAnchor="middle" fontSize="11" fill="#5a3020">If fish guts, restaurant napkins, and menu fragments</text>
          <text x="250" y="560" textAnchor="middle" fontSize="11" fill="#5a3020">{"are coming out of the homeowner's toilet \u2014 that is"}</text>
          <text x="250" y="576" textAnchor="middle" fontSize="11" fill="#5a3020">someone else&apos;s waste. That is a TRUE BACKUP.</text>
          <text x="250" y="596" textAnchor="middle" fontSize="11" fontWeight="700" fill="#c45028">This IS the type of event the backup exclusion targets.</text>

          {/* Normal flow explanation */}
          <rect x="510" y="500" width="380" height="88" rx="10" fill="#fff" stroke="#888" strokeWidth="1"/>
          <text x="700" y="522" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1a2744">Under normal conditions, sewage flows downhill</text>
          <text x="700" y="538" textAnchor="middle" fontSize="11" fill="#555">from both properties through the wye to the</text>
          <text x="700" y="554" textAnchor="middle" fontSize="11" fill="#555">treatment plant. A downstream blockage causes</text>
          <text x="700" y="570" textAnchor="middle" fontSize="11" fill="#555">hydraulic pressure to force sewage backward</text>
          <text x="700" y="586" textAnchor="middle" fontSize="11" fontWeight="700" fill="#c45028">up the wye and into the lower-elevation home.</text>

          {/* COPYRIGHT */}
          <text x="470" y="632" textAnchor="middle" fontSize="9" fill="#aaa">{'\u00A9 2026 Leland Coontz, Licensed Public Adjuster \u2022 All rights reserved'}</text>
        </svg>
        <p className="text-gray-500 text-sm mt-3 italic">
          Figure 3: A true sewer backup. The restaurant at the top of the hill generates sewage that
          flows downhill through the municipal sewer. A blockage downstream of the wye fitting causes
          hydraulic pressure to force sewage backward &mdash; up through the wye and into the
          lower-elevation homeowner&apos;s plumbing. This is sewage from someone else&apos;s property
          flowing the wrong direction. This is what the &quot;backup&quot; exclusion was designed to address.
        </p>
      </div>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">The Adjuster&apos;s Practical Test</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Experienced adjusters have a blunt but effective way of distinguishing a true backup from an
        internal blockage. They ask: <strong>&quot;Whose waste is it?&quot;</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If a homeowner finds fish guts, restaurant napkins, menu fragments, and commercial food waste
        coming out of their toilet or bathtub drain &mdash; waste that clearly did not originate from
        their household &mdash; that is unmistakable evidence of a <em>true sewer backup</em>. Someone
        else&apos;s sewage is flowing the wrong direction through the sewer system and coming up through
        the homeowner&apos;s fixtures.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Compare that to the internal blockage scenario: if a homeowner sees their own household waste
        water &mdash; maybe slightly discolored or soapy &mdash; rising up through the shower drain after
        the toilet is flushed, that is their own water that simply cannot drain past a blockage in
        their own pipes. Nobody else&apos;s waste is involved. That is a stoppage and overflow, not
        a backup.
      </p>

      {/* ================================================================ */}
      {/* SECTION: CASE LAW */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">What the Courts Have Said</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Several court decisions across multiple jurisdictions have addressed this exact distinction.
        While no single case is binding everywhere, together they paint a clear picture: <strong>where
        the blockage is located matters</strong>, and insurers bear the burden of proving the backup
        exclusion applies.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Pichel v. Dryden Mutual Insurance Company (N.Y. App. Div., 3rd Dept. 2014)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the leading case establishing the <strong>&quot;property-line test.&quot;</strong> The
        insured&apos;s apartments sustained water damage when waste water entered through toilets,
        bathtubs, and floor drains. The insurer denied coverage under the exclusion for &quot;water
        which backs up through sewers or drains.&quot;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court held that the policy was <strong>ambiguous</strong> because it did not define
        &quot;sewer,&quot; &quot;drain,&quot; &quot;backup,&quot; or &quot;plumbing system.&quot; The
        court drew a critical distinction: water damage caused by a backup/overflow that originates
        from a pipe or clogged drain located <em>within</em> the insured&apos;s property line comes
        from the insured&apos;s plumbing system and is covered by the policy; conversely, if the cause
        of the backup/overflow is from <em>outside</em> the insured&apos;s property boundaries &mdash;
        such as a clogged municipal sewer &mdash; the sewer or drain exclusion is applicable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Critically, the <strong>insurer failed to present any evidence that the blockage occurred off
        the insured property</strong>, so the exclusion did not apply. This case muddied the waters
        somewhat &mdash; the word &quot;backup&quot; appears throughout the opinion even though the
        court ultimately concluded this was an internal plumbing event, not a true sewer backup.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Cheetham v. Southern Oak Insurance Company (Fla. 3d DCA 2013)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A pipe located on the insured&apos;s property deteriorated and collapsed, forming a blockage
        that caused waste water to come up through drains into the home. The insurer denied coverage
        under the sewer backup exclusion. The Florida court found the loss <strong>was covered</strong>,
        reasoning that the blockage was within the insured&apos;s own plumbing system. The court
        interpreted the sewer backup exclusion to apply <strong>only where the water originates from
        off the insured premises</strong>.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Cameron v. Scottsdale Insurance Company (11th Circuit, 2018)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Eleventh Circuit followed <em>Cheetham</em> at the federal appellate level. A pipe in the
        insured&apos;s plumbing system collapsed due to age, causing water to overflow from a kitchen
        sink drain. The court held the <strong>water backup exclusion did not apply</strong> because
        the loss originated from deterioration within the insured&apos;s own plumbing system.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Porter v. Oklahoma Farm Bureau Mutual Insurance Company (Okla. 2014)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Oklahoma Supreme Court addressed a policy that both covered &quot;accidental discharge or
        overflow of water from within a plumbing system&quot; and excluded &quot;water which backs up
        through sewers or drains.&quot; The court found these provisions <strong>can coexist</strong>:
        on-premises plumbing failures are covered under the accidental discharge provision, while the
        sewer backup exclusion targets off-premises sewer problems.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        A Cautionary California Case: Cardio Diagnostic Imaging, Inc. v. Farmers Insurance Exchange (Cal. Ct. App. 2012)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the main California case to be aware of, and it cuts the other direction. A blockage
        in a sewer line 20&ndash;40 feet from a toilet caused water to overflow. The court read the
        exclusion for &quot;water that backs up or overflows from a sewer, drain or sump&quot; broadly
        and found it <strong>unambiguous</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        However, this case is <strong>distinguishable</strong> in important ways: (1) it involved
        a <em>commercial</em> policy, not a homeowner&apos;s policy; (2) the exclusion language
        differed from typical HO policy wording; and (3) the court did not squarely address the
        on-premises vs. off-premises distinction.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">California&apos;s Doctrinal Framework</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even with <em>Cardio Diagnostic</em> on the books, California&apos;s broader insurance law
        strongly favors policyholders in this type of dispute:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Contra proferentem</strong> &mdash; Ambiguous policy provisions are construed against the insurer and in favor of coverage. (<em>AIU Ins. Co. v. Superior Court</em>, 51 Cal. 3d 807 (1990))</li>
        <li><strong>Reasonable expectations</strong> &mdash; Courts interpret ambiguous provisions &quot;in accord with the objectively reasonable expectations of the insured.&quot; (<em>Bank of the West v. Superior Court</em>, 2 Cal. 4th 1254 (1992))</li>
        <li><strong>Strict construction of exclusions</strong> &mdash; Exclusionary clauses are strictly construed in the insured&apos;s favor. (<em>Montrose Chemical Corp. v. Admiral Ins. Co.</em>, 10 Cal. 4th 645 (1995))</li>
        <li><strong>Burden of proof</strong> &mdash; The insurer bears the burden of proving a policy exclusion applies. If they cannot demonstrate the blockage was in the municipal sewer line rather than the insured&apos;s own plumbing, the exclusion fails.</li>
      </ul>

      {/* ================================================================ */}
      {/* SECTION: FLOOD OVERRIDE */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        An Important Exception: When Flood Coverage Overrides a Backup Exclusion
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is a fascinating wrinkle in backup exclusion law that comes into play when a true sewer
        backup is <em>caused by a flood event</em>, and the property owner has separately purchased
        flood coverage on the same policy.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Bishops, Inc. v. Penn National Insurance Company (Pa. Super. Ct. 2009)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In the aftermath of <strong>Hurricane Ivan</strong>, a business suffered damage when the
        municipal sewer system was overwhelmed by floodwater, causing sewage to back up into the
        property. This was, by any definition, a true sewer backup from an external source.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The policy contained an <strong>anti-concurrent causation (ACC) exclusion</strong> that excluded
        water damage &mdash; including sewer backup &mdash; &quot;regardless of any other cause or event
        that contributes concurrently or in any sequence to the loss.&quot; Under that exclusion alone,
        the claim would have been denied.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>However</strong>, the insured had separately purchased an endorsement that <em>added</em> coverage
        for sewer and drain backup for an additional premium. The endorsement explicitly stated that the
        base policy&apos;s water exclusion &quot;does not apply to this Additional Coverage.&quot;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurer argued that even though the endorsement covered backup, the ACC clause negated it
        because the backup was <em>caused by</em> flood (an excluded peril). The Pennsylvania Superior
        Court <strong>rejected this argument</strong>, finding that no reasonable insured would purchase
        extra sewer backup coverage for an additional premium &quot;in the expectation that its claim
        under that coverage would be denied because the covered cause of loss &mdash; sewer and drain
        backup &mdash; was itself caused by an excluded cause of loss &mdash; flood &mdash; when the
        two would naturally occur together.&quot;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The court called the insurer&apos;s reading of its own policy &quot;a variant of the sleight
        of hand&quot; &mdash; creating the <em>appearance</em> of coverage, collecting a premium for
        it, and then denying the claim when the covered event actually occurred. The <strong>endorsement
        trumped the exclusion</strong>.
      </p>

      <CalloutBox variant="tip" title="The Takeaway">
        <p>
          Even in a true sewer backup situation &mdash; one that would normally be excluded &mdash; if the
          backup was caused by a flood event and the policyholder purchased flood coverage on the same
          policy, there may be an argument that the flood endorsement overrides the backup exclusion. This
          is a complex coverage question that requires analysis by a qualified attorney.
        </p>
      </CalloutBox>

      {/* ================================================================ */}
      {/* SECTION: SLAB-ON-GRADE — "UNDERGROUND" PIPE EXCLUSION           */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        A Related Exclusion Trap: The &quot;Underground Pipe&quot; in a Slab-on-Grade Home
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        While we are discussing how insurance companies misapply exclusions to plumbing losses,
        there is another exclusion that deserves attention &mdash; and it is currently the subject of
        significant litigation in California. Many homeowner&apos;s policies exclude damage from
        &quot;water below the surface of the ground&quot; or from &quot;underground water pipes.&quot;
        When a pipe breaks under or within a concrete slab foundation, some insurers &mdash; most
        notably State Farm &mdash; have applied this exclusion to deny the claim. The argument is that
        the pipe is &quot;underground&quot; because it is in the dirt.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        That argument is wrong, and here is why.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">How Slab-on-Grade Construction Works</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In slab-on-grade construction &mdash; the most common foundation type in California and
        throughout the Sun Belt &mdash; the builder does not simply pour concrete on the natural
        ground. The process involves several steps:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
        <li>The natural grade is <strong>excavated and leveled</strong>.</li>
        <li>
          <strong>Engineered fill dirt</strong> is brought in, often from another location, and
          compacted in layers. This fill is specified on the building plans, may be inspected by a
          soils engineer, and is a <strong>structural building element</strong> &mdash; not natural earth.
        </li>
        <li>Plumbing pipes are laid on top of or within this fill, following the building plans.</li>
        <li>The concrete slab is poured over the pipes and fill.</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        The result is that the pipes &mdash; and the fill dirt they sit in &mdash; are <strong>above
        the natural grade</strong>. If you look at a typical slab-on-grade home, the finished floor sits
        well above the driveway, which sits above the sidewalk, which sits above the street. The entire
        foundation pad is elevated on engineered fill. The pipe under the slab is not &quot;underground&quot;
        in any meaningful sense &mdash; it is within a constructed building assembly, above the natural
        grade of the land.
      </p>

      {/* DIAGRAM 4: SLAB-ON-GRADE — PIPE IN SLAB vs. PIPE UNDER SLAB */}
      <div className="my-8 text-center">
        <svg viewBox="0 0 960 620" xmlns="http://www.w3.org/2000/svg" className="max-w-full h-auto border border-gray-200 rounded-lg shadow-md" style={{ fontFamily: "'Source Sans Pro', 'Segoe UI', sans-serif" }}>
          <defs>
            <linearGradient id="concreteGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c0bab0"/>
              <stop offset="100%" stopColor="#a8a298"/>
            </linearGradient>
            <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c4a87a"/>
              <stop offset="100%" stopColor="#a88a60"/>
            </linearGradient>
            <linearGradient id="naturalGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8a7a5e"/>
              <stop offset="100%" stopColor="#6a5c44"/>
            </linearGradient>
            <linearGradient id="slabPipe" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8a5c2a"/>
              <stop offset="50%" stopColor="#b87333"/>
              <stop offset="100%" stopColor="#8a5c2a"/>
            </linearGradient>
            <pattern id="fillDots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill="#b89868"/>
              <circle cx="3" cy="3" r="1" fill="#a08050" opacity="0.5"/>
              <circle cx="8" cy="7" r="1.2" fill="#a08050" opacity="0.4"/>
            </pattern>
            <pattern id="naturalDots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
              <rect width="12" height="12" fill="#7a6a50"/>
              <circle cx="4" cy="4" r="1.5" fill="#6a5a40" opacity="0.5"/>
              <circle cx="10" cy="9" r="1" fill="#6a5a40" opacity="0.4"/>
            </pattern>
            <pattern id="grassSlab" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
              <rect width="14" height="14" fill="#7a9a68"/>
              <line x1="4" y1="14" x2="5" y2="7" stroke="#8aaa78" strokeWidth="1"/>
              <line x1="10" y1="14" x2="9" y2="8" stroke="#8aaa78" strokeWidth="1"/>
            </pattern>
            <filter id="sh4" x="-5%" y="-5%" width="115%" height="115%">
              <feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.1"/>
            </filter>
            <marker id="aRed4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#c45028"/>
            </marker>
            <marker id="aDim" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#666"/>
            </marker>
            <marker id="aDimR" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M 10 0 L 0 5 L 10 10 z" fill="#666"/>
            </marker>
          </defs>

          {/* Title bar */}
          <rect x="0" y="0" width="960" height="55" fill="#1a2744" rx="10"/>
          <text x="480" y="25" textAnchor="middle" fontSize="17" fontWeight="700" fill="#fff">SLAB-ON-GRADE CONSTRUCTION — PIPE LOCATIONS</text>
          <text x="480" y="44" textAnchor="middle" fontSize="12" fill="#8aa4c8">{'Pipes within and beneath the slab are above the natural grade \u2014 they are not "underground"'}</text>

          {/* CENTER DIVIDER */}
          <line x1="480" y1="60" x2="480" y2="575" stroke="#ccc" strokeWidth="1.5" strokeDasharray="8,4"/>

          {/* ===== LEFT SIDE: PIPE EMBEDDED IN THE SLAB ===== */}
          <text x="240" y="80" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1a2744">SCENARIO A: Pipe Embedded IN the Slab</text>

          {/* Street level reference (left) */}
          <rect x="20" y="360" width="100" height="18" fill="#888" rx="2" stroke="#666" strokeWidth="1"/>
          <text x="70" y="373" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600">STREET</text>

          {/* Sidewalk (left) */}
          <rect x="125" y="350" width="55" height="15" fill="#b0b0b0" rx="1" stroke="#999" strokeWidth="1"/>
          <text x="153" y="362" textAnchor="middle" fontSize="7" fill="#555" fontWeight="600">SIDEWALK</text>

          {/* Driveway (left) sloping up */}
          <polygon points="185,350 185,365 260,340 260,330" fill="#a0a0a0" stroke="#888" strokeWidth="1"/>
          <text x="222" y="356" textAnchor="middle" fontSize="7" fill="#555" fontWeight="600">DRIVEWAY</text>

          {/* Natural grade line (left) */}
          <line x1="20" y1="378" x2="460" y2="378" stroke="#5a4a30" strokeWidth="2" strokeDasharray="8,4"/>
          <text x="400" y="394" textAnchor="end" fontSize="10" fill="#5a4a30" fontWeight="700">{'\u25BC NATURAL GRADE'}</text>

          {/* Fill dirt (left) — above natural grade */}
          <rect x="200" y="275" width="240" height="103" fill="url(#fillDots)" stroke="#b89868" strokeWidth="1"/>
          <text x="320" y="340" textAnchor="middle" fontSize="11" fill="#7a6040" fontWeight="700">ENGINEERED</text>
          <text x="320" y="355" textAnchor="middle" fontSize="11" fill="#7a6040" fontWeight="700">FILL DIRT</text>
          <text x="320" y="370" textAnchor="middle" fontSize="9" fill="#8a7050">(compacted, brought</text>
          <text x="320" y="381" textAnchor="middle" fontSize="9" fill="#8a7050">in, on building plans)</text>

          {/* Concrete slab (left) */}
          <rect x="200" y="248" width="240" height="30" fill="url(#concreteGrad)" stroke="#908880" strokeWidth="1.5" filter="url(#sh4)"/>
          <text x="320" y="268" textAnchor="middle" fontSize="11" fill="#555" fontWeight="700">CONCRETE SLAB (4-6&quot;)</text>

          {/* PIPE EMBEDDED IN THE SLAB (left) */}
          <rect x="270" y="255" width="80" height="10" fill="url(#slabPipe)" rx="3" stroke="#7a5020" strokeWidth="1.5"/>
          <line x1="310" y1="252" x2="310" y2="225" stroke="#b87333" strokeWidth="1.5"/>
          <rect x="255" y="200" width="110" height="28" rx="5" fill="#fff4e8" stroke="#b87333" strokeWidth="1.5"/>
          <text x="310" y="217" textAnchor="middle" fontSize="10" fontWeight="700" fill="#8a5c2a">PIPE IN SLAB</text>

          {/* Floor finish (left) */}
          <rect x="200" y="240" width="240" height="10" fill="#e0d0c0" stroke="#c8b8a0" strokeWidth="0.5"/>
          <text x="320" y="237" textAnchor="middle" fontSize="8" fill="#888">FLOOR FINISH</text>

          {/* Natural ground below (left) */}
          <rect x="20" y="378" width="460" height="110" fill="url(#naturalDots)" stroke="none"/>
          <text x="110" y="430" textAnchor="middle" fontSize="10" fill="#c0b090" fontWeight="600">NATURAL SOIL</text>
          <text x="110" y="445" textAnchor="middle" fontSize="10" fill="#c0b090" fontWeight="600">(UNDISTURBED)</text>

          {/* Grass on natural grade (left of house) */}
          <rect x="20" y="370" width="180" height="10" fill="url(#grassSlab)"/>

          {/* Dimension lines showing "above grade" (left) */}
          <line x1="185" y1="260" x2="185" y2="378" stroke="#2e7d32" strokeWidth="1.5" markerStart="url(#aDimR)" markerEnd="url(#aDim)"/>
          <rect x="140" y="300" width="50" height="38" rx="4" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="1"/>
          <text x="165" y="314" textAnchor="middle" fontSize="9" fill="#2e7d32" fontWeight="700">ABOVE</text>
          <text x="165" y="326" textAnchor="middle" fontSize="9" fill="#2e7d32" fontWeight="700">GRADE</text>
          <text x="165" y="335" textAnchor="middle" fontSize="8" fill="#2e7d32">~12-24&quot;</text>

          {/* Coverage annotation (left) */}
          <rect x="220" y="120" width="200" height="60" rx="8" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="1.5"/>
          <text x="320" y="140" textAnchor="middle" fontSize="11" fontWeight="700" fill="#2e7d32">Part of the building structure</text>
          <text x="320" y="156" textAnchor="middle" fontSize="10" fill="#2e7d32">Embedded in the slab itself</text>
          <text x="320" y="172" textAnchor="middle" fontSize="11" fontWeight="700" fill="#2e7d32">{`NOT "underground" \u2713`}</text>

          {/* ===== RIGHT SIDE: PIPE DIRECTLY BENEATH THE SLAB ===== */}
          <text x="720" y="80" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1a2744">SCENARIO B: Pipe Beneath the Slab in Fill</text>

          {/* Street level reference (right) */}
          <rect x="500" y="360" width="100" height="18" fill="#888" rx="2" stroke="#666" strokeWidth="1"/>
          <text x="550" y="373" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600">STREET</text>

          {/* Sidewalk (right) */}
          <rect x="605" y="350" width="55" height="15" fill="#b0b0b0" rx="1" stroke="#999" strokeWidth="1"/>
          <text x="633" y="362" textAnchor="middle" fontSize="7" fill="#555" fontWeight="600">SIDEWALK</text>

          {/* Driveway (right) sloping up */}
          <polygon points="665,350 665,365 740,340 740,330" fill="#a0a0a0" stroke="#888" strokeWidth="1"/>
          <text x="702" y="356" textAnchor="middle" fontSize="7" fill="#555" fontWeight="600">DRIVEWAY</text>

          {/* Natural grade line (right) */}
          <line x1="500" y1="378" x2="940" y2="378" stroke="#5a4a30" strokeWidth="2" strokeDasharray="8,4"/>
          <text x="880" y="394" textAnchor="end" fontSize="10" fill="#5a4a30" fontWeight="700">{'\u25BC NATURAL GRADE'}</text>

          {/* Fill dirt (right) */}
          <rect x="680" y="275" width="240" height="103" fill="url(#fillDots)" stroke="#b89868" strokeWidth="1"/>
          <text x="800" y="325" textAnchor="middle" fontSize="11" fill="#7a6040" fontWeight="700">ENGINEERED</text>
          <text x="800" y="340" textAnchor="middle" fontSize="11" fill="#7a6040" fontWeight="700">FILL DIRT</text>

          {/* Concrete slab (right) */}
          <rect x="680" y="248" width="240" height="30" fill="url(#concreteGrad)" stroke="#908880" strokeWidth="1.5" filter="url(#sh4)"/>
          <text x="800" y="268" textAnchor="middle" fontSize="11" fill="#555" fontWeight="700">CONCRETE SLAB (4-6&quot;)</text>

          {/* PIPE BENEATH THE SLAB in fill dirt (right) */}
          <rect x="750" y="295" width="80" height="10" fill="url(#slabPipe)" rx="3" stroke="#7a5020" strokeWidth="1.5"/>
          <line x1="790" y1="295" x2="790" y2="225" stroke="#b87333" strokeWidth="1.5"/>
          <rect x="725" y="200" width="130" height="28" rx="5" fill="#fff4e8" stroke="#b87333" strokeWidth="1.5"/>
          <text x="790" y="217" textAnchor="middle" fontSize="10" fontWeight="700" fill="#8a5c2a">PIPE UNDER SLAB</text>
          <text x="790" y="315" textAnchor="middle" fontSize="8" fill="#8a5c2a">(in compacted fill)</text>

          {/* Floor finish (right) */}
          <rect x="680" y="240" width="240" height="10" fill="#e0d0c0" stroke="#c8b8a0" strokeWidth="0.5"/>
          <text x="800" y="237" textAnchor="middle" fontSize="8" fill="#888">FLOOR FINISH</text>

          {/* Natural ground below (right) */}
          <rect x="500" y="378" width="440" height="110" fill="url(#naturalDots)" stroke="none"/>
          <text x="590" y="430" textAnchor="middle" fontSize="10" fill="#c0b090" fontWeight="600">NATURAL SOIL</text>
          <text x="590" y="445" textAnchor="middle" fontSize="10" fill="#c0b090" fontWeight="600">(UNDISTURBED)</text>

          {/* Grass on natural grade (right of house) */}
          <rect x="500" y="370" width="180" height="10" fill="url(#grassSlab)"/>

          {/* Dimension: pipe is ABOVE natural grade (right) */}
          <line x1="665" y1="300" x2="665" y2="378" stroke="#2e7d32" strokeWidth="1.5" markerStart="url(#aDimR)" markerEnd="url(#aDim)"/>
          <rect x="613" y="325" width="58" height="38" rx="4" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="1"/>
          <text x="642" y="339" textAnchor="middle" fontSize="9" fill="#2e7d32" fontWeight="700">STILL</text>
          <text x="642" y="351" textAnchor="middle" fontSize="9" fill="#2e7d32" fontWeight="700">ABOVE</text>
          <text x="642" y="361" textAnchor="middle" fontSize="8" fill="#2e7d32">GRADE</text>

          {/* Coverage annotation (right) */}
          <rect x="700" y="120" width="200" height="60" rx="8" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="1.5"/>
          <text x="800" y="140" textAnchor="middle" fontSize="11" fontWeight="700" fill="#2e7d32">In fill dirt — a building element</text>
          <text x="800" y="156" textAnchor="middle" fontSize="10" fill="#2e7d32">Above natural grade, not in ground</text>
          <text x="800" y="172" textAnchor="middle" fontSize="11" fontWeight="700" fill="#2e7d32">{`NOT "underground" \u2713`}</text>

          {/* KEY POINT BOX at bottom */}
          <rect x="60" y="500" width="840" height="58" rx="8" fill="#fff4ec" stroke="#c45028" strokeWidth="1.5"/>
          <text x="480" y="520" textAnchor="middle" fontSize="12" fontWeight="700" fill="#c45028">{"In both scenarios, the pipe is above the natural grade, within the building's construction envelope."}</text>
          <text x="480" y="538" textAnchor="middle" fontSize="12" fontWeight="700" fill="#c45028">{'"In the dirt" is not the same as "underground." The fill dirt is a building element, not natural ground.'}</text>
          <text x="480" y="554" textAnchor="middle" fontSize="11" fill="#c45028">{'The "underground pipe" or "water below the surface of the ground" exclusion should not apply.'}</text>

          {/* COPYRIGHT */}
          <text x="480" y="610" textAnchor="middle" fontSize="9" fill="#aaa">{'\u00A9 2026 Leland Coontz, Licensed Public Adjuster \u2022 All rights reserved'}</text>
        </svg>
        <p className="text-gray-500 text-sm mt-3 italic">
          Figure 4: Slab-on-grade construction showing two common pipe locations. In Scenario A, the pipe
          is embedded directly within the concrete slab. In Scenario B, the pipe runs through the compacted
          fill dirt immediately beneath the slab. In both cases, the pipe is above the natural grade and
          within the building&apos;s construction assembly. The engineered fill is a structural building
          element &mdash; not natural &quot;ground.&quot; Neither pipe is &quot;underground&quot; in any
          meaningful sense of the word.
        </p>
      </div>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Why &quot;In the Dirt&quot; Is Not the Same as &quot;Underground&quot;
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The word &quot;underground&quot; is not defined in most homeowner&apos;s policies. Insurance
        companies that deny slab pipe claims argue that any pipe in soil is &quot;underground.&quot;
        But that ignores the physical reality of how these homes are built:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          The pipe sits in <strong>engineered fill</strong>, not in the natural earth. This fill was
          brought to the site, placed according to building plans, compacted under engineering
          supervision, and inspected. It is a building component.
        </li>
        <li>
          The pipe is <strong>above the natural grade</strong>. If you were standing in the street
          looking at the house, the foundation pad &mdash; including the fill and the pipes within
          it &mdash; sits <em>higher</em> than the street, the sidewalk, and the surrounding natural
          grade. It is physically above ground level.
        </li>
        <li>
          The pipe is part of the <strong>building&apos;s plumbing system</strong>. It was installed
          during construction, appears on the building plans, and was inspected by the building
          department. It is no different in function from the pipe running through the wall to the
          second floor.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even if some well-meaning people might use the word &quot;underground&quot; loosely to describe
        a pipe in dirt, other equally reasonable people would say a pipe above the natural grade in
        engineered fill is clearly <em>not</em> underground. That disagreement &mdash; between two
        reasonable interpretations &mdash; creates at minimum an <strong>ambiguity</strong> in the
        policy. And under the long-established <strong>contra proferentem</strong> rule, any ambiguity
        in an insurance policy is resolved in favor of the insured.
      </p>

      <CalloutBox variant="legal" title="Contra Proferentem">
        <p>
          <strong>Contra proferentem</strong> is the legal principle that ambiguous contract terms are
          construed against the drafter. Insurance policies are contracts of adhesion &mdash; boilerplate
          language drafted by the insurance company with the benefit of their attorneys. The policyholder
          had no ability to negotiate the wording. When a reasonable person could interpret
          &quot;underground&quot; more than one way, the court must adopt the interpretation that favors
          coverage.
        </p>
      </CalloutBox>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">What the Courts and Industry Have Said</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is not a theoretical argument. It is actively being litigated &mdash; with significant
        results for policyholders:
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Varela v. State Farm General Insurance Co. (E.D. Cal. 2021)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A California federal court <strong>denied State Farm&apos;s motion for summary judgment</strong>,
        finding that water escaping from a failed plumbing line does not qualify as &quot;water below the
        surface of the ground&quot; under the policy exclusion. The case later settled &mdash; but the
        ruling stands as published authority that the exclusion does not apply to domestic plumbing pipe
        failures under a slab.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        FC&amp;S / National Underwriter Industry Interpretation
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The FC&amp;S service &mdash; the insurance industry&apos;s own authoritative coverage
        interpretation resource &mdash; has consistently taken the position that <strong>&quot;water
        below the ground&quot; is meant to exclude subterranean water (natural groundwater), not water
        from a broken pipe</strong> within the building&apos;s plumbing system. FC&amp;S further notes
        that the exclusion was only intended to apply to domestic plumbing water when the policy contains
        specific language like &quot;regardless of the source of the water&quot; &mdash; without that
        language, the exclusion targets groundwater only.
      </p>

      <h3 className="text-lg font-bold text-[#1F3964] mb-3">
        Khoury v. State Farm (San Diego County Jury Verdict)
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A copper water supply line beneath the slab burst. State Farm denied the claim using the
        &quot;below the surface of the ground&quot; exclusion. A California jury <strong>awarded the
        Khourys $1,139,500</strong> &mdash; including $500,000 in emotional distress damages for bad
        faith &mdash; versus State Farm&apos;s pre-trial offer of just $20,000. The verdict demonstrates
        that juries see through the misapplication of this exclusion.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        It is also worth noting that a class of California homeowners has filed suit alleging that State
        Farm maintained a systematic &quot;water protocol&quot; for over a decade, designed to deny
        thousands of slab pipe failure claims using this exclusion &mdash; even after juries repeatedly
        found the denial to be bad faith. (<em>Hernandez et al. v. State Farm General Insurance
        Co.</em>, No. 5:26-cv-01831, N.D. Cal.)
      </p>

      <CalloutBox variant="warning" title="Adverse Authority">
        <p>
          There is adverse authority on this issue. The Tenth Circuit, applying Kansas law, held in{' '}
          <em>Auto-Owners Insurance Co. v. Excelsior Westbrook III, LLC</em> (2024) that a similar
          water exclusion was unambiguous and barred coverage for a pipe break beneath a building.
          However, Kansas has significantly weaker pro-policyholder interpretive rules than California.
          California&apos;s strict construction of exclusions, reasonable expectations doctrine, and
          contra proferentem rule provide a much stronger framework for this argument. As always, the
          specific language of your policy controls, and you should consult an attorney experienced in
          property insurance coverage in your state.
        </p>
      </CalloutBox>

      {/* ================================================================ */}
      {/* SECTION: COMPARISON TABLE */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">
        At a Glance: Blockage &amp; Overflow vs. Sewer Backup
      </h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#1F3964] text-white">
              <th className="p-3 text-left font-semibold">&nbsp;</th>
              <th className="p-3 text-left font-semibold">Internal Blockage &amp; Overflow</th>
              <th className="p-3 text-left font-semibold">True Sewer Backup</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b">
              <td className="p-3 font-semibold">Where is the blockage?</td>
              <td className="p-3">Inside the property line, in the home&apos;s own plumbing</td>
              <td className="p-3">Outside the property line, in the municipal sewer or another property&apos;s system</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="p-3 font-semibold">Where does the water come from?</td>
              <td className="p-3">The home&apos;s own water/waste that cannot drain</td>
              <td className="p-3">External sewage forced into the home</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-semibold">Mechanism</td>
              <td className="p-3">Water fills behind blockage, overflows lowest fixture</td>
              <td className="p-3">External pressure forces sewage in through sewer connection</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="p-3 font-semibold">Common policy treatment</td>
              <td className="p-3">Covered as sudden/accidental loss from plumbing system</td>
              <td className="p-3">Often excluded unless backup endorsement purchased</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 font-semibold">Correct terminology</td>
              <td className="p-3">Blockage, stoppage, overflow, fill-up</td>
              <td className="p-3">Sewer backup</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ================================================================ */}
      {/* SECTION: PRACTICAL TAKEAWAYS */}
      {/* ================================================================ */}

      <h2 className="text-2xl font-bold text-[#1F3964] mb-4">Practical Takeaways</h2>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
        <li>
          <strong>Be precise with your language.</strong> When reporting a loss to your insurance company,
          describe what happened mechanically: &quot;We had a blockage in our drain pipe that caused water
          to overflow from the shower drain.&quot; Do not say &quot;the sewer backed up.&quot;
        </li>
        <li>
          <strong>Make sure the plumber&apos;s report is accurate.</strong> Plumbers sometimes use
          &quot;backup&quot; casually. Ask them to describe the actual condition: where the blockage
          was found, what caused it, and how the water entered the living space. &quot;Cleared blockage
          in 3-inch drain line in first-floor wall cavity&quot; is far more useful than &quot;cleared
          sewer backup.&quot;
        </li>
        <li>
          <strong>Read your policy&apos;s backup exclusion carefully.</strong> Not all policies use the
          same language. Some exclude &quot;water that backs up through sewers or drains&quot;; others
          exclude &quot;water that backs up from a sewer or drain.&quot; The preposition matters.
        </li>
        <li>
          <strong>Know where the blockage is.</strong> If the plumber can confirm the blockage is within
          your property line &mdash; in your drain pipes, within your walls &mdash; that fact alone may
          defeat the backup exclusion under the weight of authority from multiple jurisdictions.
        </li>
        <li>
          <strong>If your claim is denied, do not accept it at face value.</strong> An insurer who
          denies a claim under the backup exclusion bears the burden of proving that exclusion applies.
          If they cannot prove the blockage was outside your property line, the denial may not hold up.
        </li>
      </ol>

      <CalloutBox variant="legal" title="Disclaimer">
        <p>
          This article is for <strong>educational and informational purposes only</strong>. It is not legal
          advice, and it should not be relied upon as legal advice. The case law discussed above is drawn
          from multiple jurisdictions &mdash; New York, Florida, Pennsylvania, Oklahoma, California, and
          others. Court decisions in one state are not binding in another. Every insurance policy is different,
          and the specific language of <em>your</em> policy controls.
        </p>
        <p className="mt-2">
          <strong>For legal advice about a coverage dispute, consult with an attorney who is experienced in
          property insurance cases within your state.</strong>
        </p>
        <p className="mt-2">
          What this article <em>does</em> reflect is the traditional understanding among experienced insurance
          adjusters: a blockage in the insured&apos;s own plumbing that causes water to overflow from fixtures
          is not a &quot;sewer backup&quot; &mdash; it is a stoppage and overflow, and it has historically been
          adjusted as a covered sudden and accidental loss under standard homeowner&apos;s policies.
        </p>
      </CalloutBox>

      <p className="text-gray-700 leading-relaxed mb-4">
        For more on water damage claims, see our{' '}
        <Link href="/resources/water-damage-claims" className="text-blue-700 underline hover:text-blue-900">
          Water Damage Insurance Claims guide
        </Link>. If your insurer has denied a plumbing claim using the backup exclusion, a{' '}
        <Link href="/resources/public-adjuster" className="text-blue-700 underline hover:text-blue-900">
          public adjuster
        </Link>{' '}or an experienced insurance coverage attorney can evaluate the specific facts and policy language.
      </p>
    </>
  )
}
