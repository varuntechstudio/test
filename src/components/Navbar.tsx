import { useState, useEffect } from "react";
import { Menu, X, Phone, Crown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Heritage", href: "#heritage" },
  { label: "Royal Menu", href: "#menu" },
  { label: "Chef's Table", href: "#chefs-table" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reservations", href: "#reservations" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy-deep/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex flex-col items-center">
              <span className="font-display text-2xl font-bold text-gold-gradient tracking-wider">
                YADAV
              </span>
              <span className="text-[10px] tracking-[0.2em] text-gold/70 font-body uppercase">
                Restaurant
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-ivory/80 text-xs uppercase tracking-[0.15em] font-body font-semibold hover:text-gold transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+911234567890"
              className="flex items-center gap-2 text-ivory/70 text-sm font-body hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 123 456 7890</span>
            </a>
            <button
              onClick={() => scrollTo("#reservations")}
              className="flex items-center gap-2 px-5 py-2.5 bg-maroon border border-gold/40 text-gold text-xs uppercase tracking-wider font-body font-semibold rounded hover:bg-gold hover:text-navy-deep transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--gold)/0.3)]"
            >
              <Crown className="w-3.5 h-3.5" />
              Reserve Your Throne
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-ivory"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-deep/98 backdrop-blur-lg min-h-screen absolute inset-0 top-20 animate-fadeIn">
          <div className="flex flex-col items-center pt-12 gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-ivory text-lg uppercase tracking-[0.2em] font-body font-semibold hover:text-gold transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#reservations")}
              className="mt-4 flex items-center gap-2 px-8 py-3 bg-maroon border border-gold/40 text-gold uppercase tracking-wider font-body font-semibold rounded"
            >
              <Crown className="w-4 h-4" />
              Reserve Your Throne
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
