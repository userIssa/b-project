"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function HeroForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
    <div className="bg-[#a05c1e] text-white p-8 md:p-10 shadow-2xl max-w-md w-full">
      <p className="text-amber-100/80 text-xs uppercase tracking-[0.25em] font-sans font-bold mb-2">
        Set an introduction meeting today
      </p>
      <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 leading-snug">
        Request a Sourcing Quote
      </h3>

      {submitted ? (
        <div className="bg-black/20 p-6 text-center space-y-3 animate-fade-in">
          <CheckCircle2 className="w-10 h-10 text-amber-200 mx-auto" />
          <h4 className="font-serif text-lg font-bold text-white">Quote Request Received!</h4>
          <p className="text-xs text-amber-100/80 font-sans leading-relaxed">
            Thank you, {formData.firstName}. Our procurement team will reach out within 24 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ firstName: "", lastName: "", email: "", phone: "" });
            }}
            className="mt-2 text-xs uppercase tracking-widest text-amber-200 hover:text-white underline font-medium"
          >
            Submit Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 font-sans">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-amber-100/70 mb-1">
                First name *
              </label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="John"
                className="w-full bg-transparent border-b border-white/50 focus:border-white outline-none py-2 text-sm text-white placeholder:text-white/40 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-amber-100/70 mb-1">
                Last name *
              </label>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="Doe"
                className="w-full bg-transparent border-b border-white/50 focus:border-white outline-none py-2 text-sm text-white placeholder:text-white/40 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-amber-100/70 mb-1">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@company.com"
                className="w-full bg-transparent border-b border-white/50 focus:border-white outline-none py-2 text-sm text-white placeholder:text-white/40 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-amber-100/70 mb-1">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+234 800 000 0000"
                className="w-full bg-transparent border-b border-white/50 focus:border-white outline-none py-2 text-sm text-white placeholder:text-white/40 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 border border-white text-white hover:bg-white hover:text-[#a05c1e] py-3.5 px-6 text-xs uppercase tracking-widest font-bold transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            {loading ? "Processing..." : "Submit"}
            {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>
      )}
    </div>
  );
}
