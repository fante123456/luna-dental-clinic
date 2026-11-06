import { pageMeta } from "@/lib/meta";
import { CreditsView } from "@/views/CreditsView";

export const metadata = pageMeta("fr", "credits");

export default function Page() {
  return <CreditsView lang="fr" />;
}
