"use client";

import { ArrowRight, CheckCircle2, Quote, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "../page-hero";
import { SectionHeading } from "../section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "../reveal";
import { REASONS, STATS } from "@/lib/site-data";
import { useNavStore } from "@/lib/nav-store";
import { useInquiry } from "@/lib/inquiry-store";
import { AnimatedCounter } from "../animated-counter";

export function WhyChooseUsPage() {
  const { setPage } = useNavStore();
  const openInquiry = useInquiry((s) => s.openInquiry);

  return (
    <>
      <PageHero
        breadcrumb="Why Choose Us"
        eyebrow="Why Choose Us"
        title={
          <>
            The Safeglobal{" "}
            <span className="text-gradient-gold">advantage</span>
          </>
        }
        description="Eight reasons international businesses trust us with their supply — from certified quality and reliable logistics to competitive pricing and global reach."
      />

      {/* 8 feature cards */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REASONS.map((r) => {
              const Icon = r.icon;
              return (
                <StaggerItem key={r.title}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-soft-lg">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white transition-transform group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="relative mt-5 text-lg font-semibold text-navy">
                      {r.title}
                    </h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                      {r.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-navy-gradient py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="text-center">
                  <div className="text-4xl font-semibold tracking-tight sm:text-5xl">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-white/70">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="What Sets Us Apart"
                title="More than a supplier — a strategic partner"
                description="We invest in the relationships, systems and standards that turn one-time shipments into long-term supply partnerships."
              />
              <div className="mt-8 space-y-4">
                {[
                  "Dedicated account manager for every client",
                  "Pre-shipment inspection and lab testing as standard",
                  "Transparent pricing with no hidden logistics fees",
                  "Real-time shipment tracking and milestone alerts",
                  "Flexible Incoterms and tailored payment terms",
                  "Sustainable sourcing with carbon-tracked shipments",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                    <span className="text-sm text-foreground/80">{point}</span>
                  </div>
                ))}
              </div>
              <Button onClick={() => openInquiry()} className="mt-8 rounded-full">
                Start a partnership
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-4">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Quality, guaranteed",
                    text: "Every consignment carries a certificate of analysis. If a shipment doesn't meet spec, we make it right.",
                  },
                  {
                    icon: Quote,
                    title: "Client-first philosophy",
                    text: "Our trade desk responds within one business day — because your production schedule can't wait.",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="rounded-3xl border border-border bg-muted/40 p-7 shadow-soft"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-navy">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Client Voices"
              title="Trusted by businesses worldwide"
              description="A few words from the manufacturers, distributors and partners we serve."
            />
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "Safeglobal's consistency in quality and lead time has transformed how we plan our production. They're an extension of our procurement team.",
                name: "Markus Klein",
                role: "Procurement Director, EU Manufacturing",
                initials: "MK",
              },
              {
                quote:
                  "Their logistics coordination across three continents is remarkable. One contact, full visibility, zero surprises.",
                name: "Aisha Rahman",
                role: "Supply Chain Head, Food Group",
                initials: "AR",
              },
              {
                quote:
                  "Competitive pricing backed by genuine compliance documentation. That combination is rare in commodity trading.",
                name: "Diego Martins",
                role: "Operations Manager, Energy Co.",
                initials: "DM",
              },
            ].map((t) => (
              <StaggerItem key={t.name}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft">
                  <Quote className="h-8 w-8 text-gold" />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sm font-semibold text-gold">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>


    </>
  );
}
