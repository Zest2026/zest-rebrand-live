import fonoaLogo from "@/assets/logos/fonoa-v2.png";
import duvoLogo from "@/assets/logos/duvo.png";
import gradientLabsLogo from "@/assets/logos/gradient-labs-v2.png";
import mireloLogo from "@/assets/logos/mirelo.png";
import paysendLogo from "@/assets/logos/paysend-v2.png";
import perkLogo from "@/assets/logos/perk-v2.png";
import portswiggerLogo from "@/assets/logos/portswigger-v2.png";
import tebiLogo from "@/assets/logos/tebi-v2.png";
import productboardLogo from "@/assets/logos/productboard.png";

const logoWhiteFilter = { filter: "brightness(0) invert(1)" } as const;

type HireCard = {
  company: string;
  roles: string[];
  logo: string;
  logoMaxClassName?: string;
  logoImgClassName?: string;
};

const hires: HireCard[] = [
  { company: "Duvo", roles: ["Head of Product & Design"], logo: duvoLogo },
  {
    company: "Productboard",
    roles: ["Director of Product Design"],
    logo: productboardLogo,
    logoMaxClassName: "max-h-9 sm:max-h-10 md:max-h-11",
  },
  {
    company: "Portswigger",
    roles: ["VP of Product Management"],
    logo: portswiggerLogo,
    logoMaxClassName: "max-h-7 sm:max-h-8 md:max-h-9",
  },
  {
    company: "Mirelo AI",
    roles: ["Principal Product Designer"],
    logo: mireloLogo,
    logoMaxClassName: "max-h-10 sm:max-h-11 md:max-h-12",
  },
  {
    company: "Fonoa",
    roles: ["Principal Product Manager"],
    logo: fonoaLogo,
    logoMaxClassName: "h-5 sm:h-6 md:h-7 max-h-none",
    logoImgClassName: "max-w-[140px] object-left",
  },
  { company: "Gradient Labs", roles: ["Founding Designer"], logo: gradientLabsLogo },
  {
    company: "Perk",
    roles: ["Lead Group Product Manager"],
    logo: perkLogo,
    logoMaxClassName: "max-h-11 sm:max-h-12 md:max-h-14",
  },
  {
    company: "Tebi",
    roles: ["Product Design Lead"],
    logo: tebiLogo,
    logoMaxClassName: "max-h-6 sm:max-h-7 md:max-h-8",
  },
  {
    company: "Paysend",
    roles: ["Director of Product"],
    logo: paysendLogo,
    logoMaxClassName: "max-h-5 sm:max-h-6 md:max-h-7",
  },
];

const TrackRecord = () => {

  return (
    <section id="track-record" className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-primary font-bold text-sm tracking-wide uppercase mb-4 block">
            Track Record
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Examples of Product and Design hires across Europe
          </h2>

          {/* Logo + roles grid (non-clicky) */}
          <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 items-start">
            {hires.map((hire) => (
              <div
                key={hire.company}
                className="flex flex-col items-center text-center p-4 sm:p-5 md:p-6 rounded-2xl bg-card border-2 border-foreground/15 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="h-12 sm:h-14 md:h-16 w-full flex items-center justify-center shrink-0">
                  <img
                    src={hire.logo}
                    alt={hire.company}
                    className={`${hire.logoMaxClassName ?? "max-h-8 sm:max-h-9 md:max-h-10"} ${hire.logoImgClassName ?? "max-w-[88%] object-center"} w-auto object-contain`}
                    style={logoWhiteFilter}
                  />
                </div>

                <div className="mt-3 md:mt-4 w-full min-h-[2.5rem] sm:min-h-[2.75rem] space-y-1.5 flex flex-col justify-start">
                  {hire.roles.map((role) => (
                    <div key={role} className="text-sm md:text-sm text-foreground/80 leading-snug">
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
