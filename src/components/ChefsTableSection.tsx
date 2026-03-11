import { UtensilsCrossed, Users, BookOpen, Wine, Camera, Clock } from "lucide-react";
import chefImage from "@/assets/chef-plating.jpg";

const features = [
  { icon: UtensilsCrossed, text: "Private dining for 2-8 guests" },
  { icon: Users, text: "Personal interaction with Chef Rajesh" },
  { icon: BookOpen, text: "Story behind each dish" },
  { icon: Wine, text: "Wine pairing available" },
  { icon: Camera, text: "Complimentary food photography" },
  { icon: Clock, text: "3-hour culinary journey" },
];

const ChefsTableSection = () => {
  return (
    <section id="chefs-table" className="relative py-24 overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Left - Content */}
        <div className="relative bg-maroon p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-maroon to-navy-deep/50" />
          <div className="relative z-10">
            <span className="section-label-gold mb-4 block">Exclusive Experience</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gold-gradient mb-4">
              Dine at the Royal Table
            </h2>
            <p className="text-ivory/80 font-body text-lg mb-8 leading-relaxed">
              An Intimate 8-Course Journey with Our Master Chef
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  <f.icon className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-ivory/80 font-body text-sm">{f.text}</span>
                </div>
              ))}
            </div>

            {/* Pricing Card */}
            <div className="border border-gold/30 rounded-lg p-6 mb-8 bg-navy-deep/30">
              <p className="text-gold font-display text-3xl font-bold">₹12,999 <span className="text-lg font-body font-normal text-ivory/60">per person</span></p>
              <p className="text-ivory/50 font-body text-sm mt-2">Limited to 4 sessions weekly</p>
              <p className="text-ivory/40 font-body text-xs mt-1">Includes: Aperitif + 8 courses + Digestif</p>
            </div>

            <button className="w-full sm:w-auto px-10 py-4 bg-gold text-navy-deep uppercase tracking-wider font-body font-bold rounded hover:bg-gold-bright transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--gold)/0.3)]">
              Reserve Your Experience
            </button>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative min-h-[400px] lg:min-h-0">
          <img
            src={chefImage}
            alt="Chef preparing an exquisite dish at the Chef's Table"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-navy-deep/40" />

          {/* Overlay text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
            <p className="text-ivory font-display text-3xl font-bold opacity-80" style={{ animation: "fadeIn 1s ease-out 0.5s forwards", opacity: 0 }}>Witness Artistry</p>
            <p className="text-gold font-display text-3xl font-bold opacity-80" style={{ animation: "fadeIn 1s ease-out 1.5s forwards", opacity: 0 }}>Taste Tradition</p>
            <p className="text-ivory font-display text-3xl font-bold opacity-80" style={{ animation: "fadeIn 1s ease-out 2.5s forwards", opacity: 0 }}>Experience Excellence</p>
          </div>

          {/* Diagonal gold line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold/60 via-gold to-gold/60 hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default ChefsTableSection;
