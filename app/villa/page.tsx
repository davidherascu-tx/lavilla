"use client";

import { useState, useEffect, useRef } from "react";

const sliderPanels = [
  { src: "/villa_living.webp", label: "Living" },
  { src: "/villa_pool.webp", label: "Pool" },
  { src: "/villa_kitchen.webp", label: "Kitchen" },
];

const rooms = [
  {
    image: "/room_1.webp",
    number: "Room 1",
    bed: "1 King Size Bed, Smart TV",
    description:
      "The room was bathed in soft, golden light streaming through lace curtains, casting gentle shadows on tile floor and illuminating the array of antique furniture.",
  },
  {
    image: "/room_2.webp",
    number: "Room 2",
    bed: "1 King Size Bed, Smart TV",
    description:
      "The room was bathed in soft, golden light streaming through lace curtains, casting gentle shadows on tile floor and illuminating the array of antique furniture.",
  },
  {
    image: "/room_3.webp",
    number: "Room 3",
    bed: "1 Full Size Bed, Smart TV",
    description:
      "The room was bathed in soft, golden light streaming through lace curtains, casting gentle shadows on tile floor and illuminating the array of antique furniture.",
  },
];

const phrases = [
  "Bringing smiles and sunshine daily.",
  "Where the sun kisses the sea.",
  "Where every guest is embraced like family.",
];

