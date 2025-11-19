import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function GetStarted() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const calendlyUrl = "https://calendly.com/shubhashricelebrations1/30min";

  const handleWhatsApp = () => {
    const phoneNumber = "+918880801244";
    const message = encodeURIComponent(
      "Hi! I’d like to book a free consultation about Shubhश्री Celebrations."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // Disable scrolling when Calendly popup is open
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isCalendlyOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.height = "100vh";
    } else {
      html.style.overflow = "auto";
      body.style.overflow = "auto";
      body.style.height = "auto";
    }

    return () => {
      html.style.overflow = "auto";
      body.style.overflow = "auto";
      body.style.height = "auto";
    };
  }, [isCalendlyOpen]);

  // Show scroll to top button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Get Started Button */}
      <button
        onClick={() => setIsCalendlyOpen(true)}
        className="fixed bottom-12 right-8 bg-[#ffd700] text-[#3c0501] px-6 py-3 rounded-lg hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl z-40 cursor-pointer font-bold"
      >
        Book Now
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-24 right-8 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-transform duration-300 z-40 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-9 h-9" />
      </button>

      {/* Scroll To Top Button (Left Side) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-12 left-8 bg-[#ffd700] text-[#3c0501] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-900 hover:scale-110 transition-transform duration-300 z-40 cursor-pointer"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-7 h-7" />
        </button>
      )}

      {/* Calendly Popup */}
      <PopupModal
        url={calendlyUrl}
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root") as HTMLElement}
      />
    </>
  );
}
