export default function Footer() {
  return (
    <div
      className="relative h-[500px] sm:h-[650px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+500px)] sm:h-[calc(100vh+650px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[500px] sm:h-[650px] lg:h-[800px] sticky top-[calc(100vh-500px)] sm:top-[calc(100vh-650px)] lg:top-[calc(100vh-800px)]">
          <div
            id="contact"
            className="bg-neutral-900 py-8 sm:py-10 lg:py-12 px-6 sm:px-8 lg:px-12 h-full w-full flex flex-col justify-between"
          >
            <div className="flex flex-col sm:flex-row shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-[#22c55e] text-xs sm:text-sm tracking-[0.2em] font-semibold">
                  Направления
                </h3>
                <a
                  href="#services"
                  className="text-white hover:text-[#22c55e] transition-colors duration-300 text-sm sm:text-base"
                >
                  Горнорудная отрасль
                </a>
                <a
                  href="#services"
                  className="text-white hover:text-[#22c55e] transition-colors duration-300 text-sm sm:text-base"
                >
                  Аграрная промышленность
                </a>
                <a
                  href="#services"
                  className="text-white hover:text-[#22c55e] transition-colors duration-300 text-sm sm:text-base"
                >
                  Электроснабжение
                </a>
                <a
                  href="#services"
                  className="text-white hover:text-[#22c55e] transition-colors duration-300 text-sm sm:text-base"
                >
                  Слаботочные системы
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-[#22c55e] text-xs sm:text-sm tracking-[0.2em] font-semibold">
                  Компания
                </h3>
                <a
                  href="#about"
                  className="text-white hover:text-[#22c55e] transition-colors duration-300 text-sm sm:text-base"
                >
                  О проекте RAI
                </a>
                <a
                  href="#projects"
                  className="text-white hover:text-[#22c55e] transition-colors duration-300 text-sm sm:text-base"
                >
                  Реализованные объекты
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-[#22c55e] transition-colors duration-300 text-sm sm:text-base"
                >
                  Контакты
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-[#22c55e] text-xs sm:text-sm tracking-[0.2em] font-semibold">
                  Связаться
                </h3>
                <a
                  href="mailto:info@rai-project.ru"
                  className="text-white hover:text-[#22c55e] transition-colors duration-300 text-sm sm:text-base"
                >
                  info@rai-project.ru
                </a>
                <a
                  href="tel:+70000000000"
                  className="text-white hover:text-[#22c55e] transition-colors duration-300 text-sm sm:text-base"
                >
                  +7 (000) 000-00-00
                </a>
                <p className="text-neutral-400 text-sm sm:text-base max-w-[240px]">
                  Инжиниринг автоматизации для промышленности
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[22vw] sm:text-[20vw] lg:text-[18vw] leading-[0.8] text-white font-black tracking-tighter">
                <span className="text-[#22c55e]">R</span>AI
              </h1>
              <div className="flex flex-col items-start sm:items-end gap-1">
                <p className="text-white text-sm sm:text-base font-semibold">
                  Республика Автоматики Интегра
                </p>
                <p className="text-neutral-500 text-xs sm:text-sm">
                  © {new Date().getFullYear()} Проект RAI. Все права защищены.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
