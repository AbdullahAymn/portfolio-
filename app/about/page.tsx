import Hire from "@/components/Hire";
import IconComponents from "@/components/IconComponents";
import { Sparkle } from "lucide-react";
import WorkJourney from "./WorkJourney";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Abdullah Ayman – Front-End Developer",
  description:
    "Learn more about Abdullah Ayman, a Front-End Developer specialized in React & Next.js. I build fast, scalable, and SEO-focused web apps for startups and businesses.",
  keywords: [
    "about Abdullah Ayman",
    "front-end developer",
    "React developer",
    "Next.js developer",
    "web developer Egypt",
    "software engineer portfolio",
  ],
  openGraph: {
    title: "About Abdullah Ayman – Front-End Developer",
    description:
      "Front-End Developer with experience building high-performance web apps using React & Next.js.",
    type: "profile",
    url: "https://portfolio-abdullahaymn.vercel.app/about",
    images: ["/Abdullah-vector.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Me – Abdullah Ayman",
    description:
      "Front-End Developer specialized in React & Next.js. Learn more about my journey and experience.",
    images: ["/Abdullah-vector.png"],
  },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  // Feature cards data
  const featureCards = [
    {
      title: "What I Focus On",
      items: [
        "High‑performance React & Next.js apps",
        "Clean Architecture & scalable codebases",
        "Component-based & modular systems",
        "SEO‑friendly front‑end structures",
      ],
      borderColor: "indigo",
      bulletColor: "indigo-400",
    },
    {
      title: "How I Work",
      items: [
        "Understand business goals before writing code",
        "Write reusable, production‑ready components",
        "Focus on performance and user experience",
        "Deliver clean, documented, and maintainable code",
      ],
      borderColor: "rose",
      bulletColor: "rose-400",
    },
  ];

  // helpers
  const calculateExperience = () => {
    const thisYear = new Date().getFullYear();
    const thisMonth = new Date().getMonth();
    const experienceNum =
      Math.floor((thisYear - 2023 + thisMonth / 12) * 2) / 2;
    return (
      <span
        className="inline-flex overflow-hidden relative !items-center gap-1 px-4 py-2 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-md shadow-lg border border-white/20 text-[1.2rem] font-bold text-gray-800 dark:text-white/90 shadow-white/10 transition-all duration-300 select-none"
        style={{
          boxShadow:
            "0 4px 30px 0 rgba(60,60,80,0.08), 0 1.5px 6px -1px rgba(60,60,80,.06)",
          WebkitBackdropFilter: "blur(16px)",
          backdropFilter: "blur(16px)",
        }}
      >
        {/* Per-icon lighting sweep effect */}
        <div
          className="absolute inset-0 animate-light-sweep opacity-30"
          style={{
            background: `linear-gradient(90deg, transparent 0%, #33993380 50%, transparent 100%)`,
            animationDelay: `${0.5}s`,
          }}
        />
        <Sparkle size={18} className=" rotate-45 " />+{experienceNum}
        <span className=" text-base font-normal text-gray-500 dark:text-gray-200/70 opacity-80">
          years experience
        </span>
      </span>
    );
  };

  return (
    <div>
      <h1 className="text-center text-4xl my-12 font-bold">About Me</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        {/* Icons Section */}
        <section className="flex justify-center lg:justify-start lg:sticky top-22">
          <IconComponents />
        </section>

        {/* Content Section */}
        <section id="about" className="lg:col-span-2 space-y-8">
          {/* Experience Badge */}
          <div className="flex justify-center lg:justify-start">
            {calculateExperience()}
          </div>

          {/* About Content */}
          <div className="space-y-6 text-white">
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              I don&apos;t just write code — I build{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
                scalable digital experiences
              </span>
              .
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                I&apos;m a Front-End Web Developer specialized in{" "}
                <strong className="text-indigo-300">React.js</strong> and{" "}
                <strong className="text-indigo-300">Next.js</strong>, with
                hands‑on experience building real‑world applications for
                companies and freelance clients. I&apos;ve worked on projects of
                different sizes and across multiple fields — from dashboards and
                SaaS platforms to e‑commerce and internal enterprise systems.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                My main focus is writing clean, maintainable code and designing
                front‑end architectures that scale as products grow. I care
                deeply about performance, user experience, SEO, and long‑term
                project stability.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {featureCards.map((card, index) => (
                <div
                  key={index}
                  className={`group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-${card.borderColor}-500/40 hover:bg-white/10 transition-all duration-300`}
                >
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    {card.title}
                  </h3>
                  <ul className="space-y-2.5 text-sm text-gray-300">
                    {card.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start !justify-start gap-2"
                      >
                        <span className={`text-${card.bulletColor} mt-1`}>
                          ▸
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Hire Component */}
            <div className="pt-4">
              <Hire />
            </div>
          </div>
        </section>
      </div>

      <WorkJourney />
    </div>
  );
}
