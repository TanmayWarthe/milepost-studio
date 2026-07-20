"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

  const isDarkBg = !isScrolled && pathname === "/";

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${isScrolled ? "bg-background/85 backdrop-blur-xl border-b border-hairline py-4 shadow-sm" : "bg-transparent py-8"}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className={`font-display text-2xl font-medium tracking-tight transition-colors duration-300 ${isDarkBg ? "text-ink-text hover:text-gold" : "text-text-primary hover:text-gold"}`}>
          {siteConfig.name}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-2">
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            const linkColor = isActive ? "text-gold" : isDarkBg ? "text-ink-text/80 hover:text-gold" : "text-text-secondary hover:text-gold";
            
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className="relative px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                <span className={`relative z-10 ${linkColor}`}>
                  {link.name}
                </span>
                {isActive && (
                  <motion.span 
                    layoutId="navbar-active"
                    className="absolute left-3 right-3 -bottom-1 h-[2px] bg-gold"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary" magnetic={false} className="shadow-none !py-2.5 !px-5">Start a project</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 transition-colors duration-300 ${isDarkBg && !mobileMenuOpen ? "text-ink-text" : "text-text-primary"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[72px] bg-ink/20 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-full left-0 right-0 bg-background border-b border-hairline p-6 flex flex-col md:hidden shadow-2xl"
            >
              <nav className="flex flex-col space-y-6 pt-2 pb-8">
                {siteConfig.navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link 
                      key={link.name} 
                      href={link.href} 
                      className={`text-3xl font-display font-light transition-colors ${isActive ? "text-gold" : "text-text-primary hover:text-gold"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
              <Button href="/contact" variant="primary" className="w-full !py-4 text-base" onClick={() => setMobileMenuOpen(false)}>
                Start a project
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
