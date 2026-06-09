"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedTrashBin({ className = "" }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative inline-block cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="img"
      aria-label="Animated clean trash bin with sparkle effects"
    >
      <svg
        viewBox="0 0 200 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Bin body */}
        <motion.g
          animate={isHovered ? { y: -3 } : { y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Bin body shape */}
          <motion.path
            d="M45 90 L55 240 C55 248 60 250 65 250 L135 250 C140 250 145 248 145 240 L155 90"
            fill="#E8F5E9"
            stroke="#00C853"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={isHovered ? { fill: "#C8E6C9" } : { fill: "#E8F5E9" }}
            transition={{ duration: 0.3 }}
          />
          {/* Bin ridges */}
          <motion.line x1="80" y1="110" x2="78" y2="230" stroke="#00C853" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          <motion.line x1="100" y1="110" x2="100" y2="230" stroke="#00C853" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          <motion.line x1="120" y1="110" x2="122" y2="230" stroke="#00C853" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

          {/* Bin rim */}
          <rect x="38" y="82" width="124" height="14" rx="4" fill="#00C853" />
        </motion.g>

        {/* Lid */}
        <motion.g
          style={{ originX: "38px", originY: "82px", transformOrigin: "38px 82px" }}
          animate={
            isHovered
              ? { rotate: -35, y: -8, x: -5 }
              : { rotate: 0, y: 0, x: 0 }
          }
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <rect x="35" y="65" width="130" height="18" rx="6" fill="#00C853" />
          {/* Handle */}
          <rect x="85" y="52" width="30" height="16" rx="8" fill="none" stroke="#00C853" strokeWidth="3" />
        </motion.g>

        {/* Sparkles - visible on hover */}
        <motion.g
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Sparkle 1 */}
          <motion.g
            animate={isHovered ? { scale: [0, 1.2, 1], rotate: [0, 180] } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <path
              d="M170 50 L173 43 L176 50 L183 53 L176 56 L173 63 L170 56 L163 53 Z"
              fill="#00E676"
            />
          </motion.g>
          {/* Sparkle 2 */}
          <motion.g
            animate={isHovered ? { scale: [0, 1.2, 1], rotate: [0, 180] } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <path
              d="M25 120 L27 115 L29 120 L34 122 L29 124 L27 129 L25 124 L20 122 Z"
              fill="#69F0AE"
            />
          </motion.g>
          {/* Sparkle 3 */}
          <motion.g
            animate={isHovered ? { scale: [0, 1.2, 1], rotate: [0, 180] } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <path
              d="M175 130 L177 125 L179 130 L184 132 L179 134 L177 139 L175 134 L170 132 Z"
              fill="#B9F6CA"
            />
          </motion.g>
        </motion.g>

        {/* Water drops on hover */}
        <motion.g
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Drop 1 */}
          <motion.ellipse
            cx="85"
            cy="95"
            rx="3"
            ry="5"
            fill="#4FC3F7"
            animate={
              isHovered
                ? { cy: [70, 130], opacity: [0, 1, 1, 0], scaleY: [0.6, 1.0, 1.0, 0.4] }
                : { cy: 70, opacity: 0, scaleY: 1 }
            }
            transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
          />
          {/* Drop 2 */}
          <motion.ellipse
            cx="110"
            cy="95"
            rx="2.5"
            ry="4"
            fill="#4FC3F7"
            animate={
              isHovered
                ? { cy: [65, 120], opacity: [0, 1, 1, 0], scaleY: [0.5, 1.0, 1.0, 0.38] }
                : { cy: 65, opacity: 0, scaleY: 1 }
            }
            transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
          />
          {/* Drop 3 */}
          <motion.ellipse
            cx="130"
            cy="95"
            rx="2"
            ry="3.5"
            fill="#4FC3F7"
            animate={
              isHovered
                ? { cy: [72, 125], opacity: [0, 1, 1, 0], scaleY: [0.57, 1.0, 1.0, 0.28] }
                : { cy: 72, opacity: 0, scaleY: 1 }
            }
            transition={{ duration: 1.1, repeat: Infinity, delay: 0.8 }}
          />
        </motion.g>

        {/* Checkmark inside bin (visible when not hovered) */}
        <motion.path
          d="M75 170 L92 190 L130 145"
          fill="none"
          stroke="#00C853"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={isHovered ? { opacity: 0, pathLength: 0 } : { opacity: 0.3, pathLength: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Bugs that scatter when hovered */}
        <motion.g>
          {/* Bug 1 (Roach) */}
          <motion.g
            initial={{ x: 20, y: 230, rotate: 15 }}
            animate={isHovered ? { x: -80, y: 150, opacity: 0, scale: 0 } : { x: 20, y: 230, opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <path d="M0,5 C3,-2 12,-2 15,5 C12,12 3,12 0,5 Z" fill="#5D4037" />
            <path d="M3,5 L-2,1 M12,5 L17,1 M3,5 L-2,9 M12,5 L17,9" stroke="#5D4037" strokeWidth="1" fill="none" />
            <line x1="15" y1="5" x2="20" y2="3" stroke="#5D4037" strokeWidth="0.8" />
            <line x1="15" y1="5" x2="20" y2="7" stroke="#5D4037" strokeWidth="0.8" />
          </motion.g>

          {/* Bug 2 (Fly) */}
          <motion.g
            initial={{ x: 160, y: 180, rotate: -45 }}
            animate={isHovered ? { x: 250, y: 80, opacity: 0, scale: 0 } : { x: 160, y: 180, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <circle cx="5" cy="5" r="3" fill="#212121" />
            <ellipse cx="2" cy="2" rx="4" ry="2" fill="#B0BEC5" opacity="0.8" transform="rotate(-30 2 2)" />
            <ellipse cx="8" cy="2" rx="4" ry="2" fill="#B0BEC5" opacity="0.8" transform="rotate(30 8 2)" />
          </motion.g>

          {/* Bug 3 (Ant) */}
          <motion.g
            initial={{ x: 100, y: 245, rotate: 80 }}
            animate={isHovered ? { x: 140, y: 320, opacity: 0, scale: 0 } : { x: 100, y: 245, opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <circle cx="2" cy="5" r="1.5" fill="#111" />
            <circle cx="5" cy="5" r="2" fill="#111" />
            <circle cx="9" cy="5" r="2.5" fill="#111" />
            <path d="M5,5 L2,2 M5,5 L8,2 M5,5 L2,8 M5,5 L8,8" stroke="#111" strokeWidth="0.5" fill="none" />
            <path d="M9,5 L12,2 M9,5 L12,8" stroke="#111" strokeWidth="0.5" fill="none" />
          </motion.g>

          {/* Bug 4 (Germs/Bacteria) */}
          <motion.g
            initial={{ x: 40, y: 140, rotate: 0 }}
            animate={isHovered ? { x: -50, y: 50, opacity: 0, scale: 0, rotate: -180 } : { x: 40, y: 140, opacity: 0.6, scale: 1, rotate: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <circle cx="0" cy="0" r="4" fill="#8D6E63" />
            <circle cx="5" cy="2" r="2" fill="#8D6E63" />
            <circle cx="-3" cy="4" r="3" fill="#8D6E63" />
            <circle cx="3" cy="-4" r="2.5" fill="#8D6E63" />
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
}
