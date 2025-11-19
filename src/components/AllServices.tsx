import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Grid, List, Search } from "lucide-react";
import { mainServices, specializedServices } from "../data/servicesData";

const AllServices = () => {
  const allServices = [...mainServices, ...specializedServices];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [view, setView] = useState("grid");

  const filtered = allServices.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      category === "all" ||
      (category === "main" && mainServices.includes(service)) ||
      (category === "special" && specializedServices.includes(service));
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="min-h-screen bg-linear-to-b from-[#f9e5b3] to-white py-14">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mt-14 mb-12">
          <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold text-[#3c0501] mb-5 tracking-wide">
            Our Premium Services
          </h1>
          <p className="text-xl text-[#622e17] max-w-3xl mx-auto">
            Discover our complete range of luxurious event & celebration services
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          
          {/* Search */}
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-3 w-5 h-5 text-[#6f3e21]" />
            <input
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-5 py-3 border border-[#d2bb9f] rounded-full 
              bg-white shadow-sm focus:ring-2 focus:ring-[#6f3e21] outline-none"
            />
          </div>

          {/* Category Buttons */}
          <div className="flex gap-4 flex-wrap justify-center">
            {[
              { id: "all", label: "All" },
              { id: "main", label: "Main Services" },
              { id: "special", label: "Special Services" },
            ].map((cat) => (
              <button
                key={cat.id}
                className={`px-6 py-2 rounded-full font-semibold border transition ${
                  category === cat.id
                    ? "bg-[#622e17] text-white"
                    : "border-[#622e17] text-[#622e17] hover:bg-[#f4e8d9]"
                }`}
                onClick={() => setCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex gap-2 justify-center">
            <button
              className={`p-3 rounded-xl border ${
                view === "grid" ? "bg-[#622e17] text-white" : "text-[#622e17] border-[#622e17]"
              }`}
              onClick={() => setView("grid")}
            >
              <Grid className="w-5 h-5" />
            </button>

            <button
              className={`p-3 rounded-xl border ${
                view === "list" ? "bg-[#622e17] text-white" : "text-[#622e17] border-[#622e17]"
              }`}
              onClick={() => setView("list")}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div
          className={
            view === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
              : "flex flex-col gap-10 mb-16"
          }
        >
          {filtered.map((service, index) => {
            const Icon = service.icon;
            const link = `/service/${service.title.toLowerCase().replace(/\s+/g, "-")}`;

            return (
             <Link key={index} to={link} className="group block">
  <div
    className="
      rounded-3xl overflow-hidden 
      bg-white shadow-xl 
      border border-[#efd9b8]
      hover:shadow-3xl hover:-translate-y-2 
      transition-all duration-500 ease-out
    "
  >
    {/* Top Image Section */}
    <div className="relative h-64 overflow-hidden">
      <img
        src={service.image}
        className="
          w-full h-full object-cover 
          group-hover:scale-110 
          transition-all duration-700
        "
        alt={service.title}
      />
      
      {/* Dark soft overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Icon */}
      <div className="absolute bottom-4 left-4">
        <div
          className={`
            ${service.color}
            w-16 h-16 rounded-2xl 
            flex items-center justify-center 
            shadow-xl shadow-black/30 border border-white/30
            backdrop-blur-sm
          `}
        >
          <Icon className="w-9 h-9 text-white drop-shadow-lg" />
        </div>
      </div>
    </div>

    {/* Elegant Wave Divider */}
    <div className="w-full overflow-hidden -mt-1">
      <svg
        viewBox="0 0 500 50"
        preserveAspectRatio="none"
        className="w-full h-10"
      >
        <path d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z" fill="#ffffff"></path>
      </svg>
    </div>

    {/* Content Section */}
    <div className="px-7 pb-8 pt-2 flex flex-col gap-4">
      <h3 className="text-3xl font-extrabold text-[#3c0501] tracking-wide group-hover:text-[#7d4a2d] transition">
        {service.title}
      </h3>

      <p className="text-[#6b4a2f] text-sm leading-relaxed opacity-90">
        {service.description}
      </p>

      {/* Underline Ornament */}
      <div className="w-20 h-1 bg-gradient-to-r from-[#caa56a] to-[#8b5a33] rounded-full"></div>

      {/* Bottom Pricing Section */}
      <div className="flex items-center justify-between mt-3">
        <span className="text-xl font-semibold text-[#c79832]">
          {service.pricing}
        </span>

        <ArrowRight
          className="
            w-8 h-8 text-[#7d4a2d] 
            group-hover:translate-x-2 
            transition-transform
          "
        />
      </div>
    </div>
  </div>
</Link>

            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="bg-gradient-to-r from-[#622e17] to-[#3c0501] p-12 rounded-3xl text-center text-white shadow-lg mt-16">
          <h2 className="text-4xl font-bold mb-4 text-[#ffc900]">Need Something Custom?</h2>
          <p className="max-w-2xl mx-auto text-[#f4d7ad] text-lg mb-10">
            Our expert team can design unique, fully personalized celebration packages just for you.
          </p>

          <Link
            to="/#contact"
            className="bg-[#ffc900] text-[#3c0501] px-12 py-4 rounded-full font-semibold text-lg shadow-xl hover:bg-white transition transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AllServices;
