"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useState, FormEvent } from "react"
import { useLanguage } from "@/components/language-provider"

export default function Contact() {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("https://formspree.io/f/maqqnapg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", message: "" })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError(t('error'))
      }
    } catch (error) {
      setError(t('failed'))
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
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
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollAnimation type="slideUp">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              {t('getInTouch')}
            </h1>
          </ScrollAnimation>

          <ScrollAnimation type="slideUp" delay={200}>
            <div className="w-12 h-1 bg-accent mb-6"></div>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Have a question about our services or ready to start your next event? We'd love to hear from you.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <ScrollAnimation type="slideUp">
              <div className="space-y-12">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{t('contactInfo')}</h3>
                  <div className="w-8 h-0.5 bg-accent mb-6"></div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">{t('phone')}</h4>
                  <a href="tel:+20 11 25471849" className="text-foreground/70 hover:text-accent transition-colors">
                    +20 11 25471849
                  </a>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">{t('email')}</h4>
                  <div className="space-y-1">
                    <a
                      href="mailto:info@valueinpass.net"
                      className="block text-foreground/70 hover:text-accent transition-colors"
                    >
                      info@valueinpass.net
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">{t('operatingRegions')}</h4>
                  <p className="text-foreground/70">{t('regions')}</p>
                </div>

                <div className="pt-8 border-t border-border">
                  <p className="text-sm text-foreground/60">
                    {t('responseTime')}
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Contact Form */}
            <ScrollAnimation type="slideUp" delay={200}>
              <div className="w-full">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{t('sendMessage')}</h3>
                <div className="w-8 h-0.5 bg-accent mb-6"></div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t('fullName')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all"
                      placeholder={t('fullName')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t('emailAddress')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      {t('phoneNumber')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all text-left"
                      dir="ltr"
                      placeholder="+20 11 25471849"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t('message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-secondary border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all resize-none"
                    ></textarea>
                  </div>

                  {error && (
                    <div className="text-red-600 text-sm">{error}</div>
                  )}

                  {submitted && (
                    <div className="text-green-600 text-sm">{t('success')}</div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-8 py-4 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? t('sending') : submitted ? t('messageSent') : t('sendBtn')}
                  </button>
                </form>
              </div>
            </ScrollAnimation>
          </div>
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
