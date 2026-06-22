"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reasons = [
  { icon: "/icons/truck.svg", title: "Envío Rápido", desc: "Entrega en 3-5 días hábiles." },
  { icon: "/icons/originales.svg", title: "Calidad AAA", desc: "Camisetas triple A de la mejor calidad." },
  { icon: "/icons/devoluciones.svg", title: "Devoluciones", desc: "30 días para cambios sin complicaciones." },
  { icon: "/icons/credit-card.svg", title: "Todo tipo de crédito", desc: "Manejamos todo tipo de crédito para tu comodidad." },
];

export default function WhyUs() {
  return (
    <section className="border-t border-white/[0.04] py-28">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-accent-glow/70">
            Garantías
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Por qué elegirnos?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center gap-5 rounded-[20px] border border-glass-border bg-card-bg p-8 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-white/12 hover:shadow-lg hover:shadow-accent-glow/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white/[0.04]">
                <Image src={item.icon} alt={item.title} width={22} height={22} className="invert opacity-50" />
              </div>
              <h3 className="text-[13px] font-semibold tracking-wide text-white">{item.title}</h3>
              <p className="text-[12px] font-normal leading-relaxed text-text-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}










