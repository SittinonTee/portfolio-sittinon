"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Terminal, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: <Terminal className="w-5 h-5 text-foreground" />,
    skills: [
      "TypeScript / JavaScript",
      "Dart",
      "Python (basic)",
      "Java",
      "SQL",
      "HTML / CSS",
    ],
  },
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5 text-foreground" />,
    skills: [
      "Next.js / React",
      "Nuxt.js / Vue.js",
      "Flutter",
      "Tailwind CSS / shadcn/ui",
      "Vuetify",
    ],
  },
  {
    title: "Backend & Database",
    icon: <Database className="w-5 h-5 text-foreground" />,
    skills: [
      "Node.js / Express.js",
      "MySQL",
      "PostgreSQL",
      "TiDB Cloud",
      "Prisma ORM",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <Wrench className="w-5 h-5 text-foreground" />,
    skills: ["Git", "Docker", "Vercel / Render", "Postman", "Figma"],
  },
];

export function Skills() {
  return (
    <div
      className="relative w-full h-full flex flex-col scroll-mt-32"
      id="skills"
    >
      <div className="w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-secondary rounded-2xl mb-4 border border-border">
            <Code2 className="w-8 h-8 text-foreground" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-foreground/20 overflow-hidden shadow-sm"
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-background rounded-xl border border-border">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-3 mt-auto">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mr-3 group-hover:bg-primary transition-colors" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
