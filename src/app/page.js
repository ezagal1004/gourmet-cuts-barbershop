import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";

export default function Home() {

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative h-[100dvh] min-h-screen overflow-hidden" role="banner">

        {/* VIDEO BACKGROUND */}
        <VideoBackground />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" aria-hidden="true" />

        {/* HERO CONTENT */}
        <div className="relative z-10 flex flex-col h-full">

          {/* NAV / HEADER */}
          <header className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <Link href="/" aria-label="Gourmet Cuts Barbershop Home">
                <img src="/square-logo.png" alt="Gourmet Cuts Barbershop logo" className="h-16 w-16 object-contain invert md:hidden" width="64" height="64" />
                <img src="/nav-logo.png" alt="Gourmet Cuts Barbershop logo" className="h-16 sm:h-18 lg:h-20 w-auto object-contain invert hidden md:inline-block" width="auto" height="80" />
              </Link>

              <nav className="hidden md:flex gap-8 text-base font-medium" aria-label="Main navigation">
                <a href="#appointments" className="hover:opacity-90 transition-opacity">Appointments</a>
                <a href="#services" className="hover:opacity-90 transition-opacity">Services</a>
                <a href="#products" className="hover:opacity-90 transition-opacity">Products</a>
                <a href="#contact" className="hover:opacity-90 transition-opacity">Contact</a>
              </nav>

              <Link
                href="https://my-site-106413-108211.square.site/"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold backdrop-blur hover:bg-white/20 transition-all duration-200"
                aria-label="Book appointment online"
              >
                Book Now
              </Link>
            </div>
          </header>

          {/* HERO TEXT */}
          <div className="hero-mobile-safe flex-1 flex items-end px-4 sm:px-6 lg:px-8 pb-24 sm:pb-24 lg:pb-32">
            <div className="max-w-7xl mx-auto w-full">
              <div className="max-w-4xl">
                <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                  Professional Haircuts & Beard Trims.<br />
                  <span className="text-white/90">Torrance, CA</span>
                </h1>
                <p className="mt-6 text-xl leading-relaxed text-white/80 sm:text-xl lg:text-2xl max-w-3xl">
                  Walk in looking good, walk out feeling great. Expert barbering since 2020 at Gourmet Cuts Barbershop.
                </p>
                <div className="mt-10 flex gap-6 flex-wrap">
                  <Link
                    href="https://my-site-106413-108211.square.site/"
                    className="rounded-full bg-white px-10 py-5 text-lg font-semibold text-black hover:opacity-90 transition-opacity duration-200"
                    aria-label="Book your haircut appointment online"
                  >
                    Book Your Appointment
                  </Link>
                  <Link
                    href="#services"
                    className="rounded-full border border-white/30 px-10 py-5 text-lg font-semibold text-white hover:bg-white/10 transition-colors duration-200"
                  >
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* QUICK NAV / VALUE PROPS */}
      <article id="appointments" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-12">
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Book Your Appointment</h2>
            <p className="mt-4 sm:mt-6 text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
              Please read the following before booking your appointment:
            </p>
            <ul className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 lg:space-y-6">
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/50 rounded-full mt-2.5 sm:mt-3 flex-shrink-0" aria-hidden="true"></span>
                <span className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Please be <strong className="text-white/90 font-semibold">ON TIME</strong> for your appointment.
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/50 rounded-full mt-2.5 sm:mt-3 flex-shrink-0" aria-hidden="true"></span>
                <span className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Please book the <strong className="text-white/90 font-semibold">CORRECT service</strong> you wish to receive. Additional services cannot be added once you arrive.
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/50 rounded-full mt-2.5 sm:mt-3 flex-shrink-0" aria-hidden="true"></span>
                <span className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Be sure to review our <strong className="text-white/90 font-semibold">Cancellation / No-Show policy</strong> before finalizing your appointment to avoid any misunderstandings.
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/50 rounded-full mt-2.5 sm:mt-3 flex-shrink-0" aria-hidden="true"></span>
                <span className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed">
                  If you are a <strong className="text-white/90 font-semibold">NO-SHOW</strong>, you will be charged for that appointment.
                </span>
              </li>
            </ul>
            <div className="mt-8 sm:mt-10 lg:mt-12">
              <a
                href="https://my-site-106413-108211.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-black hover:opacity-90 transition-opacity duration-200"
                aria-label="Book your barbershop appointment online"
              >
                Book Your Appointment
              </a>
            </div>
          </div>
        </div>
      </article>


      {/* SERVICES PREVIEW */}
      <section id="services" className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">Our Services</h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* Services with images */}
            {[
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
            ].map((svc) => (
              <article
                key={svc.name}
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
              </article>
            ))}

            {/* After Hours service without image */}
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:scale-105 transition-all duration-300 p-8 sm:p-12 flex flex-col justify-center items-center text-center min-h-[280px]">
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
            </article>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">Hair Products</h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Pomade */}
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:bg-white/[0.05] transition-colors duration-200 grid grid-rows-[1fr_auto]">
              <div className="relative w-full aspect-square">
                <img
                  src="/images/pomade.webp"
                  alt="Professional styling pomade for men's hair"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  width="400"
                  height="400"
                />
              </div>
              <div className="p-6 sm:p-8 grid grid-rows-[auto_auto_1fr_auto] gap-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold">Pomade</h3>
                  <span className="text-lg font-medium text-white/70">$12 - $16</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">Professional-grade styling pomade for a classic finish</p>
                <div></div> {/* Spacer */}
                <button className="rounded-full border border-white/30 px-6 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors duration-200">
                  Ask About Availability
                </button>
              </div>
            </article>

            {/* Gel */}
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:bg-white/[0.05] transition-colors duration-200 grid grid-rows-[1fr_auto]">
              <div className="relative w-full aspect-square">
                <img
                  src="/images/gel.webp"
                  alt="Strong-hold styling gel for men's hair"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  width="400"
                  height="400"
                />
              </div>
              <div className="p-6 sm:p-8 grid grid-rows-[auto_auto_1fr_auto] gap-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold">Gel</h3>
                  <span className="text-lg font-medium text-white/70">$5</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">Strong-hold styling gel for modern looks</p>
                <div></div> {/* Spacer */}
                <button className="rounded-full border border-white/30 px-6 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors duration-200">
                  Ask About Availability
                </button>
              </div>
            </article>

            {/* T-Shirts */}
            <article className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:bg-white/[0.05] transition-colors duration-200 grid grid-rows-[1fr_auto]">
              <div className="relative w-full aspect-square grid grid-cols-2 grid-rows-2 gap-1">
                <img
                  src="/images/shirt1.heic"
                  alt="Gourmet Cuts Barbershop branded t-shirt design 1"
                  className="w-full h-full object-cover rounded-tl-xl"
                  loading="lazy"
                  width="200"
                  height="200"
                />
                <img
                  src="/images/shirt2.heic"
                  alt="Gourmet Cuts Barbershop branded t-shirt design 2"
                  className="w-full h-full object-cover rounded-tr-xl"
                  loading="lazy"
                  width="200"
                  height="200"
                />
                <img
                  src="/images/shirt3.heic"
                  alt="Gourmet Cuts Barbershop branded t-shirt design 3"
                  className="w-full h-full object-cover object-top col-span-2 rounded-b-xl"
                  loading="lazy"
                  width="400"
                  height="200"
                />
              </div>
              <div className="p-6 sm:p-8 grid grid-rows-[auto_auto_1fr_auto] gap-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold">T-Shirts</h3>
                  <span className="text-lg font-medium text-white/70">$24</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">Gourmet Cuts branded apparel</p>
                <div></div> {/* Spacer */}
                <button className="rounded-full border border-white/30 px-6 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors duration-200">
                  Ask About Availability
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>


      {/* ABOUT & LOCATION */}
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

          {/* Map thumbnail placeholder. Replace with real embed on Contact page. */}
          <div 
            className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-[url('/images/map-thumb.jpg')] bg-cover bg-center"
            role="img"
            aria-label="Map showing Gourmet Cuts Barbershop location at 4626 Del Amo Blvd, Torrance, CA"
          />
        </div>
      </section>

      {/* REVIEWS / SOCIAL PROOF */}
      <section className="border-t border-white/10 bg-white/[0.02] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">Customer Reviews</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Michael Larson",
                text: "Been going here over a year for my haircut. I always look good after!",
                rating: 5
              },
              {
                name: "Joseph Lane",
                text: "Was skeptical of all the five star reviews but Bob is legit. First haircut I've gotten where I didn't want an adjustment. Would recommend booking in advance!",
                rating: 5
              },
              {
                name: "James Ku",
                text: "Got a haircut today from Bob and he did a great job. Very fine work and great attention to detail. Cool guy to have a chat with too. I'll be back next month.",
                rating: 5
              }
            ].map((review, i) => (
              <article
                key={i}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-transform hover:scale-105 hover:shadow-lg duration-300"
                itemScope
                itemType="https://schema.org/Review"
              >
                {/* Quote icon */}
                <span className="absolute top-6 left-6 text-white/30 text-4xl font-bold" aria-hidden="true">"</span>

                <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" className="sr-only">
                  <meta itemProp="ratingValue" content={review.rating} />
                  <meta itemProp="bestRating" content="5" />
                </div>

                <blockquote className="text-base text-white/80 mt-8 leading-relaxed" itemProp="reviewBody">{review.text}</blockquote>
                <cite className="mt-6 text-sm text-white/60 font-semibold not-italic">— <span itemProp="author">{review.name}</span></cite>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <a
              href="https://www.google.com/search?client=safari&sca_esv=7550878c098e0420&rls=en&sxsrf=AE3TifO9y59CbJGmR7xnJzal0u36ILt5Yw:1757015523535&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E4VAB-KFqpwUPe8mD1vBhzIjbOxuK_c9gMAZt6iIMiKaA545H-aiFhWKf-kloYy2nZ3zI-snkCWCg-Se5gyIevBpDKNYp_okMlnSK5cpp_qFTP48-A%3D%3D&q=Gourmet+Cuts+Barbershop+Reviews&sa=X&ved=2ahUKEwjDuZTx8L-PAxVohu4BHcN3EREQ0bkNegQIJBAE&cshid=1757015534706263&biw=1440&bih=900&dpr=2#cobssid=s&lrd=0x80c2b50438afa1c1:0x99288a9704c79dd4,3,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-white/30 px-6 py-3 text-base hover:bg-white/10 transition-colors duration-200"
              aria-label="Leave a review for Gourmet Cuts Barbershop on Google"
            >
              Review us on Google
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12 text-sm text-white/60">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} Gourmet Cuts Barbershop • Torrance, CA</p>
            <nav className="flex gap-6" aria-label="Footer navigation">
              <Link href="#appointments" className="hover:text-white transition-colors">Appointments</Link>
              <Link href="#services" className="hover:text-white transition-colors">Services</Link>
              <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </footer>
    </main >
  );
}