import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);



useEffect(() => {
  setIsSticky(true); // always sticky on all devices
}, []);


  const services = [
    'Wedding',
    'Haldi Ceremony',
    'Birthday Party',
    'Engagement',
    'Half Saree Ceremony',
    'Dhoti Ceremony',
    'House Warming',
    'Anniversary',
    'Baby Shower',
    'Office Inauguration',
    'Naming Ceremony',
    'Corporate Events'
  ];

  return (
    <nav
      className={`bg-[#3c0501]
          bg-[url('https://res.cloudinary.com/djhsdo5to/image/upload/v1763398847/3_oputze.jpg')]
bg-blend-overlay
         text-white z-50 shadow-lg transition-all duration-300 ${isSticky ? "fixed top-0 left-0 w-full" : "relative"}`}
      
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* NAVBAR MAIN */}
        <div className="flex justify-between items-center h-auto   ">

          {/* LOGO CLEANER & CLEARER */}
          <Link to="/" className="flex items-center">
            <img
              src="/shubha1.png"
              alt="SS Consultants Logo"
              className="w-44 md:w-60 h-auto object-contain drop-shadow-lg"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#home" className="hover:text-[#ffc900] font-medium text-lg">Home</a>

            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center hover:text-[#ffc900] font-medium text-lg">
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-60 bg-[#622e17] rounded-lg shadow-xl py-3 border border-[#bc842f]">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={`/service/${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-md hover:bg-[#bc842f] hover:text-white transition"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a href="#about" className="hover:text-[#ffc900] font-medium text-lg">About</a>
            <a href="#contact" className="hover:text-[#ffc900] font-medium text-lg">Contact</a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#ffc900]"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isOpen && (
          <div className="md:hidden  pb-4 space-y-3">
            <a
              href="#home"
              className="block py-2 hover:text-[#ffc900]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>

            {/* MOBILE SERVICES DROPDOWN */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full py-2 hover:text-[#ffc900]"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={`/service/${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block py-1 text-[#f9e5b3] hover:text-[#ffc900]"
                      onClick={() => setIsOpen(false)}
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#about"
              className="block py-2 hover:text-[#ffc900]"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>

            <a
              href="#contact"
              className="block py-2 hover:text-[#ffc900]"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
