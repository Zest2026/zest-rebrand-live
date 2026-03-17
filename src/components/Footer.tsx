import zestLogoFull from "@/assets/zest-logo-full.png";

const navLinks = [
  { label: "What We Do", href: "#services" },
  { label: "Track Record", href: "#track-record" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About Us", href: "#about" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center justify-center w-full md:w-auto">
            <img src={zestLogoFull} alt="Zest Search" className="h-20 w-auto" />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile: just the CTA */}
        </div>

        {/* Bottom bar */}
        <div className="py-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>© {currentYear} Zest Search. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
