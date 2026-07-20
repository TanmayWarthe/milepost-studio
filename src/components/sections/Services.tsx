import { homeContent } from "@/lib/constants";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Services() {
  const servicesContent = {
    eyebrow: "What we do",
    heading: "Three kinds of work, done properly.",
    cards: homeContent.servicesPreview
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        <div className="mb-12 md:mb-16 text-center md:text-left max-w-2xl">
          <RevealOnScroll>
            <SectionEyebrow>{servicesContent.eyebrow}</SectionEyebrow>
            <h2 className="text-2xl md:text-3xl font-display text-text-primary leading-tight text-balance">
              {servicesContent.heading}
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {servicesContent.cards.map((card, i) => (
            <RevealOnScroll key={i} delay={0.1 * i} className="h-full">
              <div className="h-full p-6 md:p-8 rounded-2xl bg-surface border border-transparent transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/30 hover:bg-surface-hover flex flex-col">
                <span className="font-mono text-xs md:text-sm text-gold-deep mb-4 block">{card.index}</span>
                <h3 className="font-display text-lg text-text-primary mb-3">{card.title}</h3>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed mt-auto">{card.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
