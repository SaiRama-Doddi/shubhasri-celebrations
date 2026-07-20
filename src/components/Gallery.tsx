import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { mainServices, specializedServices } from "../data/servicesData";

const allServicesList = [...mainServices, ...specializedServices];

const galleryItems = allServicesList.map((service) => ({
  src: service.image,
  title: service.title,
  desc: service.description,
  album: Array.from(
    new Set([
      service.image,
      ...(service.images || []).filter(
        (img) => img && !img.includes("cloudinaryf") && !img.includes(".fcom")
      ),
    ])
  ),
}));

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<"all" | "main" | "specialized">("all");
  const [openCard, setOpenCard] = useState<number | null>(null);
  const [albumIndex, setAlbumIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(0);

  // Auto-switch images on hover
  useEffect(() => {
    const interval = setInterval(() => {
      setHoverIndex((i) => i + 1);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  const filteredItems =
    activeTab === "main"
      ? galleryItems.slice(0, mainServices.length)
      : activeTab === "specialized"
      ? galleryItems.slice(mainServices.length)
      : galleryItems;

  const prev = () => {
    if (openCard === null) return;
    const currentAlbum = filteredItems[openCard].album;
    setAlbumIndex((i) => (i === 0 ? currentAlbum.length - 1 : i - 1));
  };

  const next = () => {
    if (openCard === null) return;
    const currentAlbum = filteredItems[openCard].album;
    setAlbumIndex((i) => (i === currentAlbum.length - 1 ? 0 : i + 1));
  };

  return (
    <section className="bg-[#fff8f2] py-20 px-6 min-h-screen">
      {/* Heading */}
      <div className="text-center mb-10 mt-2">
        <h2 className="font-pacifico text-5xl text-[#3c0501] italic">
          Our <span className="text-[#d4af37]">Gallery</span>
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Beautiful memories crafted with love & elegance across all our services.
        </p>

        {/* Category Filter Tabs */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeTab === "all"
                ? "bg-[#622e17] text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-[#622e17]/10 border border-gray-200"
            }`}
          >
            All Celebrations ({galleryItems.length})
          </button>
          <button
            onClick={() => setActiveTab("main")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeTab === "main"
                ? "bg-[#622e17] text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-[#622e17]/10 border border-gray-200"
            }`}
          >
            Main Events ({mainServices.length})
          </button>
          <button
            onClick={() => setActiveTab("specialized")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeTab === "specialized"
                ? "bg-[#622e17] text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-[#622e17]/10 border border-gray-200"
            }`}
          >
            Specialized Services ({specializedServices.length})
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {filteredItems.map((card, i) => {
          const currentImgSrc =
            card.album[hoverIndex % card.album.length] || card.src;

          return (
            <div
              key={card.title + i}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => {
                setOpenCard(i);
                setAlbumIndex(0);
              }}
            >
              <div className="h-64 w-full overflow-hidden relative bg-gray-100">
                {/* Image */}
                <img
                  src={currentImgSrc}
                  alt={card.title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = card.src;
                  }}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                  <span className="px-5 py-2 bg-[#d4af37] text-white text-sm font-semibold rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
                    View Showcase ({card.album.length} Photos)
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#3c0501]">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                  {card.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {openCard !== null && filteredItems[openCard] && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[300]">
          {/* Close Button */}
          <button
            onClick={() => setOpenCard(null)}
            className="absolute top-6 right-6 bg-white/20 p-3 rounded-full text-white hover:bg-white/40 transition"
          >
            <X size={28} />
          </button>

          {/* Title Info Overlay */}
          <div className="absolute top-6 left-6 text-white max-w-md">
            <h3 className="text-2xl font-bold text-[#d4af37]">
              {filteredItems[openCard].title}
            </h3>
            <p className="text-sm text-gray-300 mt-1">
              Photo {albumIndex + 1} of {filteredItems[openCard].album.length}
            </p>
          </div>

          {/* Prev Button */}
          {filteredItems[openCard].album.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-6 bg-white/20 p-3 rounded-full text-white hover:bg-white/40 transition z-10"
            >
              <ChevronLeft size={34} />
            </button>
          )}

          {/* Image */}
          <img
            src={filteredItems[openCard].album[albumIndex]}
            alt={filteredItems[openCard].title}
            onError={(e) => {
              (e.target as HTMLImageElement).src = filteredItems[openCard].src;
            }}
            className="max-w-[90vw] max-h-[80vh] rounded-2xl shadow-2xl object-contain animate-[fadeZoom_.35s_ease]"
          />

          {/* Next Button */}
          {filteredItems[openCard].album.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-6 bg-white/20 p-3 rounded-full text-white hover:bg-white/40 transition z-10"
            >
              <ChevronRight size={34} />
            </button>
          )}

          <style>{`
          @keyframes fadeZoom {
            from { opacity: 0; transform: scale(.85); }
            to { opacity: 1; transform: scale(1); }
          }
        `}</style>
        </div>
      )}
    </section>
  );
}