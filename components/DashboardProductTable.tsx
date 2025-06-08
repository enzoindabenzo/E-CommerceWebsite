// *********************
// Role of the component: Product table component on admin dashboard page
// Name of the component: DashboardProductTable.tsx
// Developer: Lorenco Zeza
// Component call: <DashboardProductTable />
// Input parameters: no input parameters
// Output: products table
// *********************
"use client";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";

const DashboardProductTable = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Helper function to normalize image paths
  const normalizeImagePath = (imagePath: string | null | undefined): string => {
    if (!imagePath) return "/product_placeholder.jpg";
    
    // Remove any double slashes and ensure single leading slash
    const cleanPath = imagePath.replace(/\/+/g, '/');
    return cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  };

  useEffect(() => {
    fetch("http://localhost:3001/api/products?mode=admin", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="w-full px-4 py-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
        Të gjitha Produktet
      </h1>

      <div className="flex justify-end mb-6">
        <Link href="/admin/products/new">
          <CustomButton
            buttonType="button"
            customWidth="160px"
            paddingX={12}
            paddingY={6}
            textSize="base"
            text="➕ Shto produkt të ri"
          />
        </Link>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="table w-full text-left table-zebra table-sm">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th>
              </th>
              <th>Produkt</th>
              <th>Gjendja e stokut</th>
              <th>Çmimi</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr
                  key={nanoid()}
                  className="hover:bg-gray-50 transition-all duration-200"
                >

                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            width={48}
                            height={48}
                            src={normalizeImagePath(product?.mainImage)}
                            alt={product?.title || "Produkt"}
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">
                          {product?.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {product?.manufacturer}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    {product?.inStock ? (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        Ka gjendje
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                        Nuk ka gjendje
                      </span>
                    )}
                  </td>

                  <td className="font-medium text-gray-700">
                    ALL {product?.price}
                  </td>

                  <td>
                    <Link
                      href={`/admin/products/${product.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Detajet →
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardProductTable;