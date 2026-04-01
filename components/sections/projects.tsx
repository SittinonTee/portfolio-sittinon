"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Terminal,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Salad Ordering & Menu Management System",
    thaiTitle: "ระบบสั่งสลัดและจัดการเมนู",
    descriptionEng:
      "A comprehensive salad ordering platform built with Next.js, featuring menu categorization, real-time management, and a responsive Material UI design.",
    descriptionThai:
      "แพลตฟอร์มสั่งสลัดออนไลน์ที่พัฒนาด้วย Next.js รองรับการแยกหมวดหมู่อาหาร การจัดการเมนูแบบเรียลไทม์ และดีไซน์ที่สวยงามด้วย Material UI",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop", // รูปภาพแทนสื่อถึงสลัด
    images: [
      "/images/projects/salad/1.png",
      "/images/projects/salad/2.png",
      "/images/projects/salad/3.png",
      "/images/projects/salad/4.png",
      "/images/projects/salad/5.png",
      "/images/projects/salad/6.png",
      "/images/projects/salad/7.png",
      "/images/projects/salad/8.png",
    ],
    tags: ["Next.js", "Material UI", "MySQL", "React"],
    color: "from-emerald-500/20 to-green-500/20", // ใช้โทนสีเขียวเพื่อให้เข้ากับสลัด
    borderGlow:
      "group-hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] group-hover:shadow-emerald-500/20",
  },
  {
    title: "Personal Tax Management System",
    thaiTitle: "ระบบจัดการภาษีส่วนบุคคล",
    descriptionEng:
      "A cross-platform mobile application built with Flutter and Express.js for tracking personal income, managing tax deductions, and performing automated tax calculations based on Thai tax rules.",
    descriptionThai:
      "แอปพลิเคชันมือถือสำหรับบันทึกรายได้และจัดการค่าลดหย่อนภาษี พัฒนาด้วย Flutter และ Express.js พร้อมระบบคำนวณภาษีอัตโนมัติตามโครงสร้างภาษีเงินได้บุคคลธรรมดา",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop", // รูปภาพสื่อถึงการคำนวณภาษี/บัญชี
    images: [
      "/images/projects/tax/1.png",
      "/images/projects/tax/2.png",
      "/images/projects/tax/3.png",
      "/images/projects/tax/4.png",
      "/images/projects/tax/5.png",
      "/images/projects/tax/6.png",
      "/images/projects/tax/7.png",
      "/images/projects/tax/8.png",
    ],
    tags: ["Flutter", "Express.js", "MySQL", "Node.js"],
    color: "from-blue-500/20 to-indigo-500/20", // ใช้โทนสีน้ำเงินสื่อถึงความน่าเชื่อถือและการเงิน
    borderGlow:
      "group-hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] group-hover:shadow-blue-500/20",
  },
  {
    title: "Cross-Platform Seamless File Transfer",
    thaiTitle: "ระบบส่งไฟล์ข้ามแพลตฟอร์ม",
    descriptionEng:
      "A conceptual UI/UX design for a seamless cross-platform file sharing application, designed in Figma with focus on accessibility and multi-device support.",
    descriptionThai:
      "โปรเจกต์ออกแบบ UI/UX สำหรับระบบส่งไฟล์ข้ามแพลตฟอร์มแบบไร้รอยต่อ ออกแบบใน Figma ครอบคลุมทั้ง Web, iOS (iPhone) และ iPadOS (iPad)",
    image: "/images/figma/Web_Home.png",
    images: [
      "/images/figma/Web_Home.png",
      "/images/figma/Web_Signin.png",
      "/images/figma/Web_Register.png",
      "/images/figma/Web_Addfriend.png",
      "/images/figma/Web_Accept.png",
      "/images/figma/Web_Load.png",
      "/images/figma/Web_Qr.png",
      "/images/figma/Web_Share.png",
      "/images/figma/iPhone_Home.png",
      "/images/figma/iPhone_Signin.png",
      "/images/figma/iPhone_Register.png",
      "/images/figma/iPhone_Adfriend.png",
      "/images/figma/iPhone_Accept.png",
      "/images/figma/iPhone_Load.png",
      "/images/figma/iPhone_Qr.png",
      "/images/figma/iPhone_Share.png",
      "/images/figma/ipad_Home.png",
      "/images/figma/ipad_Signin.png",
      "/images/figma/ipad_Register.png",
      "/images/figma/ipad_Addfriend.png",
      "/images/figma/ipad_Accept.png",
      "/images/figma/ipad_Load.png",
      "/images/figma/ipad_Qr.png",
      "/images/figma/ipad_Share.png",
    ],
    tags: ["Figma", "UI/UX"],
    color: "from-purple-500/20 to-blue-500/20",
    borderGlow:
      "group-hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] group-hover:shadow-purple-500/20",
  },
  {
    title: "Mall Management",
    thaiTitle: "จัดการเช่าพื้นที่ห้างสรรพสินค้า",
    descriptionEng:
      "A backend service and dashboard for managing shopping mall operations, tenant space allocations, and facility maintenance.",
    descriptionThai:
      "ระบบจัดการพื้นที่เช่าในห้างสรรพสินค้า ที่ช่วยให้ผู้ใช้สามารถจัดการพื้นที่เช่า, การจัดสรรพื้นที่ ได้อย่างมีประสิทธิภาพ",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    images: [
      "/images/projects/mall/1.png",
      "/images/projects/mall/2.png",
      "/images/projects/mall/3.png",
      "/images/projects/mall/4.png",
      "/images/projects/mall/5.png",
    ],
    tags: ["java", "netbeans"],
    color: "from-emerald-500/20 to-cyan-500/20",
    borderGlow:
      "group-hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] group-hover:shadow-emerald-500/20",
  },

  {
    title: "Pizza Selling System",
    thaiTitle: "ร้านขายพิซซ่า",
    descriptionEng:
      "An online pizza ordering system emphasizing quick customization of orders and real-time delivery tracking.",
    descriptionThai: "ระบบสั่งพิซซ่าออนไลน์ที่ พัฒนาด้วย java และ netbeans",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    images: [
      "/images/projects/pizza/6.png",
      "/images/projects/pizza/5.png",
      "/images/projects/pizza/1.png",
      "/images/projects/pizza/2.png",
      "/images/projects/pizza/3.png",
      "/images/projects/pizza/4.png",
    ],
    tags: ["java", "netbeans"],
    color: "from-orange-500/20 to-red-500/20",
    borderGlow:
      "group-hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] group-hover:shadow-orange-500/20",
  },
  // {
  //   title: "Movie Ticket Booking",
  //   thaiTitle: "ระบบจองตั๋วหนัง",
  //   descriptionEng:
  //     "A comprehensive movie ticket booking platform allowing users to browse movies, select seats, and purchase tickets seamlessly.",
  //   descriptionThai:
  //     "ระบบจองตั๋วหนังแบบครบวงจร ที่ช่วยให้ผู้ใช้สามารถเลือกดูภาพยนตร์, เลือกที่นั่ง และซื้อตั๋วได้อย่างราบรื่น",
  //   image:
  //     "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop",
  //   images: [
  //     "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop",
  //   ],
  //   tags: ["java", "netbeans"],
  //   color: "from-blue-500/20 to-purple-500/20",
  //   borderGlow:
  //     "group-hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] group-hover:shadow-blue-500/20",
  // },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const openProject = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(
      (p) => p.title === selectedProject.title,
    );
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
    setCurrentImageIndex(0);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(
      (p) => p.title === selectedProject.title,
    );
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
    setCurrentImageIndex(0);
  };

  return (
    <section
      className="relative w-full py-24 bg-background overflow-hidden"
      id="projects"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--color-foreground)_70%,transparent_100%)] opacity-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-foreground to-muted-foreground mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              onClick={() => openProject(project)}
              className={`group relative rounded-2xl border border-border bg-card/50 text-card-foreground backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer ${project.borderGlow}`}
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium tracking-wide">
                    Click to view gallery
                  </span>
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-linear-to-tr ${project.color} opacity-60 z-10`}
                />
              </div>

              {/* Content */}
              <div className="p-6 relative z-20">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground font-medium px-2 py-0.5 rounded-full border border-border bg-background/50">
                      {project.thaiTitle}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-foreground transition-colors z-30 relative"
                      aria-label="Github link"
                    >
                      <Terminal className="w-5 h-5 pointer-events-none" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-foreground transition-colors z-30 relative"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="w-5 h-5 pointer-events-none" />
                    </button>
                  </div>
                </div>

                {/* <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {project.descriptionEng}
                </p> */}

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-secondary-foreground bg-secondary px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal สำหรับแสดงรูปภาพเพิ่มเติมเมื่อคลิกดู Card */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-background/80 backdrop-blur-md"
            onClick={closeProject}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl bg-card rounded-[2rem] border border-border shadow-2xl flex flex-col lg:flex-row overflow-hidden max-h-[90vh]"
            >
              <button
                type="button"
                onClick={closeProject}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2.5 bg-background/50 hover:bg-background/80 backdrop-blur-md rounded-full text-foreground transition-all duration-300 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* ฝั่งซ้าย: รูปภาพ Carousel */}
              <div className="w-full lg:w-2/3 bg-background/50 relative flex items-center justify-center min-h-[300px] md:min-h-[500px]">
                <AnimatePresence mode="wait">
                  <Image
                    key={
                      selectedProject.images?.[currentImageIndex] ||
                      selectedProject.image
                    }
                    src={
                      selectedProject.images?.[currentImageIndex] ||
                      selectedProject.image
                    }
                    alt={selectedProject.title}
                    fill
                    className="w-full h-full object-contain p-4 md:p-8"
                  />
                </AnimatePresence>

                {/* ปุ่มเลื่อนซ้ายขวา ถ้ามีมากกว่า 1 รูป */}
                {(selectedProject.images?.length || 0) > 1 && (
                  <>
                    <button
                      type="button"
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 bg-background/50 hover:bg-background/80 backdrop-blur-md rounded-full text-foreground z-10 transition-all cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex((prev) =>
                          prev === 0
                            ? (selectedProject.images?.length ?? 0) - 1
                            : prev - 1,
                        );
                      }}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      type="button"
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 bg-background/50 hover:bg-background/80 backdrop-blur-md rounded-full text-foreground z-10 transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(
                          (prev) => (prev + 1) % selectedProject.images?.length,
                        );
                      }}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* จุดไข่ปลาด้านล่าง (Dots) */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {selectedProject.images?.map((imgUrl, idx) => (
                        <div
                          key={`dot-${selectedProject.title}-${imgUrl}`}
                          className={`h-1.5 rounded-full transition-all ${currentImageIndex === idx ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/50"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* ฝั่งขวา: รายละเอียด (Info) */}
              <div className="w-full lg:w-1/3 p-6 md:p-10 flex flex-col overflow-y-auto border-t lg:border-t-0 lg:border-l border-border bg-card">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {selectedProject.title}
                </h3>
                <span className="text-sm border border-primary/30 text-primary w-fit px-3 py-1 rounded-full font-medium mb-6">
                  {selectedProject.thaiTitle}
                </span>

                <div className="space-y-4 mb-8">
                  <p className="text-muted-foreground text-sm md:text-[15px] leading-relaxed">
                    {selectedProject.descriptionThai}
                  </p>
                  {/* <p className="text-muted-foreground text-sm md:text-[15px] leading-relaxed opacity-80">
                    {selectedProject.descriptionEng}
                  </p> */}
                </div>

                <div className="mt-auto">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Terminal className="w-4 h-4" /> Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={`modal-tag-${tag}`}
                        className="text-[11px] font-semibold text-foreground bg-secondary px-3 py-1.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ลิงก์เพิ่มเติมใน Modal */}
                <div className="flex gap-4 mt-8 pt-6 border-t border-border/50">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevProject();
                    }}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors font-medium text-sm group cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Prev Project
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextProject();
                    }}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-button-bg text-white hover:bg-button-hover transition-colors font-medium text-sm group cursor-pointer "
                  >
                    Next Project{" "}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
