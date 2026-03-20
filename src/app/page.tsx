"use client";

import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ArrowRight, Play, Activity } from "lucide-react";

export default function LandingPage() {
  const { t } = useTranslation("landing");
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background subtle zoom
      gsap.fromTo(
        ".bg-gradient-animate",
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.5, ease: "power3.out" }
      );

      // staggered text elements
      gsap.fromTo(
        ".hero-element",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.3,
        }
      );

      // Icon float animation
      gsap.to(".floating-icon", {
        y: -10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 2,
        stagger: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-background text-foreground"
    >
      {/* Dynamic Background */}
      <div className="bg-gradient-animate absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background" />

      {/* Decorative Icons in Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <Activity className="floating-icon absolute top-[20%] left-[15%] w-24 h-24 text-blue-500" />
        <Play className="floating-icon absolute top-[60%] right-[15%] w-16 h-16 text-emerald-500" />
      </div>

      <div className="relative z-10 container flex flex-col items-center justify-center px-6 text-center lg:px-12">
        {/* Title Section */}
        <div className="hero-element mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          AI Powered Fitness
        </div>

        <h1 className="hero-element text-5xl md:text-7xl font-extrabold tracking-tight mb-8 max-w-4xl text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 drop-shadow-sm">
          {t("title_1")} {t("title_2")}
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300">
            {t("title_highlight")}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-element text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl font-light">
          {t("subtitle")}
        </p>

        {/* Call to Actions (CTA) */}
        <div className="hero-element flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="group relative flex h-14 w-full sm:w-64 items-center justify-center gap-2 overflow-hidden rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_40px_8px_rgba(59,130,246,0.3)]">
            <span className="relative z-10 flex items-center gap-2">
              {t("cta_primary")}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          
          <button className="flex h-14 w-full sm:w-64 items-center justify-center gap-2 rounded-xl border border-gray-700 bg-gray-900/50 px-6 py-3 font-semibold text-gray-300 backdrop-blur-sm transition-all hover:border-gray-500 hover:bg-gray-800 hover:text-white">
            {t("cta_secondary")}
          </button>
        </div>
      </div>
    </main>
  );
}
