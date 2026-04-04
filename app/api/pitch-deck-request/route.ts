import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  try {
    const { name, email, role, venture, deckUrl } = await req.json();

    if (!name || !email || !venture) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      // Supabase not configured yet — silently succeed
      return NextResponse.json({ ok: true });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    await supabase.from("pitch_deck_requests").insert({
      name,
      email,
      role: role || null,
      venture,
      deck_url: deckUrl,
    });

    return NextResponse.json({ ok: true });
  } catch {
    // Never block the user — always succeed
    return NextResponse.json({ ok: true });
  }
}
