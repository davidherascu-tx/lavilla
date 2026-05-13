"use client";

import { useState, useEffect, useCallback } from "react";

type Category = "villa" | "rooms" | "weddings";

type GalleryImage = {
  src: string;
  alt: string;
  category: Category;
};

const galleryImages: GalleryImage[] = [
  // The Villa
  { src: "/villa_living.webp", alt: "Living area", category: "villa" },
  { src: "/villa_pool.webp", alt: "Pool with ocean view", category: "villa" },
  { src: "/villa_kitchen.webp", alt: "Kitchen", category: "villa" },
  { src: "/hero-1.webp", alt: "La Villa Esplendida", category: "villa" },
  { src: "/villa-1.webp", alt: "Villa terrace", category: "villa" },
  { src: "/hero-2.webp", alt: "Bay view", category: "villa" },
  { src: "/villa-2.webp", alt: "Villa lounge", category: "villa" },
  { src: "/villa-3.webp", alt: "Villa details", category: "villa" },
  { src: "/hero-3.webp", alt: "Ocean sunset", category: "villa" },
  { src: "/villa-4.webp", alt: "Villa interior", category: "villa" },
  { src: "/villa-5.webp", alt: "Villa entrance", category: "villa" },
  { src: "/hero-4.webp", alt: "La Villa Esplendida", category: "villa" },

  // Rooms
  { src: "/room_1.webp", alt: "Room 1", category: "rooms" },
  { src: "/room_2.webp", alt: "Room 2", category: "rooms" },
  { src: "/room_3.webp", alt: "Room 3", category: "rooms" },

  // Weddings
  { src: "/wedding-1.webp", alt: "Wedding ceremony", category: "weddings" },
  { src: "/wedding-2.webp", alt: "Wedding reception", category: "weddings" },
  { src: "/wedding-3.webp", alt: "Wedding setup", category: "weddings" },
  { src: "/wedding-4.webp", alt: "Wedding celebration", category: "weddings" },
];

const filters: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "villa", label: "The Villa" },
  { id: "rooms", label: "Rooms" },
  { id: "weddings", label: "Weddings" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<Category | "all">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const nextImage = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % filteredImages.length
    );
  }, [filteredImages.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((i) =>
      i === null
        ? null
        : (i - 1 + filteredImages.length) % filteredImages.length
    );
  }, [filteredImages.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <div className="flex flex-col flex-1 bg-stone-50">

      {/* Hero / Title */}
      <section className="w-full px-4 sm:px-8 lg:px-12 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-teal-700 tracking-[0.4em] uppercase font-bold text-xs sm:text-sm mb-4 block">
            Moments
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black text-stone-900 leading-none mb-6 sm:mb-8">
            Gallery
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
            A glimpse into life at La Villa Esplendida — from quiet pool mornings to celebratory wedding nights.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="w-full px-4 sm:px-8 lg:px-12 pb-8 sm:pb-12">
        <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center gap-3 sm:gap-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 sm:px-8 py-3 sm:py-4 text-xs tracking-[0.25em] uppercase font-bold transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-stone-900 text-white shadow-lg"
                  : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="w-full px-4 sm:px-8 lg:px-12 pb-20 sm:pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredImages.map((image, i) => (
              <button
                key={`${image.src}-${i}`}
                onClick={() => setLightboxIndex(i)}
                aria-label={`Open ${image.alt}`}
                className="group relative aspect-[4/5] rounded-[1rem] sm:rounded-[1.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-stone-200"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500 flex items-end justify-start p-6">
                  <span className="text-white text-xs tracking-[0.3em] uppercase font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    {image.alt}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <p className="text-center text-stone-500 font-light py-20">
              No images yet in this category.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-stone-900/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-3 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-[1400px] max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="text-center mt-4 sm:mt-6">
              <p className="text-white/70 text-xs tracking-[0.3em] uppercase font-semibold">
                {filteredImages[lightboxIndex].alt}
              </p>
              <p className="text-white/40 text-xs mt-2">
                {lightboxIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

    </div>
  );
}
