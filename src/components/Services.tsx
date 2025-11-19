import { Link } from 'react-router-dom';
import { mainServices } from '../data/servicesData';

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 relative bg-gradient-to-b from-[#f5d9a9] via-[#f3e8d9] to-white"
    >
      {/* Soft Pattern Background */}
      <div className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#3c0501] drop-shadow-sm">
            Our Services
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-[#8a4b23] to-[#d8a24a] mx-auto rounded-full my-4"></div>

          <p className="text-xl text-[#5c2d17] max-w-3xl mx-auto leading-relaxed">
            From intimate celebrations to grand events — we design, plan & execute experiences 
            that become unforgettable memories.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon;
            const serviceUrl = `/service/${service.title.toLowerCase().replace(/\s+/g, '-')}`;

            return (
              <Link
                key={index}
                to={serviceUrl}
                className="group block hover:scale-[1.03] transition-all duration-300"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white/70 backdrop-blur-lg border border-[#f0d8b8] hover:shadow-2xl hover:border-[#e7b877] transition-all duration-300">
                  
                  {/* Image */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    {/* Icon Bubble */}
                    <div className="absolute bottom-4 left-4">
                      <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-md`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-3xl font-bold text-[#3c0501] mb-3 group-hover:text-[#8a4b23] transition-all">
                      {service.title}
                    </h3>

                    <p className="text-[#5c2d17] leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="mt-20 text-center">
          <p className="text-xl text-[#5c2d17] mb-8">
            Can't find what you need? We craft custom event solutions just for you.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              to="/services"
              className="bg-gradient-to-r from-[#8a4b23] to-[#d8a24a] text-white px-12 py-4 text-xl font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              View All Services
            </Link>

            <a
              href="#contact"
              className="bg-[#3c0501] px-12 py-4 text-xl font-semibold rounded-full text-white shadow-lg hover:bg-[#5a1a12] hover:scale-105 transition-all"
            >
              Request Custom Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
