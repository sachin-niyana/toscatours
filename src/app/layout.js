"use client";
import Header from "@/components/common/Header";
import SideBar from "@/components/common/Sidebar";
import { usePathname } from "next/navigation";
import "./globals.css";

// export const metadata = {
//   title: "Toscatours",
//   description: "Generated by create next app",
// er

export default function RootLayout({ children }) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body>
        <div className="overflow-hidden w-full">
          <div className="bg-mist-gray min-h-screen flex items-start">
            {" "}
            {pathName !== "/" &&
              pathName !== "/angebote" &&
              pathName !== "/buchungen" &&
              pathName !== "/profile" && <SideBar />}{" "}
            <div className="w-full">
              {" "}
              {pathName !== "/" &&
                pathName !== "/angebote" &&
                pathName !== "/buchungen" &&
                pathName !== "/profile" && <Header />}{" "}
              {children}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </body>{" "}
    </html>
  );
}
