import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "Basic Product Listing CRUD application using Nextjs + MongoDB",
   description: "Basic Product Listing CRUD application using Nextjs + MongoDB",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <div className="container mx-auto px-4">
               <Navbar />
               <div className="pb-8">{children}</div>
            </div>
         </body>
      </html>
   );
}
