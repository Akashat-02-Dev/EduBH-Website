"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const [isMounted, setIsMounted] = useState(false);
  let wordsArray = words.split(" ");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [animate, filter, duration, isMounted]);

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
      <div className={cn(className)}>
        <div className="mt-0">
          <div className="text-inherit">
            {words}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(className)}>
      <div className="mt-0">
        <div className="text-inherit">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
