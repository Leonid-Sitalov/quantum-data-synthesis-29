interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-20 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="text-white text-xl font-bold tracking-wider">
            <span className="text-[#00ff3c]">#</span>ПРОЕКТ{" "}
            <span
              className="text-[#00ff3c] inline-block"
              style={{ transform: "skewX(-12deg)" }}
            >
              RAI
            </span>
          </div>
        </div>
        <nav className="hidden md:flex gap-8">
          <a
            href="#services"
            className="text-white hover:text-[#00ff3c] transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            Услуги
          </a>
          <a
            href="#about"
            className="text-white hover:text-[#00ff3c] transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            О компании
          </a>
          <a
            href="#contact"
            className="text-white hover:text-[#00ff3c] transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}
