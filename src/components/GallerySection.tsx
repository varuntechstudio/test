import interiorImage from "@/assets/restaurant-interior.jpg";
import heroThali from "@/assets/hero-thali.jpg";
import chefImage from "@/assets/chef-plating.jpg";

const images = [
  { src: interiorImage, title: "Main Dining Hall", desc: "Royal purple upholstery with Kerala murals", tall: true },
  { src: heroThali, title: "Royal Thali Setup", desc: "Gold-plated service with traditional brass" },
  { src: chefImage, title: "Open Kitchen Theater", desc: "Watch our chefs create magic" },
  { src: interiorImage, title: "Private Dining Pods", desc: "Intimate curtained booths with silk drapes", tall: true },
  { src: heroThali, title: "Traditional Presentation", desc: "Brass vessels and banana leaf service" },
  { src: chefImage, title: "Culinary Artistry", desc: "Every dish is a masterpiece" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="relative py-24 bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-navy" />
      <div className="absolute inset-0 grain" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gold-gradient mb-4">
            The Royal Setting
          </h2>
          <p className="text-ivory/70 font-body text-xl">Where Ambiance Meets Artistry</p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid group relative overflow-hidden rounded-lg border-gold-glow"
            >
              <img
                src={img.src}
                alt={img.title}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  img.tall ? "h-80" : "h-56"
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy-deep/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gold font-display text-xl font-bold">{img.title}</p>
                  <p className="text-ivory/70 font-body text-sm mt-1">{img.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
