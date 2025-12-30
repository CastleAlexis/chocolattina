import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen page-shell">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="hero-shell">
          <Image
            src="/la-chocolattina-hero.webp"
            alt="La Chocolattina - Chocolater¡a artesanal"
            width={1920}
            height={1080}
            sizes="100vw"
            priority
            className="hero-image"
          />
        </section>

        {/* Brand Identity */}
        <section className="section-slab py-16 md:py-24">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="section-title text-3xl md:text-4xl text-chocolate-dark mb-6">
              Chocolate artesanal del sur de Chile
            </h2>
            <p className="text-coffee-brown text-lg leading-relaxed">
              En La Chocolattina creamos cada pieza con dedicación y cariño, usando ingredientes de la más alta calidad.
              Nuestra pasión es compartir la tradición chocolatera con cada persona que nos visita.
            </p>
          </div>
        </section>

        {/* Featured Products */}
        <section className="section-cream py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-3xl md:text-4xl text-chocolate-dark text-center mb-12">
              Destacados de la Casa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-grid">
              {[
                {
                  title: "Chocolates Artesanales",
                  description: "Piezas únicas elaboradas con cacao fino de aroma",
                  image: "/artisan-chocolate-truffles-bonbons-handmade.webp",
                },
                {
                  title: "Alfajores & Dulces",
                  description: "Alfajores caseros y dulces tradicionales del sur",
                  image: "/alfajores-dulce-de-leche-traditional-desserts.webp",
                },
                {
                  title: "Café, Té & Kuchen",
                  description: "Acompañamientos perfectos para tu momento especial",
                  image: "/coffee-tea-kuchen-cake-cozy-cafe.webp",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden bg-kraft-beige border-none shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="relative h-64">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-chocolate-dark mb-2">{item.title}</h3>
                    <p className="text-coffee-brown leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Essence */}
        <section className="section-slab py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                <Image src="/chocolate-making-process-artisan-hands-crafting.webp" alt="Nuestra Esencia" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div>
                <h2 className="section-title text-3xl md:text-4xl text-chocolate-dark mb-6">Nuestra Esencia</h2>
                <p className="text-coffee-brown text-lg leading-relaxed mb-4">
                  Cada chocolate que creamos lleva consigo la historia de nuestra tierra, el cuidado de nuestras manos y
                  la pasión por el oficio artesanal.
                </p>
                <p className="text-coffee-brown text-lg leading-relaxed">
                  En el corazón de Ensenada, trabajamos día a día para ofrecerte una experiencia única que celebra lo
                  mejor del sur de Chile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Gallery */}
        <section className="section-cream py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-3xl md:text-4xl text-chocolate-dark text-center mb-12">
              Productos Destacados
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 stagger-grid">
              {[
                { name: "Trufas de chocolate negro", image: "/trufas.webp" },
                { name: "Bombones volcanes", image: "/volcanes.webp" },
                { name: "Tabletas bariloches", image: "/barras-bariloches.webp" },
                { name: "Alfajores caseros", image: "/alfajores.webp" },
                { name: "Honguitos mágicos", image: "/honguito.webp" },
                { name: "Frutos secos", image: "/frutos-secos.webp" },
                { name: "Pistachos", image: "/pistachos.webp" },
                { name: "Kucken", image: "/kucken.webp" },
              ].map((product, index) => (
                <Card
                  key={index}
                  className="overflow-hidden bg-kraft-beige border-none shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image src={product.image || `/.jpg?height=300&width=300&query=${product.name}+chocolate+artisan`} alt={product.name} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-chocolate-dark font-medium text-center">{product.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="section-dark py-16 md:py-24 bg-coffee-brown text-warm-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title text-3xl md:text-4xl mb-6">Experiencia La Chocolattina</h2>
                <p className="text-kraft-beige text-lg leading-relaxed mb-4">
                  Más que una chocolatería, somos un espacio donde cada visita se transforma en un momento memorable. El
                  aroma del chocolate recién hecho, la calidez de nuestro ambiente y la dedicación en cada detalle.
                </p>
                <p className="text-kraft-beige text-lg leading-relaxed">
                  Te invitamos a conocernos, a probar nuestras creaciones y a ser parte de nuestra historia.
                </p>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                <Image src="/chocolattina.webp" alt="Experiencia La Chocolattina" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-cream py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-3xl md:text-4xl text-chocolate-dark text-center mb-12">Opiniones</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto stagger-grid">
              {[
                {
                  text: "El mejor chocolate que he probado en Chile. Cada pieza es una obra de arte.",
                  author: "María González",
                },
                {
                  text: "Un lugar mágico en Ensenada. El café y los kuchen son increíbles.",
                  author: "Pedro Soto",
                },
                {
                  text: "Atención cálida y productos de altísima calidad. Totalmente recomendable.",
                  author: "Ana Martínez",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-kraft-beige border-none shadow-sm">
                  <CardContent className="p-6">
                    <p className="text-coffee-brown leading-relaxed mb-4 italic">"{testimonial.text}"</p>
                    <p className="text-chocolate-dark font-semibold">— {testimonial.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Visit Us */}
        <section className="section-slab py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-3xl md:text-4xl text-chocolate-dark text-center mb-12">Visítanos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-warm-gold flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-chocolate-dark mb-2">Dirección</h3>
                    <p className="text-coffee-brown">
                      Ruta 225, km 43
                      <br />
                      Ensenada, Región de Los Lagos
                      <br />
                      Chile
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-warm-gold flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-chocolate-dark mb-2">Horarios</h3>
                    <p className="text-coffee-brown">
                      Lunes a Viernes: 10:00 - 19:00
                      <br />
                      Sábado y Domingo: 11:00 - 20:00
                    </p>
                  </div>
                </div>
                <Link href="https://wa.me/56912345678" target="_blank">
                  <Button className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white">
                    <MessageCircle className="mr-2" size={20} />
                    Contáctanos por WhatsApp
                  </Button>
                </Link>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image src="/mapa-chocolattina.webp" alt="Ubicación" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}








