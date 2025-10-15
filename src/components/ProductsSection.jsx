"use client";

import { motion } from "motion/react";

const products = [
  {
    name: "Pomade",
    price: "$12 - $16",
    description: "Professional-grade styling pomade for a classic finish",
    images: ["/images/pomade.webp"],
    alt: "Professional styling pomade for men's hair"
  },
  {
    name: "Gel",
    price: "$5",
    description: "Strong-hold styling gel for modern looks",
    images: ["/images/gel.webp"],
    alt: "Strong-hold styling gel for men's hair"
  },
  {
    name: "T-Shirts",
    price: "$24",
    description: "Gourmet Cuts branded apparel",
    images: ["/images/shirt1.heic", "/images/shirt2.heic", "/images/shirt3.heic"],
    alt: "Gourmet Cuts Barbershop branded t-shirt"
  }
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">Hair Products</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:bg-white/[0.05] transition-colors duration-200 grid grid-rows-[1fr_auto]"
            >
              {/* Product Images */}
              {product.images.length === 1 ? (
                <div className="relative w-full aspect-square">
                  <img
                    src={product.images[0]}
                    alt={product.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    width="400"
                    height="400"
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-square grid grid-cols-2 grid-rows-2 gap-1">
                  <img
                    src={product.images[0]}
                    alt={`${product.alt} design 1`}
                    className="w-full h-full object-cover rounded-tl-xl"
                    loading="lazy"
                    width="200"
                    height="200"
                  />
                  <img
                    src={product.images[1]}
                    alt={`${product.alt} design 2`}
                    className="w-full h-full object-cover rounded-tr-xl"
                    loading="lazy"
                    width="200"
                    height="200"
                  />
                  <img
                    src={product.images[2]}
                    alt={`${product.alt} design 3`}
                    className="w-full h-full object-cover object-top col-span-2 rounded-b-xl"
                    loading="lazy"
                    width="400"
                    height="200"
                  />
                </div>
              )}

              {/* Product Info */}
              <div className="p-6 sm:p-8 grid grid-rows-[auto_auto_1fr_auto] gap-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <span className="text-lg font-medium text-white/70">{product.price}</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">{product.description}</p>
                <div></div> {/* Spacer */}
                <button className="rounded-full border border-white/30 px-6 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors duration-200">
                  Ask About Availability
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}