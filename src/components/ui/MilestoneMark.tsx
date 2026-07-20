"use client";

import { motion, useReducedMotion } from "framer-motion";

export function MilestoneMark({ className = "" }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative flex items-center justify-center w-24 h-24 ${className}`}>
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full text-gold/20"
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
      </motion.svg>
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full text-gold/40"
      >
        <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      <span className="font-display text-4xl text-gold font-light">0</span>
    </div>
  );
}
