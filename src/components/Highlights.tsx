import { Heart, Calendar, Star } from "lucide-react";
import {type FC, type ReactNode } from "react";

interface CardItem {
  icon: ReactNode;
  title: string;
  text: string;
}

interface StatItem {
  number: string;
  label: string;
}

const Highlights: FC = () => {
  const cards: CardItem[] = [
    {
      icon: <Heart className="w-12 h-12 text-[#622e17] mx-auto mb-4" />,
      title: "Passionate Planning",
      text: "We bring love and dedication to every celebration we organize",
    },
    {
      icon: <Calendar className="w-12 h-12 text-[#622e17] mx-auto mb-4" />,
      title: "Perfect Timing",
      text: "Meticulous planning ensures your event runs smoothly",
    },
    {
      icon: <Star className="w-12 h-12 text-[#622e17] mx-auto mb-4" />,
      title: "Premium Quality",
      text: "Excellence in every detail, from start to finish",
    },
  ];

  const stats: StatItem[] = [
    { number: "500+", label: "Events Organized" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Expert Team" },
  ];

  return (
    <section className="py-20 bg-[#fff6ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {cards.map((item: CardItem, index: number) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              {item.icon}
              <h3 className="text-2xl font-bold text-[#3c0501] mb-3">
                {item.title}
              </h3>
              <p className="text-[#622e17]">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat: StatItem, index: number) => (
            <div key={index}>
              <p className="text-4xl md:text-5xl font-bold text-[#3c0501]">
                {stat.number}
              </p>
              <p className="text-[#622e17] font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
