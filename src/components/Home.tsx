import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=1170&auto=format&fit=crop",
    title: "Wedding & Reception Decor",
    subtitle:
      "Elegant floral setups, stage décor, lighting, and thematic decorations for dream weddings.",
    description:
      "From royal wedding stages to pastel themes, we create unforgettable moments with stunning décor.",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/djhsdo5to/image/upload/v1763909715/floral-7_pqarcr.jpg",
    title: "Haldi & Mehendi Celebrations",
    subtitle:
      "Bright, vibrant, and traditional setups designed specially for haldi, mehendi, and sangeet ceremonies.",
    description:
      "Colorful décor, floral arrangements, photo corners and festive backdrops.",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/originals/4f/2f/d3/4f2fd309d1b8f019d01871a3120bfc9c.jpg",
    title: "Pre-Wedding & Couple Shoots",
    subtitle:
      "Designer backdrops, themed sets, lighting, and props for cinematic pre-wedding shoots.",
    description:
      "Fairy lights, boho themes, royal classics, or nature-inspired concepts.",
  },
  {
    id: 4,
    image:
      "https://birthdaywala.in/wp-content/uploads/2024/06/H5.webp",
    title: "Dhoti Ceremony & Traditional Events",
    subtitle:
      "Pure traditional décor for dhoti ceremony, cradle ceremony, annaprasana, and house rituals.",
    description:
      "Floral mandaps, cultural backdrops, pooja setups and family-themed decoration.",
  },
  {
    id: 5,
    image:
      "https://birthdaywala.in/wp-content/uploads/2024/06/H5.webp",
    title: "Birthday & Party Decorations",
    subtitle:
      "Custom themes for kids’ birthdays, surprise parties, anniversaries and celebrations.",
    description:
      "Balloon décor, LED backdrops, themed stages, and creative photo corners.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[85vh] overflow-hidden bg-black" id="hero">
      {/* IMAGES */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out 
              ${index === current ? "opacity-100 scale-105 z-10" : "opacity-0 scale-100 z-0"}
            `}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover brightness-[0.85]"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>

            {/* TEXT CONTENT */}
            <div
              className={`absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-24
                transition-all duration-1000
                ${index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
              `}
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
                {slide.title}
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-slate-100 max-w-2xl mb-4">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ARROWS */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-slate-800 p-3 rounded-full shadow-md transition"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-slate-800 p-3 rounded-full shadow-md transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all 
              ${current === index ? "bg-blue-500 scale-125" : "bg-white/60"}
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
