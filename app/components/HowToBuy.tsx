"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Elige tu camiseta",
    description: "Explora nuestro catálogo y encuentra la que más te guste.",
  },
  {
    number: "02",
    title: "Escríbenos por WhatsApp",
    description: "Cuéntanos cuál quieres, tu talla y te confirmamos disponibilidad.",
  },
  {
    number: "03",
    title: "Recíbela en casa",
    description: "Hacemos el envío y la recibes en 3 a 5 días hábiles.",
  },
];

export default function HowToBuy() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.04] py-28">
      {/* Background typography */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="select-none text-[12vw] font-black uppercase leading-none tracking-tighter text-teal-400/[0.06]">
          COMPRAR
        </span>
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-accent-glow/70">
            Proceso
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Cómo comprar?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="flex flex-col items-center gap-4 rounded-[20px] border border-glass-border bg-card-bg p-8 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-white/12"
            >
              <span className="text-4xl font-bold tracking-tight text-accent-glow/30">
                {step.number}
              </span>
              <h3 className="text-[14px] font-semibold tracking-wide text-white">
                {step.title}
              </h3>
              <p className="text-[12px] font-normal leading-relaxed text-text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

