"use client";

import { motion } from "framer-motion";
import ProductCard, { type Product } from "./ProductCard";

interface CatalogSection {
  id: string;
  title: string;
  products: Product[];
}

const sections: CatalogSection[] = [
  {
    id: "selecciones",
    title: "Selecciones",
    products: [
      { id: 1, name: "Colombia Local 25/26", team: "Colombia", image: "/selecciones/Colombia.jpg", badge: "Nuevo" },
      { id: 2, name: "Colombia Visitante 25/26", team: "Colombia", image: "/selecciones/Colombia-visitante.jpg" },
      { id: 3, name: "Colombia Negra", team: "Colombia", image: "/selecciones/Colombia_negra.jpeg" },
      { id: 4, name: "Colombia Entrenamiento", team: "Colombia", image: "/selecciones/Colombia-entrenamiento.jpeg" },
      { id: 5, name: "Colombia Mujer 25/26", team: "Colombia", image: "/selecciones/Colombia-mujer.jpeg" },
      { id: 6, name: "Argentina Local 25/26", team: "Argentina", image: "/selecciones/Argentina.jpg" },
      { id: 7, name: "Brasil Local 25/26", team: "Brasil", image: "/selecciones/Brasil.jpg" },
      { id: 8, name: "Portugal Local 25/26", team: "Portugal", image: "/selecciones/Portugal.jpg" },
      { id: 9, name: "España Local 25/26", team: "España", image: "/selecciones/Espana.jpg" },
      { id: 10, name: "Alemania Local 25/26", team: "Alemania", image: "/selecciones/alemania.jpg" },
      { id: 11, name: "Italia Local 25/26", team: "Italia", image: "/selecciones/italia.jpg" },
      { id: 12, name: "Francia Local 25/26", team: "Francia", image: "/selecciones/Francia-2026.jpeg" },
    ],
  },
  {
    id: "equipos-europeos",
    title: "Equipos Europeos",
    products: [
      { id: 30, name: "Real Madrid Local 25/26", team: "Real Madrid", image: "/equipos_europeos/Real_madrid_local-2025.jpeg", badge: "Nuevo" },
      { id: 31, name: "Real Madrid Visitante 25/26", team: "Real Madrid", image: "/equipos_europeos/Real_madrid_visitante-2025.jpeg" },
      { id: 32, name: "Real Madrid Local 2006", team: "Real Madrid", image: "/equipos_europeos/Real_madrid_local-2006.jpeg" },
      { id: 33, name: "Barcelona Local 25/26", team: "FC Barcelona", image: "/equipos_europeos/Barcelona-2025.jpeg" },
      { id: 34, name: "Liverpool Local 25/26", team: "Liverpool", image: "/equipos_europeos/Liverpool_local-2026.jpeg" },
      { id: 35, name: "Liverpool Verde 25/26", team: "Liverpool", image: "/equipos_europeos/Liverpool_verde-2025.jpeg" },
      { id: 36, name: "Arsenal Local 25/26", team: "Arsenal", image: "/equipos_europeos/Arsenal_local-2026.jpeg" },
      { id: 37, name: "Arsenal Tercera 25/26", team: "Arsenal", image: "/equipos_europeos/Arsenal_tercera_equipacion-2025.jpeg" },
      { id: 38, name: "Chelsea Visitante 25/26", team: "Chelsea", image: "/equipos_europeos/Chelsea_visitante-2025.jpeg" },
      { id: 39, name: "PSG Local 25/26", team: "PSG", image: "/equipos_europeos/Paris-saint_germain-2025.jpeg" },
      { id: 40, name: "Bayern Tercera 25/26", team: "Bayern München", image: "/equipos_europeos/Bayern_munich_tercera_equipacion-2025.jpeg" },
      { id: 41, name: "Athletic Bilbao 25/26", team: "Athletic Bilbao", image: "/equipos_europeos/Athletic_Bilbao-2025.jpeg" },
      { id: 42, name: "Panathinaikos", team: "Panathinaikos", image: "/equipos_europeos/Panathinaikos.jpeg" },
    ],
  },
  {
    id: "equipos-suramericanos",
    title: "Equipos Suramericanos",
    products: [
      { id: 50, name: "Boca Juniors Local 25/26", team: "Boca Juniors", image: "/equipos_suramericanos/Boca_juniors_local-2025.jpeg" },
      { id: 51, name: "River Plate Visitante 25/26", team: "River Plate", image: "/equipos_suramericanos/River_plate_visitante-2025.jpeg" },
      { id: 52, name: "Corinthians Local 25/26", team: "Corinthians", image: "/equipos_suramericanos/Corinthians_local-2025.jpeg" },
      { id: 53, name: "Fluminense 2007", team: "Fluminense", image: "/equipos_suramericanos/Fluminense-2007.jpeg" },
      { id: 54, name: "Atlético Mineiro Negra 25/26", team: "Atlético Mineiro", image: "/equipos_suramericanos/Atletico_mineiro_negra-2025.jpg" },
    ],
  },
  {
    id: "colombia-retro",
    title: "Retro",
    products: [
      { id: 60, name: "Colombia 2007", team: "Selección Colombia", image: "/retro/Colombia-2007.jpg" },
      { id: 61, name: "Colombia 2007", team: "Selección Colombia", image: "/retro/Colombia-2007-hombre.jpg" },
      { id: 62, name: "Colombia 2004", team: "Selección Colombia", image: "/retro/Colombia-2004.jpeg" },
      { id: 63, name: "Colombia 2001", team: "Selección Colombia", image: "/retro/Colombia-2001.jpeg" },
      { id: 64, name: "Colombia 1994", team: "Selección Colombia", image: "/retro/Colombia-1994.jpeg" },
      { id: 65, name: "Colombia 1990", team: "Selección Colombia", image: "/retro/Colombia-1990.jpeg" },
      { id: 66, name: "Colombia Visitante 1990", team: "Selección Colombia", image: "/retro/Colombia_visitante-1990.jpeg" },
      { id: 67, name: "Colombia Mujer 1994", team: "Selección Colombia", image: "/retro/Colombia_mujer-1994.jpeg" },
      { id: 68, name: "Atlético Nacional", team: "Atlético Nacional", image: "/retro/atletico_nacional.jpeg" },
      { id: 69, name: "Beisbolera Nacional", team: "Atlético Nacional", image: "/retro/Beisbolera-atletico_nacional.jpeg" },
      { id: 70, name: "Alemania Visitante 2006", team: "Alemania", image: "/retro/Alemania_visitante-2006.jpeg" },
    ],
  },
  {
    id: "ediciones-especiales",
    title: "Ediciones Especiales",
    products: [
      { id: 80, name: "Colombia Centenario", team: "Selección Colombia", image: "/ediciones_especiales/Colombia_centenario.jpeg", badge: "Exclusivo" },
      { id: 81, name: "Colombia Dorada", team: "Selección Colombia", image: "/ediciones_especiales/Colombia_dorada.jpeg", badge: "Exclusivo" },
      { id: 82, name: "Colombia Negra Centenario", team: "Selección Colombia", image: "/ediciones_especiales/Colombia_negra_centenario.jpeg" },
      { id: 83, name: "Argentina Retro", team: "Argentina", image: "/ediciones_especiales/Argentina_retro.jpeg" },
      { id: 84, name: "Bayern München", team: "Bayern München", image: "/ediciones_especiales/Bayern_Munich.jpeg" },
    ],
  },
  {
    id: "buzos",
    title: "Buzos",
    products: [
      { id: 90, name: "Buzo Colombia", team: "Selección Colombia", image: "/buzos/colombia.jpeg" },
      { id: 91, name: "Buzo Colombia Amarillo", team: "Selección Colombia", image: "/buzos/colombia_amarillo.jpeg" },
      { id: 92, name: "Buzo Argentina", team: "Selección Argentina", image: "/buzos/argentina.jpeg" },
      { id: 93, name: "Buzo Barcelona", team: "FC Barcelona", image: "/buzos/barcelona.jpeg" },
      { id: 94, name: "Buzo Atlético Nacional", team: "Atlético Nacional", image: "/buzos/atletico-nacional.jpeg" },
    ],
  },
  {
    id: "equipaciones-ninos",
    title: "Equipaciones Niños",
    products: [
      { id: 100, name: "Bayern München 25/26", team: "Bayern München", image: "/equipaciones_niño/Bayern_munich-2025.jpeg", badge: "Kids" },
      { id: 101, name: "Brasil Local 25/26", team: "Brasil", image: "/equipaciones_niño/brasil_local-2026.jpeg", badge: "Kids" },
      { id: 102, name: "Colombia Centenario", team: "Colombia", image: "/equipaciones_niño/Colombia_centenario_niño.jpeg", badge: "Kids" },
    ],
  },
];

export default function Catalog() {
  return (
    <div id="collections" className="relative">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="relative scroll-mt-28 overflow-hidden border-t border-white/[0.04] py-28"
        >
          {/* Background typography */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="select-none text-[14vw] font-black uppercase leading-none tracking-tighter text-teal-400/[0.08]">
              {section.title}
            </span>
          </div>

          <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-14"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {section.title}
              </h2>
              <div className="mt-3 h-[2px] w-10 bg-accent-glow/40" />
            </motion.div>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {section.products.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

