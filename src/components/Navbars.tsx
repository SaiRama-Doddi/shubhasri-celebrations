import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type NavbarProps = {
  onBookClick: () => void;
};

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // <-- To get current page path

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Gallery", to: "/gallery" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f8f1e3]/90 backdrop-blur-md shadow-lg border-b border-gray-300 font-[Times_New_Roman] italic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* LEFT LOGO SECTION */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo1.png"
              alt="Logo Icon"
          className="w-14 h-14 md:w-20 md:h-20 object-contain"

            />
            <img
              src="/logo2.png"
              alt="Logo Text"
           className="h-14 md:h-20 mt-2 object-contain"

            />
          </Link>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#3c0501]"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* CENTER NAV LINKS - DESKTOP */}
          <div className="hidden md:flex flex-1 justify-center space-x-12">
            {navLinks.map((nav) => {
              const isActive = location.pathname === nav.to;

              return (
                <Link
                  key={nav.label}
                  to={nav.to}
                  className={`text-lg tracking-wide transition ${
                    isActive
                      ? "text-[#8b0000] font-bold underline underline-offset-4"
                      : "text-[#3c0501] hover:text-[#8b0000]"
                  }`}
                >
                  {nav.label}
                </Link>
              );
            })}
          </div>

          {/* BOOK NOW BUTTON */}
          <button
            onClick={onBookClick}
            className="bg-gradient-to-r from-[#8a4b23] to-[#d8a24a] text-white font-semibold px-5 py-2 rounded-full shadow-md hover:opacity-85 transition md:block italic"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* MOBILE MENU LINKS */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#f8f1e3]/95 backdrop-blur-xl shadow-lg border-t border-gray-300 font-[Times_New_Roman] italic">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((nav) => {
              const isActive = location.pathname === nav.to;

              return (
                <Link
                  key={nav.label}
                  to={nav.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-lg px-4 py-3 rounded-lg transition ${
                    isActive
                      ? "text-[#8b0000] font-bold underline underline-offset-4"
                      : "text-[#3c0501] hover:bg-gray-200"
                  }`}
                >
                  {nav.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
