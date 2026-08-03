import Image from "next/image";
import Link from "next/link";
import HeroForm from "@/components/HeroForm";
import ContactForm from "@/components/ContactForm";
import {
  Factory, Layers, Building2, HardHat,
  Anchor, ShieldCheck, Truck, Sun,
  Check, CheckCircle2, MapPin, Phone, Mail, Clock,
} from "lucide-react";

// ──────────────────────────────────────────────
// Shared diagonal arrow icon (EGK/Wix style)
// ──────────────────────────────────────────────
function DiagArrow({ color = "#111111" }: { color?: string }) {
  return (
    <div className="w-10 h-10 my-4">
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="4,36 4,4 36,4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="5" y1="35" x2="35" y2="5" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// ──────────────────────────────────────────────
// Services data
// ──────────────────────────────────────────────
const servicesList = [
  { Icon: Factory,    label: "Industrial Procurement",  desc: "OEM sourcing for pumps, valves, compressors, pipes, structural steel, and spare parts.", features: ["Mechanical Equipment & Pumps", "Valves & Actuators", "Structural Steel & Consumables", "Instrumentation & Electrical"] },
  { Icon: Layers,     label: "Oil & Gas Support",       desc: "Shutdown procurement, pipeline materials, technical sourcing, and expediting services.", features: ["Shutdown Procurement & Expediting", "Pipeline Materials & Process Equipment", "Vendor Identification", "Production Spare Parts"] },
  { Icon: Building2,  label: "Government Procurement",  desc: "Supplies for MDAs, healthcare facilities, rural electrification, and ICT infrastructure.", features: ["Water Supply & Rural Electrification", "Solar Street Lighting", "Healthcare & Educational Supplies", "ICT & Security Equipment"] },
  { Icon: HardHat,    label: "Construction Materials",  desc: "Cement, structural steel, roofing systems, heavy equipment, and civil engineering supplies.", features: ["Cement, Steel & Aggregates", "Roofing Systems", "Civil Engineering Materials", "Heavy Equipment Leasing"] },
  { Icon: Anchor,     label: "Marine & Offshore",       desc: "Offshore consumables, mooring gear, vessel supplies, marine safety, and navigation equipment.", features: ["Offshore Consumables & Vessel Supplies", "Mooring & Marine Safety", "Navigation Equipment", "Terminal Support"] },
  { Icon: ShieldCheck,label: "Safety & HSE Solutions",  desc: "Industrial PPE, fire protection systems, gas detection equipment, and spill response gear.", features: ["Personal Protective Equipment", "Fire & Gas Detection", "Rescue & Spill Response Kits", "Safety Auditing"] },
  { Icon: Truck,      label: "Logistics & Leasing",     desc: "Heavy equipment leasing, haulage, customs clearance, warehousing, and freight forwarding.", features: ["Heavy Equipment Leasing & Haulage", "Freight Forwarding", "Warehousing & Material Handling", "Fleet Support"] },
  { Icon: Sun,        label: "Renewable Energy",        desc: "Commercial solar EPC, battery storage, EV supply, and energy audits (with Kha-Riz Energy).", features: ["Commercial & Industrial Solar Plants", "Battery Energy Storage (BESS)", "EV Vehicles & Charging", "Energy Audits"] },
];

// ──────────────────────────────────────────────
// Projects data
// ──────────────────────────────────────────────
const featuredProjects = [
  { title: "Offshore Pipeline Valves & Actuators",       location: "Niger Delta, Nigeria",            cat: "Oil & Gas",       img: "/images/hero_canyon_bridge.png",  desc: "Turnkey procurement of API 6D subsea ball valves and automated actuators for offshore production platform." },
  { title: "Commercial Solar & Hybrid Power Plant",      location: "Lagos Industrial Zone, Nigeria",  cat: "Renewables",      img: "/images/mollins_museum.png",      desc: "In partnership with Kha-Riz Energy, EPC deployment of 1.5MW commercial solar plant with battery storage." },
  { title: "Rural Electrification & Solar Lighting",     location: "North-Central MDAs, Nigeria",     cat: "Government",      img: "/images/hillway_interchange.png", desc: "Supply and installation of 2,500 integrated solar street lighting units across public utility corridors." },
  { title: "Deep-Water Dock Mooring & Vessel Supplies",  location: "Bonny Island Terminal, Nigeria",  cat: "Marine",          img: "/images/notting_harbor.png",      desc: "Supply of heavy offshore mooring equipment, marine safety gear, and vessel replacement spares." },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ═══════════════════════════════════════════
          §1  HERO
      ═══════════════════════════════════════════ */}
      <section id="home" className="relative min-h-screen flex flex-col bg-black overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_canyon_bridge.png"
            alt="B-Projects Ventures — Industrial Project Support"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-50 filter contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
        </div>

        {/* Heading */}
        <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-6 sm:px-8 pt-28 pb-16">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] font-sans font-bold text-white/70">
              Helping you build a better tomorrow
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.03]">
              B-Projects Ventures Limited
            </h1>
            <p className="text-white/60 text-base font-sans max-w-xl leading-relaxed">
              Nigerian indigenous procurement, industrial supply, project support, and engineering services — bridging project owners, EPC contractors, and world-class OEMs.
            </p>
            <div className="flex gap-4 flex-wrap pt-2">
              <a href="#services" className="px-7 py-3.5 bg-[#a05c1e] text-white hover:bg-[#884b16] transition-colors text-xs uppercase tracking-widest font-bold">
                Our Services
              </a>
              <a href="#about" className="px-7 py-3.5 border border-white text-white hover:bg-white hover:text-[#111111] transition-colors text-xs uppercase tracking-widest font-bold">
                About Us
              </a>
            </div>
          </div>
        </div>

        {/* Amber form panel — bottom right */}
        <div className="relative z-10 flex justify-end max-w-7xl mx-auto w-full px-6 sm:px-8 pb-0">
          <div className="w-full md:max-w-md lg:max-w-lg">
            <HeroForm />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          §2  ABOUT
      ═══════════════════════════════════════════ */}
      <section id="about" className="py-24 bg-[#EEECEA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-neutral-500">About Us</p>
              <DiagArrow />
            </div>
            <div className="lg:col-span-8 space-y-6">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-[#111111]">
                At B-Projects, we simplify procurement processes to increase your project velocity.
              </h2>
              <p className="text-neutral-500 text-base font-sans leading-relaxed">
                B-Projects Ventures Limited bridges the gap between project owners, EPC contractors, government institutions, and world-class OEMs. Through end-to-end technical sourcing, expediting, logistics, and execution support, we ensure seamless supply chain performance across high-stakes sectors including Upstream/Midstream/Downstream Oil &amp; Gas, Marine &amp; Offshore, Construction, Power Utilities, Healthcare, and Government MDAs.
              </p>

              <div className="pt-2 p-5 bg-[#a05c1e]/10 border-l-4 border-[#a05c1e]">
                <p className="text-sm text-[#111111] font-sans leading-relaxed">
                  <span className="font-bold">Strategic Partnership:</span> Partnered with{" "}
                  <span className="text-[#a05c1e] font-semibold">Kha-Riz Energy</span> for commercial solar EPC, battery energy storage, EV mobility, and sustainable power infrastructure supporting Nigeria&apos;s energy transition.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-neutral-200">
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">Our Vision</p>
                  <p className="text-sm text-[#111111] font-sans leading-relaxed">To become one of Africa&apos;s most trusted industrial procurement and project delivery companies.</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">Our Mission</p>
                  <p className="text-sm text-[#111111] font-sans leading-relaxed">To deliver world-class procurement, engineering support, and renewable energy solutions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core values grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["Integrity", "Professionalism", "Safety", "Innovation", "Sustainability", "Quality", "Customer Focus", "Operational Excellence"].map((val, i) => (
              <div key={i} className="bg-white border border-neutral-200 p-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#a05c1e] shrink-0" />
                <span className="text-xs uppercase tracking-wider font-bold text-[#111111]">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          §3  SERVICES
      ═══════════════════════════════════════════ */}
      <section id="services" className="bg-[#a05c1e]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-amber-200/70">Our Capabilities &amp; Services</p>
              <DiagArrow color="white" />
            </div>
            <div className="lg:col-span-6">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                End-to-end procurement and technical execution
              </h2>
            </div>
            <div className="lg:col-span-2 lg:text-right">
              <a href="#contact" className="inline-block text-xs uppercase tracking-widest font-bold text-white border border-white px-6 py-3 hover:bg-white hover:text-[#a05c1e] transition-colors">
                Get a Quote
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/20">
          {servicesList.map(({ Icon, label, desc, features }, i) => (
            <div key={i} className="border border-white/20 p-8 hover:bg-white/10 transition-colors group">
              <Icon className="w-8 h-8 text-white/60 mb-4 group-hover:text-white transition-colors" />
              <p className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-white mb-3">{label}</p>
              <p className="text-amber-100/70 text-xs font-sans leading-relaxed mb-4">{desc}</p>
              <ul className="space-y-1.5 border-t border-white/20 pt-4">
                {features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-[11px] text-amber-100/60 font-sans">
                    <Check className="w-3 h-3 text-white/50 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          §4  PROJECTS
      ═══════════════════════════════════════════ */}
      <section id="projects" className="py-24 bg-[#F5F4F1]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-neutral-500">Featured Projects</p>
              <DiagArrow />
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
                Every project has its unique DNA
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredProjects.map((proj, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200 mb-4">
                  <Image
                    src={proj.img}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#a05c1e] px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-white">
                    {proj.cat}
                  </div>
                </div>
                <p className="text-xs uppercase tracking-widest font-bold text-[#a05c1e] mb-1">{proj.location}</p>
                <h3 className="font-sans text-sm uppercase tracking-wide font-bold text-[#111111] mb-1">{proj.title}</h3>
                <p className="text-neutral-500 text-sm font-sans leading-relaxed">{proj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          §5  CLIENTS
      ═══════════════════════════════════════════ */}
      <section id="clients" className="bg-[#111111] py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-white/40">We Work With Top Notch Clients</p>
              <DiagArrow color="white" />
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Engineers who understand your business
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-white/10">
            {[
              "Oil & Gas Operators", "EPC Contractors", "Government Agencies & MDAs",
              "Energy & Power Companies", "Manufacturing Firms", "Marine Companies",
              "Construction Firms", "International Development Partners", "Private Enterprise Organizations",
            ].map((client, i) => (
              <div key={i} className="border border-white/10 flex items-center justify-center text-center p-10 hover:bg-white/5 transition-colors">
                <p className="font-serif text-lg font-bold text-white/80 leading-snug">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          §6  CONTACT INFO STRIP
      ═══════════════════════════════════════════ */}
      <section className="bg-[#a05c1e]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-x border-white/10">
            {[
              { Icon: MapPin, title: "Corporate HQ",     body: "Victoria Island / Lekki Corridor\nLagos State, Nigeria" },
              { Icon: Phone,  title: "Direct Line",      body: "+234 (0) 800 B-PROJECTS\nOffice: +234 (0) 1 234 5678" },
              { Icon: Mail,   title: "Email Inquiries",  body: "info@b-projectsventures.com\nprocurement@b-projectsventures.com" },
              { Icon: Clock,  title: "Working Hours",    body: "Mon – Fri: 8:00 AM – 5:30 PM WAT\nSat – Sun: Closed" },
            ].map(({ Icon, title, body }, i) => (
              <div key={i} className="border border-white/10 p-8 space-y-2">
                <Icon className="w-5 h-5 text-white/60" />
                <h3 className="font-sans text-xs uppercase tracking-widest font-bold text-white">{title}</h3>
                <p className="text-xs text-amber-100/60 font-sans leading-relaxed whitespace-pre-line">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          §7  CONTACT FORM
      ═══════════════════════════════════════════ */}
      <ContactForm />

    </div>
  );
}
