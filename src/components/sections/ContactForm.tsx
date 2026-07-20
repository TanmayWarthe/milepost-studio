"use client";

import { useState } from "react";
import { contactContent, siteConfig } from "@/lib/constants";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div id="contact-form" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <section className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          <div>
            <RevealOnScroll>
              <SectionEyebrow>{contactContent.eyebrow}</SectionEyebrow>
              <h1 className="text-4xl md:text-5xl font-display font-light text-text-primary leading-[1.1] mb-6 text-balance">
                {contactContent.heading}
              </h1>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light mb-12 max-w-md">
                {contactContent.body}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h4 className="font-mono text-xs md:text-sm uppercase tracking-widest text-text-faint mb-3">Call / WhatsApp</h4>
                  <a href={siteConfig.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-text-primary hover:text-gold transition-colors block">
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div>
                  <h4 className="font-mono text-xs md:text-sm uppercase tracking-widest text-text-faint mb-3">Hours</h4>
                  <p className="text-sm md:text-base text-text-primary">{contactContent.hours}</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.2} className="lg:mt-4">
            <form onSubmit={handleSubmit} className="bg-surface p-6 md:p-10 rounded-2xl border border-hairline">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">Full name</label>
                  <input type="text" id="name" required className="w-full bg-background border border-hairline rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors" />
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-text-primary mb-2">Business type</label>
                  <select id="type" required className="w-full bg-background border border-hairline rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors appearance-none">
                    <option value="">Select an option</option>
                    {contactContent.businessTypes.map((type, i) => (
                      <option key={i} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">Message</label>
                  <textarea id="message" required rows={5} className="w-full bg-background border border-hairline rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"></textarea>
                </div>

                <Button variant="primary" className="w-full justify-center !py-3 text-sm" type="submit" disabled={isSubmitted} magnetic={false}>
                  {isSubmitted ? contactContent.successMessage : contactContent.submitLabel}
                </Button>
              </div>
            </form>
          </RevealOnScroll>

        </div>
      </section>
    </div>
  );
}
