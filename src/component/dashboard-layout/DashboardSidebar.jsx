'use client';
import { BarChart2, Flag, Home, Menu, Settings, User, X } from "lucide-react";
import { useRouter } from "next/navigation";

const DashboardSidebar = ({ isOpen, toggleSidebar }) => {
  const router = useRouter()
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-900 text-white p-4 transition-all duration-300 z-40
        ${isOpen ? "w-64" : "w-20"} `}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1
          className={`text-xl font-bold transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          Dashboard
        </h1>
        <div>
          {isOpen ? (
            <button onClick={toggleSidebar} className="text-gray-300 cursor-pointer">
              <X className="h-6 w-6" />
            </button>
          ) : (
            <button onClick={toggleSidebar} className="text-gray-300 ml-2.5 cursor-pointer">
              <Menu className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>

      {/* Menu */}
      <ul className="mt-8 space-y-4">
        {[
          { icon: <Home className="h-6 w-6" />, label: "HomePage", href: "/" },
          // { icon: <Flag className="h-6 w-6" />, label: "Heroes", href: "/dashboard" },
          { icon: <BarChart2 className="h-6 w-6" />, label: "Services", href: "/dashboard/services" },
          { icon: <User className="h-6 w-6" />, label: "Products", href: "/dashboard/products" },
          { icon: <User className="h-6 w-6" />, label: "Teams", href: "/dashboard/team" },
          { icon: <User className="h-6 w-6" />, label: "Contact", href: "/dashboard/contact-list" },
        ].map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-700 cursor-pointer"
            onClick={() => router.push(item.href)}
          >
            {item.icon}
            <span className={`${isOpen ? "block" : "hidden"} transition-all`}>
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
