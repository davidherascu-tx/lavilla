"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "The Villa", href: "/villa" },
  { label: "Weddings", href: "/wedding" },
  { label: "Rate & Services", href: "/rates" },
  { label: "Gallery", href: "/gallery" },
  { label: "About PV", href: "/about-pv" },
  { label: "FAQ's", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-stone-100">
      <div className="w-full px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center min-h-[6rem] py-3">

          {/* Left: Navigation (Hidden on Mobile) */}
          <nav className="hidden md:flex flex-wrap items-center justify-start gap-x-4 lg:gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs lg:text-[13px] font-semibold tracking-[0.1em] uppercase text-stone-800 hover:text-stone-500 transition-colors duration-300 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Center: Logo */}
          <div className="flex justify-start md:justify-center">
            <Link href="/" className="block">
              <img
                src="/la_villa_logo_black.png"
                alt="La Villa Esplendida"
                className="h-12 md:h-16 w-auto"
              />
            </Link>
          </div>

          {/* Right: Phone Numbers (Hidden on Mobile) */}
          <div className="hidden md:flex flex-col items-end justify-center space-y-2">
            <a
              href="tel:+19712812649"
              className="text-sm lg:text-[15px] tracking-wider font-semibold text-stone-800 hover:text-stone-500 transition-colors flex items-center gap-3"
            >
              <span className="text-lg" aria-label="US Flag">🇺🇸</span> +1 971 281 2649
            </a>
            <a
              href="tel:+523222914008"
              className="text-sm lg:text-[15px] tracking-wider font-semibold text-stone-800 hover:text-stone-500 transition-colors flex items-center gap-3"
            >
              <span className="text-lg" aria-label="Mexico Flag">🇲🇽</span> +52 322 291 4008
            </a>
          </div>

          {/* Hamburger Icon (Visible only on Mobile) */}
          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
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
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-stone-200 shadow-2xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-8 py-8 space-y-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-[0.2em] uppercase text-stone-600 hover:text-stone-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-6 border-t border-stone-100 flex flex-col space-y-5">
            <a
              href="tel:+19712812649"
              className="text-xs tracking-widest font-semibold uppercase text-stone-500 flex items-center gap-3"
            >
              <span className="text-lg" aria-label="US Flag">🇺🇸</span> +1 971 281 2649
            </a>
            <a
              href="tel:+523222914008"
              className="text-xs tracking-widest font-semibold uppercase text-stone-500 flex items-center gap-3"
            >
              <span className="text-lg" aria-label="Mexico Flag">🇲🇽</span> +52 322 291 4008
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
