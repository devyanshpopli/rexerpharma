import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Case Processing & Safety Data Management",
    list: [
      "Receipt, triage, and processing of Individual Case Safety Reports (ICSRs)",
      "Data entry, narrative writing, and medical coding using MedDRA / WHO-DD",
      "Seriousness and causality assessment for every reported case",
    ],
  },
  {
    title: "Aggregate Reporting",
    intro: "Preparation of periodic safety reports, including:",
    list: [
      "Periodic Safety Update Reports (PSURs)",
      "Periodic Benefit-Risk Evaluation Reports (PBRERs)",
      "Development Safety Update Reports (DSURs)",
      "Annual reports for investigational products",
      "Risk-benefit evaluation and mitigation recommendations",
    ],
  },
  {
    title: "Risk Management Plan (RMP) Development",
    list: [
      "Development and review of RMPs tailored to each product's safety profile",
      "Defining and tracking effective risk minimization measures",
    ],
  },
  {
    title: "Pharmacovigilance System Master File (PSMF)",
    list: [
      "Creation and maintenance of PSMFs in line with EU regulations",
      "Ongoing updates as regulatory guidelines evolve",
    ],
  },
  {
    title: "Safety Database Setup & Maintenance",
    list: [
      "Configuring safety databases to global standards (EudraVigilance, FDA, etc.)",
      "Continuous monitoring and troubleshooting to keep systems running smoothly",
      "Ensuring timely reporting to authorities and business partners",
    ],
  },
  {
    title: "Regulatory Submissions",
    list: [
      "Submission of adverse event reports, including SUSARs and expedited reports",
      "Managing submissions through portals such as EudraVigilance and FDA FAERS",
    ],
  },
  {
    title: "Safety Data Exchange Agreements (SDEAs)",
    list: [
      "Drafting and managing SDEAs with business partners",
      "Defining clear roles and responsibilities for shared PV activities",
    ],
  },
  {
    title: "Literature Monitoring & Signal Detection",
    list: [
      "Systematic review of scientific literature for adverse event mentions",
      "Identifying and escalating potential safety signals from published data",
    ],
  },
  {
    title: "Audits & Inspections Support",
    list: [
      "Preparation for regulatory audits and inspections",
      "Internal audits to confirm alignment with Good Pharmacovigilance Practices (GVP)",
    ],
  },
  {
    title: "Medical Information Support",
    list: [
      "Scientific and medical responses to queries from healthcare professionals",
      "Accurate documentation of every medical inquiry received",
    ],
  },
];

export default function Pharmacovigilance() {
  return (
    <>
      {/* BANNER */}
      <section className="bg-ink text-paper pt-[104px] pb-16">
        <div className="max-w-[1180px] mx-auto px-8">
          <h1 className="font-display text-[clamp(2rem,3.6vw,3rem)] mb-3">Pharmacovigilance</h1>
          <div className="flex items-center gap-2 text-sm text-paper/60">
            <span>Home</span>
            <span>/</span>
            <span className="text-paper">Pharmacovigilance</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="max-w-[1180px] mx-auto px-8">
          <Reveal className="max-w-[760px] mb-16">
            <div className="flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.16em] uppercase text-teal before:content-[''] before:w-[18px] before:h-[1px] before:bg-teal">
              Pharmacovigilance
            </div>
            <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.6rem)] mt-4 mb-5">
              Pharmacovigilance Services
            </h2>
            <p className="text-ink-soft text-lg">
              Patient safety doesn't end when a product reaches the market &mdash; it's an
              ongoing responsibility. Rexera Pharma's pharmacovigilance function tracks the
              safety profile of every product we distribute, working in step with our
              regulatory team to keep partners compliant and informed as products move through
              their full lifecycle.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <Reveal key={s.title}>
                <div className="border border-ink/10 rounded-2xl p-8 h-full">
                  <h3 className="font-display text-lg mb-3">{s.title}</h3>
                  {s.intro && <p className="text-ink-soft text-sm mb-3">{s.intro}</p>}
                  <ul className="space-y-1.5 text-sm text-ink-soft">
                    {s.list.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-teal mt-1.5">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING NOTE */}
      <section className="bg-paper-dim py-16">
        <div className="max-w-[1180px] mx-auto px-8">
          <Reveal>
            <p className="text-center text-ink-soft italic max-w-[760px] mx-auto">
              Our pharmacovigilance team works with the same discretion and rigor we apply to
              every part of the product lifecycle &mdash; so partners can focus on growth while
              we manage the ongoing complexity of global safety monitoring.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}