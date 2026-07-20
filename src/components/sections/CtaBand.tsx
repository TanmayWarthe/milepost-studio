import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface CtaBandProps {
  line: string;
  cta: string;
  href: string;
}

export function CtaBand({ line, cta, href }: CtaBandProps) {
  return (
    <section className="bg-ink py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        <RevealOnScroll>
          <h2 className="text-2xl md:text-3xl font-display font-light text-ink-text mb-8 max-w-2xl text-balance leading-tight">
            {line}
          </h2>
          <Button href={href} variant="primary" className="!bg-gold-light !text-ink hover:!brightness-110">
            {cta}
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
