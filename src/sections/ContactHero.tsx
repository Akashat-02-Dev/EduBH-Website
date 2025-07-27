"use client";
import { CogCylinderAnimation } from "@/components/CogCylinderAnimation";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="py-24 lg:py-32 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Animation Column */}
          <motion.div 
            className="relative h-[500px] lg:h-[600px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CogCylinderAnimation />
          </motion.div>

          {/* Contact Info Column */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-block"
            >
              <div className="tag bg-white/20 backdrop-blur-sm border-white/30 text-[#001E80] font-semibold flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
                Get In Touch with EduBh
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Contact EduBh
            </motion.h1>
            
            <motion.p 
              className="text-xl text-[#010D3E] mt-6 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Ready to start your educational journey? Our admission counselors are here to help you choose the right program and guide you towards success.
            </motion.p>

            {/* Quick Contact Cards */}
            <motion.div 
              className="grid md:grid-cols-2 gap-6 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {/* Phone Card */}
              <motion.div 
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#1A3EC3] to-[#4F46E5] rounded-lg flex items-center justify-center mb-4 mx-auto lg:mx-0 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#010D3E] mb-2">Phone</h3>
                <p className="text-gray-600 text-sm mb-3">Call us for immediate assistance</p>
                <p className="text-[#1A3EC3] font-semibold">+91 9876543210</p>
                <p className="text-gray-500 text-sm mt-1">Mon-Sat: 9 AM - 7 PM</p>
              </motion.div>

              {/* Email Card */}
              <motion.div 
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-lg flex items-center justify-center mb-4 mx-auto lg:mx-0 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#010D3E] mb-2">Email</h3>
                <p className="text-gray-600 text-sm mb-3">Send us your queries</p>
                <p className="text-[#1A3EC3] font-semibold">info@edubh.com</p>
                <p className="text-gray-500 text-sm mt-1">We reply within 24 hours</p>
              </motion.div>

              {/* Office Card */}
              <motion.div 
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#1A3EC3] to-[#4F46E5] rounded-lg flex items-center justify-center mb-4 mx-auto lg:mx-0 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#010D3E] mb-2">Office</h3>
                <p className="text-gray-600 text-sm mb-3">Visit our main office</p>
                <p className="text-[#1A3EC3] font-semibold">Main Campus</p>
                <p className="text-gray-500 text-sm mt-1">India Operations</p>
              </motion.div>

              {/* Working Hours Card */}
              <motion.div 
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#1A3EC3] to-[#4F46E5] rounded-lg flex items-center justify-center mb-4 mx-auto lg:mx-0 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#010D3E] mb-2">Working Hours</h3>
                <p className="text-gray-600 text-sm mb-3">When we&apos;re available</p>
                <p className="text-[#1A3EC3] font-semibold">Mon - Sat: 9 AM - 7 PM</p>
                <p className="text-gray-500 text-sm mt-1">Sunday: Closed</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
