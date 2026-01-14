"use client"

import { useState, useEffect, useRef } from "react"
import { ScrollAnimation } from "./scroll-animation"

interface CarouselSlide {
  id: number
  title: string
  category: string
  location: string
  image: string
}

export function EventCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const slides: CarouselSlide[] = [
    {
      id: 1,
      title: "Luxury Wedding Tent",
      category: "Wedding",
      location: "Dubai, UAE",
      image: "/carousel-wedding-luxury.jpg",
    },
    {
      id: 2,
      title: "Corporate Gala Setup",
      category: "Corporate Event",
      location: "Abu Dhabi, UAE",
      image: "/carousel-corporate-gala.jpg",
    },
    {
      id: 3,
      title: "Ramadan Iftar Tent",
      category: "Cultural Event",
      location: "Cairo, Egypt",
      image: "/carousel-ramadan-iftar.jpg",
    },
    {
      id: 4,
      title: "Intimate Celebration",
      category: "Private Event",
      location: "Dubai, UAE",
      image: "/carousel-intimate-celebration.jpg",
    },
    {
      id: 5,
      title: "Grand Festival Setup",
      category: "Festival",
      location: "Giza, Egypt",
      image: "/carousel-festival-setup.jpg",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
        setScrollPosition(scrollLeft)
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
      }
    }

    const container = scrollContainerRef.current
    container?.addEventListener("scroll", handleScroll)
    return () => container?.removeEventListener("scroll", handleScroll)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollAnimation type="slideUp">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Featured Events
          </h2>
        </ScrollAnimation>

        <ScrollAnimation type="slideUp" delay={200}>
          <div className="w-12 h-1 bg-accent mb-12"></div>
        </ScrollAnimation>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
            style={{
              scrollBehavior: "smooth",
              scrollSnapType: "x mandatory",
            }}
          >
            {slides.map((slide) => (
              <ScrollAnimation key={slide.id} type="slideUp" delay={slide.id * 50}>
                <div
                  className="flex-shrink-0 w-96 snap-start group cursor-pointer"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="relative h-64 overflow-hidden bg-secondary rounded-lg">
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                  </div>

                  <div className="pt-4">
                    <p className="text-accent text-sm font-medium tracking-wide mb-2">
                      {slide.category.toUpperCase()} • {slide.location}
                    </p>
                    <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <button
            onClick={() => scroll("left")}
            className="absolute -left-16 top-1/3 -translate-y-1/2 hidden lg:flex items-center justify-center w-10 h-10 rounded-full border border-accent/40 text-accent hover:bg-accent/10 transition-all duration-300"
            aria-label="Scroll left"
          >
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="absolute -right-16 top-1/3 -translate-y-1/2 hidden lg:flex items-center justify-center w-10 h-10 rounded-full border border-accent/40 text-accent hover:bg-accent/10 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll right"
          >
            →
          </button>
        </div>

        {/* Mobile scroll indicator */}
        <div className="flex justify-center gap-1 mt-8 lg:hidden">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className="h-1 rounded-full bg-accent/40 transition-all"
              style={{
                width: idx === Math.floor(scrollPosition / 100) % slides.length ? "24px" : "8px",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
