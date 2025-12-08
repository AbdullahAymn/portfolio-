import ProjectCard from "@/components/portfolio/ProjectCard";
import { projects } from "./portfolio.json";
import { Metadata } from "next";
import PageTitle from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "Projects | Abdullah Ayman",
  description:
    "Explore my portfolio of real-world projects built with React, Next.js, and modern web technologies. Fast, scalable, and production-ready applications.",
  keywords: [
    "portfolio projects",
    "web development projects",
    "React portfolio",
    "Next.js projects",
    "frontend developer work",
    "Abdullah Ayman portfolio",
  ],
  openGraph: {
    title: "My Projects | Web Developer Portfolio",
    description:
      "A collection of scalable, production-ready web apps built using React and Next.js.",
    url: "https://portfolio-abdullahaymn.vercel.app/projects",
    siteName: "Abdullah Ayman Portfolio",
    type: "website",
    images: ["/Abdullah-vector.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Projects | Abdullah Ayman",
    description:
      "A showcase of real-world React & Next.js applications I developed.",
    images: ["/Abdullah-vector.png"],
  },
  robots: { index: true, follow: true },
};

export default function page() {
  return (
    <div>
      <PageTitle
        title="My Projects Portfolio"
        desc="Explore a curated collection of web applications and real-world projects built with React, Next.js, and modern technologies. Fast, scalable, and crafted with best practices and care."
      />

      <div className="min-h-screen px-2 md:px-4 lg:px-10 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
