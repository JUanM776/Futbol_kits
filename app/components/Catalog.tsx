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
      { id: 1, name: "Colombia Local 25/26", team: "Colombia", image: "/Selecciones/Colombia.jpg", badge: "Nuevo" },
      { id: 2, name: "Colombia Visitante 25/26", team: "Colombia", image: "/Selecciones/Colombia-visitante.jpg" },
      { id: 3, name: "Argentina Local 25/26", team: "Argentina", image: "/Selecciones/Argentina.jpg" },
      { id: 4, name: "Brasil Local 25/26", team: "Brasil", image: "/Selecciones/Brasil.jpg" },
      { id: 25, name: "Portugal Local 25/26", team: "Portugal", image: "/Selecciones/Portugal.jpg" },
      { id: 26, name: "España Local 25/26", team: "España", image: "/Selecciones/España.jpg" },
      { id: 27, name: "Colombia Mujer 25/26", team: "Colombia", image: "/Selecciones/Colombia-mujer.jpeg" },
    ],
  },
  {
    id: "colombia-retro",
    title: "Colombia Retro",
    products: [
      { id: 17, name: "Colombia Retro 2007", team: "Selección Colombia", image: "/Retro/Colombia-2007.jpg" },
      { id: 18, name: "Colombia Retro 2007", team: "Selección Colombia", image: "/Retro/Colombia-2007-hombre.jpg" },
      { id: 19, name: "Colombia Retro 2001", team: "Selección Colombia", image: "/Retro/Colombia-2001.jpeg" },
      { id: 20, name: "Colombia Retro 1990", team: "Selección Colombia", image: "/Retro/Colombia-1990.jpeg" },
    ],
  },
  {
    id: "buzos",
    title: "Buzos",
    products: [
      { id: 21, name: "Buzo Colombia 25/26", team: "Selección Colombia", image: "/Buzos/colombia.jpeg" },
      { id: 22, name: "Buzo Argentina 25/26", team: "Selección Argentina", image: "/Buzos/argentina.jpeg" },
      { id: 23, name: "Buzo Barcelona 25/26", team: "FC Barcelona", image: "/Buzos/barcelona.jpeg" },
      { id: 24, name: "Buzo Atlético Nacional 25/26", team: "Atlético Nacional", image: "/Buzos/atletico-nacional.jpeg" },
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

            {section.products.length > 0 ? (
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                {section.products.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            ) : (
              <p className="py-16 text-center text-[14px] font-normal tracking-wide text-text-muted">
                Próximamente
              </p>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
