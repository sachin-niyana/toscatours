import Header from "@/components/common/Header";
import SideBar from "@/components/common/Sidebar";
import Dashboard from "@/components/dashboard/Dashboard";
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
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
