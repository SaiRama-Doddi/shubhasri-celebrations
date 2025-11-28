import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Ananya K.",
    role: "Bride",
    initials: "AK",
    text: "Shubaश्री Celebrations made our wedding a dream come true! The decor was breathtaking — every detail felt magical and royal.",
  },
  {
    name: "Rohan S.",
    role: "Groom",
    initials: "RS",
    text: "From Haldi to Reception, everything was perfectly organized. Guests loved the vibrant decor and seamless coordination!",
  },
  {
    name: "Meera T.",
    role: "Pre-Wedding Client",
    initials: "MT",
    text: "Our pre-wedding theme was beyond beautiful — elegant lighting, cinematic backgrounds, and a dreamlike ambience.",
  },
  {
    name: "Vikram P.",
    role: "Videographer",
    initials: "VP",
    text: "A pleasure working with their team. Their stage setups, lighting, floral designs — all are extremely camera-friendly.",
  },
  {
    name: "Sara M.",
    role: "Event Planner",
    initials: "SM",
    text: "They curate EXPERIENCES, not just decor. Their blend of tradition + luxury stands unmatched in the industry.",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 360;
    const amount = dir === "left" ? -cardWidth : cardWidth;
    scrollRef.current.scrollTo({
      left: scrollRef.current.scrollLeft + amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-14 bg-gradient-to-b from-[#fff8ef] to-[#f3e4ce] overflow-hidden">
      {/* Floating Gold Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-16 h-16 bg-amber-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-32 w-20 h-20 bg-[#d4af37] rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#3c0501] font-[Times_New_Roman] italic drop-shadow">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[#7a4b2d] mt-3 max-w-2xl mx-auto">
            Real voices sharing real experiences — crafted with love by{" "}
            <span className="text-[#c8913f] font-semibold">
              Shubaश्री Celebrations
            </span>
            .
          </p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => scroll("left")}
          className="hidden sm:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-[#3c0501] text-white p-3 rounded-full shadow-xl hover:bg-amber-700 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden sm:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-[#3c0501] text-white p-3 rounded-full shadow-xl hover:bg-amber-700 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto scrollbar-hide scroll-smooth pb-6 px-2"
          style={{ scrollbarWidth: "none" }}
        >
          <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="
  min-w-[90%] sm:min-w-[350px]
  rounded-3xl p-8 
  border border-[#e6d4b4] 
  hover:shadow-[0_15px_50px_rgba(0,0,0,0.15)]
  transition-all duration-300 
  relative
"
            >
              {/* Large Quote Icon */}
              <Quote className="absolute top-4 right-4 w-10 h-10 text-amber-400 opacity-70" />

              {/* Profile */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#fff8e1] border-2 border-[#d4af37] flex items-center justify-center text-[#b27a2b] font-bold text-xl shadow">
                  {item.initials}
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#3c0501]">
                    {item.name}
                  </p>
                  <p className="text-sm text-[#7a4b2d]">{item.role}</p>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 h-32">
                {item.text}
              </p>

              {/* Stars */}
              <div className="flex gap-1">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#d4af37] text-[#d4af37]"
                    />
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
