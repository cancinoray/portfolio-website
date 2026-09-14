import type { Metadata } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-archivo",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cancinoray.netlify.app"),
  title: "Raymond Cancino | Data Engineer & Developer",
  description:
    "I help e-commerce and ops teams make sense of data that doesn't agree with itself.",
  keywords: [
    "cancinoray",
    "data engineer",
    "forward deployed engineer",
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
    title: "Raymond Cancino | Data Engineer & Developer",
    description:
      "I help e-commerce and ops teams make sense of data that doesn't agree with itself.",
    type: "website",
    url: "https://cancinoray.netlify.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raymond Cancino | Data Engineer & Developer",
    description:
      "I help e-commerce and ops teams make sense of data that doesn't agree with itself.",
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
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${archivo.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased bg-paper text-ink`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
