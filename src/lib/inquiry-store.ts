"use client";

import { create } from "zustand";

interface InquiryState {
  open: boolean;
  product: string | null;
  openInquiry: (product?: string) => void;
  closeInquiry: () => void;
}

export const useInquiry = create<InquiryState>((set) => ({
  open: false,
  product: null,
  openInquiry: (product) => set({ open: true, product: product ?? null }),
  closeInquiry: () => set({ open: false, product: null }),
}));
