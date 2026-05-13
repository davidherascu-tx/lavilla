const chefServices = [
  {
    label: "Breakfast",
    price: "Included",
    note: "Guest pays for groceries and gratuity",
    accent: true,
  },
  {
    label: "Lunch",
    price: "$150",
    perDay: true,
    note: "Plus food & gratuity, includes server",
  },
  {
    label: "Dinner",
    price: "$175",
    perDay: true,
    note: "Plus food & gratuity, includes server",
  },
  {
    label: "Lunch & Dinner",
    price: "$275",
    perDay: true,
    note: "Same day, plus food & gratuity, includes server",
  },
];

const extras = [
  {
    title: "Professional Bartender",
    price: "$50 USD",
    detail: "8 hours, plus liquor & gratuity",
  },
  {
    title: "Pre-arrival Grocery Delivery",
    price: "$50 USD",
    detail: "Complimentary with any chef services booking",
  },
];

const transportationRates = [
  { capacity: "Up to 6 people", price: "$210" },
  { capacity: "Up to 12 people", price: "$290" },
  { capacity: "Up to 20 people", price: "$330" },
];

const conciergeServices = [
  {
    label: "Excursions & Adventures",
    description: "Curated journeys around Puerto Vallarta and Cabo Corrientes.",
    iconPath:
      "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    label: "Beach Services",
    description: "Loungers, umbrellas, and seaside arrangements.",
    iconPath:
      "M12 3v3m0 14v-3m-9-7h3m14 0h-3M6.6 6.6l2.1 2.1m6.6 6.6l2.1 2.1M6.6 17.4l2.1-2.1m6.6-6.6l2.1-2.1",
  },
  {
    label: "Yacht & Boat Rental",
    description: "Private charters along the Bay of Banderas.",
    iconPath:
      "M3 16.5l9-12 9 12-9 3-9-3zM12 4.5V21",
  },
  {
    label: "Live Music or DJ",
    description: "Local musicians, mariachi or full DJ setups.",
    iconPath:
      "M9 19V6l11-2v13M9 19a3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3 3 3 0 013 3zm11-2a3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3 3 3 0 013 3z",
  },
  {
    label: "Babysitting Services",
    description: "Trusted local sitters for parents looking for a night off.",
    iconPath:
      "M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-7a4 4 0 11-8 0 4 4 0 018 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

export default function RatesPage() {
  return (
    <div className="flex flex-col flex-1 bg-stone-50">

      {/* Hero / Title */}
      <section className="w-full px-4 sm:px-8 lg:px-12 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
            Pricing &amp; Services
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black text-stone-900 leading-none mb-6 sm:mb-8">
            Rates &amp; Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
            La Villa Esplendida offers exceptional value — competitive pricing for upscale accommodations paired with hand-crafted concierge services.
          </p>
        </div>
      </section>

      {/* Villa Rental */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto bg-white rounded-[1.5rem] sm:rounded-[3rem] shadow-xl overflow-hidden flex flex-col lg:flex-row lg:min-h-[480px]">
          <div className="w-full lg:w-1/2 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center">
            <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 sm:mb-6">
              The Villa
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-stone-900 mb-6 sm:mb-8 leading-tight">
              Villa Rental
            </h2>
            <p className="text-stone-600 font-light mb-8 text-base sm:text-lg leading-relaxed max-w-xl">
              The entire estate, exclusively yours.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="border-t-2 border-stone-900 pt-4">
                <span className="text-xs tracking-[0.3em] uppercase text-stone-500 font-bold block mb-2">Bedrooms</span>
                <span className="text-3xl md:text-4xl font-serif font-black text-stone-900">3</span>
              </div>
              <div className="border-t-2 border-stone-900 pt-4">
                <span className="text-xs tracking-[0.3em] uppercase text-stone-500 font-bold block mb-2">Capacity</span>
                <span className="text-3xl md:text-4xl font-serif font-black text-stone-900">Up to 10</span>
              </div>
            </div>
            <a
              href="/contact"
              className="inline-block w-fit px-10 sm:px-12 py-4 text-xs tracking-widest uppercase font-bold text-white bg-stone-900 hover:bg-stone-800 transition-all"
            >
              Request Quote
            </a>
          </div>
          <div className="w-full lg:w-1/2 relative min-h-[320px] sm:min-h-[420px] lg:min-h-[500px]">
            <img
              src="/villa-1.webp"
              alt="The Villa"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Chef Services */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Image */}
          <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full lg:min-h-[720px] rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img
              src="/rates_windows.webp"
              alt="La Villa Esplendida"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div>
            <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
              Dining
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-stone-900 leading-tight mb-4 sm:mb-6">
              Professional Chef Service
            </h2>
            <p className="text-stone-600 font-light text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl">
              Our private chef prepares meals to your taste, served by attentive in-villa staff.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {chefServices.map((service, i) => (
                <div
                  key={i}
                  className={`relative rounded-[1.25rem] sm:rounded-[1.5rem] p-6 sm:p-7 shadow-lg flex flex-col ${
                    service.accent ? "bg-teal-700 text-white" : "bg-stone-50"
                  }`}
                >
                  <span
                    className={`text-xs tracking-[0.3em] uppercase font-bold block mb-3 ${
                      service.accent ? "text-teal-100" : "text-teal-700"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <h3
                    className={`text-xl sm:text-2xl font-serif font-black mb-3 leading-tight ${
                      service.accent ? "text-white" : "text-stone-900"
                    }`}
                  >
                    {service.label}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span
                      className={`text-3xl sm:text-4xl font-serif font-black leading-none ${
                        service.accent ? "text-white" : "text-stone-900"
                      }`}
                    >
                      {service.price}
                    </span>
                    {service.perDay && (
                      <span
                        className={`text-xs font-light ${
                          service.accent ? "text-teal-100" : "text-stone-500"
                        }`}
                      >
                        USD / day
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-xs sm:text-sm font-light leading-relaxed mt-auto ${
                      service.accent ? "text-teal-100" : "text-stone-600"
                    }`}
                  >
                    {service.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Bartender & Grocery */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {extras.map((extra, i) => (
            <div
              key={i}
              className="bg-white rounded-[1.25rem] sm:rounded-[2rem] p-8 sm:p-10 md:p-12 shadow-xl flex flex-col"
            >
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mb-4 leading-tight">
                {extra.title}
              </h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl sm:text-6xl font-serif font-black text-teal-700 leading-none">
                  {extra.price}
                </span>
              </div>
              <p className="text-stone-600 font-light text-base sm:text-lg leading-relaxed">
                {extra.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Transportation */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
              Getting Here
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-stone-900 leading-none mb-4">
              Transportation
            </h2>
            <p className="text-stone-600 font-light text-base sm:text-lg max-w-2xl mx-auto">
              Private pick-up and return to Puerto Vallarta International Airport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {transportationRates.map((rate, i) => (
              <div
                key={i}
                className="bg-stone-50 rounded-[1.25rem] sm:rounded-[2rem] p-8 sm:p-10 shadow-lg flex flex-col"
              >
                <span className="text-xs tracking-[0.3em] uppercase font-bold text-teal-700 block mb-4">
                  Group {i + 1}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mb-6">
                  {rate.capacity}
                </h3>
                <div className="border-t-2 border-stone-900 pt-4 mt-auto">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-serif font-black text-stone-900 leading-none">
                      {rate.price}
                    </span>
                    <span className="text-sm font-light text-stone-500">USD</span>
                  </div>
                  <span className="text-xs tracking-[0.25em] uppercase text-stone-500 font-semibold block mt-2">
                    Roundtrip
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 sm:mt-12 text-stone-500 font-light italic text-sm sm:text-base">
            Additional transportation services available upon request.
          </p>
        </div>
      </section>

      {/* Concierge */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
              Concierge
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-stone-900 leading-none mb-6">
              Concierge Services
            </h2>
            <p className="text-stone-600 font-light text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              Our booking manager and the dedicated team at Transfers and Tours are here to assist with orchestrating your wedding, event, or vacation in Puerto Vallarta.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
            {conciergeServices.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-[1.25rem] sm:rounded-[2rem] p-8 shadow-lg flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-teal-700/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-teal-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={service.iconPath}
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 mb-3 leading-tight">
                  {service.label}
                </h3>
                <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-20 sm:py-24 md:py-32 bg-white">
        <div className="max-w-[900px] mx-auto text-center">
          <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
            Custom Quote
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-stone-900 leading-tight mb-6 sm:mb-8">
            Build your perfect stay
          </h2>
          <p className="text-stone-600 font-light text-base sm:text-lg leading-relaxed mb-10 sm:mb-12">
            Tell us about your dates and what you&apos;d like included — we&apos;ll send a tailored quote within 24 hours.
          </p>
          <a
            href="/contact"
            className="inline-block px-12 py-5 text-xs tracking-widest uppercase font-bold text-white bg-stone-900 hover:bg-stone-800 transition-all shadow-2xl"
          >
            Inquire Now
          </a>
        </div>
      </section>

    </div>
  );
}
