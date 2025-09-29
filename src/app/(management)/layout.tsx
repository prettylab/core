import { ReactNode } from "react";
import env from "@/env";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Administracja - FOCUS ON BATTLE",
};

export default function Layout({ children }: Props) {
  if (!env.page.management) {
    return notFound();
  }

  return children;
}
