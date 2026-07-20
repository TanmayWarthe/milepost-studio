import { homeContent } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function StudioIntro() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-2xl md:text-3xl font-display font-light text-text-primary leading-tight text-balance mb-8">
            {homeContent.studioTeaser}
          </h2>
          <Button href="/studio" variant="ghost">
            Read our manifesto
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
