import Reveal from "@/components/Reveal";

const categories = [
  {
    title: "1. Protein & Whey Supplements",
    items: [
      "Whey Protein Concentrate with Amino Acids, 1kg pack",
      "Whey Protein Isolate, 1kg pack",
      "Mass Gainer Powder",
      "BCAA Powder",
      "Pre / Post-Workout Formula",
    ],
  },
  {
    title: "2. Iron & Hematinic Supplements",
    items: [
      "Ferrous Ascorbate + Folic Acid + Zinc Sulphate, Tablet / Syrup",
      "Carbonyl Iron + B12 + Zinc + Folic Acid, Capsule",
      "Ferrous Bisglycinate + Zinc + Vitamin B12, Tablet",
      "Ferric Ammonium Citrate + Zinc + B12 + Folic Acid, Syrup",
    ],
  },
  {
    title: "3. Calcium & Bone Health",
    items: [
      "Calcium Carbonate + Vitamin D3, Film Coated / Chewable Tablet",
      "Calcium Citrate Maleate + Vitamin D3, Chewable Tablet",
      "Calcium + Magnesium + Zinc + Vitamin D3, Tablet",
      "Calcium Citrate + Vitamin D3, Suspension",
    ],
  },
  {
    title: "4. Joint Care Supplements",
    items: [
      "Glucosamine + MSM + Chondroitin Sulphate, Tablet",
      "Glucosamine + Hyaluronic Acid + Curcumin + MSM, Tablet",
      "Collagen Peptide + Vitamin C, Sachet",
      "S-Adenosyl Methionine, Tablet",
    ],
  },
  {
    title: "5. Vitamin D3 & B-Complex",
    items: [
      "Vitamin D3 60,000 IU, Chewable Tablet / Sachet",
      "Vitamin D3 1000 IU / 800 IU, Oral Drops",
      "Cyanocobalamin + Folic Acid + B6, Chewable Tablet",
      "L-Methylfolate + Pyridoxal-5-Phosphate + B12, Tablet",
    ],
  },
  {
    title: "6. Probiotics & Digestive Health",
    items: [
      "Pre & Probiotic Blend, Sachet / Capsule",
      "Saccharomyces Boulardii + Lactic Acid Bacillus + Zinc, Sachet",
      "Ispaghula Husk + Lactitol Monohydrate, Powder",
      "Oral Rehydration Salt, 21.8g",
    ],
  },
  {
    title: "7. Antioxidant & Multivitamin",
    items: [
      "Multivitamin + Multimineral + Antioxidant, Syrup / Tablet",
      "Lycopene + Vitamin A, E, C + Selenium, Capsule",
      "Coenzyme Q10 + L-Carnitine + Vitamin E, Tablet",
      "Alpha Lipoic Acid + Vitamins, Capsule",
    ],
  },
  {
    title: "8. Gummies & Modern Formats",
    items: [
      "Multivitamin Gummies",
      "Vitamin C + Zinc Gummies",
      "Biotin Gummies",
      "Collagen Peptide Gummies",
      "Melatonin Gummies",
    ],
  },
];

export default function Nutraceuticals() {
  return (
    <>
      {/* BANNER */}
      <section className="bg-ink text-paper pt-[104px] pb-16">
        <div className="max-w-[1180px] mx-auto px-8">
          <h1 className="font-display text-[clamp(2rem,3.6vw,3rem)] mb-3">Nutraceuticals</h1>
          <div className="flex items-center gap-2 text-sm text-paper/60">
            <span>Home</span>
            <span>/</span>
            <span className="text-paper">Nutraceuticals</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="max-w-[1180px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-paper-dim">
              <img src="/nutraceuticals.jpg" alt="Rexera Pharma nutraceuticals" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.16em] uppercase text-teal before:content-[''] before:w-[18px] before:h-[1px] before:bg-teal">
              Nutraceuticals
            </div>
            <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.6rem)] mt-4 mb-5">
              A growing line alongside our pharmaceutical portfolio.
            </h2>
            <p className="text-ink-soft mb-4">
              Rexera Pharma manufactures and supplies a range of nutraceutical formulations
              &mdash; from protein and iron supplements to joint care and modern gummy formats
              &mdash; developed to the same quality and documentation standards as our
              pharmaceutical lines.
            </p>
            <p className="text-ink-soft">
              We work with distributors and healthcare partners worldwide to deliver
              nutraceutical products that meet regulatory expectations in each destination
              market.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CATEGORY LIST */}
      <section className="bg-paper-dim py-20">
        <div className="max-w-[1180px] mx-auto px-8">
          <Reveal className="max-w-[640px] mb-14">
            <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.6rem)]">
              List of Nutraceutical Formulations We Offer
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((c) => (
              <Reveal key={c.title}>
                <div className="bg-paper border border-ink/10 rounded-2xl p-7 h-full">
                  <h3 className="font-display text-lg mb-4">{c.title}</h3>
                  <ol className="space-y-2 list-decimal list-inside text-sm text-ink-soft">
                    {c.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}