"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import mainLogo from "@/assets/mainlogo.png";
 
import React, { useRef, useState } from "react";
 
 
interface NavbarProps {
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
 
interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}
 
interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  visible?: boolean;
}
 
interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}
 
interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}
 
interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}
 
export const Navbar = ({ children, className, onMouseEnter, onMouseLeave }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);
 
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });
 
  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("sticky inset-x-0 top-0 mt-4 z-40 w-full", className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};
 
export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "blur(2px)",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-4 py-2 lg:flex",
        visible 
          ? "bg-white/95 dark:bg-neutral-950/95 border border-white/60" 
          : "bg-white/90 dark:bg-neutral-950/90 border border-white/70 shadow-sm",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};
 
export const NavItems = ({ items, className, onItemClick, visible }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
 
  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className={cn(
            "relative px-4 py-2 transition-colors duration-200",
            visible 
              ? "text-slate-600 hover:text-slate-800" 
              : "text-slate-700 hover:text-slate-900 dark:text-neutral-300 dark:hover:text-neutral-100"
          )}
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className={cn(
                "absolute inset-0 h-full w-full rounded-full",
                visible 
                  ? "bg-white/60 border border-white/40" 
                  : "bg-white/70 border border-white/50 dark:bg-neutral-800"
              )}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};
 
export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "blur(2px)",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden",
        visible 
          ? "bg-white/95 dark:bg-neutral-950/95 border border-white/60" 
          : "bg-white/90 dark:bg-neutral-950/90 border border-white/70 shadow-sm",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};
 
export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between px-4 py-2",
        className,
      )}
    >
      {children}
    </div>
  );
};
 
export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '-100%', opacity: 0 }} // Slide in from left
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          className={cn(
            "fixed top-0 left-0 z-50 h-full w-3/4 max-w-xs flex flex-col items-start justify-start gap-4 rounded-r-lg bg-white dark:bg-neutral-950 px-0 py-0 shadow-lg transition-all lg:hidden",
            className,
          )}
        >
          {/* Move MobileNavHeader here for solid background */}

          <div className="w-full px-4 pb-8 flex flex-col gap-4">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
 
export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-black dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
  );
};
 
export const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-3 px-2 py-1 text-sm font-normal text-slate-700 hover:text-slate-900 transition-colors duration-200"
    >
      <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 shadow-sm flex items-center justify-center p-1">
        <Image
          src={mainLogo}
                        alt="EduBh Logo"
          width={24}
          height={24}
          className="w-6 h-6 object-contain"
        />
      </div>
                  <span className="font-bold text-lg lg:text-xl text-slate-700 dark:text-white">EduBh</span>
    </Link>
  );
};
 
export const NavbarButton = ({
  href,
  children,
  className,
  variant = "primary",
  onClick,
  ...props
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
  onClick?: () => void;
}) => {
  const baseStyles =
    "px-6 py-2 rounded-full font-bold relative cursor-pointer hover:-translate-y-0.5 transition-all duration-200 inline-block text-center";
 
  const variantStyles = {
    primary:
      "bg-white text-slate-800 hover:text-slate-900 shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_0_rgba(0,0,0,0.08)] border border-slate-200/50 hover:border-slate-300/60",
    secondary: "bg-transparent shadow-none text-slate-600 hover:text-slate-800 dark:text-white border border-transparent hover:border-slate-200/30",
    dark: "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-[0_4px_14px_0_rgba(59,130,246,0.3)] hover:shadow-[0_6px_20px_0_rgba(59,130,246,0.4)] border border-blue-500/30",
    gradient:
      "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-[0_4px_14px_0_rgba(59,130,246,0.3)] hover:from-blue-600 hover:to-blue-800 hover:shadow-[0_6px_20px_0_rgba(59,130,246,0.4)] border border-blue-400/30",
  };
 
  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseStyles, variantStyles[variant], className)}
        onClick={onClick}
        {...props}
      >
        {children}
      </Link>
    );
  }
 
  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
