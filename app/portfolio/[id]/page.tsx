import { IProject } from "@/interfaces/portfolio";
import Image from "next/image";
import { projects } from "../portfolio.json";
import { ArrowRightIcon } from "lucide-react";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const project = projects.find((p: IProject) => p.id === id);
  return {
    title: project ? project.title : "Project Not Found",
    description: project
      ? project.seoDescription
      : "Project details not available",
  };
}

export default async function ProjectDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const project = projects.find((p: IProject) => p.id === id);

  const hasLink = project?.link || project?.demo;
  const gtText = hasLink ? (project?.link ? "View Project" : "View Demo") : "";
  const gtHref = hasLink ? (project?.link ? project.link : project?.demo) : "";

  if (!project)
    return <div className="text-center text-white p-10">Project not found</div>;

  return (
    <div className="min-h-screen px-2 md:px-4 lg:px-10 py-10 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl px-4 md:px-6 lg:px-10 py-10 shadow-2xl">
          <div className="flex justify-between items-center gap-4 mb-4">
            <h1 className="text-2xl md:text-4xl font-bold flex-1 ">{project.title}</h1>

            {hasLink && (
              <section className="md:w-34  flex !justify-end">
                <a
                  href={gtHref || "/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 rounded-full flex items-center !justify-center bg-emerald-300/50 border border-emerald-200/20 backdrop-blur-lg overflow-hidden transition-all duration-300 md:hover:w-34"
                >
                  <span className="flex items-center justify-center group-hover:gap-3 gap-0 transition-all duration-300">
                    <span className="opacity-0 ml-0 max-w-0 overflow-hidden group-hover:opacity-100 group-hover:ml-3 group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-sm">
                      {gtText}
                    </span>
                    <ArrowRightIcon className="w-5 h-5 rotate-315 transition-all duration-300" />
                  </span>
                </a>
              </section>
            )}
          </div>

          <Image
            src={project.thumbnail}
            width={1200}
            height={600}
            alt={project.title}
            className="rounded-2xl mb-6 object-cover"
          />

          <p className="text-white/70 text-lg mb-6">{project.description}</p>

          <h2 className="text-2xl font-semibold mb-2">Key Contributions</h2>
          <ul className="list-disc list-inside mb-6 text-white/80 space-y-1">
            {project.contributions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-2">Technologies</h2>
          <div className="flex flex-wrap gap-2 mb-6 !justify-start">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-xl bg-white/20 border border-white/30 text-sm backdrop-blur-md"
              >
                {t}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.screenshots.map((src, i) => (
              <Image
                key={i}
                src={src}
                width={600}
                height={400}
                alt={project.title + " screenshot " + i}
                className="rounded-xl border border-white/10"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
