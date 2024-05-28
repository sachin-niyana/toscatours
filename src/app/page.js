import SideBar from "@/components/common/Sidebar";
import BlankDashboard from "@/components/dashboard/BlankDashboard";
// import Customers from "@/components/dashboard/Customers";
import Dashboard from "@/components/dashboard/Dashboard";
import Table from "@/components/dashboard/Table";
import SlickSlider from "@/components/login-page/SlickSlider";

export default function Home() {
  return (
    <div>
      <SlickSlider />
      <Dashboard />
      <SideBar />
      <BlankDashboard />
      {/* <Customers /> */}
      <Table />
    </div>
  );
}
