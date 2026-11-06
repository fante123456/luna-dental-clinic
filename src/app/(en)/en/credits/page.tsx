import { pageMeta } from "@/lib/meta";
import { CreditsView } from "@/views/CreditsView";

export const metadata = pageMeta("en", "credits");

export default function Page() {
  return <CreditsView lang="en" />;
}
