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
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding",
      description:
        "Create magical wedding celebrations with exquisite decorations, catering, and flawless coordination",
      color: "bg-[#622e17]",
      image:
        "https://arihantdecoration.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-5.25.50-PM.jpeg",
    },
    {
      icon: Flower2,
      title: "Haldi Ceremony",
      description:
        "Traditional haldi ceremonies with vibrant yellow decor, music, and authentic arrangements",
      color: "bg-[#ffc900]",
      image:
        "https://static.vecteezy.com/system/resources/previews/010/978/930/non_2x/traditional-wedding-ceremony-beautiful-culture-of-india-or-decorated-for-haldi-ceremony-photo.jpg",
    },
    {
      icon: Cake,
      title: "Birthday Party",
      description:
        "Memorable birthday celebrations with themed decorations, entertainment, and delicious cakes",
      color: "bg-[#bc842f]",
      image:
        "https://res.cloudinary.com/djhsdo5to/image/upload/v1763362738/birthday7_zsx26v.webp",
    },
    {
      icon: Sparkles,
      title: "Engagement",
      description:
        "Romantic engagement setups with elegant decor, lighting, and personalized touches",
      color: "bg-[#622e17]",
      image:
        "https://res.cloudinary.com/djhsdo5to/image/upload/v1763363173/engage1_h6qstt.webp",
    },
    {
      icon: Gift,
      title: "Half Saree Ceremony",
      description:
        "Traditional half saree ceremonies with beautiful stage setups and cultural elements",
      color: "bg-[#b59372]",
      image:
        "https://res.cloudinary.com/djhsdo5to/image/upload/v1763367170/Haldi_Backdrop_Stage_Decorations_hprbcq.jpg",
    },
    {
      icon: Gift,
      title: "Dhoti Ceremony",
      description:
        "Sacred dhoti ceremonies with traditional decorations and ritual arrangements",
      color: "bg-[#ffc900]",
      image:
        "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379766/dhoti5_kl4toe.jpg",
    },
    {
      icon: HomeIcon,
      title: "House Warming",
      description:
        "Auspicious housewarming ceremonies with traditional rituals and festive decorations",
      color: "bg-[#bc842f]",
      image:
        "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379775/house9_oaeukz.png",
    },
    {
      icon: PartyPopper,
      title: "Anniversary",
      description:
        "Celebrate love milestones with romantic setups, floral arrangements, and memorable experiences",
      color: "bg-[#622e17]",
      image:
        "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379764/anni3_j1clou.jpg",
    },
    {
      icon: Baby,
      title: "Baby Shower",
      description:
        "Adorable baby shower celebrations with cute themes, games, and delightful arrangements",
      color: "bg-[#b59372]",
      image:
        "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379768/baby9_rxkzix.jpg",
    },
    {
      icon: Briefcase,
      title: "Office Inauguration",
      description:
        "Professional office inauguration events with elegant setups and corporate aesthetics",
      color: "bg-[#ffc900]",
      image:
        "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379802/office9_halm2b.webp",
    },
    {
      icon: Baby,
      title: "Naming Ceremony",
      description:
        "Beautiful naming ceremonies with traditional elements and joyful celebrations",
      color: "bg-[#bc842f]",
      image:
        "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379777/naming7_k45mq4.jpg",
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description:
        "Professional corporate events with seamless execution and impressive presentations",
      color: "bg-[#622e17]",
      image:
        "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379770/c4_oshyiw.webp",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-linear-to-b from-[#f9e5b3] to-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#3c0501] mb-4">Our Services</h2>
          <p className="text-xl text-[#622e17] max-w-2xl mx-auto">
            We specialize in creating unforgettable experiences for all your
            special occasions
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const serviceUrl = `/service/${service.title
              .toLowerCase()
              .replace(/\s+/g, "-")}`;

            return (
              <Link key={index} to={serviceUrl} className="block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[#f9e5b3] hover:-translate-y-2 transition-all duration-300">
                  
                  {/* Image Section */}
                  <div className="relative h-52 overflow-hidden group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>

                    <div className="absolute bottom-3 left-3">
                      <div
                        className={`${service.color} w-14 h-14 rounded-full flex items-center justify-center shadow-lg`}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
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

        {/* Buttons */}
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
