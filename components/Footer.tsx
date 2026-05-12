import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-serif text-white tracking-widest mb-2">LA VILLA</h2>
          <p className="text-sm">Authentic culinary experiences.</p>
        </div>

        {/* Links */}
        <div className="flex space-x-6 text-sm">
          <Link href="#about" className="hover:text-amber-400 transition">About</Link>
          <Link href="#menu" className="hover:text-amber-400 transition">Menu</Link>
          <Link href="#contact" className="hover:text-amber-400 transition">Contact</Link>
          <Link href="#" className="hover:text-amber-400 transition">Privacy Policy</Link>
        </div>

        {/* Copyright */}
        <div className="text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} La Villa. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
}