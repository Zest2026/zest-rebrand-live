import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Founding Hires",
    placements: [
      { role: "Founding Designer", company: "Gradient Labs", wrap: true },
      { role: "Founding Designer", company: "Mirelo AI", wrap: true },
      { role: "Founding Designer", company: "Rekord", wrap: true },
      { role: "Founding Product Manager", company: "Loctax" },
      { role: "Founding Designer", company: "Pixaera", wrap: true },
      { role: "Founding Designer", company: "Tembo", wrap: true },
    ],
  },
  {
    title: "Senior Leadership Hires",
    placements: [
      { role: "VP of Product Management", company: "Portswigger" },
      { role: "Director of Product Design", company: "Productboard" },
      { role: "Director of Product Management", company: "UMAIN" },
      { role: "Director of Product Design", company: "Paysend" },
      { role: "Senior Group Product Manager", company: "Perk" },
      { role: "Interim VP of Design", company: "Emitwise", wrap: true },
    ],
  },
  {
    title: "Senior IC Hires",
    placements: [
      { role: "Principal Product Manager", company: "Productboard" },
      { role: "Principal Product Designer", company: "Productboard" },
      { role: "Principal Product Manager", company: "Fonoa", wrap: true },
      { role: "Product Design Lead", company: "Tebi", wrap: true },
      { role: "Staff Product Manager", company: "Causaly", wrap: true },
      { role: "Staff Product Designer", company: "Emitwise", wrap: true },
    ],
  },
];

const TrackRecord = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const current = categories[activeIndex];

  return (
    <section id="track-record" className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary font-bold text-sm tracking-wide uppercase mb-4 block">
            Track Record
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Examples of Product and Design hires across Europe
          </h2>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((cat, index) => (
              <button
                key={cat.title}
                onClick={() => setActiveIndex(index)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Placements card */}
          <div className="group p-6 md:p-8 rounded-2xl bg-card border-2 border-foreground/15 hover:border-primary/50 transition-all duration-500 hover-lift min-h-[130px]">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">{current.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
              {current.placements.map((placement, idx) => (
                <div key={idx} className="flex items-start gap-2 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                   <span className="text-sm md:text-base">
                    {placement.role} <br /><span className="text-primary">{placement.company}</span>
                   </span>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm text-foreground/60">
            All of these searches were for PE/VC-backed startups across Europe, with the majority coming via VC referrals.
          </p>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full transition-all duration-200 hover:scale-110 hover:border-primary/50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2">
              {categories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? "bg-primary w-6" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
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

export default TrackRecord;
