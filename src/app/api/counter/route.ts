import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const FALLBACK_COUNT = 7341;
const FALLBACK_COUNTRY = "IN";

const COUNTRY_MAP: Record<string, { name: string; flag: string }> = {
  IN: { name: "India", flag: "🇮🇳" },
  US: { name: "USA", flag: "🇺🇸" },
  GB: { name: "UK", flag: "🇬🇧" },
  CA: { name: "Canada", flag: "🇨🇦" },
  AU: { name: "Australia", flag: "🇦🇺" },
  AE: { name: "UAE", flag: "🇦🇪" },
  DE: { name: "Germany", flag: "🇩🇪" },
  SG: { name: "Singapore", flag: "🇸🇬" },
  KW: { name: "Kuwait", flag: "🇰🇼" },
  SA: { name: "Saudi Arabia", flag: "🇸🇦" },
  NP: { name: "Nepal", flag: "🇳🇵" },
  PK: { name: "Pakistan", flag: "🇵🇰" },
  BD: { name: "Bangladesh", flag: "🇧🇩" },
  LK: { name: "Sri Lanka", flag: "🇱🇰" },
  FR: { name: "France", flag: "🇫🇷" },
  JP: { name: "Japan", flag: "🇯🇵" },
  MY: { name: "Malaysia", flag: "🇲🇾" },
  IT: { name: "Italy", flag: "🇮🇹" },
  ES: { name: "Spain", flag: "🇪🇸" },
  NL: { name: "Netherlands", flag: "🇳🇱" },
  CH: { name: "Switzerland", flag: "🇨🇭" },
  SE: { name: "Sweden", flag: "🇸🇪" },
  NO: { name: "Norway", flag: "🇳🇴" },
  NZ: { name: "New Zealand", flag: "🇳🇿" },
  IE: { name: "Ireland", flag: "🇮🇪" },
  ZA: { name: "South Africa", flag: "🇿🇦" },
  QA: { name: "Qatar", flag: "🇶🇦" },
  OM: { name: "Oman", flag: "🇴🇲" },
  BH: { name: "Bahrain", flag: "🇧🇭" },
  HK: { name: "Hong Kong", flag: "🇭🇰" },
  CN: { name: "China", flag: "🇨🇳" },
  KR: { name: "South Korea", flag: "🇰🇷" },
  TH: { name: "Thailand", flag: "🇹🇭" },
  PH: { name: "Philippines", flag: "🇵🇭" },
  ID: { name: "Indonesia", flag: "🇮🇩" },
  VN: { name: "Vietnam", flag: "🇻🇳" },
  BR: { name: "Brazil", flag: "🇧🇷" },
  MX: { name: "Mexico", flag: "🇲🇽" },
  RU: { name: "Russia", flag: "🇷🇺" },
};

function lookupCountry(code: string): { name: string; flag: string } {
  return COUNTRY_MAP[code] ?? { name: code, flag: "🌐" };
}

const supabaseHeaders = {
  apikey: SUPABASE_ANON_KEY,
  Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
};

type Country = { country_code: string; country_name: string; flag_emoji: string; visit_count: number };

async function fetchTopCountries(): Promise<Country[]> {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/visitor_countries?select=country_code,country_name,flag_emoji,visit_count&order=visit_count.desc&limit=5`,
    { headers: supabaseHeaders, cache: "no-store" }
  );
  if (!res.ok) return [];
  return (await res.json()) as Country[];
}

async function fetchTotalCount(): Promise<number> {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/page_views?page=eq.home&select=count`,
    { headers: supabaseHeaders, cache: "no-store" }
  );
  if (!res.ok) return FALLBACK_COUNT;
  const data = (await res.json()) as { count: number }[];
  return data[0]?.count ?? FALLBACK_COUNT;
}

export async function GET() {
  try {
    const [count, countries] = await Promise.all([fetchTotalCount(), fetchTopCountries()]);
    return NextResponse.json({ count, countries });
  } catch {
    return NextResponse.json({ count: FALLBACK_COUNT, countries: [] });
  }
}

export async function POST(req: NextRequest) {
  try {
    const code = (req.headers.get("x-vercel-ip-country") || FALLBACK_COUNTRY).toUpperCase();
    const { name, flag } = lookupCountry(code);

    const currentCount = await fetchTotalCount();
    const nextCount = currentCount + 1;

    await fetch(
      `${SUPABASE_URL}/rest/v1/page_views?page=eq.home`,
      {
        method: "PATCH",
        headers: {
          ...supabaseHeaders,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ count: nextCount }),
      }
    );

    const existingRes = await fetch(
      `${SUPABASE_URL}/rest/v1/visitor_countries?country_code=eq.${encodeURIComponent(code)}&select=visit_count`,
      { headers: supabaseHeaders, cache: "no-store" }
    );
    const existing = (await existingRes.json()) as { visit_count: number }[];

    if (existing[0]) {
      await fetch(
        `${SUPABASE_URL}/rest/v1/visitor_countries?country_code=eq.${encodeURIComponent(code)}`,
        {
          method: "PATCH",
          headers: {
            ...supabaseHeaders,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify({ visit_count: existing[0].visit_count + 1 }),
        }
      );
    } else {
      await fetch(
        `${SUPABASE_URL}/rest/v1/visitor_countries`,
        {
          method: "POST",
          headers: {
            ...supabaseHeaders,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify({
            country_code: code,
            country_name: name,
            flag_emoji: flag,
            visit_count: 1,
          }),
        }
      );
    }

    const countries = await fetchTopCountries();
    return NextResponse.json({ count: nextCount, countries });
  } catch {
    return NextResponse.json({ count: FALLBACK_COUNT, countries: [] });
  }
}
