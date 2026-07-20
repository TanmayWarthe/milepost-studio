"use client";

import { useState } from "react";
import { contactContent, siteConfig } from "@/lib/constants";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation of form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <RevealOnScroll>
              <SectionEyebrow>{contactContent.eyebrow}</SectionEyebrow>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-text-primary leading-tight mb-6 text-balance">
                {contactContent.heading}
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-12 max-w-md">
                {contactContent.body}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-text-faint mb-2">Call / WhatsApp</h4>
                  <a href={siteConfig.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-display text-text-primary hover:text-gold transition-colors block">
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-text-faint mb-2">Hours</h4>
                  <p className="text-text-primary">{contactContent.hours}</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-background p-8 md:p-10 rounded-2xl shadow-sm border border-hairline">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">Full name</label>
                  <input type="text" id="name" required className="w-full bg-surface border border-hairline rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors" />
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-text-primary mb-2">Business type</label>
                  <select id="type" required className="w-full bg-surface border border-hairline rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors appearance-none">
                    <option value="">Select an option</option>
                    {contactContent.businessTypes.map((type, i) => (
                      <option key={i} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">Message</label>
                  <textarea id="message" required rows={4} className="w-full bg-surface border border-hairline rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"></textarea>
                </div>

                <Button variant="primary" className="w-full justify-center" type="submit" disabled={isSubmitted}>
                  {isSubmitted ? contactContent.successMessage : contactContent.submitLabel}
                </Button>
              </div>
            </form>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
