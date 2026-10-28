"use client";

import { useState, type FormEvent } from "react";
import { validateEnquiry, type EnquiryErrors, type EnquiryPayload } from "@/lib/enquiry";

type Status = "idle" | "loading" | "success" | "error";

const field =
  "mt-2 block min-h-12 w-full border border-beige bg-white px-4 text-base text-navy placeholder:text-navy/40 focus:border-gold";

export function EnquiryForm({ configurations }: { configurations: string[] }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [serverError, setServerError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload: EnquiryPayload = {
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      configuration: String(form.get("configuration") ?? ""),
      message: String(form.get("message") ?? ""),
      consent: form.get("consent") === "on",
    };

    const found = validateEnquiry(payload);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("loading");
    setServerError("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        return;
      }
      if (data.errors) setErrors(data.errors);
      setServerError(data.error ?? "Please check the highlighted fields.");
      setStatus("error");
    } catch {
      setServerError("Network problem. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-gold bg-white p-8">
        <p className="font-serif text-3xl">Thank you</p>
        <p className="mt-3 leading-relaxed text-navy/80">
          Your enquiry has been sent. Our team will call you shortly.
        </p>
      </div>
    );
  }

  const err = (key: keyof EnquiryPayload) =>
    errors[key] ? (
      <p id={`${key}-error`} className="mt-1 text-sm text-red-700">
        {errors[key]}
      </p>
    ) : null;
  const aria = (key: keyof EnquiryPayload) => ({
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 border border-beige bg-white p-6 md:p-8">
      <div>
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" autoComplete="name" required className={field} {...aria("name")} />
        {err("name")}
      </div>
      <div>
        <label htmlFor="phone">Phone number</label>
        <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required className={field} {...aria("phone")} />
        {err("phone")}
      </div>
      <div>
        <label htmlFor="email">Email (optional)</label>
        <input id="email" name="email" type="email" autoComplete="email" className={field} {...aria("email")} />
        {err("email")}
      </div>
      {/* <div>
        <label htmlFor="configuration">Interested in</label>
        <select id="configuration" name="configuration" defaultValue="" className={field}>
          <option value="">Select a configuration</option>
          {configurations.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message">Message (optional)</label>
        <textarea id="message" name="message" rows={3} className={`${field} py-3`} {...aria("message")} />
        {err("message")}
      </div> */}
      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed">
          <input type="checkbox" name="consent" className="mt-1 h-5 w-5 shrink-0 accent-navy" {...aria("consent")} />
          I agree to be contacted about this project by phone, WhatsApp or email.
        </label>
        {err("consent")}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="min-h-12 w-full bg-navy px-7 text-sm font-medium text-white transition-colors hover:bg-navy/90 disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Request a Callback"}
      </button>
      {status === "error" && serverError && (
        <p role="alert" className="text-sm text-red-700">{serverError}</p>
      )}
    </form>
  );
}
