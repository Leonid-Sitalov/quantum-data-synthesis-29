interface RaiLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  inverted?: boolean;
}

const sizeMap = {
  sm: "h-24 md:h-28",
  md: "h-40 md:h-48",
  lg: "h-64 md:h-80 lg:h-96",
  xl: "h-96 md:h-[32rem] lg:h-[40rem]",
};

const LOGO_URL =
  "https://cdn.poehali.dev/projects/55cad316-9392-453f-927d-0b8cefce0524/bucket/68813923-62f1-45d6-8948-deec2edf75a4.png";

export default function RaiLogo({ size = "md", className = "", inverted = false }: RaiLogoProps) {
  if (!inverted) {
    return (
      <img
        src={LOGO_URL}
        alt="#ПРОЕКТ RAi — Республика Автоматики Интегра"
        className={`${sizeMap[size]} w-auto object-contain select-none ${className}`}
        draggable={false}
      />
    );
  }

  const raiMask =
    "linear-gradient(to right, transparent 0%, transparent 18%, black 18%, black 44%, transparent 44%, transparent 100%)";

  return (
    <div
      className={`relative ${sizeMap[size]} w-auto select-none ${className}`}
      style={{ aspectRatio: "auto" }}
    >
      <img
        src={LOGO_URL}
        alt="#ПРОЕКТ RAi — Республика Автоматики Интегра"
        className="h-full w-auto object-contain"
        style={{
          filter:
            "brightness(0) invert(1) drop-shadow(0 0 20px rgba(0, 255, 60, 0.2))",
        }}
        draggable={false}
      />
      <img
        src={LOGO_URL}
        aria-hidden="true"
        className="absolute inset-0 h-full w-auto object-contain pointer-events-none"
        style={{
          WebkitMaskImage: raiMask,
          maskImage: raiMask,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
        draggable={false}
      />
    </div>
  );
}
