import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";

import { ClerkProvider } from '@clerk/nextjs';
import NextTopLoader from "nextjs-toploader";
import { Toaster } from '@/components/ui/sonner';

import "./globals.css"; 

const outfit = Outfit({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rental Cars",
  description: "rentl cars for everyone in the world 🚗",
  keywords: ["rental", "cars", "world", "app", "nextjs", "react", "tailwindcss", "typescript"],
  icons: "/logo.svg",
  robots: "follow, index",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${outfit.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader color="#202020" />
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
