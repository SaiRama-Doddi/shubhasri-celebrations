import { Link } from 'react-router-dom';
import { mainServices } from '../data/servicesData';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#f9e5b3] to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#3c0501] mb-4">Our Services</h2>
          <p className="text-xl text-[#622e17] max-w-2xl mx-auto">
            We specialize in creating unforgettable experiences for all your special occasions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon;
            const serviceUrl = `/service/${service.title.toLowerCase().replace(/\s+/g, '-')}`;

            return (
              <Link key={index} to={serviceUrl} className="block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[#f9e5b3] hover:-translate-y-2 transition-all duration-300">
                  <div className="relative h-52 overflow-hidden group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <div className={`${service.color} w-14 h-14 rounded-full flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#3c0501] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#622e17] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 text-center space-y-4">
          <p className="text-lg text-[#622e17] mb-6">
            Can't find what you're looking for? We can customize any celebration for you!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              to="/services"
              className="inline-block bg-[#622e17] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#3c0501] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View All Services
            </Link>

            <a
              href="#contact"
              className="inline-block bg-[#3c0501] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#622e17] transition-all duration-300 hover:scale-105 shadow-lg"
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
