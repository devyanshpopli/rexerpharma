"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "bb94c176-66df-4df1-b942-008c8cd63d87");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-ink-soft text-paper py-24 min-h-screen">
      <div className="max-w-[1180px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
        <Reveal>
          <div className="flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.16em] uppercase text-amber before:content-[''] before:w-[18px] before:h-[1px] before:bg-amber">
            Get in touch
          </div>
          <h1 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] mt-4 mb-5">
            Request a product dossier or start a registration conversation.
          </h1>
          <p className="text-paper/70 mb-8">
            Tell us your market and therapeutic focus &mdash; our regulatory affairs team will
            follow up with dossiers and MOQ terms within two working days.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 text-sm">
              <span className="font-mono text-[0.7rem] uppercase text-amber min-w-[100px]">Email</span>
              <span>info@rexerapharma.com</span>
            </div>
            <div className="flex gap-3 text-sm">
              <span className="font-mono text-[0.7rem] uppercase text-amber min-w-[100px]">Phone</span>
              <span>+91-7017748074</span>
            </div>
            <div className="flex gap-3 text-sm">
              <span className="font-mono text-[0.7rem] uppercase text-amber min-w-[100px]">HQ</span>
              <span>Hari Nagar, Kabri Road, Panipat-132103</span>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                required
                className="bg-paper/[0.06] border border-paper/15 rounded-lg px-4 py-3.5 text-sm placeholder:text-paper/40"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                required
                className="bg-paper/[0.06] border border-paper/15 rounded-lg px-4 py-3.5 text-sm placeholder:text-paper/40"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <input
                type="email"
                name="email"
                placeholder="Work email"
                required
                className="bg-paper/[0.06] border border-paper/15 rounded-lg px-4 py-3.5 text-sm placeholder:text-paper/40"
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                required
                className="bg-paper/[0.06] border border-paper/15 rounded-lg px-4 py-3.5 text-sm placeholder:text-paper/40"
              />
            </div>
            <select
              name="therapeutic_area"
              required
              defaultValue=""
              className="bg-paper/[0.06] border border-paper/15 rounded-lg px-4 py-3.5 text-sm"
            >
              <option value="" disabled>
                Therapeutic area of interest
              </option>
              <option>Cardiology & Metabolic</option>
              <option>Anti-Infectives</option>
              <option>Gastroenterology</option>
              <option>Women&apos;s Health</option>
              <option>CNS & Pain Management</option>
              <option>Dermatology</option>
            </select>
            <textarea
              name="message"
              placeholder="Tell us about your registration needs"
              className="bg-paper/[0.06] border border-paper/15 rounded-lg px-4 py-3.5 text-sm placeholder:text-paper/40 min-h-[100px] resize-y"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="self-start mt-1.5 px-7 py-3.5 rounded-full text-sm font-semibold bg-amber text-ink hover:-translate-y-0.5 transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" && "Sending..."}
              {status === "sent" && "Request sent ✓"}
              {status === "error" && "Failed — try again"}
              {status === "idle" && "Send request"}
            </button>
            {status === "error" && (
              <p className="text-sm text-red-300">
                Something went wrong sending your message. Please try again or email us directly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}