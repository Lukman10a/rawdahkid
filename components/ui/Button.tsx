import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50 px-6 py-3 font-sans",
          {
            "bg-gold text-midnight hover:bg-amber hover:scale-[1.02] shadow-sm hover:shadow-md":
              variant === "primary",
            "bg-transparent border border-gold text-gold hover:bg-gold hover:text-midnight":
              variant === "secondary",
            "bg-transparent border border-cream text-midnight dark:text-cream hover:bg-white dark:bg-cream hover:text-midnight":
              variant === "ghost",
          },
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
