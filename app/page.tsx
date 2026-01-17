"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ScrollAnimation } from "@/components/scroll-animation"
import { EventCarousel } from "@/components/event-carousel"
import { HeroCarousel } from "@/components/hero-carousel"
import { useLanguage } from "@/components/language-provider"

export default function Home() {
  const { t, language } = useLanguage()

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center pt-20">
        <HeroCarousel />

        <div className="max-w-4xl mx-auto px-6 text-center relative" style={{ zIndex: 10 }}>
          <ScrollAnimation type="fadeIn">
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight text-balance mb-6 text-white">
              {t('heroTitle')}
            </h1>
          </ScrollAnimation>

          <ScrollAnimation type="slideUp" delay={200}>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-8 text-white">
              {t('heroDesc')}
            </p>
          </ScrollAnimation>

          <ScrollAnimation type="slideUp" delay={400}>
            <Link
              href="/portfolio"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all duration-300 hover:scale-105"
            >
              {t('viewWork')}
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* Event Carousel Section */}
      <EventCarousel />

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation type="slideUp">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              {t('ourServices')}
            </h2>
          </ScrollAnimation>

          <ScrollAnimation type="slideUp" delay={200}>
            <div className="w-12 h-1 bg-accent mb-12"></div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            {[
              {
                title: t('weddingTents'),
                description: t('weddingTentsDesc'),
              },
              {
                title: t('corporateEvents'),
                description: t('corporateEventsDesc'),
              },
              {
                title: t('ramadanEvents'),
                description: t('ramadanEventsDesc'),
              },
            ].map((service, idx) => (
              <ScrollAnimation key={idx} type="slideUp" delay={idx * 150}>
                <div className="group">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-accent mb-4 group-hover:w-12 transition-all duration-300"></div>
                  <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation type="slideUp">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12 text-balance">
              {t('featuredProject')}
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation type="slideUp">
              <img src="/luxury-tent-event.jpg" alt={t('featuredProject')} className="w-full h-auto" />
            </ScrollAnimation>

            <ScrollAnimation type="slideUp" delay={200}>
              <div>
                <p className="text-accent font-medium text-sm tracking-wide mb-4" dir="ltr">
                  {language === 'ar' ? "زفاف • دبي، الإمارات" : "WEDDING • DUBAI, UAE"}
                </p>
                <h3 className="font-serif text-4xl font-bold text-foreground mb-6">{t('projectTitle')}</h3>
                <p className="text-foreground/70 leading-relaxed mb-8">
                  {t('projectDesc')}
                </p>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-3 text-accent font-medium hover:gap-4 transition-all"
                >
                  {t('explorePortfolio')}
                  <span className={language === 'ar' ? 'rotate-180' : ''}>→</span>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation type="slideUp">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12 text-balance">
              {t('ourProcess')}
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: t('process1Title'), description: t('process1Desc') },
              { step: "02", title: t('process2Title'), description: t('process2Desc') },
              { step: "03", title: t('process3Title'), description: t('process3Desc') },
              { step: "04", title: t('process4Title'), description: t('process4Desc') },
            ].map((item, idx) => (
              <ScrollAnimation key={idx} type="slideUp" delay={idx * 100}>
                <div>
                  <p className="font-serif text-4xl font-bold text-accent/50 mb-2">{item.step}</p>
                  <h4 className="font-serif text-xl font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-foreground/60 text-sm">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollAnimation type="slideUp">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {t('readyToCreate')}
            </h2>
          </ScrollAnimation>

          <ScrollAnimation type="slideUp" delay={200}>
            <p className="text-foreground/70 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              {t('readyDesc')}
            </p>
          </ScrollAnimation>

          <ScrollAnimation type="slideUp" delay={400}>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all duration-300 hover:scale-105"
            >
              {t('getInTouch')}
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <h3 className="font-serif text-lg font-bold mb-4">Value In Pass</h3>
              <p className="text-background/80 text-sm leading-relaxed">
                {t('premiumSolutions')}
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-sm">{t('quickLinks')}</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <Link href="/" className="hover:text-background transition-colors">
                    {t('home')}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-background transition-colors">
                    {t('services')}
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-background transition-colors">
                    {t('portfolio')}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-background transition-colors">
                    {t('contact')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-sm">{t('getInTouch')}</h4>
              <p className="text-background/80 text-sm mb-2" dir="ltr">+20 11 25471849</p>
              <p className="text-background/80 text-sm">info@valueinpass.com</p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
            <p>{t('rightsReserved')}</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
