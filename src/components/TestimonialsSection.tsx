import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { text: "An experience that transcends dining. The flavors, the ambiance, the service — everything was beyond perfection. This is where tradition meets luxury.", name: "Priya Sharma", location: "Mumbai", platform: "Google" },
  { text: "The flavors transported me to my grandmother's kitchen, but with a royal twist. The Chettinad Pepper Chicken is absolutely divine.", name: "Arjun Reddy", location: "Hyderabad", platform: "Zomato" },
  { text: "Impeccable service, authentic taste. The Chef's Table experience was worth every rupee. A must-visit for anyone who loves South Indian cuisine.", name: "Sarah Johnson", location: "London", platform: "TripAdvisor" },
  { text: "Best South Indian food outside of Chennai. The attention to detail in every dish is remarkable. We keep coming back every month.", name: "Ravi Kumar", location: "Bangalore", platform: "Google" },
  { text: "The Chef's Table was worth every rupee. Chef Rajesh's passion for food is infectious. An intimate, unforgettable culinary journey.", name: "Ananya Iyer", location: "Delhi", platform: "Zomato" },
  { text: "Ambiance fit for royalty. From the Kerala murals to the brass lamps, every detail tells a story. The food is simply extraordinary.", name: "Vikram Singh", location: "Jaipur", platform: "TripAdvisor" },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>();

  const visibleCount = 3;
  const maxIndex = testimonials.length - visibleCount;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, 7000);
    return () => clearInterval(intervalRef.current);
  }, [maxIndex]);

  const prev = () => setCurrent((c) => (c <= 0 ? maxIndex : c - 1));
  const next = () => setCurrent((c) => (c >= maxIndex ? 0 : c + 1));

  return (
    <section className="relative py-24 bg-pearl overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy mb-4">
            Voices of Royalty
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-turmeric fill-turmeric" />
            ))}
          </div>
          <p className="text-purple font-body text-sm">4.9/5 based on 15,847 reviews</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * (100 / visibleCount)}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-background/5 border border-gold/10 rounded-xl p-8 h-full border-l-4 border-l-gold/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-turmeric fill-turmeric" />
                      ))}
                    </div>

                    {/* Quote */}
                    <Quote className="w-8 h-8 text-gold/30 mb-3" />
                    <p className="text-navy/80 font-accent italic text-base leading-relaxed mb-6 line-clamp-4">
                      {t.text}
                    </p>

                    {/* Reviewer */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-bright flex items-center justify-center text-navy-deep font-display font-bold text-lg">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="text-navy font-display font-semibold text-sm">{t.name}</p>
                        <p className="text-purple font-body text-xs">{t.location}</p>
                      </div>
                      <span className="ml-auto text-navy/30 font-body text-xs uppercase">{t.platform}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-navy-deep transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-gold w-6" : "bg-gold/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-navy-deep transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
