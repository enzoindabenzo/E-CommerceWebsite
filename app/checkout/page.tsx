"use client";
import { SectionTitle } from "@/components";
import { useProductStore } from "../_zustand/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { 
  isValidCardNumber, 
  isValidCreditCardCVVOrCVC, 
  isValidCreditCardExpirationDate, 
  isValidEmailAddressFormat, 
  isValidNameOrLastname 
} from "@/lib/utils";
import { 
  FaCreditCard, 
  FaTruck, 
  FaUser, 
  FaLock,
  FaSpinner 
} from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";

const CheckoutPage = () => {
  const [checkoutForm, setCheckoutForm] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    cardName: "",
    cardNumber: "",
    expirationDate: "",
    cvc: "",
    company: "",
    adress: "",
    apartment: "",
    city: "",
    country: "",
    postalCode: "",
    orderNotice: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const { products, total, clearCart } = useProductStore();
  const router = useRouter();

  const shippingCost = 500;
  const taxRate = 0.2;
  const tax = total * taxRate;
  const finalTotal = total === 0 ? 0 : Math.round(total + tax + shippingCost);

  const makePurchase = async () => {
    setIsLoading(true);
    
    const requiredFields = [
      'name', 'lastname', 'phone', 'email', 'cardName', 'cardNumber',
      'expirationDate', 'cvc', 'company', 'adress', 'apartment', 
      'city', 'country', 'postalCode'
    ];
    
    const emptyFields = requiredFields.filter(field => !checkoutForm[field as keyof typeof checkoutForm].length);
    
    if (emptyFields.length > 0) {
      toast.error("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    // Validation checks
    const validations = [
      { check: () => isValidNameOrLastname(checkoutForm.name), message: "Invalid name format" },
      { check: () => isValidNameOrLastname(checkoutForm.lastname), message: "Invalid lastname format" },
      { check: () => isValidEmailAddressFormat(checkoutForm.email), message: "Invalid email format" },
      { check: () => isValidNameOrLastname(checkoutForm.cardName), message: "Invalid card name format" },
      { check: () => isValidCardNumber(checkoutForm.cardNumber), message: "Invalid card number format" },
      { check: () => isValidCreditCardExpirationDate(checkoutForm.expirationDate), message: "Invalid expiration date format" },
      { check: () => isValidCreditCardCVVOrCVC(checkoutForm.cvc), message: "Invalid CVC format" },
    ];

    for (const validation of validations) {
      if (!validation.check()) {
        toast.error(validation.message);
        setIsLoading(false);
        return;
      }
    }

    try {
      const response = await fetch("http://localhost:3001/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: checkoutForm.name,
          lastname: checkoutForm.lastname,
          phone: checkoutForm.phone,
          email: checkoutForm.email,
          company: checkoutForm.company,
          adress: checkoutForm.adress,
          apartment: checkoutForm.apartment,
          postalCode: checkoutForm.postalCode,
          status: "processing",
          total: finalTotal,
          city: checkoutForm.city,
          country: checkoutForm.country,
          orderNotice: checkoutForm.orderNotice,
        }),
      });

      const data = await response.json();
      const orderId = data.id;

      // Add order products
      for (const product of products) {
        await addOrderProduct(orderId, product.id, product.amount);
      }

      // Reset form and redirect
      setCheckoutForm({
        name: "", lastname: "", phone: "", email: "", cardName: "",
        cardNumber: "", expirationDate: "", cvc: "", company: "",
        adress: "", apartment: "", city: "", country: "",
        postalCode: "", orderNotice: "",
      });
      
      clearCart();
      toast.success("Order created successfully!");
      setTimeout(() => router.push("/"), 1000);
      
    } catch (error) {
      toast.error("Failed to create order. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const addOrderProduct = async (orderId: string, productId: string, productQuantity: number) => {
    await fetch("http://localhost:3001/api/order-product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerOrderId: orderId,
        productId: productId,
        quantity: productQuantity,
      }),
    });
  };

  useEffect(() => {
    if (products.length === 0) {
      toast.error("You don't have items in your cart");
      router.push("/cart");
    }
  }, [products.length, router]);

  const InputField = ({ 
    label, 
    id, 
    type = "text", 
    value, 
    onChange, 
    autoComplete,
    required = true,
    className = "",
    placeholder = ""
  }: any) => (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        required={required}
      />
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <SectionTitle title="Checkout" path="Home | Cart | Checkout" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Order Summary - Mobile First, Desktop Right */}
          <div className="lg:col-span-5 lg:order-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <FaShippingFast className="w-5 h-5 mr-2 text-blue-600" />
                Përmbledhja e porosisë
              </h2>

              {/* Products List */}
              <div className="space-y-4 mb-6">
                {products.map((product) => (
                  <div key={product?.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0">
                      <Image
                        src={product?.image ? 
                          (product.image.startsWith('/') ? product.image : `/${product.image}`) :
                          "/product_placeholder.jpg"
                        }
                        alt={product?.title}
                        width={60}
                        height={60}
                        className="w-15 h-15 rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 truncate">{product?.title}</h3>
                      <p className="text-sm text-gray-500">x{product?.amount}</p>
                    </div>
                    <p className="text-sm font-bold text-blue-600">ALL {product?.price}</p>
                  </div>
                ))}
              </div>

              {/* Order Totals */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Nëntotali</span>
                  <span className="font-medium">ALL {total}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Transporti</span>
                  <span className="font-medium">ALL {shippingCost}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Taksat</span>
                  <span className="font-medium">ALL {Math.round(tax)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-3 border-t border-gray-200">
                  <span>Total</span>
                  <span className="text-blue-600">ALL {finalTotal}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-7 lg:order-1 mt-8 lg:mt-0">
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <FaUser className="w-5 h-5 mr-2 text-blue-600" />
                  Informacioni i kontaktit
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Emër"
                    id="name"
                    value={checkoutForm.name}
                    onChange={(e: any) => setCheckoutForm({...checkoutForm, name: e.target.value})}
                    autoComplete="given-name"
                  />
                  <InputField
                    label="Mbiemër"
                    id="lastname"
                    value={checkoutForm.lastname}
                    onChange={(e: any) => setCheckoutForm({...checkoutForm, lastname: e.target.value})}
                    autoComplete="family-name"
                  />
                  <InputField
                    label="Numri i telefonit"
                    id="phone"
                    type="tel"
                    value={checkoutForm.phone}
                    onChange={(e: any) => setCheckoutForm({...checkoutForm, phone: e.target.value})}
                    autoComplete="tel"
                  />
                  <InputField
                    label="Adresa e email-it"
                    id="email"
                    type="email"
                    value={checkoutForm.email}
                    onChange={(e: any) => setCheckoutForm({...checkoutForm, email: e.target.value})}
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <FaCreditCard className="w-5 h-5 mr-2 text-blue-600" />
                  Informacioni i pagesës
                </h2>
                <div className="space-y-6">
                  <InputField
                    label="Emri i kartës"
                    id="cardName"
                    value={checkoutForm.cardName}
                    onChange={(e: any) => setCheckoutForm({...checkoutForm, cardName: e.target.value})}
                    autoComplete="cc-name"
                    className="w-full"
                  />
                  <InputField
                    label="Numri i kartës"
                    id="cardNumber"
                    value={checkoutForm.cardNumber}
                    onChange={(e: any) => setCheckoutForm({...checkoutForm, cardNumber: e.target.value})}
                    autoComplete="cc-number"
                    placeholder="1234 5678 9012 3456"
                    className="w-full"
                  />
                  <div className="grid grid-cols-2 gap-6">
                    <InputField
                      label="Data e skadimit (MM/YY)"
                      id="expirationDate"
                      value={checkoutForm.expirationDate}
                      onChange={(e: any) => setCheckoutForm({...checkoutForm, expirationDate: e.target.value})}
                      autoComplete="cc-exp"
                      placeholder="MM/YY"
                    />
                    <InputField
                      label="CVC or CVV"
                      id="cvc"
                      value={checkoutForm.cvc}
                      onChange={(e: any) => setCheckoutForm({...checkoutForm, cvc: e.target.value})}
                      autoComplete="cc-csc"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Information */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <FaShippingFast className="w-5 h-5 mr-2 text-blue-600" />
                  Informacioni i dërgesës
                </h2>
                <div className="space-y-6">
                  <InputField
                    label="Kompania"
                    id="company"
                    value={checkoutForm.company}
                    onChange={(e: any) => setCheckoutForm({...checkoutForm, company: e.target.value})}
                    autoComplete="organization"
                    className="w-full"
                  />
                  <InputField
                    label="Adresa"
                    id="address"
                    value={checkoutForm.adress}
                    onChange={(e: any) => setCheckoutForm({...checkoutForm, adress: e.target.value})}
                    autoComplete="street-address"
                    className="w-full"
                  />
                  <InputField
                    label="Apartamenti"
                    id="apartment"
                    value={checkoutForm.apartment}
                    onChange={(e: any) => setCheckoutForm({...checkoutForm, apartment: e.target.value})}
                    autoComplete="address-line2"
                    className="w-full"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <InputField
                      label="Qyteti"
                      id="city"
                      value={checkoutForm.city}
                      onChange={(e: any) => setCheckoutForm({...checkoutForm, city: e.target.value})}
                      autoComplete="address-level2"
                    />
                    <InputField
                      label="Shteti"
                      id="country"
                      value={checkoutForm.country}
                      onChange={(e: any) => setCheckoutForm({...checkoutForm, country: e.target.value})}
                      autoComplete="country-name"
                    />
                    <InputField
                      label="Kodi postar"
                      id="postalCode"
                      value={checkoutForm.postalCode}
                      onChange={(e: any) => setCheckoutForm({...checkoutForm, postalCode: e.target.value})}
                      autoComplete="postal-code"
                    />
                  </div>
                  <div>
                    <label htmlFor="orderNotice" className="block text-sm font-medium text-gray-700 mb-2">
                      Shënim për porosinë
                    </label>
                    <textarea
                      id="orderNotice"
                      name="orderNotice"
                      rows={4}
                      value={checkoutForm.orderNotice}
                      onChange={(e) => setCheckoutForm({...checkoutForm, orderNotice: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Shënime shtesë për porosinë tuaj..."
                    />
                  </div>
                </div>
              </div>

              {/* Place Order Button */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <button
                  type="button"
                  onClick={makePurchase}
                  disabled={isLoading}
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <FaSpinner className="w-5 h-5 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <FaLock className="w-5 h-5" />
                      <span>Bli tani - ALL {finalTotal}</span>
                    </>
                  )}
                </button>
                <p className="text-sm text-gray-500 text-center mt-3">
                  Your payment information is secure and encrypted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
