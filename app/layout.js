import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Logo from "@/public/Logo.png";


import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Student Management",
  description: "FullStack Intern Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex justify-between">
        <Sidebar Logo={Logo} />
        {children}
      </body>
    </html>
  );
}
