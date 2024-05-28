import "./globals.css";
import SideBar from "@/components/common/Sidebar";
import Header from "@/components/common/Header";

export const metadata = {
  title: "Toscatours",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="overflow-hidden">
          <div className="bg-mist-gray min-h-screen flex items-start">
            <SideBar />
            <div className="sm:w-11/12">
              <Header />
              {children}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </body>
    </html>
  );
}
