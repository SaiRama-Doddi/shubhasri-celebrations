import { Link } from "react-router-dom";
import {
  Heart,
  Flower2,
  Cake,
  Sparkles,
  Home as HomeIcon,
  PartyPopper,
  Baby,
  Briefcase,
  Gift,
  ArrowRight,
} from "lucide-react";

const AllServices = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding",
      description:
        "Create magical wedding celebrations with exquisite decorations, catering, and flawless coordination",
      color: "bg-[#622e17]",
      pricing: "From ₹2,00,000",
      image:
        "https://images.unsplash.com/photo-1529634806980-3c7c4980211d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: Flower2,
      title: "Haldi Ceremony",
      description:
        "Traditional haldi ceremonies with vibrant yellow decor, music, and authentic arrangements",
      color: "bg-[#ffc900]",
      pricing: "From ₹50,000",
      image:
        "https://images.unsplash.com/photo-1603712465191-30a0b21c7618?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: Cake,
      title: "Birthday Party",
      description:
        "Memorable birthday celebrations with themed decorations, entertainment, and delicious cakes",
      color: "bg-[#bc842f]",
      pricing: "From ₹30,000",
      image:
        "https://images.unsplash.com/photo-1593113598332-e94b77572f20?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: Sparkles,
      title: "Engagement",
      description:
        "Romantic engagement setups with elegant decor, lighting, and personalized touches",
      color: "bg-[#622e17]",
      pricing: "From ₹75,000",
      image:
        "https://images.unsplash.com/photo-1545156521-77bd85671d30?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: Gift,
      title: "Half Saree Ceremony",
      description:
        "Traditional half saree ceremonies with beautiful stage setups and cultural elements",
      color: "bg-[#b59372]",
      pricing: "From ₹1,00,000",
      image:
        "https://images.unsplash.com/photo-1597983073493-4e8aaf14701f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: Gift,
      title: "Dhoti Ceremony",
      description:
        "Sacred dhoti ceremonies with traditional decorations and ritual arrangements",
      color: "bg-[#ffc900]",
      pricing: "From ₹80,000",
      image:
        "https://images.unsplash.com/photo-1604937455095-e605e629fdfd?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: HomeIcon,
      title: "House Warming",
      description:
        "Auspicious housewarming ceremonies with traditional rituals and festive decorations",
      color: "bg-[#bc842f]",
      pricing: "From ₹40,000",
      image:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: PartyPopper,
      title: "Anniversary",
      description:
        "Celebrate love milestones with romantic setups, floral arrangements, and memorable experiences",
      color: "bg-[#622e17]",
      pricing: "From ₹35,000",
      image:
        "https://images.unsplash.com/photo-1600180758890-6be5b9a20436?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: Baby,
      title: "Baby Shower",
      description:
        "Adorable baby shower celebrations with cute themes, games, and delightful arrangements",
      color: "bg-[#b59372]",
      pricing: "From ₹25,000",
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: Briefcase,
      title: "Office Inauguration",
      description:
        "Professional office inauguration events with elegant setups and corporate aesthetics",
      color: "bg-[#ffc900]",
      pricing: "From ₹60,000",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: Baby,
      title: "Naming Ceremony",
      description:
        "Beautiful naming ceremonies with traditional elements and joyful celebrations",
      color: "bg-[#bc842f]",
      pricing: "From ₹30,000",
      image:
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description:
        "Professional corporate events with seamless execution and impressive presentations",
      color: "bg-[#622e17]",
      pricing: "From ₹1,50,000",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f9e5b3] to-white py-12">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-[#3c0501] mb-6">All Our Services</h1>
          <p className="text-xl text-[#622e17] max-w-3xl mx-auto">
            Explore our complete range of celebration services designed to make every moment special
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const serviceUrl = `/service/${service.title
              .toLowerCase()
              .replace(/\s+/g, "-")}`;

            return (
              <Link key={index} to={serviceUrl} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-[#f9e5b3]">
                  
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className="absolute bottom-3 left-3">
                      <div
                        className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
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

        {/* Bottom CTA */}
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
