import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";

import "./globals.css";

export const metadata: Metadata = {
  title: "Tamirci Architects",
  description:
    "Tamirci Architects is a architecture studio based in Istanbul, Turkey.",
  icons: "/img/logoicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
