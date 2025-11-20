import { FaWhatsapp } from "react-icons/fa";

export default function GetStarted() {
  const handleWhatsApp = () => {
    const phoneNumber = "+918880801244";
    const message = encodeURIComponent(
      "Hi! I’d like to book a free consultation about Shubhश्री Celebrations."
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      {/* WhatsApp Floating Button (Bottom-Right) */}
      <button
        onClick={handleWhatsApp}
        className="
          fixed bottom-6 right-6
          bg-green-500 text-white 
          w-16 h-16 rounded-full 
          flex items-center justify-center 
          shadow-lg hover:bg-green-600 
          hover:scale-110 transition-transform duration-300 
          z-40 cursor-pointer
        "
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-9 h-9" />
      </button>
    </>
  );
}
