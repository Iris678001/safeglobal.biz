import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email and message are required." },
        { status: 400 },
      );
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json(
        { ok: false, error: "A valid email is required." },
        { status: 400 },
      );
    }

    await db.lead.create({
      data: {
        type: "contact",
        name,
        email,
        company: body.company ? String(body.company) : null,
        phone: body.phone ? String(body.phone) : null,
        subject: body.subject ? String(body.subject) : null,
        message,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error", err);
    return NextResponse.json(
      { ok: false, error: "Server error. Please try again later." },
      { status: 500 },
    );
  }
}
