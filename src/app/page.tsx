import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { StudioIntro } from "@/components/sections/StudioIntro";
import { Services } from "@/components/sections/Services";
import { CtaBand } from "@/components/sections/CtaBand";
import { homeContent } from "@/lib/constants";
import { Divider } from "@/components/ui/Divider";
import { WebLatticeBackground } from "@/components/ui/WebLatticeBackground";

export default function Home() {
  return (
    <main>
      <WebLatticeBackground>
        <Hero />
        <Marquee />
      </WebLatticeBackground>
      <StudioIntro />
      <div className="px-6 lg:px-8 max-w-5xl mx-auto"><Divider /></div>
      <Services />
      <CtaBand line={homeContent.ctaBand.line} cta={homeContent.ctaBand.cta} href="/contact" />
    </main>
  );
}
