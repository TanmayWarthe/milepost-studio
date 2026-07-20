"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollProgressRail() {
  const { scrollYProgress } = useScroll();
  
  // Transform progress from 0-1 to percentage for the background size or scale
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="fixed left-0 top-0 bottom-0 w-1 bg-surface z-50 hidden lg:block">
      <motion.div 
        className="w-full bg-gradient-to-b from-gold-light to-gold-deep origin-top"
        style={{ scaleY, height: "100%" }}
      />
    </div>
  );
}
