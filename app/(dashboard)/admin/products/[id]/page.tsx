"use client";
import { CustomButton, DashboardSidebar, SectionTitle } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  convertCategoryNameToURLFriendly as convertSlugToURLFriendly,
  formatCategoryName,
} from "../../../../../utils/categoryFormating";
import { nanoid } from "nanoid";

interface DashboardProductDetailsProps {
  params: Promise<{ id: string }>;
}

const DashboardProductDetails = ({
  params,
}: DashboardProductDetailsProps) => {
  // Unwrap params using React.use()
  const { id } = React.use(params);
  
  // Initialize product with default values to prevent controlled/uncontrolled input issues
  const [product, setProduct] = useState<Product>({
    id: "",
    title: "",
    slug: "",
    price: 0,
    manufacturer: "",
    description: "",
    inStock: 1,
    categoryId: "",
    mainImage: "",
    rating: 0, // Add missing rating property
    category: { name: "" }, // Add missing category property
  });
  const [categories, setCategories] = useState<Category[]>([]);
  const [otherImages, setOtherImages] = useState<OtherImages[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const normalizeImagePath = (imagePath: string | null | undefined): string => {
    if (!imagePath) return "/product_placeholder.jpg";
  
    // If the image path already contains the base path, don't add it again
    if (imagePath.includes("/img/f/")) return imagePath;
  
    return `/img/f/${imagePath.replace(/^\/+/, "")}`;
  };
  

  // functionality for deleting product
  const deleteProduct = async () => {
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`http://localhost:3001/api/products/${id}`, requestOptions)
      .then((response) => {
        if (response.status !== 204) {
          if (response.status === 400) {
            toast.error(
              "Nuk mund të fshihet produkti për shkak të kufizimit të çelësit të huaj"
            );
          } else {
            throw Error("Ndodhi një gabim gjatë fshirjes së produktit");
          }
        } else {
          toast.success("Produkti u fshi me sukses");
          router.push("/admin/products");
        }
      })
      .catch((error) => {
        toast.error("Ndodhi një gabim gjatë fshirjes së produktit");
      });
  };

  // functionality for updating product
  const updateProduct = async () => {
    if (
      product?.title === "" ||
      product?.slug === "" ||
      product?.price.toString() === "" ||
      product?.manufacturer === "" ||
      product?.description === ""
    ) {
      toast.error("Duhet të plotësoni të gjitha fushat e kërkuara");
      return;
    }

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    };
    fetch(`http://localhost:3001/api/products/${id}`, requestOptions)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw Error("Ndodhi një gabim gjatë përditësimit të produktit");
        }
      })
      .then((data) => toast.success("Produkti u përditësua me sukses"))
      .catch((error) => {
        toast.error("Ndodhi një gabim gjatë përditësimit të produktit");
      });
  };

  // functionality for uploading main image file
  const uploadFile = async (file: any) => {
    const formData = new FormData();
    formData.append("uploadedFile", file);

    try {
      const response = await fetch("http://localhost:3001/api/main-image", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
      } else {
        toast.error("Ngarkimi i skedarit dështoi.");
      }
    } catch (error) {
      console.error("Ndodhi një gabim gjatë dërgimit të kërkesës:", error);
      toast.error("Ndodhi një gabim gjatë dërgimit të kërkesës");
    }
  };

  // fetching main product data including other product images
  useEffect(() => {
    // Fetching categories
    const fetchCategories = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/categories`);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Gabim gjatë marrjes së kategorive:", error);
      }
    };
  
    // Fetching product data
    const fetchProductData = async () => {
      try {
        const productResponse = await fetch(`http://localhost:3001/api/products/${id}`);
        const productData = await productResponse.json();
        
        // Update product state with fetched data, preserving controlled input behavior
        setProduct(prevProduct => ({
          ...prevProduct,
          ...productData,
          // Ensure all string fields have string values, not undefined
          title: productData.title || "",
          slug: productData.slug || "",
          manufacturer: productData.manufacturer || "",
          description: productData.description || "",
          mainImage: productData.mainImage || "",
          categoryId: productData.categoryId || "",
          category: productData.category || "",
          price: productData.price || 0,
          rating: productData.rating || 0,
          inStock: productData.inStock ?? 1,
        }));

        const imagesResponse = await fetch(`http://localhost:3001/api/images/${id}`, {
          cache: "no-store",
        });
        const images = await imagesResponse.json();
        setOtherImages(images);
        
        setIsLoading(false);
      } catch (error) {
        console.error("Gabim gjatë marrjes së të dhënave të produktit:", error);
        setIsLoading(false);
      }
    };
  
    fetchCategories();
    fetchProductData();
  }, [id]);

  if (isLoading) {
    return (
      <div className="bg-white flex justify-center items-center min-h-screen">
        <div className="text-xl">Duke u ngarkuar...</div>
      </div>
    );
  }

  return (
    <div className="bg-white flex justify-start max-w-screen-2xl mx-auto xl:h-full max-xl:flex-col max-xl:gap-y-5">
      <DashboardSidebar />
      <div className="flex flex-col gap-y-7 xl:ml-5 w-full max-xl:px-5">
        <h1 className="text-3xl font-semibold">Detajet e produktit</h1>
        {/* Product name input div - start */}
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Emri i produktit:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={product.title}
              onChange={(e) =>
                setProduct({ ...product, title: e.target.value })
              }
            />
          </label>
        </div>
        {/* Product name input div - end */}
        {/* Product price input div - start */}

        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Çmimi i produktit:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: Number(e.target.value) })
              }
            />
          </label>
        </div>
        {/* Product price input div - end */}
        {/* Product manufacturer input div - start */}
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Prodhuesi:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={product.manufacturer}
              onChange={(e) =>
                setProduct({ ...product, manufacturer: e.target.value })
              }
            />
          </label>
        </div>
        {/* Product manufacturer input div - end */}
        {/* Product slug input div - start */}

        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Slug:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={product.slug && convertSlugToURLFriendly(product.slug)}
              onChange={(e) =>
                setProduct({
                  ...product,
                  slug: convertSlugToURLFriendly(e.target.value),
                })
              }
            />
          </label>
        </div>
        {/* Product slug input div - end */}
        {/* Product inStock select input div - start */}

        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">A është produkti në stok?</span>
            </div>
            <select
              className="select select-bordered"
              value={product.inStock}
              onChange={(e) => {
                setProduct({ ...product, inStock: Number(e.target.value) });
              }}
            >
              <option value={1}>Po</option>
              <option value={0}>Jo</option>
            </select>
          </label>
        </div>
        {/* Product inStock select input div - end */}
        {/* Product category select input div - start */}
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Kategori:</span>
            </div>
            <select
              className="select select-bordered"
              value={product.categoryId}
              onChange={(e) =>
                setProduct({
                  ...product,
                  categoryId: e.target.value,
                })
              }
            >
              {categories &&
                categories.map((category: Category) => (
                  <option key={category?.id} value={category?.id}>
                    {formatCategoryName(category?.name)}
                  </option>
                ))}
            </select>
          </label>
        </div>
        {/* Product category select input div - end */}

        {/* Main image file upload div - start */}
        <div>
          <input
            type="file"
            className="file-input file-input-bordered file-input-lg w-full max-w-sm"
            onChange={(e) => {
              const selectedFile = e.target.files ? e.target.files[0] : null;

              if (selectedFile) {
                uploadFile(selectedFile);
                setProduct({ ...product, mainImage: selectedFile.name }); // ✅ correct

              }
            }}
          />
          {product.mainImage && (
            <Image
            src={normalizeImagePath(product.mainImage)}
          
              alt={product.title || 'Product image'}
              className="w-auto h-auto mt-2"
              width={100}
              height={100}
            />
          )}
        </div>
        {/* Main image file upload div - end */}
        {/* Other images file upload div - start */}
        <div className="flex gap-x-1">
          {otherImages &&
            otherImages.map((image) => (
              <Image
                src={normalizeImagePath(image.image)}
                key={nanoid()}
                alt="product image"
                width={100}
                height={100}
                className="w-auto h-auto"
              />
            ))}
        </div>
        {/* Other images file upload div - end */}
        {/* Product description div - start */}
        <div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Product description:</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            ></textarea>
          </label>
        </div>
        {/* Product description div - end */}
        {/* Action buttons div - start */}
        <div className="flex gap-x-2 max-sm:flex-col">
          <button
            type="button"
            onClick={updateProduct}
            className="uppercase bg-green-500 px-10 py-5 text-lg border border-black border-gray-300 font-bold text-white shadow-sm hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2"
          >
            Ndrysho</button>
          <button
            type="button"
            className="uppercase bg-red-600 px-10 py-5 text-lg border border-black border-gray-300 font-bold text-white shadow-sm hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2"
            onClick={deleteProduct}
          >
            Fshi
          </button>
        </div>
        {/* Action buttons div - end */}
        <p className="text-xl max-sm:text-lg text-error">
          Për të fshirë produktin, fillimisht duhet të fshini të gjitha
          regjistrimet e tij në tabelen porosi (customer_order_product).
        </p>
      </div>
    </div>
  );
};

export default DashboardProductDetails;