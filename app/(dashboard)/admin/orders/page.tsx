"use client";
import { AdminOrders, DashboardSidebar } from "@/components";
import React from "react";
import { FaBoxOpen } from "react-icons/fa";

const DashboardOrdersPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-start max-w-screen-2xl mx-auto max-xl:flex-col">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex flex-col w-full p-6 max-xl:p-4 gap-y-6">
        {/* Breadcrumb / Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-x-2">
              <FaBoxOpen className="text-green-600" />
              Paneli i Porosive
            </h1>
            <p className="text-gray-500 text-sm mt-1">Menaxho porosite e tua</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
          <div className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition duration-200">
            <h4 className="text-sm text-gray-500">Numri i porosive totale</h4>
            <p className="text-2xl font-semibold text-green-700">1,205</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition duration-200">
            <h4 className="text-sm text-gray-500">Porosi ne proces</h4>
            <p className="text-2xl font-semibold text-yellow-500">87</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition duration-200">
            <h4 className="text-sm text-gray-500">Te derguara</h4>
            <p className="text-2xl font-semibold text-blue-600">1,018</p>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-200">
          <AdminOrders />
        </div>
      </div>
    </div>
  );
};

export default DashboardOrdersPage;

