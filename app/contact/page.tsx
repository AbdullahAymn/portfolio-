import ContactForm from "@/components/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me | Abdullah Ayman – Front-End Developer",
  description:
    "Get in touch with Abdullah Ayman for collaborations, freelance work, or hiring opportunities. Front-End Developer specialized in React & Next.js.",
  keywords: [
    "contact Abdullah Ayman",
    "hire front-end developer",
    "React developer contact",
    "Next.js developer Egypt",
    "web developer hire",
  ],
  openGraph: {
    title: "Contact Me | Front-End Developer",
    description:
      "Reach out for freelance projects, job opportunities, or technical collaborations.",
    url: "https://portfolio-abdullahaymn.vercel.app/contact",
    type: "website",
    images: ["/Abdullah-vector.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Abdullah Ayman",
    description:
      "Contact a React & Next.js Front-End Developer for work opportunities or collaborations.",
    images: ["/Abdullah-vector.png"],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <div>
      <div className="text-center my-8">
        <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg mb-3 tracking-tight">
          Get in Touch
        </h1>
        <p className="max-w-md mx-auto text-base sm:text-lg text-white/80 font-normal mt-2 mb-2">
          Let’s connect — send me a message!
        </p>
        <div className="mx-auto mt-2 mb-2 h-1 w-16 bg-gradient-to-r from-emerald-300 via-blue-400 to-blue-300 rounded-full"></div>
      </div>
      <ContactForm />
    </div>
  );
}
