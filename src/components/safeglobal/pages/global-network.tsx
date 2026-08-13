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

          <Reveal>
            <div className="relative mt-12 overflow-hidden rounded-none border border-border bg-navy-radial p-4 sm:p-8">
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

              {/* Map area */}
              <div className="relative aspect-[16/9] w-full">
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.15]">
                  <img src="/world-map.svg" alt="World Map Diagram" className="h-full w-full object-cover grayscale invert" />
                </div>
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
                          className="absolute left-1/2 top-5 z-10 -translate-x-1/2 whitespace-nowrap rounded-sm glass-dark px-2.5 py-1.5 text-xs text-white"
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
                  {OFFICES.length} offices · 6 continents served
                </div>
              </div>
            </div>
          </Reveal>

          {/* Office list */}
          <StaggerGroup className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {OFFICES.map((o) => (
              <StaggerItem key={o.city}>
                <button
                  key={o.city}
                  className="flex w-full items-center gap-3 rounded-none border border-border bg-card p-3 text-left transition-all hover:border-brand-blue/50 hover:bg-muted/30"
                >
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-none ${TYPE_STYLES[o.type]}`}>
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
                <div className="group relative h-full overflow-hidden rounded-none border border-border bg-card p-6 transition-all hover:border-brand-blue/50">
                  <div className="absolute right-4 top-3 text-4xl font-bold text-muted/60 transition-colors group-hover:text-gold/30">
                    {w.step}
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-none bg-navy text-white">
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
                <div className="relative overflow-hidden rounded-none">
                  <img
                    src="/hero-ship.jpg"
                    alt="Global cargo shipping port at dusk"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy/40" />
                </div>
                <div className="absolute -bottom-6 -left-4 grid w-44 gap-2 rounded-sm glass p-4">
                  <div className="flex items-center gap-2 text-navy">
                    <Ship className="h-4 w-4 text-brand-blue" />
                    <span className="text-xs font-semibold uppercase">Sea Freight</span>
                  </div>
                  <div className="text-xl font-semibold text-navy leading-tight">High Volume</div>
                  <div className="text-xs text-muted-foreground mt-1">Continuous capacity</div>
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
                    className="group rounded-none border border-border bg-card p-5 transition-all hover:border-brand-blue/50 hover:bg-muted/30"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-none bg-navy/5 text-navy transition-colors group-hover:bg-brand-blue group-hover:text-white">
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
                  <div className="relative rounded-none border border-border bg-card p-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-none bg-navy text-white">
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

    </>
  );
}
