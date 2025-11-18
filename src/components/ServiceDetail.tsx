import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Star, Users, Clock, DollarSign } from 'lucide-react';
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
    <section className="min-h-screen bg-gradient-to-b from-[#f9e5b3] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-[#622e17] hover:text-[#3c0501] mb-8 font-semibold transition cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Services
        </button>

        <div className="mb-12">
          <h1 className="text-5xl font-bold text-[#3c0501] mb-4">{service.title}</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
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
            <span className="text-[#622e17] font-semibold">
              {service.rating} ({service.reviews} reviews)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <h2 className="text-3xl font-bold text-[#3c0501] mb-4">Overview</h2>
              <p className="text-lg text-[#622e17] leading-relaxed mb-6">
                {service.fullDescription}
              </p>

              <h3 className="text-2xl font-bold text-[#3c0501] mb-4">What We Offer</h3>
              <ul className="space-y-3">
                {service.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start text-[#622e17]">
                    <span className="inline-block w-2 h-2 bg-[#ffc900] rounded-full mr-3 mt-2 shrink-0"></span>
                    <span className="text-lg">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#622e17] to-[#3c0501] rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-[#ffc900]">Service Details</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <DollarSign className="w-6 h-6 text-[#ffc900] mr-4 shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-[#b59372]">Starting Price</p>
                    <p className="text-xl font-semibold">{service.pricing}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-[#ffc900] mr-4 shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-[#b59372]">Duration</p>
                    <p className="text-lg font-semibold">{service.duration}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="w-6 h-6 text-[#ffc900] mr-4 shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-[#b59372]">Our Team Size</p>
                    <p className="text-lg font-semibold">{service.teamSize}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#bc842f] rounded-2xl p-8 text-white shadow-xl">
              <h4 className="text-lg font-bold mb-4">Why Choose Us?</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mr-3 mt-1.5 shrink-0"></span>
                  <span>Expert team with years of experience</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mr-3 mt-1.5 shrink-0"></span>
                  <span>100% client satisfaction guaranteed</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mr-3 mt-1.5 shrink-0"></span>
                  <span>Customized solutions for every occasion</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mr-3 mt-1.5 shrink-0"></span>
                  <span>Attention to every detail</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-12">
          {service.images.map((image, idx) => (
            <div
              key={idx}
              className="relative w-full h-56 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={image}
                alt={`${service.title} ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
