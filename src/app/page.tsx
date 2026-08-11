"use client";

import { Navbar } from "@/components/safeglobal/navbar";
import { Footer } from "@/components/safeglobal/footer";
import { PageRouter } from "@/components/safeglobal/page-router";
import { BackToTop } from "@/components/safeglobal/back-to-top";
import { Loader } from "@/components/safeglobal/loader";
import { InquiryDialog } from "@/components/safeglobal/inquiry-dialog";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Loader />
      <Navbar />
      <PageRouter />
      <Footer />
      <BackToTop />
      <InquiryDialog />
    </div>
  );
}
