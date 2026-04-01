// import Image from "next/image";

import { AppleHero } from "@/components/sections/apple-hero";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Footer } from "@/components/ui/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <AppleHero
        title="SITTINON CHANPRATHUM"
        // subtitleThai="นักพัฒนาซอฟต์แวร์ที่พร้อมเรียนรู้เทคโนโลยีใหม่ๆ เพื่อรังสรรค์ผลงานดิจิทัลที่มีคุณค่าในระยะยาว"
        subtitleEng="A software developer dedicated to learning new technologies and crafting lasting digital value."
      />
      <Experience />
      <Projects />
      {/* <ExperienceCopy /> */}
      <section
        className="relative w-full py-24 bg-background overflow-hidden"
        id="education-and-skills"
      >
        {/* Blurred gradient blob */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] opacity-15 blur-[120px] rounded-full pointer-events-none z-0"
          style={{
            background:
              "linear-gradient(90deg, #2dd4bf 0%, #2563eb 50%, #1e40af 100%)",
          }}
        />
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-12">
            <Education />
            <Skills />
          </div>
        </div>
      </section>
      {/* <UIProjects /> */}
      <Footer />
    </main>
  );
}
