import { useState,useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "https://res.cloudinary.com/djhsdo5to/image/upload/v1763542050/IMG_20251119_135513_134_jq8jhu.jpg",
    title: "Wedding Ceremony",
    desc: "Classic South Indian Wedding Decor",
      album: [
      "https://res.cloudinary.com/djhsdo5to/image/upload/v1764318537/gallery-wedding1_udvjb5.jpg",
      "https://res.cloudinary.com/djhsdo5to/image/upload/v1764318538/gallery-wedding2_f7ifbz.jpg",
      "https://res.cloudinary.com/djhsdo5to/image/upload/v1764318538/gallery-wedding3_vdekwq.jpg",
    ],
  },
  {
    src: "https://res.cloudinary.com/djhsdo5to/image/upload/v1763542050/IMG_20251119_135522_131_trd5oo.jpg",
    title: "Haldi Celebration",
    desc: "Bright Yellow Floral Haldi Setup",
      album: [
      "https://res.cloudinaryf.com/djhsdo5to/image/upload/v1763542050/IMG_20251119_135513_134_jq8jhu.jpg",
      "https://res.cloudinarfy.com/djhsdo5to/image/upload/v1763542050/IMG_20251119_135522_131_trd5oo.jpg",
      "https://res.cloudinaryf.com/djhsdo5to/image/upload/v1763542049/IMG_20251119_135506_779_cexfbm.jpg",
    ],
  },
  {
    src: "https://res.cloudinary.com/djhsdo5to/image/upload/v1763542049/IMG_20251119_135506_779_cexfbm.jpg",
    title: "Reception Stage",
    desc: "Grand Royal Reception Event",
      album: [
      "https://res.cloudinary.fcom/djhsdo5to/image/upload/v1763542050/IMG_20251119_135513_134_jq8jhu.jpg",
      "https://res.cloudinaryf.com/djhsdo5to/image/upload/v1763542050/IMG_20251119_135522_131_trd5oo.jpg",
      "https://res.cloudinaryf.com/djhsdo5to/image/upload/v1763542049/IMG_20251119_135506_779_cexfbm.jpg",
    ],
  },
  {
    src: "https://res.cloudinary.com/djhsdo5to/image/upload/v1763542049/IMG_20251119_135436_307_la0sbe.jpg",
    title: "Couple Photoshoot",
    desc: "Romantic Outdoor Photoshoot",
      album: [
      "https://res.cloudinaryf.com/djhsdo5to/image/upload/v1763542050/IMG_20251119_135513_134_jq8jhu.jpg",
      "https://res.cloudinaryf.com/djhsdo5to/image/upload/v1763542050/IMG_20251119_135522_131_trd5oo.jpg",
      "https://res.cloudinaryf.com/djhsdo5to/image/upload/v1763542049/IMG_20251119_135506_779_cexfbm.jpg",
    ],
  },
  {
    src: "https://res.cloudinary.com/djhsdo5to/image/upload/v1763542049/IMG_20251119_135510_071_z7synr.jpg",
    title: "Mehendi Function",
    desc: "Green & Gold Themed Mehendi Event",
      album: [
      "https://res.cloudinaryf.com/djhsdo5to/image/upload/v1763542050/IMG_20251119_135513_134_jq8jhu.jpg",
      "https://res.cloudinaryf.com/djhsdo5to/image/upload/v1763542050/IMG_20251119_135522_131_trd5oo.jpg",
      "https://res.cloudinaryf.com/djhsdo5to/image/upload/v1763542049/IMG_20251119_135506_779_cexfbm.jpg",
    ],
  },
  {
    src: "https://res.cloudinary.com/djhsdo5to/image/upload/v1763542676/IMG_20251119_135529_630_ishcdh.jpg",
    title: "Engagement Decor",
    desc: "Elegant Candle & Rose Theme",
      album: [
      "https://res.cloudinary.comf/djhsdo5to/image/upload/v1763542050/IMG_20251119_135513_134_jq8jhu.jpg",
      "https://res.cloudinary.comf/djhsdo5to/image/upload/v1763542050/IMG_20251119_135522_131_trd5oo.jpg",
      "https://res.cloudinary.comf/djhsdo5to/image/upload/v1763542049/IMG_20251119_135506_779_cexfbm.jpg",
    ],
  },
  {
    src: "https://res.cloudinary.com/djhsdo5to/image/upload/v1763542675/IMG_20251119_135526_759_ijrjdj.jpg",
    title: "Outdoor Event",
    desc: "Minimalistic Garden Arrangement",
      album: [
      "https://res.cloudinary.comf/djhsdo5to/image/upload/v1763542050/IMG_20251119_135513_134_jq8jhu.jpg",
      "https://res.cloudinary.comf/djhsdo5to/image/upload/v1763542050/IMG_20251119_135522_131_trd5oo.jpg",
      "https://res.cloudinary.comf/djhsdo5to/image/upload/v1763542049/IMG_20251119_135506_779_cexfbm.jpg",
    ],
  },
  {
    src: "https://res.cloudinary.com/djhsdo5to/image/upload/v1763542060/IMG_20251119_135532_412_uyndci.jpg",
    title: "Candid Shot",
    desc: "Natural Moment Captured",
      album: [
      "https://res.cloudinary.comff/djhsdo5to/image/upload/v1763542050/IMG_20251119_135513_134_jq8jhu.jpg",
      "https://res.cloudinary.comf/djhsdo5to/image/upload/v1763542050/IMG_20251119_135522_131_trd5oo.jpg",
      "https://res.cloudinary.comf/djhsdo5to/image/upload/v1763542049/IMG_20251119_135506_779_cexfbm.jpg",
    ],
  },
  {
    src: "https://res.cloudinary.com/djhsdo5to/image/upload/v1763542060/IMG_20251119_135542_615_zu1y6u.jpg",
    title: "Bridal Portrait",
    desc: "Stunning Bridal Moment",
      album: [
      "https://res.cloudinary.comf/djhsdo5to/image/upload/v1763542050/IMG_20251119_135513_134_jq8jhu.jpg",
      "https://res.cloudinary.comf/djhsdo5to/image/upload/v1763542050/IMG_20251119_135522_131_trd5oo.jpg",
      "https://res.cloudinary.comf/djhsdo5to/image/upload/v1763542049/IMG_20251119_135506_779_cexfbm.jpg",
    ],
  },
];


