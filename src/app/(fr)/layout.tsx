import type { ReactNode } from "react";
import type { Viewport } from "next";
import { Shell, rootMetadata } from "@/components/Shell";
import "../globals.css";

export const metadata = rootMetadata("fr");

export const viewport: Viewport = { themeColor: "#F7FBFF" };

export default function Layout({ children }: { children: ReactNode }) {
  return <Shell lang="fr">{children}</Shell>;
}
