import "./global.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        {/* Preload critical images to prevent FOUC */}
        <link rel="preload" as="image" href="/logo/logo-glow.png" />
        <link rel="preload" as="image" href="/logo/logo.png" />
        <link
          rel="preload"
          as="image"
          href="https://raw.githubusercontent.com/colinhacks/zod/3782fe29920c311984004c350b9fefaf0ae4c54a/logo.svg"
        />
      </head>
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
