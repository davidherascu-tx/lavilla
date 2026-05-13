"use client";

import { useState, ReactNode } from "react";

type FaqItem = {
  question: string;
  answer: ReactNode;
};

const faqs: FaqItem[] = [
  {
    question: "Transportation & Getting Here",
    answer: (
      <div className="space-y-6">
        <div>
          <h4 className="text-teal-700 text-xs sm:text-sm tracking-[0.3em] uppercase font-bold mb-3">
            Before Leaving the PVR Airport
          </h4>
          <p>
            I suggest withdrawing money from a cash machine at the airport before
            departing if you have not come with pesos already. You can typically
            withdraw a max of <strong>$9,000 pesos per day</strong>. The exchange
            rate varies but is generally <strong>18 pesos to the US dollar</strong>.
          </p>
        </div>
        <div>
          <h4 className="text-teal-700 text-xs sm:text-sm tracking-[0.3em] uppercase font-bold mb-3">
            Getting to Boca de Tomatlán
          </h4>
          <p>
            Once you exit the airport, you can find many taxi services for the
            roughly <strong>1 hour and 20 minute</strong> trip to Boca de Tomatlán.
            When you turn right into town, the car should take the very first right
            and drop you off at the Boca Pier along the boardwalk, where you can
            look for a water taxi. It is a 5–8 minute water taxi ride to our pier.
            We are on the left side of the coast going out towards the ocean.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: "Chef Prepared Dinners",
    answer: (
      <div className="space-y-4">
        <p>
          We do offer a <strong>4-course dinner menu nightly</strong>. You are not
          required to order food from us; however, we are not a restaurant and
          therefore unable to prepare meals on the fly. It is important to
          understand that meals are made specially for your group — think of it as
          private catering.
        </p>
        <p>
          We require a <strong>minimum of 2 guests per night</strong> and all
          guests will enjoy the same menu at each meal. Meals need to be ordered a{" "}
          <strong>minimum of 5 days in advance</strong> and paid prior to arrival.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-stone-500 block mb-2">
              Adults
            </span>
            <span className="text-2xl font-serif font-black text-stone-900">
              $900 pesos
            </span>
            <span className="text-stone-500 font-light"> / $45 USD per person</span>
          </div>
          <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-stone-500 block mb-2">
              Children Under 6
            </span>
            <span className="text-2xl font-serif font-black text-stone-900">
              $300 pesos
            </span>
            <span className="text-stone-500 font-light"> / $15 USD per child</span>
          </div>
        </div>
        <p>
          Please note that there is no onsite kitchen or food prep facilities
          available. Breakfast, lunch and dinner can also be taken at various local
          restaurants close by. Boca has several small <em>tiendas</em> where you
          can easily buy drinks, alcohol, snacks and more. Lastly, there is a mini
          fridge in one of the suites for your exclusive use.
        </p>
      </div>
    ),
  },
  {
    question: "Air Conditioner",
    answer: (
      <div className="space-y-4">
        <p>
          Each of the 3 bedrooms has a mini-split air conditioner with a remote.
        </p>
        <p>
          Please <strong>do not set below 27° Celsius</strong> as it will create so
          much condensation that it will damage the wood and create mold on the
          walls, furniture and ceiling. Please also turn off the AC anytime you
          exit your room.
        </p>
      </div>
    ),
  },
  {
    question: "Wifi & Internet",
    answer: (
      <p>
        We have <strong>satellite wifi</strong> (not wired) internet here at the
        Villa. If you don&apos;t have a signal, it&apos;s because there&apos;s an
        interruption in the satellite signal. We have backup options available —
        just let our team know.
      </p>
    ),
  },
  {
    question: "Water",
    answer: (
      <p>
        Water here in Boca de Tomatlán is sometimes in short supply, especially
        during the dry season. Please be careful not to needlessly waste water.{" "}
        <strong>Toilet tissue may be flushed</strong>, but please do not flush
        anything else.
      </p>
    ),
  },
  {
    question: "Maid Services",
    answer: (
      <p>
        Your rooms will be cleaned the day of your arrival and after your
        departure. Additional cleanings can be purchased for{" "}
        <strong>$400 pesos per day</strong>.
      </p>
    ),
  },
  {
    question: "During Your Stay",
    answer: (
      <div className="space-y-4">
        <p>
          Remember that La Villa Esplendida is only accessible by water taxi
          (unless you wish to take the 15 minute walk from Boca). Most of the
          water taxis will <strong>wrap up their services by 7:00 pm</strong>.
        </p>
        <p>
          If you would like to have a night out, please plan to contract a water
          taxi to be available to transport you after hours. The path from town is
          not lit and we do not recommend walking it at night.
        </p>
      </div>
    ),
  },
  {
    question: "Excursions & Activities",
    answer: (
      <p>
        We are happy to help get you in contact with private water tour operators
        for catamaran rentals, fishing, snorkeling or day stops at{" "}
        <strong>Colomitos, Yelapa or Las Animas beaches</strong>. Please let us
        know what you are thinking and we will see how we can help you locate a
        provider.
      </p>
    ),
  },
  {
    question: "Departing Flights",
    answer: (
      <div className="space-y-4">
        <p>
          Please consider your departing flights if you&apos;re heading to the
          airport early in the morning. If your flight is{" "}
          <strong>earlier than 11:00 am</strong>, it means scheduling an earlier
          water taxi transport which can cost more money.
        </p>
        <p>
          We do not recommend staying the night before your flight here at the
          villa if your flight is any earlier than <strong>9:00 am</strong>.
        </p>
      </div>
    ),
  },
];

const goodToKnow = [
  {
    title: "Wildlife & Bugs",
    body: "We are located in the jungle, so we share our location with various wild animals and bugs such as coatis, iguanas, frogs, beetles and spiders.",
    iconPath:
      "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83",
  },
  {
    title: "Many Stairs",
    body: "We were built on a hillside, so there are many steps to get to the house from our pier. Not suitable for guests with mobility issues.",
    iconPath: "M4 19h6v-6h4V7h6",
  },
  {
    title: "Beach Access",
    body: "The sandy beach is located 5 minutes away by water taxi or a 15 minute walk.",
    iconPath:
      "M12 3v3m0 14v-3m-9-7h3m14 0h-3M6.6 6.6l2.1 2.1m6.6 6.6l2.1 2.1M6.6 17.4l2.1-2.1m6.6-6.6l2.1-2.1",
  },
  {
    title: "The Rooms",
    body: "The rental includes the use of the common terraces and 2 guest rooms, each sleeping 2 guests in a full-size bed. Bedrooms are stacked, each with its own locking door.",
    iconPath: "M3 21h18M5 21V7a2 2 0 012-2h10a2 2 0 012 2v14M9 9h6M9 13h6M9 17h6",
  },
  {
    title: "Plunge Pool",
    body: "Our small plunge pool is not heated and is covered when not in use.",
    iconPath:
      "M3 12c1.5 0 3-1 3-1s1.5 1 3 1 3-1 3-1 1.5 1 3 1 3-1 3-1M3 17c1.5 0 3-1 3-1s1.5 1 3 1 3-1 3-1 1.5 1 3 1 3-1 3-1",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="flex flex-col flex-1 bg-stone-50">

      {/* Hero / Title */}
      <section className="w-full px-4 sm:px-8 lg:px-12 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
            Helpful Info
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black text-stone-900 leading-none mb-6 sm:mb-8">
            FAQ&apos;s
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
            Some helpful information to make your travel and stay as smooth and carefree as possible.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="w-full px-4 sm:px-8 lg:px-12 pb-12 sm:pb-16">
        <div className="max-w-[1000px] mx-auto bg-white rounded-[1.5rem] sm:rounded-[2.5rem] shadow-xl p-8 sm:p-12 md:p-16 text-center">
          <p className="text-stone-700 font-light text-base sm:text-lg md:text-xl leading-relaxed">
            La Villa Esplendida is located in the very quiet and somewhat remote Mexican village of{" "}
            <strong className="font-semibold text-stone-900">Boca de Tomatlán</strong>, in the Jungle of Cabo Corrientes. It is only accessible by a quick water taxi or a 15–20 minute walk from the village. This location is perfect for guests who prefer a more intimate and rustic Mexican experience away from the high-end resorts.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="w-full px-4 sm:px-8 lg:px-12 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-[1000px] mx-auto">
          <div className="space-y-4 sm:space-y-5">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-[1.25rem] sm:rounded-[1.5rem] shadow-lg overflow-hidden border border-stone-100"
                >
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 px-6 sm:px-10 py-6 sm:py-8 text-left hover:bg-stone-50 transition-colors"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="text-2xl sm:text-3xl font-serif font-black text-teal-700/40 leading-none shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-stone-900 leading-tight">
                        {faq.question}
                      </h3>
                    </div>
                    <span
                      className={`shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-stone-300 flex items-center justify-center transition-all duration-300 ${
                        isOpen ? "bg-stone-900 border-stone-900 rotate-180" : ""
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                          isOpen ? "text-white" : "text-stone-700"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 sm:px-10 pb-8 sm:pb-10 pt-2 text-stone-600 font-light leading-relaxed text-base sm:text-lg pl-[3.5rem] sm:pl-[5.5rem]">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Good to Know */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
              Please Note
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-stone-900 leading-none mb-4">
              Good to Know
            </h2>
            <p className="text-stone-600 font-light text-base sm:text-lg max-w-2xl mx-auto">
              A few important details about life at La Villa Esplendida.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {goodToKnow.map((item, i) => (
              <div
                key={i}
                className="bg-stone-50 rounded-[1.25rem] sm:rounded-[2rem] p-8 sm:p-10 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-teal-700/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-teal-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.iconPath}
                    />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-black text-stone-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-stone-600 font-light leading-relaxed text-sm sm:text-base">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-20 sm:py-24 md:py-32">
        <div className="max-w-[900px] mx-auto text-center">
          <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
            Still Have Questions?
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-stone-900 leading-tight mb-6 sm:mb-8">
            We&apos;re here to help
          </h2>
          <p className="text-stone-600 font-light text-base sm:text-lg leading-relaxed mb-10 sm:mb-12">
            Reach out and we&apos;ll get back to you with everything you need to make your stay perfect.
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
