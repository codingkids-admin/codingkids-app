import { Poppins } from "next/font/google";
import "bootstrap/scss/bootstrap.scss";
import "./globals.scss";
import Navbar from "@/components/navbar/Navbar";

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Coding Kids | We make kids love coding",
  description:
    "Discover engaging coding programs for kids at Coding Kids. Our interactive courses inspire a love for coding from an early age. Join us and unlock your child's potential today.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
