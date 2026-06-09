"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import AnimatedTrashBin from "@/components/ui/AnimatedTrashBin";

function trackLead() {
  if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
    (window as any).fbq("track", "Lead");
  }
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cd-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cd-green/5 rounded-full blur-3xl" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #00C853 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12">
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-14">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center flex flex-col items-center w-full"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-cd-green-light text-cd-green font-semibold text-sm px-4 py-1.5 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-cd-green rounded-full animate-pulse" />
              Serving Greater Atlanta
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-cd-gray-900 leading-[1.1] max-w-4xl mx-auto">
              Clean Trash.
              <br />
              <span className="text-gradient-green">Clear Space.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg sm:text-xl text-cd-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Professional trash &amp; recycling bin cleaning that eliminates
              odors, kills 99.9% of bacteria, and keeps pests away. Weekly
              service for just{" "}
              <span className="font-bold text-cd-green">$150/month</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto"
            >
              <Link
                href="#booking"
                onClick={trackLead}
                className="inline-flex items-center justify-center gap-2 bg-cd-green hover:bg-cd-green-dark text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-cd-green/30 active:scale-95 group w-full sm:w-auto"
              >
                Book Your First Cleaning
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:6785584327"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-cd-gray-200 hover:border-cd-green text-cd-gray-700 hover:text-cd-green font-semibold text-base sm:text-lg px-8 py-4 rounded-full transition-all duration-300 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                678-558-4327
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-6 justify-center text-sm text-cd-gray-500"
            >
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-cd-green" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Eco-Friendly
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-cd-green" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Same-Day Available
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-cd-green" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Weekly Service
              </span>
            </motion.div>
          </motion.div>

          {/* Animated Bin */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="flex items-center justify-center w-full"
          >
            <div className="relative">
              {/* Glow behind bin */}
              <div className="absolute inset-0 bg-cd-green/10 rounded-full blur-3xl scale-75" />
              <AnimatedTrashBin className="w-48 h-60 sm:w-64 sm:h-80 lg:w-80 lg:h-[400px] relative z-10 animate-float" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
