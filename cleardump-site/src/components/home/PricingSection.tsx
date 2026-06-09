"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

function trackLead() {
  if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
    (window as any).fbq("track", "Lead");
  }
}

const features = [
  "Weekly trash bin cleaning",
  "Weekly recycling bin cleaning",
  "Eco-friendly sanitization",
  "99.9% bacteria elimination",
  "Pest prevention treatment",
  "Odor elimination & deodorizing",
  "Same-day scheduling available",
  "Consistent, reliable service",
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-cd-green-light/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cd-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-cd-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-cd-green font-semibold text-sm uppercase tracking-wider">
            Simple Pricing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-cd-gray-900">
            One Flat Rate. Zero Hassle.
          </h2>
          <p className="mt-4 text-lg text-cd-gray-500 max-w-2xl mx-auto">
            No hidden fees, no confusing tiers. Just perfectly clean bins every single week.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          className="max-w-lg mx-auto bg-white rounded-3xl shadow-xl border border-cd-green/20 overflow-hidden relative"
        >
          {/* Top banner */}
          <div className="bg-cd-green py-3 text-center text-white font-medium text-sm uppercase tracking-wider">
            Most Popular Choice in Atlanta
          </div>

          <div className="p-8 sm:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-cd-gray-900">Weekly Service</h3>
              <div className="mt-4 flex items-center justify-center text-cd-gray-900">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-7xl font-black tracking-tight">150</span>
                <span className="text-xl text-cd-gray-500 ml-2 self-end mb-2">/mo</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cd-green/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-cd-green" strokeWidth={3} />
                  </div>
                  <span className="text-cd-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/book"
              onClick={trackLead}
              className="flex items-center justify-center gap-2 w-full bg-cd-green hover:bg-cd-green-dark text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cd-green/30 active:scale-[0.98] group"
            >
              Book Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="mt-4 text-center text-sm text-cd-gray-400">
              No long-term contracts. Cancel anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
