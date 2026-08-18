import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/50 py-10 text-sm  mx-auto  justify-between  h-45">
      <div className="max-w-[1180px] mx-auto px-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-paper/80 font-display">
          <Link href="/" className=" ">
          <img src="/logo.png" alt="Rexera Pharma" width={100} />
        </Link>
        </div>
        <div className="flex gap-6">
          <Link href="/about"> <b>About</b> </Link>
          <Link href="/portfolio"><b>Product</b></Link>
          <Link href="/quality"><b>Services</b></Link>
          <Link href="/contact"><b>Contact</b></Link>
        </div>
        <div>&copy; <b>2026 Rexera Pharma. All rights reserved.</b></div>
      </div>
    </footer>
  );
}
