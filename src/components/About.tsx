import Icon from "@/components/ui/icon";

const highlights = [
  {
    icon: "Cpu",
    title: "Проектирование под ключ",
    description:
      "Слаботочные системы и автоматика инженерных систем — от ТЗ до рабочей документации.",
  },
  {
    icon: "Code2",
    title: "Программная логика",
    description:
      "Разработка алгоритмов ПЛК, SCADA и мнемосхем операторских панелей.",
  },
  {
    icon: "Truck",
    title: "Поставка оборудования",
    description:
      "Подбираем и поставляем комплектующие шкафов, контроллеры, панели, датчики и исполнительные механизмы.",
  },
  {
    icon: "Wrench",
    title: "Пусконаладка",
    description:
      "Монтаж, наладка и ввод в эксплуатацию без лишних посредников — одна ответственная команда.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <h3 className="uppercase mb-4 text-sm tracking-[0.3em] text-[#00ff3c] font-bold">
              О компании
            </h3>
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-8">
              Инженерия{" "}
              <span className="text-[#00ff3c] drop-shadow-[0_0_12px_rgba(0,255,60,0.3)]">
                без посредников
              </span>
            </h2>
            <div className="space-y-5 text-lg text-neutral-700 leading-relaxed">
              <p>
                Предоставляем комплексные решения по проектированию слаботочных систем и автоматизации инженерных систем, включая разработку программной логики и поставку оборудования!
              </p>
              <p>
                Команда профессионалов во главе с главным инженером проектов и ведущими инженерами-проектировщиками готова реализовать проект любой сложности{" "}
                <span className="text-[#00ff3c] font-bold">«под ключ»</span>.
              </p>
              <p>
                Мы объединяем проектирование, программирование и пусконаладку, чтобы вы получили полностью работоспособную систему без лишних посредников.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-10 inline-block bg-[#00ff3c] text-black px-8 py-3 text-sm uppercase tracking-wider font-bold hover:bg-neutral-900 hover:text-[#00ff3c] transition-colors duration-300 shadow-[0_0_30px_rgba(0,255,60,0.4)]"
            >
              Обсудить проект
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-neutral-200">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group bg-white p-6 lg:p-8 hover:bg-neutral-900 transition-colors duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-[#00ff3c]/15 flex items-center justify-center mb-5 group-hover:bg-[#00ff3c] transition-colors duration-500">
                  <Icon
                    name={item.icon}
                    size={24}
                    className="text-[#00ff3c] group-hover:text-black transition-colors duration-500"
                  />
                </div>
                <h4 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
