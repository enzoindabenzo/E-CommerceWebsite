"use client";
import { SectionTitle, WishItem } from "@/components";
import React, { useEffect, useState, useCallback } from "react";
import { useWishlistStore } from "../_zustand/wishlistStore";
import { nanoid } from "nanoid";
import { useSession } from "next-auth/react";

const WishlistPage = () => {
  const { data: session, status } = useSession();
  const { wishlist, setWishlist } = useWishlistStore();

  const getWishlistByUserId = useCallback(async (id: string) => {
    const response = await fetch(`http://localhost:3001/api/wishlist/${id}`, {
      cache: "no-store",
    });
    const wishlist = await response.json();

    const productArray: {
      id: string;
      title: string;
      price: number;
      image: string;
      slug: string;
      stockAvailabillity: number;
    }[] = [];

    wishlist.map((item: any) =>
      productArray.push({
        id: item?.product?.id,
        title: item?.product?.title,
        price: item?.product?.price,
        image: item?.product?.mainImage,
        slug: item?.product?.slug,
        stockAvailabillity: item?.product?.inStock,
      })
    );

    setWishlist(productArray);
  }, [setWishlist]);

  const getUserByEmail = useCallback(async () => {
    if (session?.user?.email) {
      const response = await fetch(
        `http://localhost:3001/api/users/email/${session?.user?.email}`,
        { cache: "no-store" }
      );
      const data = await response.json();
      getWishlistByUserId(data?.id);
    }
  }, [session?.user?.email, getWishlistByUserId]);

  useEffect(() => {
    getUserByEmail();
  }, [getUserByEmail]);

  return (
    <div className="bg-white">
      <SectionTitle title="Wishlist" path="Home | Wishlist" />
      {wishlist && wishlist.length === 0 ? (
        <h3 className="text-center text-4xl py-10 text-black max-lg:text-3xl max-sm:text-2xl max-sm:pt-5 max-[400px]:text-xl">
          Nuk u gjetën artikuj në listën e dëshirave
        </h3>
      ) : (
        <div className="max-w-screen-2xl mx-auto">
          <div className="overflow-x-auto">
            <table className="table text-center">
              <thead>
                <tr>
                  <th></th>
                  <th className="text-accent-content">Imazhi</th>
                  <th className="text-accent-content">Emri</th>
                  <th className="text-accent-content">Gjendja</th>
                  <th className="text-accent-content">Action</th>
                </tr>
              </thead>
              <tbody>
                {wishlist &&
                  wishlist?.map((item) => (
                    <WishItem
                      id={item?.id}
                      title={item?.title}
                      price={item?.price}
                      image={item?.image}
                      slug={item?.slug}
                      stockAvailabillity={item?.stockAvailabillity}
                      key={nanoid()}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
