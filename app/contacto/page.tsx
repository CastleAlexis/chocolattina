import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Instagram, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-chocolate-dark/60 to-chocolate-dark/40 z-10" />
          <Image
            src="/cascada.webp"
            alt="Contacto"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <h1 className="relative z-20 text-5xl md:text-6xl font-semibold text-warm-white text-center px-4">
            Contacto
          </h1>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24 bg-warm-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-chocolate-dark mb-4">¿Tienes alguna pregunta?</h2>
              <p className="text-coffee-brown text-lg leading-relaxed max-w-2xl mx-auto">
                Nos encantaría escucharte. Escríbenos por WhatsApp, síguenos en Instagram o visítanos directamente en
                nuestro local. Estamos aquí para ayudarte.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* WhatsApp */}
              <Card className="bg-kraft-beige border-none shadow-sm hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-whatsapp text-white p-4 rounded-full mb-4">
                      <MessageCircle size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-chocolate-dark mb-2">WhatsApp</h3>
                    <p className="text-coffee-brown mb-4">La forma más rápida de contactarnos</p>
                    <Link href="https://wa.me/56912345678" target="_blank" className="w-full">
                      <Button className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white">Enviar mensaje</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Instagram */}
              <Card className="bg-kraft-beige border-none shadow-sm hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white p-4 rounded-full mb-4">
                      <Instagram size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-chocolate-dark mb-2">Instagram</h3>
                    <p className="text-coffee-brown mb-4">Síguenos para ver nuestras novedades</p>
                    <Link href="https://instagram.com/lachocolattina" target="_blank" className="w-full">
                      <Button className="w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white">
                        Visitar perfil
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-kraft-beige border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <MapPin className="text-warm-gold mb-3" size={28} />
                    <h3 className="font-semibold text-chocolate-dark mb-2">Dirección</h3>
                    <p className="text-coffee-brown text-sm">
                      Ruta 225, km 43
                      <br />
                      Ensenada, Región de Los Lagos
                      <br />
                      Chile
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-kraft-beige border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Phone className="text-warm-gold mb-3" size={28} />
                    <h3 className="font-semibold text-chocolate-dark mb-2">Teléfono</h3>
                    <p className="text-coffee-brown text-sm">+56 9 1234 5678</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-kraft-beige border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Mail className="text-warm-gold mb-3" size={28} />
                    <h3 className="font-semibold text-chocolate-dark mb-2">Email</h3>
                    <p className="text-coffee-brown text-sm">info@lachocolattina.cl</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-kraft-beige">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-semibold text-chocolate-dark text-center mb-8">Encuéntranos</h2>
            <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg">
              <Image
              src="/petrohue.webp"
              alt="Petrohué"
              fill
              sizes="100vw"
              className="object-cover"
            />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-coffee-brown text-warm-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Estamos Aquí Para Ti</h2>
            <p className="text-kraft-beige text-lg leading-relaxed mb-8">
              Ya sea que quieras hacer un pedido, conocer más sobre nuestros productos o simplemente saludarnos, siempre
              estaremos felices de atenderte. En La Chocolattina, cada cliente es parte de nuestra familia.
            </p>
            <Link href="https://wa.me/56912345678" target="_blank">
              <Button size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-white px-8 py-6 text-lg">
                <MessageCircle className="mr-2" size={24} />
                Escríbenos ahora
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}


