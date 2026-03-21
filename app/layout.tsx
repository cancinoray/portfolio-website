import type { Metadata } from "next";
import { Space_Grotesk, Martian_Mono, Lora } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
});

const martianMono = Martian_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-martian",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Raymond Cancino — Data Engineer & Developer",
  description:
    "Building systems that teach, and teaching people to build.",
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
      "Building systems that teach, and teaching people to build.",
    type: "website",
    url: "https://github.com/cancinoray",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raymond Cancino — Data Engineer & Developer",
    description:
      "Building systems that teach, and teaching people to build.",
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
        className={`${spaceGrotesk.variable} ${martianMono.variable} ${lora.variable} font-display antialiased bg-paper text-ink`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
