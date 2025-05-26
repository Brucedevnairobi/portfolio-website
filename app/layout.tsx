import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bruce Simiyu | Making the web great again",
  description:
    "A web developer who crafts high-quality websites with user-friendly interfaces that are responsive and maintain them. I offer affordable solutions based on web requirements and your budget. Let's boost your vision across the internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} background-light850_dark100  mx-auto w-full`}
      suppressHydrationWarning={true}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
