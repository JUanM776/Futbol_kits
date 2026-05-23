"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const catalogCategories = [
  { name: "Selecciones", href: "#selecciones" },
  { name: "Retro", href: "#colombia-retro" },
  { name: "Buzos", href: "#buzos" },
];

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Colecciones", href: "#collections" },
  { name: "Temporadas", href: "#world-seasons" },
  { name: "Catálogo", href: "#selecciones" },
  { name: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={navRef} className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`flex w-full max-w-[900px] items-center justify-between rounded-full border px-6 py-3 transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-black/60 backdrop-blur-2xl"
            : "border-glass-border bg-glass-bg backdrop-blur-xl"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="/logo-noventa-alt.svg" alt="Noventa" className="h-7" />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[12px] font-medium tracking-wide text-white/50 transition-all duration-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="p-2 text-white/60 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-4 right-4 rounded-2xl border border-glass-border bg-black/80 p-6 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-white/60 transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-2 border-t border-white/5 pt-4">
                <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-white/30">Categorías</p>
                {catalogCategories.map((cat) => (
                  <a
                    key={cat.name}
                    href={cat.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-1.5 text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {cat.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}



