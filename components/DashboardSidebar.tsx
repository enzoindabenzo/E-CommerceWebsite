// *********************
// Role of the component: Sidebar on admin dashboard page
// Name of the component: DashboardSidebar.tsx
// Developer: Lorenco Zeza
// Component call: <DashboardSidebar />
// Input parameters: no input parameters
// Output: sidebar for admin dashboard page
// *********************

import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaTable } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";


import Link from "next/link";

const DashboardSidebar = () => {
  return (
    <div className="xl:w-[400px] bg-blue-500 h-full max-xl:w-full mb-4">
      <Link href="/admin">
        <div className="flex gap-x-2 w-full hover:bg-blue-600 cursor-pointer items-center py-6 pl-5 text-xl text-white">
          <MdDashboard className="text-2xl" />{" "}
          <span className="font-normal">Paneli i Administratorit</span>
        </div>
      </Link>
      <Link href="/admin/orders">
        <div className="flex gap-x-2 w-full hover:bg-blue-600 cursor-pointer items-center py-6 pl-5 text-xl text-white">
          <FaBagShopping className="text-2xl" />{" "}
          <span className="font-normal">Porosite</span>
        </div>
      </Link>
      <Link href="/admin/products">
        <div className="flex gap-x-2 w-full hover:bg-blue-600 cursor-pointer items-center py-6 pl-5 text-xl text-white">
          <FaTable className="text-2xl" />{" "}
          <span className="font-normal">Produktet</span>
        </div>
      </Link>
      <Link href="/admin/categories">
        <div className="flex gap-x-2 w-full hover:bg-blue-600 cursor-pointer items-center py-6 pl-5 text-xl text-white">
          <MdCategory className="text-2xl" />{" "}
          <span className="font-normal">Kategorite</span>
        </div>
      </Link>
      <Link href="/admin/users">
        <div className="flex gap-x-2 w-full hover:bg-blue-600 cursor-pointer items-center py-6 pl-5 text-xl text-white">
          <FaRegUser className="text-2xl" />{" "}
          <span className="font-normal">Perdoruesit</span>
        </div>
      </Link>
      <Link href="/admin/settings">
        <div className="flex gap-x-2 w-full hover:bg-blue-600 cursor-pointer items-center py-6 pl-5 text-xl text-white">
          <FaGear className="text-2xl" />{" "}
          <span className="font-normal">Cilesimet</span>
        </div>
      </Link>
    </div>
  );
};

export default DashboardSidebar;
