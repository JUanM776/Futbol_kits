export default function CatalogoPage() {
  const selecciones = [
    { name: "Colombia Local", image: "/selecciones/Colombia.jpg" },
    { name: "Colombia Visitante", image: "/selecciones/Colombia-visitante.jpg" },
    { name: "Argentina", image: "/selecciones/Argentina.jpg" },
    { name: "Brasil", image: "/selecciones/Brasil.jpg" },
    { name: "Portugal", image: "/selecciones/Portugal.jpg" },
    { name: "España", image: "/selecciones/Espana.jpg" },
    { name: "Colombia Mujer", image: "/selecciones/Colombia-mujer.jpeg" },
    { name: "Alemania", image: "/selecciones/alemania.jpg" },
    { name: "Italia", image: "/selecciones/italia.jpg" },
  ];

  const retro = [
    { name: "Colombia 2007", image: "/retro/Colombia-2007.jpg" },
    { name: "Colombia 2007", image: "/retro/Colombia-2007-hombre.jpg" },
    { name: "Colombia 2001", image: "/retro/Colombia-2001.jpeg" },
    { name: "Colombia 1990", image: "/retro/Colombia-1990.jpeg" },
    { name: "Atl. Nacional Retro", image: "/retro/ateltico_nacional.jpeg" },
  ];

  const buzos = [
    { name: "Colombia", image: "/buzos/colombia.jpeg" },
    { name: "Argentina", image: "/buzos/argentina.jpeg" },
    { name: "Barcelona", image: "/buzos/barcelona.jpeg" },
    { name: "Atl. Nacional", image: "/buzos/atletico-nacional.jpeg" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* COVER */}
      <section className="flex h-screen flex-col items-center justify-center text-center">
        <img src="/logo-nineteen.svg" alt="Nineteensports" className="h-16" />
        <p className="mt-6 text-[10px] font-medium tracking-[0.5em] uppercase text-teal-400">
          Catálogo Temporada 2025/26
        </p>
        <p className="mt-4 max-w-md text-sm font-light text-white/50">
          Camisetas triple A de los mejores equipos del mundo. Calidad premium, estilo único.
        </p>
        <div className="mt-6 h-px w-16 bg-teal-400/40" />
      </section>

      {/* SELECCIONES */}
      <section className="px-8 py-16">
        <p className="text-[9px] font-medium tracking-[0.5em] uppercase text-teal-400">Colección</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">Selecciones</h2>
        <div className="mt-2 h-[2px] w-10 bg-teal-400/50" />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {selecciones.map((item) => (
            <div key={item.name + item.image} className="relative overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.name}
                className="aspect-square w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 text-xs font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RETRO */}
      <section className="px-8 py-16">
        <p className="text-[9px] font-medium tracking-[0.5em] uppercase text-teal-400">Archivo</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">Retro</h2>
        <div className="mt-2 h-[2px] w-10 bg-teal-400/50" />

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {retro.map((item) => (
            <div key={item.image} className="relative overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.name}
                className="aspect-square w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 text-[10px] font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BUZOS */}
      <section className="px-8 py-16">
        <p className="text-[9px] font-medium tracking-[0.5em] uppercase text-teal-400">Colección</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">Buzos</h2>
        <div className="mt-2 h-[2px] w-10 bg-teal-400/50" />

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {buzos.map((item) => (
            <div key={item.image} className="relative overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.name}
                className="aspect-square w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 text-[10px] font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section className="flex flex-col items-center justify-center px-8 py-20 text-center">
        <img src="/logo-nineteen.svg" alt="Nineteensports" className="h-10" />
        <div className="mt-4 h-px w-12 bg-teal-400/40" />
        <p className="mt-6 text-sm font-light text-white/50">¿Te gustó algo? Escríbenos.</p>
        <p className="mt-4 text-xs text-white/70">WhatsApp: +57 322 679 3199</p>
        <p className="mt-1 text-xs text-white/70">Instagram: @nineteensports</p>
        <p className="mt-8 text-[10px] text-white/20">© 2026 Nineteensports</p>
      </section>
    </div>
  );
}


