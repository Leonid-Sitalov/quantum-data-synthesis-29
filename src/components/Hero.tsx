import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/55cad316-9392-453f-927d-0b8cefce0524/files/8095ec1d-3bc1-4f35-9206-8b7ee0c03625.jpg"
          alt="Горные вершины и аграрные долины"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <div className="mb-6 inline-block">
          <span className="text-[#22c55e] text-lg md:text-xl font-bold tracking-[0.3em] uppercase">
            #Проект
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tight mb-4 leading-none">
          <span className="text-[#22c55e]">R</span>
          <span className="text-white">A</span>
          <span className="text-neutral-400">i</span>
        </h1>
        <div className="h-[2px] w-32 bg-[#22c55e] mx-auto mb-6" />
        <h2 className="text-xl md:text-2xl lg:text-3xl font-light tracking-[0.2em] uppercase mb-6 text-white">
          Республика Автоматики Интегра
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto opacity-90 leading-relaxed">
          Проекты автоматизации любой сложности для горнорудной и аграрной промышленности —
          от месторождения до поля
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="bg-[#22c55e] text-black px-8 py-3 text-sm uppercase tracking-wider font-semibold hover:bg-white transition-colors duration-300"
          >
            Наши направления
          </a>
          <a
            href="#contact"
            className="border border-white text-white px-8 py-3 text-sm uppercase tracking-wider font-semibold hover:bg-white hover:text-black transition-colors duration-300"
          >
            Обсудить проект
          </a>
        </div>
      </div>
    </div>
  );
}
