"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, PRODUCTS, type PageId } from "@/lib/site-data";
import { useNavStore } from "@/lib/nav-store";
import { useInquiry } from "@/lib/inquiry-store";

export function Navbar() {
  const { activePage, setPage, mobileMenuOpen, setMobileMenuOpen } = useNavStore();
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const transparentAtTop = activePage === "home";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !transparentAtTop;

  const go = (page: PageId) => {
    setPage(page);
    setProductsOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "glass border-b border-border/60 py-2 shadow-soft"
            : "border-b border-transparent py-4",
        )}
        onMouseLeave={() => setProductsOpen(false)}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <button
            onClick={() => go("home")}
            className="group flex items-center gap-2.5"
            aria-label="Safeglobal home"
          >
            <img src="/logo.png" alt="Safeglobal" className="h-16 w-auto object-contain" />
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) =>
              item.id === "products" ? (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                >
                  <button
                    onClick={() => go("products")}
                    data-active={activePage === "products"}
                    className={cn(
                      "nav-underline flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                      solid
                        ? "text-foreground/80 hover:text-navy"
                        : "text-white/85 hover:text-white",
                      activePage === "products" && (solid ? "text-navy" : "text-white"),
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        productsOpen && "rotate-180",
                      )}
                    />
                  </button>

                  {/* Mega menu */}
                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3"
                      >
                        <div className="glass overflow-hidden rounded-2xl border border-border/70 p-3 shadow-soft-lg">
                          <div className="mb-2 flex items-center justify-between px-3 pt-1">
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
                              Product Categories
                            </span>
                            <button
                              onClick={() => go("products")}
                              className="flex items-center gap-1 text-xs font-medium text-navy hover:text-brand-blue"
                            >
                              View all <ArrowRight className="h-3 w-3" />
                            </button>
                          </div>
                          <div className="grid grid-cols-2 gap-1">
                            {PRODUCTS.map((p) => {
                              const Icon = p.icon;
                              return (
                                <button
                                  key={p.id}
                                  onClick={() => go(`product-${p.id}` as PageId)}
                                  className="group flex items-start gap-3 rounded-xl p-3 text-left transition-colors hover:bg-white/80"
                                >
                                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                                    <Icon className="h-4.5 w-4.5" />
                                  </span>
                                  <span className="min-w-0">
                                    <span className="block text-sm font-semibold text-navy">
                                      {p.name}
                                    </span>
                                    <span className="block truncate text-xs text-muted-foreground">
                                      {p.tagline}
                                    </span>
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  data-active={activePage === item.id}
                  className={cn(
                    "nav-underline rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                    solid
                      ? "text-foreground/80 hover:text-navy"
                      : "text-white/85 hover:text-white",
                    activePage === item.id && (solid ? "text-navy" : "text-white"),
                  )}
                >
                  {item.label}
                </button>
              ),
            )}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <Button
              onClick={() => useInquiry.getState().openInquiry()}
              className={cn(
                "hidden rounded-full px-5 shadow-soft sm:inline-flex",
                solid
                  ? "bg-navy text-white hover:bg-navy-deep"
                  : "bg-white text-navy hover:bg-white/90",
              )}
            >
              Get a Quote
            </Button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden",
                solid ? "text-navy hover:bg-navy/5" : "text-white hover:bg-white/10",
              )}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="w-[88vw] max-w-sm p-0">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <span className="flex items-center gap-2">
                <img src="/logo.png" alt="Safeglobal" className="h-12 w-auto object-contain" />
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-3 py-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-medium transition-colors",
                    activePage === item.id
                      ? "bg-navy text-white"
                      : "text-foreground hover:bg-muted",
                  )}
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4 opacity-60" />
                </button>
              ))}
            </div>
            <div className="border-t border-border p-4">
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  useInquiry.getState().openInquiry();
                }}
                className="w-full rounded-full bg-navy text-white hover:bg-navy-deep"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
