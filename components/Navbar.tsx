"use client";

import { motion } from "framer-motion";
import { ArrowRight, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

// const navLinks = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About" },
//   { href: "/contact", label: "Contact" },
// ];
const navTitles = ["About", "Experience", "Projects", "Education", "Skills"];

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="items-center px-6 lg:px-8 fixed top-0 left-0 right-0 z-50"
    >
      <div className="flex h-16 items-center justify-between">
        {/* Brand Name Only */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-foreground">
            Sittinon.dev
          </span>
        </div>

        {/* Glassmorphic Navigation Pills */}
        <div className="hidden md:flex items-center space-x-1 rounded-full bg-foreground/5 backdrop-blur-xl border border-border p-1 -mr-6">
          {navTitles.map((title) => (
            <Link
              key={title}
              href={`#${title.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/90 transition-all hover:bg-foreground/10 hover:text-foreground"
            >
              {title}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex rounded-full relative text-foreground"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button
            size="sm"
            className="bg-button-bg hover:bg-button-hover text-white rounded-full px-5 transition-all"
          >
            Contact
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
