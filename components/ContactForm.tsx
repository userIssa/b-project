"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#F5F4F1] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left: Section label + heading */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-neutral-500 mb-3">
                Contact Us
              </p>
              {/* Diagonal arrow */}
              <div className="w-10 h-10 mb-6 text-[#111111]">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="4,36 4,4 36,4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="5" y1="35" x2="35" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-[#111111]">
              Partner with B-Projects Ventures Limited
            </h2>

            <p className="text-neutral-500 text-sm font-sans leading-relaxed">
              Whether you are an Oil &amp; Gas operator, EPC contractor, government MDA, or industrial manufacturer, B-Projects delivers reliable end-to-end procurement and project execution support.
            </p>

            <div className="pt-4 space-y-4 text-sm font-sans">
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">Headquarters</p>
                <p className="font-medium text-[#111111]">Victoria Island / Lekki Expressway, Lagos, Nigeria</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">Procurement Inquiries</p>
                <p className="font-medium text-[#111111]">info@b-projectsventures.com</p>
                <p className="text-neutral-500">Tel: +234 (0) 800 B-PROJECTS</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="py-16 text-center space-y-4 animate-fade-in">
                <CheckCircle className="w-12 h-12 text-[#a05c1e] mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-[#111111]">Inquiry Submitted!</h3>
                <p className="text-neutral-500 text-sm font-sans max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.firstName}. Our technical team will reach out to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
                  }}
                  className="mt-4 px-6 py-2.5 text-xs uppercase tracking-widest bg-[#a05c1e] text-white hover:bg-[#884b16] transition-colors font-semibold"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 font-sans">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs text-neutral-500 font-medium mb-1">
                      First name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="input-underline"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-500 font-medium mb-1">
                      Last name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="input-underline"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs text-neutral-500 font-medium mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-underline"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-500 font-medium mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input-underline"
                    />
                  </div>
                </div>

                {/* Row 3: Message */}
                <div>
                  <label className="block text-xs text-neutral-500 font-medium mb-1">
                    Leave us a message...
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-underline resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-10 py-3.5 bg-[#a05c1e] text-white hover:bg-[#884b16] transition-colors text-xs uppercase tracking-widest font-bold"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
