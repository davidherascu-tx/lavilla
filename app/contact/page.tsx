"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire this up to your email service or API route
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col flex-1 bg-stone-50">

      {/* Hero / Title */}
      <section className="w-full px-4 sm:px-8 lg:px-12 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black text-stone-900 leading-none mb-6 sm:mb-8">
            Contact
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
            Tell us about your dates, your group and what you have in mind — we&apos;ll be in touch within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Left: Contact Info */}
          <aside className="lg:col-span-2 bg-stone-900 text-white rounded-[1.5rem] sm:rounded-[2.5rem] p-8 sm:p-10 md:p-12 shadow-2xl flex flex-col">
            <span className="text-teal-300 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
              Reach Us Directly
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black mb-8 sm:mb-10 leading-tight">
              Let&apos;s talk
            </h2>

            <div className="space-y-8 sm:space-y-10 flex-grow">
              {/* Phones */}
              <div>
                <span className="text-xs tracking-[0.3em] uppercase font-bold text-teal-300 block mb-4">
                  Phone
                </span>
                <div className="space-y-3">
                  <a
                    href="tel:+19712812649"
                    className="flex items-center gap-3 text-base sm:text-lg font-light hover:text-teal-200 transition-colors"
                  >
                    <span className="text-xl" aria-label="US Flag">🇺🇸</span>
                    +1 971 281 2649
                  </a>
                  <a
                    href="tel:+523222914008"
                    className="flex items-center gap-3 text-base sm:text-lg font-light hover:text-teal-200 transition-colors"
                  >
                    <span className="text-xl" aria-label="Mexico Flag">🇲🇽</span>
                    +52 322 291 4008
                  </a>
                </div>
              </div>

              {/* Email */}
              <div>
                <span className="text-xs tracking-[0.3em] uppercase font-bold text-teal-300 block mb-4">
                  Email
                </span>
                <a
                  href="mailto:info@lavillaesplendida.com"
                  className="text-base sm:text-lg font-light hover:text-teal-200 transition-colors break-all"
                >
                  info@lavillaesplendida.com
                </a>
              </div>

              {/* Location */}
              <div>
                <span className="text-xs tracking-[0.3em] uppercase font-bold text-teal-300 block mb-4">
                  Location
                </span>
                <p className="text-base sm:text-lg font-light leading-relaxed">
                  Boca de Tomatlán<br />
                  Cabo Corrientes, Jalisco<br />
                  Mexico
                </p>
              </div>

              {/* Hours */}
              <div>
                <span className="text-xs tracking-[0.3em] uppercase font-bold text-teal-300 block mb-4">
                  Response Time
                </span>
                <p className="text-base sm:text-lg font-light leading-relaxed">
                  Within 24 hours, Monday – Saturday
                </p>
              </div>
            </div>
          </aside>

          {/* Right: Form */}
          <div className="lg:col-span-3 bg-white rounded-[1.5rem] sm:rounded-[2.5rem] p-8 sm:p-10 md:p-12 shadow-xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 sm:py-20">
                <div className="w-20 h-20 rounded-full bg-teal-700/10 flex items-center justify-center mb-8">
                  <svg
                    className="w-10 h-10 text-teal-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl sm:text-4xl font-serif font-black text-stone-900 mb-4">
                  Thank you
                </h3>
                <p className="text-stone-600 font-light text-base sm:text-lg max-w-md">
                  Your message has been sent. We&apos;ll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-xs tracking-[0.3em] uppercase font-bold text-stone-900 hover:text-teal-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-2 block">
                  Send a Message
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-stone-900 mb-6 sm:mb-8 leading-tight">
                  Plan your stay
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs tracking-[0.25em] uppercase font-bold text-stone-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-stone-50 text-stone-900 focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-700/20 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs tracking-[0.25em] uppercase font-bold text-stone-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-stone-50 text-stone-900 focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-700/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs tracking-[0.25em] uppercase font-bold text-stone-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-stone-50 text-stone-900 focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-700/20 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs tracking-[0.25em] uppercase font-bold text-stone-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-stone-50 text-stone-900 focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-700/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="topic" className="block text-xs tracking-[0.25em] uppercase font-bold text-stone-700 mb-2">
                    I&apos;m interested in
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-stone-50 text-stone-900 focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-700/20 transition-all"
                  >
                    <option value="vacation">A vacation stay</option>
                    <option value="wedding">A wedding or event</option>
                    <option value="rooms">Individual room rental</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="dates" className="block text-xs tracking-[0.25em] uppercase font-bold text-stone-700 mb-2">
                      Preferred Dates
                    </label>
                    <input
                      type="text"
                      id="dates"
                      name="dates"
                      placeholder="e.g. March 10 – 16, 2026"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-stone-50 text-stone-900 placeholder:text-stone-400 focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-700/20 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-xs tracking-[0.25em] uppercase font-bold text-stone-700 mb-2">
                      Guests
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      min={1}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-stone-50 text-stone-900 focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-700/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs tracking-[0.25em] uppercase font-bold text-stone-700 mb-2">
                    Tell us more *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="What are you planning? Anything special we should know?"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-stone-50 text-stone-900 placeholder:text-stone-400 focus:border-teal-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-700/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-12 py-5 text-xs tracking-widest uppercase font-bold text-white bg-stone-900 hover:bg-stone-800 transition-all shadow-xl"
                >
                  Send Message
                </button>

                <p className="text-xs text-stone-500 font-light pt-2">
                  By submitting this form, you agree to be contacted by our team about your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map / Location */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
              Find Us
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-stone-900 leading-none mb-4">
              Boca de Tomatlán
            </h2>
            <p className="text-stone-600 font-light text-base sm:text-lg max-w-2xl mx-auto">
              25 minutes south of Puerto Vallarta — accessible only by water taxi or jungle path from the village.
            </p>
          </div>

          <div className="relative h-[400px] sm:h-[500px] rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps?q=Boca+de+Tomatlan,+Jalisco,+Mexico&output=embed"
              title="La Villa Esplendida location"
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
