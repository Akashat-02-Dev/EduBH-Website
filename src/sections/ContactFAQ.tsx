"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to complete a degree?",
      answer: "Degree duration varies by program. UG programs typically take 3 years, while PG programs take 2 years. You can study at your own pace with our flexible learning approach.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,3L1,9L4,10.18V17L12,21L20,17V10.18L23,9L12,3M6,11.82L12,15L18,11.82V16L12,19L6,16V11.82Z"/>
        </svg>
      )
    },
    {
      question: "Is the industry training course really free?",
      answer: "Yes! Our comprehensive industry training course is completely free for every student who enrolls in our UG/PG degree programs, providing real-world skills alongside academic knowledge.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"/>
        </svg>
      )
    },
    {
      question: "Are the degrees valid for government jobs?",
      answer: "Absolutely! All our partner universities are UGC approved and government recognized, making the degrees valid for government jobs, higher studies, and global opportunities.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6,10V15H8V10H6M16,10V15H18V10H16M8,18H16V16H8V18M20,8H17.19L15.64,2.5C15.47,2.19 15.16,2 14.82,2H9.18C8.84,2 8.53,2.19 8.36,2.5L6.81,8H4A2,2 0 0,0 2,10V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V10A2,2 0 0,0 20,8M10.5,4H13.5L14.33,6H9.67L10.5,4Z"/>
        </svg>
      )
    },
    {
      question: "What support do you provide during the course?",
      answer: "We provide comprehensive support including academic guidance, technical support, career counseling, placement assistance, and 24/7 student helpdesk throughout your educational journey.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"/>
        </svg>
      )
    },
    {
      question: "Can I study while working?",
      answer: "Yes! Our flexible online learning model is designed for working professionals. You can access courses anytime, anywhere, and study at your own pace without disrupting your career.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,6V4H20V6H14M20,8V10H14V8H20M20,12V14H14V12H20M8,8H12V4H8V8M10,14L12,12L10,10V11H8V13H10V14M4,2H22A2,2 0 0,1 24,4V20A2,2 0 0,1 22,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2Z"/>
        </svg>
      )
    },
    {
      question: "What is the admission process?",
      answer: "Our simple admission process includes online application, document verification, and enrollment. Our counselors guide you through each step to ensure a smooth admission experience.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        </svg>
      )
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="tag bg-gradient-to-r from-blue-50 to-gray-100 border-blue-200 text-[#1A3EC3] font-semibold inline-flex items-center gap-2 mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z"/>
            </svg>
            Get Your Answers Here
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Find quick answers to common questions about our programs and services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50/50 rounded-2xl transition-colors group"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-[#1A3EC3]">{faq.icon}</div>
                    <h3 className="text-lg font-bold text-gray-800 pr-4 group-hover:text-[#1A3EC3] transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 bg-gradient-to-r from-[#1A3EC3] to-[#4F46E5] rounded-xl flex items-center justify-center"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.button>
                
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <motion.p 
                          className="text-gray-600 leading-relaxed font-medium pl-12"
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Information Footer */}
        <div className="mt-20 bg-gradient-to-r from-[#1A3EC3] to-[#4F46E5] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our admission counselors are here to help you with personalized guidance and support.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+919876543210"
              className="bg-white text-[#1A3EC3] font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: +91 9876543210
            </a>
            
            <a
              href="mailto:info@edubh.com"
              className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#1A3EC3] transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
          
          <div className="mt-6 text-blue-100 text-sm flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/>
              </svg>
              <p>Main Campus, India Operations</p>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
              </svg>
              <p>Mon-Sat: 9 AM - 7 PM | Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
