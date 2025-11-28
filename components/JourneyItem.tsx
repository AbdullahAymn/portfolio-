"use client";

import { useEffect, useRef } from "react";

interface IJourneyItem {
  title: string;
  description: string;
  index: number;
  totalItems: number;
  scrollProgress: number;
  isScrolling: boolean;
}

export default function JourneyItem({
  title = "",
  description = "",
  index,
  totalItems,
  scrollProgress,
  isScrolling,
}: IJourneyItem) {
  const itemRef = useRef<HTMLDivElement>(null);

  // Calculate 3D transform based on scroll progress
  useEffect(() => {
    if (!itemRef.current) return;

    // Check if mobile (width < 64rem = 1024px)
    const isMobile = window.innerWidth < 1024;

    // Calculate item's position in the journey (0 to 1)
    const itemProgress = index / (totalItems - 1);

    // Calculate distance from current scroll position
    const distanceFromView = Math.abs(scrollProgress - itemProgress);

    // Calculate 3D transforms - less intense on mobile
    const scale = isMobile
      ? 1 - distanceFromView * 0.15 // Less scale on mobile
      : 1 - distanceFromView * 0.3;

    const translateZ = isMobile
      ? -distanceFromView * 100 // Less depth on mobile
      : -distanceFromView * 200;

    const translateY = isMobile
      ? distanceFromView * 25 // Less vertical offset on mobile
      : distanceFromView * 50;

    const rotateX = isMobile
      ? distanceFromView * 2 // Less rotation on mobile
      : distanceFromView * 5;

    // Opacity based on distance
    const opacity = Math.max(0.4, 1 - distanceFromView * 0.6);

    // Apply transforms
    itemRef.current.style.transform = `
      perspective(${isMobile ? 800 : 1000}px) 
      translateZ(${translateZ}px) 
      translateY(${translateY}px)
      rotateX(${rotateX}deg)
      scale(${scale})
    `;
    itemRef.current.style.opacity = opacity.toString();

    // Add smooth transition when not scrolling
    if (!isScrolling) {
      itemRef.current.style.transition =
        "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease";
    } else {
      itemRef.current.style.transition =
        "transform 0.1s linear, opacity 0.1s linear";
    }
  }, [scrollProgress, index, totalItems, isScrolling]);

  return (
    <div
      ref={itemRef}
      className="journey-item flex w-full items-stretch justify-between journey-item-3d"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Stepper - On mobile, appears first (left side) */}
      <div className="relative flex flex-col min-h-48 order-1 md:order-2">
        {/* Stepper Bar with Subtle, Styled Neon Effect */}
        <section
          className="z-0 stepper absolute top-0 left-1/2 -translate-x-1/2 h-full w-2 md:w-4 rounded-md bg-gradient-to-b from-[#29d89a] to-[#226357] bg-opacity-80 backdrop-blur"
          style={{
            boxShadow: "0 0 8px #29d89a99, 0 2px 8px #29d89a55",
          }}
        />
        {/* Stepper Dot with Classy Neon Accent */}
        <section
          className="z-10 w-10 h-10 md:w-16 md:h-16 -mt-2 rounded-full bg-[#1e322e] bg-opacity-80 border-2 border-[#29d89a] flex items-center justify-center shadow"
          style={{
            boxShadow: "0 0 10px #29d89a77",
            background: "radial-gradient(circle, #29d89a 0%, #1e322e 70%)",
          }}
        ></section>
      </div>
      {/* INFO - On mobile, appears second (right side) */}
      <div className="info flex-1 px-2 flex !justify-start flex-col order-2 md:order-1">
        <h1 className="text-2xl md:text-4xl w-full max-w-108 px-2 font-bold text-[#26a77d]">
          {title}
        </h1>
        <p className="px-2 py-4 w-full max-w-108 leading-8 md:text-lg">
          {description}
        </p>
      </div>
      {/* space */}
      <div className="flex-1 px-2 hidden md:flex order-3" />
    </div>
  );
}
