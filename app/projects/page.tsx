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
    id: "offshore-valves",
    title: "Offshore Pipeline Valves & Actuators",
    category: "Oil & Gas",
    location: "Niger Delta, Nigeria",
    year: "2034",
    image: "/images/hero_canyon_bridge.png",
    shortDesc: "Turnkey procurement of API 6D subsea ball valves and automated actuators for offshore production platform.",
    fullDesc: "Sourced, inspected, and delivered high-pressure API 6D certified ball valves and hydraulic actuators directly from OEM plants to offshore platforms in the Niger Delta, ensuring zero downtime during shutdown operations.",
    client: "Major Upstream Operator",
    scope: "API 6D Valves & Shutdown Material Expediting",
  },
  {
    id: "commercial-solar",
    title: "Commercial Solar & Hybrid Power Plant",
    category: "Renewables",
    location: "Lagos Industrial Zone, Nigeria",
    year: "2034",
    image: "/images/mollins_museum.png",
    shortDesc: "In partnership with Kha-Riz Energy, EPC deployment of 1.5MW commercial solar plant with battery storage.",
    fullDesc: "Engineered and deployed a 1.5MW industrial rooftop solar array with 2.8MWh Battery Energy Storage System (BESS) for a heavy manufacturing plant, reducing operational grid reliance by 65%.",
    client: "Industrial Manufacturing Client",
    scope: "Solar EPC, BESS & Energy Efficiency Audit",
  },
  {
    id: "mda-solar-lighting",
    title: "Rural Electrification & Solar Lighting",
    category: "Government",
    location: "North-Central MDAs, Nigeria",
    year: "2033",
    image: "/images/hillway_interchange.png",
    shortDesc: "Supply and installation of 2,500 integrated solar street lighting units across public utility corridors.",
    fullDesc: "Procured and delivered high-lumen, lithium-battery powered solar street lighting systems for federal highway corridors and public institutional premises in alignment with government rural electrification mandates.",
    client: "Federal Ministry of Power & Utilities",
    scope: "Solar Street Lighting & Utility Procurement",
  },
  {
    id: "marine-mooring",
    title: "Deep-Water Dock Mooring & Vessel Supplies",
    category: "Marine",
    location: "Bonny Island Terminal, Nigeria",
    year: "2033",
    image: "/images/notting_harbor.png",
    shortDesc: "Supply of heavy offshore mooring equipment, marine safety gear, and vessel replacement spares.",
    fullDesc: "Managed end-to-end marine logistics for high-tensile mooring lines, quick-release hooks, navigational beacons, and offshore crew PPE for marine vessel operations.",
    client: "Offshore Marine Logistics Operator",
    scope: "Mooring Systems & Marine Safety Supply",
  },
  {
    id: "structural-steel-supply",
    title: "Civil Infrastructure Structural Steel",
    category: "Infrastructure",
    location: "Abuja Federal Capital Territory, Nigeria",
    year: "2032",
    image: "/images/mollins_museum.png",
    shortDesc: "Bulk supply of structural steel beams, concrete reinforcement, and heavy equipment leasing.",
    fullDesc: "Executed strategic sourcing for high-yield structural steel profiles, high-tensile rebar, and heavy earthmoving equipment leasing for bridge overpass construction.",
    client: "Tier-1 EPC Civil Contractor",
    scope: "Structural Steel, Rebar & Equipment Leasing",
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
                    ? "bg-[#1D4ED8] text-white shadow-sm"
                    : "bg-transparent text-neutral-500 border border-neutral-300 hover:text-[#111111] hover:border-neutral-400"
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
                    <MapPin className="w-3.5 h-3.5 text-[#1D4ED8]" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#1D4ED8]" />
                    {project.year}
                  </span>
                </div>

                <h3 className="font-sans text-sm uppercase tracking-wide font-bold text-[#111111] group-hover:text-[#1D4ED8] transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-neutral-500 text-sm font-sans leading-relaxed">
                  {project.shortDesc}
                </p>

                <div className="pt-4 border-t border-neutral-200 mt-4">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#1D4ED8] group-hover:text-[#111111] transition-colors">
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
                className="px-6 py-3 bg-[#1D4ED8] text-white hover:bg-[#1E3A8A] transition-colors text-xs uppercase tracking-widest font-bold shadow-md"
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
