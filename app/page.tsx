import Link from "next/link";
import Reveal from "@/components/Reveal";
import StartConversation from "@/components/StartConversation";

export default function Home() {
  return (
    <>
      {/* HERO */}
      {/* HERO */}
<section className="relative bg-ink text-paper pt-[104px] pb-28 overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-40"
  >
    <source src="/hero.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-ink/60" />
  <div className="absolute inset-0 blister-field" />
  <div className="relative max-w-[1180px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-14 items-end">
    <div>
      {/* <div className="flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.16em] uppercase text-amber before:content-[''] before:w-[18px] before:h-[1px] before:bg-amber">
      </div> */}
      <h1 className="font-display font-medium text-[clamp(2.6rem,5vw,4.4rem)] leading-[1.04] mt-6 mb-6">
        Our Vision our Expertise.
      </h1>
      <p className="max-w-[520px] text-lg text-paper/70 mb-9">
        We provide comprehensive drug regulatory services, helping pharmaceutical companies navigate complex regulatory requirements and bring medicines to market efficiently. Alongside our regulatory expertise, we are committed to providing quality pharmaceutical products that meet global standards and contribute to better healthcare outcomes worldwide.
      </p>
      <div className="flex gap-4 flex-wrap">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-amber text-ink hover:-translate-y-0.5 transition-transform"
        >
          View our portfolio
        </Link>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=partnerships@rexerapharma.com&su=Partnership%20Inquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border border-paper/20 hover:bg-paper/10 transition-colors"
        >
          Reach Out
        </a>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-3.5">
      {[
        ["40+", "Countries served"],
        ["300+", "Happy Clients"],
        ["600+", "Successful Projects"],
        ["24/7", "Quality monitoring"],
      ].map(([num, label]) => (
        <div
          key={label}
          className="bg-paper/[0.06] border border-paper/15 rounded-2xl p-7 backdrop-blur-sm"
        >
          <div className="font-display text-4xl text-amber leading-none">{num}</div>
          <div className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-paper/60 mt-2">
            {label}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ABOUT SNAPSHOT */}
      <section className="py-28">
        <div className="max-w-[1180px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.16em] uppercase text-teal before:content-[''] before:w-[18px] before:h-[1px] before:bg-teal">
              Who we are
            </div>
            <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.6rem)] mt-4 mb-4">
             A Glimpse About Rexera Pharma
            </h2>
            <p className="text-ink-soft mb-4">

Rexera Pharma is a pharmaceutical regulatory consultancy dedicated to helping pharmaceutical, biotechnology, and healthcare companies navigate complex drug regulatory requirements. We provide end-to-end regulatory services, from regulatory strategy and dossier preparation to submissions, compliance, and post-approval support.

With a strong focus on quality, compliance, and timely execution, we help our clients bring safe and effective medicines to market efficiently. Alongside our regulatory expertise, Rexera Pharma is committed to supporting access to quality medicines that contribute to better healthcare and improved global health.

            </p>
            <p className="text-ink-soft">
              Our goal is simple: to make pharmaceutical regulation more efficient and healthcare more accessible worldwide.
            </p>
            <Link
              href="/about"
              className="inline-block mt-6 text-sm font-semibold text-teal-deep border-b border-teal-deep/40 hover:border-teal-deep"
            >
              More about Rexera &rarr;
            </Link>
          </Reveal>
          <Reveal>
           <div className=" rounded-5xl relative overflow-hidden">
    <img src="/about.png" alt="Rexera Pharma" className="w-full h-full object-cover" />
  </div>
          </Reveal>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      

<section className="relative bg-paper-dim py-28 overflow-hidden">
  <img
    src="/portfolio.jpg"
    alt=""
    className="absolute inset-0 w-full h-full object-cover opacity-100"
  />
  <div className="absolute inset-0 bg-paper-dim/85" />

  <div className="relative max-w-[1180px] mx-auto px-8">
    <Reveal className="max-w-[640px] mb-14">
      <div className="flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.16em] uppercase text-teal before:content-[''] before:w-[18px] before:h-[1px] before:bg-teal">
        Product portfolio
      </div>
      <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.6rem)] mt-4 mb-4">
        Therapeutic Categories We Deal In
      </h2>
      <p className="text-ink-soft">
        Rexera Pharma offers a wide range of high-quality and regulatory-compliant pharmaceutical products across multiple therapeutic segments. Our product portfolio spans the following key categories:
        reformulation project.
      </p>
    </Reveal>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
      {[
        "Antibiotics & Antibacterials",
        "Antivirals & Antifungals",
        "Anti-Cancer Drugs (Oncology)",
        "Anti-Diabetic Agents",
        "Cardiovascular Drugs",
        "Analgesics & Anti-inflammatory",
        "Gastrointestinal & Antacids",
        "Respiratory & Antihistaminic",
        "CNS Agents",
        "Anti-Malarials & Antiparasitics",
        "Dermatological Preparations",
        "Gynecological & Hormonal",
        "Vitamins & Nutraceuticals",
        "Immunosuppressants",
        "Hematological Products",
        "Ophthalmic & ENT Preparations",
      ].map((title) => (
        <div
          key={title}
          className="bg-paper border border-ink/10 rounded-xl px-5 py-8 text-center flex flex-col items-center gap-3.5 hover:border-teal/40 transition-colors"
        >
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <rect x="4" y="12" width="22" height="10" rx="5" stroke="#2D8FE0" strokeWidth="1.6" />
            <path d="M15 12V22" stroke="#2D8FE0" strokeWidth="1.6" />
            <circle cx="15" cy="7" r="3.5" stroke="#1E8449" strokeWidth="1.6" />
          </svg>
          <h3 className="font-display text-sm leading-snug">{title}</h3>
        </div>
      ))}
    </div>
    </div>
