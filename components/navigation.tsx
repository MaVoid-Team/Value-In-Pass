"use client"

import Link from "next/link"
import { useState } from "react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-serif font-bold tracking-tight text-foreground hover:text-accent transition-colors"
          >
            VIP
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/portfolio" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 space-y-4 border-t border-border pt-4">
            <Link href="/" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link
              href="/portfolio"
              className="block text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
