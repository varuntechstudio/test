import { Crown, Play, Star, Award, Tv, ChevronDown } from "lucide-react";
import heroThali from "@/assets/hero-thali.jpg";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--navy))_0%,hsl(var(--navy-deep))_70%)]" />
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Pre-headline */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6" style={{ animation: "fadeIn 0.8s ease-out forwards" }}>
              <span className="h-px w-12 bg-gold/50" />
              <span className="text-gold/80 font-accent italic text-lg">Welcome to</span>
              <span className="h-px w-12 bg-gold/50" />
            </div>

            {/* Main Headline */}
            <h1 className="mb-6">
              <span
                className="block text-ivory text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight"
                style={{ animation: "fadeInUp 0.6s ease-out 0.2s forwards", opacity: 0 }}
              >
                THE PALACE OF
              </span>
              <span
                className="block text-gold-gradient text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-tight"
                style={{ animation: "fadeInUp 0.6s ease-out 0.4s forwards", opacity: 0 }}
              >
                SOUTH INDIAN
              </span>
              <span
                className="block text-gold-gradient text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-tight"
                style={{ animation: "fadeInUp 0.6s ease-out 0.5s forwards", opacity: 0 }}
              >
                GASTRONOMY
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-ivory/80 text-lg sm:text-xl lg:text-2xl font-body max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
              style={{ animation: "fadeInUp 0.6s ease-out 0.6s forwards", opacity: 0 }}
            >
              An Imperial Culinary Journey
              <br />
              Through Five States
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              style={{ animation: "fadeInUp 0.6s ease-out 0.8s forwards", opacity: 0 }}
            >
              <button
                onClick={() => scrollTo("#menu")}
                className="flex items-center gap-2 px-8 py-4 bg-maroon border border-gold/40 text-gold text-base uppercase tracking-wider font-body font-semibold rounded hover:bg-gold hover:text-navy-deep transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--gold)/0.3)] hover:scale-105"
              >
                <Crown className="w-4 h-4" />
                Begin Your Journey
              </button>
              <button className="flex items-center gap-2 px-8 py-4 border border-gold/40 text-gold text-base uppercase tracking-wider font-body font-semibold rounded hover:bg-gold/10 transition-all duration-300 group">
                <span className="w-8 h-8 rounded-full border border-gold/60 flex items-center justify-center group-hover:animate-goldPulse">
                  <Play className="w-3 h-3 fill-gold text-gold" />
                </span>
                Watch Our Story
              </button>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div
            className="flex justify-center lg:justify-end"
            style={{ animation: "fadeInUp 0.8s ease-out 0.5s forwards", opacity: 0 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-gold/30 to-gold/10 rounded-2xl blur-sm" />
              <div className="relative border-2 border-gold/30 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:rotate-[-1deg]">
                <img
                  src={heroThali}
                  alt="Royal South Indian Thali - A luxurious gold-plated thali with multiple curries, rice, and accompaniments"
                  className="w-full max-w-md lg:max-w-lg object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-deep/80 to-transparent p-6">
                  <p className="text-gold font-display text-xl">Royal Thali</p>
                  <p className="text-ivory/70 font-body text-sm">Our Signature Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Bar */}
        <div
          className="mt-16 glass rounded-xl px-6 py-4"
          style={{ animation: "fadeInUp 0.6s ease-out 1s forwards", opacity: 0 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-body">
            <div className="flex items-center gap-2 text-ivory/80">
              <Star className="w-4 h-4 text-turmeric fill-turmeric" />
              <span className="text-gold font-semibold">4.9/5</span>
              <span>(15,000+ reviews)</span>
            </div>
            <div className="flex items-center gap-2 text-ivory/80">
              <Award className="w-4 h-4 text-gold" />
              <span>Michelin Recommended 2024</span>
            </div>
            <div className="flex items-center gap-2 text-ivory/80">
              <Award className="w-4 h-4 text-gold" />
              <span>India's Top 50 Restaurants</span>
            </div>
            <div className="flex items-center gap-2 text-ivory/80">
              <Tv className="w-4 h-4 text-gold" />
              <span>Featured on MasterChef India</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center mt-12 animate-scrollDown">
          <ChevronDown className="w-6 h-6 text-gold/60" />
          <span className="text-ivory/40 text-xs tracking-wider font-body mt-1">Scroll to Explore</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
