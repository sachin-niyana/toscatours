"use client";
import React, { useEffect, useState } from "react";
import BlankDashboard from "@/components/dashboard/BlankDashboard";
import Dashboard from "@/components/dashboard/Dashboard";

const Page = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDashboard(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return <div>{showDashboard ? <Dashboard /> : <BlankDashboard />}</div>;
};

export default Page;
