"use client";
import { DashboardSidebar } from "@/components";
import { isValidEmailAddressFormat, isValidNameOrLastname } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface OrderProduct {
  id: string;
  customerOrderId: string;
  productId: string;
  quantity: number;
  product: {
    id: string;
    slug: string;
    title: string;
    mainImage: string;
    price: number;
    rating: number;
    description: string;
    manufacturer: string;
    inStock: number;
    categoryId: string;
  };
}

const AdminSingleOrder = () => {
  const [orderProducts, setOrderProducts] = useState<OrderProduct[]>();
  const [order, setOrder] = useState<Order>({
    id: "",
    adress: "",
    apartment: "",
    company: "",
    dateTime: "",
    email: "",
    lastname: "",
    name: "",
    phone: "",
    postalCode: "",
    city: "",
    country: "",
    orderNotice: "",
    status: "processing",
    total: 0,
  });
  const params = useParams<{ id: string }>();

  const router = useRouter();

  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await fetch(
        `http://localhost:3001/api/orders/${params?.id}`
      );
      const data: Order = await response.json();
      setOrder(data);
    };

    const fetchOrderProducts = async () => {
      const response = await fetch(
        `http://localhost:3001/api/order-product/${params?.id}`
      );
      const data: OrderProduct[] = await response.json();
      setOrderProducts(data);
    };

    fetchOrderData();
    fetchOrderProducts();
  }, [params?.id]);

  const updateOrder = async () => {
    if (
      order?.name.length > 0 &&
      order?.lastname.length > 0 &&
      order?.phone.length > 0 &&
      order?.email.length > 0 &&
      order?.company.length > 0 &&
      order?.adress.length > 0 &&
      order?.apartment.length > 0 &&
      order?.city.length > 0 &&
      order?.country.length > 0 &&
      order?.postalCode.length > 0
    ) {
      if (!isValidNameOrLastname(order?.name)) {
        toast.error("You entered invalid name format");
        return;
      }

      if (!isValidNameOrLastname(order?.lastname)) {
        toast.error("You entered invalid lastname format");
        return;
      }

      if (!isValidEmailAddressFormat(order?.email)) {
        toast.error("You entered invalid email format");
        return;
      }

      fetch(`http://localhost:3001/api/orders/${order?.id}`, {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((response) => {
          if (response.status === 200) {
            toast.success("Order updated successfuly");
          } else {
            throw Error("There was an error while updating a order");
          }
        })
        .catch((error) =>
          toast.error("There was an error while updating a order")
        );
    } else {
      toast.error("Please fill all fields");
    }
  };

  const deleteOrder = async () => {
    const requestOptions = {
      method: "DELETE",
    };

    fetch(
      `http://localhost:3001/api/order-product/${order?.id}`,
      requestOptions
    ).then((response) => {
      fetch(
        `http://localhost:3001/api/orders/${order?.id}`,
        requestOptions
      ).then((response) => {
        toast.success("Order deleted successfully");
        router.push("/admin/orders");
      });
    });
  };

  return (
    <div className="bg-white flex justify-start max-w-screen-2xl mx-auto xl:h-full max-xl:flex-col max-xl:gap-y-5">
      <DashboardSidebar />

      <div className="flex flex-col gap-y-7 xl:ml-5 w-full max-xl:px-5 py-8">
        {/* Header Section */}
        <div className="border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800">Detajet e porosisë</h1>
          <div className="mt-3">
            <span className="text-lg font-semibold text-gray-600">ID e porosisë: </span>
            <span className="text-lg text-gray-800">{order?.id}</span>
          </div>
        </div>

        {/* Customer Information Section */}
        <div className="space-y-7">
          <h2 className="text-2xl font-semibold text-gray-700">Informacioni i klientit</h2>

          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[250px]">
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-medium">Emri</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={order?.name}
                  onChange={(e) => setOrder({ ...order, name: e.target.value })}
                />
              </label>
            </div>

            <div className="flex-1 min-w-[250px]">
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-medium">Mbiemri</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={order?.lastname}
                  onChange={(e) => setOrder({ ...order, lastname: e.target.value })}
                />
              </label>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[250px]">
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-medium">Numri i telefonit</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={order?.phone}
                  onChange={(e) => setOrder({ ...order, phone: e.target.value })}
                />
              </label>
            </div>

            <div className="flex-1 min-w-[250px]">
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-medium">Adresa e emailit</span>
                </div>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  value={order?.email}
                  onChange={(e) => setOrder({ ...order, email: e.target.value })}
                />
              </label>
            </div>
          </div>

          <div className="flex-1 min-w-[250px]">
            <label className="form-control">
              <div className="label">
                <span className="label-text font-medium">Kompania (optional)</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full"
                value={order?.company}
                onChange={(e) => setOrder({ ...order, company: e.target.value })}
              />
            </label>
          </div>
        </div>

        {/* Shipping Address Section */}
        <div className="space-y-7">
          <h2 className="text-2xl font-semibold text-gray-700">Adresa e dërgimit</h2>

          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[250px]">
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-medium">Addresa</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={order?.adress}
                  onChange={(e) => setOrder({ ...order, adress: e.target.value })}
                />
              </label>
            </div>

            <div className="flex-1 min-w-[250px]">
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-medium">Apartmenti, Ndertesa, etj.</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={order?.apartment}
                  onChange={(e) => setOrder({ ...order, apartment: e.target.value })}
                />
              </label>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[250px]">
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-medium">Qyteti</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={order?.city}
                  onChange={(e) => setOrder({ ...order, city: e.target.value })}
                />
              </label>
            </div>

            <div className="flex-1 min-w-[250px]">
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-medium">Shteti</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={order?.country}
                  onChange={(e) => setOrder({ ...order, country: e.target.value })}
                />
              </label>
            </div>

            <div className="flex-1 min-w-[250px]">
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-medium">Kodi postar</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={order?.postalCode}
                  onChange={(e) => setOrder({ ...order, postalCode: e.target.value })}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Order Details Section */}
        <div className="space-y-7">
          <h2 className="text-2xl font-semibold text-gray-700">Detajet e porosisë</h2>

          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[250px]">
              <label className="form-control">
                <div className="label">
                  <span className="label-text font-medium">Statusi</span>
                </div>
                <select
                  className="select select-bordered w-full"
                  value={order?.status}
                  onChange={(e) =>
                    setOrder({
                      ...order,
                      status: e.target.value as
                        | "processing"
                        | "delivered"
                        | "canceled",
                    })
                  }
                >
                  <option value="processing">Processing</option>
                  <option value="delivered">Delivered</option>
                  <option value="canceled">Canceled</option>
                </select>
              </label>
            </div>
          </div>

          <div className="flex-1">
            <label className="form-control">
              <div className="label">
                <span className="label-text font-medium">Shenime mbi porosinë</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24 w-full"
                value={order?.orderNotice || ""}
                onChange={(e) => setOrder({ ...order, orderNotice: e.target.value })}
              ></textarea>
            </label>
          </div>
        </div>

        {/* Products Section */}
        <div className="space-y-7">
          <h2 className="text-2xl font-semibold text-gray-700">Produktet</h2>

          <div className="space-y-4">
            {orderProducts?.map((product) => (
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg" key={product?.id}>
                <Image
  src={product?.product?.mainImage || "/product_placeholder.jpg"}
  alt={product?.product?.title || "Product Image"}
  width={100}
  height={100}
  className="w-24 h-24 object-contain bg-white p-2 rounded border"
/>

                <div className="flex-1">
                  <Link href={`/product/${product?.product?.slug}`} className="text-lg font-medium hover:text-blue-600">
                    {product?.product?.title}
                  </Link>
                  <p className="text-gray-600">
                    ALL {product?.product?.price} × {product?.quantity} copë
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700">Përmbledhje e porosisë</h2>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-lg text-gray-600">Nëntotal:</span>
              <span className="text-lg font-medium">ALL {order?.total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg text-gray-600">Takse 20%:</span>
              <span className="text-lg font-medium">ALL {order?.total / 5}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg text-gray-600">Shipping:</span>
              <span className="text-lg font-medium">ALL 500</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-200">
              <span className="text-xl font-semibold">Totali:</span>
              <span className="text-xl font-bold">ALL {order?.total + order?.total / 5 + 500}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 flex-wrap mt-8">
          <button
            type="button"
            className="btn btn-success px-8 py-3 text-lg font-bold text-white uppercase hover:bg-green-600 flex-1 min-w-[200px]"
            onClick={updateOrder}
          >
            Ruaj ndryshimet
          </button>
          <button
            type="button"
            className="btn btn-error px-8 py-3 text-lg font-bold text-white uppercase hover:bg-red-700 flex-1 min-w-[200px]"
            onClick={deleteOrder}
          >
            Fshi porosinë
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSingleOrder;
