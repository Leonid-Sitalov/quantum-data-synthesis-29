const projects = [
  {
    title: "Шкаф управления ККД-1",
    location: "Горно-обогатительный комбинат",
    description:
      "Закрытый шкаф с панелью оператора ОВЕН СП310, визуализация работы насосов, аварий и давления на производственной площадке.",
    image:
      "https://cdn.poehali.dev/projects/55cad316-9392-453f-927d-0b8cefce0524/bucket/13dbb8d7-550e-4203-ac9b-494f411e76ce.jpg",
    tag: "Автоматизация",
  },
  {
    title: "Силовой отсек и ПЛК",
    location: "Насосная станция",
    description:
      "Монтаж и пусконаладка силовой части, контроллера и модулей расширения с подключением к панели оператора.",
    image:
      "https://cdn.poehali.dev/projects/55cad316-9392-453f-927d-0b8cefce0524/bucket/d5d32c06-0215-4c0b-a619-ebefa7171370.jpg",
    tag: "Электроснабжение",
  },
  {
    title: "SCADA насосных групп",
    location: "Участок ККД-1",
    description:
      "Мнемосхема на панели СП310: состояние 4 насосов, аварии, сухой ход, критическое давление и режим «Система выключена».",
    image:
      "https://cdn.poehali.dev/projects/55cad316-9392-453f-927d-0b8cefce0524/bucket/4518f2ed-62e8-408d-880b-2d2679858d52.jpg",
    tag: "Диспетчеризация",
  },
  {
    title: "Пылеподавление над бункером питателя",
    location: "Дробильно-сортировочный узел",
    description:
      "Форсуночная система туманообразования для подавления пыли на точках пересыпа и загрузки бункера питателя.",
    image:
      "https://cdn.poehali.dev/projects/55cad316-9392-453f-927d-0b8cefce0524/bucket/3c0d41b9-9c13-4415-815d-896313351250.png",
    tag: "Экология",
  },
  {
    title: "Форсунки на точках пыления",
    location: "Горнорудное производство",
    description:
      "Установка форсунок мелкодисперсного распыления на точках интенсивного пыления — снижение запылённости до санитарных норм.",
    image:
      "https://cdn.poehali.dev/projects/55cad316-9392-453f-927d-0b8cefce0524/bucket/16189a00-5fb1-41ac-b2cb-e15e8f227d64.png",
    tag: "Экология",
  },
  {
    title: "Схема электрических соединений ШАУ-2",
    location: "Лебединский ГОК · Комплекс крупного дробления №1",
    description:
      "Проектная схема электрических соединений шкафа автоматики ШАУ-2: контроллер ОВЕН ПЛК210, модули МК210-311, КСh210, МВ210-101, ИБП БП60К-24 и СКАТ 1200Д, контакторы KM1–KM4, реле времени RV1–RV5. Шифр ЛГ-251319-25-ЭОМ.",
    image:
      "https://cdn.poehali.dev/projects/55cad316-9392-453f-927d-0b8cefce0524/bucket/3347a09f-4a91-4195-8d9f-50a8f5680580.png",
    tag: "Проектирование",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-neutral-950 py-20 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h3 className="uppercase mb-4 text-sm tracking-[0.3em] text-[#00ff3c] font-bold">
              Реализованные объекты
            </h3>
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Работы <br />
              <span className="text-[#00ff3c] drop-shadow-[0_0_12px_rgba(0,255,60,0.3)]">
                на реальных площадках
              </span>
            </h2>
          </div>
          <p className="text-lg text-neutral-300 max-w-md leading-relaxed">
            Фотоотчёты с объектов: шкафы управления, SCADA, системы пылеподавления и электроснабжения в промышленных условиях.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-neutral-800">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group bg-neutral-950 overflow-hidden cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#00ff3c] text-black text-xs uppercase tracking-wider font-bold px-3 py-1">
                  {project.tag}
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-[#00ff3c] font-bold mb-2">
                  {project.location}
                </p>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ff3c] transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}