"use client";

import Image from "next/image";

const selecciones = [
  { name: "Colombia Local", image: "/selecciones/Colombia.jpg" },
  { name: "Colombia Visitante", image: "/selecciones/Colombia-visitante.jpg" },
  { name: "Argentina", image: "/selecciones/Argentina.jpg" },
  { name: "Brasil", image: "/selecciones/Brasil.jpg" },
  { name: "Portugal", image: "/selecciones/Portugal.jpg" },
  { name: "España", image: "/selecciones/España.jpg" },
  { name: "Colombia Mujer", image: "/selecciones/Colombia-mujer.jpeg" },
];

const retro = [
  { name: "Colombia 2007", image: "/retro/Colombia-2007.jpg" },
  { name: "Colombia 2007", image: "/retro/Colombia-2007-hombre.jpg" },
  { name: "Colombia 2001", image: "/retro/Colombia-2001.jpeg" },
  { name: "Colombia 1990", image: "/retro/Colombia-1990.jpeg" },
];

const buzos = [
  { name: "Colombia", image: "/buzos/colombia.jpeg" },
  { name: "Argentina", image: "/buzos/argentina.jpeg" },
  { name: "Barcelona", image: "/buzos/barcelona.jpeg" },
  { name: "Atl. Nacional", image: "/buzos/atletico-nacional.jpeg" },
];

export default function CatalogoPage() {
  return (
    <div className="catalog-print bg-[#050505] text-white">
      {/* ===== PAGE 1: COVER ===== */}
      <section className="page relative flex h-screen items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero/hero-2.jpeg"
            alt="Cover"
            fill
            className="object-cover object-[center_30%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="text-[10px] font-medium tracking-[0.5em] uppercase text-teal-400">
            Catálogo Temporada 2025/26
          </p>
          <h1 className="mt-4 text-7xl font-bold tracking-tight">FútbolKits</h1>
          <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-white/50">
            Camisetas triple A de los mejores equipos del mundo.
            Calidad premium, estilo único.
          </p>
          <div className="mt-8 h-px w-20 bg-teal-400/40" />
        </div>

        {/* Large background text */}
        <span className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 select-none text-[12vw] font-black uppercase leading-none tracking-tighter text-white/[0.03]">
          FÚTBOLKITS
        </span>
      </section>

      {/* ===== PAGE 2: SELECCIONES ===== */}
      <section className="page relative flex min-h-screen flex-col overflow-hidden px-12 py-16">
        {/* Background text */}
        <span className="pointer-events-none absolute right-[-5%] top-1/2 -translate-y-1/2 -rotate-90 select-none text-[10vw] font-black uppercase leading-none tracking-tighter text-teal-400/[0.05]">
          SELECCIONES
        </span>

        {/* Header */}
        <div className="relative mb-12">
          <p className="text-[9px] font-medium tracking-[0.5em] uppercase text-teal-400">
            Colección
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight">Selecciones</h2>
          <div className="mt-3 h-[2px] w-10 bg-teal-400/50" />
          <p className="mt-3 max-w-md text-xs font-light text-white/40">
            La identidad de cada nación en una camiseta. Temporada 2025/26.
          </p>
        </div>

        {/* Grid — editorial asymmetric layout */}
        <div className="relative grid flex-1 grid-cols-4 gap-4">
          {/* First row: 4 items */}
          {selecciones.slice(0, 4).map((item) => (
            <div key={item.name + item.image} className="group relative overflow-hidden rounded-2xl">
              <div className="relative aspect-[3/4]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <p className="absolute bottom-4 left-4 text-xs font-semibold tracking-wide">
                {item.name}
              </p>
            </div>
          ))}
          {/* Second row: 3 items + empty space */}
          {selecciones.slice(4).map((item) => (
            <div key={item.name + item.image} className="group relative overflow-hidden rounded-2xl">
              <div className="relative aspect-[3/4]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <p className="absolute bottom-4 left-4 text-xs font-semibold tracking-wide">
                {item.name}
              </p>
            </div>
          ))}
          {/* Fill last spot with branding */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            <p className="text-2xl font-bold tracking-tight text-white/10">FK</p>
            <p className="mt-2 text-[9px] font-medium tracking-[0.3em] uppercase text-teal-400/50">
              7 modelos
            </p>
          </div>
        </div>
      </section>

      {/* ===== PAGE 3: RETRO + BUZOS ===== */}
      <section className="page relative flex min-h-screen flex-col overflow-hidden px-12 py-16">
        {/* Background text */}
        <span className="pointer-events-none absolute left-[-3%] top-1/2 -translate-y-1/2 rotate-90 select-none text-[8vw] font-black uppercase leading-none tracking-tighter text-teal-400/[0.05]">
          ARCHIVO
        </span>

        <div className="grid flex-1 grid-cols-2 gap-12">
          {/* Left: Retro */}
          <div>
            <div className="mb-8">
              <p className="text-[9px] font-medium tracking-[0.5em] uppercase text-teal-400">
                Archivo
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">Colombia Retro</h2>
              <div className="mt-3 h-[2px] w-10 bg-teal-400/50" />
              <p className="mt-3 max-w-xs text-xs font-light text-white/40">
                Piezas clásicas que marcaron una era. Ediciones limitadas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {retro.map((item, i) => (
                <div key={item.image} className="relative overflow-hidden rounded-xl">
                  <div className="relative aspect-square">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <p className="absolute bottom-3 left-3 text-[10px] font-semibold tracking-wide">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Buzos */}
          <div>
            <div className="mb-8">
              <p className="text-[9px] font-medium tracking-[0.5em] uppercase text-teal-400">
                Colección
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">Buzos</h2>
              <div className="mt-3 h-[2px] w-10 bg-teal-400/50" />
              <p className="mt-3 max-w-xs text-xs font-light text-white/40">
                Entrenamiento y estilo. Piezas técnicas para dentro y fuera de la cancha.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {buzos.map((item) => (
                <div key={item.image} className="relative overflow-hidden rounded-xl">
                  <div className="relative aspect-square">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <p className="absolute bottom-3 left-3 text-[10px] font-semibold tracking-wide">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PAGE 4: BACK COVER ===== */}
      <section className="page relative flex h-screen flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero/hero-3.jpeg"
            alt="Back cover"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-5xl font-bold tracking-tight">FútbolKits</h2>
          <div className="mt-6 h-px w-16 bg-teal-400/40" />
          <p className="mt-6 text-sm font-light text-white/50">
            ¿Te gustó algo? Escríbenos.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <p className="text-xs font-medium text-white/70">
              WhatsApp: +57 300 000 0000
            </p>
            <p className="text-xs font-medium text-white/70">
              Instagram: @futbolkits
            </p>
          </div>
          <p className="mt-12 text-[10px] font-light tracking-wider text-white/20">
            © 2026 FútbolKits — Todos los derechos reservados
          </p>
        </div>
      </section>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .page { page-break-after: always; break-after: page; }
          .page:last-child { page-break-after: avoid; }
        }
        @media screen {
          .catalog-print { max-width: 100%; }
          .page { border-bottom: 1px solid rgba(255,255,255,0.03); }
        }
      `}</style>
    </div>
  );
}

