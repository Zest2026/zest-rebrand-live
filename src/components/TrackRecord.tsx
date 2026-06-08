import duvoLogo from "@/assets/logos/track-record/duvo.png";
import fonoaLogo from "@/assets/logos/track-record/fonoa.png";
import gradientLabsLogo from "@/assets/logos/track-record/gradient-labs.png";
import mireloLogo from "@/assets/logos/track-record/mirelo.png";
import paysendLogo from "@/assets/logos/track-record/paysend.png";
import perkLogo from "@/assets/logos/track-record/perk.png";
import portswiggerLogo from "@/assets/logos/track-record/portswigger.png";
import tebiLogo from "@/assets/logos/track-record/tebi.png";
import productboardLogo from "@/assets/logos/track-record/productboard.png";

const logoWhiteFilter = { filter: "brightness(0) invert(1)" } as const;

const extraLogoTitleGap = new Set(["Perk", "Tebi", "Paysend", "Fonoa"]);

type HireCard = {
  company: string;
  roles: string[];
  logo: string;
  logoMaxHeight?: string;
};

const hires: HireCard[] = [
  { company: "Duvo", roles: ["Head of Product & Design"], logo: duvoLogo },
  { company: "Productboard", roles: ["Director of Product Design"], logo: productboardLogo },
  { company: "Portswigger", roles: ["VP of Product Management"], logo: portswiggerLogo, logoMaxHeight: "max-h-8" },
  { company: "Mirelo AI", roles: ["Principal Product Designer"], logo: mireloLogo },
  { company: "Fonoa", roles: ["Principal Product Manager"], logo: fonoaLogo, logoMaxHeight: "max-h-8" },
  { company: "Gradient Labs", roles: ["Founding Designer"], logo: gradientLabsLogo },
  { company: "Perk", roles: ["Senior Group Product Manager"], logo: perkLogo },
  { company: "Tebi", roles: ["Product Design Lead"], logo: tebiLogo, logoMaxHeight: "max-h-8" },
  { company: "Paysend", roles: ["Director of Product"], logo: paysendLogo, logoMaxHeight: "max-h-7" },
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
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {hires.map((hire) => (
              <div
                key={hire.company}
                className="flex items-center justify-center text-center w-full h-[8.5rem] p-3 md:p-4 rounded-2xl bg-card border-2 border-foreground/15 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex flex-col items-center w-full">
                  <div className="h-10 w-full flex items-end justify-center shrink-0">
                    <img
                      src={hire.logo}
                      alt={hire.company}
                      className={`${hire.logoMaxHeight ?? "max-h-10"} max-w-[220px] w-auto h-auto object-contain object-bottom`}
                      style={logoWhiteFilter}
                    />
                  </div>
                  <div className={`${extraLogoTitleGap.has(hire.company) ? "mt-3" : "mt-1.5"} w-full`}>
                    {hire.roles.map((role) => (
                      <div key={role} className="text-sm text-foreground/80 leading-snug">
                        {role}
                      </div>
                    ))}
                  </div>
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
