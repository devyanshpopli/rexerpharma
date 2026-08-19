"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F2F1ED]/90 backdrop-blur-md border-b border-ink/10">
      <nav className="max-w-[1180px] mx-auto flex items-center justify-between px-6 md:px-8 py-2">
        <Link href="/" onClick={() => setMobileOpen(false)}>
          <img src="/logo.png" alt="Rexera Pharma" className="h-12 md:h-14 w-auto" />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-9 text-sm font-medium items-center">
          <Link href="/about" className="text-ink-soft hover:text-ink transition-colors">
            About
          </Link>

          <div className="relative group py-2">
            <button className="text-ink-soft hover:text-ink transition-colors flex items-center gap-1">
              Product
              <svg width="10" height="6" viewBox="0 0 10 6" className="mt-0.5">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="absolute left-0 top-full mt-1 w-56 bg-paper border border-ink/10 rounded-xl shadow-lg py-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-150">
              <Link href="/pharmaceutical" className="block px-4 py-2.5 text-sm text-ink-soft hover:text-ink hover:bg-paper-dim transition-colors">
                Pharmaceuticals
              </Link>
              <Link href="/nutraceuticals" className="block px-4 py-2.5 text-sm text-ink-soft hover:text-ink hover:bg-paper-dim transition-colors">
                Nutraceuticals
              </Link>
            </div>
          </div>

          <div className="relative group py-2">
            <button className="text-ink-soft hover:text-ink transition-colors flex items-center gap-1">
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" className="mt-0.5">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="absolute left-0 top-full mt-1 w-56 bg-paper border border-ink/10 rounded-xl shadow-lg py-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-150">
              <Link href="/services/regulatory-affairs" className="block px-4 py-2.5 text-sm text-ink-soft hover:text-ink hover:bg-paper-dim transition-colors">
                Regulatory Affairs
              </Link>
              <Link href="/services/pharmacovigilance" className="block px-4 py-2.5 text-sm text-ink-soft hover:text-ink hover:bg-paper-dim transition-colors">
                Pharmacovigilance
              </Link>
            </div>
          </div>

          <Link href="/contact" className="text-ink-soft hover:text-ink transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex text-sm font-semibold bg-ink text-paper px-5 py-2.5 rounded-full hover:bg-teal-deep transition-colors"
          >
            Partner with us
          </Link>

          {/* MOBILE TOGGLE */}
          <button onClick={() => setMobileOpen((o) => !o)} className="md:hidden p-2 -mr-2" aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {mobileOpen ? (
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-paper border-t border-ink/10 px-6 py-4 flex flex-col gap-1">
          <Link href="/about" onClick={() => setMobileOpen(false)} className="py-2.5 text-sm text-ink-soft hover:text-ink">
            About
          </Link>

          <button onClick={() => setProductOpen((o) => !o)} className="flex items-center justify-between py-2.5 text-sm text-ink-soft hover:text-ink">
            Product
            <svg width="10" height="6" viewBox="0 0 10 6" className={`transition-transform ${productOpen ? "rotate-180" : ""}`}>
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {productOpen && (
            <div className="pl-4 flex flex-col gap-1">
              <Link href="/pharmaceutical" onClick={() => setMobileOpen(false)} className="py-2 text-sm text-ink-soft hover:text-ink">
                Pharmaceuticals
              </Link>
              <Link href="/nutraceuticals" onClick={() => setMobileOpen(false)} className="py-2 text-sm text-ink-soft hover:text-ink">
                Nutraceuticals
              </Link>
            </div>
          )}

          <button onClick={() => setServicesOpen((o) => !o)} className="flex items-center justify-between py-2.5 text-sm text-ink-soft hover:text-ink">
            Services
            <svg width="10" height="6" viewBox="0 0 10 6" className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}>
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {servicesOpen && (
            <div className="pl-4 flex flex-col gap-1">
              <Link href="/services/regulatory-affairs" onClick={() => setMobileOpen(false)} className="py-2 text-sm text-ink-soft hover:text-ink">
                Regulatory Affairs
              </Link>
              <Link href="/services/pharmacovigilance" onClick={() => setMobileOpen(false)} className="py-2 text-sm text-ink-soft hover:text-ink">
                Pharmacovigilance
              </Link>
            </div>
          )}

          <Link href="/contact" onClick={() => setMobileOpen(false)} className="py-2.5 text-sm text-ink-soft hover:text-ink">
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 text-center text-sm font-semibold bg-ink text-paper px-5 py-3 rounded-full"
          >
            Partner with us
          </Link>
        </div>
      )}
    </header>
  );
}