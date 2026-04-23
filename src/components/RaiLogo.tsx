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

const LOGO_URL_DARK =
  "https://cdn.poehali.dev/projects/55cad316-9392-453f-927d-0b8cefce0524/bucket/beb06a55-57a6-4657-965f-195db0d8096d.png";

const LOGO_URL_LIGHT =
  "https://cdn.poehali.dev/projects/55cad316-9392-453f-927d-0b8cefce0524/bucket/eb4620ce-5510-46cf-a9a8-0eeadbca3e8e.png";

export default function RaiLogo({ size = "md", className = "", inverted = false }: RaiLogoProps) {
  const src = inverted ? LOGO_URL_LIGHT : LOGO_URL_DARK;
  return (
    <img
      src={src}
      alt="#ПРОЕКТ RAi — Республика Автоматики Интегра"
      className={`${sizeMap[size]} w-auto object-contain select-none ${className}`}
      draggable={false}
    />
  );
}
