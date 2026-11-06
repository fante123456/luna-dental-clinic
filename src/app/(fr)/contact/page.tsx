import { pageMeta } from "@/lib/meta";
import { ContactView } from "@/views/ContactView";

export const metadata = pageMeta("fr", "contact");

export default function Page() {
  return <ContactView lang="fr" />;
}
