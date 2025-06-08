// *********************
// Role of the component: Single product tabs on the single product page containing product description, main product info and reviews
// Name of the component: ProductTabs.tsx
// Developer: Lorenco Zeza
// Component call: <ProductTabs product={product} />
// Input parameters: { product: Product }
// Output: Single product tabs containing product description, main product info and reviews
// *********************
"use client";

import React, { useState } from "react";
import RatingPercentElement from "./RatingPercentElement";
import SingleReview from "./SingleReview";
import { formatCategoryName } from "@/utils/categoryFormating";

const ProductTabs = ({ product }: { product: Product }) => {
  const [currentProductTab, setCurrentProductTab] = useState<number>(0);

  const tabs = [
    { id: 0, label: "Përshkrimi" },
    { id: 1, label: "Informacione shtesë" }
  ];

  return (
    <div className="px-5 text-black w-full max-w-4xl mx-auto mt-10">
      {/* Tab Navigation */}
      <div
        role="tablist"
        className="flex border-b border-gray-200 mb-8"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={currentProductTab === tab.id}
            className={`
              relative px-4 py-3 text-lg font-medium transition-all duration-200
              hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              ${currentProductTab === tab.id
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:border-b-2 hover:border-gray-300"
              }
              sm:text-base md:text-lg
              max-sm:px-3 max-sm:text-sm
            `}
            onClick={() => setCurrentProductTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div role="tabpanel" className="min-h-[200px]">
        {currentProductTab === 0 && (
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-800 leading-relaxed text-lg sm:text-base">
              {product?.description || "Nuk ka përshkrim të disponueshëm."}
            </p>
          </div>
        )}

        {currentProductTab === 1 && (
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <th className="text-left px-6 py-4 text-gray-700 font-semibold bg-gray-50 w-1/3">
                      Prodhuesi:
                    </th>
                    <td className="px-6 py-4 text-gray-900">
                      {product?.manufacturer || "—"}
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <th className="text-left px-6 py-4 text-gray-700 font-semibold bg-gray-50 w-1/3">
                      Kategoria:
                    </th>
                    <td className="px-6 py-4 text-gray-900">
                      {product?.category?.name
                        ? formatCategoryName(product.category.name)
                        : "Pa kategori"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;