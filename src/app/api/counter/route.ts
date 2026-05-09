import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function GET() {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/page_views?page=eq.home&select=count`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        cache: "no-store",
      }
    );
    const data = await res.json();
    return NextResponse.json({ count: data[0]?.count ?? 0 });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}

export async function POST() {
  try {
    const getRes = await fetch(
      `${SUPABASE_URL}/rest/v1/page_views?page=eq.home&select=count`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        cache: "no-store",
      }
    );
    const data = await getRes.json();
    const currentCount = data[0]?.count ?? 13475;
    const nextCount = currentCount + 1;

    await fetch(
      `${SUPABASE_URL}/rest/v1/page_views?page=eq.home`,
      {
        method: "PATCH",
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ count: nextCount }),
      }
    );

    return NextResponse.json({ count: nextCount });
  } catch {
    return NextResponse.json({ count: 13475 });
  }
}
