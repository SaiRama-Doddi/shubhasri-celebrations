import { Sparkles } from "lucide-react";
import { useState, useEffect, type FC } from "react";

const Home: FC = () => {
  const carouselImages = [
    "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604668915840-580c30026e5f?q=80&w=1348&auto=format&fit=crop",
    "https://i.pinimg.com/originals/4f/2f/d3/4f2fd309d1b8f019d01871a3120bfc9c.jpg",
    "https://birthdaywala.in/wp-content/uploads/2024/06/H5.webp",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="
        relative 
        flex items-center justify-center text-center 
        overflow-hidden 
        h-[70vh] md:h-screen
      "
    >
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {carouselImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`carousel-${index}`}
            className={`
              absolute inset-0 w-full h-full object-cover 
              transition-opacity duration-[1500ms] ease-out 
              ${current === index ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}

        {/* Premium Gold-Tinted Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#3c0501]/40 to-black/50 backdrop-blur-[2px]" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <Sparkles className="w-14 h-14 text-[#ffd700] mx-auto animate-pulse drop-shadow-xl mb-4" />

        <h1
          className="
            text-4xl md:text-6xl font-extrabold 
            text-white leading-tight 
            drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]
            animate-fadeIn
          "
        >
          Welcome to
          <br />
          <span
            className="
              block mt-2 md:mt-4 
              text-[#ffd700] 
              font-extrabold tracking-wide
              drop-shadow-xl
              animate-slideUp
            "
          >
            Shubhaश्री Celebrations
          </span>
        </h1>

        <button
          onClick={() => (window.location.href = "#contact")}
          className="
            mt-8 bg-[#3c0501] text-white px-10 py-3 
            rounded-full text-lg font-semibold 
            hover:bg-[#622e17] 
            transition-all duration-300 
            hover:scale-110 
            shadow-[0_8px_15px_rgba(0,0,0,0.4)]
          "
        >
          Plan Your Celebration
        </button>
      </div>
    </section>
  );
};

export default Home;
