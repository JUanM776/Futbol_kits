"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface Product {
  id: number;
  name: string;
  team: string;
  image: string;
  badge?: string;
}

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-[22px] border border-glass-border bg-card-bg transition-all duration-500 hover:border-white/12 hover:shadow-2xl hover:shadow-accent-glow/5"
    >
      {/* Badge */}
      {product.badge && (
        <span className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-medium tracking-widest uppercase text-white/80 backdrop-blur-md">
          {product.badge}
        </span>
      )}

      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={`${product.name} — ${product.team}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-0.5 p-4">
        <h3 className="text-[12px] font-medium tracking-wide text-white">
          {product.name}
        </h3>
        <p className="text-[11px] font-normal tracking-wider text-text-muted">
          {product.team}
        </p>
      </div>
    </motion.article>
  );
}








