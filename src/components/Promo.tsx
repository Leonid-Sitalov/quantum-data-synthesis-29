import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/55cad316-9392-453f-927d-0b8cefce0524/files/b482a4eb-8b35-4ad7-a1b0-eea75adab237.jpg"
            alt="Интегрированная автоматизация"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 left-6 text-[#00ff3c] uppercase z-10 text-sm md:text-base lg:text-lg tracking-[0.3em] font-bold drop-shadow-[0_0_15px_rgba(0,255,60,0.5)]">
        Интеграция без границ
      </h3>

      <div className="absolute bottom-12 right-6 left-6 z-10 max-w-6xl mx-auto">
        <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
          От <span className="text-[#00ff3c] font-bold drop-shadow-[0_0_15px_rgba(0,255,60,0.5)]">гранитных вершин</span> до{" "}
          <span className="text-[#00ff3c] font-bold drop-shadow-[0_0_15px_rgba(0,255,60,0.5)]">зелёных долин</span> — объединяем технологии,
          энергию и данные в одну управляемую систему.
        </p>
      </div>
    </div>
  );
}