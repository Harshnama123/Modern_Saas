
"use client";
import { useState } from "react";

import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-zinc-950/80 text-white shadow-lg border-b border-zinc-800/80 backdrop-blur-xl backdrop-saturate-150"
      style={{ WebkitBackdropFilter: "blur(16px) saturate(150%)" }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="flex items-center gap-2 select-none"
        >
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">Avi Nutrition</span>
          <span className="w-3 h-3 rounded-full bg-blue-500 inline-block animate-pulse shadow-lg" />
        </motion.div>
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-8 text-base font-semibold tracking-wide">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  className={`hover:text-blue-400 transition-colors duration-150 cursor-pointer px-1 ${active === link.name ? "text-blue-400" : ""}`}
                  onClick={() => {
                    setOpen(false);
                    setActive(link.name);
                  }}
                >
                  {link.name}
                  {active === link.name && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 w-full h-1 rounded bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
        <button
          className="md:hidden flex items-center px-2 py-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col gap-4 px-4 pb-4 bg-zinc-950/95 backdrop-blur-xl"
          >
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  className={`block py-2 px-2 rounded hover:bg-zinc-900 hover:text-blue-400 transition-colors duration-150 cursor-pointer ${active === link.name ? "text-blue-400" : ""}`}
                  onClick={() => {
                    setOpen(false);
                    setActive(link.name);
                  }}
                >
                  {link.name}
                  {active === link.name && (
                    <motion.span
                      layoutId="underline-mobile"
                      className="absolute left-0 -bottom-1 w-full h-1 rounded bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </motion.nav>
  );
}
