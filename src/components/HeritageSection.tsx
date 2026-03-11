import { ScrollText, ChefHat, Leaf, Flame } from "lucide-react";
import chefImage from "@/assets/chef-plating.jpg";

const stats = [
  { icon: ScrollText, number: "500+", label: "Authentic Recipes" },
  { icon: ChefHat, number: "12", label: "Award-Winning Chefs" },
  { icon: Leaf, number: "100%", label: "Farm-to-Table Promise" },
  { icon: Flame, number: "60+", label: "Years of Tradition" },
];

const HeritageSection = () => {
  return (
    <section id="heritage" className="relative py-24 bg-pearl overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="ornament-divider max-w-xs mx-auto mb-4">
            <span className="text-xs uppercase tracking-[0.3em] text-purple font-body font-semibold">Our Legacy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy mb-4">
            Four Generations of
            <br />
            Culinary Excellence
          </h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Column 1 - Image */}
          <div className="relative group">
            <div className="absolute -inset-3 border border-gold/30 rounded-lg" />
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={chefImage}
                alt="Master Chef Rajesh Yadav plating a signature dish"
                className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-6">
                <p className="text-gold font-display text-lg">Est. 1960</p>
                <p className="text-ivory/80 font-body text-sm">The Beginning of a Legacy</p>
              </div>
            </div>
          </div>

          {/* Column 2 - Story */}
          <div className="lg:col-span-1">
            <div className="relative">
              <span className="text-6xl font-display font-bold text-gold/20 absolute -top-4 -left-2 leading-none">I</span>
              <p className="text-navy/80 font-accent text-lg leading-relaxed pl-8 pt-4">
                n the heart of Tamil Nadu, the Yadav family began their culinary journey, preserving recipes that traveled from royal kitchens to your plate. Each dish carries whispers of tradition, spiced with innovation.
              </p>
            </div>
            <div className="mt-8 border-l-4 border-gold/50 pl-6">
              <p className="text-navy/70 font-accent italic text-lg leading-relaxed">
                "We don't just serve food — we serve memories, heritage, and love on every plate."
              </p>
              <p className="text-purple font-body text-sm mt-3 tracking-wide">— Chef Rajesh Yadav, 4th Generation</p>
            </div>
          </div>

          {/* Column 3 - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-background/5 border border-gold/10 rounded-lg p-6 text-center hover:border-gold/30 hover:shadow-lg transition-all duration-300 group"
              >
                <stat.icon className="w-8 h-8 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-3xl font-display font-bold text-navy">{stat.number}</p>
                <p className="text-navy/60 font-body text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
