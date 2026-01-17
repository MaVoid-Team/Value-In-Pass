"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useLanguage } from "@/components/language-provider"
import type { PortfolioProject } from "@/lib/portfolio-data"

interface ProjectDetailsClientProps {
    project: PortfolioProject
}

export function ProjectDetailsClient({ project }: ProjectDetailsClientProps) {
    const { t, language } = useLanguage()

    const titleKey = `p_${project.id.replaceAll('-', '_')}_title`
    const descKey = `p_${project.id.replaceAll('-', '_')}_desc`

    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Image Section */}
            <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
                <img
                    src={project.image}
                    alt={t(titleKey)}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 pb-12">
                        <ScrollAnimation type="fadeIn">
                            <p className="text-white/80 text-sm md:text-base font-medium tracking-wider mb-3 uppercase" dir="ltr">
                                {project.type} • {language === 'ar' ? project.location.replace("UAE", "الإمارات").replace("Dubai", "دبي").replace("Abu Dhabi", "أبو ظبي").replace("Al Ain", "العين") : project.location}
                            </p>
                            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                                {t(titleKey)}
                            </h1>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Project Details Section */}
            <section className="py-24 bg-background">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="md:col-span-2">
                            <ScrollAnimation type="slideUp">
                                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                                    {t('projectOverview') || "Project Overview"}
                                </h2>
                                <div className="w-12 h-1 bg-accent mb-6"></div>
                                <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                                    {t(descKey)}
                                </p>

                                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                                    {t('projectDetails') || "Project Details"}
                                </h3>
                                <ul className="space-y-4">
                                    {project.details.map((detailKey, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                                            <p className="text-foreground/70 leading-relaxed">{t(detailKey)}</p>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollAnimation>
                        </div>

                        {/* Sidebar */}
                        <div className="md:col-span-1">
                            <ScrollAnimation type="slideUp" delay={200}>
                                <div className="bg-secondary/50 rounded-lg p-6 sticky top-24">
                                    <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                                        {t('projectInfo') || "Project Information"}
                                    </h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-foreground/60 text-sm mb-1">{t('eventType') || "Event Type"}</p>
                                            <p className="text-foreground font-medium">{project.type}</p>
                                        </div>
                                        <div>
                                            <p className="text-foreground/60 text-sm mb-1">{t('location') || "Location"}</p>
                                            <p className="text-foreground font-medium" dir="ltr">
                                                {language === 'ar' ? project.location.replace("UAE", "الإمارات").replace("Dubai", "دبي").replace("Abu Dhabi", "أبو ظبي").replace("Al Ain", "العين") : project.location}
                                            </p>
                                        </div>
                                        {project.capacity && (
                                            <div>
                                                <p className="text-foreground/60 text-sm mb-1">{t('capacity') || "Capacity"}</p>
                                                <p className="text-foreground font-medium" dir="ltr">{project.capacity}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
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
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all duration-300 hover:scale-105 rounded"
                            >
                                {t('contactUs')}
                            </Link>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Back to Portfolio */}
            <section className="py-12 bg-background">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 text-accent font-medium hover:gap-4 transition-all"
                    >
                        <span className={language === 'ar' ? 'rotate-180' : ''}>{language === 'ar' ? '→' : '←'}</span>
                        {t('backToPortfolio') || "Back to Portfolio"}
                    </Link>
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
