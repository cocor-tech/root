import { cookies } from "next/headers"
import crypto from "crypto"

const COOKIE_NAME = "cocor_admin_session"
const AUTH_SECRET = process.env.AUTH_SECRET || crypto.randomBytes(16).toString("hex")
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin"

function makeToken(): string {
  const timestamp = Date.now().toString(36)
  const payload = `${ADMIN_PASSWORD}:${timestamp}:${AUTH_SECRET}`
  const hash = crypto.createHash("sha256").update(payload).digest("hex").slice(0, 16)
  return `${timestamp}-${hash}`
}

function verifyToken(token: string): boolean {
  const parts = token.split("-")
  if (parts.length !== 2) return false
  const [timestamp, hash] = parts
  const payload = `${ADMIN_PASSWORD}:${timestamp}:${AUTH_SECRET}`
  const expected = crypto.createHash("sha256").update(payload).digest("hex").slice(0, 16)
  if (!crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(expected))) return false
  const ts = parseInt(timestamp, 36)
  if (isNaN(ts)) return false
  // Expires after 24 hours
  if (Date.now() - ts > 24 * 60 * 60 * 1000) return false
  return true
}

export async function createSession(): Promise<string> {
  const token = makeToken()
  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
  })
  return token
}

export async function checkAuth(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  if (!token) return false
  return verifyToken(token)
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE_NAME)
}
