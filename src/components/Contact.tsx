
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Your message has been sent successfully!");
          form.reset();
        },
        (error) => {
          setLoading(false);
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-[Times_New_Roman] italic text-3xl sm:text-3xl md:text-5xl font-bold text-[#3c0501] mb-2 mt-6">
            Get In Touch
          </h2>
          <p className="text-xl text-[#622e17] max-w-2xl mx-auto">
            Ready to plan your perfect celebration? Contact us today and let's make it happen!
          </p>
        </div>

        {/* Form + Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-10 shadow-xl">
            <h3 className="text-3xl font-bold text-[#3c0501] mb-8">
              Send Us a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSendEmail}>
              <div>
                <label className="block text-[#622e17] font-semibold mb-2">
                  Your Name
                </label>
                <input
                  name="user_name"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#b59372] focus:border-[#ffc900] transition"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-[#622e17] font-semibold mb-2">
                  Email Address
                </label>
                <input
                  name="user_email"
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#b59372] focus:border-[#ffc900] transition"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-[#622e17] font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  name="user_phone"
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#b59372] focus:border-[#ffc900] transition"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-[#622e17] font-semibold mb-2">
                  Event Type
                </label>
                <select
                  name="event_type"
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#b59372] focus:border-[#ffc900] transition"
                  required
                >
                  <option value="">Select an event type</option>
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
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#b59372] focus:border-[#ffc900] transition"
                  placeholder="Tell us about your event..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#3c0501] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#622e17] transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-60"
              >
                {loading ? "Sending..." : "Submit Request"}
              </button>
            </form>
          </div>

          {/* Contact Info (Right Side) */}
          {/* Your existing right-side contact info stays the same */}

          {/* ... (KEEP existing code) */}

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
