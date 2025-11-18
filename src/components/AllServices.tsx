import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { mainServices, specializedServices } from '../data/servicesData';

const AllServices = () => {
  const allServices = [...mainServices, ...specializedServices];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f9e5b3] to-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-[#3c0501] mb-6">All Our Services</h1>
          <p className="text-xl text-[#622e17] max-w-3xl mx-auto">
            Explore our complete range of celebration services designed to make every moment special
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {allServices.map((service, index) => {
            const IconComponent = service.icon;
            const serviceUrl = `/service/${service.title.toLowerCase().replace(/\s+/g, '-')}`;

            return (
              <Link key={index} to={serviceUrl} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-[#f9e5b3]">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className="absolute bottom-3 left-3">
                      <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-7 flex flex-col h-full">
                    <h3 className="text-2xl font-bold text-[#3c0501] mb-3 group-hover:text-[#622e17] transition">
                      {service.title}
                    </h3>

                    <p className="text-[#622e17] leading-relaxed mb-5 flex-grow">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-[#f9e5b3]">
                      <span className="font-semibold text-[#ffc900]">
                        {service.pricing}
                      </span>

                      <ArrowRight className="w-6 h-6 text-[#622e17] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-[#622e17] to-[#3c0501] rounded-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#ffc900]">Can't Find What You're Looking For?</h2>

          <p className="text-lg text-[#f9e5b3] mb-8 max-w-2xl mx-auto">
            We specialize in custom celebrations! If you have a unique event in mind,
            our expert team can create a customized package just for you.
          </p>

          <Link
            to="/#contact"
            className="inline-block bg-[#ffc900] text-[#3c0501] px-12 py-4 rounded-full text-lg font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Contact Us for Custom Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AllServices;
