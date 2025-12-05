import { IProject } from "@/interfaces/portfolio";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: IProject }) {
  const hasLink = project.link || project.demo;
  const gtText = hasLink ? (project.link ? "View Project" : "View Demo") : "";
  const gtHref = hasLink ? (project.link ? project.link : project.demo) : "";

  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-xl hover:bg-white/20 transition-all duration-300 flex flex-col gap-2 justify-between">
      <div>
        <Image
          width={1200}
          height={600}
          src={project.thumbnail}
          alt={project.title}
          className="rounded-2xl mb-4 object-cover w-full h-48"
          loading="lazy"
        />

        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="text-sm text-white/70 mb-4">{project.shortDescription}</p>
      </div>
      <div className="flex items-center !justify-center mt-4 gap-6">
        <Link
          href={`/portfolio/${project.id}`}
          className="group relative w-10 h-10 rounded-full flex items-center !justify-center bg-blue-400/40 border border-blue-200/20 backdrop-blur-lg overflow-hidden transition-all duration-300 hover:w-34"
        >
          <span className="flex items-center justify-center group-hover:gap-3 gap-0 transition-all duration-300">
            <span className="opacity-0 ml-0 max-w-0 overflow-hidden group-hover:opacity-100 group-hover:ml-3 group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-sm">
              More Details
            </span>
            <ArrowRightIcon className="w-5 h-5 transition-all duration-300" />
          </span>
        </Link>

        {hasLink && (
          <a
            href={gtHref || "/"}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-10 h-10 rounded-full flex items-center !justify-center bg-emerald-300/50 border border-emerald-200/20 backdrop-blur-lg overflow-hidden transition-all duration-300 hover:w-34"
          >
            <span className="flex items-center justify-center group-hover:gap-3 gap-0 transition-all duration-300">
              <span className="opacity-0 ml-0 max-w-0 overflow-hidden group-hover:opacity-100 group-hover:ml-3 group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-sm">
                {gtText}
              </span>
              <ArrowRightIcon className="w-5 h-5 rotate-315 transition-all duration-300" />
            </span>
          </a>
        )}
      </div>
    </div>
  );
}
