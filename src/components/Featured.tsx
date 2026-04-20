import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Mountain",
    title: "Горнорудная автоматизация",
    description: "Проекты автоматизации технологических процессов на карьерах, обогатительных фабриках и рудниках.",
  },
  {
    icon: "Sprout",
    title: "Аграрная промышленность",
    description: "Умные фермы, автоматизация орошения, мониторинг урожая и климата для сельхозпредприятий.",
  },
  {
    icon: "Zap",
    title: "Электроснабжение и мониторинг",
    description: "Комплексные системы электроснабжения с удалённым контролем параметров и качества энергии.",
  },
  {
    icon: "Lightbulb",
    title: "Интеллектуальное освещение",
    description: "Адаптивные системы освещения промышленных объектов и территорий с управлением по расписанию и датчикам.",
  },
  {
    icon: "Settings",
    title: "Автоматика инженерных систем",
    description: "Вентиляция, отопление, водоснабжение — единая диспетчеризация зданий и сооружений.",
  },
  {
    icon: "Server",
    title: "Серверные и ЛВС",
    description: "Проектирование и монтаж локально-вычислительных сетей, серверных помещений под ключ.",
  },
];

export default function Featured() {
  return (
    <section id="services" className="relative bg-white py-20 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h3 className="uppercase mb-4 text-sm tracking-[0.3em] text-[#00ff3c] font-bold">
              Направления деятельности
            </h3>
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Автоматизация <br />
              <span className="text-[#00ff3c] drop-shadow-[0_0_12px_rgba(0,255,60,0.3)]">от вершин до полей</span>
            </h2>
          </div>
          <p className="text-lg text-neutral-600 max-w-md leading-relaxed">
            Мы объединяем инженерную экспертизу горнорудной и аграрной промышленности в единую экосистему интеллектуальных решений.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-neutral-200">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white p-8 lg:p-10 hover:bg-neutral-900 transition-colors duration-500 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-[#00ff3c]/15 flex items-center justify-center mb-6 group-hover:bg-[#00ff3c] transition-colors duration-500">
                <Icon
                  name={service.icon}
                  size={28}
                  className="text-[#00ff3c] group-hover:text-black transition-colors duration-500"
                />
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-white transition-colors duration-500">
                {service.title}
              </h4>
              <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 h-[400px] lg:h-[600px] overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/55cad316-9392-453f-927d-0b8cefce0524/files/a8e63bdb-7e9d-4652-b76c-896daf8e6e83.jpg"
              alt="Диспетчерская автоматизации"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="uppercase mb-4 text-sm tracking-[0.3em] text-[#00ff3c] font-bold">
              Слаботочные системы
            </h3>
            <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight font-light">
              Проектируем и внедряем слаботочные системы — видеонаблюдение, СКУД, пожарную сигнализацию и связь — для объектов горной и аграрной промышленности.
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#00ff3c] text-black border border-[#00ff3c] px-6 py-3 text-sm transition-all duration-300 hover:bg-black hover:text-[#00ff3c] hover:border-[#00ff3c] uppercase tracking-wide font-bold shadow-[0_0_20px_rgba(0,255,60,0.3)]"
            >
              Запросить проект
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}