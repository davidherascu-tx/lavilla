const dayRates = [
  { day: "Monday – Thursday", base: "$6,500", additional: "$200" },
  { day: "Friday or Sunday", base: "$7,000", additional: "$200" },
  { day: "Saturday", base: "$7,500", additional: "$200" },
];

const ceremonyDetails = [
  "Customized ceremony planning and design",
  "One hour ceremony rehearsal scheduled for 10:00 – 11:00 am the day prior to your wedding",
  "Private getting ready rooms for the bride and groom",
  "Ceremony and reception coordination the day of your event",
  "Champagne service as your guests arrive for the ceremony",
  "Ceremony set up on our lower terrace facing the bay/ocean with our cupola as the altar",
  "Rustic X-back chairs for up to 50 people",
];

const timelineSegments = [
  { hours: "4", label: "Getting Ready", description: "Photos, hair, makeup and venue set up" },
  { hours: "0.5", label: "Ceremony", description: "On the lower terrace facing the bay" },
  { hours: "1", label: "Cocktail Hour", description: "Reception with passed appetizers" },
  { hours: "3.5", label: "Dinner & Dancing", description: "Family style service and celebration" },
];

const includedItems = [
  "5′ round tables with rustic X-back chairs",
  "White cotton floor-length linens and napkins",
  "White china, flatware and glassware",
  "Votive candles throughout",
  "Cake table, cocktail and bistro tables",
  "Complimentary cake cutting service",
  "Event manager, servers, bartenders and all service personnel",
  "Set up and clean up",
];

