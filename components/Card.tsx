import { ReactNode } from "react";

export default function Card({
  children,
  width = "100%",
}: {
  children: ReactNode;
  width?: string;
}) {
  return (
    <div
      className="group relative p-8 lg:p-12 border-2 mx-auto rounded-2xl shadow-md shadow-[#c0acacd3] 
                 backdrop-blur-md bg-white/10 dark:bg-black/10 my-6 overflow-hidden
                 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl 
                 hover:shadow-[#c0acacd3]/50 dark:hover:shadow-[#c0acacd3]/30
                 animate-border-shine"
      style={{ width }}
    >
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
