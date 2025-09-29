import { ReactNode } from "react";
import env from "@/env";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import "./main.css";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Rejestracja - FOCUS ON BATTLE",
};

export default function Layout({ children }: Props) {
  if (!env.page.register) {
    return notFound();
  }

  return children;
}
