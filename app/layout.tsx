import type { Metadata } from 'next';
import { Inter } from 'next/font/google'
import "@/assets/styles/globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Prostore",
  description: "A modern store built with Next.js, ShadCN, and Prisma.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
