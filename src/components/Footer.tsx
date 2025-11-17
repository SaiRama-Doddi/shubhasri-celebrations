import { Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#3c0501] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#ffc900] mb-4">
              Shubaश्री Celebrations
            </h3>
            <p className="text-[#f9e5b3]">
              Creating unforgettable moments and magical celebrations since 2014.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#ffc900]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-[#f9e5b3] hover:text-[#ffc900] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#f9e5b3] hover:text-[#ffc900] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#f9e5b3] hover:text-[#ffc900] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#f9e5b3] hover:text-[#ffc900] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#ffc900]">Popular Services</h4>
            <ul className="space-y-2">
              <li className="text-[#f9e5b3]">Wedding Planning</li>
              <li className="text-[#f9e5b3]">Birthday Parties</li>
              <li className="text-[#f9e5b3]">Corporate Events</li>
              <li className="text-[#f9e5b3]">Baby Showers</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#ffc900]">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Shubha%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80-Celebrations/61583829333177/?mibextid=wwXIfr&rdid=tuzzoA2s7sxXMmCi&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17ZqNrsi9c%2F%3Fmibextid%3DwwXIfr"
                className="w-10 h-10 bg-[#622e17] rounded-full flex items-center justify-center hover:bg-[#ffc900] transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/shubhashri.celebrations/?igsh=MWM2aW9kOWZmMjNrcQ%3D%3D&utm_source=qr#"
                className="w-10 h-10 bg-[#622e17] rounded-full flex items-center justify-center hover:bg-[#ffc900] transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#622e17] rounded-full flex items-center justify-center hover:bg-[#ffc900] transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#622e17] rounded-full flex items-center justify-center hover:bg-[#ffc900] transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#622e17] pt-8 text-center">
          <p className="text-[#f9e5b3] flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-2 text-[#ffc900]" /> by Shubaश्री Celebrations Team
          </p>
          <p className="text-[#b59372] mt-2">
            &copy; 2024 Shubaश्री Celebrations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
