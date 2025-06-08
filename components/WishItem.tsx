"use client";

import { useWishlistStore } from "@/app/_zustand/wishlistStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useCallback } from "react";
import toast from "react-hot-toast";
import { FaEye, FaTimesCircle, FaHeart } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { useSession } from "next-auth/react";

interface ProductInWishlist {
  id: string;
  title: string;
  price: number;
  image: string;
  slug: string;
  stockAvailabillity: boolean;
}

const WishItem = ({
  id,
  title,
  price,
  image,
  slug,
  stockAvailabillity,
}: ProductInWishlist) => {
  const { data: session, status } = useSession();
  const { removeFromWishlist } = useWishlistStore();
  const router = useRouter();
  const [userId, setUserId] = useState<string>();
  const [isRemoving, setIsRemoving] = useState(false);

  const openProduct = (slug: string): void => {
    router.push(`/product/${slug}`);
  };

  // Memoize the getUserByEmail function to avoid re-renders
  const getUserByEmail = useCallback(async () => {
    if (session?.user?.email) {
      fetch(`http://localhost:3001/api/users/email/${session?.user?.email}`, {
        cache: "no-store",
      })
        .then((response) => response.json())
        .then((data) => {
          setUserId(data?.id);
        });
    }
  }, [session?.user?.email]);

  const deleteItemFromWishlist = async (productId: string) => {
    if (userId) {
      setIsRemoving(true);
      fetch(`http://localhost:3001/api/wishlist/${userId}/${productId}`, {
        method: "DELETE"
      }).then((response) => {
        removeFromWishlist(productId);
        toast.success("Item removed from your wishlist");
        setIsRemoving(false);
      }).catch(() => {
        setIsRemoving(false);
        toast.error("Failed to remove item");
      });
    } else {
      toast.error("You need to be logged in to perform this action");
    }
  };

  useEffect(() => {
    getUserByEmail();
  }, [getUserByEmail]);

  return (
    <tr className="group hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border-b border-gray-100">
      {/* ID Column */}
      <td 
        className="text-gray-700 text-sm font-medium text-center py-6 cursor-pointer hover:text-blue-600 transition-colors duration-200"
        onClick={() => openProduct(slug)}
      >
        #{id.slice(-6)}
      </td>

      {/* Image Column */}
      <td className="py-6">
        <div 
          className="w-16 h-16 mx-auto relative overflow-hidden rounded-xl bg-gray-50 cursor-pointer group-hover:shadow-lg transition-all duration-300"
          onClick={() => openProduct(slug)}
        >
          <Image
            src={image}
            width={100}
            height={100}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            alt={title}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <FaEye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </td>

      {/* Title Column */}
      <td 
        className="text-gray-800 text-sm font-medium text-center py-6 cursor-pointer hover:text-blue-600 transition-colors duration-200 max-w-xs"
        onClick={() => openProduct(slug)}
      >
        <div className="truncate px-2" title={title}>
          {title}
        </div>
        <div className="text-lg font-bold text-blue-600 mt-1">
          ALL {price}
        </div>
      </td>

      {/* Stock Status Column */}
      <td 
        className="text-center py-6 cursor-pointer"
        onClick={() => openProduct(slug)}
      >
        {stockAvailabillity ? (
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <FaCheckCircle className="w-4 h-4 mr-2" />
            In Stock
          </div>
        ) : (
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
            <FaTimesCircle className="w-4 h-4 mr-2" />
            Out of Stock
          </div>
        )}
      </td>

      {/* Action Column */}
      <td className="py-6 text-center">
        <div className="flex items-center justify-center space-x-2">
          {/* View Product Button */}
          <button
            onClick={() => openProduct(slug)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 transform hover:scale-105"
            title="View Product"
          >
            <FaEye className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">View</span>
          </button>

          {/* Remove from Wishlist Button */}
          <button
            onClick={() => deleteItemFromWishlist(id)}
            disabled={isRemoving}
            className={`inline-flex items-center px-3 py-2 text-sm font-medium border rounded-lg transition-all duration-200 transform hover:scale-105 ${
              isRemoving
                ? "text-gray-400 bg-gray-100 border-gray-200 cursor-not-allowed"
                : "text-red-600 bg-red-50 border-red-200 hover:bg-red-100 hover:border-red-300"
            }`}
            title="Remove from Wishlist"
          >
            {isRemoving ? (
              <div className="w-4 h-4 mr-1 animate-spin border-2 border-gray-400 border-t-transparent rounded-full"></div>
            ) : (
              <FaHeart className="w-4 h-4 mr-1" />
            )}
            <span className="hidden sm:inline">
              {isRemoving ? "Removing..." : "Remove"}
            </span>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default WishItem;
