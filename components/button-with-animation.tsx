"use client";

import type React from "react";

import { type ButtonHTMLAttributes, forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonWithAnimationProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  children: React.ReactNode;
}

export const ButtonWithAnimation = forwardRef<
  HTMLButtonElement,
  ButtonWithAnimationProps
>(({ className, variant, size, children, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      className={cn(
        "relative overflow-hidden transition-all duration-300 active:scale-95",
        "after:absolute after:inset-0 after:z-[-1] after:opacity-0 after:transition-opacity hover:after:opacity-10",
        "after:bg-gradient-to-r after:from-white after:to-white after:dark:from-white after:dark:to-white",
        className
      )}
      variant={variant}
      size={size}
      {...props}
    >
      {children}
    </Button>
  );
});

ButtonWithAnimation.displayName = "ButtonWithAnimation";
