import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Mono, Crimson_Pro } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-crimson",
});

export const metadata: Metadata = {
  title: "Raymond Cancino — Data Engineer & Developer",
  description:
    "Engineer. Educator. Data-driven builder.",
  keywords: [
    "cancinoray",
    "data engineer",
    "developer",
    "portfolio",
    "python",
    "sql",
    "next.js",
  ],
  authors: [{ name: "Raymond Cancino" }],
  creator: "Raymond Cancino",
  icons: {
    icon: "/assets/favicon.png",
  },
  openGraph: {
    title: "Raymond Cancino — Data Engineer & Developer",
    description:
      "Engineer. Educator. Data-driven builder.",
    type: "website",
    url: "https://github.com/cancinoray",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raymond Cancino — Data Engineer & Developer",
    description:
      "Engineer. Educator. Data-driven builder.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bricolage.variable} ${dmMono.variable} ${crimsonPro.variable} font-display antialiased bg-obsidian text-cloud`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
