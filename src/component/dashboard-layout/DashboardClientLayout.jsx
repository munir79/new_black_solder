"use client";
import { Toaster } from "sonner";
import { useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardNavbar from "./DashboardNavbar";
import AOSInit from "@/utils/AOS";
import { ProtectedRoute } from "../common/ProtectedRoute";


export default function DashboardClientLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <Toaster />
      <AOSInit />
      <div className="flex">
        {/* Sidebar */}
        <DashboardSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        {/* Content */}
        <div
          className={`flex-1 min-h-screen transition-all duration-300 bg-gray-100 ${
            isOpen ? "lg:ml-64" : "lg:ml-20"
          }`}
        >
          <DashboardNavbar toggleSidebar={toggleSidebar} />
          <ProtectedRoute>
            <div className="p-4">{children}</div>
          </ProtectedRoute>
        </div>
      </div>
    </>
  );
}
