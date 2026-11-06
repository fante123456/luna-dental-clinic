import { pageMeta } from "@/lib/meta";
import { HomeView } from "@/views/HomeView";

export const metadata = pageMeta("fr", "home");

export default function Page() {
  return <HomeView lang="fr" />;
}
