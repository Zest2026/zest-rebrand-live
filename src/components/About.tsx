const About = () => {
  return (
    <section id="about" className="pt-14 pb-16 lg:pt-20 lg:pb-20 relative overflow-hidden">
      {/* Subtle gradient accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-primary font-bold text-sm tracking-wide uppercase mb-4 block">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Founder-led. <br />Deliberately Selective.
          </h2>
          <p className="text-lg text-foreground/75 mb-4">
            We&apos;re Allen and Luke - good friends and co-founders of Zest Search. For the last 12+ years, we&apos;ve each specialised in one thing: hiring Product and Design leaders across Europe.
          </p>
          <p className="text-lg text-foreground/75">
            We only take on searches where we&apos;re confident we can deliver an exceptional outcome. No handoffs, no layers - every mandate is run directly by one of us, from brief to signed offer.
          </p>
        </div>

        {/* Our approach - static list */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">
            Our approach
          </h3>
          <div className="grid gap-4 md:gap-6 md:grid-cols-2">
            <div className="p-5 rounded-2xl bg-card border border-foreground/15">
              <h4 className="text-lg font-semibold mb-2 text-primary">Deep specialism</h4>
              <p className="text-sm text-foreground/75">
                Product and Design leadership roles across VC & PE-backed startups in Europe - that&apos;s all we do.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-card border border-foreground/15">
              <h4 className="text-lg font-semibold mb-2 text-primary">Deliberately low volume</h4>
              <p className="text-sm text-foreground/75">
                We cap the number of live searches so every mandate gets founder-level attention and momentum from brief to offer.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-card border border-foreground/15">
              <h4 className="text-lg font-semibold mb-2 text-primary">Embedded in VC ecosystems</h4>
              <p className="text-sm text-foreground/75">
                We partner closely with VC talent teams and portfolio founders, often as the go-to search partner across portfolios.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-card border border-foreground/15">
              <h4 className="text-lg font-semibold mb-2 text-primary">Direct, honest feedback</h4>
              <p className="text-sm text-foreground/75">
                We&apos;re transparent about market realities, role definition and process, so you can make confident hiring decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
