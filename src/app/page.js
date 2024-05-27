import BlankDashboard from "@/components/dashboard/BlankDashboard";
import Dashboard from "@/components/dashboard/Dashboard";
import SlickSlider from "@/components/login-page/SlickSlider";

export default function Home() {
  return (
    <div>
      {/* <SlickSlider /> */}
      <Dashboard />
      <BlankDashboard />
    </div>
  );
}
