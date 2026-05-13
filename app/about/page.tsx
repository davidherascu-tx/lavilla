const values = [
  {
    title: "Authentic",
    description:
      "A true Mexican experience away from the crowded resort scene — quiet mornings, jungle sounds and a village that still moves to its own rhythm.",
    iconPath:
      "M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M9 13h.01M9 17h.01M13 9h.01M13 13h.01M13 17h.01",
  },
  {
    title: "Intimate",
    description:
      "The villa is yours and yours alone. Three bedrooms, sweeping terraces, a plunge pool and a private team — sized for moments, not crowds.",
    iconPath:
      "M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 10a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2zm-1 6h8",
  },
  {
    title: "Personal",
    description:
      "Every stay is hand-arranged. Our team plans menus, transfers and excursions with you directly — never through a portal or a desk.",
    iconPath:
      "M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-7a4 4 0 11-8 0 4 4 0 018 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

const stats = [
  { value: "3", label: "Bedrooms" },
  { value: "10", label: "Guest Capacity" },
  { value: "50", label: "Wedding Guests" },
  { value: "1:1", label: "Personal Service" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 bg-stone-50">

      {/* Hero / Title */}
      <section className="w-full px-4 sm:px-8 lg:px-12 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black text-stone-900 leading-none mb-6 sm:mb-8">
            About Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
            A private oceanfront villa tucked into the jungle of Cabo Corrientes — built for slow mornings, long dinners and unforgettable celebrations.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="w-full px-4 sm:px-8 lg:px-12 pb-12 sm:pb-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative h-[380px] sm:h-[480px] md:h-[600px] rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="/hero-1.webp"
              alt="La Villa Esplendida"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Welcome / Story */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img
              src="/villa_living.webp"
              alt="The Villa"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
              Welcome
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-stone-900 leading-tight mb-6 sm:mb-8">
              A villa built around the view
            </h2>
            <div className="space-y-5 text-stone-600 font-light leading-relaxed text-base sm:text-lg">
              <p>
                La Villa Esplendida sits on a hillside above Banderas Bay, perched between dense jungle and turquoise water. Every terrace, every window, every meal is composed around the same view — the same one that has captivated our family since the first stone went down.
              </p>
              <p>
                Reaching us is part of the story. There&apos;s no road to our front door — just a five-minute water taxi from the village of Boca de Tomatlán, or a fifteen-minute path through the jungle if you prefer to walk. That short journey is also where the rest of the world stops.
              </p>
              <p>
                What you find on the other side is a property thoughtfully built for small groups: three bedrooms, terraces that catch the breeze, a plunge pool, and a team that knows your names by the second morning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center md:divide-x divide-stone-300">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-6xl sm:text-7xl lg:text-8xl font-serif font-black text-stone-900 mb-3 sm:mb-4 leading-none">
                  {stat.value}
                </div>
                <span className="tracking-[0.3em] uppercase text-stone-500 font-bold text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
              What We Believe
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-stone-900 leading-none mb-6">
              Our Philosophy
            </h2>
            <p className="text-stone-600 font-light text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Three principles shape every stay at La Villa Esplendida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white rounded-[1.25rem] sm:rounded-[2rem] p-8 sm:p-10 md:p-12 shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-teal-700/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-teal-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={value.iconPath} />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mb-4 leading-tight">
                  {value.title}
                </h3>
                <p className="text-stone-600 font-light leading-relaxed text-sm sm:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location callout */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto bg-stone-900 rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 relative min-h-[320px] sm:min-h-[420px] lg:min-h-[520px]">
            <img
              src="/about_pv_header.webp"
              alt="Boca de Tomatlán"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
          </div>
          <div className="w-full lg:w-1/2 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center text-white">
            <span className="text-teal-300 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 sm:mb-6">
              Where We Are
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black mb-6 sm:mb-8 leading-tight">
              Boca de Tomatlán
            </h2>
            <p className="text-stone-200 font-light text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              A fishing village 25 minutes south of Puerto Vallarta, set where the Río Horcones meets the Bay of Banderas. We&apos;re a five-minute boat ride from town and a world away from everywhere else.
            </p>
            <a
              href="/about-pv"
              className="inline-block w-fit px-10 sm:px-12 py-4 text-xs tracking-widest uppercase font-bold text-stone-900 bg-white hover:bg-stone-200 transition-all"
            >
              Discover the Region
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-20 sm:py-24 md:py-32">
        <div className="max-w-[900px] mx-auto text-center">
          <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
            Come and Stay
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-stone-900 leading-tight mb-6 sm:mb-8">
            We&apos;d love to host you
          </h2>
          <p className="text-stone-600 font-light text-base sm:text-lg leading-relaxed mb-10 sm:mb-12">
            Send us a note and we&apos;ll begin planning your stay together.
          </p>
          <a
            href="/contact"
            className="inline-block px-12 py-5 text-xs tracking-widest uppercase font-bold text-white bg-stone-900 hover:bg-stone-800 transition-all shadow-2xl"
          >
            Get in Touch
          </a>
        </div>
      </section>

    </div>
  );
}
