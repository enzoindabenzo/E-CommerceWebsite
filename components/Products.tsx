// *********************
// Role of the component: Showing products on the shop page with applied filter and sort
// Name of the component: Products.tsx
// Developer: Lorenco Zeza
// Component call: <Products slug={slug} />
// Input parameters: { slug }: any
// Output: products grid
// *********************
"use client";

import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

// Define Product interface for type safety
interface Product {
  id: string;
  title: string;
  mainImage: string;
  price: number;
  rating: number;
  slug: string;
  description: string;
  manufacturer: string;
  inStock: number;
  categoryId: string;
  category: { name: string };
}

interface ProductsProps {
  slug?: { slug?: string[] };
  searchParams?: Record<string, string | undefined>; // Allow undefined values
  imageWidth?: number;
  imageHeight?: number;
  productsPerPage?: number;
  currentPage?: number;
}

const Products = ({
  slug,
  searchParams = {},
  imageWidth = 300,
  imageHeight = 350,
  productsPerPage = 10,
  currentPage = 1,
}: ProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState<number>(0);

  const inStockNum = searchParams?.inStock === "true" ? 1 : 0;
  const outOfStockNum = searchParams?.outOfStock === "true" ? 1 : 0;
  const page = searchParams?.page ? Number(searchParams.page) : currentPage;

  // Stock filter logic
  let stockFilter = "";
  if (inStockNum === 1 && outOfStockNum === 0) {
    stockFilter = "&filters[inStock][$equals]=1";
  } else if (outOfStockNum === 1 && inStockNum === 0) {
    stockFilter = "&filters[inStock][$lt]=1";
  }

  const rating = Number(searchParams?.rating) || 0;
  const sort = searchParams?.sort === "defaultSort" ? "price" : searchParams?.sort || "price";

  // Extract category slug
  const categorySlug = Array.isArray(slug?.slug) && slug.slug.length > 0 ? slug.slug[0] : null;

  console.log("Category Slug:", categorySlug);

  // Construct category filter
  let categoryFilter = "";
  if (categorySlug && categorySlug.toLowerCase() !== "all-products") {
    categoryFilter = `&filters[category][$equals]=${categorySlug}`;
  }

  // Construct API URL with limit
  const url = `http://localhost:3001/api/products?filters[rating][$gte]=${rating}${stockFilter}${categoryFilter}&sort=${sort}&page=${page}&limit=${productsPerPage}`;

  console.log("API URL:", url);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          const errorText = await response.text();
          console.error(`API error ${response.status}: ${errorText}`);
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data);

        setProducts(data.products || []);
        setTotalCount(data.totalCount || 0);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [url]);

  // Pad products to ensure 10 items
  const placeholderProduct: Product = {
    id: "placeholder",
    title: "Placeholder Product",
    mainImage: "/product_placeholder.jpg",
    price: 0,
    rating: 0,
    slug: "#",
    description: "Placeholder product",
    manufacturer: "N/A",
    inStock: 0,
    categoryId: "",
    category: { name: "" },
  };

  const paddedProducts = [
    ...products,
    ...Array(Math.max(0, productsPerPage - products.length)).fill(placeholderProduct),
  ].slice(0, productsPerPage);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        <span className="ml-3 text-lg">Loading products...</span>
      </div>
    );
  }

  return (
    <div>
      {/* Products Grid with consistent sizing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {Array.isArray(paddedProducts) && paddedProducts.length > 0 ? (
          paddedProducts.map((product: Product, index: number) => (
            <div
              key={product.id + "-" + index}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 p-4"
            >
              <ProductItem
                product={product}
                color="black"
                imageWidth={imageWidth}
                imageHeight={imageHeight}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg
                className="mx-auto h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-4v4H7V9h10z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-medium text-gray-900 mb-2">
              Nuk u gjetën produkte
            </h3>
            <p className="text-gray-500">
              Nuk u gjetën produkte për kërkesën e specifikuar
            </p>
          </div>
        )}
      </div>

      {/* Products count info */}
      {products.length > 0 && (
        <div className="mt-6 text-center text-sm text-gray-600">
          Showing {products.length} of {totalCount} products
        </div>
      )}
    </div>
  );
};

export default Products;