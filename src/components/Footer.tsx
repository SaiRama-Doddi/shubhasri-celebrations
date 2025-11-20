import { Facebook, Instagram, Twitter, Youtube, Heart } from "lucide-react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#3c0501] via-[#622e17] to-[#b7802f] text-[#f9e5b3] py-16 border-t border-[#d4af37]/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mb-14">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <img
                src="/shubha1.png"
                alt="SS Consultants Logo"
                className="w-48 md:w-60 h-auto object-contain drop-shadow-lg"
              />
            </Link>
            <p className="text-[#d4af37] leading-relaxed text-lg max-w-sm">
              Creating unforgettable moments and magical celebrations since 2014.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-semibold mb-6 text-[#e0a93e]">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Services", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-[#ffc900] transition-colors duration-300 text-lg"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-2xl font-semibold mb-6 text-[#d4af37]">Popular Services</h4>
            <ul className="space-y-4 text-lg">
              <li>Wedding Planning</li>
              <li>Birthday Parties</li>
              <li>Corporate Events</li>
              <li>Baby Showers</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="text-2xl font-semibold mb-6 text-[#d4af37]">Follow Us</h4>
            <div className="flex space-x-5">
              {[
                {
                  icon: Facebook,
                  link:
                    "https://www.facebook.com/people/Shubhaश्री-Celebrations/61583829333177/",
                },
                {
                  icon: Instagram,
                  link: "https://www.instagram.com/shubhashri.celebrations/",
                },
                { icon: Twitter, link: "#" },
                { icon: Youtube, link: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#d4af37] border border-[#b88a1a] flex items-center justify-center text-[#3c0501] hover:bg-[#ffc900] hover:text-[#3c0501] shadow-md transition-all duration-300"
                  aria-label={`Follow on ${item.icon.displayName || "social media"}`}
                >
                  <item.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#d4af37]/40 pt-8 text-center">
          <p className="text-[#d4af37] flex items-center justify-center text-lg select-none">
            Made with
            <Heart className="w-5 h-5 mx-2 text-[#ffc900] animate-pulse" />
            by Shubhaश्री Celebrations Team
          </p>
          <p className="text-[#bfa94f] mt-2 text-sm select-none">
            &copy; 2024 Shubhaश्री Celebrations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
