"use client"

import { useState, useEffect } from "react"

const heroImages = [
  "/heroimage1.jpg",
  "/heroimage2.jpg",
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ zIndex: index === currentIndex ? 1 : 0 }}
        >
          <img
            src={image}
            alt={`Hero image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: 2 }}></div>
    </div>
  )
}
