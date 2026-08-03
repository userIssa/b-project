import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Zap, Sun, CheckCircle2 } from "lucide-react";

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

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F4F1] text-[#111111]">

      {/* 1. HERO BANNER */}
      <section className="pt-40 pb-24 bg-[#EEECEA] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-neutral-500">
                Who We Are
              </p>
              <DiagArrow />
            </div>
            <div className="lg:col-span-8 space-y-6">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.03]">
                About B-Projects Ventures Limited
              </h1>
              <p className="text-neutral-500 text-lg font-sans max-w-3xl leading-relaxed">
                A Nigerian indigenous procurement, industrial supply, project support, and engineering services company dedicated to delivering solutions and creating sustainable value for industrial partners nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORPORATE PROFILE */}
      <section className="py-24 bg-[#F5F4F1] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#a05c1e] font-bold">Indigenous Technical Excellence</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#111111] leading-tight">
                Connecting Global OEMs to Local Project Owners &amp; EPC Contractors
              </h2>
              <p className="text-neutral-500 text-base font-sans leading-relaxed">
                B-Projects Ventures Limited bridges the gap between project owners, EPC contractors, government institutions, and world-class manufacturers. Through end-to-end technical sourcing, expediting, logistics, and project execution support, we ensure seamless supply chain performance.
              </p>
              <p className="text-neutral-400 text-sm font-sans leading-relaxed">
                Our operations serve high-stakes sectors including Upstream/Midstream/Downstream Oil &amp; Gas, Marine &amp; Offshore, Construction, Power Utilities, Healthcare, and Government MDAs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-neutral-200">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#a05c1e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">Local Content Commitment</h4>
                    <p className="text-xs text-[#111111] leading-relaxed">Fully compliant with NOGICD and Nigerian indigenous content regulations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#a05c1e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">Technical Sourcing</h4>
                    <p className="text-xs text-[#111111] leading-relaxed">Certified equipment directly sourced from accredited OEMs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200 shadow-lg">
                <Image
                  src="/images/hero_canyon_bridge.png"
                  alt="B-Projects Industrial Sourcing"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kha-Riz Energy Partnership */}
      <section className="py-16 bg-[#a05c1e]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-2">
              <Sun className="w-10 h-10 text-white" />
            </div>
            <div className="lg:col-span-10 space-y-3">
              <h3 className="font-serif text-3xl font-bold text-white">
                Strategic Partnership with Kha-Riz Energy
              </h3>
              <p className="text-amber-100/80 text-base font-sans leading-relaxed">
                B-Projects Ventures Limited has established a strategic alliance with{" "}
                <span className="text-white font-semibold">Kha-Riz Energy</span> to deploy commercial and industrial renewable energy systems, EV mobility solutions, battery energy storage systems (BESS), and green power infrastructure supporting Nigeria&apos;s energy transition goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="py-24 bg-[#EEECEA] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-neutral-500">Our Vision</p>
              <DiagArrow />
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111] leading-snug">
                To become one of Africa&apos;s most trusted industrial procurement and project delivery companies.
              </h3>
              <p className="text-neutral-500 text-sm font-sans leading-relaxed">
                Recognized across the continent for technical excellence, innovation, sustainability, and dependable service across every project lifecycle.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-neutral-500">Our Mission</p>
              <DiagArrow />
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111] leading-snug">
                To deliver world-class procurement, engineering support, and renewable energy solutions.
              </h3>
              <p className="text-neutral-500 text-sm font-sans leading-relaxed">
                Improving operational efficiency, reducing technical project risks, and creating lasting economic value for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-white/40">Our Core Values</p>
              <DiagArrow color="white" />
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">
                The principles that guide our technical execution
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
            {[
              { title: "Integrity", desc: "Transparent, honest, and ethical procurement practices." },
              { title: "Professionalism", desc: "Highest standards of engineering and project management." },
              { title: "Safety", desc: "Uncompromising adherence to HSE standards." },
              { title: "Innovation", desc: "Leveraging modern technology and clean energy systems." },
              { title: "Sustainability", desc: "Promoting renewable power and environmental protection." },
              { title: "Quality", desc: "OEM-certified materials and strict quality assurance." },
              { title: "Customer Focus", desc: "Tailored sourcing solutions built around client timelines." },
              { title: "Operational Excellence", desc: "Efficient logistics, expediting, and risk reduction." },
            ].map((item, idx) => (
              <div key={idx} className="border border-white/10 p-8 flex flex-col gap-3 hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#a05c1e] shrink-0" />
                  <h4 className="font-serif text-xl font-bold text-white">{item.title}</h4>
                </div>
                <p className="text-white/50 text-xs font-sans leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F5F4F1] border-t border-neutral-200 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
            Ready to partner with us?
          </h2>
          <p className="text-neutral-500 text-sm font-sans">
            Our procurement engineers are ready to discuss your requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 bg-[#a05c1e] text-white hover:bg-[#884b16] transition-colors text-xs uppercase tracking-widest font-bold"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
}
