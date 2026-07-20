interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionEyebrow({ children, className = "" }: SectionEyebrowProps) {
  return (
    <span className={`block font-mono text-[0.75rem] uppercase tracking-widest text-text-faint mb-6 ${className}`}>
      {children}
    </span>
  );
}
