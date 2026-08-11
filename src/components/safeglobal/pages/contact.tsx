"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageHero } from "../page-hero";
import { SectionHeading } from "../section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "../reveal";
import { CONTACT, PRODUCTS } from "@/lib/site-data";
import { toast } from "sonner";

export function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setDone(true);
      toast.success("Message sent", {
        description: "We'll respond within one business day.",
      });
    } catch {
      toast.error("Something went wrong", {
        description: "Please email trade@safeglobal.com directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: MapPin,
      label: "Visit Us",
      value: CONTACT.address,
      href: "#map",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone}`,
    },
    {
      icon: Mail,
      label: "Email Us",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: CONTACT.hours,
    },
  ];

  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Get In Touch"
        title={
          <>
            Let&apos;s talk about your{" "}
            <span className="text-gradient-gold">supply needs</span>
          </>
        }
        description="Whether you need a quotation, a product specification or a logistics consultation — our trade desk is ready to help."
      />

      {/* Contact cards */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((c) => {
              const Icon = c.icon;
              const inner = (
                <div className="group h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-1.5 text-sm font-medium text-navy">
                    {c.value}
                  </div>
                </div>
              );
              return (
                <StaggerItem key={c.label}>
                  {c.href ? (
                    <a href={c.href} className="block">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Form + map */}
      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Form */}
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9">
                {done ? (
                  <div className="flex flex-col items-center gap-4 py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-semibold text-navy">
                      Thank you for reaching out
                    </h3>
                    <p className="max-w-sm text-sm text-muted-foreground">
                      Your message has been received. A Safeglobal specialist will
                      respond within one business day.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-2 rounded-full"
                      onClick={() => {
                        setDone(false);
                        setForm({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
                      }}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-white">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-navy">
                          Send us a message
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          We typically respond within one business day.
                        </p>
                      </div>
                    </div>

                    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="grid gap-2">
                          <Label htmlFor="c-name">Full Name *</Label>
                          <Input
                            id="c-name"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Jane Doe"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="c-company">Company</Label>
                          <Input
                            id="c-company"
                            value={form.company}
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                            placeholder="Company Ltd."
                          />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="grid gap-2">
                          <Label htmlFor="c-email">Business Email *</Label>
                          <Input
                            id="c-email"
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="name@company.com"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="c-phone">Phone</Label>
                          <Input
                            id="c-phone"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="+1 555 000 0000"
                          />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="c-subject">Subject</Label>
                        <Select
                          value={form.subject}
                          onValueChange={(v) => setForm({ ...form, subject: v })}
                        >
                          <SelectTrigger id="c-subject">
                            <SelectValue placeholder="Select a topic" />
                          </SelectTrigger>
                          <SelectContent>
                            {PRODUCTS.map((p) => (
                              <SelectItem key={p.id} value={`${p.name} Inquiry`}>
                                {p.name} Inquiry
                              </SelectItem>
                            ))}
                            <SelectItem value="Logistics & Shipping">
                              Logistics & Shipping
                            </SelectItem>
                            <SelectItem value="Partnership">Partnership</SelectItem>
                            <SelectItem value="General Enquiry">
                              General Enquiry
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="c-msg">Message *</Label>
                        <Textarea
                          id="c-msg"
                          required
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us about your requirements, volumes and delivery timeline…"
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={submitting}
                        size="lg"
                        className="w-full rounded-full"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" /> Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </Reveal>

            {/* Map + side info */}
            <Reveal delay={0.1}>
              <div id="map" className="flex h-full flex-col gap-6">
                <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
                  <iframe
                    title="Safeglobal office location"
                    src="https://www.google.com/maps?q=Sheikh+Zayed+Road,+Dubai,+UAE&output=embed"
                    className="h-72 w-full sm:h-80"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="grid flex-1 gap-4">
                  <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                    <div className="flex items-center gap-2 text-navy">
                      <MapPin className="h-5 w-5 text-gold" />
                      <h3 className="font-semibold">Headquarters</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {CONTACT.address}
                    </p>
                  </div>
                  <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                    <div className="flex items-center gap-2 text-navy">
                      <Clock className="h-5 w-5 text-gold" />
                      <h3 className="font-semibold">Business Hours</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{CONTACT.hours}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Trade desks operate across global time zones for 24/7 coverage.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-navy-gradient p-6 text-white">
                    <h3 className="font-semibold">Follow Safeglobal</h3>
                    <p className="mt-1.5 text-sm text-white/70">
                      Market insights and company updates.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {CONTACT.social.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85 transition-colors hover:border-gold/40 hover:text-gold"
                        >
                          {s.label}
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ-ish final note */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Prefer to talk?"
              title="Our trade desk is one call away"
              description="For urgent supply requirements, call us directly during business hours — or leave a message and we'll call you back."
            />
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button asChild className="rounded-full">
                <a href={`tel:${CONTACT.phone}`}>
                  <Phone className="mr-2 h-4 w-4" /> {CONTACT.phone}
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href={`mailto:${CONTACT.email}`}>
                  <Mail className="mr-2 h-4 w-4" /> {CONTACT.email}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
