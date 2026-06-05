import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a]">
      {/* Mobile footer — simple */}
      <div className="block md:hidden px-6 py-10 space-y-8">
        <div>
          <Link href="/" className="text-white text-xs uppercase tracking-[0.25em] font-light">
            Cocor Tech
          </Link>
          <p className="text-[#505050] text-xs mt-2 leading-relaxed">
            An operating company that builds, acquires, and scales digital assets for profit.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.15em] text-[#505050]">
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <Link href="/agency" className="hover:text-white transition-colors">Agency</Link>
          <Link href="/brands" className="hover:text-white transition-colors">Brands</Link>
          <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
        <div className="border-t border-[#1a1a1a] pt-4 flex justify-between text-[10px] text-[#333]">
          <span>&copy; {new Date().getFullYear()} Cocor Tech</span>
          <div className="flex gap-4">
            <a href="https://x.com/moistello" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X</a>
            <a href="https://github.com/cocor-tech" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GH</a>
          </div>
        </div>
      </div>

      {/* Desktop footer — elaborate */}
      <div className="hidden md:block max-w-[1440px] mx-auto px-8 py-16">
        <div className="grid grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="text-white text-xs uppercase tracking-[0.25em] font-light">
              Cocor Tech
            </Link>
            <p className="text-[#505050] text-xs mt-4 leading-relaxed max-w-xs">
              An operating company that builds, acquires, and scales digital assets for profit.
            </p>
          </div>

          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">Divisions</h4>
            <ul className="space-y-2">
              {[
                { label: "Products", href: "/products" },
                { label: "Agency", href: "/agency" },
                { label: "Brand Assets", href: "/brands" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#505050] hover:text-white text-xs uppercase tracking-[0.15em] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Vision", href: "/vision" },
                { label: "Blog", href: "/blog" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#505050] hover:text-white text-xs uppercase tracking-[0.15em] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {[
                { label: "Docs", href: "/docs" },
                { label: "Privacy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#505050] hover:text-white text-xs uppercase tracking-[0.15em] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-8 flex justify-between items-center">
          <p className="text-[#333] text-[10px] uppercase tracking-[0.1em]">
            &copy; {new Date().getFullYear()} Cocor Tech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://x.com/moistello" target="_blank" rel="noopener noreferrer" className="text-[#505050] hover:text-white text-[10px] uppercase tracking-[0.15em] transition-colors">
              Twitter / X
            </a>
            <a href="https://github.com/cocor-tech" target="_blank" rel="noopener noreferrer" className="text-[#505050] hover:text-white text-[10px] uppercase tracking-[0.15em] transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
