import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Crown } from "lucide-react";

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 2,
    requests: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Reservation request submitted! We'll confirm shortly.");
  };

  return (
    <section id="reservations" className="relative py-24 bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-deep" />
      <div className="absolute inset-0 grain" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gold-gradient mb-8">
              Visit Us
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-ivory font-body text-lg">42 Heritage Lane, Anna Nagar</p>
                  <p className="text-ivory/70 font-body">Chennai, Tamil Nadu 600040</p>
                  <a href="#" className="text-teal font-body text-sm underline mt-1 inline-block">Get Directions</a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+911234567890" className="text-ivory font-body text-lg hover:text-gold transition-colors">+91 123 456 7890</a>
                  <p className="text-ivory/50 font-body text-sm">Reservations Hotline • 10 AM - 11 PM</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <a href="mailto:reservations@yadavrestaurant.com" className="text-ivory font-body text-lg hover:text-gold transition-colors">reservations@yadavrestaurant.com</a>
                  <p className="text-ivory/50 font-body text-sm">For Events & Catering</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div className="font-body text-ivory/80 space-y-1">
                  <p>Lunch: 12:00 PM – 3:30 PM</p>
                  <p>Dinner: 7:00 PM – 11:00 PM</p>
                  <p>Sunday Brunch: 11:00 AM – 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10 flex gap-4">
              {["Instagram", "Facebook", "YouTube", "Twitter"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold/70 hover:bg-gold hover:text-navy-deep transition-all duration-300 font-body text-xs"
                  aria-label={s}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Reservation Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl p-8 sm:p-10 border border-gold/20">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-gold mb-2">Reserve Your Table</h3>
              <p className="text-ivory/50 font-body text-sm mb-8">Secure your seat at South India's finest</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Names */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-ivory/60 font-body text-xs uppercase tracking-wider block mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-navy-deep/50 border-b-2 border-gold/30 focus:border-gold text-ivory font-body px-3 py-3 outline-none transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="text-ivory/60 font-body text-xs uppercase tracking-wider block mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-navy-deep/50 border-b-2 border-gold/30 focus:border-gold text-ivory font-body px-3 py-3 outline-none transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                {/* Contact */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-ivory/60 font-body text-xs uppercase tracking-wider block mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-navy-deep/50 border-b-2 border-gold/30 focus:border-gold text-ivory font-body px-3 py-3 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-ivory/60 font-body text-xs uppercase tracking-wider block mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-navy-deep/50 border-b-2 border-gold/30 focus:border-gold text-ivory font-body px-3 py-3 outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                {/* Date/Time/Guests */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-ivory/60 font-body text-xs uppercase tracking-wider block mb-2">Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full bg-navy-deep/50 border-b-2 border-gold/30 focus:border-gold text-ivory font-body px-3 py-3 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-ivory/60 font-body text-xs uppercase tracking-wider block mb-2">Time *</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full bg-navy-deep/50 border-b-2 border-gold/30 focus:border-gold text-ivory font-body px-3 py-3 outline-none transition-colors"
                    >
                      <option value="">Select time</option>
                      {["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM"].map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-ivory/60 font-body text-xs uppercase tracking-wider block mb-2">Guests *</label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, guests: Math.max(1, formData.guests - 1) })}
                        className="w-10 h-10 rounded border border-gold/30 text-gold flex items-center justify-center hover:bg-gold/10 transition-colors"
                      >
                        −
                      </button>
                      <span className="text-ivory font-display text-xl font-bold min-w-[2rem] text-center">{formData.guests}</span>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, guests: Math.min(20, formData.guests + 1) })}
                        className="w-10 h-10 rounded border border-gold/30 text-gold flex items-center justify-center hover:bg-gold/10 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="text-ivory/60 font-body text-xs uppercase tracking-wider block mb-2">Special Requests</label>
                  <textarea
                    name="requests"
                    value={formData.requests}
                    onChange={handleChange}
                    rows={3}
                    maxLength={500}
                    className="w-full bg-navy-deep/50 border-b-2 border-gold/30 focus:border-gold text-ivory font-body px-3 py-3 outline-none transition-colors resize-none"
                    placeholder="Allergies, celebrations, seating preferences..."
                  />
                  <p className="text-ivory/30 font-body text-xs mt-1 text-right">{formData.requests.length}/500</p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-maroon to-gold/80 text-ivory uppercase tracking-wider font-body font-bold rounded hover:from-gold hover:to-maroon hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--gold)/0.3)]"
                >
                  <Crown className="w-4 h-4" />
                  Confirm Reservation
                </button>

                <p className="text-ivory/30 font-body text-xs text-center">
                  No payment required • We hold your table for 15 minutes
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
