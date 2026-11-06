"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Info, Phone, Send } from "lucide-react";
import { buttonClass } from "./Button";
import { dict } from "@/lib/content";
import type { Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

/**
 * Demo form: same layout as a real contact form, but submitting never sends
 * anything to the practice. It only shows a message asking people to call.
 */
export function ContactForm({ lang }: { lang: Lang }) {
  const t = dict[lang].form;
  const [shown, setShown] = useState(false);
  const noticeRef = useRef<HTMLDivElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Nothing is sent anywhere.
    setShown(true);
  };

  // Move focus to the message so keyboard and screen reader users hear it.
  useEffect(() => {
    if (shown) noticeRef.current?.focus();
  }, [shown]);

  if (shown) {
    return (
      <div
        ref={noticeRef}
        tabIndex={-1}
        role="status"
        className="rounded-[1.5rem] border border-mint bg-mint-soft p-8 text-navy"
      >
        <Info className="size-8 text-navy" aria-hidden="true" />
        <h3 className="mt-4 text-3xl">
          {t.demoTitle}{" "}
          <a href={site.phoneHref} className="whitespace-nowrap underline decoration-sky decoration-2 underline-offset-4">
            {site.phone}
          </a>
        </h3>
        <p className="mt-3 text-ink-muted">{t.demoText}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={site.phoneHref} className={buttonClass("primary")}>
            <Phone className="size-4" aria-hidden="true" />
            {dict[lang].common.call} {site.phone}
          </a>
          <button type="button" onClick={() => setShown(false)} className={buttonClass("secondary", "cursor-pointer")}>
            {t.back}
          </button>
        </div>
      </div>
    );
  }

  const field =
    "mt-2 block w-full rounded-xl border border-navy/20 bg-white px-4 py-3 text-base text-navy placeholder:text-ink-muted/70 transition-colors hover:border-navy/40 focus:outline-none focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-navy";
  const select = `${field} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%230B1F33' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m4 6 4 4 4-4'/%3E%3C/svg%3E")] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10`;

  return (
    <form noValidate onSubmit={onSubmit} aria-describedby="form-note" className="grid gap-6">
      <p id="form-note" className="text-sm text-ink-muted">
        {t.note}
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-semibold">
            {t.name}
          </label>
          <input id="name" name="name" type="text" autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className="font-semibold">
            {t.email}
          </label>
          <input id="email" name="email" type="email" autoComplete="email" inputMode="email" className={field} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="font-semibold">
            {t.phone} <span className="font-normal text-ink-muted">{t.optional}</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className={field} />
        </div>
        <div>
          <label htmlFor="animal" className="font-semibold">
            {t.animal}
          </label>
          <select id="animal" name="animal" defaultValue="" className={select}>
            <option value="">{t.choose}</option>
            {t.animals.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="reason" className="font-semibold">
          {t.reason}
        </label>
        <select id="reason" name="reason" defaultValue="" className={select}>
          <option value="">{t.choose}</option>
          {t.reasons.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="font-semibold">
          {t.message}
        </label>
        <textarea id="message" name="message" rows={5} maxLength={1000} className={`${field} resize-y`} />
      </div>

      <div>
        <button type="submit" className={buttonClass("primary", "w-full cursor-pointer sm:w-auto")}>
          <Send className="size-4" aria-hidden="true" />
          {t.submit}
        </button>
      </div>
    </form>
  );
}
