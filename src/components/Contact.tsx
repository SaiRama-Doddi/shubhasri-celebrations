import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[Times_New_Roman] italic text-3xl sm:text-3xl md:text-5xl font-bold text-[#3c0501] mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-[#622e17] max-w-2xl mx-auto">
            Ready to plan your perfect celebration? Contact us today and let's make it happen!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-10 shadow-xl">
            <h3 className="text-3xl font-bold text-[#3c0501] mb-8">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-[#622e17] font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#b59372] focus:border-[#ffc900] focus:outline-none transition"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-[#622e17] font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#b59372] focus:border-[#ffc900] focus:outline-none transition"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-[#622e17] font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#b59372] focus:border-[#ffc900] focus:outline-none transition"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-[#622e17] font-semibold mb-2">
                  Event Type
                </label>
                <select className="w-full px-4 py-3 rounded-lg border-2 border-[#b59372] focus:border-[#ffc900] focus:outline-none transition">
                  <option>Select an event type</option>
                  <option>Wedding</option>
                  <option>Haldi Ceremony</option>
                  <option>Birthday Party</option>
                  <option>Engagement</option>
                  <option>Half Saree Ceremony</option>
                  <option>Dhoti Ceremony</option>
                  <option>House Warming</option>
                  <option>Anniversary</option>
                  <option>Baby Shower</option>
                  <option>Office Inauguration</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[#622e17] font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#b59372] focus:border-[#ffc900] focus:outline-none transition resize-none"
                  placeholder="Tell us about your event..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3c0501] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#622e17] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Submit Request
              </button>
            </form>
          </div>

          <div>
            <div className="bg-[#3c0501] rounded-2xl p-10 shadow-xl text-white mb-8">
              <h3 className="text-3xl font-bold mb-8 text-[#ffc900]">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-[#ffc900] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone</h4>
                    <p className="text-[#f9e5b3]">+91 88808 01244</p>
             
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-[#ffc900] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <p className="text-[#f9e5b3]">info@shubashricelebrations.com</p>
                   
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#ffc900] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Address</h4>
                    <p className="text-[#f9e5b3]">
                      Whitefield, Bangalore
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-[#ffc900] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Working Hours</h4>
                    <p className="text-[#f9e5b3]">Monday - Saturday: 9:00 AM - 9:00 PM</p>
                    <p className="text-[#f9e5b3]">Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-[#bc842f] to-[#622e17] rounded-2xl p-10 shadow-xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Planning?
              </h3>
              <p className="text-[#f9e5b3] mb-6">
                Book a free consultation with our event planning experts today!
              </p>
              <a
                href="tel:+918880801244"
                className="inline-block bg-[#ffc900] text-[#3c0501] px-8 py-3 rounded-full font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
