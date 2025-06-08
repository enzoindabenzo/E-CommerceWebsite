import { ProductItem, SectionTitle } from "@/components";
import React from "react";

interface Props {
  searchParams: Promise<{ search?: string }>;
}

// sending api request for search results for a given search text
const SearchPage = async ({ searchParams }: Props) => {
  const resolvedSearchParams = await searchParams;
  const search = resolvedSearchParams?.search || "";
  
  const data = await fetch(
    `http://localhost:3001/api/search?query=${search}`
  );

  const products = await data.json();

  return (
    <>
      <SectionTitle title="Rezultatet" path="Home | Rezultatet" />
      <div className="max-w-screen-2xl mx-auto">
        {search && (
            <h3 className="text-4xl text-center py-10 max-sm:text-3xl">
            Duke shfaqur rezultatet për {search}
            </h3>
        )}
        <div className="grid grid-cols-4 justify-items-center gap-x-2 gap-y-5 max-[1300px]:grid-cols-3 max-lg:grid-cols-2 max-[500px]:grid-cols-1 pb-8 pl-4">
          {products.length > 0 ? (
            products.map((product: Product) => (
              <ProductItem key={product.id} product={product} color="black" />
            ))
          ) : (
            <h3 className="text-3xl mt-5 text-center w-full col-span-full max-[1000px]:text-2xl max-[500px]:text-lg">
              Nuk u gjetën produkte për kërkesën e specifikuar
            </h3>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;