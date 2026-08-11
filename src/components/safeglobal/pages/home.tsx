"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Globe2,
  Ship,
  Anchor,
  TrendingUp,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerGroup, StaggerItem } from "../reveal";
import { SectionHeading } from "../section-heading";
import { AnimatedCounter } from "../animated-counter";
import {
  IMAGES,
  STATS,
  PRODUCTS,
  INDUSTRIES,
  REASONS,
  WORKFLOW,
} from "@/lib/site-data";
import { useNavStore } from "@/lib/nav-store";
import { useInquiry } from "@/lib/inquiry-store";

export function HomePage() {
  const { setPage } = useNavStore();
  const openInquiry = useInquiry((s) => s.openInquiry);

  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-radial">
        {/* bg image */}
        <div className="absolute inset-0">
          <img
            src="/hero-ship.jpg"
            alt="Global cargo shipping port at dusk"
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/75 to-navy/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-navy-deep/40" />
        </div>



        <div className="relative mx-auto w-full max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">


            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Connecting Markets.
              <br />
              <span className="text-gradient-gold">Delivering Quality.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            >
              Safeglobal is a global trading and distribution company sourcing
              petrochemicals, refined sugar, cream rice, edible oils and gas
              products — and delivering them to manufacturers and businesses
              across international markets with reliability at the core.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button
                onClick={() => setPage("products")}
                size="lg"
                className="bg-gold text-navy hover:bg-gold-soft"
              >
                Explore Products
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                onClick={() => setPage("about")}
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                About Safeglobal
              </Button>
            </motion.div>

            {/* mini trust row */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-12 flex flex-wrap gap-x-8 gap-y-4"
            >
              {[
                { icon: ShieldCheck, label: "Rigorous quality control" },
                { icon: Globe2, label: "6 continents served" },
                { icon: Ship, label: "End-to-end logistics" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-white/70">
                  <Icon className="h-4 w-4 text-gold" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/50 md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============== INTRO ============== */}
      <section className="relative bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-none">
                  <img
                    src="/ship.jpg"
                    alt="Container ship carrying global trade cargo"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                {/* floating stat card */}
                <div className="absolute -bottom-6 -right-4 w-44 rounded-sm glass p-4 sm:-right-6">
                  <div className="flex items-center gap-2 text-navy">
                    <TrendingUp className="h-4 w-4 text-brand-blue" />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      Trade Volume
                    </span>
                  </div>
                  <div className="mt-1 text-2xl font-semibold text-navy">
                    $2.4B+
                  </div>
                  <div className="text-xs text-muted-foreground">annual turnover</div>
                </div>
                <div className="absolute -left-4 -top-4 hidden h-20 w-20 items-center justify-center rounded-none bg-navy text-white sm:flex">
                  <Anchor className="h-8 w-8" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <SectionHeading
                eyebrow="Who We Are"
                align="left"
                title="A global trading partner built on trust and reliability"
                description="For nearly two decades, Safeglobal has connected manufacturers, suppliers and businesses across international markets. We combine deep commodity expertise with an integrated supply chain to deliver quality products on time, every time."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Globe2,
                    title: "Global Sourcing",
                    text: "Direct relationships with refineries, mills and producers across continents.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Quality Assured",
                    text: "Pre-shipment inspection and lab testing on every consignment.",
                  },
                  {
                    icon: Ship,
                    title: "Integrated Logistics",
                    text: "Sea, rail and road coordination with end-to-end visibility.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Market Intelligence",
                    text: "Pricing and demand insight that keeps our clients ahead.",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="group rounded-none border border-border bg-card p-5 transition-all hover:border-brand-blue/50 hover:bg-muted/30"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-none bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-navy">{title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => setPage("about")}
                className="mt-8"
                variant="secondary"
              >
                Learn more about us
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== INDUSTRIES SERVED (compact) ============== */}
      <section className="relative bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Industries We Serve"
              title="Powering the industries that move the world"
              description="From food processing to energy, our products keep essential industries running with dependable supply."
            />
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <StaggerItem key={ind.id}>
                  <button
                    onClick={() => setPage("industries")}
                    className="group flex h-full w-full flex-col items-center gap-3 rounded-none border border-border bg-card p-5 text-center transition-all hover:border-brand-blue/50 hover:bg-muted/30"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-none bg-navy/5 text-navy transition-all group-hover:bg-navy group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="text-sm font-semibold text-navy">{ind.name}</span>
                  </button>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* ============== FEATURED PRODUCTS ============== */}
      <section className="relative bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Featured Products"
                align="left"
                title="A diversified portfolio of essential commodities"
                description="Five core product categories, each backed by certified sourcing and global logistics."
              />
              <Button
                onClick={() => setPage("products")}
                variant="outline"
                className="shrink-0"
              >
                View all products
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.slice(0, 3).map((p) => {
              const Icon = p.icon;
              return (
                <StaggerItem key={p.id}>
                  <button
                    onClick={() => setPage("products")}
                    className="group block w-full overflow-hidden rounded-none border border-border bg-card text-left transition-all hover:border-brand-blue/50"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/10 to-transparent" />
                      <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-none bg-white/90 text-navy">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                        <p className="text-xs text-white/75">{p.tagline}</p>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        {p.description}
                      </p>
                      <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-brand-blue">
                        Discover
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </button>
                </StaggerItem>
              );
            })}
            {/* CTA tile */}
            <StaggerItem>
              <button
                onClick={() => setPage("products")}
                className="group flex h-full min-h-[260px] w-full flex-col justify-between rounded-none bg-navy-gradient p-6 text-left text-white transition-all hover:bg-navy"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                    <Globe2 className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">
                    Explore the full catalogue
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    Five product categories, dozens of grades — discover what
                    Safeglobal can supply to your business.
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                  View all products
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* ============== SUPPLY CHAIN ILLUSTRATION ============== */}
      <section className="relative overflow-hidden bg-navy-gradient py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Integrated Supply Chain"
              title="From origin to destination — engineered for reliability"
              description="A six-stage workflow that turns global sourcing into dependable delivery, with quality assurance at every step."
            />
          </Reveal>

          <StaggerGroup className="mt-14 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {WORKFLOW.map((w) => {
              const Icon = w.icon;
              return (
                <StaggerItem key={w.step}>
                  <div className="group relative h-full rounded-none border border-white/10 bg-white/5 p-5 transition-all hover:border-gold/50 hover:bg-white/10">
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-none bg-white/10 text-gold ring-1 ring-white/15">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-semibold text-white/40">
                        {w.step}
                      </span>
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-white">
                      {w.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                      {w.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>

          <Reveal delay={0.1}>
            <div className="mt-10 flex justify-center">
              <Button
                onClick={() => setPage("network")}
                variant="outline"
                className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                See our global network
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>


      {/* ============== WHY CHOOSE US (preview) ============== */}
      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="The Safeglobal advantage"
              description="Eight reasons international businesses trust us with their supply."
            />
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {REASONS.slice(0, 4).map((r) => {
              const Icon = r.icon;
              return (
                <StaggerItem key={r.title}>
                  <div className="group h-full rounded-none border border-border bg-card p-6 transition-all hover:border-brand-blue/50 hover:bg-muted/30">
                    <div className="flex h-11 w-11 items-center justify-center rounded-none bg-navy/5 text-navy transition-colors group-hover:bg-brand-blue group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-navy">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {r.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
          <Reveal delay={0.1}>
            <div className="mt-10 flex justify-center">
              <Button
                onClick={() => setPage("why-us")}
                variant="outline"
                className=""
              >
                See all reasons
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== TESTIMONIAL / CTA ============== */}
      <section className="relative overflow-hidden bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-none bg-navy-radial p-8 text-white sm:p-14">
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" />
              <div className="relative">
                <Quote className="h-10 w-10 text-gold" />
                <p className="mt-5 text-balance text-2xl font-medium leading-relaxed sm:text-3xl">
                  &ldquo;Safeglobal has been a dependable partner for our raw
                  material supply for over six years. Their consistency, quality
                  assurance and logistics coordination are simply best in class.&rdquo;
                </p>
                <div className="mt-7 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-none bg-white/10 text-sm font-semibold text-gold ring-1 ring-white/20">
                    MK
                  </div>
                  <div>
                    <div className="font-semibold">Marcus K.</div>
                    <div className="text-sm text-white/60">
                      Head of Procurement, European Manufacturing Group
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-8">
                  <Button
                    onClick={() => openInquiry()}
                    className="bg-gold text-navy hover:bg-gold-soft"
                  >
                    Request a Quote
                  </Button>
                  <Button
                    onClick={() => setPage("contact")}
                    variant="outline"
                    className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                  >
                    Talk to our trade desk
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
