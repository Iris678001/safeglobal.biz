import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "Name and email are required." },
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
        type: "inquiry",
        name,
        email,
        company: body.company ? String(body.company) : null,
        product: body.product ? String(body.product) : null,
        quantity: body.quantity ? String(body.quantity) : null,
        message: body.message ? String(body.message) : null,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[inquiry] error", err);
    return NextResponse.json(
      { ok: false, error: "Server error. Please try again later." },
      { status: 500 },
    );
  }
}
