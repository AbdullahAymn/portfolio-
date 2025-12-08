"use client";
import JourneyItem from "@/components/JourneyItem";
import { useEffect, useRef, useState } from "react";

export default function WorkJourney() {
  const journeyContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const journeyItems = [
    {
      title: "A Curious Student Phase",
      description:
        "Started my journey with a strong foundation in computer science and self-learning. I was always fascinated by how things work behind the scenes, which pushed me to explore web technologies and problem-solving early on.",
    },
    {
      title: "Freelancing & Real-World Practice",
      description:
        "Jumped into freelancing and built multiple real-world projects — company portfolios, educational platforms, and custom websites. Learned how to deal with real clients, real deadlines.",
    },
    {
      title: "ProTech – Real Team, Real Systems",
      description:
        "Worked with ProTech, a group of passionate freelancers, building large-scale systems. Developed an office management system for a company with field agents, handling tracking, collections, and coordination between admins, accountants, and agents.",
    },
    {
      title: "Smart Security Systems",
      description:
        "Contributed to a security management system that tracks employees on a live map, controls access zones, registers attendance, and monitors real-time locations. Basically.",
    },
    {
      title: "Sharakat – Niche Platforms at Scale",
      description:
        "Worked with Sharakat company on specialized platforms — including a full ecosystem for camel products, hospitals, racing news, events, and conferences. Also built similar management systems for farms with structured workflows and dashboards.",
    },
    {
      title: "CoreVera – Building an Education ERP System",
      description:
        "Currently working with CoreVera to build a full-scale ERP system for school management in Saudi Arabia. The system covers complete student management, branch operations, financial administration, student registration, tuition tracking, payments, academic notes, and detailed reporting. I contribute to building scalable, high-performance, and flexible user interfaces that support large numbers of users efficiently.",
    },
    {
      title: "How I Work Today",
      description:
        "Now I focus on writing clean, scalable code and building smooth, user-focused experiences. Obsessed with performance, architecture, and tiny details that most people won't notice — but feel.",
    },
    {
      title: "Looking Ahead",
      description:
        "I'm not just building websites — I'm building systems, experiences, and products that actually matter. And honestly? I'm just getting started 🚀",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!journeyContainerRef.current) return;

      setIsScrolling(true);

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Get container position
      const container = journeyContainerRef.current;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Calculate scroll progress (0 to 1) within the journey section
      const startScroll = containerTop - windowHeight * 0.5;
      const endScroll = containerTop + containerHeight - windowHeight * 0.5;
      const scrollRange = endScroll - startScroll;

      let progress = 0;
      if (scrollY < startScroll) {
        progress = 0;
      } else if (scrollY > endScroll) {
        progress = 1;
      } else {
        progress = (scrollY - startScroll) / scrollRange;
      }

      setScrollProgress(progress);

      // Set timeout to detect when scrolling stops
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);
  return (
    <div>
      <h1 className="text-center text-4xl my-12 font-bold">Work Journey</h1>
      <div
        ref={journeyContainerRef}
        className="journey-road-container"
        style={{
          perspective: "1200px",
          perspectiveOrigin: "center center",
        }}
      >
        {journeyItems.map((i, index) => (
          <JourneyItem
            key={i.title}
            title={i.title}
            description={i.description}
            index={index}
            totalItems={journeyItems.length}
            scrollProgress={scrollProgress}
            isScrolling={isScrolling}
          />
        ))}
      </div>
    </div>
  );
}
