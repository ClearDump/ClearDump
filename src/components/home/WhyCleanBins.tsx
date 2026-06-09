"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Bug, Droplets, HeartPulse } from "lucide-react";
import BugScatter from "@/components/ui/BugScatter";

const reasons = [
  {
    icon: Bug,
    title: "Eliminates Pest Infestations",
    description: "Dirty bins are a feast for rats, raccoons, roaches, and flies. Regular cleaning removes food residue and scent trails that attract them. Our clients report a dramatic reduction in yard pests within the first month.",
    stat: "92%",
    statLabel: "of rodent issues start at the trash bin",
  },
  {
    icon: Droplets,
    title: "Kills 99.9% of Bacteria",
    description: "Your trash bins harbor E. coli, Salmonella, Listeria, and other dangerous bacteria. Every time you touch that lid, you're exposing your family. Our deep-clean process sanitizes and disinfects completely.",
    stat: "99.9%",
    statLabel: "bacteria eliminated per cleaning",
  },
  {
    icon: HeartPulse,
    title: "Protects Your Family's Health",
    description: "Children and pets are especially vulnerable to the pathogens breeding in uncleaned bins. Airborne bacteria from rotting waste can trigger allergies and respiratory issues. Clean bins mean a healthier home.",
    stat: "10M+",
    statLabel: "bacteria per sq. inch in dirty bins",
  },
  {
    icon: ShieldCheck,
    title: "Prevents Foul Odors",
    description: "That rotten smell isn't just unpleasant — it signals decomposition and bacterial growth. Our eco-friendly deodorizing treatment leaves your bins smelling fresh and prevents odor buildup between pickups.",
    stat: "100%",
    statLabel: "odor elimination guaranteed",
  },
];

export default function WhyCleanBins() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cd-green font-semibold text-sm uppercase tracking-wider">
              Why It Matters
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-cd-gray-900 leading-tight">
              Your Trash Bins Are a
              <br />
              <span className="text-gradient-green">Health Hazard</span>
            </h2>
            <p className="mt-5 text-lg text-cd-gray-500 leading-relaxed">
              Most homeowners never think about cleaning their trash and recycling bins.
              But those bins sit in the hot Atlanta sun, breeding dangerous bacteria,
              attracting pests, and creating foul odors that seep into your garage and yard.
            </p>

            {/* Interactive bug scatter demo */}
            <div className="mt-8 relative w-full h-48 bg-cd-gray-50 rounded-2xl border border-cd-gray-200 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 flex items-end justify-center pb-3 text-xs text-cd-gray-400 font-medium z-20 pointer-events-none">
                Hover to see what Clean Dump does ↑
              </div>
              <BugScatter className="w-full h-full" />
            </div>
          </motion.div>

          {/* Right: Cards */}
          <div className="space-y-5">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-cd-gray-50 rounded-2xl p-6 border border-cd-gray-100 hover:border-cd-green/30 hover:shadow-lg hover:shadow-cd-green/5 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cd-green-light text-cd-green flex items-center justify-center shrink-0 group-hover:bg-cd-green group-hover:text-white transition-colors duration-300">
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-cd-gray-900 mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-cd-gray-500 leading-relaxed">
                      {reason.description}
                    </p>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-2xl font-black text-cd-green">
                        {reason.stat}
                      </span>
                      <span className="text-xs text-cd-gray-400">
                        {reason.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
