"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingContactButton() {
  return (
    <motion.a
      href="tel:6785584327"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-cd-green hover:bg-cd-green-dark text-white font-semibold px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group animate-pulse-green"
      aria-label="Call Clear Dump at 678-558-4327"
    >
      <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      <span className="hidden sm:inline text-sm">678-558-4327</span>
    </motion.a>
  );
}
