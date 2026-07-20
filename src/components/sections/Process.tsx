import { processContent } from "@/lib/constants";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="md:col-span-5 md:sticky md:top-32 self-start">
            <RevealOnScroll>
              <SectionEyebrow>{processContent.eyebrow}</SectionEyebrow>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-text-primary leading-tight text-balance">
                {processContent.heading}
              </h2>
            </RevealOnScroll>
          </div>

          <div className="md:col-span-7">
            <div className="relative border-l border-hairline pl-8 md:pl-12 space-y-16">
              {processContent.steps.map((step, i) => (
                <RevealOnScroll key={i} delay={0.1} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[37px] md:-left-[53px] top-1 w-2 h-2 rounded-full bg-gold ring-4 ring-surface" />
                  
                  <span className="font-mono text-sm text-gold-deep mb-3 block">{step.index}</span>
                  <h3 className="font-display text-2xl text-text-primary mb-4">{step.title}</h3>
                  <p className="text-lg text-text-secondary leading-relaxed">{step.body}</p>
                </RevealOnScroll>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
