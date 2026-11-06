import { pageMeta } from "@/lib/meta";
import { GalleryView } from "@/views/GalleryView";

export const metadata = pageMeta("en", "gallery");

export default function Page() {
  return <GalleryView lang="en" />;
}
