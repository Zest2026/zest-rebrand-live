import { Linkedin } from 'lucide-react';
import lukeImage from '@/assets/founders/luke.jpg';
import allenImage from '@/assets/founders/allen.jpg';

const founders = [
  {
    name: "Allen Bastow",
    role: "Co-Founder",
    focus: "Product Search",
    bio: "13+ years' experience in product management recruitment across Europe and North America.",
    initials: "AB",
    image: allenImage,
    imageContentClassName: "object-[50%_36%] scale-[1.00]",
    linkedin: "https://www.linkedin.com/in/allenbastow/",
  },
  {
    name: "Luke Pallett",
    role: "Co-Founder",
    focus: "Design Search",
    bio: "12 years' experience in product design recruitment across Europe.",
    initials: "LP",
    image: lukeImage,
    imageContentClassName: "object-[50%_66%] scale-[1.08]",
    linkedin: "https://www.linkedin.com/in/luke-pallett/",
  },
];

const Services = () => {
  return (
    <section id="services" className="pt-14 pb-16 lg:pt-20 lg:pb-20 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* What We Do intro + Founders */}
        <div className="mb-14 text-center">
          <div className="max-w-4xl mx-auto mb-10">
            <span className="text-primary font-bold text-sm tracking-wide uppercase mb-4 block">
              What We Do
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Product Management and Design recruitment across Europe
            </h2>
            <p className="text-lg text-foreground/75 mb-4">
              We run a small number of searches at any time, each personally led by one of the founders. Our focus is narrow and deliberate: Product and Design leadership at PE and VC-backed companies.
            </p>
            <p className="text-lg text-foreground/75 font-bold mb-2">
              From Founding Product and Design leaders to Principal ICs, Directors and VPs.
            </p>
          </div>

          {/* Founders side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 max-w-5xl mx-auto mt-6 items-stretch">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="flex items-start gap-5 p-6 lg:p-7 h-full w-full rounded-2xl bg-card border-2 border-foreground/15 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 text-left"
              >
                {founder.image ? (
                  <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-full shrink-0 ring-2 ring-primary/20 overflow-hidden">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className={`w-full h-full object-cover ${founder.imageContentClassName ?? ""}`}
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 lg:w-36 lg:h-36 rounded-full bg-primary/20 flex items-center justify-center shrink-0 ring-2 ring-primary/20">
                    <span className="text-3xl font-bold text-primary">{founder.initials}</span>
                  </div>
                )}
                <div className="flex flex-col flex-1 min-w-0">
                  <p className="text-base font-medium text-primary mb-1.5">{founder.focus}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xl lg:text-2xl font-bold tracking-tight">{founder.name}</p>
                    <a 
                      href={founder.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                  <p className="text-base text-foreground/60">{founder.role}</p>
                  {founder.bio && (
                    <p className="text-sm text-foreground/50 mt-2 min-h-[3.5rem] leading-relaxed">{founder.bio}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
