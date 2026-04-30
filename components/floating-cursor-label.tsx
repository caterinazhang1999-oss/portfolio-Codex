"use client";

import { motion } from "framer-motion";

export type CursorLabelState = {
  visible: boolean;
  x: number;
  y: number;
  text: string;
};

export function FloatingCursorLabel({
  text,
  visible,
  x,
  y
}: CursorLabelState) {
  const repeatedText = `${text} ·`;

  return (
    <motion.div
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.86,
        x: x + 18,
        y: y + 18
      }}
      aria-hidden="true"
      className="cursor-label"
      initial={false}
      transition={{
        opacity: { duration: 0.18 },
        scale: { duration: 0.18 },
        x: { damping: 32, stiffness: 420, type: "spring" },
        y: { damping: 32, stiffness: 420, type: "spring" }
      }}
    >
      <div className="cursor-label__track">
        {Array.from({ length: 6 }).map((_, index) => (
          <span className="cursor-label__text" key={index}>
            {repeatedText}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
