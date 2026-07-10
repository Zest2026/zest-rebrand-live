import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import zestLogo from "@/assets/zest-logo-full.png";
import ContactModal from "@/components/ContactModal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const navLinks = [
    { label: "What We Do", href: "#services" },
    { label: "Track Record", href: "#track-record" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "About Us", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={zestLogo} alt="Zest Search" className="h-16 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <ContactModal>
              <Button variant="yellow" size="default" className="text-base">Get in Touch</Button>
            </ContactModal>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="yellow"
                size="lg"
                className="mt-4"
                onClick={() => {
                  setIsOpen(false);
                  setContactOpen(true);
                }}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </nav>
  );
};

export default Navigation;
