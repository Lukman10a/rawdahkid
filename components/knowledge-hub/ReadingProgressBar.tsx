"use client";

import { motion, type MotionValue } from "framer-motion";

type ReadingProgressBarProps = {
  scaleX: MotionValue<number>;
};

export function ReadingProgressBar({ scaleX }: ReadingProgressBarProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-gold origin-left z-9999"
      style={{ scaleX }}
    />
  );
}
