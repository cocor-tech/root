import { createSession, checkAuth, destroySession } from "@/lib/auth"

export async function POST(request: Request) {
  const { password } = await request.json()
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin"

  if (password !== ADMIN_PASSWORD) {
    return Response.json({ error: "Invalid password" }, { status: 401 })
  }

  await createSession()
  return Response.json({ success: true })
}

export async function GET() {
  const authenticated = await checkAuth()
  if (!authenticated) {
    return Response.json({ authenticated: false }, { status: 401 })
  }
  return Response.json({ authenticated: true })
}

export async function DELETE() {
  await destroySession()
  return Response.json({ success: true })
}
