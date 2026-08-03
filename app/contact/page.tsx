import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F4F1] text-[#111111]">

      {/* Hero Banner */}
      <section className="pt-40 pb-24 bg-[#EEECEA] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-neutral-500">
                Get in Touch
              </p>
              <DiagArrow />
            </div>
            <div className="lg:col-span-8 space-y-6">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.03]">
                Contact B-Projects Ventures Limited
              </h1>
              <p className="text-neutral-500 text-lg font-sans max-w-2xl leading-relaxed">
                Our procurement engineers, technical sourcing managers, and project execution leads are standing by to discuss your industrial equipment and procurement requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations & Contact Grid */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/10">

            <div className="border border-white/10 p-8 space-y-3">
              <MapPin className="w-6 h-6 text-[#1D4ED8]" />
              <h3 className="font-serif text-lg font-bold text-white">Corporate HQ</h3>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                Victoria Island / Lekki Corridor<br />
                Lagos State, Nigeria<br />
                <span className="text-[#1D4ED8] font-semibold mt-1 inline-block">RC NO: 9646602</span>
              </p>
            </div>

            <div className="border border-white/10 p-8 space-y-3">
              <Phone className="w-6 h-6 text-[#1D4ED8]" />
              <h3 className="font-serif text-lg font-bold text-white">Direct Line</h3>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                <a href="tel:+2348066079075" className="hover:text-white transition-colors block">
                  +234 806 607 9075
                </a>
                <a href="tel:+2347070361222" className="hover:text-white transition-colors block">
                  +234 707 036 1222
                </a>
              </p>
            </div>

            <div className="border border-white/10 p-8 space-y-3">
              <Mail className="w-6 h-6 text-[#1D4ED8]" />
              <h3 className="font-serif text-lg font-bold text-white">Email Inquiries</h3>
              <p className="text-xs text-white/70 font-sans leading-relaxed break-all">
                <a href="mailto:managedbybprojects@gmail.com" className="hover:text-white transition-colors">
                  managedbybprojects@gmail.com
                </a>
              </p>
            </div>

            <div className="border border-white/10 p-8 space-y-3">
              <Clock className="w-6 h-6 text-[#1D4ED8]" />
              <h3 className="font-serif text-lg font-bold text-white">Certifications &amp; Permits</h3>
              <div className="space-y-1.5 pt-1 text-xs text-white/70 font-sans">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                  <span>NUPRC Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                  <span>NSITF Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white/40" />
                  <span>NOGICD Local Content</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Interactive Contact Form */}
      <ContactForm />

    </div>
  );
}
