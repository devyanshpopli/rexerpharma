"use client";

import { useState, useMemo } from "react";

type Product = {
  code: string;
  name: string;
  dose: string;
  pack: string;
  status: string;
};

type Category = {
  key: string;
  label: string;
  products: Product[];
};

const categories: Category[] = [
  {
    key: "tablets",
    label: "Tablets",
    products: [
      { code: "RXF 001", name: "Amlodipine 5mg + Losartan Potassium 50mg Tablets", dose: "Tablets", pack: "10x10's", status: "Dossier Available" },
      { code: "RXF 002", name: "Amoxycillin 500mg + Clavulanic Acid 125mg Tablets", dose: "Tablets", pack: "10x10's", status: "Dossier Available" },
      { code: "RXF 003", name: "Atorvastatin 10mg + Ezetimibe 10mg Tablets", dose: "Tablets", pack: "10x10's", status: "As per requirements" },
      { code: "RXF 004", name: "Metformin 500mg SR + Glimepiride 1mg Tablets", dose: "Tablets", pack: "10x10's", status: "As per requirements" },
    ],
  },
  {
    key: "capsules",
    label: "Capsules",
    products: [
      { code: "RXF 101", name: "Esomeprazole 40mg (EC) + Domperidone 30mg (SR)", dose: "Capsules", pack: "10x10's", status: "As per requirements" },
      { code: "RXF 102", name: "Diclofenac 50mg (EC) + Serratiopeptidase 15mg", dose: "Capsules", pack: "10x10's", status: "As per requirements" },
    ],
  },
  {
    key: "external",
    label: "External Preparations",
    products: [
      { code: "RXF 201", name: "Clotrimazole 1% + Beclomethasone 0.025% Cream", dose: "Cream", pack: "15g/30g", status: "As per requirements" },
      { code: "RXF 202", name: "Diclofenac Diethylamine 2% Gel", dose: "Gel", pack: "15g/30g", status: "As per requirements" },
    ],
  },
  {
    key: "syrups",
    label: "Syrups",
    products: [
      { code: "RXF 301", name: "Ambroxol 30mg + Guaifenesin 50mg per 5ml", dose: "Syrup", pack: "60-100ml", status: "As per requirements" },
    ],
  },
  {
    key: "dry-syrups",
    label: "Dry Syrups",
    products: [
      { code: "RXF 401", name: "Amoxycillin 125mg + Clavulanic Acid 31.25mg per 5ml", dose: "Dry Syrup", pack: "30ml/50ml", status: "As per requirements" },
      { code: "RXF 402", name: "Cefixime 50mg per 5ml", dose: "Dry Syrup", pack: "30ml/50ml", status: "As per requirements" },
    ],
  },
  {
    key: "liquid-injections",
    label: "Liquid Injections",
    products: [
      { code: "RXF 501", name: "Ondansetron 2mg/ml Injection", dose: "Liquid Injection", pack: "Amp/Vial", status: "As per requirements" },
    ],
  },
  {
    key: "dry-injections",
    label: "Dry Injections",
    products: [
      { code: "RXF 601", name: "Ceftriaxone (as sodium) 1g + Sulbactam 500mg", dose: "Dry Injection", pack: "Vial", status: "As per requirements" },
    ],
  },
  {
    key: "eye-drops",
    label: "Eye Drops",
    products: [
      { code: "RXF 701", name: "Moxifloxacin 0.5% w/v Eye Drops", dose: "Eye Drops", pack: "5ml/10ml", status: "Dossier Available" },
    ],
  },
];

export default function PharmaceuticalList() {
  const [activeTab, setActiveTab] = useState(categories[0].key);
  const [search, setSearch] = useState("");

  const activeCategory = categories.find((c) => c.key === activeTab)!;

  const filtered = useMemo(() => {
    if (!search.trim()) return activeCategory.products;
    const q = search.toLowerCase();
    return activeCategory.products.filter((p) => p.name.toLowerCase().includes(q));
  }, [activeCategory, search]);

  return (
    <section className="py-24">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
          <h1 className="font-display text-[clamp(1.9rem,3.4vw,2.6rem)]">
            List of Pharmaceutical Formulations We Offer
          </h1>
          <div className="relative w-full md:w-72">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter product name"
              className="w-full border border-ink/15 rounded-full pl-5 pr-11 py-3 text-sm focus:outline-none focus:border-teal"
            />
            <svg width="16" height="16" viewBox="0 0 24 24" className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-soft" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 border-b border-ink/10 pb-4">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => { setActiveTab(c.key); setSearch(""); }}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors ${
                activeTab === c.key ? "bg-ink text-paper" : "bg-paper-dim text-ink-soft hover:text-ink"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto border border-ink/10 rounded-2xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-paper-dim text-left">
                <th className="px-5 py-3.5 font-semibold whitespace-nowrap">Product Code</th>
                <th className="px-5 py-3.5 font-semibold">Generic Name of Product</th>
                <th className="px-5 py-3.5 font-semibold whitespace-nowrap">Dosage Form</th>
                <th className="px-5 py-3.5 font-semibold whitespace-nowrap">Pack Size</th>
                <th className="px-5 py-3.5 font-semibold whitespace-nowrap">Dossier Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p, i) => (
                <tr key={p.code} className={i % 2 === 0 ? "bg-paper" : "bg-paper-dim/40"}>
                  <td className="px-5 py-3.5 font-mono text-xs text-ink-soft whitespace-nowrap">{p.code}</td>
                  <td className="px-5 py-3.5">{p.name}</td>
                  <td className="px-5 py-3.5 whitespace-nowrap">{p.dose}</td>
                  <td className="px-5 py-3.5 whitespace-nowrap">{p.pack}</td>
                  <td className="px-5 py-3.5 whitespace-nowrap">
                    <span className={`text-xs px-2.5 py-1 rounded-full ${p.status === "Dossier Available" ? "bg-teal/10 text-teal-deep" : "bg-ink/5 text-ink-soft"}`}>
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-ink-soft">
                    No products match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}