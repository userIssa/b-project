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
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType: "quote_request" }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to submit quote request.");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#07101E] via-[#0B192C] to-[#1B365D] text-white p-8 md:p-10 shadow-2xl max-w-md w-full border border-[#C59A3F]/30">
      <p className="text-[#C59A3F] text-xs uppercase tracking-[0.25em] font-sans font-bold mb-2">
        Set an introduction meeting today
      </p>
      <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 leading-snug">
        Request a Sourcing Quote
      </h3>

      {submitted ? (
        <div className="bg-black/30 p-6 text-center space-y-3 animate-fade-in border border-white/10">
          <CheckCircle2 className="w-10 h-10 text-[#C59A3F] mx-auto" />
          <h4 className="font-serif text-lg font-bold text-white">Quote Request Received!</h4>
          <p className="text-xs text-amber-100/90 font-sans leading-relaxed">
            Thank you, {formData.firstName}. Our procurement team will reach out within 24 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ firstName: "", lastName: "", email: "", phone: "" });
            }}
            className="mt-2 text-xs uppercase tracking-widest text-[#C59A3F] hover:text-white underline font-medium"
          >
            Submit Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 font-sans">
          {errorMessage && (
            <div className="p-3 bg-red-900/60 border border-red-500 text-red-100 text-xs font-sans rounded">
              {errorMessage}
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-blue-200/80 mb-1">
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
              <label className="block text-xs font-medium text-blue-200/80 mb-1">
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
              <label className="block text-xs font-medium text-blue-200/80 mb-1">
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
              <label className="block text-xs font-medium text-blue-200/80 mb-1">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+234 806 607 9075"
                className="w-full bg-transparent border-b border-white/50 focus:border-white outline-none py-2 text-sm text-white placeholder:text-white/40 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-[#C59A3F] hover:bg-[#A67C1E] text-white py-3.5 px-6 text-xs uppercase tracking-widest font-bold transition-all duration-200 flex items-center justify-center gap-2 group shadow-md"
          >
            {loading ? "Processing..." : "Submit"}
            {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>
      )}
    </div>
  );
}
