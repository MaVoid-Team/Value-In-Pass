import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ScrollAnimation } from "@/components/scroll-animation"
import { EventCarousel } from "@/components/event-carousel"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 -z-10">
          <img src="/hero-luxury-events.jpg" alt="Luxury tent event setup" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollAnimation type="fadeIn">
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight text-balance mb-6 text-white">
              Experiences That Inspire
            </h1>
          </ScrollAnimation>

          <ScrollAnimation type="slideUp" delay={200}>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-8 text-white">
              Premium tent setup and event management services that redefine quality, safety, and elegance. From concept
              to execution, we create unforgettable moments.
            </p>
          </ScrollAnimation>

          <ScrollAnimation type="slideUp" delay={400}>
            <Link
              href="/portfolio"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all duration-300 hover:scale-105"
            >
              View Our Work
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
              Our Services
            </h2>
          </ScrollAnimation>

          <ScrollAnimation type="slideUp" delay={200}>
            <div className="w-12 h-1 bg-accent mb-12"></div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            {[
              {
                title: "Wedding Tents",
                description:
                  "Elegant tent setups designed to match your wedding theme, complete with interior and exterior styling. From intimate gatherings to grand celebrations, we bring your vision to life.",
              },
              {
                title: "Corporate Events",
                description:
                  "Professional tent solutions for conferences, product launches, and corporate celebrations. Seamless coordination ensuring your event runs flawlessly.",
              },
              {
                title: "Ramadan & Celebrations",
                description:
                  "Culturally inspired designs for Iftar gatherings, banquets, and special occasion tents. Honoring traditions with modern elegance.",
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
              Featured Project
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation type="slideUp">
              <img src="/luxury-tent-event.jpg" alt="Featured tent project" className="w-full h-auto" />
            </ScrollAnimation>

            <ScrollAnimation type="slideUp" delay={200}>
              <div>
                <p className="text-accent font-medium text-sm tracking-wide mb-4">WEDDING • DUBAI, UAE</p>
                <h3 className="font-serif text-4xl font-bold text-foreground mb-6">Desert Wedding Elegance</h3>
                <p className="text-foreground/70 leading-relaxed mb-8">
                  A breathtaking oriental-designed tent for an intimate desert wedding, featuring premium interior
                  styling and seamless coordination from locating and positioning to final decoration. Every detail
                  crafted to perfection.
                </p>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-3 text-accent font-medium hover:gap-4 transition-all"
                >
                  Explore Portfolio
                  <span>→</span>
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
              Our Process
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Location & Planning", description: "Locating and positioning the tent" },
              { step: "02", title: "Structural Design", description: "Structural setup & design planning" },
              { step: "03", title: "Construction", description: "Tent construction and setup" },
              { step: "04", title: "Final Styling", description: "Decoration and final styling" },
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
              Ready to Create Your Next Experience?
            </h2>
          </ScrollAnimation>

          <ScrollAnimation type="slideUp" delay={200}>
            <p className="text-foreground/70 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              Let's bring your vision to life with premium tent solutions and dedicated event management.
            </p>
          </ScrollAnimation>

          <ScrollAnimation type="slideUp" delay={400}>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
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
              <p className="text-background/80 text-sm">info@valueinpass.com</p>
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
