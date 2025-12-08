interface IInfoLabel {
  onClick?: () => void;
  title: string;
  value: string;
  icon: React.ElementType;
}

export default function InfoLabel({ onClick, title, value, icon: Icon }: IInfoLabel) {
  return (
    <section
      onClick={() => onClick?.()}
      title={title}
      className="cursor-pointer p-4 rounded-2xl shadow-2xl shadow-white/10 border text-white flex items-center !justify-start gap-2"
    >
      <Icon className="text-[#26a77d] text-14 md:text-48" />
      <p className="text-base md:text-xl">{value}</p>
    </section>
  );
}
