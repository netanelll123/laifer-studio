import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-12 w-full rounded-lg border border-input bg-white/[0.03] px-4 py-2 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-accent/60 focus-visible:bg-white/[0.05] disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-red-500/60",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
