import { randomBytes } from "crypto";

// In-memory session + rate-limit state. Survives only while the serverless
// function instance stays warm; cold starts wipe both. This is intentional:
// for a private single-user site, the worst case is "log in again" and
// "attacker gets a fresh rate-limit bucket on each cold start."

const sessions = new Set<string>();

export function createSession(): string {
  const token = randomBytes(32).toString("hex");
  sessions.add(token);
  return token;
}

export function isValidSession(token: string | undefined): boolean {
  if (!token) return false;
  return sessions.has(token);
}

export function destroySession(token: string | undefined): void {
  if (!token) return;
  sessions.delete(token);
}

// ---------------------------------------------------------------------------
// Rate limit: sliding window per IP.
// ---------------------------------------------------------------------------

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 5;

const attempts = new Map<string, number[]>();

export function checkRateLimit(ip: string): {
  allowed: boolean;
  retryAfterSeconds: number;
} {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const recent = (attempts.get(ip) ?? []).filter((t) => t > windowStart);

  if (recent.length >= MAX_ATTEMPTS) {
    const oldest = recent[0];
    const retryAfterSeconds = Math.ceil((oldest + WINDOW_MS - now) / 1000);
    attempts.set(ip, recent);
    return { allowed: false, retryAfterSeconds };
  }

  recent.push(now);
  attempts.set(ip, recent);
  return { allowed: true, retryAfterSeconds: 0 };
}

export function clearRateLimit(ip: string): void {
  attempts.delete(ip);
}
