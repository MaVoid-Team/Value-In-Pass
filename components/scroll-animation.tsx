"use client"

import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  type?: "fadeIn" | "slideUp" | "softScale"
  delay?: number
}

export function ScrollAnimation({ children, type = "slideUp", delay = 0 }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const animationClass = {
    fadeIn: "animate-fade-in",
    slideUp: "animate-slide-up",
    softScale: "animate-soft-scale",
  }[type]

  return (
    <div ref={ref} className={isVisible ? animationClass : "opacity-0"} style={{ transitionDuration: "600ms" }}>
      {children}
    </div>
  )
}
