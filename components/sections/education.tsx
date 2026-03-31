"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Rangsit University",
    period: "2023 \u2013 Present",
    degree: "College of Digital Innovation Technology : Computer Science",
    details: "GPA: 3.82",
    icon: <GraduationCap className="w-5 h-5 text-foreground" />,
  },
  {
    institution: "Wangchanwittaya School",
    period: "2017 \u2013 2022",
    degree: "Science-Mathematics Program",
    details: "GPA: 3.99",
    icon: <BookOpen className="w-5 h-5 text-foreground" />,
  },
];

export function Education() {
  return (
    <div
      className="relative w-full h-full flex flex-col scroll-mt-32"
      id="education"
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
            <Award className="w-8 h-8 text-foreground" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Educational Journey
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative mt-8">
          {/* Timeline Vertical Line (Desktop) */}
          <div className="hidden lg:block absolute left-[30%] top-0 bottom-0 w-px bg-border" />

          {/* Timeline Vertical Line (Mobile) */}
          <div className="lg:hidden absolute left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col lg:flex-row lg:items-start group"
              >
                {/*Left Column (Desktop Date) */}
                <div className="hidden lg:flex flex-col items-end justify-start w-[30%] pr-8 pt-1.5">
                  <span className="text-[13px] font-semibold text-[#f771fc] uppercase tracking-widest bg-secondary px-4 py-1.5 rounded-full border border-border inline-block">
                    {edu.period}
                  </span>
                </div>

                {/*Center Node (Dot) */}
                <div className="absolute left-[-5px] lg:left-[calc(30%-20px)] top-[2px] lg:top-0 w-10 h-10 rounded-full bg-background border-2 border-border flex items-center justify-center z-10 group-hover:border-foreground transition-all duration-300">
                  {edu.icon}
                </div>

                {/*Right Column (Content Card) */}
                <div className="w-full lg:w-[70%] pl-10 lg:pl-10">
                  {/* Mobile Date (Visible only on mobile) */}
                  <div className="lg:hidden inline-block mb-3">
                    <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider bg-secondary px-3 py-1 rounded-full border border-border">
                      {edu.period}
                    </span>
                  </div>

                  <div className="relative rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:border-foreground/20 overflow-hidden shadow-sm">
                    <div className="relative z-10">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        {edu.institution}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 lg:text-[15px] font-medium opacity-90">
                        {edu.degree}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 w-fit px-3 py-2 rounded-xl bg-secondary border border-border/50">
                        <span className="text-xs font-bold text-foreground tracking-wide uppercase">
                          Achievement
                        </span>
                        <div className="hidden sm:block w-px h-3 bg-border" />
                        <span className="text-[13px] sm:text-sm font-semibold text-[#3aa6ff]">
                          {edu.details}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
