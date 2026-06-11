import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import ContactModal from "@/components/ContactModal";

const Contact = () => {
  return (
    <section id="contact" className="pt-14 pb-16 lg:pt-20 lg:pb-20 relative overflow-hidden">
      {/* Subtle gradient accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
            Hiring a Product or Design leader, or ready for your next career move?
          </h2>

          <ContactModal>
            <Button variant="hero" size="xl" className="group">
              <Mail className="w-5 h-5" />
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </ContactModal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
