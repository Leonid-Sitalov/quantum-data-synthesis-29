interface RaiLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  inverted?: boolean;
}

const sizeMap = {
  sm: {
    hash: "text-xs md:text-sm",
    main: "text-4xl md:text-5xl",
    sub: "text-[0.5rem] md:text-[0.6rem]",
    gap: "-mt-1",
    subGap: "-mt-1",
  },
  md: {
    hash: "text-sm md:text-base",
    main: "text-6xl md:text-7xl",
    sub: "text-[0.65rem] md:text-xs",
    gap: "-mt-2",
    subGap: "-mt-2",
  },
  lg: {
    hash: "text-lg md:text-xl",
    main: "text-8xl md:text-9xl lg:text-[10rem]",
    sub: "text-sm md:text-base",
    gap: "-mt-3 md:-mt-4",
    subGap: "-mt-3 md:-mt-4",
  },
  xl: {
    hash: "text-2xl md:text-3xl",
    main: "text-[8rem] md:text-[12rem] lg:text-[16rem]",
    sub: "text-lg md:text-2xl",
    gap: "-mt-4 md:-mt-6",
    subGap: "-mt-4 md:-mt-6",
  },
};

export default function RaiLogo({ size = "md", className = "", inverted = false }: RaiLogoProps) {
  const s = sizeMap[size];
  const darkColor = inverted ? "text-white" : "text-neutral-800";
  const iColor = inverted ? "text-neutral-400" : "text-neutral-500";

  return (
    <div className={`inline-flex flex-col items-start leading-none select-none ${className}`}>
      <span
        className={`${s.hash} ${darkColor} font-black italic tracking-tight ml-[8%]`}
        style={{ transform: "skewX(-14deg)" }}
      >
        #ПРОЕКТ
      </span>
      <div
        className={`${s.main} font-black leading-[0.9] ${s.gap} tracking-tighter`}
        style={{ transform: "skewX(-14deg)", fontFamily: "Arial Black, sans-serif" }}
      >
        <span className="text-[#00ff3c] drop-shadow-[0_0_20px_rgba(0,255,60,0.4)]">R</span>
        <span className="text-[#00ff3c] drop-shadow-[0_0_20px_rgba(0,255,60,0.4)]">A</span>
        <span className={iColor}>i</span>
      </div>
      <span
        className={`${s.sub} ${darkColor} font-black italic tracking-tight ${s.subGap}`}
        style={{ transform: "skewX(-14deg)", letterSpacing: "0.02em" }}
      >
        РЕСПУБЛИКА АВТОМАТИКИ ИНТЕГРА
      </span>
    </div>
  );
}
