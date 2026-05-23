"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  { src: "/hero/hero-1.jpeg", position: "center" },
  { src: "/hero/hero-2.jpeg", position: "center 30%" },
  { src: "/hero/hero-3.jpeg", position: "center" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="inicio" className="grain relative h-screen min-h-[700px] overflow-hidden bg-black">
      {/* Images */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={`Editorial fashion ${i + 1}`}
            fill
            className="object-cover"
            style={{ objectPosition: slide.position }}
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end pb-32 sm:items-center sm:pb-0">
        <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-accent-glow/70">
              Temporada 25/26
            </p>

            <h1 className="mt-5 max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
              <img src="/logo-noventa.svg" alt="Noventa" className="h-14 sm:h-20 lg:h-24" />
            </h1>

            <p className="mt-6 max-w-md text-[15px] font-normal leading-relaxed text-text-secondary">
              Camisetas triple A de los mejores equipos del mundo.
              Donde el fútbol se encuentra con la moda.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <a
                href="#selecciones"
                className="rounded-[16px] bg-white px-7 py-3.5 text-[12px] font-semibold tracking-wide text-black transition-all duration-300 hover:scale-[1.03] hover:brightness-90"
              >
                Explorar
              </a>
              <a
                href="/catalogo"
                target="_blank"
                className="rounded-[16px] border border-white/20 bg-white/5 px-7 py-3.5 text-[12px] font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                Descargar Catálogo
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 right-10 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[2px] rounded-full transition-all duration-700 ${
              i === current ? "w-10 bg-white" : "w-4 bg-white/20"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}



