import { useEffect, useState } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  review: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sruthi & Mahesh",
    role: "Wedding Event",
    rating: 5,
    review:
      "They made our wedding absolutely magical! Every detail was perfect and beautifully executed. Truly unforgettable experience.",
    image: "https://i.ibb.co/3Y88twv/wedding-couple.jpg",
  },
  {
    id: 2,
    name: "Deepika",
    role: "Birthday Decoration",
    rating: 5,
    review:
      "Amazing decoration and coordination! The team understood exactly what we wanted. Everyone loved the theme and setup!",
    image: "https://i.ibb.co/Vphffgd/birthday-girl.jpg",
  },
  {
    id: 3,
    name: "Corporate Event Team",
    role: "Annual Meet",
    rating: 4,
    review:
      "Professional, dedicated, and creative. They handled our corporate annual meet smoothly with top quality arrangements.",
    image: "https://i.ibb.co/8dJ4pVx/group-review.jpg",
  },
  {
    id: 4,
    name: "Ramesh & Family",
    role: "Housewarming Event",
    rating: 5,
    review:
      "Beautiful decoration, timely coordination and friendly team! Our housewarming received so many compliments.",
    image: "https://i.ibb.co/wdJ1jLQ/family-review.jpg",
  },
  {
    id: 5,
    name: "Kiran",
    role: "Engagement Ceremony",
    rating: 5,
    review:
      "From stage decor to lighting—everything was premium and elegant. Definitely choosing them again!",
    image: "https://i.ibb.co/M5Jy7sk/engagement.jpg",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState<number>(0);

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-pacifico text-center text-4xl sm:text-5xl font-bold text-[#ffc900] mb-12">
          Client Testimonials
        </h2>

        <div className="relative w-full max-w-3xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-700 ${
                index === current
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 absolute left-0 top-0 translate-x-10 pointer-events-none"
              }`}
            >
              <div className="bg-[#3c0501] rounded-2xl p-8 shadow-xl text-center">
                {/* Reviewer Image */}
                <div className="mx-auto mb-6 w-28 h-28 rounded-full overflow-hidden border-4 border-[#ffc900] shadow-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-[#ffc900] fill-[#ffc900]"
                    />
                  ))}
                </div>

                {/* Name & Role */}
                <h3 className="text-2xl font-bold">{item.name}</h3>
                <p className="text-sm text-[#3c0501] font-semibold mb-4">
                  {item.role}
                </p>

                {/* Review */}
                <p className="text-white/95 text-lg leading-relaxed">
                  "{item.review}"
                </p>
              </div>
            </div>
          ))}

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current
                    ? "bg-[#ffc900] scale-125"
                    : "bg-[#85764b]"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
