// *********************
// Role of the component: Category wrapper that will contain title and category items
// Name of the component: CategoryMenu.tsx
// Developer: Lorenco Zeza
// Component call: <CategoryMenu />
// Input parameters: no input parameters
// Output: section title and category items
// *********************
import React from "react";
import CategoryItem from "./CategoryItem";
import Image from "next/image";
import { categoryMenuList } from "@/lib/utils";
import Heading from "./Heading";

const CategoryMenu = () => {
  const hasCategories = categoryMenuList?.length > 0;

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Enhanced heading with decorative elements */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <Heading title="Kategoritë" />
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Zbulo një gamë të gjerë produktesh bujqësore të organizuara në kategori të lehta për tu gjetur
          </p>
        </div>

        {hasCategories ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {categoryMenuList.map((item, index) => (
              <div 
                key={item.id}
                className="group transform transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CategoryItem title={item.title} href={item.href}>
                  <div className="relative">
                    {/* Decorative background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    <div className="relative bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex flex-col items-center space-y-3">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                          <Image
                            src={item.src}
                            width={32}
                            height={32}
                            alt={`Kategoria ${item.title}`}
                            unoptimized={item.unoptimized}
                            className="object-contain"
                          />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800 text-center leading-tight group-hover:text-blue-700 transition-colors duration-200">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </CategoryItem>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2-2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">Asnjë kategori e disponueshme për momentin.</p>
            <p className="text-gray-400 text-sm mt-2">Kontrollo përsëri më vonë për kategori të reja.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryMenu;