"use client";

import { Globe, Mail, Phone, MapPin, Clock, ArrowUpRight, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, PRODUCTS, CONTACT } from "@/lib/site-data";
import { useNavStore } from "@/lib/nav-store";
import { useInquiry } from "@/lib/inquiry-store";
import { toast } from "sonner";
import { useState } from "react";

export function Footer() {
  const { setPage } = useNavStore();
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setEmail("");
    toast.success("Subscribed", {
      description: "You'll receive our trade insights and market updates.",
    });
  };

  return (
    <footer className="relative mt-auto overflow-hidden bg-navy-gradient text-white">
      {/* decorative */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* top CTA strip */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 py-10 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Ready to source with confidence?
            </h3>
            <p className="mt-2 max-w-xl text-white/70">
              Partner with Safeglobal for reliable supply, certified quality and
              seamless global logistics.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => setPage("contact")}
              className="rounded-full bg-gold text-navy hover:bg-gold-soft"
            >
              Contact Us
            </Button>
            <Button
              onClick={() => useInquiry.getState().openInquiry()}
              variant="outline"
              className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              Request a Quote
            </Button>
          </div>
        </div>

        {/* main grid */}
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-12">
          {/* brand + newsletter */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <img src="/logo.png" alt="Safeglobal" className="h-10 w-auto object-contain" />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Connecting markets and delivering quality across petrochemicals,
              agri-commodities and energy products — a trusted B2B supplier to
              manufacturers and distributors worldwide.
            </p>
            <form onSubmit={subscribe} className="mt-6">
              <label className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                Market insights newsletter
              </label>
              <div className="mt-2 flex max-w-sm overflow-hidden rounded-full border border-white/15 bg-white/5 p-1">
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your business email"
                  className="border-0 bg-transparent text-white placeholder:text-white/40 focus-visible:ring-0"
                />
                <Button type="submit" size="sm" className="rounded-full bg-gold text-navy hover:bg-gold-soft">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>

          {/* company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Company
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setPage(item.id)}
                    className="text-white/70 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* products */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Products
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => setPage(`product-${p.id}` as any)}
                    className="text-white/70 transition-colors hover:text-gold"
                  >
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`tel:${CONTACT.phone}`} className="hover:text-gold">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-gold">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{CONTACT.hours}</span>
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              {CONTACT.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition-colors hover:border-gold/40 hover:text-gold"
                >
                  {s.label}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Safeglobal FZE. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-gold">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-gold">
              Terms of Trade
            </a>
            <a href="#" className="transition-colors hover:text-gold">
              Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
