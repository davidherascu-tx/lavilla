"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-stone-100 transition-all duration-300">
      <div className="w-full px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center h-24">
          
          {/* Left: Navigation (Hidden on Mobile) */}
          <nav className="hidden md:flex justify-start space-x-10 lg:space-x-14">
            <Link href="/" className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-400 hover:text-stone-900 transition-colors duration-300">
              Home
            </Link>
            <Link href="#weddings" className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-400 hover:text-stone-900 transition-colors duration-300">
              Weddings
            </Link>
            <Link href="#vacations" className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-400 hover:text-stone-900 transition-colors duration-300">
              Vacations
            </Link>
          </nav>

          {/* Center: Logo */}
          <div className="flex justify-start md:justify-center">
            <Link href="/" className="flex flex-col items-center group">
              <span className="text-3xl md:text-4xl font-serif font-medium tracking-[0.15em] text-stone-900 group-hover:text-stone-600 transition-colors duration-500">
                LA VILLA
              </span>
              <span className="text-[10px] tracking-[0.4em] font-sans text-stone-400 uppercase mt-1">
                Esplendida
              </span>
            </Link>
          </div>

          {/* Right: Phone Numbers (Hidden on Mobile) */}
          <div className="hidden md:flex flex-col items-end justify-center space-y-1.5">
            <a href="tel:+19712812649" className="text-[11px] tracking-widest font-semibold uppercase text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-3">
              <span className="text-base" aria-label="US Flag">🇺🇸</span> +1 971 281 2649
            </a>
            <a href="tel:+523222914008" className="text-[11px] tracking-widest font-semibold uppercase text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-3">
              <span className="text-base" aria-label="Mexico Flag">🇲🇽</span> +52 322 291 4008
            </a>
          </div>

          {/* Hamburger Icon (Visible only on Mobile) */}
          <div className="md:hidden flex justify-end">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-stone-900 p-2 focus:outline-none"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-24 left-0 w-full bg-white border-b border-stone-200 shadow-2xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-8 py-8 space-y-6">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold tracking-[0.2em] uppercase text-stone-600">Home</Link>
          <Link href="#weddings" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold tracking-[0.2em] uppercase text-stone-600">Weddings</Link>
          <Link href="#vacations" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold tracking-[0.2em] uppercase text-stone-600">Vacations</Link>
          
          <div className="pt-6 border-t border-stone-100 flex flex-col space-y-5">
            <a href="tel:+19712812649" className="text-xs tracking-widest font-semibold uppercase text-stone-500 flex items-center gap-3">
              <span className="text-lg">🇺🇸</span> +1 971 281 2649
            </a>
            <a href="tel:+523222914008" className="text-xs tracking-widest font-semibold uppercase text-stone-500 flex items-center gap-3">
              <span className="text-lg">🇲🇽</span> +52 322 291 4008
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}