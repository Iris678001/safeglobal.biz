"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe } from "lucide-react";

export function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-gradient"
        >
          <div className="relative flex h-16 w-16 items-center justify-center">
            <span className="absolute inset-0 rounded-2xl border-2 border-white/10" />
            <span className="absolute inset-0 rounded-2xl border-t-2 border-gold animate-spin-slow" />
            <Globe className="h-7 w-7 text-white" />
          </div>
          <div className="mt-5 flex items-center gap-1.5">
            <span className="text-lg font-semibold tracking-tight text-white">
              Safe<span className="text-gradient-gold">global</span>
            </span>
          </div>
          <div className="mt-4 h-0.5 w-40 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-1/2 animate-loading-bar bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
