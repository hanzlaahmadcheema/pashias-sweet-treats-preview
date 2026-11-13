"use client";

import { useState } from "react";
import { CheckCircleIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { clinic, serviceGroups } from "@/lib/content";

export function OrderForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState(serviceGroups[0].title);
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; date?: string }>({});
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (name.trim().length < 2) next.name = "Please enter your name.";
    if (!date) next.date = "Please pick the date you need it.";
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
  };

  if (done) {
    return (
      <div
        className="rounded-2xl border border-pumpkin-200 bg-pumpkin-50 p-6 sm:p-8"
        role="status"
      >
        <CheckCircleIcon
          className="h-10 w-10 text-pumpkin-700"
          aria-hidden="true"
        />
        <h3 className="mt-3 text-xl font-bold text-pumpkin-800">
          Thanks, {name.trim()} — your request is noted.
        </h3>
        <p className="mt-2 text-slate-600">
          Please DM us on Facebook to confirm your {service.toLowerCase()} for{" "}
          {new Date(date + "T12:00:00").toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
          . We will confirm the price and pickup time there.
        </p>
        <p className="mt-3 text-sm text-slate-500">
          Preview form — no order is sent yet. In the live site, requests go
          straight to the bakery.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={clinic.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-pumpkin-700 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-pumpkin-800"
          >
            <ChatBubbleLeftRightIcon className="h-5 w-5" aria-hidden="true" />
            DM us on Facebook
          </a>
          <button
            type="button"
            onClick={() => setDone(false)}
            className="min-h-11 rounded-full border-2 border-pumpkin-800 px-5 py-2 text-sm font-bold text-pumpkin-800 transition-colors hover:bg-pumpkin-50"
          >
            Make another request
          </button>
        </div>
      </div>
    );
  }

  const inputCls =
    "mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-ink placeholder:text-slate-400 focus:border-pumpkin-700 focus:outline-none focus:ring-2 focus:ring-pumpkin-700/30";
  const labelCls = "block text-sm font-semibold text-ink";

  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="ord-name" className={labelCls}>
            Your name
          </label>
          <input
            id="ord-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "ord-name-err" : undefined}
            className={inputCls}
          />
          {errors.name && (
            <p id="ord-name-err" className="mt-1.5 text-sm font-medium text-pumpkin-600">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="ord-date" className={labelCls}>
            Date needed
          </label>
          <input
            id="ord-date"
            name="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            aria-invalid={!!errors.date}
            aria-describedby={errors.date ? "ord-date-err" : undefined}
            className={inputCls}
          />
          {errors.date && (
            <p id="ord-date-err" className="mt-1.5 text-sm font-medium text-pumpkin-600">
              {errors.date}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="ord-service" className={labelCls}>
          What do you need?
        </label>
        <select
          id="ord-service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={`${inputCls} bg-white`}
        >
          {serviceGroups.map((g) => (
            <option key={g.title} value={g.title}>
              {g.title}
              {g.price ? ` — ${g.price}` : ""}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet — I need advice</option>
        </select>
      </div>

      <div>
        <label htmlFor="ord-message" className={labelCls}>
          Anything we should know? <span className="font-normal text-slate-500">(optional)</span>
        </label>
        <textarea
          id="ord-message"
          name="message"
          rows={3}
          placeholder="e.g. Birthday cake for 20 people, pink and gold, no nuts…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputCls}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-pumpkin-700 px-7 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-pumpkin-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pumpkin-700 focus-visible:ring-offset-2"
        >
          Request my order
        </button>
        <a
          href={clinic.facebookUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-pumpkin-800 px-6 py-3 font-bold text-pumpkin-800 transition-colors hover:bg-pumpkin-50"
        >
          <ChatBubbleLeftRightIcon className="h-5 w-5" aria-hidden="true" />
          Or DM us on Facebook
        </a>
      </div>
      <p className="text-sm text-slate-500">
        No payment needed to request. We confirm the price and pickup time by DM. To book, a non-refundable deposit of half down is required.
      </p>
    </form>
  );
}
