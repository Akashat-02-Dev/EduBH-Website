"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Contact message form submitted:', formData);
  };

  return (
    <section id="contact-form" className="py-20 bg-[radial-gradient(ellipse_200%_100%_at_top_center,#EAEEFE,#F8F9FF_100%)]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="tag bg-white/60 backdrop-blur-sm border-white/80 text-[#001E80] font-semibold inline-flex items-center gap-2 mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
            Get In Touch With Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mb-6">
            Send us a Message
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Have questions? We&apos;re here to help you with any queries about our programs.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Message Form */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 font-medium">
                Have questions? We&apos;re here to help you with any queries about our programs.
              </p>
              <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-gray-100 rounded-lg border-l-4 border-[#1A3EC3]">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#1A3EC3]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8M10,17H14V15.5H10V17M8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8Z"/>
                  </svg>
                  <p className="text-sm text-[#1A3EC3] font-semibold">Average Response Time: Within 2 hours</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="group">
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#1A3EC3] transition-colors">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#1A3EC3]/20 focus:border-[#1A3EC3] outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300"
                    placeholder="First name"
                  />
                </div>

                <div className="group">
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#1A3EC3] transition-colors">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#1A3EC3]/20 focus:border-[#1A3EC3] outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="contactEmail" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#1A3EC3] transition-colors">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#1A3EC3]/20 focus:border-[#1A3EC3] outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="group">
                <label htmlFor="contactPhone" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#1A3EC3] transition-colors">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#1A3EC3]/20 focus:border-[#1A3EC3] outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="group">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#1A3EC3] transition-colors">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#1A3EC3]/20 focus:border-[#1A3EC3] outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300"
                >
                  <option value="">Select subject</option>
                  <option value="admission">Admission Inquiry</option>
                  <option value="programs">Program Information</option>
                  <option value="fees">Fee Structure</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#1A3EC3] transition-colors">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#1A3EC3]/20 focus:border-[#1A3EC3] outline-none transition-all duration-300 resize-vertical bg-white/80 backdrop-blur-sm hover:border-gray-300"
                  placeholder="Enter your message here..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#1A3EC3] to-[#4F46E5] text-white font-semibold py-4 px-6 rounded-xl hover:from-[#4F46E5] hover:to-[#7C3AED] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
