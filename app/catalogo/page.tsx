export default function CatalogoPage() {
  const selecciones = [
    { name: "Colombia Local", image: "/selecciones/Colombia.jpg" },
    { name: "Colombia Visitante", image: "/selecciones/Colombia-visitante.jpg" },
    { name: "Colombia Negra", image: "/selecciones/Colombia_negra.jpeg" },
    { name: "Colombia Entrenamiento", image: "/selecciones/Colombia-entrenamiento.jpeg" },
    { name: "Colombia Mujer", image: "/selecciones/Colombia-mujer.jpeg" },
    { name: "Argentina", image: "/selecciones/Argentina.jpg" },
    { name: "Brasil", image: "/selecciones/Brasil.jpg" },
    { name: "Portugal", image: "/selecciones/Portugal.jpg" },
    { name: "España", image: "/selecciones/Espana.jpg" },
    { name: "Alemania", image: "/selecciones/alemania.jpg" },
    { name: "Italia", image: "/selecciones/italia.jpg" },
    { name: "Francia", image: "/selecciones/Francia-2026.jpeg" },
  ];

  const europeos = [
    { name: "Real Madrid Local", image: "/equipos_europeos/Real_madrid_local-2025.jpeg" },
    { name: "Real Madrid Visitante", image: "/equipos_europeos/Real_madrid_visitante-2025.jpeg" },
    { name: "Real Madrid 2006", image: "/equipos_europeos/Real_madrid_local-2006.jpeg" },
    { name: "Barcelona 25/26", image: "/equipos_europeos/Barcelona-2025.jpeg" },
    { name: "Barcelona 2026", image: "/equipos_europeos/Barcelona-2026.jpeg" },
    { name: "Barcelona 2015", image: "/equipos_europeos/Barcelona-2015.jpeg" },
    { name: "Liverpool Local", image: "/equipos_europeos/Liverpool_local-2026.jpeg" },
    { name: "Liverpool Verde", image: "/equipos_europeos/Liverpool_verde-2025.jpeg" },
    { name: "Arsenal Local", image: "/equipos_europeos/Arsenal_local-2026.jpeg" },
    { name: "Arsenal Tercera", image: "/equipos_europeos/Arsenal_tercera_equipacion-2025.jpeg" },
    { name: "Chelsea Visitante", image: "/equipos_europeos/Chelsea_visitante-2025.jpeg" },
    { name: "PSG", image: "/equipos_europeos/Paris-saint_germain-2025.jpeg" },
    { name: "Bayern Tercera", image: "/equipos_europeos/Bayern_munich_tercera_equipacion-2025.jpeg" },
    { name: "Athletic Bilbao", image: "/equipos_europeos/Athletic_Bilbao-2025.jpeg" },
    { name: "Panathinaikos", image: "/equipos_europeos/Panathinaikos.jpeg" },
  ];

  const suramericanos = [
    { name: "Boca Juniors", image: "/equipos_suramericanos/Boca_juniors_local-2025.jpeg" },
    { name: "River Plate", image: "/equipos_suramericanos/River_plate_visitante-2025.jpeg" },
    { name: "Corinthians", image: "/equipos_suramericanos/Corinthians_local-2025.jpeg" },
    { name: "Fluminense", image: "/equipos_suramericanos/Fluminense-2007.jpeg" },
    { name: "Atlético Mineiro", image: "/equipos_suramericanos/Atletico_mineiro_negra-2025.jpg" },
  ];

  const retro = [
    { name: "Colombia 2007", image: "/retro/Colombia-2007.jpg" },
    { name: "Colombia 2007", image: "/retro/Colombia-2007-hombre.jpg" },
    { name: "Colombia 2004", image: "/retro/Colombia-2004.jpeg" },
    { name: "Colombia 2001", image: "/retro/Colombia-2001.jpeg" },
    { name: "Colombia 1994", image: "/retro/Colombia-1994.jpeg" },
    { name: "Colombia 1990", image: "/retro/Colombia-1990.jpeg" },
    { name: "Colombia Visitante 1990", image: "/retro/Colombia_visitante-1990.jpeg" },
    { name: "Colombia Mujer 1994", image: "/retro/Colombia_mujer-1994.jpeg" },
    { name: "Atl. Nacional", image: "/retro/atletico_nacional.jpeg" },
    { name: "Beisbolera Nacional", image: "/retro/Beisbolera-atletico_nacional.jpeg" },
    { name: "Alemania 2006", image: "/retro/Alemania_visitante-2006.jpeg" },
  ];

  const especiales = [
    { name: "Colombia Centenario", image: "/ediciones_especiales/Colombia_centenario.jpeg" },
    { name: "Colombia Dorada", image: "/ediciones_especiales/Colombia_dorada.jpeg" },
    { name: "Colombia Negra Centenario", image: "/ediciones_especiales/Colombia_negra_centenario.jpeg" },
    { name: "Argentina Retro", image: "/ediciones_especiales/Argentina_retro.jpeg" },
    { name: "Bayern München", image: "/ediciones_especiales/Bayern_Munich.jpeg" },
  ];

  const buzos = [
    { name: "Colombia", image: "/buzos/colombia.jpeg" },
    { name: "Colombia Amarillo", image: "/buzos/colombia_amarillo.jpeg" },
    { name: "Argentina", image: "/buzos/argentina.jpeg" },
    { name: "Barcelona", image: "/buzos/barcelona.jpeg" },
    { name: "Atl. Nacional", image: "/buzos/atletico-nacional.jpeg" },
  ];

  const ninos = [
    { name: "Bayern München", image: "/equipaciones_niño/Bayern_munich-2025.jpeg" },
    { name: "Brasil Local", image: "/equipaciones_niño/brasil_local-2026.jpeg" },
    { name: "Colombia Centenario", image: "/equipaciones_niño/Colombia_centenario_niño.jpeg" },
    { name: "Barcelona", image: "/equipaciones_niño/Barcelona-2026.jpeg" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white print:bg-black">
      {/* COVER */}
      <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/10 via-transparent to-transparent" />
        <div className="relative z-10">
          <img src="/logo-nineteen.svg" alt="Nineteensports" className="mx-auto h-20" />
          <div className="mt-8 h-px w-20 bg-teal-400/30 mx-auto" />
          <p className="mt-6 text-[11px] font-medium tracking-[0.5em] uppercase text-teal-400">
            Catálogo Temporada 2025/26
          </p>
          <p className="mt-4 max-w-sm text-[14px] font-light leading-relaxed text-white/40 mx-auto">
            Camisetas triple A de los mejores equipos del mundo
          </p>
        </div>
        <p className="absolute bottom-8 text-[10px] tracking-[0.3em] uppercase text-white/15">
          Nineteensports
        </p>
      </section>

      {/* SECTIONS */}
      <CatalogSection label="Colección" title="Selecciones" items={selecciones} />
      <CatalogSection label="Clubes" title="Equipos Europeos" items={europeos} />
      <CatalogSection label="Clubes" title="Equipos Suramericanos" items={suramericanos} />
      <CatalogSection label="Archivo" title="Retro" items={retro} />
      <CatalogSection label="Limitada" title="Ediciones Especiales" items={especiales} />
      <CatalogSection label="Colección" title="Buzos" items={buzos} />
      <CatalogSection label="Kids" title="Equipaciones Niños" items={ninos} />

      {/* BACK COVER */}
      <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/10 via-transparent to-transparent" />
        <div className="relative z-10">
          <img src="/logo-nineteen.svg" alt="Nineteensports" className="mx-auto h-14" />
          <div className="mt-6 h-px w-12 bg-teal-400/30 mx-auto" />
          <p className="mt-8 text-[13px] font-light text-white/50">¿Te gustó algo? Escríbenos.</p>
          <div className="mt-6 flex flex-col items-center gap-2">
            <p className="text-[12px] font-medium text-white/70">WhatsApp: +57 320 237 1435</p>
            <p className="text-[12px] font-medium text-white/70">Instagram: @n0venta.co_</p>
          </div>
          <p className="mt-12 text-[9px] tracking-wider text-white/15">
            © 2026 Nineteensports — Todos los derechos reservados
          </p>
        </div>
      </section>
    </div>
  );
}

function CatalogSection({ label, title, items }: { label: string; title: string; items: { name: string; image: string }[] }) {
  return (
    <section className="px-10 py-20 border-t border-white/[0.03]">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[9px] font-medium tracking-[0.5em] uppercase text-teal-400">{label}</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight">{title}</h2>
        <div className="mt-2 h-[2px] w-8 bg-teal-400/50" />

        <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
          {items.map((item) => (
            <div key={item.name + item.image} className="relative overflow-hidden rounded-xl group">
              <img
                src={item.image}
                alt={item.name}
                className="aspect-[3/4] w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <p className="absolute bottom-2.5 left-3 right-3 text-[10px] font-semibold leading-tight tracking-wide">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
