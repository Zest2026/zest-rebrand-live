import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import crisImage from "@/assets/testimonials/cris.jpeg";
import charlesImage from "@/assets/testimonials/charles.png";
import alexImage from "@/assets/testimonials/alex.jpeg";
import chrisImage from "@/assets/testimonials/chris.jpeg";
import oliviaImage from "@/assets/testimonials/olivia.png";
import sumeetaImage from "@/assets/testimonials/sumeeta.png";
import { Button } from "@/components/ui/button";
import productboardLogo from "@/assets/logos/productboard.png";
import localglobeLogo from "@/assets/logos/localglobe.png";
import causalyLogo from "@/assets/logos/causaly.png";
import rekordLogo from "@/assets/logos/rekord-v2.png";
import indexVenturesLogo from "@/assets/logos/index-ventures-v2.png";
import loctaxLogo from "@/assets/logos/loctax.png";

const logoWhiteFilter = { filter: "brightness(0) invert(1)" } as const;
const PER_PAGE = 3;

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  rolesHired: string;
  image?: string;
  logo?: string;
  logoMaxHeight?: string;
  isPlaceholder?: boolean;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I have relied heavily on Zest Search during my time at Index Ventures.\n\nThey have filled crucial roles within our portfolio and I consistently hear great feedback from Founders.\n\nI would not hesitate to recommend if you want a high quality boutique recruiting experience.",
    author: "Olivia Heathcote",
    role: "Talent",
    company: "Index Ventures",
    rolesHired: "Multiple senior hires (Founding, Principal & Director, Seed to Series D)",
    image: oliviaImage,
    logo: indexVenturesLogo,
  },
  {
    quote:
      "We started working with Zest Search in October 2023 and Allen and Luke quickly became trusted partners to our leadership and Talent teams.\n\nThey’ve helped us fill several critical Product and Design leadership roles across Europe and have a deep understanding of the market and what great looks like.\n\nIf you want thoughtful, reliable partners who really understand the European Product and Design landscape, I’d strongly recommend Zest Search.",
    author: "Cris Domingo",
    role: "VP of Talent",
    company: "Productboard",
    rolesHired: "Multiple senior hires (Principal & Director, Series D)",
    image: crisImage,
    logo: productboardLogo,
  },
  {
    quote:
      "Worked with Luke at LocalGlobe, where he completed complex searches for founding designers.\n\nLuke is incredibly knowledgeable about the market, well-connected to top talent, and genuinely easy to work with. I've referred Zest across our portfolio and have only heard positive feedback.\n\nA great soundboard who truly cares about their craft and is extremely reliable. Can't recommend Zest enough!",
    author: "Charles Guillemet",
    role: "Venture Partner",
    company: "LocalGlobe",
    rolesHired: "Founding Designers\nSeed & Series A",
    image: charlesImage,
    logo: localglobeLogo,
  },
  {
    quote:
      "We partnered with Allen and Zest on a difficult Staff Product Manager search with several challenging requirements.\n\nHe did a fantastic job mapping the market, sharing insights and keeping us updated throughout the process. The search was highly proactive, with regular touchpoints and a clear pipeline dashboard.\n\nWe had full confidence we were seeing the best talent in the market and the role was successfully filled.",
    author: "Alex Most",
    role: "Talent Lead",
    company: "Causaly",
    rolesHired: "Staff Product Manager\nSeries B",
    image: alexImage,
    logo: causalyLogo,
  },
  {
    quote:
      "We’re delighted to have found our Founding Product Designer, Andy, and a huge part of that comes down to Luke.\n\nHe quickly understood what we were building at Rekord and the type of designer we needed at such a critical stage.\n\nThe process was smooth, efficient and one of the best hiring experiences we’ve had. I’d strongly recommend Luke to any founder hiring exceptional design talent.",
    author: "Chris Lynch",
    role: "Co-Founder",
    company: "Rekord",
    rolesHired: "Founding Product Designer\nPre-Seed",
    image: chrisImage,
    logo: rekordLogo,
  },
  {
    quote:
      "Highly recommend Allen at Zest following his excellent work on a critical hire for our business.\n\nThank you, Allen, for your expertise and support throughout the process!",
    author: "Sumeeta Ahluwalia",
    role: "Chief Operating Officer",
    company: "Loctax",
    rolesHired: "Founding Product Manager\nSeries A",
    image: sumeetaImage,
    logo: loctaxLogo,
    logoMaxHeight: "max-h-10 sm:max-h-11 md:max-h-12",
  },
];

