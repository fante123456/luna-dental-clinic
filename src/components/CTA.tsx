import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { buttonClass } from "./Button";
import { bookHref, site } from "@/lib/site";

/**
 * The booking call to action: book online, or call.
 * Each page ends with its own section (see PageEndings.tsx) that uses this pair.
 */
export function CTA({ book = "Book an appointment", className = "" }: { book?: string; className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <Link href={bookHref} className={buttonClass("primary")}>
        {book}
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
      <a href={site.phoneHref} className={buttonClass("secondary")}>
        <Phone className="size-4" aria-hidden="true" />
        Call {site.phone}
      </a>
    </div>
  );
}
