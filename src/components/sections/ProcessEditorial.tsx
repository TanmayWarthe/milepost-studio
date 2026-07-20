import { processContent } from "@/lib/constants";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Divider } from "@/components/ui/Divider";

export function ProcessEditorial() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <section className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
          <RevealOnScroll>
            <SectionEyebrow>{processContent.eyebrow}</SectionEyebrow>
            <h1 className="text-4xl md:text-5xl font-display font-light text-text-primary leading-[1.1] text-balance">
              {processContent.heading}
            </h1>
          </RevealOnScroll>
        </div>

        <Divider />

        <div className="space-y-12 md:space-y-16">
          {processContent.steps.map((step, i) => {
            const isEven = i % 2 === 1;
            return (
              <div key={i}>
                <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center ${isEven ? "md:text-right" : ""}`}>
                  <RevealOnScroll delay={0.1} className={`md:col-span-6 flex flex-col ${isEven ? "md:order-2 md:items-end" : "md:order-1 md:items-start"}`}>
                    <span className="text-3xl md:text-4xl font-display font-bold text-gold mb-4 block select-none">
                      {step.index}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display text-text-primary mb-4 relative z-10">{step.title}</h3>
                  </RevealOnScroll>
                  
                  <RevealOnScroll delay={0.2} className={`md:col-span-6 ${isEven ? "md:order-1" : "md:order-2"}`}>
                    <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light">
                      {step.body}
                    </p>
                  </RevealOnScroll>
                </div>
                {i < processContent.steps.length - 1 && <Divider />}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
