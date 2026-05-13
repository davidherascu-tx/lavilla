"use client";

import { useState, useEffect, useRef } from "react";

const sliderImages = [
  "/hero-1.webp",
  "/hero-2.webp",
  "/hero-3.webp",
  "/hero-4.webp"
];

const panelImages = {
  left: "/gallery-left.webp",
  center: "/gallery-center.webp",
  right: "/gallery-right.webp"
};

const weddingImages = [
  "/wedding-1.webp",
  "/wedding-2.webp",
  "/wedding-3.webp",
  "/wedding-4.webp"
];

const villaImages = [
  "/villa-1.webp",
  "/villa-2.webp",
  "/villa-3.webp",
  "/villa-4.webp",
  "/villa-5.webp"
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [counts, setCounts] = useState({ rooms: 0, weddings: 0, dining: 0 });
  const [hasCounted, setHasCounted] = useState(false);
  const [currentWeddingImage, setCurrentWeddingImage] = useState(0);
  const [currentVillaImage, setCurrentVillaImage] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 4500);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const villaInterval = setInterval(() => {
      setCurrentVillaImage((prev) => (prev + 1) % villaImages.length);
    }, 5000);
    return () => clearInterval(villaInterval);
  }, []);

  useEffect(() => {
    const words = ["vacation", "wedding"];
    const ticker = setTimeout(() => {
      const i = loopNum % words.length;
      const fullText = words[i];
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(75);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150);
      }
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }, typingSpeed);
    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, typingSpeed]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted) {
          setHasCounted(true);
          let start = 0;
          const duration = 2000; 
          const steps = 60;
          const timer = setInterval(() => {
            start++;
            setCounts({
              rooms: Math.min(3, Math.round(start * (3 / steps))),
              weddings: Math.min(50, Math.round(start * (50 / steps))),
              dining: Math.min(100, Math.round(start * (100 / steps))),
            });
            if (start >= steps) clearInterval(timer);
          }, duration / steps);
        }
      }, { threshold: 0.5 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [hasCounted]);

  const nextWeddingImage = () => setCurrentWeddingImage((p) => (p + 1) % weddingImages.length);
  const prevWeddingImage = () => setCurrentWeddingImage((p) => (p - 1 + weddingImages.length) % weddingImages.length);

  return (
    <div className="flex flex-col flex-1 bg-stone-50">
      
      {/* Hero Slider */}
      <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 pt-4 sm:pt-8 pb-4 sm:pb-8">
        <section className="relative h-[80vh] sm:h-[85vh] min-h-[520px] sm:min-h-[600px] w-full flex items-center justify-center overflow-hidden rounded-[1.25rem] sm:rounded-[2rem] shadow-2xl">
          {sliderImages.map((img, index) => (
            <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
              <div className="absolute inset-0 bg-stone-900/40 z-20"></div>
              <img src={img} alt="Background" className={`h-full w-full object-cover transition-transform duration-[4000ms] ease-out ${index === currentImage ? "scale-100" : "scale-125"}`} />
            </div>
          ))}
          <div className="relative z-30 text-center px-4 max-w-[1400px] mx-auto w-full">
            <h1 className="text-lg sm:text-2xl md:text-[30px] font-thin tracking-[-1px] sm:tracking-[-2px] font-serif text-white mb-4 sm:mb-6">Welcome to La Villa Esplendida</h1>
            <h2 className="text-[26px] sm:text-[40px] md:text-[55px] lg:text-[70px] leading-tight text-white font-bold drop-shadow-xl mb-8 sm:mb-10">
              Turn your dream <span className="text-[#00FFFC] font-extrabold border-r-2 border-[#00FFFC] pr-1 animate-pulse">{text}</span> into a reality
            </h2>
            <p className="text-xs sm:text-sm text-stone-200 max-w-3xl mx-auto font-light">Located in the beautiful town of Boca de Tomatlan, 25 minutes south of Puerto Vallarta.</p>
            <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <a href="/villa" className="group relative w-full sm:w-auto px-10 sm:px-12 py-4 text-xs tracking-widest uppercase font-semibold text-white border border-white/50 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white">
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 group-hover:text-stone-900">The Villa</span>
              </a>
              <a href="/wedding" className="group relative w-full sm:w-auto px-10 sm:px-12 py-4 text-xs tracking-widest uppercase font-semibold text-white border border-white/50 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white">
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 group-hover:text-stone-900">Weddings</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Gallery Section */}
      <section className="relative w-full max-w-[1400px] mx-auto px-4 py-12 sm:py-20 flex justify-center items-center">
        <div className="relative flex flex-row items-start justify-center gap-3 sm:gap-6 md:gap-10 w-full">
          <div className="w-1/3 aspect-[2/3] rounded-[1.25rem] sm:rounded-[2rem] overflow-hidden shadow-xl mt-10 sm:mt-16 md:mt-24"><img src={panelImages.left} className="w-full h-full object-cover" /></div>
          <div className="w-1/3 aspect-[2/3] rounded-[1.25rem] sm:rounded-[2rem] overflow-hidden shadow-2xl"><img src={panelImages.center} className="w-full h-full object-cover" /></div>
          <div className="w-1/3 aspect-[2/3] rounded-[1.25rem] sm:rounded-[2rem] overflow-hidden shadow-xl mt-10 sm:mt-16 md:mt-24"><img src={panelImages.right} className="w-full h-full object-cover" /></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[85%] sm:w-[90%] pointer-events-none">
            <img src="/la_villa_logo_white.png" className="w-full h-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]" />
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="max-w-[1200px] mx-auto text-center px-6 py-10 sm:py-14 md:py-16">
        <p className="text-base sm:text-lg md:text-xl lg:text-[24px] text-stone-600 font-light leading-relaxed">
          Discover a world of luxury and relaxation with our carefully curated La Villa Esplendida offers, designed to enhance your stay and create lasting memories. Whether you’re planning a romantic getaway, wedding, a family vacation, or a business trip, we have the perfect offer to suit your needs and elevate your experience.
        </p>
      </section>

      {/* Stats Counter */}
      <section ref={counterRef} className="max-w-[1400px] mx-auto px-6 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 text-center md:divide-x divide-stone-300">
          <div><div className="text-6xl sm:text-7xl lg:text-9xl font-serif text-stone-900 mb-3 sm:mb-4">{counts.rooms}</div><span className="tracking-[0.3em] uppercase text-stone-500 font-bold text-xs">Rooms</span></div>
          <div><div className="text-6xl sm:text-7xl lg:text-9xl font-serif text-stone-900 mb-3 sm:mb-4">{counts.weddings}</div><span className="tracking-[0.3em] uppercase text-stone-500 font-bold text-xs">Wedding Sit Down</span></div>
          <div><div className="text-6xl sm:text-7xl lg:text-9xl font-serif text-stone-900 mb-3 sm:mb-4">{counts.dining}</div><span className="tracking-[0.3em] uppercase text-stone-500 font-bold text-xs">Dining</span></div>
        </div>
      </section>

      {/* Luxury Villa Section */}
      <section id="villa" className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">Stay With Us</span>
            <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-black text-stone-900 leading-none">The Luxury Villa</h3>
          </div>

          <div className="relative h-[380px] sm:h-[480px] md:h-[650px] rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden shadow-2xl group">
            {villaImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`The villa ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${i === currentVillaImage ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              />
            ))}
            <button
              onClick={() => setCurrentVillaImage((p) => (p - 1 + villaImages.length) % villaImages.length)}
              aria-label="Previous image"
              className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={() => setCurrentVillaImage((p) => (p + 1) % villaImages.length)}
              aria-label="Next image"
              className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
              {villaImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentVillaImage(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 ${i === currentVillaImage ? "w-10 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`}
                />
              ))}
            </div>
          </div>

          <div className="relative z-30 -mt-16 sm:-mt-24 md:-mt-32 mx-2 sm:mx-6 md:mx-12 lg:mx-24 bg-white rounded-[1.25rem] sm:rounded-[2rem] shadow-2xl p-6 sm:p-10 md:p-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="border-t-2 border-stone-900 pt-4">
                <span className="text-xs tracking-[0.3em] uppercase text-stone-500 font-bold block mb-2">Bedrooms</span>
                <span className="text-3xl md:text-4xl font-serif font-black text-stone-900">3</span>
              </div>
              <div className="border-t-2 border-stone-900 pt-4">
                <span className="text-xs tracking-[0.3em] uppercase text-stone-500 font-bold block mb-2">View</span>
                <span className="text-3xl md:text-4xl font-serif font-black text-stone-900">Ocean</span>
              </div>
              <div className="border-t-2 border-stone-900 pt-4">
                <span className="text-xs tracking-[0.3em] uppercase text-stone-500 font-bold block mb-2">Pool</span>
                <span className="text-3xl md:text-4xl font-serif font-black text-stone-900">Private</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <p className="text-stone-600 font-light text-lg leading-relaxed max-w-2xl">
                Reserve the entire estate for an unforgettable private retreat — every detail looked after by our dedicated team.
              </p>
              <a
                href="/villa"
                className="shrink-0 px-12 py-4 text-xs tracking-widest uppercase font-bold text-white bg-stone-900 hover:bg-stone-800 transition-all"
              >
                Book the Villa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Explore Section */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto bg-white rounded-[1.5rem] sm:rounded-[3rem] shadow-xl overflow-hidden flex flex-col lg:flex-row lg:min-h-[600px]">
          <div className="w-full lg:w-1/2 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center">
            <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 sm:mb-6">Explore</span>
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black text-stone-900 mb-6 sm:mb-8 leading-tight">The dream wedding</h3>
            <p className="text-stone-600 font-light mb-8 sm:mb-12 text-base sm:text-lg leading-relaxed max-w-xl">Celebrate your love story in a breathtaking setting. Our dedicated team will ensure every detail of your special day is executed flawlessly.</p>
            <a href="/wedding" className="inline-block w-fit px-10 sm:px-12 py-4 text-xs tracking-widest uppercase font-bold text-white bg-stone-900 hover:bg-stone-800 transition-all">Read More</a>
          </div>
          <div className="w-full lg:w-1/2 relative min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] group">
            {weddingImages.map((img, i) => (
              <img key={i} src={img} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === currentWeddingImage ? "opacity-100 z-10" : "opacity-0 z-0"}`} />
            ))}
            <button onClick={prevWeddingImage} className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextWeddingImage} className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Airbnb Parallax */}
      <section
        className="relative w-full min-h-[560px] md:h-[620px] flex items-center py-16 md:py-0 bg-scroll md:bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/airbnb-bg.webp')" }}
      >
        <div className="absolute inset-0 bg-stone-900/50 z-10"></div>
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-[30px] lg:text-[36px] font-serif text-white font-light mb-8 md:mb-10 tracking-wide md:whitespace-nowrap">
              For overnight stays, visit us on
            </h2>
            <a
              href="https://airbnb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 sm:px-12 py-4 sm:py-5 bg-white text-stone-900 font-bold uppercase tracking-widest hover:bg-stone-200 transition-all shadow-2xl"
            >
              Book Now
            </a>
          </div>
          <div className="flex flex-row justify-center md:justify-end items-center gap-3 sm:gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="90"
              height="103"
              fill="#ffffff"
              aria-label="Airbnb"
              className="w-[60px] sm:w-[75px] md:w-[90px] h-auto"
              style={{ display: "block" }}
            >
              <path d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z" />
            </svg>
            <span className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">airbnb</span>
          </div>
        </div>
      </section>

    </div>
  );
}