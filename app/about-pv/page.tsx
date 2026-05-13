const activities = [
  {
    title: "Relax on the beach",
    description:
      "Soft white sand, turquoise waters and swaying palms. Don't miss Playa de los Muertos, Playa Conchas Chinas and Playa Las Gemelas.",
  },
  {
    title: "Stroll along the Malecón",
    description:
      "The seaside promenade stretches over a mile along Banderas Bay — perfect for sunsets, people-watching and waterfront dining.",
  },
  {
    title: "Discover the Zona Romántica",
    description:
      "The historic heart of Puerto Vallarta with cobblestone streets, colorful murals and a thriving cafe and bar scene.",
  },
  {
    title: "Visit Nuestra Señora de Guadalupe",
    description:
      "The iconic crown-tower church is the city's most photographed landmark, with sweeping views over the bay.",
  },
  {
    title: "Embark on a boat tour",
    description:
      "Sunset cruises, snorkeling tours, fishing charters and trips to the Marietas Islands and their crystal-clear waters.",
  },
  {
    title: "Try ziplining",
    description:
      "Several operators offer adrenaline-packed tours through the jungle canopy, over rivers and across the ocean.",
  },
  {
    title: "Tour a tequila distillery",
    description:
      "Jalisco is the birthplace of tequila — take a guided tour and tasting at one of the nearby distilleries.",
  },
  {
    title: "Take a cooking class",
    description:
      "Learn to prepare authentic Mexican cuisine at one of the many cooking schools, with classes suited for every level.",
  },
  {
    title: "Vallarta Botanical Gardens",
    description:
      "Just outside town, over 3,000 plant species spread across walking trails, waterfalls and ponds.",
  },
  {
    title: "Experience the nightlife",
    description:
      "Beach clubs, rooftop bars, live music venues and dance floors — Puerto Vallarta comes alive after dark.",
  },
];

const videos = [
  { id: "qye20ad86WQ", title: "Puerto Vallarta tour" },
  { id: "7cn_wg8M5rw", title: "Puerto Vallarta highlights" },
  { id: "XpB9MBn2V6M", title: "Puerto Vallarta experience" },
];

export default function AboutPVPage() {
  return (
    <div className="flex flex-col flex-1 bg-stone-50">

      {/* Hero / Title */}
      <section className="w-full px-4 sm:px-8 lg:px-12 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
            About
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black text-stone-900 leading-none mb-6 sm:mb-8">
            Puerto Vallarta
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
            Explore the allure of Puerto Vallarta, a sought-after getaway nestled on Mexico&apos;s Pacific coast, renowned for its stunning beaches and vibrant cultural experiences — a city waiting to be discovered.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="w-full px-4 sm:px-8 lg:px-12 pb-12 sm:pb-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative h-[380px] sm:h-[480px] md:h-[600px] rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="/about_pv_header.webp"
              alt="Puerto Vallarta"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Intro / Description */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
              The City
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-stone-900 leading-tight">
              Pacific Coast Paradise
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-8 text-stone-700 font-light leading-relaxed text-base sm:text-lg md:text-xl">
            <p>
              Nestled on the Pacific coast of Jalisco, Mexico, Puerto Vallarta is a stunning destination situated on the expansive Banderas Bay, renowned for its picturesque beauty and size.
            </p>
            <p>
              Here, visitors can indulge in outdoor adventures like swimming, snorkeling, scuba diving and whale watching in the bay&apos;s pristine waters, teeming with diverse marine life. Beyond its idyllic beaches, Puerto Vallarta is graced by the nearby Sierra Madre mountains, whose majestic peaks offer a scenic backdrop and numerous activities such as hiking, mountain biking and zip-lining.
            </p>
            <p>
              Puerto Vallarta&apos;s blend of natural splendor and rich cultural heritage makes it a captivating city, promising a unique and memorable experience for all who visit.
            </p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
              Things to do
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-stone-900 leading-none mb-6">
              Activities in Puerto Vallarta
            </h2>
            <p className="text-stone-600 font-light text-base sm:text-lg max-w-3xl mx-auto">
              From quiet beach mornings to ziplining through the Sierra Madre — here&apos;s how to make the most of your stay.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {activities.map((activity, i) => (
              <div
                key={i}
                className="bg-stone-50 rounded-[1.25rem] sm:rounded-[2rem] p-8 sm:p-10 shadow-md hover:shadow-xl transition-shadow"
              >
                <span className="text-5xl sm:text-6xl font-serif font-black text-teal-700/20 leading-none block mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-black text-stone-900 mb-3 leading-tight">
                  {activity.title}
                </h3>
                <p className="text-stone-600 font-light leading-relaxed text-sm sm:text-base">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
              See it for Yourself
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-stone-900 leading-none mb-6">
              Puerto Vallarta on Film
            </h2>
            <p className="text-stone-600 font-light text-base sm:text-lg max-w-2xl mx-auto">
              A taste of what awaits — sights, scenes and stories from the city.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="relative rounded-[1.25rem] sm:rounded-[2rem] overflow-hidden shadow-2xl aspect-video bg-stone-900"
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative w-full px-4 sm:px-8 lg:px-12 py-20 sm:py-24 md:py-32 bg-scroll md:bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/about_pv_stay.webp')" }}
      >
        <div className="absolute inset-0 bg-stone-900/55 z-0" />
        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <span className="text-teal-300 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
            Plan your visit
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-white leading-tight mb-6 sm:mb-8 drop-shadow-lg">
            Stay at La Villa
          </h2>
          <p className="text-stone-100 font-light text-base sm:text-lg leading-relaxed mb-10 sm:mb-12 drop-shadow">
            Experience Puerto Vallarta from the quiet, jungle-edged village of Boca de Tomatlán — just 25 minutes south of the city.
          </p>
          <a
            href="/villa"
            className="inline-block px-12 py-5 text-xs tracking-widest uppercase font-bold text-stone-900 bg-white hover:bg-stone-200 transition-all shadow-2xl"
          >
            Discover the Villa
          </a>
        </div>
      </section>

    </div>
  );
}