export default function VillaPage() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play();
  };

  useEffect(() => {
    const fullText = phrases[phraseIndex];
    const ticker = setTimeout(() => {
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(80);
      }
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((p) => (p + 1) % phrases.length);
      }
    }, typingSpeed);
    return () => clearTimeout(ticker);
  }, [text, isDeleting, phraseIndex, typingSpeed]);

  return (
    <div className="flex flex-col flex-1 bg-stone-50">

      {/* Intro Section */}
      <section className="max-w-[1200px] mx-auto px-6 pt-16 sm:pt-24 pb-8 sm:pb-12 text-center">
        <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
          A Luxury Villa
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black text-stone-900 leading-none mb-4 sm:mb-6">
          La Villa Esplendida
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-stone-600 mb-8 sm:mb-10 tracking-wide">
          Luxury Rooms
        </p>
        <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
          La Villa Esplendida is located in the very quiet and somewhat remote Mexican
          village of Boca de Tomatlan located in the Jungle of Cabo Corrientes. It is
          only accessible by a quick water taxi or a 15–20 minute walk from the village.
          This location is perfect for guests who prefer a more intimate and rustic
          Mexican experience away from the high end resorts.
        </p>
      </section>

      {/* Three Image Panels: Living / Pool / Kitchen */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-10 sm:py-14">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {sliderPanels.map((panel, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] rounded-[1.25rem] sm:rounded-[2rem] overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src={panel.src}
                alt={panel.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <span className="text-white text-3xl sm:text-4xl font-serif font-black tracking-wide">
                  {panel.label}
                </span>
                <span className="text-white/60 text-xs tracking-[0.3em] uppercase font-semibold">
                  0{i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
              Luxury Rooms
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-stone-900 leading-none">
              Discover Our
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-light italic text-stone-700 leading-none mt-2">
              Suites &amp; The Villa
            </h2>
          </div>
          <div className="relative rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden aspect-video shadow-2xl bg-stone-900">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/lavilla.mp4"
              poster="/villa-2.webp"
              controls={isVideoPlaying}
              playsInline
              onPlay={() => setIsVideoPlaying(true)}
              onPause={() => setIsVideoPlaying(false)}
              onEnded={() => setIsVideoPlaying(false)}
            />
            <button
              type="button"
              onClick={handlePlayVideo}
              aria-label="Play video"
              className={`absolute inset-0 flex items-center justify-center bg-stone-900/30 z-10 transition-opacity duration-500 ${
                isVideoPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <span className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/40 hover:bg-white/30 transition-all">
                <svg
                  className="w-8 h-8 sm:w-12 sm:h-12 text-white ml-1 sm:ml-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16 sm:mb-24">
            <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
              Accommodations
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-stone-900 leading-none">
              Our Rooms
            </h2>
          </div>

          <div className="flex flex-col gap-20 sm:gap-28 md:gap-36">
            {rooms.map((room, i) => {
              const isReversed = i % 2 === 1;
              return (
                <div
                  key={i}
                  className={`relative flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-0`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-[60%] relative group">
                    <div className="relative aspect-[4/3] rounded-[1.25rem] sm:rounded-[2rem] overflow-hidden shadow-2xl">
                      <img
                        src={room.image}
                        alt={room.number}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-stone-900/10 to-transparent" />
                    </div>
                    {/* Huge background number */}
                    <span
                      className={`hidden lg:block absolute top-1/2 -translate-y-1/2 ${
                        isReversed ? "-right-12" : "-left-12"
                      } text-[12rem] xl:text-[16rem] font-serif font-black text-stone-100 leading-none -z-10 select-none pointer-events-none`}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full lg:w-[45%] relative z-10 ${
                      isReversed ? "lg:-mr-16 xl:-mr-24" : "lg:-ml-16 xl:-ml-24"
                    }`}
                  >
                    <div className="bg-white border border-stone-200 rounded-[1.25rem] sm:rounded-[2rem] shadow-2xl p-8 sm:p-10 md:p-14">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-5xl sm:text-6xl font-serif font-black text-teal-700 leading-none">
                          0{i + 1}
                        </span>
                        <div className="flex-1 h-px bg-stone-300" />
                      </div>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-stone-900 mb-4 leading-tight">
                        {room.number}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {room.bed.split(",").map((feature, j) => (
                          <span
                            key={j}
                            className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold text-stone-700 bg-stone-100 px-4 py-2 rounded-full"
                          >
                            {feature.trim()}
                          </span>
                        ))}
                      </div>
                      <p className="text-stone-600 font-light leading-relaxed text-base sm:text-lg mb-8">
                        {room.description}
                      </p>
                      <a
                        href="#"
                        className="group inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase font-bold text-stone-900 hover:text-teal-700 transition-colors"
                      >
                        <span>Reserve Room</span>
                        <span className="w-12 h-px bg-stone-900 group-hover:bg-teal-700 group-hover:w-16 transition-all" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto text-center">
          <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
            Amenities
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-stone-900 leading-none mb-3">
            Our Services
          </h2>
          <p className="text-xl sm:text-2xl text-stone-500 font-light mb-14 sm:mb-20">
            Villa Facilities
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12">

            {/* Wifi & Internet */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-stone-100 flex items-center justify-center">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-stone-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                  />
                </svg>
              </div>
              <span className="text-stone-700 font-semibold text-base sm:text-lg md:text-xl tracking-wide leading-snug text-center">
                Wifi &amp; Internet
              </span>
            </div>

            {/* Airport Transfer */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-stone-100 flex items-center justify-center">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-stone-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </div>
              <span className="text-stone-700 font-semibold text-base sm:text-lg md:text-xl tracking-wide leading-snug text-center">
                Airport Transfer
              </span>
            </div>

            {/* Smart TV */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-stone-100 flex items-center justify-center">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-stone-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </div>
              <span className="text-stone-700 font-semibold text-base sm:text-lg md:text-xl tracking-wide leading-snug text-center">
                Smart TV
              </span>
            </div>

            {/* Laundry Service */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-stone-100 flex items-center justify-center">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-stone-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
              <span className="text-stone-700 font-semibold text-base sm:text-lg md:text-xl tracking-wide leading-snug text-center">
                Laundry Service
              </span>
            </div>

            {/* Housekeeper Service */}
            <div className="flex flex-col items-center gap-6 col-span-2 sm:col-span-1">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-stone-100 flex items-center justify-center">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-stone-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125-1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </div>
              <span className="text-stone-700 font-semibold text-base sm:text-lg md:text-xl tracking-wide leading-snug text-center">
                Housekeeper Service
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section
        className="relative w-full min-h-[500px] md:h-[580px] flex items-center justify-center py-20 md:py-0 bg-scroll md:bg-fixed bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: "url('/villa_parallax.webp')" }}
      >
        <div className="absolute inset-0 bg-stone-900/65 z-10" />
        <div className="relative z-20 text-center px-4 w-full mx-auto">
          <p className="text-teal-400 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-6 sm:mb-8">
            La Villa Esplendida
          </p>
          <h2
            className="font-serif font-black text-white leading-tight whitespace-nowrap min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem]"
            style={{ fontSize: "clamp(1.1rem, 4.2vw, 4rem)" }}
          >
            {text}
            <span className="border-r-2 border-white animate-pulse ml-1">&nbsp;</span>
          </h2>
        </div>
      </section>

    </div>
  );
}