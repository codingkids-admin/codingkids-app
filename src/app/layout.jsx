"use client";
import { Poppins } from "next/font/google";
import { useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import "bootstrap/scss/bootstrap.scss";
import "./globals.scss";

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
