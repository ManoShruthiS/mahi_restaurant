import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Mahistra — Ooty",description:"Mahistra is a fictional premium South Indian dining house in the Nilgiris."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}