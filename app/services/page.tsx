"use client"

import Link from "next/link"
import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useLanguage } from "@/components/language-provider"

export default function ServicesPage() {
    const { t, language } = useLanguage()

    const services = [
        {
            id: "wedding-tents",
            title: t('weddingSetup'),
            description: t('weddingSetupLong'),
            image: "/carousel-wedding-luxury.jpg",
            features: [t('premiumMaterials'), t('customizedSolutions'), t('professionalTeam')],
        },
        {
            id: "corporate-events",
            title: t('corporateSetup'),
            description: t('corporateSetupLong'),
            image: "/carousel-corporate-gala.jpg",
            features: [t('onTimeDelivery'), t('professionalTeam'), t('customizedSolutions')],
        },
        {
            id: "ramadan-tents",
            title: t('culturalSetup'),
            description: t('culturalSetupLong'),
            image: "/carousel-ramadan-iftar.jpg",
            features: [t('premiumMaterials'), t('customizedSolutions'), t('professionalTeam')],
        },
    ]

    const hotelSupplies = [
        {
            title: t('pillow'),
            desc: t('pillowDesc'),
            image: "/hotel-pillow.png",
        },
        {
            title: t('topper'),
            desc: t('topperDesc'),
            image: "/mattress-topper.png",
        },
        {
            title: t('duvet'),
            desc: t('duvetDesc'),
            image: "/hotel-duvet.png",
        },
        {
            title: t('bedding'),
            desc: t('beddingDesc'),
            image: "/bedding-set.png",
        },
    ]

    return (
        <main className="min-h-screen bg-background">
            {/* Back Button */}
            <div className={`fixed top-4 md:top-6 z-50 ${language === 'ar' ? 'right-4 md:right-6' : 'left-4 md:left-6'}`}>
                <Link
                    href="/"
                    className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-border/50 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-sm"
                >
                    <span className={language === 'ar' ? 'rotate-180' : ''}>←</span> {t('home') || "Home"}
                </Link>
            </div>

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-background">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <ScrollAnimation type="slideUp">
                        <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                            {t('ourCollection')}
                        </h1>
                    </ScrollAnimation>

                    <ScrollAnimation type="slideUp" delay={200}>
                        <div className="w-12 h-1 bg-accent mb-6"></div>
                        <p className="text-foreground/70 text-lg max-w-2xl leading-relaxed">
                            {t('collectionDesc')}
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-12 bg-background">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
                    {services.map((service, idx) => (
                        <div key={service.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                            <ScrollAnimation type="slideUp" className="w-full md:w-1/2">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation type="slideUp" delay={200} className="w-full md:w-1/2">
                                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    {service.title}
                                </h2>
                                <div className="w-12 h-0.5 bg-accent mb-6"></div>
                                <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-foreground/80">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollAnimation>
                        </div>
                    ))}
                </div>
            </section>

            {/* Hotel Supplies Section */}
            <section className="py-24 bg-secondary/30">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <ScrollAnimation type="slideUp">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                            {t('hotelSupplies')}
                        </h2>
                        <div className="w-12 h-1 bg-accent mb-12"></div>
                        <p className="text-foreground/70 text-lg max-w-2xl leading-relaxed mb-12">
                            {t('hotelSuppliesLong')}
                        </p>
                    </ScrollAnimation>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {hotelSupplies.map((item, idx) => (
                            <ScrollAnimation key={idx} type="slideUp" delay={idx * 100}>
                                <div className="bg-background rounded-lg p-6 border border-border/50 hover:border-accent/50 transition-colors h-full">
                                    <div className="relative w-full aspect-square mb-6 bg-secondary/20 rounded-md overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-contain p-4"
                                        />
                                    </div>
                                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">{item.title}</h3>
                                    <p className="text-foreground/60 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-background">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <ScrollAnimation type="slideUp">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                            {t('interestedService')}
                        </h2>
                    </ScrollAnimation>

                    <ScrollAnimation type="slideUp" delay={200}>
                        <p className="text-foreground/70 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                            {t('contactTeam')}
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation type="slideUp" delay={400}>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all duration-300 hover:scale-105"
                        >
                            {t('contactUs')}
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
