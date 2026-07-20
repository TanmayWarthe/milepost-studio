import { studioContent } from "@/lib/constants";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Divider } from "@/components/ui/Divider";

export function StudioFull() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <section className="max-w-5xl mx-auto px-6 lg:px-8">
        <RevealOnScroll className="text-center md:text-left mb-12">
          <SectionEyebrow>{studioContent.eyebrow}</SectionEyebrow>
          <h1 className="text-4xl md:text-5xl font-display text-text-primary leading-[1.1] text-balance">
            {studioContent.heading}
          </h1>
        </RevealOnScroll>

        <Divider />

        <div className="max-w-2xl mx-auto md:mx-0 space-y-6 text-sm md:text-base text-text-secondary leading-relaxed font-light">
          <RevealOnScroll>
            <p>{studioContent.paragraphs[0]}</p>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.1}>
            <blockquote className="text-xl md:text-2xl font-display italic text-gold-deep my-8 border-l-2 border-gold/30 pl-6">
              "We started building considered, honest websites instead — the kind we'd want for our own family's restaurant."
            </blockquote>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.2}>
            <p>{studioContent.paragraphs[1]}</p>
          </RevealOnScroll>
        </div>

        <Divider />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {studioContent.stats.map((stat, i) => (
            <RevealOnScroll key={i} delay={0.1 * i}>
              <div>
                <div className="text-xl font-display text-text-primary mb-2">{stat.value}</div>
                <div className="font-mono text-xs md:text-sm uppercase tracking-widest text-text-faint">{stat.label}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}
