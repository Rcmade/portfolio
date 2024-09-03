import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/provider/ThemeProvider";
import MainNavbar from "@/components/headers/MainNavbar";
import MainFooter from "@/components/footers/MainFooter";
import { RAY_LOGO_PUBLIC_URL } from "@/constant";

const inter = Inter({
  weight: ["200", "400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RAY",
  description: "Web development portfolio website.",
  other: {
    "og:url": process.env.NEXT_PUBLIC_BASE_URL as string,
    "og:image": RAY_LOGO_PUBLIC_URL || "",
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MainNavbar />
          <main className="px-2 md:px-12 xl:px-32">{children}</main>
          <MainFooter />
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
