"use client";

import { motion, useScroll, useTransform, easeInOut } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import cogImage from "@/assets/cog.png";
import cylImage from "@/assets/cylinder.png";
import noodelImage from "@/assets/noodle.png";

export function CogCylinderAnimation() {
  const animationRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: animationRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div ref={animationRef} className="relative h-full w-full flex items-center justify-center">
      {/* Main Cog Animation */}
      <motion.div
        className="relative z-10"
        animate={{ 
          rotate: 360,
          translateY: [-20, 20]
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          },
          translateY: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 3,
            ease: easeInOut,
          }
        }}
      >
        <Image
          src={cogImage}
          alt="Educational Excellence"
          width={300}
          height={300}
          priority
          className="object-contain filter drop-shadow-2xl"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLDSEIVISLGNfAeY8aXGOtlEyeHKwEDNzVOVaD/9k="
        />
      </motion.div>

      {/* Floating Cylinder */}
      <motion.div
        className="absolute -top-12 -left-24 z-0"
        style={{ translateY: translateY }}
        animate={{
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 4,
            ease: easeInOut,
          }
        }}
      >
        <Image
          src={cylImage}
          alt="Innovation"
          width={180}
          height={180}
          className="object-contain opacity-80"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLDSEIVISLGNfAeY8aXGOtlEyeHKwEDNzVOVaD/9k="
        />
      </motion.div>

      {/* Decorative Noodle */}
      <motion.div
        className="absolute -bottom-16 -right-20 z-0"
        style={{ 
          translateY: translateY,
        }}
        animate={{
          rotate: [30, 40, 20, 30],
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 5,
            ease: easeInOut,
          }
        }}
      >
        <Image
          src={noodelImage}
          alt="Learning Path"
          width={160}
          height={160}
          className="object-contain opacity-70"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLDSEIVISLGNfAeY8aXGOtlEyeHKwEDNzVOVaD/9k="
        />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-80"
        animate={{
          y: [-10, 10, -10],
          x: [-5, 5, -5],
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: easeInOut,
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-70"
        animate={{
          y: [10, -10, 10],
          x: [5, -5, 5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: easeInOut,
          delay: 1,
        }}
      />

      <motion.div
        className="absolute top-3/4 right-1/3 w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-60"
        animate={{
          y: [-8, 8, -8],
          x: [-3, 3, -3],
          scale: [1, 1.3, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: easeInOut,
          delay: 2,
        }}
      />
    </div>
  );
}
