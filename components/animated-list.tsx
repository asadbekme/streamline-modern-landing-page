"use client"

import type React from "react"

import { useRef, useEffect, useState, Children, isValidElement } from "react"
import { cn } from "@/lib/utils"

interface AnimatedListProps {
  children: React.ReactNode
  className?: string
  itemClassName?: string
  staggerDelay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  threshold?: number
}

export function AnimatedList({
  children,
  className,
  itemClassName,
  staggerDelay = 100,
  direction = "up",
  threshold = 0.1,
}: AnimatedListProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Check if user prefers reduced motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [hasAnimated, threshold])

  // If user prefers reduced motion, don't animate
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  const directionClasses = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
    none: "opacity-0",
  }

  const animationClass = direction !== "none" ? directionClasses[direction] : ""

  const childrenArray = Children.toArray(children)

  return (
    <div ref={ref} className={className}>
      {childrenArray.map((child, index) => {
        if (isValidElement(child)) {
          return (
            <div
              key={index}
              className={cn(
                itemClassName,
                "transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${animationClass}`,
              )}
              style={{ transitionDelay: `${index * staggerDelay}ms` }}
            >
              {child}
            </div>
          )
        }
        return child
      })}
    </div>
  )
}
