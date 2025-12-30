import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function CafeteriaPage() {
  const bebidas = ["Café espresso", "Cappuccino", "Latte", "Chocolate caliente", "Té premium", "Chai latte"]

  const acompanamientos = ["Kuchen del día", "Brownies", "Cookies", "Macarons", "Cheesecake", "Torta de chocolate"]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-chocolate-dark/60 to-chocolate-dark/40 z-10" />
          <Image
            src="/cozy-cafe-coffee-chocolate-warm-atmosphere.webp"
            alt="Cafetería"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <h1 className="relative z-20 text-5xl md:text-6xl font-semibold text-warm-white text-center px-4">
            Cafetería
          </h1>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-24 bg-warm-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="/ensenada-momento.webp"
                  alt="Experiencia Cafetería"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-chocolate-dark mb-6">Un Momento Para Ti</h2>
                <p className="text-coffee-brown text-lg leading-relaxed mb-4">
                  Nuestra cafetería es el espacio perfecto para disfrutar de un momento de tranquilidad. Ya sea que
                  vengas solo, con amigos o en familia, te ofrecemos un ambiente acogedor donde cada detalle está
                  pensado para tu comodidad.
                </p>
                <p className="text-coffee-brown text-lg leading-relaxed">
                  Acompaña tu café o té favorito con nuestros productos de repostería artesanal. Todo preparado con
                  dedicación y amor, para que cada visita sea especial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu */}
        <section className="py-16 md:py-24 bg-kraft-beige">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-chocolate-dark text-center mb-12">Nuestro Menú</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Bebidas */}
              <div>
                <h3 className="text-2xl font-semibold text-chocolate-dark mb-6 text-center">Bebidas</h3>
                <div className="space-y-3">
                  {bebidas.map((bebida, index) => (
                    <Card key={index} className="bg-warm-white border-none shadow-sm">
                      <CardContent className="p-4">
                        <p className="text-coffee-brown text-center">{bebida}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Acompañamientos */}
              <div>
                <h3 className="text-2xl font-semibold text-chocolate-dark mb-6 text-center">Acompañamientos</h3>
                <div className="space-y-3">
                  {acompanamientos.map((item, index) => (
                    <Card key={index} className="bg-warm-white border-none shadow-sm">
                      <CardContent className="p-4">
                        <p className="text-coffee-brown text-center">{item}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-coffee-brown text-center mt-12 text-lg">
              Pregunta por nuestras opciones del día y especiales de temporada
            </p>
          </div>
        </section>

        {/* Ambiente */}
        <section className="py-16 md:py-24 bg-warm-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/lugar-cafe.webp"
                  alt="Interior Cafetería"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <Image src="/lugar-cafe-dos.webp" alt="Terraza" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div className="text-center mt-12 max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold text-chocolate-dark mb-6">Ambiente Acogedor</h2>
              <p className="text-coffee-brown text-lg leading-relaxed">
                Disfruta de nuestro espacio interior cálido o de nuestra terraza con vista a los volcanes. Cada rincón
                de La Chocolattina está diseñado para que te sientas como en casa, rodeado de la belleza natural de
                Ensenada.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}




