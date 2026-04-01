"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// 1. เตรียมข้อมูล (ใส่รูปภาพจริงของคุณตรง property 'image')
const projects = [
  {
    id: "rsu-job-fair",
    title: "RSU Job Fair Platform",
    // 1. แยก Eng และ Thai ให้เหมือนกับ Object ด้านล่าง
    descriptionEng:
      "Developed a full-stack job fair platform supporting Candidate, Company, and Admin roles. Built securely with Next.js (App Router), TypeScript, Prisma, and PostgreSQL.",
    descriptionThai:
      "RSU Job Fair คือแพลตฟอร์มศูนย์กลางที่เชื่อมโยงนักศึกษามหาวิทยาลัยรังสิตเข้ากับองค์กรชั้นนำ รวบรวมฟีเจอร์สำคัญไว้ครบครัน ทั้งการสร้างโปรไฟล์เรซูเม่ ค้นหาตำแหน่งงาน ไปจนถึงการติดตามสถานะการสมัครและการนัดหมายสัมภาษณ์",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Better Auth",
      "Docker",
    ],
    href: "/projects/rsu-job-fair",
    dates: "Jan 2026 - Feb 2026",
    images: [
      "/images/work/rsu/1.png",
      "/images/work/rsu/2.png",
      "/images/work/rsu/3.png",
      "/images/work/rsu/4.png",
      "/images/work/rsu/5.png",
      "/images/work/rsu/6.png",
      "/images/work/rsu/7.png",
      "/images/work/rsu/8.png",
      "/images/work/rsu/9.png",
      "/images/work/rsu/10.png",
      "/images/work/rsu/11.png",
      "/images/work/rsu/12.png",
      "/images/work/rsu/13.png",
      "/images/work/rsu/14.png",
      "/images/work/rsu/15.png",
      "/images/work/rsu/16.png",
      "/images/work/rsu/17.png",
      "/images/work/rsu/18.png",
      "/images/work/rsu/19.png",
      "/images/work/rsu/20.png",
      "/images/work/rsu/21.png",
      "/images/work/rsu/22.png",
    ],
  },

  {
    id: "leave-system",
    title: "Leave Management System",
    descriptionEng:
      "Developed a comprehensive Leave Management System featuring an employee portal for requests and an HR admin dashboard. Key features include organization-wide leave quota management, real-time balance tracking, and modification history logging.",
    descriptionThai:
      "พัฒนาระบบจัดการการลางานแบบครบวงจร ที่รองรับทั้งฝั่งพนักงาน (Employee Portal) ในการยื่นคำร้อง และฝั่ง HR แอดมิน (Admin Dashboard) ในการจัดการข้อมูล ฟีเจอร์หลักครอบคลุมตั้งแต่การจัดการโควตาวันลาของทั้งองค์กร, การแสดงยอดวันลาคงเหลือแบบเรียลไทม์ (Real-time tracking) ไปจนถึงการเก็บบันทึกประวัติการแก้ไขข้อมูลอย่างเป็นระบบ",
    technologies: [
      "Nuxt.js",
      "Vue.js",
      "Vuetify",
      "Node.js",
      "Express",
      "MySQL",
      "Docker",
    ],
    href: "/projects/leave-system", // (Optional) ถ้ามีหน้า detail หรือ Github
    dates: "2023 - 2024",
    images: [
      "/images/work/leave/1.png",
      "/images/work/leave/2.png",
      "/images/work/leave/3.png",
      "/images/work/leave/4.png",
      "/images/work/leave/5.png",
      "/images/work/leave/6.png",
      "/images/work/leave/7.png",
    ],
  },
];

