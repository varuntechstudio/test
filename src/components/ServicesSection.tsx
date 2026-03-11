import { PartyPopper, Truck, ChefHat, Gift, Crown } from "lucide-react";

const services = [
  {
    icon: PartyPopper,
    title: "Corporate & Social Events",
    description: "Customized menus for 20-200 guests with dedicated event planning.",
    cta: "Plan Your Event",
  },
  {
    icon: Truck,
    title: "Royal Catering",
    description: "Authentic South Indian feast at your doorstep. Minimum 50 guests.",
    cta: "Get Quote",
  },
  {
    icon: ChefHat,
    title: "Culinary Workshops",
    description: "Learn family recipes from master chefs. Saturday batches available.",
    cta: "Enroll Now",
  },
  {
    icon: Gift,
    title: "Digital Gift Vouchers",
    description: "Perfect gift for food lovers. ₹1000, ₹2500, ₹5000, or custom amounts.",
    cta: "Purchase Gift Card",
  },
  {
    icon: Crown,
    title: "Yadav Royalty Club",
    description: "Earn points, exclusive access, birthday rewards. Join 5000+ members.",
    cta: "Become a Member",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-24 bg-pearl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy mb-4">
            Beyond Dining
          </h2>
          <p className="text-purple font-body text-lg">Exceptional Services for Every Occasion</p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex-shrink-0 w-72 bg-background/5 border-t-4 border-t-gold/50 rounded-lg p-8 snap-center hover:bg-gold/5 transition-all duration-300 group shadow-sm hover:shadow-lg"
            >
              <s.icon className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-navy font-display text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-navy/60 font-body text-sm leading-relaxed mb-6">{s.description}</p>
              <button className="text-maroon font-body text-sm font-semibold uppercase tracking-wider hover:text-gold transition-colors">
                {s.cta} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
