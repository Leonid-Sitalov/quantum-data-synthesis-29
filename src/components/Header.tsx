import RaiLogo from "@/components/RaiLogo";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-20 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <RaiLogo size="sm" inverted />
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
