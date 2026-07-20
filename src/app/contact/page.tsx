import { ContactForm } from "@/components/sections/ContactForm";
import { CtaBand } from "@/components/sections/CtaBand";
import { contactContent } from "@/lib/constants";

export default function ContactPage() {
  return (
    <main>
      <ContactForm />
      <CtaBand line={contactContent.ctaBand.line} cta={contactContent.ctaBand.cta} href="#contact-form" />
    </main>
  );
}
