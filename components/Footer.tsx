import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F5F4F1] border-t border-neutral-300 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top grid: Logo | Address | Phone | Email | Socials */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-neutral-300">

          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-3">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <svg
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  points="4,24 4,4 24,4"
                  stroke="#1D4ED8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <line
                  x1="5"
                  y1="23"
                  x2="23"
                  y2="5"
                  stroke="#1D4ED8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <div className="flex flex-col leading-none">
              <span className="font-serif text-xl font-bold tracking-tight text-[#111111]">
                B-PROJECTS
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 font-sans font-medium mt-0.5">
                Ventures Limited
              </span>
              <span className="text-[10px] font-sans font-semibold text-[#1D4ED8] mt-1">
                RC NO: 9646602
              </span>
            </div>
          </Link>
          <p className="text-neutral-500 text-sm font-sans leading-relaxed max-w-xs pt-1">
            Nigerian indigenous procurement, industrial supply, project support, and engineering services company.
          </p>
          <p className="text-[#1D4ED8] text-xs font-semibold uppercase tracking-wider font-sans">
            "Delivering Solutions. Creating Value."
          </p>
          {/* Regulatory & Compliance badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="px-2 py-0.5 bg-[#1D4ED8]/10 text-[#1D4ED8] text-[10px] font-bold tracking-wider uppercase rounded border border-[#1D4ED8]/20">
              NUPRC
            </span>
            <span className="px-2 py-0.5 bg-[#1D4ED8]/10 text-[#1D4ED8] text-[10px] font-bold tracking-wider uppercase rounded border border-[#1D4ED8]/20">
              NSITF
            </span>
            <span className="px-2 py-0.5 bg-neutral-200 text-neutral-700 text-[10px] font-bold tracking-wider uppercase rounded">
              NOGICD
            </span>
          </div>
        </div>

        {/* Col 2: Address */}
        <div className="space-y-2">
          <h4 className="text-xs uppercase tracking-[0.2em] text-[#111111] font-bold font-sans">
            Address
          </h4>
          <p className="text-sm text-neutral-500 font-sans leading-relaxed">
            Victoria Island / Lekki Expressway<br />
            Lagos, Nigeria
          </p>
        </div>

        {/* Col 3: Phone */}
        <div className="space-y-2">
          <h4 className="text-xs uppercase tracking-[0.2em] text-[#111111] font-bold font-sans">
            Phone
          </h4>
          <p className="text-sm text-neutral-500 font-sans leading-relaxed">
            <a href="tel:+2348066079075" className="hover:text-[#1D4ED8] transition-colors block">
              +234 806 607 9075
            </a>
            <a href="tel:+2347070361222" className="hover:text-[#1D4ED8] transition-colors block">
              +234 707 036 1222
            </a>
          </p>
        </div>

        {/* Col 4: Email + Socials */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#111111] font-bold font-sans">
              Email
            </h4>
            <p className="text-sm text-neutral-500 font-sans">
              <a href="mailto:managedbybprojects@gmail.com" className="hover:text-[#1D4ED8] transition-colors break-all">
                managedbybprojects@gmail.com
              </a>
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#111111] font-bold font-sans">
              Socials
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center text-xs hover:bg-[#1D4ED8] transition-colors font-bold"
              >
                f
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center text-xs hover:bg-[#1D4ED8] transition-colors font-bold"
              >
                in
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center text-xs hover:bg-[#1D4ED8] transition-colors font-bold"
              >
                𝕏
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom row */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-sans">
        <p>© B-Projects Ventures Limited (RC: 9646602). All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-[#111111] transition-colors">
            Privacy Policy
          </a>
          <span>|</span>
          <span className="text-neutral-500 font-medium">
            NUPRC &amp; NSITF Compliant
          </span>
        </div>
      </div>
      </div>
    </footer>
  );
}
