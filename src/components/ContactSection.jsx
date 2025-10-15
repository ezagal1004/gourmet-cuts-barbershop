"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
      <div className="grid items-center gap-12 lg:gap-16 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">Visit Our Torrance Location</h2>
          <p className="mt-6 text-white/80 text-lg leading-relaxed">
            Gourmet Cuts Barbershop delivers clean fades, classic cuts, and beard care with attention to detail.
            Proudly serving the Torrance community since 2020. Walk in with confidence, walk out feeling fresh.
          </p>
          <address className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-base text-white/80 not-italic">
            <div>
              <dt className="text-white/60 font-medium mb-1">Address</dt>
              <dd>
                <span itemProp="streetAddress">4626 Del Amo Blvd</span><br />
                <span itemProp="addressLocality">Torrance</span>, <span itemProp="addressRegion">CA</span> <span itemProp="postalCode">90503</span>
              </dd>
            </div>
            <div>
              <dt className="text-white/60 font-medium mb-1">Phone</dt>
              <dd>
                <a href="tel:+13105040691" className="hover:underline transition-all" itemProp="telephone">(310) 504-0691</a>
              </dd>
            </div>
            <div>
              <dt className="text-white/60 font-medium mb-1">Hours</dt>
              <dd itemProp="openingHours">
                <time>Tue–Thu 12–7PM</time> • <time>Fri 11–7PM</time> • <time>Sat 10–4PM</time>
              </dd>
            </div>
            <div>
              <dt className="text-white/60 font-medium mb-1">Follow</dt>
              <dd>
                <a href="https://www.instagram.com/gourmetcuts/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all" aria-label="Follow Gourmet Cuts on Instagram">
                  @gourmetcuts
                </a>
              </dd>
            </div>
          </address>
          <div className="mt-10 flex gap-4 flex-wrap">
            <Link href="https://my-site-106413-108211.square.site/" className="rounded-full bg-white px-8 py-4 text-base font-semibold text-black hover:opacity-90 transition-opacity duration-200" aria-label="Book barbershop appointment online">
              Book Now
            </Link>
            <Link href="https://maps.app.goo.gl/9ia7RnAhEHMtcykz8" className="rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors duration-200" aria-label="Get directions to Gourmet Cuts Barbershop">
              Get Directions
            </Link>
          </div>
        </div>

        {/* Animated Map Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-[url('/images/map-thumb.jpg')] bg-cover bg-center"
          role="img"
          aria-label="Image showing Gourmet Cuts Barbershop location at 4626 Del Amo Blvd, Torrance, CA"
        />
      </div>
    </section>
  );
}