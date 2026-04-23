interface RaiLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  inverted?: boolean;
}

const sizeMap = {
  sm: "h-[3.6rem] md:h-[4.2rem]",
  md: "h-24 md:h-[7.2rem]",
  lg: "h-[9.6rem] md:h-48 lg:h-[14.4rem]",
  xl: "h-[14.4rem] md:h-[19.2rem] lg:h-96",
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