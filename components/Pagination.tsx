// *********************
// Role of the component: Pagination for navigating the shop page
// Name of the component: Pagination.tsx
// Developer: Lorenco Zeza
// Component call: <Pagination />
// Input parameters: no input parameters
// Output: Component with the current page and buttons for incrementing and decrementing page
// *********************

"use client";
import { usePaginationStore } from "@/app/_zustand/paginationStore";
import React, { useEffect, useState } from "react";

// Assuming you are passing the total number of products from the parent component or fetching it from your API
const Pagination = ({ totalCount }: { totalCount: number }) => {
  const { page, incrementPage, decrementPage } = usePaginationStore();
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    // Assuming you have 10 products per page, adjust as needed
    setTotalPages(Math.ceil(totalCount / 9));
  }, [totalCount]);

  return (
    <div className="join flex justify-center py-16">
      {/* Previous Button */}
      <button
        className="join-item btn btn-lg bg-blue-500 text-white hover:bg-white hover:text-blue-500"
        onClick={() => decrementPage()}
        disabled={page === 1} // Disable if on the first page
      >
        «
      </button>

      {/* Current Page */}
      <button className="join-item btn btn-lg bg-blue-500 text-white hover:bg-white hover:text-blue-500">
        Page {page} of {totalPages}
      </button>

      {/* Next Button */}
      <button
        className="join-item btn btn-lg bg-blue-500 text-white hover:bg-white hover:text-blue-500"
        onClick={() => incrementPage()}
        disabled={page === totalPages} // Disable if on the last page
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