export default function Gallery() {
  const [openCard, setOpenCard] = useState<number | null>(null);
  const [albumIndex, setAlbumIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(0);

  // Auto-switch 3 images on hover
  useEffect(() => {
    const interval = setInterval(() => {
      setHoverIndex((i) => (i + 1) % 3);
    }, 1200); // change every 1.2 seconds
    return () => clearInterval(interval);
  }, []);

  const prev = () =>
    setAlbumIndex((i) =>
      i === 0 ? images[openCard!].album.length - 1 : i - 1
    );

  const next = () =>
    setAlbumIndex((i) =>
      i === images[openCard!].album.length - 1 ? 0 : i + 1
    );

  return (
    <section className="bg-[#fff8f2] py-20 px-6">

      {/* Heading */}
      <div className="text-center mb-16 mt-2">
        <h2 className="font-pacifico text-5xl text-[#3c0501] italic">
          Our <span className="text-[#d4af37]">Gallery</span>
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Beautiful memories crafted with love & elegance.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {images.map((card, i) => (
          <div
            key={i}
            className="group cursor-pointer"
            onClick={() => {
              setOpenCard(i);
              setAlbumIndex(0);
            }}
          >
            <div className="h-64 w-full rounded-2xl overflow-hidden shadow-xl relative">

              {/* Hover slideshow */}
              <img
                src={card.album[hoverIndex]}
                alt={card.title}
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
              />

              {/* dark overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all"></div>

              {/* view button */}
              <span className="absolute bottom-3 left-3 px-4 py-1 bg-[#d4af37] text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition">
                View Photos
              </span>
            </div>

            {/* content */}
            <h3 className="text-xl font-semibold mt-4 text-[#3c0501]">
              {card.title}
            </h3>
            <p className="text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {openCard !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[300]">

          {/* Close */}
          <button
            onClick={() => setOpenCard(null)}
            className="absolute top-6 right-6 bg-white/20 p-3 rounded-full text-white hover:bg-white/30"
          >
            <X size={28} />
          </button>

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-6 bg-white/20 p-3 rounded-full text-white hover:bg-white/30"
          >
            <ChevronLeft size={34} />
          </button>

          {/* Image */}
          <img
            src={images[openCard].album[albumIndex]}
            className="max-w-[90vw] max-h-[85vh] rounded-2xl shadow-2xl animate-[fadeZoom_.35s_ease]"
          />

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-6 bg-white/20 p-3 rounded-full text-white hover:bg-white/30"
          >
            <ChevronRight size={34} />
          </button>

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