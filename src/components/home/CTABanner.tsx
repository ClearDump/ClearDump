"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

function trackLead() {
  if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
    (window as any).fbq("track", "Lead");
  }
}

export default function CTABanner() {
  return (
    <section className="py-20 bg-cd-green relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
          Ready for Clean, Odor-Free Bins?
        </h2>
        <p className="text-cd-green-light text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          Join hundreds of Atlanta homeowners who have already banished pests and bad smells from their yards.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/book"
            onClick={trackLead}
            className="flex items-center justify-center gap-2 bg-white text-cd-green hover:bg-cd-gray-50 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-[0.98] w-full sm:w-auto group"
          >
            Book Your Cleaning Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:6785584327"
            className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            678-558-4327
          </a>
        </div>
      </div>
    </section>
  );
}
