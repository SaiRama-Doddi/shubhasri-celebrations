import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { mainServices, specializedServices } from "../data/servicesData";

export default function Services() {
  const all = [...mainServices, ...specializedServices];
  const [search, setSearch] = useState("");

  const filtered = all.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="h-screen bg-gradient-to-b from-[#f9edd5] to-white py-20">
      <div className="mx-auto px-8">

        {/* Title */}
        <h1 className="text-center text-5xl md:text-4xl font-bold text-[#3c0501] mb-10 mt-6">
          Our Premium Services
        </h1>

        {/* Search Box */}
        <div className="flex justify-center mb-14">
          <div className="relative w-72 sm:w-80 md:w-96">
            <Search className="absolute left-5 top-4 w-6 h-6 text-[#8b5a33]" />
            <input
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white shadow-xl rounded-full py-3.5 pl-14 pr-6 text-lg border border-[#e2c9a0] focus:ring-4 focus:ring-[#d1a46b]/40 transition-all duration-300 outline-none"
            />
          </div>
        </div>

        {/* Grid wrapper */}
        <div className="flex justify-center">
          <div
            className="
              grid grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-4 
              lg:grid-cols-4 
             
              gap-10 
              w-full
              px-4
              justify-center
            "
          >
            {filtered.map((service, index) => {
              const link = `/service/${service.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`;

              return (
                <Link key={index} to={link} className="group mx-auto">
                  <div
                    className="
                      relative
                      h-[480px]
                      w-[350px]
                      overflow-hidden
                      border border-[#e6d9c0]
                      shadow-md
                      hover:shadow-xl hover:-translate-y-2
                      transition-all duration-500
                    "
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 backdrop-blur-sm px-4 py-2">
                      <h3 className="text-xl font-semibold text-white truncate">
                        {service.title}
                      </h3>

                      <ArrowRight className="w-7 h-7 text-white group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
