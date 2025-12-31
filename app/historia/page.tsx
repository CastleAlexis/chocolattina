import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function HistoriaPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-chocolate-dark/60 to-chocolate-dark/40 z-10" />
          <Image src="/ensenada.webp" alt="Nuestra Historia" fill sizes="100vw" className="object-cover" />
          <h1 className="relative z-20 text-5xl md:text-6xl font-semibold text-warm-white text-center px-4">
            Nuestra Historia
          </h1>
        </section>

        {/* Story Content */}
        <section className="py-16 md:py-24 bg-warm-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
                            <div>
                <h2 className="text-3xl font-semibold text-chocolate-dark mb-6">El Origen</h2>
                <p className="text-coffee-brown text-lg leading-relaxed mb-4">
                  La Chocolattina nació del sueño de compartir el amor por el chocolate artesanal en el corazón del sur
                  de Chile. En Ensenada, rodeados por la belleza de volcanes y lagos, comenzamos a dar vida a cada una
                  de nuestras creaciones.
                </p>
                <p className="text-coffee-brown text-lg leading-relaxed">
                  Inspirados por la riqueza de nuestra tierra y la calidez de nuestra gente, decidimos crear un espacio
                  donde la tradición chocolatera se encuentre con la innovación artesanal.
                </p>
              </div>

              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden my-12">
                <Image src="/chocolate-artisan-workshop-hands-crafting-detail.webp" alt="Proceso Artesanal" fill sizes="100vw" className="object-cover" />
              </div>

                            <div>
                <h2 className="text-3xl font-semibold text-chocolate-dark mb-6">Nuestro Oficio</h2>
                <p className="text-coffee-brown text-lg leading-relaxed mb-4">
                  Cada día trabajamos con dedicación y pasión. Seleccionamos cuidadosamente cada ingrediente, buscando
                  siempre la más alta calidad. El cacao que utilizamos proviene de productores comprometidos con la
                  excelencia y la sostenibilidad.
                </p>
                <p className="text-coffee-brown text-lg leading-relaxed mb-4">
                  Nuestro proceso es lento y cuidadoso. No hay atajos cuando se trata de crear algo especial. Cada
                  trufa, cada bombón, cada tableta lleva consigo horas de trabajo y años de experiencia.
                </p>
                <p className="text-coffee-brown text-lg leading-relaxed">
                  Creemos en el chocolate como un arte, como una forma de transmitir emociones y crear momentos
                  memorables. Por eso, cada pieza que sale de nuestro taller es única y especial.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold text-chocolate-dark mb-6">Nuestros Valores</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Artesanía",
                      description: "Trabajamos con nuestras manos, respetando técnicas tradicionales.",
                    },
                    {
                      title: "Calidad",
                      description: "Solo los mejores ingredientes forman parte de nuestras creaciones.",
                    },
                    {
                      title: "Cercanía",
                      description: "Cada cliente es parte de nuestra familia.",
                    },
                    {
                      title: "Tradición",
                      description: "Honramos las raíces chocolateras mientras innovamos.",
                    },
                  ].map((value, index) => (
                    <div key={index} className="bg-kraft-beige p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-chocolate-dark mb-2">{value.title}</h3>
                      <p className="text-coffee-brown leading-relaxed">{value.description}</p>
                    </div>
                  ))}
                </div>

              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden my-12">
                <Image src="/ensenada.webp" alt="Ensenada" fill sizes="100vw" className="object-cover" />
              </div>

              <div>
                <h2 className="text-3xl font-semibold text-chocolate-dark mb-6">Hoy</h2>
                <p className="text-coffee-brown text-lg leading-relaxed mb-4">
                  Hoy, La Chocolattina es mÃ¡s que una chocolaterÃ­a. Es un lugar de encuentro, donde familias, parejas y
                  amigos comparten momentos especiales. Es un espacio donde el chocolate nos conecta y nos une.
                </p>
                <p className="text-coffee-brown text-lg leading-relaxed">
                  Te invitamos a ser parte de nuestra historia. A visitarnos, a probar nuestras creaciones y a descubrir
                  el amor que ponemos en cada detalle. En La Chocolattina, siempre serÃ¡s bienvenido.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}




