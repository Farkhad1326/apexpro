import React from 'react';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SparklesTextProps extends React.HTMLAttributes<HTMLSpanElement> {}

const SparklesText = React.forwardRef<HTMLSpanElement, SparklesTextProps>(
  ({ className, children, ...props }, ref) => {
    const sparkles = Array.from({ length: 5 }).map((_, i) => (
      <motion.span
        key={i}
        className="absolute text-accent"
        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
        animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
      >
        ★
      </motion.span>
    ));

    return (
      <span className={cn("relative inline-block", className)} ref={ref} {...props}>
        {children}
        {sparkles}
      </span>
    );
  }
);
SparklesText.displayName = "SparklesText";

export { SparklesText };