"use client";

import {
  motion,
  type TargetAndTransition,
  type Transition,
  type ViewportOptions,
} from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  initial?: TargetAndTransition;
  whileInView?: TargetAndTransition;
  transition?: Transition;
  viewport?: ViewportOptions;
};

export function Reveal({
  children,
  className,
  initial = { opacity: 0, y: 20 },
  whileInView = { opacity: 1, y: 0 },
  transition = { duration: 0.6 },
  viewport = { once: true, margin: "-100px" },
}: RevealProps) {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}
