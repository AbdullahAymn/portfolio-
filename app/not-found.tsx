"use client";

import Link from "next/link";
import { SearchX, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-4">
      <div className="relative w-full max-w-md border mx-auto rounded-2xl shadow-md shadow-white">
        {/* Card with backdrop blur and glass effect */}
        <div className="shadow-md backdrop-blur-sm bg-white/20 dark:bg-black/20 rounded-2xl p-8 md:p-12 border border-white/10 dark:border-white/5">
          {/* Animated Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <SearchX
                className="w-24 h-24 text-foreground animate-pulse"
                strokeWidth={1.5}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-2 border-foreground/20 animate-ping" />
              </div>
            </div>
          </div>

          {/* Error Code */}
          <div className="text-center mb-4">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-2">
              404
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-foreground/50 to-transparent mx-auto mb-4" />
          </div>

          {/* Error Message */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Page Not Found
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Oops! The page you're looking for seems to have wandered off into
              the digital void. It might have been moved, deleted, or perhaps it
              never existed in the first place.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Home className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Go Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="group flex items-center justify-center gap-2 px-6 py-3 border border-foreground/20 rounded-lg font-medium transition-all duration-300 hover:bg-foreground/10 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Go Back</span>
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-foreground/5 rounded-full blur-xl -z-10 animate-pulse" />
        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-foreground/5 rounded-full blur-xl -z-10 animate-pulse-delay" />
      </div>
    </div>
  );
}
