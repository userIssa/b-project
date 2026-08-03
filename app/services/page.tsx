import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

function DiagArrow({ color = "#111111" }: { color?: string }) {
  return (
    <div className="w-10 h-10 my-4">
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="4,36 4,4 36,4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="5" y1="35" x2="35" y2="5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

const servicesList = [
  {
    num: "01",
    title: "Industrial Procurement & Strategic Sourcing",
    description: "End-to-end equipment sourcing directly from accredited OEMs and global manufacturers for industrial plants and energy facilities.",
    features: [
      "Mechanical Equipment, Pumps & Compressors",
      "Valves & Actuators, Pipes & Fittings",
      "Structural Steel & Industrial Consumables",
      "Instrumentation, Electrical & Rotating Equipment",
    ],
  },
  {
    num: "02",
    title: "Oil & Gas Procurement Support",
    description: "Specialized technical sourcing for upstream production facilities, midstream pipelines, downstream refineries, and offshore assets.",
    features: [
      "Shutdown Procurement & Expediting",
      "Pipeline Materials & Process Equipment",
      "Vendor Identification & Technical Sourcing",
      "Production Support Materials & Spare Parts",
    ],
  },
  {
    num: "03",
    title: "Government Procurement",
    description: "Turnkey procurement solutions for Government Ministries, Departments, and Agencies (MDAs), healthcare facilities, and educational institutions.",
    features: [
      "Water Supply Systems & Rural Electrification",
      "Solar Street Lighting & Utility Equipment",
      "Healthcare & Educational Supplies",
      "ICT Infrastructure & Security Equipment",
    ],
  },
  {
    num: "04",
    title: "Construction & Infrastructure Support",
    description: "Bulk supply of heavy building materials and civil engineering supplies for major infrastructural developments.",
    features: [
      "Cement, Steel Products & Aggregates",
      "Roofing Systems & Concrete Products",
      "Civil Engineering Materials",
      "Heavy Equipment & Road Construction Supplies",
    ],
  },
  {
    num: "05",
    title: "Marine & Offshore Supply",
    description: "Comprehensive offshore vessel consumables, marine hardware, and safety equipment tailored for offshore oilfields and marine ports.",
    features: [
      "Offshore Consumables & Vessel Supplies",
      "Mooring, Deck & Marine Safety Equipment",
      "Navigation Equipment & Ship Spares",
      "Terminal Support Materials",
    ],
  },
  {
    num: "06",
    title: "Industrial Safety & HSE Solutions",
    description: "Certified safety equipment and environmental hazard protection systems to ensure total workplace compliance.",
    features: [
      "Personal Protective Equipment (PPE)",
      "Fire & Gas Detection Systems",
      "Rescue Equipment & Spill Response Kits",
      "Industrial Safety Signage & Auditing",
    ],
  },
  {
    num: "07",
    title: "Logistics & Equipment Support",
    description: "Integrated logistics support, heavy machinery leasing, customs clearance, and material handling across Nigeria.",
    features: [
      "Heavy Equipment Leasing & Haulage",
      "Freight Forwarding & Customs Clearance",
      "Warehousing & Material Handling",
      "Fleet Support Services",
    ],
  },
  {
    num: "08",
    title: "Renewable Energy Solutions",
    description: "In strategic partnership with Kha-Riz Energy, delivering commercial solar EPC, EV mobility, and sustainable power infrastructure.",
    features: [
      "Commercial & Industrial Solar Plants",
      "Battery Energy Storage Systems (BESS)",
      "EV Vehicles & Charging Infrastructure",
      "Energy Audits & Facility Decarbonization",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F4F1] text-[#111111]">

      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-24 bg-[#EEECEA] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-neutral-500">
                Our Capabilities
              </p>
              <DiagArrow />
            </div>
            <div className="lg:col-span-8 space-y-6">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.03]">
                Comprehensive procurement, engineering support, and sustainable energy solutions
              </h1>
              <p className="text-neutral-500 text-lg font-sans leading-relaxed max-w-2xl">
                Delivering OEM equipment, oilfield supplies, government MDA solutions, and renewable energy systems designed to optimize operational efficiency and minimize project risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID — royal blue gradient background, 3-col tiles */}
      <section className="bg-gradient-to-br from-[#0B192C] via-[#1E3A8A] to-[#1D4ED8]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-white/20">
          {servicesList.map((service) => (
            <div
              key={service.num}
              className="border border-white/20 p-10 hover:bg-white/10 transition-colors group"
            >
              <p className="font-serif text-4xl font-bold text-blue-300/40 mb-4">{service.num}.</p>
              <h3 className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-white mb-4 leading-snug">
                {service.title}
              </h3>
              <p className="text-blue-100/80 text-sm font-sans leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 border-t border-white/20 pt-4">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-blue-100/70 font-sans">
                    <Check className="w-3.5 h-3.5 text-white/70 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-block text-xs uppercase tracking-widest font-bold text-white border-b border-white/40 hover:border-white transition-colors pb-0.5"
                >
                  Request Quote →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BRAND QUOTE BANNER */}
      <section className="relative py-28 bg-[#111111] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src="/images/hero_canyon_bridge.png"
            alt="B-Projects Industrial Background"
            fill
            className="object-cover filter contrast-150 grayscale"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8">
          <span className="font-serif text-7xl text-[#C59A3F] leading-none select-none block">&ldquo;</span>
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-relaxed tracking-tight italic">
            Quality procurement and dependable project support are the foundations of industrial execution and national value creation.
          </blockquote>
          <p className="text-xs uppercase tracking-[0.3em] font-sans font-bold text-[#C59A3F]">
            — B-PROJECTS VENTURES LIMITED
          </p>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 bg-[#F5F4F1] text-center border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B192C]">
            Need OEM technical sourcing or project support?
          </h2>
          <p className="text-neutral-500 text-sm font-sans max-w-xl mx-auto">
            Our procurement engineers are ready to analyze your bill of quantities (BOQ) and RFQ specifications.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#C59A3F] text-white hover:bg-[#A67C1E] transition-colors text-xs uppercase tracking-widest font-bold shadow-lg"
          >
            Get in Touch Today
          </Link>
        </div>
      </section>

    </div>
  );
}
