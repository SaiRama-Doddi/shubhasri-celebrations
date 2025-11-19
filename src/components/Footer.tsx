import { Facebook, Instagram, Twitter, Youtube, Heart } from "lucide-react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-14 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand */}
          <div>
             <Link to="/" className="flex items-center">
            <img
              src="/shubha1.png"
              alt="SS Consultants Logo"
              className="w-44 md:w-60 h-auto object-contain drop-shadow-lg"
            />
          </Link>
            <p className="text-gray-600 leading-relaxed">
              Creating unforgettable moments and magical celebrations since 2014.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#c89d00]">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="text-gray-700 hover:text-[#c89d00] transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#c89d00]">Popular Services</h4>
            <ul className="space-y-3 text-gray-700">
              <li>Wedding Planning</li>
              <li>Birthday Parties</li>
              <li>Corporate Events</li>
              <li>Baby Showers</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#c89d00]">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                {
                  icon: Facebook,
                  link:
                    "https://www.facebook.com/people/Shubhaश्री-Celebrations/61583829333177/",
                },
                {
                  icon: Instagram,
                  link:
                    "https://www.instagram.com/shubhashri.celebrations/",
                },
                { icon: Twitter, link: "#" },
                { icon: Youtube, link: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="w-11 h-11 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center hover:bg-[#c89d00] hover:text-white transition-all duration-300"
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-6 border-gray-300 text-center">
          <p className="text-gray-600 flex items-center justify-center">
            Made with
            <Heart className="w-4 h-4 mx-2 text-[#c89d00]" />
            by Shubhaश्री Celebrations Team
          </p>
          <p className="text-gray-500 mt-2">
            &copy; 2024 Shubhaश्री Celebrations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
