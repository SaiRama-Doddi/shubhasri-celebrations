import { Sparkles } from "lucide-react";
import { useState, useEffect, type FC } from "react";

const Home: FC = () => {
  const carouselImages: string[] = [
    "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=1170&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604668915840-580c30026e5f?q=80&w=1348&auto=format&fit=crop",
    "https://i.pinimg.com/originals/4f/2f/d3/4f2fd309d1b8f019d01871a3120bfc9c.jpg",
    "https://birthdaywala.in/wp-content/uploads/2024/06/H5.webp",
  ];

  const [current, setCurrent] = useState<number>(0);

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
        h-[50vh] md:h-[100vh] lg:h-[100vh]
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
              transition-opacity duration-[1500ms] 
              ${current === index ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9e5b3]/50 via-[#b59372]/40 to-[#bc842f]/40" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <Sparkles className="w-14 h-14 text-[#ffc900] mx-auto animate-pulse mb-4" />

      <h1 className="text-4xl md:text-6xl font-bold text-[#3c0501] drop-shadow-lg mb-4">
  Welcome to <br />
  <span className="block md:mt-4 text-[#622e17]">Shubhaश्री Celebrations</span>
</h1>


        <button
          onClick={() => (window.location.href = "#contact")}
          className="
            bg-[#3c0501] text-white px-10 py-3 
            rounded-full text-lg font-semibold 
            hover:bg-[#622e17] transition duration-300 hover:scale-105 
            shadow-xl
          "
        >
          Plan Your Celebration
        </button>
      </div>
    </section>
  );
};

export default Home;