export default function WeddingPage() {
  return (
    <div className="flex flex-col flex-1 bg-stone-50">

      {/* Hero / Title */}
      <section className="w-full px-4 sm:px-8 lg:px-12 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
            Celebrate Love
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black text-stone-900 leading-none mb-6 sm:mb-8">
            Weddings &amp; Receptions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
            Celebrate your love story in a breathtaking oceanfront setting. From the ceremony on our lower terrace to family-style dinner under the stars, every detail is handled by our dedicated team.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="w-full px-4 sm:px-8 lg:px-12 pb-12 sm:pb-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative h-[380px] sm:h-[480px] md:h-[600px] rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="/wedding-1.webp"
              alt="Wedding at La Villa Esplendida"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Package Overview */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
              The Package
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-stone-900 leading-tight mb-8">
              Wedding &amp; Reception Packages
            </h2>
            <p className="text-stone-600 font-light text-base sm:text-lg leading-relaxed mb-8">
              Every wedding at La Villa Esplendida is customized to your vision. The base package covers everything from rehearsal to clean-up, and includes the following:
            </p>
            <ul className="space-y-4">
              {ceremonyDetails.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-teal-700 font-serif font-black text-xl leading-none mt-1 shrink-0">
                    0{i + 1}
                  </span>
                  <span className="text-stone-700 font-light text-base sm:text-lg leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl order-first lg:order-last">
            <img
              src="/wedding-2.webp"
              alt="Wedding ceremony"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
              Your Day
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-stone-900 leading-none mb-4">
              9 Hours of Bliss
            </h2>
            <p className="text-stone-600 font-light text-base sm:text-lg max-w-2xl mx-auto">
              4 hours for getting ready, photos and set up, followed by 5 event hours with your guests.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {timelineSegments.map((segment, i) => (
              <div
                key={i}
                className="border-t-2 border-stone-900 pt-6 sm:pt-8"
              >
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl sm:text-6xl font-serif font-black text-stone-900 leading-none">
                    {segment.hours}
                  </span>
                  <span className="text-base sm:text-lg text-stone-500 font-light">hr</span>
                </div>
                <h3 className="text-xs sm:text-sm tracking-[0.3em] uppercase font-bold text-teal-700 mb-3">
                  {segment.label}
                </h3>
                <p className="text-stone-600 font-light leading-relaxed text-sm sm:text-base">
                  {segment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
              Pricing
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-stone-900 leading-none mb-6">
              Package Rates
            </h2>
            <p className="text-stone-600 font-light text-base sm:text-lg max-w-2xl mx-auto">
              Based on your final guest count. Minimum of 30 guests, maximum of 80.
            </p>
          </div>

          {/* Pricing Table */}
          <div className="bg-white rounded-[1.25rem] sm:rounded-[2rem] shadow-2xl overflow-hidden">
            <div className="hidden md:grid grid-cols-3 gap-4 px-10 py-6 bg-stone-900 text-white">
              <span className="text-xs tracking-[0.3em] uppercase font-bold">Day of the Week</span>
              <span className="text-xs tracking-[0.3em] uppercase font-bold text-right">30 Guests or Less</span>
              <span className="text-xs tracking-[0.3em] uppercase font-bold text-right">Each Additional Guest</span>
            </div>
            {dayRates.map((rate, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 px-6 sm:px-10 py-6 sm:py-8 ${
                  i !== dayRates.length - 1 ? "border-b border-stone-200" : ""
                }`}
              >
                <div>
                  <span className="md:hidden text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block mb-1">Day</span>
                  <span className="text-lg sm:text-xl font-serif font-bold text-stone-900">{rate.day}</span>
                </div>
                <div className="md:text-right">
                  <span className="md:hidden text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block mb-1">30 Guests or Less</span>
                  <span className="text-2xl sm:text-3xl font-serif font-black text-teal-700">{rate.base}</span>
                </div>
                <div className="md:text-right">
                  <span className="md:hidden text-xs tracking-[0.3em] uppercase font-bold text-stone-500 block mb-1">Each Additional Guest</span>
                  <span className="text-lg sm:text-xl font-serif font-bold text-stone-700">{rate.additional}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 text-center space-y-2">
            <p className="text-stone-500 font-light text-sm sm:text-base">
              Please inquire about holiday pricing. Children 5 and under are complimentary once the base package has been met.
            </p>
            <p className="text-stone-500 font-light text-sm sm:text-base">
              The standard <span className="font-semibold text-stone-700">16% Mexican IVA tax</span> is applied to the event total.
            </p>
          </div>
        </div>
      </section>

      {/* Reception Package Details */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
              Reception Package
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-stone-900 leading-none">
              What&apos;s Included
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">

            {/* Open Bar */}
            <div className="bg-stone-50 rounded-[1.25rem] sm:rounded-[2rem] p-8 sm:p-10 md:p-12 shadow-lg">
              <div className="w-16 h-16 rounded-full bg-teal-700/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 3h8l-1.5 9a3.5 3.5 0 01-7 0L6 3h2zm4 13v5m-3 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mb-4">Full Open Bar</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-6 text-sm sm:text-base">
                4.5 hours of unlimited bar service starting at the cocktail hour following the ceremony.
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-stone-700 font-light">
                <li className="flex gap-3"><span className="text-teal-700">›</span> Deluxe liquor drinks</li>
                <li className="flex gap-3"><span className="text-teal-700">›</span> House wine, sparkling wine &amp; beer</li>
                <li className="flex gap-3"><span className="text-teal-700">›</span> 1 white &amp; 1 red wine poured at the table</li>
                <li className="flex gap-3"><span className="text-teal-700">›</span> All beverages served at the bar throughout</li>
              </ul>
            </div>

            {/* Family Style Dinner */}
            <div className="bg-stone-50 rounded-[1.25rem] sm:rounded-[2rem] p-8 sm:p-10 md:p-12 shadow-lg">
              <div className="w-16 h-16 rounded-full bg-teal-700/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 11h18M5 11V7a2 2 0 012-2h10a2 2 0 012 2v4m-14 0v6a2 2 0 002 2h10a2 2 0 002-2v-6" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mb-4">Family Style Dinner</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-6 text-sm sm:text-base">
                Large bowls and platters brought to the tables in courses and passed.
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-stone-700 font-light">
                <li className="flex gap-3"><span className="text-teal-700">›</span> 3 passed appetizers + 1 late-night snack</li>
                <li className="flex gap-3"><span className="text-teal-700">›</span> 1 salad, 2 side dishes &amp; 2 entrées</li>
                <li className="flex gap-3"><span className="text-teal-700">›</span> Freshly baked dinner rolls with creamery butter</li>
                <li className="flex gap-3"><span className="text-teal-700">›</span> Coffee, hot tea &amp; fruit agua fresca</li>
                <li className="flex gap-3"><span className="text-teal-700">›</span> Scratch-made wedding cake with buttercream</li>
              </ul>
            </div>

            {/* What's Included */}
            <div className="bg-stone-50 rounded-[1.25rem] sm:rounded-[2rem] p-8 sm:p-10 md:p-12 shadow-lg">
              <div className="w-16 h-16 rounded-full bg-teal-700/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mb-4">Setup &amp; Service</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-6 text-sm sm:text-base">
                Everything you need for an elegant, stress-free celebration.
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-stone-700 font-light">
                {includedItems.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-teal-700">›</span> {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-20 sm:py-24 md:py-32">
        <div className="max-w-[900px] mx-auto text-center">
          <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
            Ready to Plan
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-stone-900 leading-tight mb-6 sm:mb-8">
            Let&apos;s create your day together
          </h2>
          <p className="text-stone-600 font-light text-base sm:text-lg leading-relaxed mb-10 sm:mb-12">
            Reach out to begin customizing your wedding at La Villa Esplendida. We&apos;ll walk you through every detail.
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
