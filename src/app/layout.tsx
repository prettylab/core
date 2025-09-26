import { ReactNode } from "react";
import { Metadata } from "next";
import Providers from "@/components/Provider/Providers";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Zawody taneczne 2026",
};

export default function Layout({ children }: Props) {
  return (
    <html lang="pl">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
