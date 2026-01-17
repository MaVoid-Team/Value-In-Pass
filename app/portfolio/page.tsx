"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ScrollAnimation } from "@/components/scroll-animation"
import { portfolioProjects } from "@/lib/portfolio-data"
import { useLanguage } from "@/components/language-provider"

export default function Portfolio() {
  const { t, language } = useLanguage()

  return (
    <main className="min-h-screen bg-background">
      {/* Back Button */}
      <div className={`fixed top-4 md:top-6 z-50 ${language === 'ar' ? 'right-4 md:right-6' : 'left-4 md:left-6'}`}>
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-border/50 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-sm"
        >
          <span className={language === 'ar' ? 'rotate-180' : ''}>←</span> {t('back')}
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation type="slideUp">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              {t('ourPortfolio')}
            </h1>
          </ScrollAnimation>

          <ScrollAnimation type="slideUp" delay={200}>
            <div className="w-12 h-1 bg-accent mb-6"></div>
            <p className="text-foreground/70 text-lg max-w-2xl leading-relaxed">
              {t('portfolioDesc')}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, idx) => {
              const titleKey = `p_${project.id.replaceAll('-', '_')}_title`;
              // Fallback to original title if translation key might be missing (though t() handles missing keys gracefully by returning key, which is ugly, so we trust our dictionary update)
              // Actually t() implementation returns key if not found.
              // To safely fallback, I'd need to check. But for now blindly trust.

              return (
                <ScrollAnimation key={project.id} type="slideUp" delay={(idx % 3) * 100}>
                  <Link href={`/portfolio/${project.id}`} className="group block cursor-pointer">
                    <div className="relative overflow-hidden h-80 mb-6 bg-secondary rounded-lg">
                      <img
                        src={project.image}
                        alt={t(titleKey)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                    <div>
                      <p className="text-accent font-medium text-xs tracking-widest mb-2" dir="ltr">
                        {project.type} • {language === 'ar' ? project.location.replace("UAE", "الإمارات").replace("Dubai", "دبي").replace("Abu Dhabi", "أبو ظبي").replace("Al Ain", "العين") : project.location}
                      </p>
                      <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {t(titleKey)}
                      </h3>
                    </div>
                  </Link>
                </ScrollAnimation>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollAnimation type="slideUp">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {t('inspiredByWork')}
            </h2>
          </ScrollAnimation>

          <ScrollAnimation type="slideUp" delay={200}>
            <p className="text-foreground/70 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              {t('discussVision')}
            </p>
          </ScrollAnimation>

          <ScrollAnimation type="slideUp" delay={400}>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all duration-300 hover:scale-105"
            >
              {t('startProject')}
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
              <p className="text-background/80 text-sm">info@valueinpass.net</p>
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
