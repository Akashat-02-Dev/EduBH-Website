"use client";

import amityLogo from "@/assets/amity.png";
import manipalLogo from "@/assets/manipal.png";
import bitsLogo from "@/assets/bits.png";
import iitPatnaLogo from "@/assets/Indian_Institute_of_Technology,_Patna.png";
import { ScrollTextReveal } from "@/components/ui/scroll-text-reveal";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <section id="logoticker" className="py-8 bg-white md:py-12">
      <div className="container">
        <div className="text-center mb-8">
          <ScrollTextReveal 
            words="Trusted University Partners"
            className="text-lg font-semibold text-gray-600 mb-4"
            duration={0.6}
            delay={0.1}
          />
        </div>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {/* University Partner Logos */}
            <Image
              src={amityLogo}
              alt="Amity Online University"
              className="logo-ticker-image h-20 w-auto"
            />
            <Image
              src={manipalLogo}
              alt="Manipal Online University"
              className="logo-ticker-image h-20 w-auto"
            />
            <Image
              src={iitPatnaLogo}
              alt="IIT Patna"
              className="logo-ticker-image h-20 w-auto"
            />
            <Image
              src={bitsLogo}
              alt="BITS Pilani"
              className="logo-ticker-image h-20 w-auto"
            />
            {/* SECOND BATCH FOR ANIMATION */}
            <Image
              src={amityLogo}
              alt="Amity Online University"
              className="logo-ticker-image h-20 w-auto"
            />
            <Image
              src={manipalLogo}
              alt="Manipal Online University"
              className="logo-ticker-image h-20 w-auto"
            />
            <Image
              src={iitPatnaLogo}
              alt="IIT Patna"
              className="logo-ticker-image h-20 w-auto"
            />
            <Image
              src={bitsLogo}
              alt="BITS Pilani"
              className="logo-ticker-image h-20 w-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
