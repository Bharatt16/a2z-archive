import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "A2Z Archive",
  description: "Striver's A2Z DSA Sheet — plus every question the latest update removed, merged, or renamed.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-bg">
        <Navbar />
        <main className="mx-auto max-w-5xl px-4 pb-24 pt-6">{children}</main>
      </body>
    </html>
  );
}
