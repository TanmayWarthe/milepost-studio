import { WorkGrid } from "@/components/sections/WorkGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { workContent } from "@/lib/constants";

export default function WorkPage() {
  return (
    <main>
      <WorkGrid />
      <CtaBand line={workContent.ctaBand.line} cta={workContent.ctaBand.cta} href="/contact" />
    </main>
  );
}
