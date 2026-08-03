"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Briefcase, User } from "lucide-react";

interface Executive {
  id: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  initials?: string;
  isPlaceholder?: boolean;
  bio: string[];
}

const executives: Executive[] = [
  {
    id: "adaeze-azaka",
    name: "Adaezechukwu Benita Azaka",
    role: "MANAGING DIRECTOR / CHIEF EXECUTIVE OFFICER",
    company: "B-PROJECTS VENTURES LIMITED",
    image: "/images/WhatsApp Image 2026-07-27 at 10.52.51 AM.jpeg",
    bio: [
      "Adaezechukwu Benita Azaka serves as the Managing Director / Chief Executive Officer of B-PROJECTS VENTURES LIMITED, where she oversees corporate strategy, industrial procurement, project execution, strategic partnerships, and business development.",
      "She possesses extensive experience in project management, procurement coordination, stakeholder engagement, contract administration, and industrial supply chain implementation. Her ability to translate strategic objectives into efficient operational processes has contributed significantly to the successful delivery of engineering and infrastructure projects.",
      "Working closely with clients, government institutions, oil & gas operators, development partners, and industry stakeholders, she plays a critical role in ensuring projects are delivered on schedule, within budget, and to the highest standards of quality and professionalism.",
      "Her commitment to operational excellence, continuous improvement, and customer satisfaction continues to strengthen B-PROJECTS VENTURES LIMITED's reputation as a dependable engineering and industrial supply partner.",
    ],
  },
  {
    id: "coo-placeholder",
    name: "Executive Director",
    role: "CHIEF OPERATING OFFICER / TECHNICAL DIRECTOR",
    company: "B-PROJECTS VENTURES LIMITED",
    initials: "ED",
    isPlaceholder: true,
    bio: [
      "The Executive Director / Chief Operating Officer oversees technical operations, OEM expediting, site logistics, and regulatory compliance across B-Projects Ventures Limited's portfolio.",
      "With deep technical expertise in mechanical procurement, civil infrastructure, and engineering field services, our executive management ensures rigorous quality control and full adherence to NUPRC and NSITF regulatory standards.",
      "(Full executive biography and profile details will be updated shortly).",
    ],
  },
];

export default function ManagementSection() {
  const [selectedExecutive, setSelectedExecutive] = useState<Executive | null>(null);

  return (
    <section className="py-24 bg-[#EEECEA] border-b border-neutral-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title & Subtitle */}
        <div className="max-w-4xl space-y-4 mb-16">
          <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#C59A3F]">
            Leadership & Governance
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0B192C]">
            Experienced Management
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg font-sans leading-relaxed">
            B-PROJECTS VENTURES LIMITED is led by a multidisciplinary management team committed to delivering innovative procurement, engineering support, and project delivery solutions with professionalism, integrity, and technical excellence.
          </p>
        </div>

        {/* Executive Cards Grid (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {executives.map((exec) => (
            <div
              key={exec.id}
              className="bg-[#F5F4F1] border border-neutral-300 p-8 flex flex-col items-center text-center justify-between space-y-6 hover:shadow-md transition-shadow"
            >
              {/* Avatar Circle */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#C59A3F]/40 bg-neutral-200 shrink-0 flex items-center justify-center">
                {exec.image ? (
                  <Image
                    src={exec.image}
                    alt={exec.name}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full bg-[#0B192C] text-[#C59A3F] flex items-center justify-center font-bold text-xl font-sans">
                    {exec.initials || <User className="w-8 h-8 text-neutral-400" />}
                  </div>
                )}
              </div>

              {/* Name & Role */}
              <div className="space-y-2">
                <h3 className="font-sans text-xl font-bold text-[#0B192C]">
                  {exec.name}
                </h3>
                <p className="text-xs uppercase tracking-widest font-bold text-neutral-500 max-w-xs mx-auto">
                  {exec.role}
                </p>
                {exec.isPlaceholder && (
                  <span className="inline-block text-[10px] uppercase tracking-wider font-semibold text-[#C59A3F]">
                    (Profile Data Pending)
                  </span>
                )}
              </div>

              {/* Read Executive Bio Button */}
              <button
                onClick={() => setSelectedExecutive(exec)}
                className="w-full py-3 px-6 bg-[#EBE8E3] hover:bg-[#0B192C] text-[#0B192C] hover:text-white border border-neutral-300 transition-all text-xs uppercase tracking-widest font-bold font-sans"
              >
                Read Executive Bio
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* EXECUTIVE BIO MODAL */}
      {selectedExecutive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative bg-[#F5F4F1] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 sm:p-10 shadow-2xl border border-neutral-300 space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedExecutive(null)}
              className="absolute top-6 right-6 p-2 text-neutral-500 hover:text-[#0B192C] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header: Avatar, Name, Role & Company */}
            <div className="flex items-center gap-5 pt-2">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#C59A3F] bg-neutral-200 shrink-0 flex items-center justify-center">
                {selectedExecutive.image ? (
                  <Image
                    src={selectedExecutive.image}
                    alt={selectedExecutive.name}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full bg-[#0B192C] text-[#C59A3F] flex items-center justify-center font-bold text-lg font-sans">
                    {selectedExecutive.initials || "ED"}
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B192C]">
                  {selectedExecutive.name}
                </h3>
                <p className="text-xs uppercase tracking-wider font-bold text-neutral-600">
                  {selectedExecutive.role}
                </p>
                <p className="text-xs uppercase tracking-widest font-semibold text-[#C59A3F]">
                  {selectedExecutive.company}
                </p>
              </div>
            </div>

            <hr className="border-neutral-300" />

            {/* Bio Body */}
            <div className="space-y-4 text-sm font-sans text-neutral-700 leading-relaxed">
              {selectedExecutive.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <hr className="border-neutral-300 pt-2" />

            {/* Footer */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-600">
                <Briefcase className="w-4 h-4 text-[#C59A3F]" />
                <span>EXECUTIVE BOARD</span>
              </div>
              <button
                onClick={() => setSelectedExecutive(null)}
                className="px-6 py-2.5 bg-neutral-300 hover:bg-[#0B192C] text-[#0B192C] hover:text-white transition-colors text-xs uppercase tracking-widest font-bold"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
