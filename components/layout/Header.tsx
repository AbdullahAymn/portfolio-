"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import TextPressure from "../TextPressure";

const LINKS = [
  { link: "/", name: "Home" },
  { link: "/about", name: "About" },
  // { link: "/services", name: "Services" },
  { link: "/portfolio", name: "Portfolio" },
  { link: "/contact", name: "Contact" },
];

export const SOCIAL_LINKS = [
  {
    icon: FaGithub,
    href: "https://github.com/AbdullahAymn",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/aabdullah-ayyman/",
    label: "LinkedIn",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/Abdullah.Ayman.Yehya",
    label: "Facebook",
  },
  { icon: FaXTwitter, href: "https://x.com/Aybbekk", label: "X (Twitter)" },
];

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const pathname = usePathname();

 

  return (
    <header className={`w-full px-2 sticky top-0 z-[9999] `}>
      <nav className="rounded-2xl shadow-md shadow-gray-800 backdrop-blur-sm bg-white/20 dark:bg-black/20 border-[3px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between gap-4 py-4">
          {/* LOGO */}
          <Link href="/" className="group relative z-20">
            <TextPressure
              text="Abdullah"
              flex={false}
              alpha={false}
              stroke={false}
              width={false}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={36}
              scale={true}
            />
          </Link>

          {/* Desktop Navigation Links with Apple Liquid Glass Style */}
          <section className="hidden md:flex items-center gap-2 lg:gap-3">
            {LINKS.map((link) => {
              const isActive =
                pathname === link.link ||
                (link.link !== "/" && pathname.startsWith(link.link));
              return (
                <Link
                  key={link.name}
                  href={link.link}
                  className={`relative text-sm lg:text-base font-medium transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group px-4 py-2 rounded-full overflow-hidden ${
                    isActive
                      ? "font-semibold"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                  style={{
                    perspective: isActive ? "1000px" : "none",
                  }}
                >
                  {/* Dark mode glass background with 3D */}
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hidden dark:block group-hover:scale-105 group-hover:translate-y-[-2px] ${
                      isActive
                        ? "bg-gray-800/50 backdrop-blur-xl border border-gray-600/40 shadow-2xl shadow-black/30 scale-100"
                        : "bg-gray-800/30 backdrop-blur-lg border border-gray-700/30 shadow-xl shadow-black/20 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-105"
                    }`}
                    style={{
                      background: isActive
                        ? "linear-gradient(135deg, rgba(30, 30, 30, 0.6), rgba(30, 30, 30, 0.3))"
                        : "linear-gradient(135deg, rgba(30, 30, 30, 0.4), rgba(30, 30, 30, 0.15))",
                      transform: isActive
                        ? "perspective(1000px) rotateX(5deg) translateZ(10px)"
                        : "translateY(0) scale(0.95)",
                      boxShadow: isActive
                        ? "0 10px 30px rgba(59, 130, 246, 0.4), 0 5px 15px rgba(147, 51, 234, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                        : "none",
                    }}
                  />
                  {/* 3D Gradient overlay for active state */}
                  {isActive && (
                    <div
                      className="absolute inset-0 rounded-full opacity-100"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.15))",
                        transform:
                          "perspective(1000px) rotateX(5deg) translateZ(5px)",
                      }}
                    />
                  )}
                  {/* Animated shine effect that moves on hover */}
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)",
                      transform: "translateX(-100%)",
                    }}
                  />
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-full ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                    style={{
                      background:
                        "linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.4) 100%)",
                      transform: "translateX(-100%)",
                      transitionDelay: "0.1s",
                    }}
                  />
                  {/* Inner glow effect */}
                  <div
                    className={`absolute inset-px rounded-full transition-all duration-500 ${
                      isActive
                        ? "bg-gradient-to-br from-white/20 to-transparent"
                        : "bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100"
                    }`}
                  />
                  {/* Bouncing 3D small white circle at center for active state */}
                  {isActive && (
                    <span
                      className="absolute left-1/2 -bottom-[14px] z-20"
                      style={{
                        transform:
                          "translate(-50%,-50%) perspective(500px) translateZ(16px)",
                      }}
                    >
                      <span
                        className="block rounded-full"
                        style={{
                          width: "12px",
                          height: "12px",
                          background:
                            "radial-gradient(circle at 30% 20%, #fff 80%, #e0e0e0 100%)",
                          boxShadow:
                            "0 0 12px 4px rgba(255,255,255,0.6), 0 6px 18px 2px rgba(60,40,100,0.18)",
                        }}
                      />
                    </span>
                  )}
                  <span
                    className={`relative z-10 transition-all duration-500 group-hover:scale-105 ${
                      isActive
                        ? "bg-gradient-to-r from-green-400 via-green-600 to-green-700 bg-clip-text text-transparent"
                        : ""
                    }`}
                    style={{
                      transform: isActive
                        ? "perspective(1000px) rotateX(-2deg) translateZ(15px)"
                        : "none",
                      textShadow: isActive
                        ? "0 2px 10px rgba(59, 130, 246, 0.3), 0 1px 5px rgba(147, 51, 234, 0.2)"
                        : "none",
                    }}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </section>

          {/* Social Media Icons with Glass Style */}
          <section className="hidden md:flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="relative text-foreground/70 hover:text-foreground transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] p-2 rounded-full group overflow-hidden"
                >
                  {/* Glass background on hover - Moves with hover */}
                  <div
                    className="absolute inset-0 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg border border-white/30 dark:border-gray-700/30 shadow-xl shadow-black/8 dark:shadow-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-110 group-hover:translate-y-[-2px]"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.15))",
                    }}
                  />
                  {/* Dark mode glass */}
                  <div
                    className="absolute inset-0 rounded-full bg-gray-800/30 backdrop-blur-lg border border-gray-700/30 shadow-xl shadow-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-110 group-hover:translate-y-[-2px] hidden dark:block"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(30, 30, 30, 0.4), rgba(30, 30, 30, 0.15))",
                    }}
                  />
                  {/* Shine effect */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%)",
                      transform: "translateX(-100%)",
                    }}
                  />
                  <Icon className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                </a>
              );
            })}
          </section>

          {/* Mobile Menu Button */}
          {isMobileView && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-btn flex flex-col gap-1.5 p-2 text-foreground/80 hover:text-foreground transition-colors md:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          )}
        </div>

        {/* Mobile Menu with Glass Style */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-white/30 dark:border-gray-700/40 backdrop-blur-md">
            {/* Mobile Navigation Links with Glass Style */}
            {LINKS.map((link) => {
              const isActive =
                pathname === link.link ||
                (link.link !== "/" && pathname.startsWith(link.link));
              return (
                <Link
                  key={link.name}
                  href={link.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`relative block text-base font-medium transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] py-3 px-4 rounded-xl group overflow-hidden ${
                    isActive
                      ? "font-semibold"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                  style={{
                    perspective: isActive ? "1000px" : "none",
                  }}
                >
                  {/* Dark mode mobile glass with 3D */}
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hidden dark:block group-hover:scale-[1.02] group-hover:translate-y-[-1px] ${
                      isActive
                        ? "bg-gray-800/50 backdrop-blur-xl border border-gray-600/40 shadow-2xl shadow-black/30"
                        : "bg-gray-800/30 backdrop-blur-lg border border-gray-700/30 shadow-xl shadow-black/20 opacity-0 group-hover:opacity-100"
                    }`}
                    style={{
                      background: isActive
                        ? "linear-gradient(135deg, rgba(30, 30, 30, 0.6), rgba(30, 30, 30, 0.3))"
                        : "linear-gradient(135deg, rgba(30, 30, 30, 0.4), rgba(30, 30, 30, 0.15))",
                      transform: isActive
                        ? "perspective(1000px) rotateX(5deg) translateZ(10px)"
                        : "none",
                      boxShadow: isActive
                        ? "0 10px 30px rgba(59, 130, 246, 0.4), 0 5px 15px rgba(147, 51, 234, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                        : "none",
                    }}
                  />
                  {/* 3D Gradient overlay for active state */}
                  {isActive && (
                    <div
                      className="absolute inset-0 rounded-xl opacity-100"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.15))",
                        transform:
                          "perspective(1000px) rotateX(5deg) translateZ(5px)",
                      }}
                    />
                  )}
                  {/* Shine effect */}
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-700 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%)",
                    }}
                  />
                  {/* Bouncing 3D small white circle at center for active state */}
                  {isActive && (
                    <span
                      className="absolute left-1/2 -bottom-[8px] z-20"
                      style={{
                        transform:
                          "translate(-50%,-50%) perspective(500px) translateZ(16px)",
                      }}
                    >
                      <span
                        className="block rounded-full"
                        style={{
                          width: "12px",
                          height: "12px",
                          background:
                            "radial-gradient(circle at 30% 20%, #fff 80%, #e0e0e0 100%)",
                          boxShadow:
                            "0 0 12px 4px rgba(255,255,255,0.6), 0 6px 18px 2px rgba(60,40,100,0.18)",
                        }}
                      />
                    </span>
                  )}
                  <span
                    className={`relative z-10 transition-all duration-500 group-hover:scale-105 ${
                      isActive
                        ? "bg-gradient-to-r from-green-400  to-green-600 bg-clip-text text-transparent"
                        : ""
                    }`}
                    style={{
                      transform: isActive
                        ? "perspective(1000px) rotateX(-2deg) translateZ(15px)"
                        : "none",
                      textShadow: isActive
                        ? "0 2px 10px rgba(59, 130, 246, 0.3), 0 1px 5px rgba(147, 51, 234, 0.2)"
                        : "none",
                    }}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
            {/* Mobile Social Media Icons with Glass Style */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/30 dark:border-gray-700/40">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="relative text-foreground/70 hover:text-foreground transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] p-3 rounded-full group overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg border border-white/30 dark:border-gray-700/30 shadow-xl shadow-black/8 dark:shadow-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-110 group-hover:translate-y-[-2px]"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.15))",
                      }}
                    />
                    <div
                      className="absolute inset-0 rounded-full bg-gray-800/30 backdrop-blur-lg border border-gray-700/30 shadow-xl shadow-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-110 group-hover:translate-y-[-2px] hidden dark:block"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(30, 30, 30, 0.4), rgba(30, 30, 30, 0.15))",
                      }}
                    />
                    <Icon className="w-6 h-6 relative z-10 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-3" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
