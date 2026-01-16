import React from 'react';
import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const AnimatedGradientText = React.forwardRef<HTMLHeadingElement, AnimatedGradientTextProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h1
        className={cn(
          "bg-gradient-to-r from-accent to-white bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </h1>
    );
  }
);
AnimatedGradientText.displayName = "AnimatedGradientText";

export { AnimatedGradientText };