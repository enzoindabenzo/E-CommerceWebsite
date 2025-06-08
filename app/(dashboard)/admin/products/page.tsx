"use client";
import {
  CustomButton,
  DashboardProductTable,
  DashboardSidebar,
} from "@/components";
import React from "react";
import { MdInventory } from "react-icons/md";

const DashboardProducts = () => {
  const totalProduktet = 110;

  return (
    <div className="bg-gray-100 min-h-screen flex justify-start max-w-screen-2xl mx-auto max-xl:flex-col max-xl:gap-y-4">
      {/* Anësori */}
      <DashboardSidebar />

      {/* Përmbajtja kryesore */}
      <div className="flex flex-col w-full p-6 gap-y-6 max-xl:p-4">
        {/* Titulli dhe Butoni */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-x-2">
              <MdInventory className="text-green-600" />
              Produktet në Panel
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Totali i produkteve:{""}
              <span className="font-semibold text-green-700">{totalProduktet}</span>
            </p>
          </div>
          {/* Nëse `CustomButton` përdor `title` */}

        </div>

        {/* Tabela */}
        <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-200">
          <DashboardProductTable />
        </div>
      </div>
    </div>
  );
};

export default DashboardProducts;
