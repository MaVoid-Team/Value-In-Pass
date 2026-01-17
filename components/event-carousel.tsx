"use client"

import { useState, useEffect, useRef } from "react"
import { ScrollAnimation } from "./scroll-animation"
import { useLanguage } from "@/components/language-provider"

interface CarouselSlide {
  id: number
  title: string
  category: string
  location: string
  image: string
}

export function EventCarousel() {
  const { t, language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const slides: CarouselSlide[] = [
    {
      id: 1,
      title: t('c_wedding_title'),
      category: t('c_wedding_cat'),
      location: language === 'ar' ? "دبي، الإمارات" : "Dubai, UAE",
      image: "/carousel-wedding-luxury.jpg",
    },
    {
      id: 2,
      title: t('c_corporate_title'),
      category: t('c_corporate_cat'),
      location: language === 'ar' ? "أبو ظبي، الإمارات" : "Abu Dhabi, UAE",
      image: "/carousel-corporate-gala.jpg",
    },
    {
      id: 3,
      title: t('c_ramadan_title'),
      category: t('c_ramadan_cat'),
      location: language === 'ar' ? "القاهرة، مصر" : "Cairo, Egypt",
      image: "/carousel-ramadan-iftar.jpg",
    },
    {
      id: 4,
      title: t('c_private_title'),
      category: t('c_private_cat'),
      location: language === 'ar' ? "دبي، الإمارات" : "Dubai, UAE",
      image: "/carousel-intimate-celebration.jpg",
    },
    {
      id: 5,
      title: t('c_festival_title'),
      category: t('c_festival_cat'),
      location: language === 'ar' ? "الجيزة، مصر" : "Giza, Egypt",
      image: "/carousel-festival-setup.jpg",
    },
  ]

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length)
      }, 4000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovered, slides.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollAnimation type="slideUp">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {t('featuredEvents')}
          </h2>
        </ScrollAnimation>

        <ScrollAnimation type="slideUp" delay={200}>
          <div className="w-12 h-1 bg-accent mb-12"></div>
        </ScrollAnimation>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl" dir="ltr">
            <div
              className={`flex transition-transform duration-700 ease-in-out ${language === 'ar' ? 'bg-black' : ''}`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                /* For RTL we might want normal LTR standard flow inside the slider wrapper to avoid complexity, 
                   but strictly translating content. 
                   If we force dir="ltr" on wrapper, standard logic applies. 
                   We just update text alignment inside the slide.
                */
              }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="min-w-full relative group"
                  dir={language === 'ar' ? 'rtl' : 'ltr'}
                >
                  <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                      <div className="max-w-3xl">
                        <p className="text-white/80 text-sm md:text-base font-medium tracking-wider mb-3 uppercase">
                          {slide.category} • {slide.location}
                        </p>
                        <h3 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                          {slide.title}
                        </h3>
                        <div className="w-16 h-0.5 bg-accent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            {/* Left Button (Physical Left) */}
            <button
              onClick={language === 'ar' ? goToNext : goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
              aria-label={language === 'ar' ? "Next slide" : "Previous slide"}
            >
              <svg
                className="w-6 h-6 md:w-7 md:h-7 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Button (Physical Right) */}
            <button
              onClick={language === 'ar' ? goToPrevious : goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
              aria-label={language === 'ar' ? "Previous slide" : "Next slide"}
            >
              <svg
                className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${index === currentIndex
                    ? "w-10 h-2 bg-accent"
                    : "w-2 h-2 bg-accent/30 hover:bg-accent/50"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className={`absolute top-6 z-10 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 ${language === 'ar' ? 'left-6' : 'right-6'}`}>
            <span className="text-white text-sm font-medium">
              {currentIndex + 1} / {slides.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
