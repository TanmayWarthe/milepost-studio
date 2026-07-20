import { studioContent } from "@/lib/constants";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Studio() {
  return (
    <section id="studio" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="md:col-span-5">
            <RevealOnScroll>
              <SectionEyebrow>{studioContent.eyebrow}</SectionEyebrow>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-text-primary leading-tight text-balance">
                {studioContent.heading}
              </h2>
            </RevealOnScroll>
          </div>

          <div className="md:col-span-7">
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed mb-16">
              {studioContent.paragraphs.map((para, i) => (
                <RevealOnScroll key={i} delay={0.1 * i}>
                  <p>{para}</p>
                </RevealOnScroll>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-hairline">
              {studioContent.stats.map((stat, i) => (
                <RevealOnScroll key={i} delay={0.2 + (0.1 * i)}>
                  <div>
                    <div className="text-3xl font-display text-text-primary mb-2">{stat.value}</div>
                    <div className="font-mono text-xs uppercase tracking-widest text-text-faint">{stat.label}</div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
