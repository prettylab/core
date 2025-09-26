import { ReactNode } from "react";
import { Metadata } from "next";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Zawody taneczne 2026",
};

export default function Layout({ children }: Props) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
