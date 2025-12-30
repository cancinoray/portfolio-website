import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Kuya Ray | Developer",
  description: "Mechanical Engineer | Web Developer | Data Enthusiast - A Career Shifter!",
  keywords: ["cancinoray", "full-stacked", "javascript", "developer", "data engineer", "portfolio"],
  authors: [{ name: "Raymond Cancino" }],
  creator: "Raymond Cancino",
  icons: {
    icon: "/assets/favicon.png",
  },
  openGraph: {
    title: "Kuya Ray | Developer",
    description: "Mechanical Engineer | Web Developer | Data Enthusiast",
    type: "website",
    url: "https://github.com/cancinoray",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuya Ray | Developer",
    description: "Mechanical Engineer | Web Developer | Data Enthusiast",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

