"use client";
import { useRouter } from "next/navigation";
import { FcBusinessman } from "react-icons/fc";
import { useAuth } from "../common/hooks/useAuth";
import { useClickOutside } from "../common/hooks/useClickOutside";

const DashboardNavbar = () => {
  const router = useRouter();
  const { isDropdownOpen, setIsDropdownOpen, dropdownRef } = useClickOutside();
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUser(null);
    router.replace("/sign-in");
  };

  return (
    <div className="sticky top-0 flex items-center justify-end p-4 lg:ml-64 z-30">
      <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 flex items-center gap-4 border-gray-950 border-2 p-1 rounded-full">
        <FcBusinessman
          className="rounded-full w-8 h-8 cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />
        {isDropdownOpen && user?.email && (
          <div
            ref={dropdownRef}
            className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg z-50"
          >
            <p className="text-left px-4 py-2 text-sm text-gray-700 font-semibold">
              {user?.email}
            </p>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Logout
            </button>
            <button
              onClick={()=>router.push('/')}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardNavbar;
