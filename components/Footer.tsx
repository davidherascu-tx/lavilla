import Link from "next/link";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "The Villa", href: "/villa" },
  { label: "Weddings", href: "/wedding" },
  { label: "Rate & Services", href: "/rates" },
];

const moreLinks = [
  { label: "Gallery", href: "/gallery" },
  { label: "About PV", href: "/about-pv" },
  { label: "FAQ's", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    iconPath:
      "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
    viewBox: "0 0 320 512",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    iconPath:
      "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
    viewBox: "0 0 448 512",
  },
  {
    label: "Google",
    href: "https://google.com",
    iconPath:
      "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z",
    viewBox: "0 0 488 512",
  },
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20 pb-8">

        {/* Top: Brand + Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-14 sm:mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/la_villa_logo_white.png"
              alt="La Villa Esplendida"
              className="h-14 sm:h-16 w-auto mb-6"
            />
            <p className="text-stone-400 font-light text-sm sm:text-base leading-relaxed mb-6 max-w-xs">
              A private oceanfront villa in the jungle of Cabo Corrientes — built for slow mornings and unforgettable celebrations.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full border border-stone-700 flex items-center justify-center text-stone-300 hover:bg-white hover:text-stone-900 hover:border-white transition-all duration-300"
                >
                  <svg
                    viewBox={social.viewBox}
                    fill="currentColor"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d={social.iconPath} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase font-bold text-white mb-6">
              Explore
            </h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-stone-400 font-light hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase font-bold text-white mb-6">
              Information
            </h3>
            <ul className="space-y-3">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-stone-400 font-light hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase font-bold text-white mb-6">
              Contact
            </h3>
            <div className="space-y-4 text-sm sm:text-base">
              <a
                href="tel:+19712812649"
                className="flex items-center gap-3 text-stone-400 font-light hover:text-white transition-colors"
              >
                <span aria-label="US Flag">🇺🇸</span> +1 971 281 2649
              </a>
              <a
                href="tel:+523222914008"
                className="flex items-center gap-3 text-stone-400 font-light hover:text-white transition-colors"
              >
                <span aria-label="Mexico Flag">🇲🇽</span> +52 322 291 4008
              </a>
              <a
                href="mailto:info@lavillaesplendida.com"
                className="block text-stone-400 font-light hover:text-white transition-colors break-all"
              >
                info@lavillaesplendida.com
              </a>
              <p className="text-stone-400 font-light leading-relaxed">
                Boca de Tomatlán<br />
                Cabo Corrientes, Jalisco<br />
                Mexico
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-stone-500 font-light text-center md:text-left">
            © {new Date().getFullYear()} La Villa Esplendida. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs sm:text-sm">
            <Link
              href="/faq"
              className="text-stone-500 font-light hover:text-white transition-colors"
            >
              FAQ&apos;s
            </Link>
            <Link
              href="/contact"
              className="text-stone-500 font-light hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
