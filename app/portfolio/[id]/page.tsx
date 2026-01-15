import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ScrollAnimation } from "@/components/scroll-animation"
import { getProjectById, portfolioProjects } from "@/lib/portfolio-data"
import { notFound } from "next/navigation"

interface ProjectDetailsPageProps {
  params: Promise<{
    id: string
  }>
}

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Image Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 pb-12">
            <ScrollAnimation type="fadeIn">
              <p className="text-white/80 text-sm md:text-base font-medium tracking-wider mb-3 uppercase">
                {project.type} • {project.location}
              </p>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {project.title}
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
                  Project Overview
                </h2>
                <div className="w-12 h-1 bg-accent mb-6"></div>
                <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Project Details
                </h3>
                <ul className="space-y-4">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <p className="text-foreground/70 leading-relaxed">{detail}</p>
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
                    Project Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-foreground/60 text-sm mb-1">Event Type</p>
                      <p className="text-foreground font-medium">{project.type}</p>
                    </div>
                    <div>
                      <p className="text-foreground/60 text-sm mb-1">Location</p>
                      <p className="text-foreground font-medium">{project.location}</p>
                    </div>
                    {project.capacity && (
                      <div>
                        <p className="text-foreground/60 text-sm mb-1">Capacity</p>
                        <p className="text-foreground font-medium">{project.capacity}</p>
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
              Ready to Create Your Event?
            </h2>
          </ScrollAnimation>

          <ScrollAnimation type="slideUp" delay={200}>
            <p className="text-foreground/70 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              Let's discuss your vision and bring your event to life with our premium tent solutions and expert event management.
            </p>
          </ScrollAnimation>

          <ScrollAnimation type="slideUp" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all duration-300 hover:scale-105 rounded"
              >
                Book a Call Now
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 border-2 border-accent text-accent font-medium hover:bg-accent/10 transition-all duration-300 hover:scale-105 rounded"
              >
                Contact Us Now
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
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
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
