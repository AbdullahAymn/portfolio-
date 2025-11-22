import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/Header";
import Particles from "./components/Particles/Particles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdullah Ayman - Web Developer Portfolio",
  description:
    "Professional web developer portfolio showcasing innovative web solutions, modern technologies, and creative digital experiences. Explore my projects, skills, and expertise in web development.",
  keywords: [
    "web developer",
    "portfolio",
    "Abdullah Ayman",
    "web development",
    "frontend developer",
    "full stack developer",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Abdullah Ayman" }],
  creator: "Abdullah Ayman",
  icons: {
    icon: "/Abdullah-vector.png",
    apple: "/Abdullah-vector.png",
  },
  openGraph: {
    title: "Abdullah Ayman - Web Developer Portfolio",
    description:
      "Professional web developer portfolio showcasing innovative web solutions, modern technologies, and creative digital experiences.",
    url: "https://portfolio-abdullahaymn.vercel.app",
    siteName: "Abdullah Ayman Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/Abdullah-vector.png",
        width: 1200,
        height: 630,
        alt: "Abdullah Ayman - Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Ayman - Web Developer Portfolio",
    description:
      "Professional web developer portfolio showcasing innovative web solutions and modern technologies.",
    creator: "@abdullahayman",
    images: ["/Abdullah-vector.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor />
        <ScrollToTop />
        {/* Particles Background - Fixed behind all content */}
        <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
          <Particles
            particleColors={["#26a77d", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        {/* Main Content - Above particles */}
        <div className="relative flex flex-col min-h-screen z-10 ">
          <NavBar />
          <main className="flex-1 p-[10px]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
