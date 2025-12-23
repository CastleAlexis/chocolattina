"use client"

import Link from "next/link"
import { useState } from "react"
import { Instagram, MessageCircle, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/historia", label: "Nuestra Historia" },
    { href: "/productos", label: "Productos" },
    { href: "/cafeteria", label: "Cafetería" },
    { href: "/visitanos", label: "Visítanos" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <header className="fixed top-0 w-full z-[9999] bg-[#3b2416] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-display text-3xl text-warm-white">La Chocolattina</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-warm-white transition-colors hover:text-warm-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://instagram.com/lachocolattina"
              target="_blank"
              className="text-warm-white transition-colors hover:text-warm-gold"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://wa.me/56912345678"
              target="_blank"
              className="text-warm-white transition-colors hover:text-whatsapp"
            >
              <MessageCircle size={20} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="text-warm-white" /> : <Menu className="text-warm-white" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 bg-[#3b2416] shadow-sm">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-warm-white hover:text-warm-gold transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-4 pt-4 border-t border-coffee-brown/20">
                <Link href="https://instagram.com/lachocolattina" target="_blank">
                  <Instagram className="text-warm-white hover:text-warm-gold transition-colors" size={24} />
                </Link>
                <Link href="https://wa.me/56912345678" target="_blank">
                  <MessageCircle className="text-warm-white hover:text-whatsapp transition-colors" size={24} />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
