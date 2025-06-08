// *********************
// Role of the component: Product item component 
// Name of the component: ProductItem.tsx
// Developer: Lorenco Zeza
// Component call: <ProductItem product={product} color={color} />
// Input parameters: { product: Product; color: string; }
// Output: Product item component that contains product image, title, link to the single product page, price, button...
// *********************
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProductItemRating from "./ProductItemRating";

const ProductItem = ({
  product,
  color,
  imageWidth = 350,
  imageHeight = 350,
}: {
  product: Product;
  color: string;
  imageWidth?: number;
  imageHeight?: number;
}) => {
  console.log("Product image debug:", product.mainImage);

  const imageSrc = product?.mainImage && product.mainImage.startsWith("http")
    ? product.mainImage
    : product?.mainImage
      ? `/${product.mainImage.replace(/^\/+/, "")}`
      : "/product_placeholder.jpg";

  const textColor = color === "black" ? "text-black" : "text-white";
  const backgroundColor =
    color === "black" ? "bg-white hover:bg-gray-50" : "bg-black hover:bg-gray-800";

  return (
    <div className="flex flex-col items-center gap-y-3 w-full h-full">
      <div
        className="relative w-full overflow-hidden rounded-lg bg-gray-100"
        style={{
          height: `${imageHeight}px`,
          width: "100%",
          maxWidth: `${imageWidth}px`,
        }}
      >
        <Link href={`/product/${product?.slug}`} className="block w-full h-full group">
          <div className="relative w-full h-full">
            <Image
              src={imageSrc}
              alt={product?.title || "Product Image"}
              fill
              sizes={`(max-width: 768px) 100vw, ${imageWidth}px`}
              className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
              unoptimized={false}
              priority={false}
            />
          </div>
        </Link>
      </div>

      <div className="flex flex-col items-center gap-y-2 flex-1 w-full">
        <Link
          href={`/product/${product?.slug}`}
          className={`${textColor} text-lg font-medium text-center uppercase hover:text-blue-600 transition-colors line-clamp-2 leading-tight`}
        >
          {product?.title}
        </Link>

        <p className={`${textColor} text-xl font-bold text-green-600`}>
          ALL {product?.price}
        </p>

        <div className="my-1">
          <ProductItemRating productRating={product?.rating} />
        </div>

        <Link
          href={`/product/${product?.slug}`}
          className={`mt-auto w-full flex justify-center items-center uppercase ${backgroundColor} px-4 py-3 text-sm border border-gray-300 font-semibold transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1`}
        >
          <span>Shiko produktin</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;