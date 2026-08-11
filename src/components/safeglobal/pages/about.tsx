"use client";

import {
  Target,
  Eye,
  ShieldCheck,
  Globe2,
  Award,
  Sparkles,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "../page-hero";
import { SectionHeading } from "../section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "../reveal";
import {
  IMAGES,
  CORE_VALUES,
  OFFICES,
  STATS,
} from "@/lib/site-data";
import { useNavStore } from "@/lib/nav-store";
import { useInquiry } from "@/lib/inquiry-store";
import { AnimatedCounter } from "../animated-counter";

export function AboutPage() {
  const { setPage } = useNavStore();
  const openInquiry = useInquiry((s) => s.openInquiry);

  return (
    <>
      <PageHero
        breadcrumb="About Us"
        eyebrow="About Safeglobal"
        title={
          <>
            Building bridges between{" "}
            <span className="text-gradient-gold">global markets</span>
          </>
        }
        description="We are a global trading and distribution company connecting manufacturers, suppliers and businesses across international markets — driven by quality, reliability and long-term partnership."
      />

      {/* Overview */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-soft-lg">
                  <img
                    src={IMAGES.about}
                    alt="Modern corporate headquarters"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 hidden rounded-2xl glass p-5 shadow-soft-lg sm:block">
                  <div className="text-3xl font-semibold text-navy">18+</div>
                  <div className="text-xs text-muted-foreground">years of global trade</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading
                align="left"
                eyebrow="Company Overview"
                title="A trusted name in international commodity trading"
                description="Founded in 2007, Safeglobal has grown from a regional trading house into a diversified global distributor. Today we supply petrochemicals, agri-commodities and energy products to over 1,200 B2B clients across six continents."
              />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Our strength lies in a vertically integrated approach — combining
                direct sourcing relationships, in-house quality assurance, owned
                logistics coordination and a global warehouse footprint. This lets
                us deliver consistency, transparency and value at every stage of
                the supply chain, regardless of market volatility.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {STATS.slice(0, 4).map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-border bg-card p-4"
                  >
                    <div className="text-2xl font-semibold text-navy">
                      <AnimatedCounter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:shadow-soft-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-navy">Our Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  To connect global markets with dependable, high-quality commodity
                  supply — empowering manufacturers and businesses to operate with
                  confidence, while building lasting value for our partners,
                  suppliers and communities.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:shadow-soft-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue text-white">
                  <Eye className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-navy">Our Vision</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  To be the world&apos;s most trusted global trading partner —
                  recognised for integrity, operational excellence and a
                  sustainable, transparent supply chain that sets the standard for
                  the industry.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Core Values"
              title="The principles that guide every trade"
              description="Four values define how we operate, partner and grow across global markets."
            />
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <StaggerItem key={v.title}>
                  <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-gold group-hover:text-navy">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-navy">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {v.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Commitment to quality */}
      <section className="relative overflow-hidden bg-navy-gradient py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                light
                align="left"
                eyebrow="Commitment to Quality"
                title="Quality is not an option — it is the standard"
                description="Every product we trade passes through a rigorous quality assurance framework before it reaches your facility."
              />
              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Certified sourcing",
                    text: "Suppliers vetted against ISO, HACCP, HALAL and REACH requirements.",
                  },
                  {
                    icon: Award,
                    title: "Pre-shipment inspection",
                    text: "Independent lab testing and certificate of analysis on every consignment.",
                  },
                  {
                    icon: Sparkles,
                    title: "Batch traceability",
                    text: "Full origin-to-destination traceability across the entire supply chain.",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold ring-1 ring-white/15">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{title}</h4>
                      <p className="mt-1 text-sm text-white/65">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "ISO 9001", text: "Quality management" },
                  { label: "HACCP", text: "Food safety" },
                  { label: "HALAL", text: "Certified processing" },
                  { label: "REACH", text: "Chemical compliance" },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-gold/30 hover:bg-white/10"
                  >
                    <div className="text-2xl font-semibold text-gold">{c.label}</div>
                    <div className="mt-1 text-xs text-white/60">{c.text}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>



      {/* Worldwide presence */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Worldwide Presence"
                title="Local expertise on six continents"
                description="A network of regional hubs and logistics offices keeps us close to both origin markets and our clients' destinations."
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {OFFICES.slice(0, 6).map((o) => (
                  <div
                    key={o.city}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card p-3"
                  >
                    <MapPin className="h-4 w-4 text-gold" />
                    <div>
                      <div className="text-sm font-semibold text-navy">{o.city}</div>
                      <div className="text-xs text-muted-foreground">
                        {o.country} · {o.type}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => setPage("network")}
                className="mt-8 rounded-full"
              >
                Explore our global network
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-muted/40 p-8 shadow-soft">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { v: 8, s: "", l: "Offices globally" },
                    { v: 45, s: "+", l: "Countries served" },
                    { v: 6, s: "", l: "Continents" },
                    { v: 24, s: "/7", l: "Operations" },
                    { v: 30, s: "+", l: "Carrier partners" },
                    { v: 15, s: "+", l: "Warehouses" },
                  ].map((x) => (
                    <div
                      key={x.l}
                      className="rounded-2xl bg-card p-4 text-center shadow-soft"
                    >
                      <div className="text-2xl font-semibold text-navy">
                        {x.v}
                        {x.s}
                      </div>
                      <div className="mt-1 text-[11px] leading-tight text-muted-foreground">
                        {x.l}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3 rounded-2xl bg-navy-gradient p-5 text-white">
                  <Globe2 className="h-8 w-8 text-gold" />
                  <div>
                    <div className="font-semibold">One partner, worldwide reach</div>
                    <div className="text-sm text-white/70">
                      Coordinated trade desks across every major time zone.
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>


    </>
  );
}
