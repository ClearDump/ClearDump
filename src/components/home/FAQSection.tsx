"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does trash bin cleaning cost in Atlanta?",
    answer: "Clear Dump offers weekly trash and recycling bin cleaning for $150/month. This includes both trash and recycling bins, pest prevention, and odor elimination with eco-friendly cleaning products."
  },
  {
    question: "What areas does Clear Dump serve in Atlanta?",
    answer: "We serve the greater Atlanta metro area including Buckhead, Midtown, Sandy Springs, Dunwoody, Alpharetta, Johns Creek, Marietta, Roswell, Milton, Cumming, Decatur, Peachtree City, Fayetteville, and most areas within 30 minutes of Downtown Atlanta."
  },
  {
    question: "How often do you clean trash bins?",
    answer: "We provide weekly cleaning service on your chosen day — Monday, Tuesday, or Wednesday — between 9:00 AM and 8:00 PM. We work around your schedule with early morning and evening slots available."
  },
  {
    question: "Does trash bin cleaning prevent pests and rodents?",
    answer: "Yes! Regular professional bin cleaning eliminates the food residue, bacteria, and odors that attract rats, raccoons, roaches, and other pests. Our cleaning kills 99.9% of bacteria and removes the scent trails that draw pests to your bins."
  },
  {
    question: "Is your bin cleaning process eco-friendly?",
    answer: "Absolutely. Clear Dump uses eco-friendly, biodegradable cleaning solutions that are safe for your family, pets, and the environment while still eliminating 99.9% of bacteria and odors from your trash and recycling bins."
  },
  {
    question: "Do I need to be home for the cleaning?",
    answer: "No, you don't need to be home. Simply leave your bins curbside or in their accessible designated area on your scheduled cleaning day, and our team will handle the rest."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-cd-green font-semibold text-sm uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-cd-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen ? "border-cd-green bg-cd-green-light/20" : "border-cd-gray-200 bg-white hover:border-cd-gray-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-semibold text-lg pr-8 ${isOpen ? "text-cd-green-dark" : "text-cd-gray-900"}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? "bg-cd-green text-white" : "bg-cd-gray-100 text-cd-gray-500"
                  }`}>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-cd-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
