import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/pharmaceutical", label: "Pharmaceutical" },
  {href:"/nutraceutical", label:"Nutraceutical"},
  {href:"/regulatoryaffairs", label:"regulatoryaffairs"},
  {href:"/pharmacovigilance", labek:"pharmacovigilance"}
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F2F1ED]/90 backdrop-blur-md border-b border-ink/10">
      <nav className="max-w-[1180px] mx-auto flex items-center justify-between  h-45">
        <Link href="/" className=" ">
          <img src="/logo.png" alt="Rexera Pharma" width={250} />
        </Link>

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
              <Link
                href="/pharmaceutical"
                className="block px-4 py-2.5 text-sm text-ink-soft hover:text-ink hover:bg-paper-dim transition-colors"
              >
                Pharmaceuticals
              </Link>
              <Link
                href="/neutraceutical"
                className="block px-4 py-2.5 text-sm text-ink-soft hover:text-ink hover:bg-paper-dim transition-colors"
              >
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
              <Link
                href="/services/regulatoryaffairs"
                className="block px-4 py-2.5 text-sm text-ink-soft hover:text-ink hover:bg-paper-dim transition-colors"
              >
                Regulatory Affairs
              </Link>
              <Link
  href="/services/pharmacovigilance"
  className="block px-4 py-2.5 text-sm text-ink-soft hover:text-ink hover:bg-paper-dim transition-colors"
>
  Pharmacovigilance
</Link>
            </div>
          </div>

          <Link href="/contact" className="text-ink-soft hover:text-ink transition-colors">
            Contact
          </Link>
        </div>

        <Link
          href="/contact"
          className="text-sm font-semibold bg-ink text-paper px-5 py-2.5 rounded-full hover:bg-teal-deep transition-colors"
        >
          Partner with us
        </Link>
      </nav>
    </header>
  );
}




















