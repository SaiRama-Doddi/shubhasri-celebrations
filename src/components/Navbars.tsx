import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

type NavbarProps = {
  onBookClick: () => void;
};

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Gallery", to: "/gallery" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#3c0501]"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* CENTER NAV LINKS - DESKTOP */}
          <div className="hidden md:flex flex-1 justify-center space-x-12">
            {navLinks.map((nav) => (
              <Link
                key={nav.label}
                to={nav.to}
                className="text-[#3c0501] font-semibold text-lg tracking-wide hover:text-[#8b0000] transition"
              >
                {nav.label}
              </Link>
            ))}
          </div>

          {/* BOOK NOW BUTTON ALWAYS ON RIGHT (MOBILE + DESKTOP) */}
          <button
            onClick={onBookClick}
            className="bg-gradient-to-r from-[#8a4b23] to-[#d8a24a] text-white font-semibold px-5 py-2 rounded-full shadow-md hover:opacity-85 transition md:block"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* MOBILE MENU LINKS */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl shadow-lg border-t border-gray-300">
          <div className="px-4 py-4 space-y-2">

            {navLinks.map((nav) => (
              <Link
                key={nav.label}
                to={nav.to}
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#3c0501] font-medium text-lg px-4 py-3 rounded-lg hover:bg-gray-200 transition"
              >
                {nav.label}
              </Link>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
}
