"use client";

import { motion } from "motion/react";

const services = [
  {
    name: "Haircut",
    price: "$43",
    img: "/images/service-haircut.heic",
    alt: "Professional men's haircut service at Gourmet Cuts Barbershop Torrance",
    link: "https://book.squareup.com/appointments/q7rvh6yue1xbxz/location/AR33071JE339B/services/ACYV6HBG5M6OQUNWHDBJE2QN"
  },
  {
    name: "Cut & Beard",
    price: "$53",
    img: "/images/service-beard.webp",
    alt: "Haircut and beard trim service at Gourmet Cuts Barbershop",
    link: "https://book.squareup.com/appointments/q7rvh6yue1xbxz/location/AR33071JE339B/services/ISES24XFAEU4RWPWMLTUVVIX"
  },
];

export default function ServicesPreview() {
  return (
    <section id="services" className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">Our Services</h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Services with images */}
          {services.map((svc, index) => (
            <motion.article
              key={svc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl border border-white/10 hover:bg-white/[0.03] hover:scale-105 transition-all duration-300"
            >
              <a
                href={svc.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Book ${svc.name} service online`}
              >
                <div className="relative w-full aspect-square">
                  <img
                    src={svc.img}
                    alt={svc.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    width="400"
                    height="400"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{svc.name}</h3>
                    <span className="text-base font-medium text-white/70">{svc.price}</span>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}

          {/* After Hours service without image */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:scale-105 transition-all duration-300 p-8 sm:p-12 flex flex-col justify-center items-center text-center min-h-[280px]"
          >
            <a
              href="https://my-site-106413-108211.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex flex-col justify-center items-center"
              aria-label="Book after hours appointment"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">After Hours</h3>
              <span className="text-lg font-medium text-white/70 mb-4">$ Double</span>
              <p className="text-sm text-white/60 leading-relaxed">
                Special appointment scheduling outside regular business hours
              </p>
            </a>
          </motion.article>
        </div>
      </div>
    </section>
  );
}