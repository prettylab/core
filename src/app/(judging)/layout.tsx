import { ReactNode } from "react";
import env from "@/env";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import "./main.css";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "FOCUS ON BATTLE",
};

export default function Layout({ children }: Props) {
  if (!env.page.judging) {
    return notFound();
  }

  return children;
}
