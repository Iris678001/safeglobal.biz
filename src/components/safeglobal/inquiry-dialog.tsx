"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, CheckCircle2, Send } from "lucide-react";
import { useInquiry } from "@/lib/inquiry-store";
import { PRODUCTS } from "@/lib/site-data";
import { toast } from "sonner";

export function InquiryDialog() {
  const { open, product, closeInquiry } = useInquiry();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    quantity: "",
    message: "",
  });

  const reset = () => {
    setDone(false);
    setForm({ name: "", company: "", email: "", quantity: "", message: "" });
  };

  const handleClose = (o: boolean) => {
    if (!o) {
      closeInquiry();
      setTimeout(reset, 200);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, product }),
      });
      if (!res.ok) throw new Error("Request failed");
      setDone(true);
      toast.success("Inquiry submitted", {
        description: "Our trade desk will respond within one business day.",
      });
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again or email trade@safeglobal.com.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-[520px]">
        {done ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <DialogTitle className="text-2xl text-navy">Inquiry Received</DialogTitle>
            <DialogDescription className="max-w-sm">
              Thank you for your interest. A Safeglobal trade specialist will contact
              you within one business day with a tailored quotation.
            </DialogDescription>
            <Button onClick={() => handleClose(false)} className="mt-2">
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl text-navy">Request a Quotation</DialogTitle>
              <DialogDescription>
                Tell us what you need and we&apos;ll respond with pricing, specifications
                and lead times.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="inq-product">Product</Label>
                <Select
                  value={product ?? ""}
                  onValueChange={(v) => useInquiry.setState({ product: v })}
                >
                  <SelectTrigger id="inq-product">
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent>
                    {PRODUCTS.map((p) => (
                      <SelectItem key={p.id} value={p.name}>
                        {p.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="inq-name">Full Name</Label>
                  <Input
                    id="inq-name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="inq-company">Company</Label>
                  <Input
                    id="inq-company"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Company Ltd."
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="inq-email">Business Email</Label>
                  <Input
                    id="inq-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@company.com"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="inq-qty">Estimated Quantity</Label>
                  <Input
                    id="inq-qty"
                    value={form.quantity}
                    onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                    placeholder="e.g. 5 x 20ft containers / month"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="inq-msg">Message</Label>
                <Textarea
                  id="inq-msg"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Destination port, target grade, delivery timeline…"
                />
              </div>
              <Button type="submit" disabled={submitting} className="w-full" size="lg">
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting…
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Submit Inquiry
                  </>
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
