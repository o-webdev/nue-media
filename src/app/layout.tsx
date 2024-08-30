import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Providers from "./components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NUE Media",
  description: "The latest Headlines, Trends, and Stories Across the Globe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-orange-100 dark:bg-zinc-900 transition-all 
  duration-700`}>
        <Providers>
          <Header />

          <div className="max-w-6xl mx-auto">
            {children}
          </div>

        </Providers>
      </body>
    </html>
  );
}
