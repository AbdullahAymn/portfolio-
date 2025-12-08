interface IPageTitle {
  title: string;
  desc: string;
}
export default function PageTitle({ title, desc }: IPageTitle) {
  return (
    <div className="text-center mt-2 mb-8">
      <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg mb-3 tracking-tight">
        {title}
      </h1>
      <p className="max-w-md mx-auto text-base sm:text-lg text-white/80 font-normal mt-2 mb-2">
        {desc}
      </p>
      <div className="mx-auto mt-2 mb-2 h-1 w-16 bg-gradient-to-r from-emerald-300 via-blue-400 to-blue-300 rounded-full"></div>
    </div>
  );
}
