"use client";

import { useEffect, useRef, useState } from "react";

const options = [
  {
    label: "WhatsApp",
    href: "https://wa.me/7017748074",
    icon: (
      <path
        d="M16 4a12 12 0 0 0-10.4 18l-1.3 6 6.2-1.3A12 12 0 1 0 16 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rexera-pharma-b348621bb",
    icon: (
      <>
        <rect x="6" y="12" width="4" height="14" stroke="currentColor" strokeWidth="1.6" fill="none" />
        <circle cx="8" cy="7" r="2" stroke="currentColor" strokeWidth="1.6" fill="none" />
        <path d="M15 26v-9c0-2 1.5-3 3.5-3s4.5 1 4.5 4.5V26" stroke="currentColor" strokeWidth="1.6" fill="none" />
        <line x1="15" y1="14" x2="15" y2="26" stroke="currentColor" strokeWidth="1.6" />
      </>
    ),
  },
  {
    label: "Email",
    href: "mailto:info@rexerapharma.com?subject=Partnership Inquiry",
    icon: (
      <>
        <rect x="5" y="8" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none" />
        <path d="M5 9l11 9 11-9" stroke="currentColor" strokeWidth="1.6" fill="none" />
      </>
    ),
  },
];

export default function StartConversation() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-amber text-ink hover:-translate-y-0.5 transition-transform"
      >
        Start a conversation
      </button>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-56 bg-paper border border-ink/10 rounded-xl shadow-lg py-2 z-20">
          {options.map((o) => (
            <a
              key={o.label}
              href={o.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-ink-soft hover:text-ink hover:bg-paper-dim transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                {o.icon}
              </svg>
              {o.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}