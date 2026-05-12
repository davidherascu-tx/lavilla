"use client";

import { useState, useEffect, useRef } from "react";

const sliderImages = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"  
];

const panelImages = {
  left: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800&auto=format&fit=crop", 
  center: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop", 
  right: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop"  
};

const weddingImages = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1530103862676-de889ca20479?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop"  
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
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 4500); 
    return () => clearInterval(slideInterval);
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
      <div className="w-full px-4 sm:px-8 lg:px-12 pt-8 pb-8">
        <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden rounded-[2rem] shadow-2xl">
          {sliderImages.map((img, index) => (
            <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
              <div className="absolute inset-0 bg-stone-900/40 z-20"></div>
              <img src={img} alt="Background" className={`h-full w-full object-cover transition-transform duration-[4000ms] ease-out ${index === currentImage ? "scale-100" : "scale-125"}`} />
            </div>
          ))}
          <div className="relative z-30 text-center px-4 max-w-[1400px] mx-auto w-full">
            <h1 className="text-[24px] sm:text-[30px] font-thin tracking-[-2px] font-serif text-white mb-6">Welcome to La Villa Esplendida</h1>
            <h2 className="text-[28px] sm:text-[40px] md:text-[55px] lg:text-[70px] leading-tight text-white font-bold drop-shadow-xl mb-10">
              Turn your dream <span className="text-[#00FFFC] font-extrabold border-r-2 border-[#00FFFC] pr-1 animate-pulse">{text}</span> into a reality
            </h2>
            <p className="text-xs sm:text-sm text-stone-200 max-w-3xl mx-auto font-light">Located in the beautiful town of Boca de Tomatlan, 25 minutes south of Puerto Vallarta.</p>
            <div className="mt-14 flex flex-col sm:flex-row justify-center items-center gap-6">
              <a href="#villa" className="group relative px-12 py-4 text-xs tracking-widest uppercase font-semibold text-white border border-white/50 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white">
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 group-hover:text-stone-900">The Villa</span>
              </a>
              <a href="#weddings" className="group relative px-12 py-4 text-xs tracking-widest uppercase font-semibold text-white border border-white/50 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white">
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 group-hover:text-stone-900">Weddings</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Gallery Section */}
      <section className="relative w-full max-w-[1400px] mx-auto px-4 py-20 flex justify-center items-center">
        <div className="relative flex flex-row items-start justify-center gap-3 sm:gap-10 w-full">
          <div className="w-1/3 aspect-[2/3] rounded-[2rem] overflow-hidden shadow-xl mt-24"><img src={panelImages.left} className="w-full h-full object-cover" /></div>
          <div className="w-1/3 aspect-[2/3] rounded-[2rem] overflow-hidden shadow-2xl"><img src={panelImages.center} className="w-full h-full object-cover" /></div>
          <div className="w-1/3 aspect-[2/3] rounded-[2rem] overflow-hidden shadow-xl mt-24"><img src={panelImages.right} className="w-full h-full object-cover" /></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[90%] pointer-events-none">
            <img src="/la_villa_logo_white.png" className="w-full h-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]" />
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="max-w-[1200px] mx-auto text-center px-6 py-16">
        <p className="text-xl md:text-[24px] text-stone-600 font-light leading-relaxed">
          Discover a world of luxury and relaxation with our carefully curated La Villa Esplendida offers, designed to enhance your stay and create lasting memories. Whether you’re planning a romantic getaway, wedding, a family vacation, or a business trip, we have the perfect offer to suit your needs and elevate your experience.
        </p>
      </section>

      {/* Stats Counter */}
      <section ref={counterRef} className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:divide-x divide-stone-300">
          <div><div className="text-7xl lg:text-9xl font-serif text-stone-900 mb-4">{counts.rooms}</div><span className="tracking-[0.3em] uppercase text-stone-500 font-bold text-xs">Rooms</span></div>
          <div><div className="text-7xl lg:text-9xl font-serif text-stone-900 mb-4">{counts.weddings}</div><span className="tracking-[0.3em] uppercase text-stone-500 font-bold text-xs">Wedding Sit Down</span></div>
          <div><div className="text-7xl lg:text-9xl font-serif text-stone-900 mb-4">{counts.dining}</div><span className="tracking-[0.3em] uppercase text-stone-500 font-bold text-xs">Dining</span></div>
        </div>
      </section>

      {/* Wedding Explore Section */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-24">
        <div className="max-w-[1400px] mx-auto bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
          <div className="w-full lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
            <span className="text-[#00FFFC] tracking-[0.4em] uppercase font-bold text-sm mb-6">Explore</span>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-stone-900 mb-8 leading-tight">The dream wedding</h3>
            <p className="text-stone-600 font-light mb-12 text-lg leading-relaxed max-w-xl">Celebrate your love story in a breathtaking setting. Our dedicated team will ensure every detail of your special day is executed flawlessly.</p>
            <a href="/wedding" className="inline-block w-fit px-12 py-4 text-xs tracking-widest uppercase font-bold text-white bg-stone-900 hover:bg-stone-800 transition-all">Read More</a>
          </div>
          <div className="w-full lg:w-1/2 relative min-h-[500px] group">
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
      <section className="relative w-full py-36 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-stone-900/70 z-10"></div>
        <div className="relative z-20 w-full max-w-[1200px] mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl md:text-[36px] lg:text-[42px] font-serif text-white font-light mb-10 tracking-wide">For overnight stays, visit us on</h2>
            <a href="https://airbnb.com" target="_blank" className="px-12 py-5 bg-white text-stone-900 font-bold uppercase tracking-widest hover:bg-stone-200 transition-all shadow-2xl">Book Now</a>
          </div>
          <div className="flex justify-center md:justify-end">
            <img src="https://zofiaconstruction.com/wp-content/uploads/2021/04/airbnb-logo-png-transparent-white.png" alt="Airbnb" className="w-48 sm:w-64 md:w-80 object-contain brightness-0 invert opacity-90" />
          </div>
        </div>
      </section>
    </div>
  );
}