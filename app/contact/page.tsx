"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream text-midnight pt-24">
      {/* HEADER */}
      <section className="py-20 bg-midnight text-cream border-b border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-cinzel text-4xl md:text-6xl tracking-widest mb-6 uppercase">
            Get In Touch
          </h1>
          <p className="font-sans text-xl text-cream/80 max-w-2xl mx-auto">
            We are here to answer your questions and welcome you to the Rawdatul
            Atfaal community.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid gap-6"
            >
              {[
                {
                  icon: MapPin,
                  title: "Our Campus",
                  content: ["123 Knowledge Avenue", "Leicester, UK LE1 2AB"],
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: [
                    "Admissions: +44 116 123 4567",
                    "Main Office: +44 116 123 4568",
                  ],
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: [
                    "admissions@rawdatulatfaal.org",
                    "info@rawdatulatfaal.org",
                  ],
                },
                {
                  icon: Clock,
                  title: "Office Hours",
                  content: [
                    "Mon - Fri: 8:00 AM - 4:00 PM",
                    "Sat - Sun: Closed",
                  ],
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-8 border border-gold/10 rounded-sm shadow-sm flex items-start gap-6 group hover:-translate-y-1 transition-transform"
                >
                  <div className="bg-midnight/5 p-4 rounded-full group-hover:bg-gold/10 transition-colors">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg tracking-widest mb-2 text-midnight">
                      {item.title}
                    </h3>
                    {item.content.map((line, idx) => (
                      <p key={idx} className="font-sans text-muted">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Quick Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-navy p-10 lg:p-14 rounded-sm relative text-cream"
            >
              <h2 className="font-playfair text-3xl mb-2 text-cream">
                Send a Message
              </h2>
              <p className="font-sans text-cream/60 mb-8">
                We usually respond within one business day.
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-cream/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:outline-hidden focus:border-gold transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-cream/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:outline-hidden focus:border-gold transition-colors"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-cream/70 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-cream focus:outline-hidden focus:border-gold transition-colors resize-none"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button className="w-full bg-gold text-midnight font-bold font-sans uppercase tracking-widest py-4 hover:bg-white transition-colors duration-300">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
