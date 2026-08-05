"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Briefcase, User } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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
      "Adaezechukwu Benita Azaka serves as the Managing Director / Chief Executive Officer of B-PROJECTS VENTURES LIMITED, where she oversees corporate strategy, industrial procurement, project execution, strategic partnerships and business development.",
      "She possesses extensive experience in project management, procurement coordination, stakeholder engagement, contract administration and industrial supply chain implementation. Her ability to translate strategic objectives into efficient operational processes has contributed significantly to the successful delivery of engineering and infrastructure projects.",
      "Working closely with clients, government institutions, development partners and industry stakeholders, she plays a critical role in ensuring projects are delivered on schedule, within budget and to the highest standards of quality and professionalism.",
      "Her commitment to operational excellence, continuous improvement and customer satisfaction continues to strengthen B-PROJECTS VENTURES LIMITED’s reputation as a dependable engineering and sustainable supply partner.",
    ],
  },
  {
    id: "shayan-dehghan",
    name: "Shayan Dehghan",
    role: "STRATEGIC COLLABORATION",
    company: "B-PROJECTS VENTURES LIMITED",
    image: "/images/Shayan Dehghan.png",
    bio: [
      "Throughout his career, Shayan Dehghan has built a strong foundation in operations, mechanical systems, and project coordination by taking on progressively greater responsibilities in industrial and technical environments. His experience includes overseeing complex work scopes, coordinating multiple trades and departments, ensuring work is completed safely and on schedule, and acting as a key point of communication between operations, maintenance, safety, and field personnel.",
      "With a Diploma in Mechanical Design and hands-on experience in mechanical testing, quality standards, and operational leadership, he has developed a practical, solutions-focused approach to problem-solving. He has also led safety training, coordinated high-priority work, and consistently looked for opportunities to improve efficiency and support his team.",
      "As he continues to grow professionally, his goal is to transition into engineering project management, where he can combine his technical knowledge, leadership experience, and passion for organizing complex projects to deliver successful outcomes.",
    ],
  },
];

export default function ManagementSection() {
  const [selectedExecutive, setSelectedExecutive] = useState<Executive | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedExecutive(null);
      }
    };
    if (selectedExecutive) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedExecutive]);

  return (
    <section className="py-24 bg-[#EEECEA] border-t border-b border-neutral-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#111111] font-normal tracking-tight mb-4">
              Experienced Management
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base font-sans leading-relaxed max-w-3xl mx-auto">
              B-PROJECTS VENTURES LIMITED is led by a multidisciplinary management team committed to delivering innovative procurement, engineering support, and project delivery solutions with professionalism, integrity, and technical excellence.
            </p>
          </div>
        </ScrollReveal>

        {/* 2 Management Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-center">
          {executives.map((exec, idx) => (
            <ScrollReveal key={exec.id} direction="up" delay={150 * (idx + 1)}>
              <div
                className="bg-[#EEECEA] border border-neutral-300 p-8 rounded-none flex flex-col items-center text-center justify-between space-y-6 hover:border-neutral-400 transition-colors h-full"
              >
              {/* Circle Avatar */}
              <div className="w-20 h-20 rounded-full border border-neutral-300 bg-neutral-200 flex items-center justify-center overflow-hidden shrink-0 relative">
                {exec.image ? (
                  <Image
                    src={exec.image}
                    alt={exec.name}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full bg-[#E5E3DE] text-neutral-600 flex items-center justify-center font-bold text-lg font-sans">
                    {exec.initials || <User className="w-7 h-7 text-neutral-500" />}
                  </div>
                )}
              </div>

              {/* Title & Role */}
              <div className="space-y-1.5">
                <h3 className="font-sans text-xl font-normal text-[#111111]">
                  {exec.name}
                </h3>
                <p className="text-[10px] font-sans font-bold uppercase tracking-[0.18em] text-neutral-500">
                  {exec.role}
                </p>
                {exec.isPlaceholder && (
                  <span className="block text-[9px] uppercase tracking-wider font-semibold text-[#C59A3F] pt-0.5">
                    (Profile Data Pending)
                  </span>
                )}
              </div>

              {/* Read Executive Bio Button */}
              <button
                onClick={() => setSelectedExecutive(exec)}
                className="w-full py-3 px-4 bg-transparent border border-neutral-300 hover:bg-[#0B192C] hover:text-white hover:border-[#0B192C] transition-all text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#111111]"
              >
                READ EXECUTIVE BIO
              </button>
            </div>
          </ScrollReveal>
          ))}
        </div>
      </div>

      {/* EXECUTIVE BIO MODAL */}
      {selectedExecutive && (
        <div
          onClick={() => setSelectedExecutive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#EEECEA] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 sm:p-10 shadow-2xl border border-neutral-300 space-y-6 cursor-default"
          >
            
            {/* Close Cross Icon */}
            <button
              onClick={() => setSelectedExecutive(null)}
              className="absolute top-6 right-6 p-2 text-neutral-500 hover:text-[#111111] transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header: Circle Avatar + Name + Title */}
            <div className="flex items-start gap-5 pt-2">
              <div className="w-20 h-20 rounded-full border border-neutral-300 bg-neutral-200 overflow-hidden shrink-0 relative">
                {selectedExecutive.image ? (
                  <Image
                    src={selectedExecutive.image}
                    alt={selectedExecutive.name}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full bg-[#E5E3DE] text-neutral-600 flex items-center justify-center font-bold text-lg font-sans">
                    {selectedExecutive.initials || "ED"}
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-3xl font-bold text-[#111111]">
                  {selectedExecutive.name}
                </h3>
                <p className="text-[11px] uppercase tracking-wider font-bold text-neutral-500">
                  {selectedExecutive.role}
                </p>
                <p className="text-xs uppercase tracking-widest font-semibold text-[#0B192C]">
                  {selectedExecutive.company}
                </p>
              </div>
            </div>

            <hr className="border-t border-neutral-300" />

            {/* Bio Content Paragraphs */}
            <div className="space-y-4 text-sm font-sans text-neutral-700 leading-relaxed text-justify">
              {selectedExecutive.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <hr className="border-t border-neutral-300 pt-2" />

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-600">
                <Briefcase className="w-4 h-4 text-[#0B192C]" />
                <span>EXECUTIVE BOARD</span>
              </div>
              <button
                onClick={() => setSelectedExecutive(null)}
                className="px-6 py-2.5 bg-neutral-200 hover:bg-[#0B192C] hover:text-white border border-neutral-300 text-xs font-bold uppercase tracking-widest text-[#111111] transition-colors"
              >
                CLOSE
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
