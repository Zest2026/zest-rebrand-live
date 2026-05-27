import causalyLogo from "@/assets/logos/causaly-v2.png";
import gradientLabsLogo from "@/assets/logos/gradient-labs-v2.png";
import portswiggerLogo from "@/assets/logos/portswigger-v2.png";
import productboardLogo from "@/assets/logos/productboard.png";

type HireCard = {
  company: string;
  roles: string[];
  logo?: string;
};

const hires: HireCard[] = [
  { company: "Gradient Labs", roles: ["Founding Designer"], logo: gradientLabsLogo },
  { company: "Mirelo AI", roles: ["Founding Designer"] },
  { company: "Portswigger", roles: ["VP of Product Management"], logo: portswiggerLogo },
  { company: "Duvo", roles: ["Head of Product"] },
  {
    company: "Productboard",
    roles: ["Director of Product Design", "Principal Product Designer"],
    logo: productboardLogo,
  },
  { company: "Causaly", roles: ["Staff Product Manager"], logo: causalyLogo },
];

const TrackRecord = () => {

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

          {/* Logo + roles grid (non-clicky) */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-left">
            {hires.map((hire) => (
              <div
                key={hire.company}
                className="p-5 md:p-6 rounded-2xl bg-card border-2 border-foreground/15 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="h-10 md:h-12 flex items-center">
                  {hire.logo ? (
                    <img
                      src={hire.logo}
                      alt={hire.company}
                      className="h-8 md:h-9 w-auto object-contain brightness-0 invert opacity-90"
                      style={{ objectPosition: "left" }}
                    />
                  ) : (
                    <span className="text-base md:text-lg font-bold tracking-tight">
                      {hire.company}
                    </span>
                  )}
                </div>

                <div className="mt-3 space-y-1.5">
                  {hire.roles.map((role) => (
                    <div key={role} className="text-sm md:text-sm text-foreground/80 leading-snug">
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-foreground/60">
            All of these searches were for PE/VC-backed startups across Europe, with the majority coming via VC referrals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