export function Experience() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFullscreen]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally reset timer on manual click
  useEffect(() => {
    const currentImages = projects[activeFeature].images || [];
    if (currentImages.length <= 1) return;

    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % currentImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeFeature, activeImageIndex]);

  const handleFeatureChange = (index: number) => {
    if (index !== activeFeature) {
      setActiveFeature(index);
      setActiveImageIndex(0);
    }
  };

  return (
    <section
      className="relative w-full py-24 bg-background overflow-hidden"
      id="experience"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-foreground to-muted-foreground mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="w-full bg-card rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col-reverse lg:flex-row gap-8 items-center border border-border shadow-2xl overflow-hidden relative">
          {/* ฝั่งซ้าย: เมนู Accordion */}
          <div className="w-full lg:w-5/12 flex flex-col gap-3 z-10">
            {projects.map((project, index) => {
              const isActive = activeFeature === index;

              return (
                <motion.div
                  layout
                  transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                  key={project.id}
                  onClick={() => handleFeatureChange(index)}
                  className={`cursor-pointer overflow-hidden ${
                    isActive
                      ? "bg-secondary p-6 rounded-3xl w-full shadow-xl"
                      : "flex items-center gap-3 px-5 py-3.5 rounded-full bg-transparent hover:bg-secondary/50 text-muted-foreground hover:text-foreground w-fit"
                  }`}
                  style={{ originX: 0 }}
                >
                  {isActive ? (
                    // สถานะเมื่อถูกเลือก (กล่องข้อความใหญ่)
                    <motion.div
                      layout="position"
                      initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        type: "spring",
                        bounce: 0,
                        duration: 0.5,
                        delay: 0.1,
                      }}
                      className="w-full"
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3">
                        <strong className="t text-base text-[#4eacfa]">
                          {project.title}
                        </strong>
                        {project.dates && (
                          <span className="text-[11px] font-medium text-secondary-foreground bg-foreground/10 px-2.5 py-1 rounded-md tracking-wide w-fit">
                            {project.dates}
                          </span>
                        )}
                      </div>
                      <p className="text-sm md:text-[15px] leading-relaxed text-muted-foreground">
                        {project.descriptionThai}
                      </p>

                      {/* {project.id === "color" && (
                        <div className="flex gap-3 mt-5">
                          <div className="w-6 h-6 rounded-full border border-zinc-500 bg-[#2d2d2d] ring-2 ring-transparent hover:ring-white transition-all" />
                          <div className="w-6 h-6 rounded-full border border-zinc-500 bg-[#e3e4e5] ring-2 ring-transparent hover:ring-white transition-all" /> */}
                      {/* แท็กเสริมสำหรับ Tech Stack */}
                      {project.technologies && (
                        <div className="flex flex-wrap gap-2 mt-5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md bg-foreground/10 text-foreground text-[11px] font-medium tracking-wide"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ) : (
                    //  สถานะตอนไม่ถูกเลือก (ปุ่มกดเล็กๆ)
                    <motion.div
                      layout="position"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-between w-full py-0.5"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="w-6 h-6 rounded-full border border-muted-foreground flex items-center justify-center bg-muted text-foreground shrink-0">
                          <Plus className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-semibold text-[15px] truncate text-foreground">
                          {project.title}
                        </span>
                      </div>
                      {project.dates && (
                        <span className="text-xs text-muted-foreground shrink-0 ml-3 hidden sm:block">
                          {project.dates}
                        </span>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* ฝั่งขวา: รูปภาพ */}
          <div className="w-full lg:w-7/12 aspect-[4/3] lg:aspect-[16/10] relative flex items-center justify-center group">
            <AnimatePresence mode="wait">
              {projects[activeFeature].images?.length > 0 && (
                <motion.div
                  key={`${activeFeature}-${activeImageIndex}`}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{
                    opacity: 0,
                    scale: 1.05,
                    filter: "blur(10px)",
                    position: "absolute",
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full h-full relative cursor-pointer"
                  onClick={() => setIsFullscreen(true)}
                >
                  <Image
                    src={projects[activeFeature].images[activeImageIndex]}
                    alt={`${projects[activeFeature].title} - Image ${activeImageIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain drop-shadow-2xl rounded-2xl"
                    priority
                  />
                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2 text-white/90 drop-shadow-md">
                      <ZoomIn className="w-10 h-10" />
                      <span className="font-medium tracking-wide">
                        Click to Enlarge
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons for manual sliding */}
            {projects[activeFeature].images?.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      prev === 0
                        ? projects[activeFeature].images.length - 1
                        : prev - 1,
                    )
                  }
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 backdrop-blur-md"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveImageIndex(
                      (prev) =>
                        (prev + 1) % projects[activeFeature].images.length,
                    )
                  }
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 backdrop-blur-md cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                  {projects[activeFeature].images.map((src, idx) => (
                    <button
                      key={`${src}-${src}`}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        activeImageIndex === idx
                          ? "w-6 bg-white"
                          : "w-2 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isFullscreen && projects[activeFeature].images?.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-md"
            onClick={() => setIsFullscreen(false)}
          >
            {/* Close button */}
            <button
              type="button"
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setIsFullscreen(false);
              }}
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Left */}
            {projects[activeFeature].images.length > 1 && (
              <button
                type="button"
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-[110]"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) =>
                    prev === 0
                      ? projects[activeFeature].images.length - 1
                      : prev - 1,
                  );
                }}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
              </button>
            )}

            {/* Current Fullscreen Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-[95vw] h-[85vh] max-w-7xl max-h-[900px]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={projects[activeFeature].images[activeImageIndex]}
                alt={`${projects[activeFeature].title} Fullscreen View`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Navigation Right */}
            {projects[activeFeature].images.length > 1 && (
              <button
                type="button"
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-[110]"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex(
                    (prev) =>
                      (prev + 1) % projects[activeFeature].images.length,
                  );
                }}
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
              </button>
            )}

            {/* Fullscreen Dots indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-[110]">
              {projects[activeFeature].images.map((src, idx) => (
                <button
                  key={`fs-${src}`}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    activeImageIndex === idx
                      ? "w-8 bg-white"
                      : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to fullscreen image ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
