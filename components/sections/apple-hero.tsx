"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { useState } from "react";
import { ResumeModal } from "../resume-modal";

interface AppleHeroProps {
  title: string;
  subtitleEng: string;
}

export function AppleHero({ title, subtitleEng }: AppleHeroProps) {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-background">
      {/* CSS Animation for the Titanium Shine */}
      <style>{`
        :root {
          --hero-g1: #0d9488;
          --hero-g2: #0891b2;
          --hero-g3: #1e40af;
        }

        .dark {
          --hero-g1: #d3f3eb;
          --hero-g2: #90c5c6;
          --hero-g3: #466c82;
        }

        .gradient-text {
          background: linear-gradient(
            90deg,
            var(--hero-g1) 0%,
            var(--hero-g2) 50%,
            var(--hero-g3) 100%
          );
          -webkit-background-clip: text;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
      `}</style>

      {/* Deep black void background with a very subtle bottom glow */}
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[60vw] h-[30vh] bg-foreground/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 md:mb-8"
        >
          <span className="text-muted-foreground font-semibold tracking-widest text-xs md:text-base uppercase mb-4 md:mb-8 block">
            Meet the Developer
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[8rem] font-bold tracking-tighter leading-[1.1] md:leading-none gradient-text pb-4 px-2">
            {title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 px-4"
        >
          {/* <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-medium tracking-tight max-w-3xl mx-auto leading-relaxed">
            {subtitleThai}
          </p> */}
          <p className="text-base md:text-xl lg:text-2xl text-muted-foreground font-medium tracking-tight max-w-2xl mx-auto leading-relaxed opacity-80">
            {subtitleEng}
          </p>
        </motion.div>

        {/* Call to action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 mt-16"
        >
          <a
            href="#experience"
            className="px-10 py-4 rounded-full bg-foreground text-background font-semibold text-lg hover:scale-105 active:scale-95 transition-transform duration-300"
          >
            Work Experience
          </a>
          {/* <a
            href="#projects"
            className="px-10 py-4 rounded-full bg-secondary border border-border text-secondary-foreground font-semibold text-lg hover:bg-secondary/80 transition-colors duration-300 flex items-center justify-center gap-2 group"
          >
            Explore Projects
            <span className="group-hover:translate-x-1 transition-transform inline-block">
              →
            </span>
          </a> */}
          <button
            type="button"
            onClick={() => setIsResumeOpen(true)}
            className="px-10 py-4 rounded-full bg-secondary border border-border text-secondary-foreground font-semibold text-lg hover:bg-secondary/80 transition-colors duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <FileText className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            Resume
          </button>
        </motion.div>
      </div>

      {/* Subtle bottom line separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-background via-border to-background z-10" />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </section>
  );
}
