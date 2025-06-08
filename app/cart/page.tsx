"use client";

import {
  CustomButton,
  QuantityInput,
  QuantityInputCart,
  SectionTitle,
} from "@/components";
import Image from "next/image";
import React from "react";
import { FaCheck, FaClock, FaCircleQuestion, FaXmark, FaTruck, FaCalculator } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useProductStore } from "../_zustand/store";
import Link from "next/link";
import toast from "react-hot-toast";

const CartPage = () => {
  const { products, removeFromCart, calculateTotals, total } = useProductStore();

  const handleRemoveItem = (id: string) => {
    removeFromCart(id);
    calculateTotals();
    toast.success("Product removed from the cart");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <SectionTitle title="Cart Page" path="Home | Cart" />
      
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-8 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
            <FaShoppingCart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-2">
            Shporta e Blerjeve
          </h1>
          <p className="text-gray-600 text-lg">
            {products.length} {products.length === 1 ? 'produkt' : 'produkte'} në shportë
          </p>
        </div>

        <form className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          {/* Cart Items Section */}
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Artikujt në shportën tuaj të blerjeve
            </h2>

            {products.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaShoppingCart className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Shporta është bosh</h3>
                <p className="text-gray-500 mb-6">Shto disa produkte për të filluar blerjen</p>
                <Link href="/shop">
  <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
    Vazhdo blerjen
  </button>
</Link>

              </div>
            ) : (
              <div className="space-y-6">
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
                    style={{
                      animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                    }}
                  >
                    <div className="p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row gap-6">
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                          <div className="relative overflow-hidden rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                            <Image
                              width={192}
                              height={192}
                              src={`${product.image}`}
                              alt={product.title || "product image"}
                              className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 space-y-4">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
                                <Link href="#">
                                  {product.title}
                                </Link>
                              </h3>
                              <p className="text-2xl font-bold text-blue-600 mt-2">
                                ALL {product.price}
                              </p>
                            </div>

                            {/* Remove Button */}
                            <button
                              onClick={() => handleRemoveItem(product.id)}
                              type="button"
                              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200 transform hover:scale-110"
                              title="Hiq nga shporta"
                            >
                              <FaXmark className="h-5 w-5" />
                            </button>
                          </div>

                          {/* Quantity and Stock */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center">
                              <QuantityInputCart product={product} />
                            </div>

                            <div className="flex items-center space-x-2 text-sm">
                              <div className="flex items-center space-x-2">
                                <FaCheck className="h-4 w-4 text-green-500" />
                                <span className="text-green-700 font-medium">Në stok</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Order Summary */}
          {products.length > 0 && (
            <section
              aria-labelledby="summary-heading"
              className="mt-16 lg:mt-0 lg:col-span-5"
            >
              <div className="sticky top-6">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                    <h2 className="text-xl font-bold text-white flex items-center">
                      <FaCalculator className="mr-3" />
                      Përmbledhje e porosisë
                    </h2>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* Summary Items */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Nëntotali</span>
                        <span className="text-lg font-bold text-gray-900">ALL {total}</span>
                      </div>

                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <div className="flex items-center space-x-2">
                          <FaTruck className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-600 font-medium">Transporti</span>
                          <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <FaCircleQuestion className="h-4 w-4" />
                          </button>
                        </div>
                        <span className="text-lg font-bold text-gray-900">ALL 500</span>
                      </div>

                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600 font-medium">Taksa</span>
                          <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <FaCircleQuestion className="h-4 w-4" />
                          </button>
                        </div>
                        <span className="text-lg font-bold text-gray-900">ALL {Math.round(total / 5)}</span>
                      </div>

                      <div className="flex justify-between items-center py-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl px-4">
                        <span className="text-xl font-bold text-gray-900">Totali</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          ALL {Math.round(total + total / 5 + 500)}
                        </span>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <Link
                      href="/checkout"
                      className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl text-center text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      Vazhdo në Checkout
                    </Link>

                    {/* Security Badge */}
                    <div className="text-center text-sm text-gray-500 mt-4">
                      <div className="flex items-center justify-center space-x-1">
                        <FaCheck className="h-3 w-3 text-green-500" />
                        <span>Pagesë e sigurt dhe e enkriptuar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </form>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CartPage;