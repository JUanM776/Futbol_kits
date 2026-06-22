"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  "/modelo.jpeg",
  "/modelo_1.jpeg",
  "/modelo_2.jpeg",
  "/modelo_3.jpeg",
  "/modelo_4.jpeg",
  "/modelo_5.jpeg",
  "/modelo_6.jpeg",
  "/modelo_7.jpeg",
  "/modelo_8.jpeg",
];

const marqueePhotos = [...photos, ...photos];

export default function About() {
  return (
    <section id="acerca" className="relative overflow-hidden border-t border-white/[0.04] py-28">
      {/* Background typography */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <span className="select-none text-[15vw] font-black uppercase leading-none tracking-tighter text-teal-400/[0.08]">
          NOSOTROS
        </span>
      </motion.div>
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center"
        >
          <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-accent-glow/70">
            Sobre Nosotros
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pasión por el fútbol
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] font-normal leading-relaxed text-text-secondary">
            En FútbolKits somos fanáticos del fútbol igual que tú. Camisetas
            triple A de los mejores equipos del mundo, con envío rápido y
            atención personalizada.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-marquee gap-5 hover:[animation-play-state:paused]">
          {marqueePhotos.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative h-72 w-52 flex-shrink-0 overflow-hidden rounded-[20px] sm:h-80 sm:w-60"
            >
              <Image
                src={src}
                alt={`Equipo ${(i % photos.length) + 1}`}
                fill
                className="object-cover transition-all duration-500 hover:scale-[1.03] hover:brightness-110"
                sizes="240px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}










