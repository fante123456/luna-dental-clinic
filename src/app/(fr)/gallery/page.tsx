import { pageMeta } from "@/lib/meta";
import { GalleryView } from "@/views/GalleryView";

export const metadata = pageMeta("fr", "gallery");

export default function Page() {
  return <GalleryView lang="fr" />;
}
