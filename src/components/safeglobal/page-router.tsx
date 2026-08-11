"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavStore } from "@/lib/nav-store";
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import { ProductsPage } from "./pages/products";
import { IndustriesPage } from "./pages/industries";
import { GlobalNetworkPage } from "./pages/global-network";
import { WhyChooseUsPage } from "./pages/why-choose-us";
import { ContactPage } from "./pages/contact";
import type { PageId } from "@/lib/site-data";

const PAGES: Record<PageId, React.ComponentType> = {
  home: HomePage,
  about: AboutPage,
  products: ProductsPage,
  industries: IndustriesPage,
  network: GlobalNetworkPage,
  "why-us": WhyChooseUsPage,
  contact: ContactPage,
};

export function PageRouter() {
  const { activePage, pendingAnchor, consumeAnchor } = useNavStore();
  const Page = PAGES[activePage];

  // Scroll to top (or anchor) whenever the page changes.
  useEffect(() => {
    if (pendingAnchor) {
      const el = document.getElementById(pendingAnchor);
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          consumeAnchor();
        });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "auto" });
    consumeAnchor();
  }, [activePage, pendingAnchor, consumeAnchor]);

  return (
    <main className="flex-1">
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Page />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
