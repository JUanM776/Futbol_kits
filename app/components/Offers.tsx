import Image from "next/image";

export default function Offers() {
  return (
    <section
      id="ofertas"
      className="relative overflow-hidden bg-primary text-white"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          {/* Text */}
          <div className="max-w-lg text-center lg:text-left">
            <span className="inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent">
              ⏰ Oferta Limitada
            </span>
            <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Hasta{" "}
              <span className="text-accent">30% OFF</span>{" "}
              en camisetas seleccionadas
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/60">
              Aprovecha nuestras ofertas de temporada. Envío gratis en compras
              mayores a $150. Stock limitado.
            </p>
            <a
              href="#catalogo"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-accent px-7 py-3 text-sm font-semibold transition-colors hover:bg-accent-hover"
            >
              Comprar Ahora
            </a>
          </div>

          {/* Feature cards */}
          <div className="grid w-full max-w-sm grid-cols-2 gap-4">
            {[
              { icon: "/icons/truck.svg", title: "Envío Gratis", desc: "En compras +$150" },
              { icon: "/icons/devoluciones.svg", title: "Devoluciones", desc: "30 días gratis" },
              { icon: "/icons/originales.svg", title: "Originales", desc: "100% auténticas" },
              { icon: "/icons/credit-card.svg", title: "Pago Seguro", desc: "Todas las tarjetas" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white/5 p-5 text-center backdrop-blur-sm"
              >
                <Image src={item.icon} alt={item.title} width={36} height={36} className="invert" />
                <p className="text-sm font-bold">{item.title}</p>
                <p className="text-xs text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




