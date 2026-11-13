"use client";

import { ChatBubbleLeftRightIcon, CakeIcon } from "@heroicons/react/24/outline";
import { clinic } from "@/lib/content";

/**
 * Sticky bottom action bar on mobile (thumb-reachable DM + Cakes) — the
 * pattern the top bakery sites use. Hidden on desktop, where the header
 * carries the call-to-action.
 */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur lg:hidden">
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
        <a
          href={clinic.facebookUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-pumpkin-800 px-4 font-bold text-pumpkin-800 transition-all duration-200 hover:bg-pumpkin-50 active:scale-[0.98]"
        >
          <ChatBubbleLeftRightIcon className="h-5 w-5" aria-hidden="true" />
          DM to order
        </a>
        <a
          href="#menu"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-pumpkin-700 px-4 font-bold text-white transition-all duration-200 hover:bg-pumpkin-800 active:scale-[0.98]"
        >
          <CakeIcon className="h-5 w-5" aria-hidden="true" />
          See menu
        </a>
      </div>
    </div>
  );
}
