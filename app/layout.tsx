import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahistra — Ooty",
  description: "A premium South Indian dining experience in the misty hills of Ooty.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}