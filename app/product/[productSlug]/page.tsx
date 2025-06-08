import {
  StockAvailabillity,
  SingleProductRating,
  ProductTabs,
  SingleProductDynamicFields,
  AddToWishlistBtn,
} from "@/components";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaSquareFacebook, FaSquareXTwitter, FaSquarePinterest } from "react-icons/fa6";

interface ImageItem {
  imageID: string;
  productID: string;
  image: string;
}

interface Product {
  id: string;
  slug: string;
  title: string;
  price: number;
  rating: number;
  inStock: number;
  mainImage: string;
  sku: string;
  description: string;
  manufacturer: string;
  categoryId: string;
  category: { name: string } | null;
}

export default async function SingleProductPage({
  params,
}: {
  params: Promise<{ productSlug: string }>; // Reflect that params is a Promise
}) {
  try {
    const { productSlug } = await params; // Await params before destructuring

    // Fetch product data
    const productRes = await fetch(
      `http://localhost:3001/api/slugs/${productSlug}`,
      { cache: "no-store" }
    );
    if (!productRes.ok) throw new Error("Product not found");

    const productData = await productRes.json();

    // Fetch product images
    const imagesRes = await fetch(
      `http://localhost:3001/api/images/${productData.id}`,
      { cache: "no-store" }
    );
    const images = await imagesRes.json();

    // Ensure all required fields are present
    const product: Product = {
      id: productData.id,
      slug: productData.slug || productSlug,
      title: productData.title || "Untitled Product",
      price: Number(productData.price) || 0,
      rating: Number(productData.rating) || 0,
      inStock: Number(productData.inStock) || 0,
      mainImage: productData.mainImage || "/product_placeholder.jpg",
      sku: productData.sku || "N/A",
      description: productData.description || "",
      manufacturer: productData.manufacturer || "Unknown Manufacturer",
      categoryId: productData.categoryId || "",
      category: productData.category || null,
    };

    // Normalize main image source
    const mainImageSrc = product.mainImage && product.mainImage.startsWith("http")
      ? product.mainImage
      : product.mainImage
        ? `/${product.mainImage.replace(/^\/+/, "")}`
        : "/product_placeholder.jpg";

    return (
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-center gap-x-16 pt-10 max-lg:flex-col items-center gap-y-5 px-5">
            {/* Product Images */}
            <div>
              {/* Main Image with Fixed 350x350 Container */}
              <div
                className="relative overflow-hidden rounded-lg bg-gray-100"
                style={{
                  width: "350px",
                  height: "350px",
                }}
              >
                <Image
                  src={mainImageSrc}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-contain object-center"
                  priority
                />
              </div>

              {/* Thumbnail Images with Fixed 100x100 Containers */}
              <div className="flex justify-around mt-5 flex-wrap gap-y-1 max-[500px]:justify-center max-[500px]:gap-x-1">
                {images?.map((image: ImageItem) => (
                  <div
                    key={image.imageID}
                    className="relative overflow-hidden rounded-md bg-gray-100"
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                  >
                    <Image
                      src={image.image || "/product_placeholder.jpg"}
                      alt={`${product.title} thumbnail`}
                      fill
                      sizes="100px"
                      className="object-contain object-center"
                      priority={false}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-y-7 text-black max-[500px]:text-center">
              <SingleProductRating rating={product.rating} />
              <h1 className="text-3xl">{product.title}</h1>
              <p className="text-xl font-semibold">ALL {product.price.toFixed(2)}</p>
              <StockAvailabillity inStock={product.inStock > 0} />
              <SingleProductDynamicFields product={product} />

              {/* Product Actions */}
              <div className="flex flex-col gap-y-2 max-[500px]:items-center">
                <AddToWishlistBtn product={product} slug={productSlug} />
                <p className="text-lg">
                  SKU: <span className="ml-1">{product.sku}</span>
                </p>
                <div className="text-lg flex gap-x-2">
                  <span>Share:</span>
                  <div className="flex items-center gap-x-1 text-2xl">
                    <FaSquareFacebook />
                    <FaSquareXTwitter />
                    <FaSquarePinterest />
                  </div>
                </div>
                <div className="flex gap-x-2">
                  {["visa", "mastercard", "ae", "paypal", "dinersclub", "discover"].map((method) => (
                    <Image
                      key={method}
                      src={`/${method}.svg`}
                      width={50}
                      height={50}
                      alt={`${method} icon`}
                      className="object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="py-16">
            <ProductTabs product={product} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in SingleProductPage:", error);
    notFound();
  }
}