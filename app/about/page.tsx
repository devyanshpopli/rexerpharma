import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <>
      {/* ABOUT US */}
      <section className="py-24">
        <div className="max-w-[1180px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.16em] uppercase text-teal before:content-[''] before:w-[18px] before:h-[1px] before:bg-teal">
             <h1>About Rexera Pharma</h1> 
            </div>
            <p className="mb-4">
              At Rexera Pharma, our name represents our vision — advancing pharmaceutical expertise, regulatory excellence, and access to quality medicines across global markets.
            </p>
            <p className="text-ink-soft mb-4">
              With extensive experience in the pharmaceutical industry, we are committed to supporting healthcare companies through professional drug regulatory services, pharmaceutical consultancy, and reliable medicine solutions. Our approach combines regulatory knowledge, industry expertise, and a strong commitment to quality to help pharmaceutical products move efficiently from development to patients.
            </p>
            <p className="text-ink-soft">
              We believe that healthcare is more than products and processes — it is about trust, responsibility, and improving lives. That is why we place integrity, regulatory compliance, quality, and transparency at the heart of everything we do.
            </p>
          </Reveal>
          <Reveal>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-paper-dim">
              <img
                src="/about-us.webp"
                alt="Rexera Pharma facility"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-paper-dim py-24">
        <div className="max-w-[1180px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal>
            <div className="bg-paper border border-ink/10 rounded-2xl p-10 h-full">
              <div className="font-mono text-[0.7rem] tracking-[0.16em] uppercase text-teal mb-4">
                Our Mission
              </div>
              <h2 className="font-display text-2xl mb-4">
                Reliable medicines, wherever they're needed most.
              </h2>
              <p className="text-ink-soft text-sm">
                To manufacture and deliver quality-assured, affordable generic medicines to
                markets that are too often underserved by larger manufacturers, backed by
                documentation and consistency our partners can build a business around.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-paper border border-ink/10 rounded-2xl p-10 h-full">
              <div className="font-mono text-[0.7rem] tracking-[0.16em] uppercase text-teal mb-4">
                Our Vision
              </div>
              <h2 className="font-display text-2xl mb-4">
                A trusted name in global pharmaceutical supply.
              </h2>
              <p className="text-ink-soft text-sm">
                To become a manufacturer distributors turn to first when entering a new market
                &mdash; known for regulatory readiness, batch consistency, and a willingness to
                serve regions others treat as an afterthought.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STRATEGIC GOALS */}
      <section className="py-24">
        <div className="max-w-[1180px] mx-auto px-8">
          <Reveal className="max-w-[640px] mb-14">
            <div className="flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.16em] uppercase text-teal before:content-[''] before:w-[18px] before:h-[1px] before:bg-teal">
              Where we're headed
            </div>
            <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.6rem)] mt-4 mb-4">
              Our Strategic Goals
            </h2>
            <p className="text-ink-soft">
              The priorities guiding Rexera's growth over the next several years.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Expand Manufacturing Capacity",
                desc: "Add injectable and pediatric formulation lines at our second facility to meet growing demand from existing markets.",
              },
              {
                title: "Deepen Regulatory Coverage",
                desc: "Register additional formulations across Sub-Saharan Africa and Southeast Asia, our two fastest-growing regions.",
              },
              {
                title: "Strengthen Quality Systems",
                desc: "Pursue additional certifications and tighten batch-release turnaround times without compromising testing rigor.",
              },
              {
                title: "Build Long-Term Partnerships",
                desc: "Move from transactional orders to multi-year supply agreements with distributors who share our reliability standards.",
              },
            ].map((g) => (
              <Reveal key={g.title}>
                <div className="border border-ink/10 rounded-2xl p-8 h-full">
                  <h3 className="font-display text-xl mb-3">{g.title}</h3>
                  <p className="text-ink-soft text-sm">{g.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MESSAGE FROM THE DIRECTOR */}
      <section className="bg-ink text-paper py-24">
        <div className="max-w-[1180px] mx-auto px-8 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-start">
          <Reveal>
            <div className="w-40 h-40 rounded-2xl overflow-hidden bg-paper/10">
              <img
                src="/director.jpg"
                alt="Message from the Director"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-amber mb-5">
              Message from the Director
            </div>
            <p className="font-display text-xl md:text-2xl leading-relaxed mb-6">
              &ldquo;When we started Rexera, we set out to solve one problem: too many
              manufacturers treat consistency as optional once a product leaves the factory. We
              built our entire process around the idea that a distributor should be able to
              reorder the same medicine, in the same market, for years, without surprises.
              That commitment hasn't changed as we've grown, and it won't as we keep
              growing.&rdquo;
            </p>
            <div className="text-sm text-paper/70">
              <div className="font-semibold text-paper">Mr. </div>
              <div>Managing Director, Rexera Pharma</div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}