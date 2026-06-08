import React from "react";

const Advisors = () => {
  return (
    <section className="pt-14 pb-16 lg:pt-20 lg:pb-20 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary font-bold text-sm tracking-wide uppercase mb-4 block">
            Beyond the Search
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advisor and operator network.
          </h2>
          <p className="text-lg text-foreground/75 mb-3">
            We don&apos;t just place leaders - we help set companies up for success.
          </p>
          <p className="text-lg text-foreground/75 mb-3">
            Alongside searches, we draw on a pre-vetted network of senior Product and Design operators turned advisors who support founders and coach leadership teams at critical moments.
          </p>
          <p className="text-lg text-foreground/75">
            Our advisors typically help with product vision and strategy, team and leadership development, go-to-market, customer discovery, and improving product impact and metrics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advisors;

