// *********************
// Role of the component: IntroducingSection with the text "Prezantojme AgroBLM"
// Name of the component: IntroducingSection.tsx
// Developer: Lorenco Zeza
// Component call: <IntroducingSection />
// Input parameters: no input parameters
// Output: Section with the text "Introducing Singitronic" and button
// *********************
import Link from "next/link";
import React from "react";

const IntroducingSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-to-r from-teal-400 to-green-500 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-emerald-300 to-teal-400 blur-lg"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center space-y-8">
          {/* Main heading with enhanced typography */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-tight">
              Prezantojmë{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Agro
                </span>
                <span className="text-gray-900">BLM</span>
                {/* Decorative underline */}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transform scale-x-0 animate-pulse"></div>
              </span>
            </h1>
            
            {/* Subtitle with improved spacing */}
            <div className="space-y-3 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                Një platformë moderne për tregti bujqësore – lehtë, shpejt dhe sigurt.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Bli direkt nga fermerët shqiptarë ose ofro produktet e tua online.
              </p>
            </div>
          </div>

          {/* Enhanced CTA button with hover effects */}
          <div className="pt-8">
            <Link
              href="/shop"
              className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-300 ease-out bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl hover:from-emerald-700 hover:to-teal-700 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
            >
              <span className="relative z-10">Bli Tani</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Stats or features could go here */}
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Shpejt</h3>
              <p className="text-sm text-gray-600">Porosi dhe merr produktet shpejt</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Sigurt</h3>
              <p className="text-sm text-gray-600">Pagesa të sigurta dhe të mbrojtura</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Cilësi</h3>
              <p className="text-sm text-gray-600">Produkte të freskëta dhe cilësore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroducingSection;