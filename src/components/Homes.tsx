import { Sparkles, Calendar, Heart, Crown } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Homes() {
  const features = [
    {
      icon: Heart,
      title: 'Weddings',
      description: 'Traditional and modern wedding ceremonies crafted with love and attention to detail',
    },
    {
      icon: Sparkles,
      title: 'Cultural Events',
      description: 'Authentic celebrations honoring traditions with elegance and grace',
    },
    {
      icon: Calendar,
      title: 'Special Occasions',
      description: 'Birthdays, anniversaries, and milestones made unforgettable',
    },
    {
      icon: Crown,
      title: 'Premium Services',
      description: 'Luxury event planning with personalized touches and exclusive experiences',
    },
  ];

  return (
    <div
      id="home"
      className="min-h-screen bg-[#4a1515] relative overflow-x-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/shubha.png')] bg-cover bg-center opacity-10"></div>

      {/* ===== TOP SVG BEHIND TEXT ===== */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden z-0">
        <svg
          className="w-full h-10 opacity-50"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 Q30,5 60,20 T120,20 T180,20 T240,20 T300,20 T360,20 T420,20 T480,20 T540,20 T600,20 T660,20 T720,20 T780,20 T840,20 T900,20 T960,20 T1020,20 T1080,20 T1140,20 T1200,20 L1200,0 L0,0 Z"
            fill="#d4af37"
            opacity="0.25"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* HERO TEXT */}
          <div className="text-center mb-16 animate-fade-in">

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#d4af37] mb-4 tracking-wide">
              Make Your Moments Truly Special
            </h1>

            <div className="mt-2 text-lg sm:text-xl text-[#d4af37]/90 font-light">
              Your Celebration, Our Passion
            </div>

            <p className="text-base sm:text-lg md:text-xl text-[#d4af37]/70 max-w-3xl mx-auto mb-10 leading-relaxed mt-4">
              Creating unforgettable moments with traditional values and modern elegance.
              Every celebration is a masterpiece, every detail tells a story.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <button className="px-8 py-4 bg-[#d4af37] text-[#4a1515] font-bold rounded-lg hover:bg-[#f0c14b] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#d4af37]/50">
                  Plan Your Event
                </button>
              </Link>

              <button className="px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] font-bold rounded-lg hover:bg-[#d4af37]/10 transform hover:scale-105 transition-all duration-300">
                View Gallery
              </button>
            </div>
          </div>

          {/* FEATURE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-[#5a2020]/50 backdrop-blur-sm border-2 border-[#d4af37]/30 rounded-xl p-6 
                  hover:border-[#d4af37] hover:bg-[#5a2020]/70 transition-all duration-300 
                  transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#d4af37]/20 group"
                >
                  <div className="bg-[#d4af37]/20 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#d4af37]/30 transition-all duration-300 group-hover:scale-110">
                    <Icon className="text-[#d4af37]" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#d4af37] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#d4af37]/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===== BOTTOM SVG ===== */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-0">
        <svg className="w-full h-10" viewBox="0 0 1200 40" preserveAspectRatio="none">
          <path
            d="M0,20 Q30,35 60,20 T120,20 T180,20 T240,20 T300,20 T360,20 T420,20 T480,20 T540,20 T600,20 T660,20 T720,20 T780,20 T840,20 T900,20 T960,20 T1020,20 T1080,20 T1140,20 T1200,20 L1200,40 L0,40 Z"
            fill="#d4af37"
            opacity="0.25"
          />
        </svg>
      </div>
    </div>
  );
}
