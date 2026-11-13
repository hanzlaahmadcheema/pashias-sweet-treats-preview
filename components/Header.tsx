"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { clinic } from "@/lib/content";

const NAV = [
  { label: "Menu", href: "#menu" },
  { label: "Our story", href: "#story" },
  { label: "How to order", href: "#how" },
  { label: "FAQ", href: "#faq" },
  { label: "Visit", href: "#visit" },
];

function SweetMark({ className }: { className?: string }) {
  return (
    <span
      className={`flex items-center justify-center rounded-[9px] bg-pumpkin-800 font-serif text-lg font-semibold text-honey ${className ?? ""}`}
      aria-hidden="true"
    >
      P
    </span>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
      <div className="container-responsive flex h-14 items-center justify-between md:h-16">
        <Link
          href="#top"
          className="flex min-h-11 items-center gap-2 text-[1.05rem] font-extrabold leading-none tracking-tight text-pumpkin-800 md:text-xl"
          onClick={() => setMobileOpen(false)}
        >
          <SweetMark className="h-8 w-8 shrink-0 md:h-9 md:w-9" />
          <span className="whitespace-nowrap">Pashia's Sweet Treats</span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-1 py-2 text-[0.95rem] font-medium text-slate-700 transition-colors hover:text-pumpkin-800"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={clinic.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-11 items-center gap-2 rounded-full bg-pumpkin-700 px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-pumpkin-800 sm:inline-flex"
          >
            <ChatBubbleLeftRightIcon className="h-4 w-4" aria-hidden="true" />
            DM to order
          </a>
          <a
            href={clinic.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-pumpkin-800 text-white transition-colors hover:bg-pumpkin-900 sm:hidden"
            aria-label={`Message ${clinic.name} on Facebook`}
          >
            <ChatBubbleLeftRightIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pumpkin-800 lg:hidden"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-slate-200 bg-white transition-all duration-200 ease-out lg:hidden ${
          mobileOpen ? "max-h-[480px] border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="container-responsive grid gap-1 py-3"
          aria-label="Primary mobile"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block min-h-11 rounded-md px-3 py-2.5 font-medium text-slate-700 transition-colors hover:bg-pumpkin-50 hover:text-pumpkin-800"
            >
              {item.label}
            </a>
          ))}
          <a
            href={clinic.facebookUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-pumpkin-700 px-5 py-3 font-bold text-white transition-colors hover:bg-pumpkin-800"
          >
            DM to order on Facebook
          </a>
        </nav>
      </div>
    </header>
  );
}
