import { workContent } from "@/lib/constants";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Divider } from "@/components/ui/Divider";

export function WorkGrid() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <section className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center md:text-left max-w-2xl">
          <RevealOnScroll>
            <SectionEyebrow>{workContent.eyebrow}</SectionEyebrow>
            <h1 className="text-4xl md:text-5xl font-display font-light text-text-primary leading-[1.1] text-balance">
              {workContent.heading}
            </h1>
          </RevealOnScroll>
        </div>

        <Divider />

        <div className="space-y-16 md:space-y-24">
          {workContent.items.map((item, i) => (
            <div key={i}>
              <RevealOnScroll>
                <div className="group">
                  <div className="rounded-2xl overflow-hidden bg-surface relative aspect-[16/10] transition-transform duration-700 ease-out group-hover:scale-[1.01] mb-6 md:mb-8 shadow-sm group-hover:shadow-xl">
                    <div className="absolute inset-0 flex items-center justify-center bg-surface-hover/50 backdrop-blur-sm transition-colors duration-500 group-hover:bg-surface-hover/30">
                      <span className="font-mono text-text-faint">{item.image}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                    <div className="md:col-span-3">
                      <span className="font-mono text-xs md:text-sm text-gold-deep block mt-1">{item.category}</span>
                    </div>
                    <div className="md:col-span-9 flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <h3 className="font-display text-lg text-text-primary">{item.title}</h3>
                      <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-md font-light">{item.body}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
              {i < workContent.items.length - 1 && <Divider />}
            </div>
          ))}
        </div>

        <Divider />
        
        <RevealOnScroll delay={0.2} className="text-center">
          <p className="text-xs font-mono text-text-faint uppercase tracking-wider">{workContent.footnote}</p>
        </RevealOnScroll>
      </section>
    </div>
  );
}
