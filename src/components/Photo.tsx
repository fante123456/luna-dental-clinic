import Image from "next/image";
import type { Lang } from "@/lib/i18n";
import { photos, photoSrc, type PhotoKey } from "@/lib/photos";

type Props = {
  name: PhotoKey;
  lang: Lang;
  sizes: string;
  className?: string;
  imgClassName?: string;
  preload?: boolean;
  /** Overrides the default alt text (e.g. to add page context). */
  alt?: string;
};

/** A next/image `fill` image inside a positioned wrapper. Set the aspect ratio on the wrapper. */
export function Photo({ name, lang, sizes, className = "", imgClassName = "", preload, alt }: Props) {
  const p = photos[name];
  return (
    <div className={`relative overflow-hidden bg-grey ${className}`}>
      <Image
        src={photoSrc(p.id)}
        alt={alt ?? p.alt[lang]}
        fill
        sizes={sizes}
        preload={preload}
        fetchPriority={preload ? "high" : undefined}
        quality={70}
        className={`object-cover ${imgClassName}`}
      />
    </div>
  );
}
