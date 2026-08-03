"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Calendar, MapPin } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "Oil & Gas" | "Renewables" | "Government" | "Marine" | "Infrastructure";
  location: string;
  year: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  client: string;
  scope: string;
}

const projectsData: Project[] = [
  {
    id: "industrial-pumps",
    title: "Industrial OEM Pumps & Electric Motors",
    category: "Oil & Gas",
    location: "Niger Delta, Nigeria",
    year: "2034",
    image: "/images/WhatsApp Image 2026-07-27 at 10.52.51 AM (3).jpeg",
    shortDesc: "Turnkey procurement of Super T-Series self-priming centrifugal pumps and heavy-duty electric motors for oilfield processing.",
    fullDesc: "Sourced, factory-inspected, and delivered OEM self-priming centrifugal pumps, heavy-duty electric motors, and skid-mounted fluid transfer systems directly to oilfield facility operators in the Niger Delta.",
    client: "Upstream Oil & Gas Operator",
    scope: "OEM Centrifugal Pumps & Electric Motors",
  },
  {
    id: "solar-street-lighting",
    title: "Highway Solar Street Lighting & Utility Electrification",
    category: "Renewables",
    location: "North-Central MDAs, Nigeria",
    year: "2034",
    image: "/images/WhatsApp Image 2026-07-27 at 10.52.52 AM (2).jpeg",
    shortDesc: "In partnership with Kha-Riz Energy, turnkey supply and installation of high-lumen solar street lights across municipal corridors.",
    fullDesc: "Procured, assembled, and deployed high-efficiency solar street lighting poles with integrated lithium battery storage and automated dusk-to-dawn sensors along municipal transit corridors.",
    client: "Federal Ministry of Utilities & MDAs",
    scope: "Solar Lighting EPC & Public Utility Electrification",
  },
  {
    id: "civil-building-supplies",
    title: "Civil Infrastructure Steel, Cement & Materials",
    category: "Infrastructure",
    location: "Abuja FCT, Nigeria",
    year: "2033",
    image: "/images/WhatsApp Image 2026-07-27 at 10.52.52 AM (1).jpeg",
    shortDesc: "Bulk supply of high-yield structural steel beams, rebar bundles, cement bags, roofing systems, and aggregates.",
    fullDesc: "Managed high-volume material sourcing for structural steel profiles, high-tensile rebar bundles, bags of cement, roofing sheets, and PVC drainage piping for major commercial and municipal infrastructure developments.",
    client: "Tier-1 EPC Civil Construction Contractor",
    scope: "Structural Steel, Rebar, Cement & Aggregates",
  },
  {
    id: "hse-safety-gear",
    title: "Certified Industrial PPE & Workplace HSE Solutions",
    category: "Government",
    location: "Port Harcourt, Nigeria",
    year: "2033",
    image: "/images/WhatsApp Image 2026-07-27 at 10.52.51 AM (2).jpeg",
    shortDesc: "Comprehensive supply of fire-retardant coveralls, safety boots, industrial helmets, goggles, and HSE equipment.",
    fullDesc: "Delivered bulk certified Personal Protective Equipment (PPE) including high-visibility flame-retardant coveralls, safety footwear, impact-resistant helmets, noise protection earmuffs, and specialized safety gloves.",
    client: "Industrial & Maritime Enterprise Client",
    scope: "Certified PPE, Flame-Retardant Coveralls & HSE Gear",
  },
  {
    id: "gas-detection-inspection",
    title: "Gas Detection & NDT Field Quality Inspection",
    category: "Oil & Gas",
    location: "Lagos / Delta Facility, Nigeria",
    year: "2032",
    image: "/images/WhatsApp Image 2026-07-27 at 10.52.52 AM.jpeg",
    shortDesc: "Technical field inspection services, portable gas detection equipment, and non-destructive testing (NDT).",
    fullDesc: "Supplied certified multi-gas detectors and deployed qualified QA/QC inspectors for non-destructive testing (NDT), pipeline wall thickness measurement, and hazardous atmosphere monitoring.",
    client: "Midstream Pipeline & Refinery Operator",
    scope: "Gas Detection Instruments & NDT Inspection",
  },
  {
    id: "warehouse-inventory-logistics",
    title: "Warehouse Inventory & Strategic Sourcing Hub",
    category: "Marine",
    location: "Lekki Logistics Hub, Lagos, Nigeria",
    year: "2032",
    image: "/images/WhatsApp Image 2026-07-27 at 10.52.51 AM (1).jpeg",
    shortDesc: "High-capacity warehousing, material handling, expediting, and vendor management for industrial spare parts.",
    fullDesc: "Established strategic inventory management and warehousing for thousands of certified industrial valves, flanges, safety stock, and replacement spares to reduce lead times for offshore and onshore project execution.",
    client: "EPC Consortium & Industrial Plants",
    scope: "Warehousing, Inventory Management & Logistics",
  },
];

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

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Oil & Gas", "Renewables", "Government", "Marine", "Infrastructure"];

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F4F1] text-[#111111]">

      {/* 1. HERO BANNER */}
      <section className="pt-40 pb-16 bg-[#EEECEA] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-neutral-500">
                Project Execution &amp; Supply Case Studies
              </p>
              <DiagArrow />
            </div>
            <div className="lg:col-span-8 space-y-5">
              <h1 className="font-serif text-5xl sm:text-6xl font-bold tracking-tight text-[#111111] leading-[1.03]">
                Delivering technical solutions across strategic sectors
              </h1>
              <p className="text-neutral-500 text-lg font-sans leading-relaxed">
                Explore our procurement, technical sourcing, and project support track record across Oil &amp; Gas, Renewable Energy, Marine, and Public infrastructure.
              </p>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-[#C59A3F] text-white shadow-sm font-bold"
                    : "bg-transparent text-neutral-500 border border-neutral-300 hover:text-[#0B192C] hover:border-neutral-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. GALLERY GRID */}
      <section className="py-16 bg-[#F5F4F1]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200 mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#1D4ED8] px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-white">
                    {project.category}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-neutral-400 font-sans mb-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C59A3F]" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C59A3F]" />
                    {project.year}
                  </span>
                </div>

                <h3 className="font-sans text-sm uppercase tracking-wide font-bold text-[#0B192C] group-hover:text-[#C59A3F] transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-neutral-500 text-sm font-sans leading-relaxed">
                  {project.shortDesc}
                </p>

                <div className="pt-4 border-t border-neutral-200 mt-4">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#C59A3F] group-hover:text-[#0B192C] transition-colors">
                    View Project Details →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl space-y-6">

            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-neutral-400 hover:text-[#111111] p-2 border border-neutral-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#1D4ED8]">
                {selectedProject.category} Sourcing &amp; Procurement
              </span>
              <h2 className="font-sans text-xl font-bold uppercase tracking-wide text-[#111111] mt-1">
                {selectedProject.title}
              </h2>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-neutral-50 border border-neutral-200 text-xs font-sans">
              <div>
                <span className="text-neutral-400 uppercase tracking-wider font-medium block mb-0.5">Location</span>
                <span className="text-[#111111] font-semibold">{selectedProject.location}</span>
              </div>
              <div>
                <span className="text-neutral-400 uppercase tracking-wider font-medium block mb-0.5">Year</span>
                <span className="text-[#111111] font-semibold">{selectedProject.year}</span>
              </div>
              <div>
                <span className="text-neutral-400 uppercase tracking-wider font-medium block mb-0.5">Client</span>
                <span className="text-[#111111] font-semibold">{selectedProject.client}</span>
              </div>
              <div>
                <span className="text-neutral-400 uppercase tracking-wider font-medium block mb-0.5">Scope</span>
                <span className="text-[#111111] font-semibold">{selectedProject.scope}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3 font-sans text-sm text-neutral-600 leading-relaxed">
              <h4 className="font-serif text-lg font-bold text-[#111111]">Technical Scope &amp; Logistics</h4>
              <p>{selectedProject.fullDesc}</p>
            </div>

            {/* Action */}
            <div className="pt-4 border-t border-neutral-100 flex justify-end">
              <Link
                href="/contact"
                onClick={() => setSelectedProject(null)}
                className="px-6 py-3 bg-[#C59A3F] text-white hover:bg-[#A67C1E] transition-colors text-xs uppercase tracking-widest font-bold shadow-md"
              >
                Request Sourcing Quote →
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
