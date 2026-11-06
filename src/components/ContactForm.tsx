"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { buttonClass } from "./Button";

type Fields = {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", phone: "", reason: "", message: "", consent: false };

const reasons = [
  "Check-up or hygiene visit",
  "Emergency or toothache",
  "Teeth whitening",
  "Dental implants",
  "Invisalign",
  "Cosmetic dentistry",
  "Something else",
];

function validate(v: Fields): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = "Please enter a valid email address, like name@example.com.";
  if (v.phone.trim() && !/^[+()\d\s-]{10,20}$/.test(v.phone.trim()))
    e.phone = "Please enter a valid UK phone number, or leave this empty.";
  if (!v.reason) e.reason = "Please choose a reason for your visit.";
  if (v.message.trim().length < 10) e.message = "Please add a short message (at least 10 characters).";
  else if (v.message.length > 1000) e.message = "Please keep your message under 1,000 characters.";
  if (!v.consent) e.consent = "Please confirm we can contact you about your enquiry.";
  return e;
}

const order: (keyof Fields)[] = ["name", "email", "phone", "reason", "message", "consent"];

export function ContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    const next = { ...values, [key]: value };
    setValues(next);
    if (touched[key]) setErrors((prev) => ({ ...prev, [key]: validate(next)[key] }));
  };

  const blur = (key: keyof Fields) => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors((prev) => ({ ...prev, [key]: validate(values)[key] }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched(Object.fromEntries(order.map((k) => [k, true])));
    const first = order.find((k) => found[k]);
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    // Demo only: nothing is sent anywhere.
    setSent(true);
    setValues(empty);
    setTouched({});
  };

  // Move focus to the confirmation so keyboard and screen reader users hear it.
  useEffect(() => {
    if (sent) successRef.current?.focus();
  }, [sent]);

  const errorCount = Object.values(errors).filter(Boolean).length;

  const field =
    "mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-base text-navy placeholder:text-ink-muted/70 transition-colors focus:outline-none focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-navy";
  const border = (k: keyof Fields) => (errors[k] ? "border-[#b42318]" : "border-navy/20 hover:border-navy/40");

  const err = (k: keyof Fields) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-2 flex items-start gap-1.5 text-sm font-medium text-[#b42318]">
        <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
        {errors[k]}
      </p>
    ) : null;

  const aria = (k: keyof Fields, hint?: string) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": [errors[k] ? `${k}-error` : "", hint ?? ""].filter(Boolean).join(" ") || undefined,
  });

  if (sent) {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="rounded-[1.5rem] border border-mint bg-mint-soft p-8 text-navy"
      >
        <CheckCircle2 className="size-8 text-navy" aria-hidden="true" />
        <h3 className="mt-4 text-3xl">Thank you, message ready</h3>
        <p className="mt-3 text-ink-muted">
          This is a demo form, so no message was actually sent. On a live site, the team would reply within one
          working day. For anything urgent, please call.
        </p>
        <button type="button" onClick={() => setSent(false)} className={buttonClass("secondary", "mt-6")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} aria-describedby="form-note" className="grid gap-6">
      <p id="form-note" className="text-sm text-ink-muted">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required. Demo form: nothing is sent.
      </p>

      <div aria-live="polite" className="sr-only">
        {errorCount > 0 ? `There ${errorCount === 1 ? "is 1 error" : `are ${errorCount} errors`} in the form.` : ""}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-semibold">
            Full name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            onBlur={() => blur("name")}
            className={`${field} ${border("name")}`}
            {...aria("name")}
          />
          {err("name")}
        </div>
        <div>
          <label htmlFor="email" className="font-semibold">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            onBlur={() => blur("email")}
            className={`${field} ${border("email")}`}
            {...aria("email")}
          />
          {err("email")}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="font-semibold">
            Phone <span className="font-normal text-ink-muted">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            onBlur={() => blur("phone")}
            className={`${field} ${border("phone")}`}
            {...aria("phone", "phone-hint")}
          />
          <p id="phone-hint" className="mt-2 text-sm text-ink-muted">
            So we can call you back if easier.
          </p>
          {err("phone")}
        </div>
        <div>
          <label htmlFor="reason" className="font-semibold">
            Reason for visit <span aria-hidden="true">*</span>
          </label>
          <select
            id="reason"
            name="reason"
            required
            value={values.reason}
            onChange={(e) => set("reason", e.target.value)}
            onBlur={() => blur("reason")}
            className={`${field} ${border("reason")} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%230B1F33' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m4 6 4 4 4-4'/%3E%3C/svg%3E")] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10`}
            {...aria("reason")}
          >
            <option value="">Please choose…</option>
            {reasons.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
          {err("reason")}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="font-semibold">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={1000}
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          onBlur={() => blur("message")}
          className={`${field} ${border("message")} resize-y`}
          {...aria("message", "message-hint")}
        />
        <p id="message-hint" className="mt-2 text-sm text-ink-muted">
          Preferred days or times are helpful. Please do not include medical history here.
        </p>
        {err("message")}
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={values.consent}
            onChange={(e) => set("consent", e.target.checked)}
            onBlur={() => blur("consent")}
            className="mt-1 size-5 shrink-0 accent-navy"
            {...aria("consent", "privacy-note")}
          />
          <label htmlFor="consent" className="text-[0.9375rem]">
            I agree that Luna Dental Clinic can contact me about this enquiry. <span aria-hidden="true">*</span>
          </label>
        </div>
        <p id="privacy-note" className="mt-2 pl-8 text-sm text-ink-muted">
          We only use your details to reply to this enquiry. In this demo, nothing is stored or sent.
        </p>
        {err("consent")}
      </div>

      <div>
        <button type="submit" className={buttonClass("primary", "w-full cursor-pointer sm:w-auto")}>
          <Send className="size-4" aria-hidden="true" />
          Send booking request
        </button>
      </div>
    </form>
  );
}
