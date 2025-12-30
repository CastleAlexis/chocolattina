import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function ProductosPage() {
  const categories = [
    {
      name: "Chocolates",
      products: [
        "Trufas de chocolate negro",
        "Bombones rellenos",
        "Tabletas artesanales",
        "Pralines",
        "Chocolates con frutos secos",
        "Barras de chocolate",
      ],
      image: "/artisan-chocolate-truffles-bonbons.webp",
    },
    {
      name: "Alfajores & Dulces",
      products: [
        "Alfajores de chocolate",
        "Alfajores de manjar",
        "Brownies",
        "Cookies",
        "Turrón artesanal",
        "Dulces tradicionales",
      ],
      image: "/alfajores-dulce-de-leche-cookies.webp",
    },
    {
      name: "Repostería",
      products: [
        "Kuchen de frambuesa",
        "Kuchen de manzana",
        "Tortas de chocolate",
        "Cheesecakes",
        "Macarons",
        "Tartas artesanales",
      ],
      image: "/kuchen-cake-artisan-bakery.webp",
    },
    {
      name: "Productos Especiales",
      products: [
        "Barras de cereal",
        "Granola casera",
        "Mermeladas artesanales",
        "Crema de avellanas",
        "Tabletas para fondue",
        "Cajas regalo",
      ],
      image: "/artisan-jam-granola-specialty-products.webp",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-chocolate-dark/60 to-chocolate-dark/40 z-10" />
          <Image
            src="/chocolate-products-display-artisan-showcase.webp"
            alt="Nuestros Productos"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <h1 className="relative z-20 text-5xl md:text-6xl font-semibold text-warm-white text-center px-4">
            Nuestros Productos
          </h1>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-warm-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <p className="text-coffee-brown text-lg leading-relaxed">
              Cada uno de nuestros productos es creado con dedicación y amor. Utilizamos ingredientes de primera calidad
              para ofrecerte una experiencia única en cada bocado. Te invitamos a descubrir nuestra variedad.
            </p>
          </div>
        </section>

        {/* Categories */}
        {categories.map((category, index) => (
          <section
            key={category.name}
            className={`py-16 md:py-24 ${index % 2 === 0 ? "bg-kraft-beige" : "bg-warm-white"}`}
          >
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {index % 2 === 0 ? (
                  <>
                    <div className="relative h-[400px] rounded-xl overflow-hidden">
                      <Image src={category.image || "/placeholder.svg"} alt={category.name} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-semibold text-chocolate-dark mb-8">{category.name}</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {category.products.map((product, idx) => (
                          <Card key={idx} className="bg-warm-white border-none shadow-sm">
                            <CardContent className="p-4">
                              <p className="text-coffee-brown text-center">{product}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-semibold text-chocolate-dark mb-8">{category.name}</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {category.products.map((product, idx) => (
                          <Card key={idx} className="bg-kraft-beige border-none shadow-sm">
                            <CardContent className="p-4">
                              <p className="text-coffee-brown text-center">{product}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                    <div className="relative h-[400px] rounded-xl overflow-hidden">
                      <Image src={category.image || "/placeholder.svg"} alt={category.name} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-16 bg-coffee-brown text-warm-white">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl font-semibold mb-6">¿Quieres probar nuestros productos?</h2>
            <p className="text-kraft-beige text-lg leading-relaxed mb-8">
              Visítanos en nuestro local en Ensenada o contáctanos por WhatsApp para hacer tu pedido. ¡Te esperamos!
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}


