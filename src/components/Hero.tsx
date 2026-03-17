import airhelpLogo from "@/assets/logos/airhelp-v2.png";
import eidraLogo from "@/assets/logos/eidra-v2.png";
import emistwiseLogo from "@/assets/logos/emitwise-v2.png";
import loctaxLogo from "@/assets/logos/loctax-v2.png";
import kittlLogo from "@/assets/logos/kittl-v2.png";
import pixaeraLogo from "@/assets/logos/pixaera-v2.png";
import causalyLogo from "@/assets/logos/causaly-v2.png";
import perkLogo from "@/assets/logos/perk-v2.png";
import tebiLogo from "@/assets/logos/tebi-v2.png";
import fonoaLogo from "@/assets/logos/fonoa-v2.png";
import portswiggerLogo from "@/assets/logos/portswigger-v2.png";
import paysendLogo from "@/assets/logos/paysend-v2.png";
import gradientLabsLogo from "@/assets/logos/gradient-labs-v2.png";
import productboardLogo from "@/assets/logos/productboard.png";

const companyLogos = [
  { name: "Pixaera", logo: pixaeraLogo },
  { name: "Emitwise", logo: emistwiseLogo, height: "h-6" },
  { name: "Productboard", logo: productboardLogo, height: "h-12" },
  { name: "Gradient Labs", logo: gradientLabsLogo, height: "h-12" },
  { name: "Tebi", logo: tebiLogo, height: "h-6" },
  { name: "Portswigger", logo: portswiggerLogo, height: "h-6" },
  { name: "Paysend", logo: paysendLogo, height: "h-5" },
  { name: "Fonoa", logo: fonoaLogo, height: "h-5" },
  { name: "Perk", logo: perkLogo, height: "h-16" },
  { name: "Causaly", logo: causalyLogo, height: "h-6" },
  { name: "Kittl", logo: kittlLogo },
  { name: "Loctax", logo: loctaxLogo, height: "h-5" },
  
  { name: "Airhelp", logo: airhelpLogo, height: "h-10" },
  { name: "Eidra", logo: eidraLogo, height: "h-5" },
];

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl">
          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 animate-fade-up animation-delay-100">
            We find the leaders behind <span className="text-primary">great products</span>.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-foreground/75 max-w-2xl mb-10 animate-fade-up animation-delay-300">
            Trusted by Index Ventures, LocalGlobe and LeftLane Capital.
          </p>

        </div>
      </div>

      {/* Company marquee at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden py-6">
        <div className="flex w-max animate-marquee-fast marquee-mobile items-center">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex shrink-0 items-center">
              {companyLogos.map((company, idx) => (
                <span
                  key={idx}
                  className="flex items-center shrink-0"
                  style={{ width: '180px' }}
                >
                  <span className="flex-1 flex items-center justify-center">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className={`${company.height || 'h-8'} max-w-[140px] w-auto object-contain`}
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </span>
                  <span className="text-foreground/20 shrink-0">|</span>
                </span>
              ))}

            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
    </section>
  );
};

export default Hero;
