import { ReactNode } from "react";
import { ScrollTextReveal } from "@/components/ui/scroll-text-reveal";

interface SectionHeaderProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const SectionHeader = ({
  children,
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}: SectionHeaderProps) => (
  <div className={`max-w-[560px] mx-auto relative ${className}`}>
    {title && (
      <h2 className={`section-title text-gradient mt-5 ${titleClassName}`}>
        {title}
      </h2>
    )}
    {description && (
      <ScrollTextReveal 
        words={description}
        className={`text-[22px] text-center leading-[30px] tracking-tight text-[#010D3E] mt-5 ${descriptionClassName}`}
        duration={0.8}
        delay={0.2}
      />
    )}
    {children}
  </div>
);

export default SectionHeader;
