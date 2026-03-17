const companies = [
  "Productboard", "Portswigger", "Paysend", "Gradiant Labs", "Fonoa", 
  "Pixaera", "Perk", "UMAIN", "Causaly", "Kittl", "Loctax", "Tebi"
];

const LogoMarquee = () => {
  return (
    <div className="w-full overflow-hidden py-8 mt-16">
      <div className="flex animate-marquee-fast">
        {[...companies, ...companies].map((company, idx) => (
          <span
            key={idx}
            className="mx-8 text-sm font-semibold text-foreground/90 whitespace-nowrap"
          >
            {company}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
