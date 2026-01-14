"use client"

import type React from "react"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ScrollAnimation } from "@/components/scroll-animation"
import { type FormEvent, useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error("Error sending email:", error)
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
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollAnimation type="slideUp">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Get In Touch
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
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Contact Information</h3>
                  <div className="w-8 h-0.5 bg-accent mb-6"></div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Phone</h4>
                  <a href="tel:+201116459994" className="text-foreground/70 hover:text-accent transition-colors">
                    +20 111 6459994
                  </a>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Email</h4>
                  <div className="space-y-1">
                    <a
                      href="mailto:z.ahmed@mavoid.com"
                      className="block text-foreground/70 hover:text-accent transition-colors"
                    >
                      z.ahmed@mavoid.com
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Operating Regions</h4>
                  <p className="text-foreground/70">United Arab Emirates & Egypt</p>
                </div>

                <div className="pt-8 border-t border-border">
                  <p className="text-sm text-foreground/60">
                    We typically respond within 24 hours during business days.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Contact Form */}
            <ScrollAnimation type="slideUp" delay={200}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
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
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-secondary border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all resize-none"
                    placeholder="Tell us about your event..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-8 py-4 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all duration-300 hover:scale-105 disabled:opacity-50"
                >
                  {isLoading ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
                </button>
              </form>
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
                Premium event and tent solutions across UAE and Egypt.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <Link href="/" className="hover:text-background transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-background transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-background transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-sm">Get In Touch</h4>
              <p className="text-background/80 text-sm mb-2">+20 111 6459994</p>
              <p className="text-background/80 text-sm">z.ahmed@mavoid.com</p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
            <p>&copy; 2025 Value In Pass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
