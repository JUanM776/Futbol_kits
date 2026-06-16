"use client";

import { motion } from "framer-motion";

const videos = [
  { src: "/videos/Colombia_local.mp4", title: "Colombia Local", tag: "Nuevo" },
  { src: "/videos/colombia_negra.mp4", title: "Colombia Negra", tag: "Exclusivo" },
  { src: "/videos/colombia_entrenamiento.mp4", title: "Colombia Entrenamiento", tag: "Nuevo" },
  { src: "/videos/colombia_entrenamiento_azul.mp4", title: "Colombia Entrenamiento Azul", tag: "Nuevo" },
  { src: "/videos/brasil_local.mp4", title: "Brasil Local", tag: "Nuevo" },
  { src: "/videos/brasil_visitante.mp4", title: "Brasil Visitante", tag: "Nuevo" },
  { src: "/videos/Atletico_nacional.mp4", title: "Atlético Nacional", tag: "Retro" },
  { src: "/videos/Camisetas.mp4", title: "Colección", tag: "Lookbook" },
  { src: "/videos/uniformes_nenes.mp4", title: "Uniformes Niños", tag: "Kids" },
];

export default function VideoShowcase() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.04] py-28">
      {/* Background typography */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="select-none text-[12vw] font-black uppercase leading-none tracking-tighter text-teal-400/[0.06]">
          LOOKBOOK
        </span>
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-[11px] font-medium tracking-[0.4em] uppercase text-accent-glow/70">
            Lookbook
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            En Movimiento
          </h2>
          <p className="mt-3 max-w-md text-[14px] font-normal text-text-muted">
            Mira cómo se ven nuestras camisetas en detalle.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {videos.map((video, i) => (
            <motion.div
              key={video.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-[20px] border border-glass-border bg-card-bg"
            >
              <div className="relative aspect-[9/16]">
                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[9px] font-medium tracking-widest uppercase text-accent-glow backdrop-blur-md">
                  {video.tag}
                </span>

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[12px] font-semibold tracking-wide text-white">
                    {video.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

