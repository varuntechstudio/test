import { useState } from "react";
import { Flame } from "lucide-react";

import dishChettinad from "@/assets/dish-chettinad.jpg";
import dishPrawnCurry from "@/assets/dish-prawn-curry.jpg";
import dishDosa from "@/assets/dish-dosa.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";
import dishAppam from "@/assets/dish-appam.jpg";
import dishMysorePak from "@/assets/dish-mysore-pak.jpg";

const states = [
  { id: "tamil-nadu", label: "Tamil Nadu", icon: "🛕" },
  { id: "kerala", label: "Kerala", icon: "🥥" },
  { id: "karnataka", label: "Karnataka", icon: "🍛" },
  { id: "andhra", label: "Andhra Pradesh", icon: "🌶️" },
  { id: "telangana", label: "Telangana", icon: "🌺" },
];

interface Dish {
  name: string;
  state: string;
  price: string;
  description: string;
  spice: number;
  veg: boolean;
  image: string;
  badge?: string;
}

const dishes: Dish[] = [
  {
    name: "Chettinad Pepper Chicken",
    state: "tamil-nadu",
    price: "₹649",
    description: "Fiery black pepper meets tender chicken in this ancestral recipe from Tamil Nadu's spice route.",
    spice: 3,
    veg: false,
    image: dishChettinad,
    badge: "Chef's Pride",
  },
  {
    name: "Malabar Prawn Curry",
    state: "kerala",
    price: "₹799",
    description: "Coconut milk & curry leaves embrace succulent prawns in this coastal Kerala masterpiece.",
    spice: 2,
    veg: false,
    image: dishPrawnCurry,
  },
  {
    name: "Mysore Masala Dosa",
    state: "karnataka",
    price: "₹349",
    description: "Crispy golden crepe slathered with spiced chutney, cradling a golden potato filling.",
    spice: 1,
    veg: true,
    image: dishDosa,
    badge: "Bestseller",
  },
  {
    name: "Hyderabadi Dum Biryani",
    state: "telangana",
    price: "₹599",
    description: "Slow-cooked saffron rice layered with aromatic spices in the traditional dum method.",
    spice: 2,
    veg: false,
    image: dishBiryani,
    badge: "Chef's Pride",
  },
  {
    name: "Appam with Stew",
    state: "kerala",
    price: "₹299",
    description: "Delicate lace-edged rice pancakes with pillowy soft centers and fragrant vegetable stew.",
    spice: 1,
    veg: true,
    image: dishAppam,
  },
  {
    name: "Mysore Pak",
    state: "karnataka",
    price: "₹199",
    description: "Ghee-rich golden squares melting on the tongue — a royal sweet from the Mysore Palace kitchens.",
    spice: 0,
    veg: true,
    image: dishMysorePak,
  },
];

const MenuSection = () => {
  const [activeState, setActiveState] = useState("all");

  const filteredDishes =
    activeState === "all"
      ? dishes
      : dishes.filter((d) => d.state === activeState);

  return (
    <section id="menu" className="relative py-24 bg-navy overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-charcoal" />
      <div className="absolute inset-0 grain" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gold-gradient mb-4">
            Culinary Treasures
          </h2>
          <p className="text-ivory/70 font-body text-xl">Masterpieces from Five States</p>
          <div className="ornament-divider max-w-sm mx-auto mt-6">
            <span className="text-gold/40">✦</span>
          </div>
        </div>

        {/* State Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveState("all")}
            className={`px-5 py-2.5 rounded-full text-sm font-body font-semibold tracking-wider uppercase transition-all duration-300 border ${
              activeState === "all"
                ? "bg-gold text-navy-deep border-gold"
                : "bg-transparent text-gold/70 border-gold/30 hover:border-gold/60"
            }`}
          >
            All States
          </button>
          {states.map((state) => (
            <button
              key={state.id}
              onClick={() => setActiveState(state.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-body font-semibold tracking-wider transition-all duration-300 border ${
                activeState === state.id
                  ? "bg-gold text-navy-deep border-gold"
                  : "bg-transparent text-gold/70 border-gold/30 hover:border-gold/60"
              }`}
            >
              {state.icon} {state.label}
            </button>
          ))}
        </div>

        {/* Dish Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDishes.map((dish) => (
            <div
              key={dish.name}
              className="group relative bg-charcoal rounded-xl overflow-hidden border-gold-glow hover:-translate-y-2 hover:shadow-[0_20px_40px_hsl(var(--gold)/0.15)] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute top-3 left-3">
                  <span className={`inline-block w-3 h-3 rounded-full ${dish.veg ? "bg-green-500" : "bg-red-500"}`} />
                </div>
                {dish.spice > 0 && (
                  <div className="absolute top-3 right-3 flex gap-0.5">
                    {Array.from({ length: dish.spice }).map((_, i) => (
                      <Flame key={i} className="w-3.5 h-3.5 text-red-400 fill-red-400" />
                    ))}
                  </div>
                )}
                {dish.badge && (
                  <div className="absolute top-3 right-3 mt-6 bg-maroon/90 text-gold text-[10px] uppercase tracking-wider font-body px-2 py-1 rounded">
                    {dish.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-gold font-display text-xl font-semibold mb-1">{dish.name}</h3>
                <span className="inline-block text-purple text-[10px] uppercase tracking-widest font-body bg-purple/10 px-2 py-0.5 rounded-full mb-2">
                  {states.find((s) => s.id === dish.state)?.label}
                </span>
                <p className="text-ivory/60 font-accent text-sm leading-relaxed line-clamp-2 mb-4">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-display text-lg font-bold">{dish.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-10 py-4 border border-gold/40 text-gold uppercase tracking-wider font-body font-semibold rounded hover:bg-gold/10 transition-all duration-300">
            Explore Complete Royal Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
