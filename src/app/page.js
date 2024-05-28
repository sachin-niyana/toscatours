import Header from "@/components/common/Header";
import SideBar from "@/components/common/Sidebar";
import Customers from "@/components/dashboard/Customers";
// import Customers from "@/components/dashboard/Customers";
import Dashboard from "@/components/dashboard/Dashboard";
import Table from "@/components/dashboard/Table";
import SlickSlider from "@/components/login-page/SlickSlider";

export default function Home() {
  return (
    <div>
      <SlickSlider />
      <div className="overflow-hidden">
        <div className="bg-mist-gray min-h-screen flex items-start">
          <SideBar />
          <div className=" sm:w-11/12">
            <Header />
            <Dashboard />
            {/* <Table /> */}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
