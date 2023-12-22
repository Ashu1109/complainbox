import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
// import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Complain Box",
  description: "ascowa suncity Complain Box",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          {/* <Toaster /> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
