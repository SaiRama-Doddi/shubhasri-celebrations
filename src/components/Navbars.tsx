import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

type NavbarProps = {
  onBookClick: () => void;
};

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    "Wedding",
    "Haldi Ceremony",
    "Birthday Party",
    "Engagement",
    "Half Saree Ceremony",
    "Dhoti Ceremony",
    "House Warming",
    "Anniversary",
    "Baby Shower",
    "Office Inauguration",
    "Naming Ceremony",
    "Corporate Events",
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#3c0501]/95 backdrop-blur-md border-b-2 border-[#d4af37]/30 shadow-xl">
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/djhsdo5to/image/upload/v1763398847/3_oputze.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/shubha.png"
              alt="Shubha Celebrations Logo"
              className="h-16 w-16 object-contain drop-shadow-lg"
            />
            <div className="flex flex-col">
              <span className="text-[#ffd700] font-bold text-2xl tracking-wide">
                Shubhaश्री
              </span>
              <span className="text-[#ffd700]/80 text-xs tracking-widest">
                CELEBRATIONS
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-[#ffd700] hover:text-white transition font-medium tracking-wide relative group"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#ffd700] group-hover:w-full transition-all"></span>
            </Link>

            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-[#ffd700] hover:text-white transition font-medium tracking-wide">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-[#4a1515] border border-[#d4af37]/40 rounded-xl shadow-2xl py-3 backdrop-blur-xl">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={`/service/${service.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-4 py-2 text-[#ffd700] hover:bg-[#d4af37]/20 hover:text-white transition-all"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/gallery"
              className="text-[#ffd700] hover:text-white transition font-medium tracking-wide relative group"
            >
              Gallery
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ffd700] group-hover:w-full transition-all"></span>
            </Link>

            <Link
              to="/about"
              className="text-[#ffd700] hover:text-white transition font-medium tracking-wide relative group"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ffd700] group-hover:w-full transition-all"></span>
            </Link>

            <Link
              to="/contact"
              className="text-[#ffd700] hover:text-white transition font-medium tracking-wide relative group"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ffd700] group-hover:w-full transition-all"></span>
            </Link>

            {/* Book Now button now calls the passed-in onBookClick */}
            <button
              onClick={onBookClick}
              className="bg-[#ffd700] text-[#3c0501] font-semibold px-5 py-2 rounded-full shadow-md hover:bg-white transition"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#ffd700] hover:text-white"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#3c0501]/98 backdrop-blur-xl border-t border-[#ffd700]/20">
          <div className="px-4 pt-3 pb-4 space-y-3">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#ffd700] hover:text-white hover:bg-[#d4af37]/10 px-4 py-3 rounded-lg transition"
            >
              Home
            </a>

            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between text-[#ffd700] hover:text-white px-4 py-3 rounded-lg transition"
              >
                Services
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={`/service/${service.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block text-[#ffd700] hover:text-white hover:bg-[#d4af37]/10 px-4 py-2 rounded-md transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#gallery"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#ffd700] hover:text-white hover:bg-[#d4af17]/10 px-4 py-3 rounded-lg transition"
            >
              Gallery
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#ffd700] hover:text-white hover:bg-[#d4af37]/10 px-4 py-3 rounded-lg transition"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#ffd700] hover:text-white hover:bg-[#d4af37]/10 px-4 py-3 rounded-lg transition"
            >
              Contact
            </a>

            {/* Mobile Book Now */}
            <button
              onClick={() => {
                onBookClick();
                setIsMenuOpen(false);
              }}
              className="w-full bg-[#ffd700] text-[#3c0501] font-semibold px-4 py-3 rounded-lg shadow-md hover:bg-white transition"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
