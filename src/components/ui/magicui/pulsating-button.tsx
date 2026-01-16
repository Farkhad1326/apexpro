import React from 'react';
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils"; // Uyğun yolu düzəlt

interface PulsatingButtonProps extends HTMLMotionProps<"button"> {}

const PulsatingButton = React.forwardRef<HTMLButtonElement, PulsatingButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-accent text-black",
          className
        )}
        ref={ref}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
PulsatingButton.displayName = "PulsatingButton";

export { PulsatingButton };