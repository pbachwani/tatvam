import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";
import { ReactLenis } from "lenis/react";

// font logic moved to globals.css

export const metadata = {
  title: "Tatvam",
  description:
    "Tatvam is driven by a profound passion to articulate a conjoint solution for a space. We don’t believe in seperating the interiors and architecture from each other, infact we make sure to build a synchronised experience with cultural research, vernacularism and the science of design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ReactLenis root />
        <Navbar />
        <div className="mt-16">{children}</div>
      </body>
    </html>
  );
}
