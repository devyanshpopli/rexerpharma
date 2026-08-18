import Reveal from "@/components/Reveal";

const certs = [
  { code: "WHO-GMP", title: "Good Manufacturing Practice", desc: "All three production sites hold current WHO-GMP status." },
  { code: "ISO 9001:2015", title: "Quality Management", desc: "Certified process controls across formulation and packaging lines." },
  { code: "ISO 14001", title: "Environmental Management", desc: "Effluent treatment and solvent recovery built into every plant." },
  { code: "CTD-READY", title: "Regulatory Dossiers", desc: "Common Technical Document files prepared for rapid market entry." },
];

export default function Quality() {
  return (
    <section className="bg-ink text-paper py-24 min-h-screen">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="max-w-[640px] mb-16">
          <div className="flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.16em] uppercase text-amber before:content-[''] before:w-[18px] before:h-[1px] before:bg-amber">
            Quality &amp; compliance
          </div>
          <h1 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] mt-4 mb-4">
            Certifications that travel with the product.
          </h1>
          <p className="text-paper/70 text-lg">
            Our facilities are audited to the standards that matter to the regulators our
            clients answer to &mdash; so approvals move faster on their end.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {certs.map((c) => (
            <Reveal key={c.code}>
              <div className="border border-paper/15 rounded-2xl p-6 h-full">
                <div className="font-mono text-[0.7rem] text-amber tracking-[0.08em]">{c.code}</div>
                <h4 className="font-display text-lg mt-2.5 mb-2">{c.title}</h4>
                <p className="text-sm text-paper/60">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="border-t border-paper/15 pt-14 grid grid-cols-1 md:grid-cols-2 gap-14">
            <div>
              <h3 className="font-display text-2xl mb-4">Manufacturing facilities</h3>
              <p className="text-paper/70 text-sm mb-3">
                Three production sites cover solid-dose (tablets and capsules), liquid
                formulations (syrups and suspensions), and topical products (creams and
                ointments), each with dedicated quality control labs.
              </p>
              <p className="text-paper/70 text-sm">
                Batch release testing follows a documented chain of custody from raw material
                intake through finished-goods release, with retained samples held for the full
                shelf life of every batch.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl mb-4">Regulatory affairs</h3>
              <p className="text-paper/70 text-sm mb-3">
                Our regulatory team prepares Common Technical Document dossiers alongside
                formulation development, rather than after it, so a product ready for one
                market's registration process is largely ready for the next.
              </p>
              <p className="text-paper/70 text-sm">
                We maintain active registrations and renewal schedules on behalf of distribution
                partners across all 40+ markets we currently serve.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