const pageCount = Math.ceil(testimonials.length / PER_PAGE);
const mobileTestimonials = testimonials.filter((testimonial) => !testimonial.isPlaceholder);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <article
    className={cn(
      "flex flex-col items-center text-center p-4 sm:p-5 md:p-6 rounded-2xl bg-card border-2 border-foreground/15 transition-all duration-300",
      testimonial.isPlaceholder
        ? "border-dashed border-foreground/10 opacity-40"
        : "border-foreground/15 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    )}
  >
    <div className="h-12 sm:h-14 md:h-16 w-full flex items-center justify-center shrink-0">
      {testimonial.logo ? (
        <img
          src={testimonial.logo}
          alt={testimonial.company}
          className={`${testimonial.logoMaxHeight ?? "max-h-8 sm:max-h-9 md:max-h-10"} max-w-[88%] w-auto object-contain object-center`}
          style={logoWhiteFilter}
        />
      ) : (
        <span className="text-xs text-foreground/40">Company logo</span>
      )}
    </div>

    <span className="mt-3 inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium leading-snug whitespace-pre-line">
      Hired: {testimonial.rolesHired}
    </span>

    <div className="mt-4 flex flex-col items-center gap-2">
      {testimonial.image ? (
        <img
          src={testimonial.image}
          alt={testimonial.author}
          className="w-16 h-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full object-cover ring-2 ring-primary/20"
        />
      ) : (
        <div
          className="w-16 h-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full bg-foreground/10 ring-2 ring-foreground/10"
          aria-hidden
        />
      )}
      <div>
        <p className="text-base sm:text-lg font-bold tracking-tight">{testimonial.author}</p>
        <p className="text-sm text-foreground/60">{testimonial.role}</p>
      </div>
    </div>

    <Quote className="w-5 h-5 text-primary/30 mt-4 shrink-0" />

    <blockquote className="mt-2 text-xs sm:text-sm text-foreground/80 leading-relaxed whitespace-pre-line text-left w-full min-h-[6rem] sm:min-h-[7rem]">
      {testimonial.isPlaceholder ? (
        <span className="text-foreground/40">Quote</span>
      ) : (
        <>&ldquo;{testimonial.quote}&rdquo;</>
      )}
    </blockquote>
  </article>
);

type CarouselControlsProps = {
  index: number;
  count: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
  prevLabel: string;
  nextLabel: string;
  dotLabel: (index: number) => string;
};

const CarouselControls = ({
  index,
  count,
  onPrev,
  onNext,
  onSelect,
  prevLabel,
  nextLabel,
  dotLabel,
}: CarouselControlsProps) => {
  if (count <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <Button
        variant="outline"
        size="icon"
        onClick={onPrev}
        disabled={index === 0}
        className="rounded-full"
        aria-label={prevLabel}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      <div className="flex gap-2">
        {Array.from({ length: count }).map((_, dotIndex) => (
          <button
            key={dotIndex}
            type="button"
            onClick={() => onSelect(dotIndex)}
            aria-label={dotLabel(dotIndex)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              dotIndex === index ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={onNext}
        disabled={index === count - 1}
        className="rounded-full"
        aria-label={nextLabel}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
};

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const visible = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section id="testimonials" className="pt-14 pb-16 lg:pt-20 lg:pb-20 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-primary font-bold text-sm tracking-wide uppercase mb-3 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10">
            What founders, investors and talent leaders say about working with Zest.
          </h2>

          <div className="md:hidden">
            <TestimonialCard testimonial={mobileTestimonials[mobileIndex]} />
            <CarouselControls
              index={mobileIndex}
              count={mobileTestimonials.length}
              onPrev={() => setMobileIndex((index) => Math.max(0, index - 1))}
              onNext={() => setMobileIndex((index) => Math.min(mobileTestimonials.length - 1, index + 1))}
              onSelect={setMobileIndex}
              prevLabel="Previous testimonial"
              nextLabel="Next testimonial"
              dotLabel={(index) => `Show testimonial ${index + 1}`}
            />
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 items-stretch">
            {visible.map((testimonial) => (
              <TestimonialCard
                key={testimonial.isPlaceholder ? "placeholder" : testimonial.author}
                testimonial={testimonial}
              />
            ))}
          </div>

          <div className="hidden md:block">
            <CarouselControls
              index={page}
              count={pageCount}
              onPrev={() => setPage((p) => Math.max(0, p - 1))}
              onNext={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
              onSelect={setPage}
              prevLabel="Previous testimonials"
              nextLabel="Next testimonials"
              dotLabel={(index) => `Show testimonials page ${index + 1}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
