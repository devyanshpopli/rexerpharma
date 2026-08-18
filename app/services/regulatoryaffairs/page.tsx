import Reveal from "@/components/Reveal";

const expertise = [
  {
    title: "Regulatory Strategy & Consultation",
    desc: "We map out the regulatory path for a product before development even finishes, so requirements are built in from the start instead of discovered late and causing delays.",
  },
  {
    title: "Dossier Preparation & Submission",
    desc: "Our team compiles, reviews, and submits registration dossiers across formats and application types, including:",
    list: [
      "CTD / eCTD formats for global markets",
      "ACTD and regional formats",
      "Bioavailability (BA) & Bioequivalence (BE) study documentation",
      "ANDA, NDA, IND, and MA applications",
      "Site registration and product licensing",
      "Drug Master Files (DMFs)",
    ],
  },
  {
    title: "Global Regulatory Compliance",
    desc: "We support submissions and registrations across multiple regions, including:",
    list: ["ASEAN", "African markets", "Middle East", "Latin America (LATAM)", "Rest of World (ROW) markets"],
  },
  {
    title: "Liaison with Regulatory Authorities",
    desc: "We stay in direct contact with regulatory bodies throughout the review process, responding to queries and coordinating audits and inspections as they arise.",
  },
  {
    title: "Labeling & Packaging Compliance",
    desc: "Every label and package insert is checked against the specific regulatory requirements of its destination market before it ships.",
  },
  {
    title: "Post-Marketing Regulatory Support",
    desc: "Our involvement continues after approval, covering:",
    list: ["Lifecycle management", "Variations and renewals", "Pharmacovigilance coordination", "Regulatory intelligence updates"],
  },
];

const whyChoose = [
  "An experienced regulatory team with a track record across multiple markets",
  "An established network of regulatory contacts and partners worldwide",
  "Turnaround times built around getting products to market faster",
  "Ongoing monitoring of regulatory changes across every market we serve",
];

export default function RegulatoryAffairs() {
  return (
    <>
      {/* BANNER */}
      <section className="bg-ink text-paper pt-[104px] pb-16">
        <div className="max-w-[1180px] mx-auto px-8">
          <h1 className="font-display text-[clamp(2rem,3.6vw,3rem)] mb-3">Regulatory Affairs</h1>
          <div className="flex items-center gap-2 text-sm text-paper/60">
            <span>Home</span>
            <span>/</span>
            <span className="text-paper">Regulatory Affairs</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="max-w-[1180px] mx-auto px-8">
          <Reveal className="max-w-[760px] mb-16">
            <div className="flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.16em] uppercase text-teal before:content-[''] before:w-[18px] before:h-[1px] before:bg-teal">
              Regulatory Affairs
            </div>
            <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.6rem)] mt-4 mb-5">
              Regulatory Affairs Services
            </h2>
            <p className="text-ink-soft text-lg">
              Rexera Pharma's regulatory affairs team works alongside formulation and quality
              from the earliest stages of product development, not after the fact. That means
              every product we bring to market is backed by documentation built for the
              specific regulatory landscape of its destination country.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((e) => (
              <Reveal key={e.title}>
                <div className="border border-ink/10 rounded-2xl p-8 h-full">
                  <h3 className="font-display text-xl mb-3">{e.title}</h3>
                  <p className="text-ink-soft text-sm mb-3">{e.desc}</p>
                  {e.list && (
                    <ul className="space-y-1.5 text-sm text-ink-soft">
                      {e.list.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-teal mt-1.5">&bull;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-paper-dim py-20">
        <div className="max-w-[1180px] mx-auto px-8">
          <Reveal className="mb-12">
            <h2 className="font-display text-[clamp(1.6rem,2.8vw,2.2rem)]">
              Why Partner With Rexera for Regulatory Affairs?
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {whyChoose.map((point) => (
              <Reveal key={point}>
                <div className="bg-paper border border-ink/10 rounded-2xl p-6 h-full text-center flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center text-teal">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="text-center text-ink-soft italic max-w-[760px] mx-auto">
              Rexera Pharma's regulatory affairs team is focused on one outcome: getting
              compliant products into the hands of our partners' markets faster, without
              cutting corners on documentation.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}