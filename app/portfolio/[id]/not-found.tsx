import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
          Project Not Found
        </h1>
        <p className="text-foreground/70 text-lg mb-8 text-center max-w-md">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/portfolio"
          className="inline-block px-8 py-4 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all duration-300 hover:scale-105 rounded"
        >
          Back to Portfolio
        </Link>
      </div>
    </main>
  )
}
