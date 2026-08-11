"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Ship,
  Plane,
  Truck,
  Warehouse,
  Anchor,
  Handshake,
  ArrowRight,
  PackageCheck,
  FileCheck,
  Globe2,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "../page-hero";
import { SectionHeading } from "../section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "../reveal";
import { OFFICES, WORKFLOW, IMAGES } from "@/lib/site-data";
import { useNavStore } from "@/lib/nav-store";
import { useInquiry } from "@/lib/inquiry-store";

const TYPE_STYLES: Record<string, string> = {
  Headquarters: "bg-gold text-navy",
  "Regional Hub": "bg-brand-blue text-white",
  "Logistics Hub": "bg-white text-navy ring-2 ring-white/40",
};

export function GlobalNetworkPage() {
  const { setPage } = useNavStore();
  const openInquiry = useInquiry((s) => s.openInquiry);
  const [active, setActive] = useState<string | null>("Dubai");

  const hq = OFFICES.find((o) => o.type === "Headquarters")!;

  return (
    <>
      <PageHero
        breadcrumb="Global Network"
        eyebrow="Global Network"
        title={
          <>
            A worldwide network,{" "}
            <span className="text-gradient-gold">orchestrated as one</span>
          </>
        }
        description="Regional hubs, logistics offices and bonded warehouses connect origin markets to destination clients — coordinated end-to-end by our integrated trade desk."
      />

      {/* World map visualization */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Worldwide Presence"
              title="Offices and hubs across six continents"
              description="Hover or tap a marker to see each office. Arcs show trade flows coordinated from our Dubai headquarters."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mt-12 overflow-hidden rounded-3xl border border-border bg-navy-radial p-4 shadow-soft-lg sm:p-8">
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

              {/* Map area */}
              <div className="relative aspect-[16/9] w-full">
                {/* Dotted continent backdrop (stylised) */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1.4px)",
                    backgroundSize: "14px 14px",
                    maskImage:
                      "radial-gradient(120% 90% at 50% 50%, black 55%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(120% 90% at 50% 50%, black 55%, transparent 100%)",
                  }}
                />

                {/* Connecting arcs from HQ */}
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 56" preserveAspectRatio="none">
                  {OFFICES.filter((o) => o.city !== hq.city).map((o) => {
                    const x1 = hq.x;
                    const y1 = (hq.y / 100) * 56;
                    const x2 = o.x;
                    const y2 = (o.y / 100) * 56;
                    const mx = (x1 + x2) / 2;
                    const my = Math.min(y1, y2) - 12;
                    return (
                      <motion.path
                        key={o.city}
                        d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`}
                        stroke="url(#arcGrad)"
                        strokeWidth="0.35"
                        fill="none"
                        strokeDasharray="1.2 1.2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.8 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease: "easeInOut" }}
                      />
                    );
                  })}
                  <defs>
                    <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#C9A24B" />
                      <stop offset="100%" stopColor="#2D6CC0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Office markers */}
                {OFFICES.map((o) => {
                  const isActive = active === o.city;
                  return (
                    <button
                      key={o.city}
                      onMouseEnter={() => setActive(o.city)}
                      onFocus={() => setActive(o.city)}
                      onClick={() => setActive(o.city)}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${o.x}%`, top: `${o.y}%` }}
                      aria-label={`${o.city}, ${o.country}`}
                    >
                      <span className="relative flex items-center justify-center">
                        {o.type === "Headquarters" && (
                          <span className="absolute h-6 w-6 animate-ping-dot rounded-full bg-gold" />
                        )}
                        <span
                          className={`relative h-3 w-3 rounded-full transition-transform ${
                            o.type === "Headquarters"
                              ? "bg-gold ring-2 ring-white/40"
                              : "bg-brand-blue ring-2 ring-white/30"
                          } ${isActive ? "scale-150" : ""}`}
                        />
                      </span>
                      {/* tooltip */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute left-1/2 top-5 z-10 -translate-x-1/2 whitespace-nowrap rounded-lg glass-dark px-2.5 py-1.5 text-xs text-white shadow-soft"
                        >
                          <div className="font-semibold">{o.city}</div>
                          <div className="text-[10px] text-white/70">
                            {o.country} · {o.type}
                          </div>
                        </motion.div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="relative mt-4 flex flex-wrap items-center gap-4 border-t border-white/10 pt-4 text-xs text-white/70">
                {Object.entries(TYPE_STYLES).map(([type, cls]) => (
                  <div key={type} className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${cls}`} />
                    {type}
                  </div>
                ))}
                <div className="ml-auto hidden text-white/40 sm:block">
                  {OFFICES.length} offices · 45+ countries served
                </div>
              </div>
            </div>
          </Reveal>

          {/* Office list */}
          <StaggerGroup className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {OFFICES.map((o) => (
              <StaggerItem key={o.city}>
                <button
                  onMouseEnter={() => setActive(o.city)}
                  className="flex w-full items-center gap-3 rounded-2xl border border-border bg-card p-3 text-left transition-all hover:border-brand-blue/30 hover:shadow-soft"
                >
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${TYPE_STYLES[o.type]}`}>
                    <Building2 className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-navy">
                      {o.city}
                    </div>
                    <div className="truncate text-xs text-muted-foreground">
                      {o.type}
                    </div>
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Import & Export workflow */}
      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Import & Export Workflow"
              title="A six-stage workflow, fully managed"
              description="From sourcing at origin to last-mile delivery, every stage is coordinated by our in-house trade and logistics teams."
            />
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WORKFLOW.map((w) => {
              const Icon = w.icon;
              return (
                <StaggerItem key={w.step}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg">
                    <div className="absolute right-4 top-3 text-4xl font-bold text-muted/60 transition-colors group-hover:text-gold/30">
                      {w.step}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-navy">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {w.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Logistics network */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-soft-lg">
                  <img
                    src={IMAGES.cargoAlt}
                    alt="Cargo container ship at sea"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-4 grid w-44 gap-2 rounded-2xl glass p-4 shadow-soft-lg">
                  <div className="flex items-center gap-2 text-navy">
                    <Ship className="h-4 w-4 text-brand-blue" />
                    <span className="text-xs font-semibold uppercase">Sea Freight</span>
                  </div>
                  <div className="text-2xl font-semibold text-navy">2,500+</div>
                  <div className="text-xs text-muted-foreground">shipments / year</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading
                align="left"
                eyebrow="Logistics Network"
                title="Multimodal logistics, single accountability"
                description="We coordinate sea, air and land freight through trusted carriers — giving you one point of contact and full visibility from origin to destination."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Ship, title: "Sea Freight", text: "FCL, LCL, flexitank and ISO-tank shipments via major ports." },
                  { icon: Plane, title: "Air Freight", text: "Time-critical and high-value cargo with priority handling." },
                  { icon: Truck, title: "Land Transport", text: "Trucking and rail for cross-border and inland delivery." },
                  { icon: Warehouse, title: "Warehousing", text: "Bonded and ambient storage at strategic trade hubs." },
                ].map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-soft"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-brand-blue group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-navy">{title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Shipping & distribution process */}
      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Shipping & Distribution"
              title="From port to production line"
              description="A transparent, trackable distribution process that keeps your inventory plans on schedule."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 grid gap-4 md:grid-cols-4">
              {[
                { icon: FileCheck, title: "Order & Contract", text: "Confirmed specifications, Incoterms and delivery schedule." },
                { icon: PackageCheck, title: "Loading & Inspection", text: "Pre-shipment inspection, sealing and documentation." },
                { icon: Ship, title: "In-Transit Tracking", text: "Real-time visibility with milestone notifications." },
                { icon: Anchor, title: "Arrival & Delivery", text: "Customs clearance, warehousing and final distribution." },
              ].map(({ icon: Icon, title, text }, i) => (
                <div key={title} className="relative">
                  {i < 3 && (
                    <div className="absolute right-0 top-7 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-border to-transparent md:block" />
                  )}
                  <div className="relative rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="mt-3 text-xs font-semibold text-brand-blue">
                      Step {i + 1}
                    </div>
                    <h3 className="mt-1 text-sm font-semibold text-navy">{title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* International partnerships */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="International Partnerships"
              title="Trusted by the partners we keep"
              description="Long-standing relationships with refineries, mills, carriers and ports give our clients priority access and preferential terms."
            />
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { icon: Globe2, label: "Refineries & Producers" },
              { icon: Ship, label: "Shipping Lines" },
              { icon: Warehouse, label: "Port Authorities" },
              { icon: Handshake, label: "Trade Associations" },
              { icon: FileCheck, label: "Inspection Agencies" },
              { icon: Anchor, label: "Freight Forwarders" },
            ].map(({ icon: Icon, label }) => (
              <StaggerItem key={label}>
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center transition-all hover:border-brand-blue/30 hover:shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold text-navy">{label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* partner marquee */}
          <Reveal delay={0.1}>
            <div className="relative mt-12 overflow-hidden rounded-2xl border border-border bg-muted/40 py-5">
              <div className="flex w-max animate-marquee gap-12 px-6">
                {[...Array(2)].map((_, dup) => (
                  <div key={dup} className="flex shrink-0 items-center gap-12">
                    {[
                      "Global Refineries Ltd",
                      "OceanLink Shipping",
                      "PortAuthority Group",
                      "AgriTrade Co-op",
                      "Inspecta Bureau",
                      "TransContinental Freight",
                      "EnergyGrid Partners",
                    ].map((name) => (
                      <span
                        key={name + dup}
                        className="text-sm font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-gradient py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Ship with a partner that thinks globally
            </h2>
            <p className="mt-2 text-white/70">
              Let us map the most efficient route for your cargo.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              onClick={() => openInquiry()}
              className="rounded-full bg-gold text-navy hover:bg-gold-soft"
            >
              Request a Quote
            </Button>
            <Button
              onClick={() => setPage("contact")}
              variant="outline"
              className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              Contact logistics
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
