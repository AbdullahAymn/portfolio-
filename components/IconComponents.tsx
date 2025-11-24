import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";

interface IconData {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const icons: IconData[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
];

export default function IconComponents() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl p-6 md:p-8">
      

      {/* List of icons in flex layout */}
      <div className="flex flex-wrap gap-4 md:gap-6 !justify-center items-center relative z-10">
        {icons.map((iconData, index) => {
          const Icon = iconData.icon;

          return (
            <div
              key={iconData.name}
              className="relative group animate-pulse"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: "2s",
              }}
            >
              {/* Individual container for each icon */}
              <div className="relative p-4 lg:p-6 border-2 rounded-2xl shadow-sm shadow-[#c0acacd3] backdrop-blur-xs bg-white/10 dark:bg-black/10 animate-border-shine overflow-hidden">
                {/* Per-icon lighting sweep effect */}
                <div
                  className="absolute inset-0 animate-light-sweep opacity-30"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, ${iconData.color}80 50%, transparent 100%)`,
                    animationDelay: `${index * 0.5}s`,
                  }}
                />

                <div
                  className="relative z-10"
                  style={{
                    width: "64px",
                    height: "64px",
                    color: iconData.color,
                  }}
                >
                  <Icon className="w-full h-full transition-all duration-300 group-hover:scale-110" />
                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 opacity-30 blur-xl -z-10 group-hover:opacity-50 transition-opacity duration-300"
                    style={{ backgroundColor: iconData.color }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
