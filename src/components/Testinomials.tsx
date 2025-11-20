import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Ananya K.",
    role: "Bride",
    initials: "AK",
    text:
      "Shubaश्री Celebrations made our wedding a dream come true! The decor was breathtaking, especially the mandap and floral arrangements.",
  },
  {
    name: "Rohan S.",
    role: "Groom",
    initials: "RS",
    text:
      "From the Haldi ceremony to the grand reception, the team executed every detail flawlessly. Everyone is still talking about the vibrant decor!",
  },
  {
    name: "Meera T.",
    role: "Pre-Wedding Client",
    initials: "MT",
    text:
      "Their creative touch on our pre-wedding shoot setup was stunning. The ambient lighting and backdrop made our memories truly special.",
  },
  {
    name: "Vikram P.",
    role: "Videographer",
    initials: "VP",
    text:
      "Working alongside Shubaश्री Celebrations was a delight. Their attention to detail in stage setup and lighting makes filming easier and more beautiful.",
  },
  {
    name: "Sara M.",
    role: "Event Planner",
    initials: "SM",
    text:
      "They don’t just decorate—they create experiences! The mix of tradition with modern elegance sets them apart in the wedding decor space.",
  },
];


export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft } = scrollRef.current;
    const cardWidth = 340;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    scrollRef.current.scrollTo({
      left: scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="testimonials"
      className="py-20 px-6 bg-gradient-to-br from-[#FFFDF8] to-[#F2F2F2] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-700 mb-4">
            Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories and honest opinions from clients who have chosen <span className="text-amber-700 font-medium">Shubaश्री Celebrations</span>.
          </p>
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-8 top-1/2 -translate-y-1/2 text-white bg-[#3c0501] rounded-full shadow-lg p-3 hover:bg-[#9a6424] z-10 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-8 top-1/2 -translate-y-1/2 text-white bg-[#3c0501] rounded-full shadow-lg p-3 hover:bg-[#9a6424] z-10 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>
            {`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="min-w-[320px] max-w-[340px] bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#662f11] flex flex-col justify-between relative"
            >
              {/* Author Section */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-full flex items-center justify-center bg-amber-100 text-amber-700 font-bold text-lg shadow">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              {/* Quote / Review Content */}
              <div className="mb-6 flex flex-col justify-between h-48">
  <span className="text-amber-400 text-3xl font-serif mb-2 block">“</span>
  <p className="text-gray-700 text-base leading-relaxed mb-2 flex-grow">
    {testimonial.text}
  </p>
  <div className="flex space-x-1 mt-auto">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
</div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}