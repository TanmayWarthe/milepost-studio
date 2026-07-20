import Link from "next/link";
import { footerContent, siteConfig } from "@/lib/constants";
import { MilestoneMark } from "@/components/ui/MilestoneMark";

export function Footer() {
  return (
    <footer className="border-t border-hairline py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-sm text-text-faint">
        <div className="flex flex-col items-center md:items-start gap-4">
          <MilestoneMark className="scale-50 -ml-6 -mt-6" />
          <p>{footerContent.line1}</p>
        </div>
        
        <nav className="flex gap-6 md:gap-8">
          {siteConfig.navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-gold transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        <p className="md:self-end">{footerContent.line2}</p>
      </div>
    </footer>
  );
}
