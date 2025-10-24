"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "motion/react";
import { useMediaQuery } from "react-responsive";

export default function FramerCarousel({ project }) {
  const items = project.images.carousel;

  const isMobile = useMediaQuery({ maxWidth: 767 });
  //   console.log(project.images.carousel);
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;
      animate(x, targetX, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x, isDragging]);
  return (
    <div className="w-full min-w-screen min-h-[calc(100vh+10px)] my-12">
      <div className="flex flex-col gap-3">
        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex"
            drag="x"
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, info) => {
              setIsDragging(false);
              const containerWidth = containerRef.current?.offsetWidth || 1;
              const offset = info.offset.x;
              const velocity = info.velocity.x;
              let newIndex = index;
              if (Math.abs(velocity) > 500) {
                newIndex = velocity > 0 ? index - 1 : index + 1;
              } else if (Math.abs(offset) > containerWidth * 0.3) {
                newIndex = offset > 0 ? index - 1 : index + 1;
              }
              newIndex = Math.max(0, Math.min(items.length - 1, newIndex));
              setIndex(newIndex);
            }}
            style={{ x }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full max-h-[calc(100vh+10px)]"
              >
                <img
                  src={item}
                  alt={project.name}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>

          <motion.button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-8 bottom-4 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform z-10 duration-500 ease-out
              ${
                index === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:scale-105 hover:backdrop-blur-[2px]"
              }`}
          >
            <svg
              className="w-16 h-16"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="square"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          <motion.button
            disabled={index === items.length - 1}
            onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
            className={`absolute right-8 bottom-4 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform z-10 duration-500 ease-out
              ${
                index === items.length - 1
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:scale-105 hover:backdrop-blur-[2px]"
              }`}
          >
            <svg
              className="w-16 h-16"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="square"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>

          {!isMobile && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 w-1.5 rounded-none transition-all ${
                    i === index ? "w-8 bg-white" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
