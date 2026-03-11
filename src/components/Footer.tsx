import { Send, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative">
      {/* Main Footer */}
      <div className="bg-navy-deep py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="mb-4">
                <span className="font-display text-3xl font-bold text-gold-gradient">YADAV</span>
                <p className="text-ivory/40 font-body text-xs tracking-[0.2em] uppercase">Restaurant</p>
              </div>
              <p className="text-ivory/50 font-body text-sm leading-relaxed mb-6">
                Four generations of culinary excellence serving authentic South Indian cuisine with royal hospitality.
              </p>
              <div className="flex gap-3">
                {["Instagram", "Facebook", "YouTube", "Twitter"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:bg-gold hover:text-navy-deep transition-all text-xs font-body"
                    aria-label={s}
                  >
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-gold font-display text-lg mb-6">Explore</h4>
              <ul className="space-y-3 font-body text-sm">
                {["About Our Story", "Meet the Chefs", "Our Menu", "Reservations", "Private Dining", "Gift Cards", "Careers", "Press & Media"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-ivory/50 hover:text-gold transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dining */}
            <div>
              <h4 className="text-gold font-display text-lg mb-6">Dine With Us</h4>
              <div className="space-y-4 font-body text-sm text-ivory/50">
                <div>
                  <p className="text-ivory/70 font-semibold mb-1">Restaurant Hours</p>
                  <p>Lunch: 12 PM – 3:30 PM</p>
                  <p>Dinner: 7 PM – 11 PM</p>
                  <p>Sunday Brunch: 11 AM – 4 PM</p>
                </div>
                <div>
                  <p className="text-ivory/70 font-semibold mb-1">Special Menus</p>
                  <p>Weekend Brunch</p>
                  <p>Festival Specials</p>
                  <p>Chef's Tasting Menu</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-gold font-display text-lg mb-6">Royal Updates</h4>
              <p className="text-ivory/50 font-body text-sm mb-4">Get exclusive offers & recipes</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Subscribed!");
                  setEmail("");
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 bg-navy/50 border border-gold/20 text-ivory font-body text-sm px-3 py-2.5 rounded outline-none focus:border-gold transition-colors"
                />
                <button type="submit" className="px-3 py-2.5 bg-maroon text-gold rounded hover:bg-gold hover:text-navy-deep transition-all">
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <p className="text-ivory/30 font-body text-xs mt-2">Join 12,000+ food lovers • No spam</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-charcoal py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-ivory/30 font-body text-xs">
              © 2024 Yadav Restaurant. All Rights Reserved. Crafted with ❤️ and spices in South India
            </p>
            <div className="flex gap-4 text-ivory/30 font-body text-xs">
              {["Privacy Policy", "Terms", "Refund Policy", "Accessibility"].map((link, i) => (
                <span key={link} className="flex items-center gap-4">
                  {i > 0 && <span className="text-gold/30">•</span>}
                  <a href="#" className="hover:text-gold transition-colors">{link}</a>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      {/* WhatsApp */}
      <a
        href="https://wa.me/911234567890?text=Hi%20Yadav%20Restaurant"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-foreground shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <span className="text-2xl">💬</span>
      </a>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 z-50 w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all animate-fadeIn"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-navy-deep" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
