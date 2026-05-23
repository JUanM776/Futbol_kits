"use client";

import { motion } from "framer-motion";

const contactInfo = [
  { label: "Email", value: "info@futbolkits.com", icon: "✉" },
  { label: "Teléfono", value: "+57 300 000 0000", icon: "☎" },
  { label: "Ubicación", value: "Colombia", icon: "📍" },
];

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden border-t border-white/[0.04] py-28">
      {/* Background typography */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <span className="select-none text-[16vw] font-black uppercase leading-none tracking-tighter text-teal-400/[0.08]">
          CONTACTO
        </span>
      </motion.div>

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-accent-glow/70">
              Contacto
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Escríbenos
            </h2>
            <p className="mt-5 max-w-sm text-[15px] font-normal leading-relaxed text-text-secondary">
              ¿Tienes preguntas sobre tallas, envíos o disponibilidad?
              Escríbenos y te respondemos rápido.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-[20px] border border-glass-border bg-card-bg p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/12 hover:shadow-lg hover:shadow-accent-glow/5"
                >
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-[11px] font-medium tracking-wider uppercase text-text-muted">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-white">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <form
              className="rounded-[24px] border border-glass-border bg-card-bg p-8 sm:p-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-[11px] font-medium tracking-wider uppercase text-text-muted">
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full rounded-[16px] border border-white/[0.08] bg-white/[0.04] px-5 py-4 text-sm text-white placeholder-text-muted outline-none transition-all focus:border-accent-glow/40 focus:ring-1 focus:ring-accent-glow/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-[11px] font-medium tracking-wider uppercase text-text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full rounded-[16px] border border-white/[0.08] bg-white/[0.04] px-5 py-4 text-sm text-white placeholder-text-muted outline-none transition-all focus:border-accent-glow/40 focus:ring-1 focus:ring-accent-glow/20"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-[11px] font-medium tracking-wider uppercase text-text-muted">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full resize-none rounded-[16px] border border-white/[0.08] bg-white/[0.04] px-5 py-4 text-sm text-white placeholder-text-muted outline-none transition-all focus:border-accent-glow/40 focus:ring-1 focus:ring-accent-glow/20"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-[16px] bg-white py-4 text-[13px] font-semibold tracking-wide text-black transition-all duration-300 hover:scale-[1.01] hover:brightness-90"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



