"use client";

import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  animate,
} from "framer-motion";

import { useEffect, useRef, useState } from "react";

export default function Outro({ text }) {
  const controls = useAnimation();
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const ref = useRef(null);
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => Math.round(latest));

  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start the animation only when the component is visible
            const controls = animate(count, text.length, {
              type: "tween",
              duration: 3,
              ease: "linear",
              onUpdate: (latest) => {
                if (latest === text.length) {
                  setAnimationCompleted(true);
                }
              },
            });

            // Returning a cleanup function to stop the animation when the component is unmounted.
            return controls.stop;
          }
        });
      },
      {
        root: null, // assuming the viewport
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, text]);

  return (
    <p ref={ref} className={animationCompleted ? "animation-completed" : ""}>
      <motion.span animate={controls}>{displayText}</motion.span>
    </p>
  );
}
