export const dynamic = "force-dynamic";
export const revalidate = 0;

import { Breadcrumb, Filters, Pagination, Products, SortBy } from "@/components";
import React from "react";
import { headers } from "next/headers";
import { parse } from "url";

// Improve readability of category text
const improveCategoryText = (text: string): string => {
  if (text.includes("-")) {
    const textArray = text.split("-");
    return textArray
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  } else {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
};

interface ShopPageProps {
  params: {
    slug?: string[];
  };
  searchParams?: {
    outOfStock?: string;
    inStock?: string;
    rating?: string;
    sort?: string;
    page?: string;
  };
}

const ShopPage = async ({ params, searchParams }: ShopPageProps) => {
  // Make sure params is fully resolved before accessing its properties
  const resolvedParams = await Promise.resolve(params);
  
  // Await searchParams to comply with Next.js 15 requirements
  const resolvedSearchParams = await Promise.resolve(searchParams);
  
  // Get category name from params
  const slug = resolvedParams?.slug || [];
  const categoryName = slug[0] ? improveCategoryText(slug[0]) : "All Products";

  // If searchParams is not available directly, fall back to manual parsing
  let finalSearchParams = resolvedSearchParams;
  
  if (!resolvedSearchParams) {
    // Manually parse search params from the request URL as fallback
    const headersList = await headers();
    const url = headersList.get("x-url") || "";
    const parsedUrl = parse(url, true);
    const queryParams = parsedUrl.query;
    
    finalSearchParams = {
      outOfStock: queryParams.outOfStock as string,
      inStock: queryParams.inStock as string,
      rating: queryParams.rating as string,
      sort: queryParams.sort as string,
      page: queryParams.page as string,
    };
  }

  // Extract specific search params we need
  const {
    outOfStock,
    inStock,
    rating,
    sort,
    page = "1" // Default to page 1 if not provided
  } = finalSearchParams || {};

  // Calculate pagination values
  const productsPerPage = 9;
  const currentPage = parseInt(page) || 1;
  
  // Create serializable objects to pass to client components
  const safeParams = { slug };
  const safeSearchParams = { 
    outOfStock, 
    inStock, 
    rating, 
    sort, 
    page: currentPage.toString(),
    limit: productsPerPage.toString() // Pass products per page limit
  };

  // You'll need to get the actual total count from your data source
  // This should come from your Products component or data fetching logic
  // For now, I'm using a placeholder - replace this with actual count
  const totalProductsCount = 110; // Replace with actual count from your data

  return (
    <div className="text-black bg-white min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
        <Breadcrumb />
        
        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-10 mt-6">
          
          {/* Filters Sidebar */}
          <div className="lg:sticky lg:top-4 lg:self-start">
            <div className="bg-gray-50 p-4 rounded-lg lg:bg-transparent lg:p-0">
              <Filters />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold uppercase tracking-wide">
                {categoryName}
              </h2>
              <div className="flex-shrink-0">
                <SortBy />
              </div>
            </div>

            {/* Divider */}
            <div className="border-b border-gray-200 mb-6"></div>

            {/* Products Grid */}
            <div className="mb-8">
              <Products
                slug={safeParams}
                searchParams={safeSearchParams}
                imageWidth={300}
                imageHeight={350}
                productsPerPage={productsPerPage}
                currentPage={currentPage}
              />
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 pt-6 border-t border-gray-200">
              <Pagination 
                totalCount={totalProductsCount}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;