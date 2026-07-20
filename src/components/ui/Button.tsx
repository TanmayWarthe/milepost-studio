import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { MagneticButton } from "./MagneticButton";

type ButtonVariant = "primary" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  magnetic?: boolean;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button({ children, variant = "primary", className = "", magnetic = true, href, ...props }: ButtonProps | AnchorProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  
  const variants = {
    primary: "bg-gold text-white hover:brightness-110 shadow-sm hover:shadow-md",
    ghost: "bg-transparent text-text-primary border border-hairline hover:border-gold hover:text-gold hover:bg-surface"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  const renderContent = () => {
    if (href) {
      return (
        <Link href={href} className={combinedStyles} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </Link>
      );
    }
    return (
      <button className={combinedStyles} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    );
  };

  if (magnetic) {
    return <MagneticButton>{renderContent()}</MagneticButton>;
  }

  return renderContent();
}
