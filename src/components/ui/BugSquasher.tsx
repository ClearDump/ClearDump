"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function BugSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <ellipse cx="12" cy="14" rx="5" ry="6" fill="#111827" />
      <ellipse cx="12" cy="7" rx="3.5" ry="3.5" fill="#374151" />
      <line x1="7" y1="11" x2="2" y2="8" stroke="#111827" strokeWidth="1.2" />
      <line x1="7" y1="14" x2="2" y2="15" stroke="#111827" strokeWidth="1.2" />
      <line x1="7" y1="17" x2="3" y2="21" stroke="#111827" strokeWidth="1.2" />
      <line x1="17" y1="11" x2="22" y2="8" stroke="#111827" strokeWidth="1.2" />
      <line x1="17" y1="14" x2="22" y2="15" stroke="#111827" strokeWidth="1.2" />
      <line x1="17" y1="17" x2="21" y2="21" stroke="#111827" strokeWidth="1.2" />
      <line x1="10" y1="4" x2="7" y2="1" stroke="#111827" strokeWidth="1" />
      <line x1="14" y1="4" x2="17" y2="1" stroke="#111827" strokeWidth="1" />
      <circle cx="7" cy="1" r="0.8" fill="#111827" />
      <circle cx="17" cy="1" r="0.8" fill="#111827" />
    </svg>
  );
}

export default function BugSquasher() {
  const [stage, setStage] = useState<"idle" | "walking" | "squashing" | "done">("idle");

  useEffect(() => {
    // Only run once per session to avoid annoying the user
    const hasPlayed = sessionStorage.getItem("bug-squasher-played");
    if (hasPlayed) {
      setStage("done");
      return;
    }

    const timer1 = setTimeout(() => setStage("walking"), 1000);
    const timer2 = setTimeout(() => setStage("squashing"), 2500);
    const timer3 = setTimeout(() => {
      setStage("done");
      sessionStorage.setItem("bug-squasher-played", "true");
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (stage === "done" || stage === "idle") return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
        
        {/* The Bug */}
        <motion.div
          className="relative z-10"
          initial={{ x: "-50vw", y: "20vh", rotate: 15 }}
          animate={
            stage === "walking"
              ? { x: 0, y: 0, rotate: 0 }
              : stage === "squashing"
              ? { x: 0, y: 0, scale: [1, 1.2, 0.1, 0], opacity: [1, 1, 0, 0] }
              : {}
          }
          transition={{
            x: { duration: 1.5, ease: "linear" },
            y: { duration: 1.5, ease: "linear" },
            scale: { duration: 0.3, ease: "backIn" },
            opacity: { duration: 0.3, ease: "linear" },
          }}
        >
          <BugSVG className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-xl" />
        </motion.div>

        {/* The Squasher Text */}
        {stage === "squashing" && (
          <motion.div
            className="absolute z-20 text-center"
            initial={{ scale: 3, opacity: 0, y: -200, rotate: -15 }}
            animate={{ scale: 1, opacity: 1, y: 0, rotate: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <h2 className="text-6xl sm:text-8xl font-black text-cd-green drop-shadow-2xl italic tracking-tighter" style={{ textShadow: '4px 4px 0px #000, 8px 8px 0px rgba(0,200,83,0.3)' }}>
              BUGS SQUASHED!
            </h2>
            <p className="mt-4 text-xl sm:text-2xl font-bold text-gray-800 bg-white/80 rounded-full px-6 py-2 inline-block">
              Premium Bin Cleaning Services.
            </p>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
