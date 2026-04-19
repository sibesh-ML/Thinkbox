import { NextResponse } from "next/server";
import {
  checkRateLimit,
  clearRateLimit,
  createSession,
} from "@/lib/auth";

const AUTH_COOKIE = "thinkbox-auth";
const THIRTY_DAYS = 60 * 60 * 24 * 30;

function getClientIp(request: Request): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const real = request.headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}

export async function POST(request: Request) {
  const expected = process.env.PASSWORD;
  if (!expected) {
    return NextResponse.json(
      { error: "Server is missing PASSWORD env var." },
      { status: 500 },
    );
  }

  const ip = getClientIp(request);
  const limit = checkRateLimit(ip);
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many attempts. Try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(limit.retryAfterSeconds) },
      },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body." }, { status: 400 });
  }

  const password =
    typeof body === "object" && body !== null && "password" in body
      ? (body as { password: unknown }).password
      : undefined;

  if (typeof password !== "string" || password !== expected) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  // Correct password — clear their rate-limit bucket and issue a session.
  clearRateLimit(ip);
  const token = createSession();

  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: AUTH_COOKIE,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: THIRTY_DAYS,
  });
  return res;
}
