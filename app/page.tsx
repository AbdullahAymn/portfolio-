import Card from "@/components/Card";
import Image from "next/image";
import profile from "@/assets/images/abdullah.webp";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Hero Section Card */}
      <Card>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Profile Image Section */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1 ">
            <div className="relative group mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-purple-500 to-green-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse" />
              <Image
                src={profile}
                alt="ABDULLAH AYMAN"
                width={240}
                height={240}
                loading="eager"
                draggable={false}
                className="relative rounded-full shadow-2xl border-4 border-white/80 dark:border-white/30 outline outline-[5px] outline-[#7c5cdb] outline-offset-4 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(124,92,219,0.6)]"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(ellipse 99% 93% at 54% 60%, white 98%, transparent 100%)",
                  maskImage:
                    "radial-gradient(ellipse 99% 93% at 54% 60%, white 98%, transparent 100%)",
                }}
              />
            </div>
          </div>

          {/* Hero Content Section */}
          <div className="lg:col-span-2 order-1 lg:order-2 text-center lg:text-left">
            <p className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-green-400 bg-indigo-500/10 dark:bg-indigo-900/30 px-4 py-2 rounded-full mb-6 border border-indigo-500/20">
              React • Next.js • Front‑End Developer
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6">
              Hi, I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 animate-gradient">
                Abdullah Ayman
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-700 dark:text-gray-300">
              I build{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500">
                high‑performance
              </span>{" "}
              web apps that scale.
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed mx-auto lg:mx-0">
              Front‑End Developer specialized in{" "}
              <strong className="text-indigo-600 dark:text-indigo-400">
                React
              </strong>{" "}
              and{" "}
              <strong className="text-indigo-600 dark:text-indigo-400">
                Next.js
              </strong>
              . I turn complex ideas into clean, fast, and SEO‑friendly
              interfaces — used in startups, enterprise dashboards and freelance
              projects.
            </p>

            <div
              style={{ justifyContent: "center" }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 active:scale-95 transition-all duration-200 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:shadow-indigo-500/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Let&apos;s talk
              </Link>

              <a
                href="/Abdullah-Ayman-Resume.pdf"
                className="inline-flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 hover:border-indigo-500 dark:hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                download
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </Card>

      {/* Skills & Expertise Card */}
      <Card>
        <div className="mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">
            Skills & Expertise
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Technologies and practices I specialize in
          </p>
        </div>
        <ul className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "React & Next.js",
            "TypeScript & JavaScript",
            "State Management",
            "Micro Frontends",
            "Performance & Lazy Loading",
            "SEO‑Friendly Apps",
            "Auth & Secure State",
            "Clean Architecture",
            "Responsive & Mobile-first Design",
            "UI/UX Best Practices",
            "Tailwind CSS & Styled Components",
            "Internationalization (i18n)",
          ].map((skill, index) => (
            <li
              key={index}
              className="flex items-center !justify-start gap-3 p-4 rounded-xl bg-gradient-to-br from-white/50 to-white/10 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200/50 dark:border-gray-700/50 hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
            >
              <span className="w-3 h-3 rounded-full bg-gradient-to-r from-rose-400 to-indigo-400 flex-shrink-0 animate-pulse" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
