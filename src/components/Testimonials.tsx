import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import crisImage from "@/assets/testimonials/cris.jpeg";
import charlesImage from "@/assets/testimonials/charles.png";
import alexImage from "@/assets/testimonials/alex.jpeg";
import chrisImage from "@/assets/testimonials/chris.jpeg";
import { Button } from "@/components/ui/button";
import productboardLogo from "@/assets/logos/productboard.png";
import localglobeLogo from "@/assets/logos/localglobe.png";
import causalyLogo from "@/assets/logos/causaly.png";
import rekordLogo from "@/assets/logos/rekord-v2.png";


const companies = [
  "Productboard", "Portswigger", "Paysend", "Gradient Labs", "Fonoa",
  "Pixaera", "Perk", "UMAIN", "Causaly", "Kittl", "Loctax", "Tebi", "Rekord",
  "Airhelp", "Sherpany", "Tembo", "Sequence", "Emitwise"
];

const testimonials = [
  {
    quote: "We started working with Zest Search in October 2023 and Allen and Luke quickly became trusted partners to our leadership and Talent teams.\n\nThey’ve helped us fill several critical Product and Design leadership roles across Europe and have a deep understanding of the market and what great looks like.\n\nIf you want thoughtful, reliable partners who really understand the European Product and Design landscape, I’d strongly recommend Zest Search.",
    author: "Cris Domingo",
    role: "VP of Talent",
    company: "Productboard",
    companyType: "Series D Productivity",
    rolesHired: "Multiple senior hires (Principal & Director, Series D)",
    image: crisImage,
    logo: productboardLogo,
  },
  {
    quote: "Worked with Luke at LocalGlobe, where he completed complex searches for founding designers.\n\nLuke is incredibly knowledgeable about the market, well-connected to top talent, and genuinely easy to work with. I've referred Zest across our portfolio and have only heard positive feedback.\n\nA great soundboard who truly cares about their craft and is extremely reliable. Can't recommend Zest enough!",
    author: "Charles Guillemet",
    role: "Venture Partner",
    company: "LocalGlobe",
    companyType: "Venture Capital",
    rolesHired: "Founding Designers",
    image: charlesImage,
    logo: localglobeLogo,
  },
  {
    quote: "We partnered with Allen and Zest on a difficult Staff Product Manager search with several challenging requirements.\n\nHe did a fantastic job mapping the market, sharing insights and keeping us updated throughout the process. The search was highly proactive, with regular touchpoints and a clear pipeline dashboard.\n\nWe had full confidence we were seeing the best talent in the market and the role was successfully filled.",
    author: "Alex Most",
    role: "Talent Lead",
    company: "Causaly",
    companyType: "Series B Life Science",
    rolesHired: "Staff Product Manager (Causaly, Series B)",
    image: alexImage,
    logo: causalyLogo,
  },
  {
    quote: "We’re delighted to have found our Founding Product Designer, Andy, and a huge part of that comes down to Luke.\n\nHe quickly understood what we were building at Rekord and the type of designer we needed at such a critical stage.\n\nThe process was smooth, efficient and one of the best hiring experiences we’ve had. I’d strongly recommend Luke to any founder hiring exceptional design talent.",
    author: "Chris Lynch",
    role: "Co-Founder",
    company: "Rekord",
    companyType: "Seed AI Fintech",
    rolesHired: "Founding Product Designer (Rekord, Seed)",
    image: chrisImage,
    logo: rekordLogo,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-14 lg:py-20 relative overflow-hidden">
      {/* Subtle gradient accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
      {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-8 md:mb-12">
          <span className="text-primary font-bold text-sm tracking-wide uppercase mb-3 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            What founders, investors and talent leaders say about working with Zest.
          </h2>
        </div>


        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div
            key={currentIndex}
            className="pb-4 pt-4 px-4 md:p-6 lg:p-8 rounded-2xl bg-card border-2 border-foreground/15 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 md:h-[400px] flex flex-col"
          >
            {/* Company & hired badge */}
            <div className="mb-3 md:mb-6 flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
              <div className="flex justify-center md:justify-start">
                <img src={testimonial.logo} alt={testimonial.company} className="h-8 md:h-8 object-contain brightness-0 invert opacity-90" style={{ objectPosition: 'left' }} />
              </div>
              <span className="inline-flex items-center self-center md:self-auto px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-sm md:text-sm font-medium">
                Hired: {testimonial.rolesHired}
              </span>
            </div>

            {/* Person */}
            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.author}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover ring-2 ring-primary/20 transition-all duration-300 hover:ring-primary/50"
              />
              <div>
                <p className="text-lg md:text-lg font-bold tracking-tight">{testimonial.author}</p>
                <p className="text-sm md:text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>

            <Quote className="w-5 h-5 md:w-6 md:h-6 text-primary/30 mb-2 md:mb-3 shrink-0" />
            
            <blockquote className="text-xs md:text-sm text-foreground/80 leading-relaxed whitespace-pre-line overflow-y-auto flex-1">
              "{testimonial.quote}"
            </blockquote>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full transition-all duration-200 hover:scale-110 hover:border-primary/50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-primary w-6" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full transition-all duration-200 hover:scale-110 hover:border-primary/50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
