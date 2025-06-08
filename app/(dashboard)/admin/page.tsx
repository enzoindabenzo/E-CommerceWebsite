"use client";
import { DashboardSidebar } from "@/components";
import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const AdminDashboardPage = () => {
  const statistikat = {
    vizitorëtSot: 1200,
    rritja: 12.5,
    statistikat: [
      { titulli: "Përdorues Total", vlera: 2453 },
      { titulli: "Projekte Aktive", vlera: 12 },
      { titulli: "Të Ardhura", vlera: "ALL 1,824,590" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <DashboardSidebar />
      
      <main className="flex-1 p-6 md:p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Paneli Administratorit</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {statistikat.statistikat.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500"
            >
              <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                {stat.titulli}
              </h3>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {stat.vlera}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-lg p-8 text-white">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl font-semibold mb-3">
              Numri i vizitorëve sot
            </h2>
            <p className="text-5xl font-bold mb-3">
              {statistikat.vizitorëtSot.toLocaleString()}
            </p>
            <p className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-x-2 text-sm font-medium">
              <FaArrowUp className="text-xs" />
              {statistikat.rritja}% Nga muaji i kaluar
            </p>
          </div>
        </div>

        {/* Additional white space at bottom */}
        <div className="h-8"></div>
      </main>
    </div>
  );
};

export default AdminDashboardPage;