"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const bugs = [
  { id: 1, x: 20, y: 30, size: 14, rotation: 45, scatterX: -90, scatterY: -70 },
  { id: 2, x: 75, y: 15, size: 12, rotation: -30, scatterX: 80, scatterY: -60 },
  { id: 3, x: 40, y: 70, size: 16, rotation: 120, scatterX: -70, scatterY: 80 },
  { id: 4, x: 85, y: 65, size: 11, rotation: -60, scatterX: 90, scatterY: 70 },
  { id: 5, x: 55, y: 50, size: 13, rotation: 90, scatterX: -50, scatterY: -90 },
  { id: 6, x: 15, y: 55, size: 10, rotation: 15, scatterX: -100, scatterY: 20 },
];

function BugSVG({ size, rotation }: { size: number; rotation: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Bug body */}
      <ellipse cx="12" cy="14" rx="5" ry="6" fill="#4A3728" />
      <ellipse cx="12" cy="7" rx="3.5" ry="3.5" fill="#5D4037" />
      {/* Legs */}
      <line x1="7" y1="11" x2="2" y2="8" stroke="#4A3728" strokeWidth="1.2" />
      <line x1="7" y1="14" x2="2" y2="15" stroke="#4A3728" strokeWidth="1.2" />
      <line x1="7" y1="17" x2="3" y2="21" stroke="#4A3728" strokeWidth="1.2" />
      <line x1="17" y1="11" x2="22" y2="8" stroke="#4A3728" strokeWidth="1.2" />
      <line x1="17" y1="14" x2="22" y2="15" stroke="#4A3728" strokeWidth="1.2" />
      <line x1="17" y1="17" x2="21" y2="21" stroke="#4A3728" strokeWidth="1.2" />
      {/* Antennae */}
      <line x1="10" y1="4" x2="7" y2="1" stroke="#4A3728" strokeWidth="1" />
      <line x1="14" y1="4" x2="17" y2="1" stroke="#4A3728" strokeWidth="1" />
      <circle cx="7" cy="1" r="0.8" fill="#4A3728" />
      <circle cx="17" cy="1" r="0.8" fill="#4A3728" />
    </svg>
  );
}

export default function BugScatter({ className = "" }: { className?: string }) {
  const [scattered, setScattered] = useState(false);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setScattered(true)}
      onMouseLeave={() => {
        setTimeout(() => setScattered(false), 600);
      }}
      role="img"
      aria-label="Bugs scatter away when hovered, demonstrating pest prevention"
    >
      {/* Container label */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <motion.div
          animate={scattered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-cd-green text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
        >
          ✓ Pest Free!
        </motion.div>
      </div>

      {/* Bugs */}
      {bugs.map((bug) => (
        <motion.div
          key={bug.id}
          className="absolute"
          style={{ left: `${bug.x}%`, top: `${bug.y}%` }}
          animate={
            scattered
              ? {
                  x: bug.scatterX,
                  y: bug.scatterY,
                  opacity: 0,
                  scale: 0,
                  rotate: bug.rotation + 360,
                }
              : {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }
          }
          transition={{
            duration: 0.5,
            delay: scattered ? bug.id * 0.04 : (6 - bug.id) * 0.08,
            ease: "easeOut",
          }}
        >
          <BugSVG size={bug.size} rotation={bug.rotation} />
        </motion.div>
      ))}
    </div>
  );
}
