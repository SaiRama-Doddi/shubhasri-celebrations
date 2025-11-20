import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Star } from 'lucide-react';
import { getServiceBySlug } from '../data/servicesData';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(serviceId || '');

  if (!service) {
    return (
      <div className="min-h-screen bg-[#f9e5b3] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#3c0501] mb-4">Service Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-[#3c0501] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#622e17] transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#fdf7e2] to-white">
      <div className="max-w-7xl mx-auto px-4 py-20">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-[#9a6b10] hover:text-[#3c0501] mt-10 mb-10 font-semibold transition cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 mr-3" />
          <span className="tracking-wide text-lg">Back to Services</span>
        </button>

        {/* ==============================
              TWO COLUMN LAYOUT
              LEFT = 30% | RIGHT = 70%
           ============================== */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* LEFT — CONTENT (30%) */}
          <div className="lg:w-[30%] w-full">

            <h1 className="text-3xl font-bold text-[#3c0501] tracking-wider mb-6">
              {service.title}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(service.rating)
                        ? 'fill-[#ffc900] text-[#ffc900]'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-[#622e17] font-semibold text-lg">
                {service.rating} ({service.reviews} reviews)
              </span>
            </div>

            <div className="bg-white/90 rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-serif font-bold text-[#3c0501] mb-4">
                Overview
              </h2>

              <p className="text-lg text-[#636058] leading-relaxed mb-6">
                {service.fullDescription}
              </p>

              <h3 className="text-2xl font-serif font-bold text-[#6b340b] mb-4">
                What We Offer
              </h3>

              <ul className="space-y-3 ml-2">
                {service.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start text-[#84652e]">
                    <span className="inline-block w-2 h-2 bg-[#ffc900] rounded-full mr-3 mt-2"></span>
                    <span className="text-lg">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — IMAGE GALLERY (70%) */}
          <div className="lg:w-[70%] w-full">
        

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {service.images.map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden border-4 border-dotted border-[#eeb855] shadow-xl transition-transform duration-300 hover:scale-105 bg-white"
                >
                  <img
                    src={img}
                    alt={`${service.title} ${idx + 1}`}
                    className="object-cover w-full h-56"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServiceDetail;
