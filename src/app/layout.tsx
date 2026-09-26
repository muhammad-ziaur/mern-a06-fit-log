import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import ExercisesProvider from "@/context/ExercisesContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mern-a06-fit-log",
  description: "created by Muhammad Ziaur Rahman",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-global-background">
        <ExercisesProvider>
          <Navbar />
          <div className="grow  bg-global-background">{children}</div>
          <h2 className="mt-auto text-5xl py-7 font-bold text-center bg-cyan-600 text-red-600">
            Dummy Footer
          </h2>
        </ExercisesProvider>
      </body>
    </html>
  );
}
