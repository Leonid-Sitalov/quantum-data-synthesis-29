import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import RaiLogo from "@/components/RaiLogo";

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
          src="https://cdn.poehali.dev/projects/55cad316-9392-453f-927d-0b8cefce0524/files/0dd00c65-a521-4a30-91b3-134610c63ccf.jpg"
          alt="Заснеженные вершины гор и зелёные долины"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center text-white px-6">
        <RaiLogo size="xl" inverted />

        <div className="h-[2px] w-32 bg-[#00ff3c] mx-auto my-8" />

        <p className="text-base md:text-lg max-w-2xl mx-auto opacity-90 leading-relaxed">
          Проекты автоматизации любой сложности для горнорудной и аграрной промышленности —
          от месторождения до поля
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="bg-[#00ff3c] text-black px-8 py-3 text-sm uppercase tracking-wider font-bold hover:bg-white transition-colors duration-300 shadow-[0_0_30px_rgba(0,255,60,0.4)]"
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
