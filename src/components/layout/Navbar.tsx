"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Shop", href: "/shop" },
];

function trackLead() {
  if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
    (window as any).fbq("track", "Lead");
  }
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ left: 0, width: 0, opacity: 0 });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-cd-gray-200/60">
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Clear Dump home">
          <Image
            src="/images/clear-dump-atlanta-trash-bin-cleaning-logo.png"
            alt="Clear Dump – Atlanta trash bin cleaning service logo"
            width={48}
            height={48}
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            priority
          />
          <span className="hidden sm:block font-bold text-lg tracking-tight text-cd-gray-900">
            Clear<span className="text-cd-green">Dump</span>
          </span>
        </Link>

        {/* Desktop Nav with hover pill */}
        <div className="hidden lg:block">
          <ul
            className="relative flex items-center bg-cd-gray-50 rounded-full border border-cd-gray-200 p-1"
            onMouseLeave={() => setHoverPosition((p) => ({ ...p, opacity: 0 }))}
          >
            {navItems.map((item) => (
              <NavTab key={item.label} href={item.href} setPosition={setHoverPosition}>
                {item.label}
              </NavTab>
            ))}
            <motion.li
              animate={hoverPosition}
              className="absolute z-0 h-9 rounded-full bg-cd-green"
              style={{ top: "4px" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </ul>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:6785584327"
            className="flex items-center gap-1.5 text-sm font-medium text-cd-gray-600 hover:text-cd-green transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>678-558-4327</span>
          </a>
          <Link
            href="/book"
            onClick={trackLead}
            className="bg-cd-green hover:bg-cd-green-dark text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-cd-green/30 active:scale-95"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-cd-gray-700 hover:text-cd-green transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white border-b border-cd-gray-200 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-cd-gray-700 hover:bg-cd-green-light hover:text-cd-green transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 space-y-2">
                <a
                  href="tel:6785584327"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-cd-gray-50 text-cd-gray-700 font-medium"
                >
                  <Phone className="w-4 h-4" />
                  678-558-4327
                </a>
                <Link
                  href="/book"
                  onClick={() => {
                    setMobileOpen(false);
                    trackLead();
                  }}
                  className="block text-center px-4 py-3 rounded-xl bg-cd-green text-white font-semibold hover:bg-cd-green-dark transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavTab({
  children,
  href,
  setPosition,
}: {
  children: React.ReactNode;
  href: string;
  setPosition: (pos: { left: number; width: number; opacity: number }) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
      }}
      className="relative z-10"
    >
      <Link
        href={href}
        className="block px-4 py-2 text-sm font-medium text-cd-gray-700 hover:text-white transition-colors duration-200 rounded-full whitespace-nowrap"
      >
        {children}
      </Link>
    </li>
  );
}
