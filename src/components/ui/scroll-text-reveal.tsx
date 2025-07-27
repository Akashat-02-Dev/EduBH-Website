"use client";
import { useEffect, useState, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const ScrollTextReveal = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  delay = 0,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  delay?: number;
}) => {
  const [scope, animate] = useAnimate();
  const [isMounted, setIsMounted] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { 
    once: true, 
    margin: "-100px 0px -100px 0px" 
  });
  
  let wordsArray = words.split(" ");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !isInView || hasAnimated) return;
    
    const timer = setTimeout(() => {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.1),
        }
      );
      setHasAnimated(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [animate, filter, duration, isMounted, isInView, hasAnimated, delay]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-inherit"
              style={{
                opacity: isMounted ? 0 : 1,
                filter: filter && isMounted ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  // Show static text during SSR to prevent hydration mismatch
  if (!isMounted) {
    return (
      <div ref={containerRef} className={cn(className)}>
        <div className="mt-0">
          <div className="text-inherit">
            {words}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={cn(className)}>
      <div className="mt-0">
        <div className="text-inherit">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
