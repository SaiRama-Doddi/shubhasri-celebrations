import { Award, Users, Target, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#622e17] to-[#3c0501] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-[#ffc900]">
            About Shubaश्री Celebrations
          </h2>
          <p className="text-xl text-[#f9e5b3] max-w-3xl mx-auto">
            Your trusted partner in creating magical moments and unforgettable celebrations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-[#ffc900]">
              Our Story
            </h3>
            <p className="text-lg text-[#f9e5b3] mb-4 leading-relaxed">
              Shubaश्री Celebrations was founded with a simple yet powerful vision: to make every celebration extraordinary. With over a decade of experience in event management, we have transformed countless dreams into reality.
            </p>
            <p className="text-lg text-[#f9e5b3] mb-4 leading-relaxed">
              Our team of passionate professionals brings creativity, precision, and dedication to every event. From intimate family gatherings to grand celebrations, we handle every detail with care and excellence.
            </p>
            <p className="text-lg text-[#f9e5b3] leading-relaxed">
              We believe that every celebration is unique, and we work closely with our clients to understand their vision and bring it to life in ways that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#bc842f] rounded-xl p-6 text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-[#ffc900]" />
              <h4 className="text-2xl font-bold mb-2">Excellence</h4>
              <p className="text-sm">Award-winning service quality</p>
            </div>
            <div className="bg-[#bc842f] rounded-xl p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-[#ffc900]" />
              <h4 className="text-2xl font-bold mb-2">Expert Team</h4>
              <p className="text-sm">50+ skilled professionals</p>
            </div>
            <div className="bg-[#bc842f] rounded-xl p-6 text-center">
              <Target className="w-12 h-12 mx-auto mb-4 text-[#ffc900]" />
              <h4 className="text-2xl font-bold mb-2">Precision</h4>
              <p className="text-sm">Meticulous attention to detail</p>
            </div>
            <div className="bg-[#bc842f] rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-[#ffc900]" />
              <h4 className="text-2xl font-bold mb-2">Trust</h4>
              <p className="text-sm">500+ happy clients</p>
            </div>
          </div>
        </div>

        <div className="bg-[#bc842f] rounded-2xl p-10">
          <h3 className="text-3xl font-bold mb-8 text-center text-white">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h4 className="text-xl font-bold mb-3">Creative Excellence</h4>
              <p className="text-[#f9e5b3]">
                Innovative designs and unique themes tailored to your preferences
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⏰</div>
              <h4 className="text-xl font-bold mb-3">Timely Execution</h4>
              <p className="text-[#f9e5b3]">
                Punctual delivery and seamless event coordination every time
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h4 className="text-xl font-bold mb-3">Budget Friendly</h4>
              <p className="text-[#f9e5b3]">
                Premium quality services that fit within your budget constraints
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
