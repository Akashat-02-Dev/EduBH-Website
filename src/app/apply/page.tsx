"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CogCylinderAnimation } from "@/components/CogCylinderAnimation";
import { sendApplicationEmail, ApplyFormData } from "@/lib/emailjs";
import { validateForm } from "@/lib/validation";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    qualification: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error' | '';
    text: string;
  }>({ type: '', text: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear any previous error messages when user starts typing
    if (submitMessage.type === 'error') {
      setSubmitMessage({ type: '', text: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: '', text: '' });

    // Validate form
    const requiredFields = ['fullName', 'email', 'phone', 'program'];
    const validationErrors = validateForm(formData, requiredFields);
    
    if (validationErrors.length > 0) {
      setSubmitMessage({ 
        type: 'error', 
        text: validationErrors.join(', ') 
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await sendApplicationEmail(formData as ApplyFormData);
      
      if (response.success) {
        setSubmitMessage({ type: 'success', text: response.message });
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          program: "",
          qualification: ""
        });
      } else {
        setSubmitMessage({ type: 'error', text: response.message });
      }
    } catch (error) {
      setSubmitMessage({ 
        type: 'error', 
        text: 'Failed to submit application. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
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

                  {/* Submit Message */}
                  {submitMessage.text && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-xl flex items-center gap-2 ${
                        submitMessage.type === 'success'
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}
                    >
                      {submitMessage.type === 'success' ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"/>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"/>
                        </svg>
                      )}
                      <span className="font-medium">{submitMessage.text}</span>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed text-white'
                        : 'bg-gradient-to-r from-[#1A3EC3] to-[#4F46E5] text-white hover:from-[#4F46E5] hover:to-[#7C3AED]'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                        </svg>
                      </>
                    )}
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