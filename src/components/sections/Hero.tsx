import { homeContent } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MilestoneMark } from "@/components/ui/MilestoneMark";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <RevealOnScroll>
            <SectionEyebrow className="mb-8 !text-gold">{homeContent.hero.eyebrow}</SectionEyebrow>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light leading-[1.1] tracking-tight text-ink-text mb-8 text-balance">
              {homeContent.hero.headline}
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.1}>
            <p className="text-sm md:text-base text-ink-text/70 leading-relaxed mb-12 max-w-2xl mx-auto font-light">
              {homeContent.hero.subhead}
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.2} className="flex flex-col sm:flex-row gap-6 mb-20">
            <Button href={homeContent.hero.ctaPrimary.href} variant="primary">
              {homeContent.hero.ctaPrimary.label}
            </Button>
            <Button href={homeContent.hero.ctaSecondary.href} variant="ghost" className="!text-ink-text !border-ink-text/30 hover:!border-gold hover:!text-gold hover:!bg-transparent">
              {homeContent.hero.ctaSecondary.label}
            </Button>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3} className="flex justify-center">
            <MilestoneMark className="scale-[1.5] md:scale-[2.5]" />
          </RevealOnScroll>
          
        </div>
      </div>
    </section>
  );
}
