import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ScrollAnimation } from "@/components/scroll-animation"
import { portfolioProjects } from "@/lib/portfolio-data"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation type="slideUp">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Our Portfolio
            </h1>
          </ScrollAnimation>

          <ScrollAnimation type="slideUp" delay={200}>
            <div className="w-12 h-1 bg-accent mb-6"></div>
            <p className="text-foreground/70 text-lg max-w-2xl leading-relaxed">
              A curated collection of our premium tent setups and event projects. Each project showcases our commitment
              to quality, creativity, and attention to detail.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, idx) => (
              <ScrollAnimation key={project.id} type="slideUp" delay={(idx % 3) * 100}>
                <Link href={`/portfolio/${project.id}`} className="group block cursor-pointer">
                  <div className="relative overflow-hidden h-80 mb-6 bg-secondary rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                  <div>
                    <p className="text-accent font-medium text-xs tracking-widest mb-2">
                      {project.type} • {project.location}
                    </p>
                    <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </Link>
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
              Inspired by Our Work?
            </h2>
          </ScrollAnimation>

          <ScrollAnimation type="slideUp" delay={200}>
            <p className="text-foreground/70 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              Let's discuss your event vision and create an unforgettable experience together.
            </p>
          </ScrollAnimation>

          <ScrollAnimation type="slideUp" delay={400}>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
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
