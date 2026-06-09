"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Sparkles, Home } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Schedule Online",
    description: "Book your weekly cleaning in 30 seconds. Pick your day — Monday, Tuesday, or Wednesday.",
    color: "bg-blue-50 text-blue-600",
    number: "01",
  },
  {
    icon: Sparkles,
    title: "We Clean Your Bins",
    description: "Our pros arrive on your scheduled day and deep-clean both trash and recycling bins with eco-friendly solutions.",
    color: "bg-cd-green-light text-cd-green",
    number: "02",
  },
  {
    icon: Home,
    title: "Enjoy a Clean Home",
    description: "No more odors, no more pests, no more bacteria. Just fresh, sanitized bins every single week.",
    color: "bg-amber-50 text-amber-600",
    number: "03",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-cd-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cd-green font-semibold text-sm uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-cd-gray-900">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-cd-gray-500 max-w-2xl mx-auto">
            Getting your bins professionally cleaned is easier than you think.
            Three simple steps to a pest-free, odor-free home.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-cd-gray-100 h-full">
                {/* Step number */}
                <div className="text-6xl font-black text-cd-gray-100 group-hover:text-cd-green/20 transition-colors duration-300 absolute top-4 right-6">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-cd-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-cd-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-cd-gray-300" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
