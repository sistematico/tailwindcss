import { Nunito } from "next/font/google";
import type { Metadata } from "next";
import { basePath } from "@/config";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TailwindCSS Boilerplates",
  description: "TailwindCSS & Next.js boilerplates, snippets, blocks and examples",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href={`${basePath}/tailwind.svg`} sizes="any" type="image/svg+xml" />
      </head>
      <body
        className={`${nunito.variable} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
