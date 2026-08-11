"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PRODUCTS } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { PageHero } from "../page-hero";
import { SectionHeading } from "../section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "../reveal";
import { useNavStore } from "@/lib/nav-store";
import { useInquiry } from "@/lib/inquiry-store";

interface ProductDetailPageProps {
  productId: string;
}

export function ProductDetailPage({ productId }: ProductDetailPageProps) {
  const { setPage } = useNavStore();
  const openInquiry = useInquiry((s) => s.openInquiry);

  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
        <h2 className="text-2xl font-bold text-navy">Product Not Found</h2>
        <p className="mt-2 text-muted-foreground">The requested product does not exist.</p>
        <Button className="mt-6" onClick={() => setPage("products")}>
          Back to Products
        </Button>
      </div>
    );
  }

  const Icon = product.icon;

  return (
    <>
      <PageHero
        eyebrow="Product Detail"
        title={product.name}
        description={product.tagline}
        breadcrumb="Products"
      />

      <section className="bg-background py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="space-y-8 lg:sticky lg:top-32">
              <Reveal>
                <div className="relative overflow-hidden rounded-none border border-border">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="rounded-none border border-gold/30 bg-gold/5 p-6 sm:p-8">
                  <h3 className="text-xl font-semibold text-navy">Quality Assurance</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {product.quality}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              <Reveal>
                <div className="flex h-16 w-16 items-center justify-center rounded-none bg-navy text-white">
                  <Icon className="h-8 w-8 text-gold" />
                </div>
                <h2 className="mt-8 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                  Overview
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <h3 className="text-xl font-semibold text-navy">Key Applications</h3>
                <ul className="mt-6 space-y-4">
                  {product.applications.map((app) => (
                    <li key={app} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.2}>
                <h3 className="text-xl font-semibold text-navy">Industries Served</h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {product.industries.map((ind) => (
                    <span
                      key={ind}
                      className="inline-flex items-center rounded-sm bg-navy/5 px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-12 flex flex-wrap gap-4">
                  <Button size="lg" className="" onClick={() => openInquiry(product.name)}>
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className=""
                    onClick={() => setPage("products")}
                  >
                    View All Products
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
