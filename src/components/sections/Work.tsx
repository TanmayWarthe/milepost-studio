import Image from "next/image";
import { workContent } from "@/lib/constants";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16 md:mb-24 text-center md:text-left max-w-2xl">
          <RevealOnScroll>
            <SectionEyebrow>{workContent.eyebrow}</SectionEyebrow>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-text-primary leading-tight text-balance">
              {workContent.heading}
            </h2>
          </RevealOnScroll>
        </div>

        <div className="space-y-16 md:space-y-24">
          {workContent.items.map((item, i) => (
            <RevealOnScroll key={i} delay={0.1}>
              <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className={`md:col-span-7 lg:col-span-8 rounded-2xl overflow-hidden bg-surface relative aspect-[4/3] md:aspect-[16/9] transition-transform duration-500 group-hover:scale-[1.02] ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                  {/* Placeholder for real images */}
                  <div className="absolute inset-0 flex items-center justify-center bg-surface-hover">
                    <span className="font-mono text-text-faint">{item.image}</span>
                  </div>
                </div>
                
                <div className={`md:col-span-5 lg:col-span-4 flex flex-col justify-center ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <span className="font-mono text-sm text-gold-deep mb-4 block">{item.category}</span>
                  <h3 className="font-display text-3xl md:text-4xl text-text-primary mb-6">{item.title}</h3>
                  <p className="text-lg text-text-secondary leading-relaxed mb-8">{item.body}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        <RevealOnScroll delay={0.2} className="mt-20 pt-10 border-t border-hairline text-center">
          <p className="text-sm font-mono text-text-faint uppercase tracking-wider">{workContent.footnote}</p>
        </RevealOnScroll>

      </div>
    </section>
  );
}
