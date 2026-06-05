import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Documentation — Cocor Tech",
  description: "Cocor Tech documentation covering our products, services, and platform architecture.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/docs" },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
