import ContactForm from "@/components/ContactForm";
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
      <ContactForm />
    </div>
  );
}
