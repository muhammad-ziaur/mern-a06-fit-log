import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import ExercisesProvider from "@/context/ExercisesContext";
import Footer from "@/components/shared/footer/Footer";
import { NavbarHamburgerProvider } from "@/context/NavbarHamburgerContext";
import { Slide, ToastContainer } from "react-toastify";

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
          <NavbarHamburgerProvider>
            <Navbar />
          </NavbarHamburgerProvider>
          <div className="grow  bg-global-background">{children}</div>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Slide}
          />
        </ExercisesProvider>
      </body>
    </html>
  );
}
