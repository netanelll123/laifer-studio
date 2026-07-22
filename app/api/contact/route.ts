import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";

/**
 * Contact proxy. Validates the payload server-side, then forwards it to the
 * external endpoint in `CONTACT_ENDPOINT_URL`. Keeping the real endpoint in an
 * env var means wiring it later is a one-line change — until then this returns
 * a clear 501 so the UI degrades gracefully.
 */
export async function POST(request: Request) {
  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const endpoint = process.env.CONTACT_ENDPOINT_URL;
  if (!endpoint) {
    return NextResponse.json(
      { error: "Contact endpoint not configured" },
      { status: 501 }
    );
  }

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: {
        // Explicit charset guards against any intermediary defaulting to a
        // non-UTF-8 encoding (matters for Hebrew/non-ASCII submissions).
        "Content-Type": "application/json; charset=utf-8",
        // Required by Formspree (and most form backends) to get a JSON
        // response back instead of an HTML redirect.
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...parsed.data,
        _subject: `New inquiry from ${parsed.data.name} — Leifer Studio`,
      }),
    });

    if (!upstream.ok) {
      return NextResponse.json(
        { error: "Upstream error" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Network error" }, { status: 502 });
  }
}
