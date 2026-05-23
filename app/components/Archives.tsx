"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const seasons = [
  {
    year: "25/26",
    title: "Selecciones",
    description: "La identidad de cada nación. Colores, texturas y orgullo en cada camiseta oficial.",
    image: "/selecciones/Colombia.jpg",
    accent: "from-teal-900/30",
    href: "#selecciones",
  },
  {
    year: "Retro",
    title: "Archivo Fútbol",
    description: "Las eras que definieron el fútbol. Piezas clásicas reimaginadas con alma vintage.",
    image: "/retro/Colombia-2001.jpeg",
    accent: "from-blue-900/30",
    href: "#colombia-retro",
  },
  {
    year: "Nuevo",
    title: "Buzos",
    description: "Entrenamiento y estilo. Piezas técnicas para dentro y fuera de la cancha.",
    image: "/buzos/barcelona.jpeg",
    accent: "from-accent-red/30",
    href: "#buzos",
  },
];

export default function Archives() {
  return (
    <section id="world-seasons" className="relative overflow-hidden py-32">
      {/* Background typography */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <span className="select-none text-[18vw] font-black uppercase leading-none tracking-tighter text-teal-400/[0.08]">
          TEMPORADAS
        </span>
      </motion.div>

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-lg"
        >
          <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-accent-glow/70">
            Temporadas
          </p>
          <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Colecciones
          </h2>
          <p className="mt-5 text-[15px] font-normal leading-relaxed text-text-secondary">
            Cada temporada cuenta una historia. Explora nuestras colecciones
            inspiradas en las eras que definieron el fútbol como cultura.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {seasons.map((season, i) => (
            <motion.a
              key={season.title}
              href={season.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative flex h-[500px] flex-col justify-end overflow-hidden rounded-[24px] sm:h-[560px]"
            >
              {/* Image */}
              <Image
                src={season.image}
                alt={`Colección ${season.title}`}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-[1.04] group-hover:brightness-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Overlays */}
              <div className={`absolute inset-0 bg-gradient-to-t ${season.accent} via-transparent to-black/30`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Year */}
              <div className="absolute right-6 top-6 z-10">
                <span className="text-[64px] font-bold leading-none tracking-tighter text-white/[0.06] transition-all duration-500 group-hover:text-white/[0.12] sm:text-[80px]">
                  {season.year}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {season.title}
                </h3>
                <p className="mt-3 max-w-xs text-[13px] font-normal leading-relaxed text-white/40 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  {season.description}
                </p>
                <div className="mt-4 flex items-center gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-accent-glow/70">
                    Explorar
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-3.5 w-3.5 text-accent-glow/70">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}




