import { homeContent } from "@/lib/constants";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";

export function ProcessPreview() {
  const content = homeContent.processPreview;
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
          <h2 className="text-2xl md:text-3xl font-display text-text-primary leading-tight text-balance mb-16">
            {content.heading}
          </h2>
        </RevealOnScroll>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mb-16 text-center">
          {content.steps.map((step, i) => (
            <RevealOnScroll key={i} delay={0.1 * i} className="flex flex-col items-center">
              <span className="font-mono text-sm text-gold-deep block mb-4">0{i + 1}</span>
              <span className="text-lg font-display text-text-primary">{step}</span>
            </RevealOnScroll>
          ))}
        </div>
        
        <RevealOnScroll delay={0.4}>
          <Button href="/process" variant="ghost">
            {content.linkText}
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
