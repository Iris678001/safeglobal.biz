"use client";

import { create } from "zustand";
import type { PageId } from "@/lib/site-data";

interface NavState {
  activePage: PageId;
  /** Optional anchor to scroll to after switching page */
  pendingAnchor: string | null;
  setPage: (page: PageId, anchor?: string) => void;
  consumeAnchor: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const useNavStore = create<NavState>((set) => ({
  activePage: "home",
  pendingAnchor: null,
  setPage: (page, anchor) =>
    set({ activePage: page, pendingAnchor: anchor ?? null, mobileMenuOpen: false }),
  consumeAnchor: () => set({ pendingAnchor: null }),
  mobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
}));
