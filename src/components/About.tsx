import { Award, Users, Target, Shield } from 'lucide-react';

const About = () => {
  return (
    <section
      id="about"
      className="py-24 relative bg-linear-to-b from-white to-[#f9e5b3] text-[#3c0501]"
    >
      {/* Soft Luxury Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="font-pacifico text-3xl sm:text-5xl md:text-5xl font-bold mb-4 text-[text-[#3c0501]] drop-shadow-xl">
            About Shubaश्री Celebrations
          </h2>

          <div className="w-42 h-1 bg-gradient-to-r bg-[#3c0501] mx-auto rounded-full mb-6"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Crafting magical moments with elegance, creativity, and perfection.
          </p>
        </div>

        {/* Story + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-24">
          {/* Story */}
          <div>
            <h3 className="text-4xl font-bold mb-8 text-[#3c0501]">
              Our Story
            </h3>

            <p className="text-lg text-[#3c0501] leading-relaxed mb-4">
              With 10+ years of experience, Shubaश्री Celebrations has grown into a
              trusted event partner known for luxury designs, flawless execution,
              and unforgettable experiences.
            </p>

            <p className="text-lg text-[#3c0501] leading-relaxed mb-4">
              Our passionate team blends creativity and precision, transforming
              your dreams into breathtaking realities—whether it’s an intimate event
              or a grand celebration.
            </p>

            <p className="text-lg text-[#3c0501] leading-relaxed">
              We believe every celebration is unique, and our goal is to craft
              experiences that exceed expectations.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Award, title: 'Awards', subtitle: '10+ Industry Honors' },
              { icon: Users, title: 'Team', subtitle: '50+ Event Experts' },
              { icon: Target, title: 'Events', subtitle: '1200+ Events Delivered' },
              { icon: Shield, title: 'Trust', subtitle: '1000+ Happy Clients' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-[#3c0501] border border-[#f0c27b]/40 backdrop-blur-md rounded-xl p-6 text-center
                            hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-[#ffd77b]" />
                  <h4 className="text-xl font-bold mb-1 text-white">{item.title}</h4>
                  <p className="text-sm text-[#f9e5b3]">{item.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>


        {/* Mission - Vision - Values */}
        <div className="mb-24">
          <h3 className="text-4xl font-bold text-center mb-14 text-[#3c0501]">
            Mission • Vision • Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: '🎯',
                title: 'Mission',
                text: 'Deliver world-class event experiences with creativity, precision, and heartfelt service.'
              },
              {
                icon: '👁️',
                title: 'Vision',
                text: 'Become India’s most trusted and innovative celebration company.'
              },
              {
                icon: '💛',
                title: 'Values',
                text: 'Integrity, creativity, reliability, transparency, and customer delight.'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#3c0501] backdrop-blur-md border border-[#f0c27b]/40 rounded-2xl p-8 text-center hover:scale-105 transition-all"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-3 text-white">{item.title}</h4>
                <p className="text-[#f9e5b3] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Team Section */}
        <div className="mb-24">
          <h3 className="text-4xl font-bold text-center mb-12 text-[#3c0501]">
            Meet Our Team
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="bg-[#3c0501] border border-[#f0c27b]/20 rounded-2xl p-6 text-center backdrop-blur-md
                          hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#ffd77b]">
                  <img
                    src={`https://i.pravatar.cc/300?img=${num}`}
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold">Team Member {num}</h4>
                <p className="text-[#f9e5b3] text-sm">Event Specialist</p>
              </div>
            ))}
          </div>
        </div>


        {/* Brands Worked With */}
       {/*  <div className="bg-[#3c0501] rounded-2xl p-10 shadow-xl">
          <h3 className="text-3xl font-bold mb-10 text-center text-white">
            Brands That Trusted Us
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
            {['Taj Hotels', 'ITC', 'Reliance', 'Big Bazaar'].map((brand, i) => (
              <div
                key={i}
                className="text-center text-xl font-semibold text-white opacity-80 hover:opacity-100 transition-all"
              >
                {brand}
              </div>
            ))}
          </div>
        </div> */}

         <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-amber-900">Why Choose Us?</h2>

              {[
                {
                  title: 'Expert Team',
                  desc: 'Experienced professionals dedicated to perfection in every detail'
                },
                {
                  title: 'Customized Solutions',
                  desc: 'We tailor every event to match your unique vision and requirements'
                },
                {
                  title: 'Premium Quality',
                  desc: 'Only the finest vendors and decorations for your special day'
                },
                {
                  title: 'On-Time Delivery',
                  desc: 'Punctuality and reliability you can always count on'
                },
                {
                  title: 'Budget Friendly',
                  desc: 'Exceptional value without compromising on quality'
                },
                {
                  title: '24/7 Support',
                  desc: 'Always there when you need us, before, during, and after your event'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-400 text-amber-900">
                      <span className="font-bold">{idx + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-amber-900">{item.title}</h3>
                    <p className="text-amber-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-rose-400 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-amber-100 to-rose-100 p-12 rounded-3xl border-2 border-amber-200">
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-5xl font-bold text-amber-900">12+</p>
                    <p className="text-amber-700 font-semibold">Years of Experience</p>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full"></div>
                  <p className="text-amber-800 text-center leading-relaxed">
                    Trusted by hundreds of families to create their most cherished moments with excellence and tradition.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl text-center border border-amber-200">
                      <p className="text-2xl font-bold text-amber-900">500+</p>
                      <p className="text-xs text-amber-700">Happy Clients</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl text-center border border-amber-200">
                      <p className="text-2xl font-bold text-amber-900">100%</p>
                      <p className="text-xs text-amber-700">Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      </div>
    </section>
  );
};

export default About;
