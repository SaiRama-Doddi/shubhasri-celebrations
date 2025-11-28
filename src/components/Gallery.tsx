import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images: string[] = [
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763542050/IMG_20251119_135513_134_jq8jhu.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763542050/IMG_20251119_135522_131_trd5oo.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763542049/IMG_20251119_135506_779_cexfbm.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763542049/IMG_20251119_135436_307_la0sbe.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763542049/IMG_20251119_135510_071_z7synr.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763542676/IMG_20251119_135529_630_ishcdh.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763542675/IMG_20251119_135526_759_ijrjdj.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763542060/IMG_20251119_135532_412_uyndci.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763542060/IMG_20251119_135542_615_zu1y6u.jpg",
];

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const showPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
      );
    }
  };

  const showNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
      );
    }
  };

  return (
    <div className="bg-[#fff8f2] py-20 px-6">
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="font-pacifico text-5xl text-[#3c0501]">
          Our <span className="text-[#d4af37]">Premium Gallery</span>
        </h1>
        <p className="text-gray-700 mt-3 text-lg">
          A curated visual experience from ShubaShree Celebrations.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5 max-w-7xl mx-auto">
        {images.map((src: string, i: number) => (
          <div
            key={i}
            className="break-inside-avoid relative group cursor-pointer rounded-xl overflow-hidden shadow-lg"
            onClick={() => setSelectedIndex(i)}
          >
            <img

              src={src}
              alt="gallery"
              className="w-full rounded-xl transition-all duration-500 group-hover:scale-105"
            />

            {/* Golden hover overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#3c0501]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            <div className="absolute bottom-2 left-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="px-3 py-1 bg-[#d4af37] text-white text-sm rounded-full shadow-lg">
                View Photo
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Preview */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[200] backdrop-blur-sm">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white bg-white/20 p-3 rounded-full hover:bg-white/30"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={28} />
          </button>

          {/* Left Arrow */}
          <button
            className="absolute left-6 text-white bg-white/20 p-3 rounded-full hover:bg-white/30"
            onClick={showPrev}
          >
            <ChevronLeft size={32} />
          </button>

          {/* Large Image */}
          <img
            src={images[selectedIndex]}
            alt="Preview"
            className="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl animate-fadeZoom"
            style={{
              objectFit: "contain",
            }}
          />

          {/* Right Arrow */}
          <button
            className="absolute right-6 text-white bg-white/20 p-3 rounded-full hover:bg-white/30"
            onClick={showNext}
          >
            <ChevronRight size={32} />
          </button>

          {/* Animation Style */}
          <style>
            {`
            .animate-fadeZoom {
              animation: fadeZoom .4s ease-out;
            }
            @keyframes fadeZoom {
              from { opacity: 0; transform: scale(.85); }
              to { opacity: 1; transform: scale(1); }
            }
          `}
          </style>
        </div>
      )}
    </div>
  );
};

export default Gallery;
