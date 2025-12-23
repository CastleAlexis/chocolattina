import Link from "next/link"
import { Instagram, MessageCircle, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-chocolate-dark text-warm-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Brand */}
          <div>
            <h3 className="font-display text-3xl mb-4">La Chocolattina</h3>
            <p className="text-kraft-beige text-sm leading-relaxed">
              Chocolate artesanal del sur de Chile, hecho con amor y tradición
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-warm-gold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <p className="text-kraft-beige">
                  Camino a Ensenada Km 42
                  <br />
                  Ensenada, Región de Los Lagos, Chile
                </p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-warm-gold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <Link
                href="https://instagram.com/lachocolattina"
                target="_blank"
                className="hover:text-warm-gold transition-colors"
              >
                <Instagram size={24} />
              </Link>
              <Link href="https://wa.me/56912345678" target="_blank" className="hover:text-whatsapp transition-colors">
                <MessageCircle size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-brown pt-8 text-center text-kraft-beige text-sm">
          <p>&copy; {new Date().getFullYear()} La Chocolattina. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
