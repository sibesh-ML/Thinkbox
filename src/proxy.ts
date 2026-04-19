import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_COOKIE = "thinkbox-auth";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow login page and auth API routes through without a session.
  if (
    pathname === "/login" ||
    pathname.startsWith("/api/login") ||
    pathname.startsWith("/api/logout")
  ) {
    return NextResponse.next();
  }

  // The cookie value is a random 256-bit session token (not the password).
  // The proxy runs on the Edge runtime and can't share memory with Node
  // route handlers, so we only check the cookie shape here; route handlers
  // that need strong guarantees can re-validate against the in-memory set.
  const token = request.cookies.get(AUTH_COOKIE)?.value;
  if (!token || token.length < 32) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Run on all routes except Next.js internals and static files.
    "/((?!_next/static|_next/image|favicon.ico|robots.txt).*)",
  ],
};