</section>

{/* DOSAGE FORMS */}
<section className="py-28">
  <div className="max-w-[1180px] mx-auto px-8">
    <Reveal className="max-w-[640px] mb-14 mx-auto text-center">
      <div className="flex items-center justify-center gap-2 font-mono text-[0.72rem] tracking-[0.16em] uppercase text-teal before:content-[''] before:w-[18px] before:h-[1px] before:bg-teal after:content-[''] after:w-[18px] after:h-[1px] after:bg-teal">
        We Offer
      </div>
      <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.6rem)] mt-4 mb-4">
        Dosage Forms We Offer
      </h2>
      <p className="text-ink-soft">
        We deal in a broad spectrum of pharmaceutical dosage forms tailored to meet diverse
        clinical and regulatory requirements.
      </p>
    </Reveal>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {[
  { name: "Tablets", icon: <><rect x="7" y="14" width="18" height="10" rx="5" stroke="currentColor" strokeWidth="1.6" /><line x1="16" y1="14" x2="16" y2="24" stroke="currentColor" strokeWidth="1.6" /></> },
  { name: "Capsules", icon: <><rect x="8" y="9" width="10" height="22" rx="5" transform="rotate(-30 16 16)" stroke="currentColor" strokeWidth="1.6" /><line x1="12" y1="15" x2="20" y2="17" stroke="currentColor" strokeWidth="1.6" /></> },
  { name: "Oral Liquids & Syrups", icon: <><path d="M12 6h8v5l3 4v11a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V15l3-4V6Z" stroke="currentColor" strokeWidth="1.6" /><line x1="12" y1="20" x2="20" y2="20" stroke="currentColor" strokeWidth="1.4" /></> },
  { name: "Dry Syrups & Powder for Oral Suspension", icon: <><path d="M11 5h10v6l2 4v11a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V15l2-4V5Z" stroke="currentColor" strokeWidth="1.6" /><line x1="9.5" y1="17" x2="22.5" y2="17" stroke="currentColor" strokeWidth="1.4" /></> },
  { name: "Injectables", icon: <><rect x="6" y="18" width="14" height="5" rx="1" transform="rotate(-45 13 20.5)" stroke="currentColor" strokeWidth="1.6" /><line x1="20" y1="12" x2="26" y2="6" stroke="currentColor" strokeWidth="1.6" /><line x1="17" y1="15" x2="19" y2="13" stroke="currentColor" strokeWidth="1.6" /></> },
  { name: "Infusions", icon: <><path d="M12 6h8l2 8-2 4v8a4 4 0 0 1-8 0v-8l-2-4 2-8Z" stroke="currentColor" strokeWidth="1.6" /><line x1="20" y1="16" x2="25" y2="18" stroke="currentColor" strokeWidth="1.4" /></> },
  { name: "Ointments, Creams & Gels", icon: <><rect x="8" y="6" width="16" height="22" rx="3" transform="rotate(30 16 17)" stroke="currentColor" strokeWidth="1.6" /></> },
  { name: "Eye Drops & Ear Drops", icon: <><path d="M13 6h6v6l4 5v10a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V17l4-5V6Z" stroke="currentColor" strokeWidth="1.6" /><circle cx="16" cy="21" r="1.4" fill="currentColor" /></> },
  { name: "Nasal Sprays", icon: <><rect x="10" y="12" width="10" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M15 12V8h4" stroke="currentColor" strokeWidth="1.6" /><line x1="22" y1="10" x2="25" y2="7" stroke="currentColor" strokeWidth="1.4" /></> },
  { name: "Topical Solutions & Lotions", icon: <><circle cx="14" cy="13" r="4" stroke="currentColor" strokeWidth="1.6" /><line x1="14" y1="9" x2="14" y2="17" stroke="currentColor" strokeWidth="1.6" /><line x1="10" y1="13" x2="18" y2="13" stroke="currentColor" strokeWidth="1.6" /><path d="M9 20c2 3 12 3 14 0" stroke="currentColor" strokeWidth="1.6" /></> },
  { name: "Powder Sachets", icon: <><rect x="8" y="7" width="16" height="19" rx="2" transform="rotate(20 16 16)" stroke="currentColor" strokeWidth="1.6" strokeDasharray="1.5 2.2" /></> },
].map((d) => (
  <Reveal key={d.name}>
    <div className="bg-paper border border-ink/10 rounded-xl px-5 py-8 text-center flex flex-col items-center gap-4 h-full hover:border-teal/40 transition-colors">
      <div className="w-16 h-16 rounded-full bg-paper-dim flex items-center justify-center text-ink">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          {d.icon}
        </svg>
      </div>
      <h3 className="font-display text-sm leading-snug">{d.name}</h3>
    </div>
  </Reveal>
))}
    </div>
  </div>
</section>

      {/* CTA */}
      {/* <section className="bg-ink-soft text-paper py-24">
        <div className="max-w-[1180px] mx-auto px-8 text-center">
          <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.6rem)] mb-5">
            Ready to register Rexera formulations in your market?
          </h2>
          <p className="text-paper/70 max-w-[560px] mx-auto mb-8">
            Send us your therapeutic focus and target country &mdash; our regulatory affairs
            team will follow up with dossiers and terms within two working days.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-amber text-ink hover:-translate-y-0.5 transition-transform"
          >
            Start a conversation
          </Link>
        </div>
      </section> */}
      {/* CTA */}
<section className="bg-ink-soft text-paper py-24">
  <div className="max-w-[1180px] mx-auto px-8 text-center">
    <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.6rem)] mb-5">
      Ready to register Rexera formulations in your market?
    </h2>
    <p className="text-paper/70 max-w-[560px] mx-auto mb-8">
      Send us your therapeutic focus and target country &mdash; our regulatory affairs
      team will follow up with dossiers and terms within two working days.
    </p>
    <StartConversation />
  </div>
</section>
    </>

    
  );
}
