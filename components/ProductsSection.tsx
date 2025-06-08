// *********************
// Role of the component: products section intended to be on the home page
// Name of the component: ProductsSection.tsx
// Developer: Lorenco Zeza
// Component call: <ProductsSection slug={slug} />
// Input parameters: no input parameters
// Output: products grid
// **********************
"use client";

import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Heading from "./Heading";
import Link from "next/link";

interface Product {
  id: string;
  slug: string;
  title: string;
  price: number;
  description: string;
  mainImage: string;
  manufacturer: string;
  categoryId: string;
  inStock: number; // Changed from boolean to number to match the main Products component
  rating: number;
  category: { name: string }; // Made consistent with main Products interface
}

const ProductsSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Updated API call to match the main Products component pattern
        const res = await fetch("http://localhost:3001/api/products?limit=12&sort=rating");

        if (!res.ok) {
          const errorText = await res.text();
          console.error(`API error ${res.status}: ${errorText}`);
          throw new Error(`API error: ${res.status}`);
        }

        const data = await res.json();
        console.log("ProductsSection API Response:", data);

        // Handle response structure consistently
        const items = data.products || data || [];

        if (Array.isArray(items)) {
          setProducts(items.slice(0, 12));
        } else {
          console.warn("Unexpected API response structure:", data);
          setProducts([]);
        }

      } catch (err: any) {
        console.error("Error fetching products:", err);
        setError("Produket nuk mund të ngarkoheshin.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Retry function
  const handleRetry = () => {
    setLoading(true);
    setError(null);
    // Re-trigger the useEffect by updating a dependency or call fetchProducts directly
    window.location.reload();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-violet-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-gradient-to-r from-violet-400 to-purple-500 blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Enhanced section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <Heading title="Produktet më të shitura" />
          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
            Zbulo produktet më të kërkuara nga fermerët tanë të besuar në të gjithë Shqipërinë
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-purple-400 rounded-full animate-spin"
                style={{ animationDirection: 'reverse' }}></div>
            </div>
            <p className="mt-6 text-gray-600 text-lg font-medium">Duke u ngarkuar produktet...</p>
            <p className="text-gray-500 text-sm mt-2">Ju lutemi prisni një moment</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-red-600 text-lg font-semibold mb-2">{error}</p>
            <p className="text-gray-500 text-sm mb-4">Kontrollo lidhjen me internetin dhe provo përsëri.</p>
            <button
              onClick={handleRetry}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              Provo Përsëri
            </button>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <p className="text-gray-600 text-lg font-medium mb-2">Nuk ka produkte për momentin.</p>
            <p className="text-gray-500 text-sm">Kontrollo përsëri më vonë për produkte të reja.</p>
          </div>
        ) : (
          <>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="transform transition-all duration-500 hover:scale-105 opacity-0 animate-fadeInUp"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="group relative">
                    {/* Decorative background card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-50"></div>

                    {/* Main product card */}
                    <div className="relative bg-white rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                      <ProductItem
                        product={product}
                        color="black"
                        imageWidth={320}
                        imageHeight={320}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link href="/shop">
                <button
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-violet-700 bg-white border-2 border-violet-200 rounded-2xl hover:bg-violet-50 hover:border-violet-300 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-300"
                >
                  Shiko të gjitha produktet
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
            </div>

          </>
        )}
      </div>

      {/* Improved CSS with proper keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;