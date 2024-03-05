import { useLocation } from "@remix-run/react";
import Menubar from "~/components/common/menubar/menubar";
import type { MetaFunction } from "@remix-run/node";
import DashboardContent from "~/components/modules/dashboard/dashboard";

export const meta: MetaFunction = () => {
  return [
    { title: "Dhwani - Dashboard" },
    { name: "description", content: "Dhwani" },
  ];
};

export default function Dashboard() {
  const location = useLocation();
  return (
    <div>
      <Menubar pagePath={location.pathname} />
      <DashboardContent />
    </div>
  );
}
