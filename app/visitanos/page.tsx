import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone, MessageCircle, Navigation } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function VisitanosPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-chocolate-dark/60 to-chocolate-dark/40 z-10" />
          <Image
            src="/visitanos.webp"
            alt="Visítanos"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <h1 className="relative z-20 text-5xl md:text-6xl font-semibold text-warm-white text-center px-4">
            Visítanos
          </h1>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-warm-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-semibold text-chocolate-dark mb-8">Información</h2>

                  <div className="space-y-6">
                    {/* Address */}
                    <Card className="bg-kraft-beige border-none shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <MapPin className="text-warm-gold flex-shrink-0 mt-1" size={24} />
                          <div>
                            <h3 className="font-semibold text-chocolate-dark mb-2">Dirección</h3>
                            <p className="text-coffee-brown leading-relaxed">
                              Ruta 225, km 43
                              <br />
                              Ensenada
                              <br />
                              Región de Los Lagos
                              <br />
                              Chile
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Hours */}
                    <Card className="bg-kraft-beige border-none shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Clock className="text-warm-gold flex-shrink-0 mt-1" size={24} />
                          <div>
                            <h3 className="font-semibold text-chocolate-dark mb-2">Horarios</h3>
                            <div className="text-coffee-brown space-y-1">
                              <p>Lunes a Viernes: 10:00 - 19:00</p>
                              <p>Sábados: 11:00 - 20:00</p>
                              <p>Domingos: 11:00 - 20:00</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Phone */}
                    <Card className="bg-kraft-beige border-none shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Phone className="text-warm-gold flex-shrink-0 mt-1" size={24} />
                          <div>
                            <h3 className="font-semibold text-chocolate-dark mb-2">Teléfono</h3>
                            <p className="text-coffee-brown">+56 9 1234 5678</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <Link href="https://wa.me/56912345678" target="_blank" className="block">
                    <Button className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white py-6 text-lg">
                      <MessageCircle className="mr-2" size={24} />
                      Contáctanos por WhatsApp
                    </Button>
                  </Link>
                  <Link href="https://maps.google.com" target="_blank" className="block">
                    <Button className="w-full bg-primary hover:bg-primary/90 py-6 text-lg" variant="default">
                      <Navigation className="mr-2" size={24} />
                      Cómo llegar
                    </Button>
                  </Link>
                </div>
              </div>

                            {/* Map */}
              <div>
                <h2 className="text-3xl font-semibold text-chocolate-dark mb-8">Ubicación</h2>
                <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/mapa-chocolattina.webp"
                    alt="Mapa"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-coffee-brown text-sm mt-4 text-center">
                  Ubicados en el camino hacia el Volc n Osorno, cerca de Puerto Varas
                </p>
              </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-16 md:py-24 bg-kraft-beige">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-chocolate-dark text-center mb-12">Te Esperamos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "/ensenada-osorno.webp",
                "/varas-llanquihue.webp",
                "/volcan-osorno.webp",
              ].map((src, index) => (
                <div key={index} className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                  <Image src={src || "/placeholder.svg"} alt={`La Chocolattina ${index + 1}`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-coffee-brown text-warm-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ven a Conocernos</h2>
            <p className="text-kraft-beige text-lg leading-relaxed mb-8">
              Estamos ansiosos por recibirte en La Chocolattina. Ven a disfrutar de nuestros chocolates artesanales,
              tomar un café y vivir una experiencia única en el corazón de Ensenada. ¡Te esperamos con los brazos
              abiertos!
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}






