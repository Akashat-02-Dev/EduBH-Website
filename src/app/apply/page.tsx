"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CogCylinderAnimation } from "@/components/CogCylinderAnimation";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    qualification: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Application form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_200%_100%_at_top_center,#EAEEFE,#F8F9FF_100%)] pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="tag bg-white/60 backdrop-blur-sm border-white/80 text-[#001E80] font-semibold inline-flex items-center gap-2 mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
              Apply Today & Transform Your Future
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mb-6">
              Start Your Journey With Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Get your UGC approved degree + FREE Industry Training Course
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
            {/* Animation Section */}
            <motion.div 
              className="hidden lg:block relative h-[600px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <CogCylinderAnimation />
              </div>
              
              {/* Floating Info Cards */}
              <motion.div
                className="absolute top-10 left-0 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">UGC Approved</p>
                    <p className="text-sm text-gray-600">Recognized Degrees</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-20 right-0 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Industry Training</p>
                    <p className="text-sm text-gray-600">Free Course Included</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 right-10 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">50% Scholarship</p>
                    <p className="text-sm text-gray-600">Limited Time Offer</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Form Section */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1A3EC3] to-[#4F46E5] rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mb-4">
                    Apply Now
                  </h2>
                  <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-gray-100 rounded-lg border-l-4 border-[#1A3EC3]">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#1A3EC3]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"/>
                      </svg>
                      <p className="text-sm text-[#1A3EC3] font-semibold">Limited Time Offer: Up to 50% Scholarship Available!</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="group">
                      <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#1A3EC3] transition-colors">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#1A3EC3]/20 focus:border-[#1A3EC3] outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#1A3EC3] transition-colors">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#1A3EC3]/20 focus:border-[#1A3EC3] outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#1A3EC3] transition-colors">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#1A3EC3]/20 focus:border-[#1A3EC3] outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="program" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#1A3EC3] transition-colors">
                        Program Interest *
                      </label>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#1A3EC3]/20 focus:border-[#1A3EC3] outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300"
                      >
                        <option value="">Select program type</option>
                        <option value="btech">B.Tech</option>
                        <option value="mtech">M.Tech</option>
                        <option value="bba">BBA</option>
                        <option value="mba">MBA</option>
                        <option value="bca">BCA</option>
                        <option value="mca">MCA</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="group">
                      <label htmlFor="qualification" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#1A3EC3] transition-colors">
                        Current Qualification
                      </label>
                      <input
                        type="text"
                        id="qualification"
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#1A3EC3]/20 focus:border-[#1A3EC3] outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300"
                        placeholder="Enter your current qualification"
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#1A3EC3] to-[#4F46E5] text-white font-semibold py-4 px-6 rounded-xl hover:from-[#4F46E5] hover:to-[#7C3AED] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit Application
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                  </motion.button>

                  <p className="text-sm text-gray-600 text-center">
                    By submitting, you agree to our Terms & Conditions and Privacy Policy
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 