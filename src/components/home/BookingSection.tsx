"use client";

import { motion } from "framer-motion";
import CalendlyEmbed from "@/components/booking/CalendlyEmbed";

export default function BookingSection() {
  return (
    <section id="booking" className="py-20 sm:py-28 bg-cd-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cd-gray-900 mb-4">
            Book Your Cleaning Today
          </h2>
          <p className="text-lg text-cd-gray-600 max-w-2xl mx-auto">
            Choose a time that works best for you. We'll take care of the dirty work.
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-cd-gray-200">
          <CalendlyEmbed />
        </div>
      </div>
    </section>
  );
}
