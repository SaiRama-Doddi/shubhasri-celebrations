

const Gallery = () => {
  // ------- JUST IMAGES (ADD ALL YOUR PREWEDDING / PHOTOSHOOT / HALDI / WEDDING IMAGES HERE) -------
  const images = [
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

  return (
    <section id="gallery" className="py-20 bg-[#fff8f3]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-pacifico text-3xl sm:text-3xl md:text-5xl font-bold text-[#3c0501] mb-12 mt-6">
          Our <span className="text-[#d4af37]">Portfolio</span>
        </h2>

        {/* ---------- GALLERY GRID ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={src}
                alt="Gallery"
                className="w-full h-72 object-cover group-hover:scale-110 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
