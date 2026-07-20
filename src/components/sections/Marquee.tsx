"use client";

import { motion, useReducedMotion } from "framer-motion";
import { homeContent } from "@/lib/constants";

export function Marquee() {
  const shouldReduceMotion = useReducedMotion();
  
  // Duplicate text enough times to fill ultra-wide screens
  const content = homeContent.marqueeText.repeat(5);

  return (
    <div className="w-full overflow-hidden border-y border-gold/10 py-6 bg-transparent">
      <motion.div
        className="flex whitespace-nowrap"
        animate={shouldReduceMotion ? {} : { x: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span className="text-2xl md:text-3xl font-display italic font-light tracking-wide text-gold pr-16 md:pr-24 group-hover:paused">
          {content}
        </span>
        <span className="text-2xl md:text-3xl font-display italic font-light tracking-wide text-gold pr-16 md:pr-24 group-hover:paused">
          {content}
        </span>
      </motion.div>
    </div>
  );
}
