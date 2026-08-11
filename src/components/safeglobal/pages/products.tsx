"use client";

import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Factory,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "../page-hero";
import { Reveal, StaggerGroup, StaggerItem } from "../reveal";
import { PRODUCTS } from "@/lib/site-data";
import { useInquiry } from "@/lib/inquiry-store";
import { useNavStore } from "@/lib/nav-store";

export function ProductsPage() {
  const openInquiry = useInquiry((s) => s.openInquiry);
  const { setPage } = useNavStore();

  return (
    <>
      <PageHero
        breadcrumb="Products"
        eyebrow="Our Products"
        title={
          <>
            Five categories.{" "}
            <span className="text-gradient-gold">One standard of quality.</span>
          </>
        }
        description="From petrochemical feedstocks to food-grade commodities and energy gases — every product we trade is backed by certified sourcing, lab testing and reliable global logistics."
      >
        <StaggerGroup className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {PRODUCTS.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.id}>
                <a
                  href={`#product-${p.id}`}
                  className="group flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-white backdrop-blur transition-colors hover:border-gold/40 hover:bg-white/10"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-gold ring-1 ring-white/15">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="truncate text-xs font-medium">{p.name}</span>
                </a>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </PageHero>

      {/* Product sections */}
      <div className="bg-background">
        {PRODUCTS.map((p, idx) => {
          const Icon = p.icon;
          const reversed = idx % 2 === 1;
          return (
            <section
              key={p.id}
              id={`product-${p.id}`}
              className={`scroll-mt-24 py-16 sm:py-20 ${
                idx % 2 === 1 ? "bg-muted/40" : "bg-background"
              }`}
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image */}
                  <Reveal>
                    <div className="group relative overflow-hidden rounded-3xl shadow-soft-lg">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
                      <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-navy backdrop-blur">
                        <Icon className="h-4 w-4 text-brand-blue" />
                        {String(idx + 1).padStart(2, "0")} / {String(PRODUCTS.length).padStart(2, "0")}
                      </div>
                    </div>
                  </Reveal>

                  {/* Content */}
                  <Reveal delay={0.1}>
                    <div>
                      <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
                        <span className="h-px w-6 bg-current opacity-60" />
                        {p.tagline}
                      </div>
                      <h2 className="text-balance text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                        {p.name}
                      </h2>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        {p.description}
                      </p>

                      {/* Applications */}
                      <div className="mt-7">
                        <h3 className="text-sm font-semibold text-navy">
                          Applications
                        </h3>
                        <div className="mt-3 grid gap-2 sm:grid-cols-2">
                          {p.applications.map((a) => (
                            <div
                              key={a}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-blue" />
                              {a}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Industries served */}
                      <div className="mt-6">
                        <h3 className="text-sm font-semibold text-navy">
                          Industries Served
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {p.industries.map((ind) => (
                            <button
                              key={ind}
                              onClick={() => setPage("industries")}
                              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-navy transition-colors hover:border-brand-blue/40 hover:text-brand-blue"
                            >
                              <Factory className="h-3 w-3" />
                              {ind}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Quality assurance */}
                      <div className="mt-6 rounded-2xl border border-gold/30 bg-gold/5 p-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-navy">
                          <Sparkles className="h-4 w-4 text-gold" />
                          Quality Assurance
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {p.quality}
                        </p>
                      </div>

                      {/* Inquiry button */}
                      <div className="mt-7 flex flex-wrap gap-3">
                        <Button
                          onClick={() => openInquiry(p.name)}
                          className="rounded-full"
                          size="lg"
                        >
                          Product Inquiry
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                        <Button
                          onClick={() => setPage("contact")}
                          variant="outline"
                          className="rounded-full"
                          size="lg"
                        >
                          Talk to our team
                        </Button>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Summary CTA */}
      <section className="bg-navy-gradient py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-balance text-2xl font-semibold text-white sm:text-3xl">
              Need a specific grade or custom specification?
            </h2>
            <p className="mt-3 text-white/70">
              Our trade desk sources bespoke grades and packaging for clients
              with specialised requirements.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button
                onClick={() => openInquiry()}
                className="rounded-full bg-gold text-navy hover:bg-gold-soft"
              >
                Request a Quote
              </Button>
              <Button
                onClick={() => setPage("why-us")}
                variant="outline"
                className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                Why choose Safeglobal
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
