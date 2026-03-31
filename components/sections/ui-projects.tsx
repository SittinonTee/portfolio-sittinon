"use client";

import { motion } from "framer-motion";
import { Layers, Smartphone } from "lucide-react";
import Image from "next/image";

const uiProjects = [
  {
    title: "Salad Selling App UI",
    thaiTitle: "\u0e02\u0e32\u0e22\u0e2a\u0e25\u0e31\u0e14",
    description:
      "A fresh and vibrant user interface design for a healthy food delivery application, focusing on clean typography and appetizing imagery.",
    icon: <Layers className="w-8 h-8 text-green-400" />,
    color: "from-green-500/20 to-emerald-900/20",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Mobile Tax Application",
    thaiTitle: "Mobile tax",
    description:
      "A professional, trustworthy mobile app interface designed to make tax filing and financial tracking intuitive and stress-free for everyday users.",
    icon: <Smartphone className="w-8 h-8 text-blue-400" />,
    color: "from-blue-500/20 to-sky-900/20",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
  },
];

export function UIProjects() {
  return (
    <section
      className="relative w-full py-24 bg-background overflow-hidden"
      id="ui-projects"
    >
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-cyan-400 mb-4">
            UI / UX Design
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Crafting beautiful, intuitive interfaces that enhance user
            experience and engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {uiProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-3xl overflow-hidden border border-border bg-card group-hover:border-foreground/20 transition-colors">
                {/* Image Showcase */}
                <div className="relative h-64 md:h-80 w-full overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-linear-to-b ${project.color} mix-blend-overlay z-10 group-hover:opacity-50 transition-opacity`}
                  />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4 z-20 p-3 bg-background/50 backdrop-blur-md rounded-2xl border border-border shadow-xl">
                    {project.icon}
                  </div>
                </div>

                {/* Details */}
                <div className="p-8 relative">
                  <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent" />

                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
                      {project.thaiTitle}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-6 flex items-center text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                    View Case Study
                    <motion.span
                      className="ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      &rarr;
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
