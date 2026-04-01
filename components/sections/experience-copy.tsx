"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Code, Database, Globe } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer — RSU Job Fair",
    company: "Rangsit University",
    date: "Jan 2026 \u2013 Feb 2026",
    description: [
      "Developed a full-stack Job Fair web platform supporting 3 user roles (Candidate, Company, Admin).",
      "Designed and implemented a complete authentication system (registration, login, session management) using Better Auth with Role-Based Access Control.",
      "Developed a Company Dashboard covering company profile management, job posting, candidate-job matching system, and application management.",
      "Implemented file upload management via AWS S3 (S3-Compatible Storage) for profile images, company logos, verification documents, and resume PDFs.",
      "Containerized the application using Docker for production deployment readiness.",
    ],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "AWS S3",
      "Docker",
    ],
    icon: <Globe className="h-5 w-5 text-purple-400" />,
  },
  {
    role: "Full Stack Developer \u2014 Leave Management System",
    company: "iRecruit (Thailand) Co., Ltd.",
    date: "Nov 2025 \u2013 Jan 2026",
    description: [
      "Developed a full-stack leave management system following the Controller-Service pattern.",
      "Developed an HR admin dashboard for organization-wide leave quota management, real-time balance tracking, and modification history logging.",
      "Collaborated with cross-functional development teams, integrating shared APIs and databases to ensure the leave module operates seamlessly within the broader HR platform.",
    ],
    techStack: ["Nuxt.js", "Vuetify", "Node.js (Express)", "MySQL"],
    icon: <Database className="h-5 w-5 text-green-400" />,
  },
];

export function ExperienceCopy() {
  return (
    <section
      className="relative w-full py-24 bg-black overflow-hidden"
      id="experience"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,var(--tw-gradient-stops))] from-blue-900/20 via-black to-black opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400 mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm group hover:border-zinc-700 transition-colors"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                {exp.icon}
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {exp.role}
                  </h3>
                  <div className="flex items-center text-zinc-400 gap-2 font-medium">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-400 gap-2 mt-4 md:mt-0 bg-blue-900/20 px-4 py-2 rounded-full border border-blue-900/50">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.date}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 text-zinc-300">
                {exp.description.map((desc) => (
                  <li key={desc} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span className="leading-relaxed text-sm md:text-base">
                      {desc}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800 rounded-md border border-zinc-700 flex items-center gap-1.5"
                  >
                    <Code className="w-3 h-3 text-zinc-500" />
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
