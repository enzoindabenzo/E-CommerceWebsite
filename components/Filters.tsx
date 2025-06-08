"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useSortStore } from "@/app/_zustand/sortStore";
import { usePaginationStore } from "@/app/_zustand/paginationStore";

interface InputCategory {
  inStock: { text: string, isChecked: boolean },
  outOfStock: { text: string, isChecked: boolean },
  ratingFilter: { text: string, value: number },
}

const Filters = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  // getting current page number from Zustand store
  const { page } = usePaginationStore();
  const { sortBy } = useSortStore();

  const [inputCategory, setInputCategory] = useState<InputCategory>({
    inStock: { text: "instock", isChecked: true },
    outOfStock: { text: "outofstock", isChecked: true },
    ratingFilter: { text: "rating", value: 0 },
  });

  // Set initial state from URL query params if available
  useEffect(() => {
    const inStock = searchParams.get("inStock") === "true";
    const outOfStock = searchParams.get("outOfStock") === "true";
    const rating = searchParams.get("rating") ? Number(searchParams.get("rating")) : 0;

    setInputCategory(prevState => ({
      ...prevState,
      inStock: { ...prevState.inStock, isChecked: inStock },
      outOfStock: { ...prevState.outOfStock, isChecked: outOfStock },
      ratingFilter: { ...prevState.ratingFilter, value: rating },
    }));
  }, [searchParams]);

  // Update URL with filters whenever inputCategory, sortBy or page changes
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("outOfStock", inputCategory.outOfStock.isChecked.toString());
    params.set("inStock", inputCategory.inStock.isChecked.toString());
    params.set("rating", inputCategory.ratingFilter.value.toString());
    params.set("sort", sortBy);
    params.set("page", page.toString());

    replace(`${pathname}?${params}`);
  }, [inputCategory, sortBy, page, pathname, replace]);

  return (
    <div>
      <h3 className="text-2xl mb-2">Filters</h3>
      <div className="divider"></div>
      
      {/* Availability Filters */}
      <div className="flex flex-col gap-y-1">
        <h3 className="text-xl mb-2">Availability</h3>
        <div className="form-control">
          <label className="cursor-pointer flex items-center">
            <input
              type="checkbox"
              checked={inputCategory.inStock.isChecked}
              onChange={() =>
                setInputCategory(prevState => ({
                  ...prevState,
                  inStock: { text: "instock", isChecked: !prevState.inStock.isChecked }
                }))
              }
              className="checkbox"
            />
            <span className="label-text text-lg ml-2 text-black">In stock</span>
          </label>
        </div>

        <div className="form-control">
          <label className="cursor-pointer flex items-center">
            <input
              type="checkbox"
              checked={inputCategory.outOfStock.isChecked}
              onChange={() =>
                setInputCategory(prevState => ({
                  ...prevState,
                  outOfStock: { text: "outofstock", isChecked: !prevState.outOfStock.isChecked }
                }))
              }
              className="checkbox"
            />
            <span className="label-text text-lg ml-2 text-black">Out of stock</span>
          </label>
        </div>
      </div>

      <div className="divider"></div>

      {/* Rating Filter */}
      <div>
        <h3 className="text-xl mb-2">Minimum Rating:</h3>
        <input
          type="range"
          min={0}
          max={5}
          value={inputCategory.ratingFilter.value}
          onChange={(e) =>
            setInputCategory(prevState => ({
              ...prevState,
              ratingFilter: { text: "rating", value: Number(e.target.value) }
            }))
          }
          className="range range-info"
          step="1"
        />
        <div className="w-full flex justify-between text-xs px-2">
          <span>0</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
      </div>
    </div>
  );
};

export default Filters;
