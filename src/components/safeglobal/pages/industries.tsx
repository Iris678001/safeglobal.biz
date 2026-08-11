"use client";

import { ArrowRight, CheckCircle2, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "../page-hero";
import { SectionHeading } from "../section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "../reveal";
import { INDUSTRIES, STATS } from "@/lib/site-data";
import { useNavStore } from "@/lib/nav-store";
import { useInquiry } from "@/lib/inquiry-store";
import { AnimatedCounter } from "../animated-counter";

export function IndustriesPage() {
  const { setPage } = useNavStore();
  const openInquiry = useInquiry((s) => s.openInquiry);

  return (
    <>
      <PageHero
        breadcrumb="Industries"
        eyebrow="Industries We Serve"
        title={
          <>
            Powering the industries that{" "}
            <span className="text-gradient-gold">move the world</span>
          </>
        }
        description="From manufacturing and food processing to energy and agriculture, our products keep essential industries supplied with the reliability they demand."
      />

      {/* Industry cards */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <StaggerItem key={ind.id}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-soft-lg">
                    {/* hover glow */}
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-blue/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

                    <div className="relative flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white transition-transform group-hover:scale-110">
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Industry
                      </span>
                    </div>

                    <h3 className="relative mt-5 text-xl font-semibold text-navy">
                      {ind.name}
                    </h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                      {ind.description}
                    </p>

                    <div className="relative mt-5 border-t border-border pt-4">
                      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Products we supply
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {ind.servedProducts.map((sp) => (
                          <span
                            key={sp}
                            className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-navy"
                          >
                            <CheckCircle2 className="h-3 w-3 text-brand-blue" />
                            {sp}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => openInquiry()}
                      className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue"
                    >
                      Inquire about supply
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>



      {/* Sector deep-dive */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="How We Add Value"
              title="Industry expertise that goes beyond the shipment"
              description="We don't just move commodities — we understand the regulatory, operational and commercial realities of the sectors we serve."
            />
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Regulatory alignment",
                text: "We navigate food-safety, chemical compliance and energy regulations so your imports meet destination-market requirements.",
                icon: Factory,
              },
              {
                title: "Volume & continuity",
                text: "Buffer stock and framework contracts ensure your production lines never stop waiting for raw materials.",
                icon: Factory,
              },
              {
                title: "Tailored packaging",
                text: "Flexitanks, ISO tanks, drums, bulk or retail-ready — packaged to suit your downstream operations.",
                icon: Factory,
              },
              {
                title: "Market intelligence",
                text: "Forward-looking pricing and supply outlooks help you plan procurement with confidence.",
                icon: Factory,
              },
            ].map(({ title, text, icon: Icon }) => (
              <StaggerItem key={title}>
                <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-soft">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-navy">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {text}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-gradient py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Supply your industry with confidence
            </h2>
            <p className="mt-2 text-white/70">
              Tell us your sector and volume — we&apos;ll tailor a supply plan.
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
              onClick={() => setPage("products")}
              variant="outline"
              className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              View products
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
