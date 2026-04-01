"use client";
import {
  ArrowUpRight,
  Code2,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type React from "react";
import type { ComponentProps, ReactNode } from "react";

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: "Navigation",
    links: [
      { title: "Home", href: "#" },
      { title: "Experience", href: "#experience" },
      { title: "Projects", href: "#projects" },
      { title: "Skills", href: "#skills" },
      { title: "Education", href: "#education" },
    ],
  },
  {
    label: "Contact",
    links: [
      {
        title: "sittinon.pc@gmail.com",
        href: "mailto:sittinon.pc@gmail.com",
        icon: Mail,
      },
      { title: "063-416-9328", href: "tel:063-416-9328", icon: Phone },
      { title: "Bangkok, Thailand", href: "#", icon: MapPin },
    ],
  },
  {
    label: "Connect",
    links: [
      { title: "GitHub", href: "https://github.com/SittinonTee", icon: Github },
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/sittinon-chanprathum/",
        icon: Linkedin,
      },
    ],
  },
];

export function Footer() {
  return (
    <section className="w-full bg-background" id="contact">
      <footer className="relative w-full mx-auto flex flex-col items-center justify-center rounded-t-[3rem] border-t border-border/50 dark:bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)] bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.black/5%),transparent)] px-6 py-12 lg:py-20 overflow-hidden">
        {/* Subtle glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <AnimatedContainer className="space-y-6 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                <Code2 className="size-6 text-primary" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Sittinon.dev
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              A software developer dedicated to learning new technologies and
              crafting lasting digital value.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold hover:bg-secondary/80 transition-colors border border-border"
              >
                <FileText className="size-3.5" />
                View Resume
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </AnimatedContainer>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:col-span-1 lg:col-span-3">
            {footerLinks.map((section, index) => (
              <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                <div className="space-y-6">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/50">
                    {section.label}
                  </h3>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        <a
                          href={link.href}
                          target={
                            link.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            link.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                        >
                          {link.icon && (
                            <link.icon className="mr-2.5 size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          )}
                          <span className="relative">
                            {link.title}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-8 w-full border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs font-medium">
            © {new Date().getFullYear()} Sittinon Chanprathum. Built with
            Next.js & Tailwind.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest bg-secondary/50 px-3 py-1 rounded-full border border-border/50">
              Handcrafted with ❤️
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return children;
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
