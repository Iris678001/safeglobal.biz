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
          <div className="relative flex items-center justify-center mb-2">
            <img src="/logo.png" alt="Safeglobal" className="h-16 w-auto object-contain" />
          </div>
          <div className="mt-4 h-0.5 w-40 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-1/2 animate-loading-bar bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
