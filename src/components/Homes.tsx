import { Sparkles, Calendar, Heart, Crown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Homes() {
  return (
    <div
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-white via-[#fff5e1] to-white"
    >
      {/* ===== TOP ANIMATED WAVES ===== */}
      <div className="absolute top-0 left-0 right-0 z-0">
        <svg
          className="w-full h-14 opacity-60 animate-wave"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 Q30,5 60,20 T120,20 T180,20 T240,20 T300,20 T360,20 T420,20 T480,20 T540,20 T600,20 T660,20 T720,20 T780,20 T840,20 T900,20 T960,20 T1020,20 T1080,20 T1140,20 T1200,20 L1200,0 L0,0 Z"
            fill="#d4af37"
          />
        </svg>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 pt-36 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">

          {/* LOGO — Bigger + Floating */}
          <div className="flex justify-center mb-8">
            <img
              src="/shubha.png"
              alt="Event Logo"
              className="w-40 sm:w-48 md:w-64 animate-logo-float drop-shadow-xl"
            />
          </div>

          {/* HEADING WITH GOLD SHIMMER EFFECT */}
          <h1 className="font-dancing text-4xl sm:text-5xl md:text-7xl font-bold text-[#3c0501] leading-tight tracking-wide premium-gold-text animate-fade-up">
            Make Your Moments Truly Special
          </h1>

          {/* SUBTITLE */}
          <div className="mt-3 text-xl sm:text-2xl text-[#3c0501]/80 font-light animate-fade-up delay-150">
            Your Celebration, Our Passion
          </div>

          {/* DESCRIPTION */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#3c0501]/70 max-w-3xl mx-auto mt-6 leading-relaxed animate-fade-up delay-300">
            Creating unforgettable moments with traditional values and modern elegance.
            Every celebration is a masterpiece, every detail tells a story.
          </p>
        </div>
      </div>

      {/* ===== BOTTOM ANIMATED WAVES ===== */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-0">
        <svg
          className="w-full h-14 opacity-60 animate-wave-reverse"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 Q30,35 60,20 T120,20 T180,20 T240,20 T300,20 T360,20 T420,20 T480,20 T540,20 T600,20 T660,20 T720,20 T780,20 T840,20 T900,20 T960,20 T1020,20 T1080,20 T1140,20 T1200,20 L1200,40 L0,40 Z"
            fill="#d4af37"
          />
        </svg>
      </div>

      {/* ANIMATIONS / KEYFRAMES */}
      <style>
        {`
          @keyframes waveMove {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50px); }
          }

          .animate-wave {
            animation: waveMove 6s ease-in-out infinite alternate;
          }

          .animate-wave-reverse {
            animation: waveMove 6s ease-in-out infinite alternate-reverse;
          }

          @keyframes logoFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .animate-logo-float {
            animation: logoFloat 3.5s ease-in-out infinite;
          }

          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-up {
            animation: fadeUp 1s ease-out forwards;
          }

          .delay-150 { animation-delay: 0.15s; }
          .delay-300 { animation-delay: 0.3s; }

          /* GOLD SHIMMER TEXT */
          .premium-gold-text {
            background: linear-gradient(90deg, #3c0400, #d4af37, #3c0400);
            background-size: 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 4s linear infinite;
          }

          @keyframes shimmer {
            0% { background-position: 0% }
            100% { background-position: 200% }
          }
        `}
      </style>
    </div>
  );
}
