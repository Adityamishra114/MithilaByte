import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedPrice = 9000, plan = "6 Months" } = location.state || {};

  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [coupon, setCoupon] = useState("");  
  const [appliedCoupon, setAppliedCoupon] = useState(null); 
  const [discount, setDiscount] = useState(0);
  const [gstPercent] = useState(18);
  const [usedCoupons, setUsedCoupons] = useState({});

  const basePrice = selectedPrice;
  const gstAmount = ((basePrice - discount) * gstPercent) / 100;
  const total = basePrice - discount + gstAmount;

  const API_URL =
    import.meta.env.VITE_APP_ENV === "production"
      ? import.meta.env.VITE_APP_BACKEND_PROD
      : import.meta.env.VITE_APP_BACKEND_DEV;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const applyCoupon = async () => {
    const code = coupon.trim().toUpperCase();
    if (!code) return alert("⚠️ Please enter a coupon code.");
    if (!form.email) return alert("⚠️ Enter email before applying coupon.");

    try {
      const response = await fetch(`${API_URL}/api/coupons/validate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: code,
          email: form.email,
        }),
      });

      const result = await response.json();

      if (result.isValid) {
        const discountAmount = (basePrice * result.discountPercentage) / 100;
        setDiscount(discountAmount);
        setAppliedCoupon({
          code,
          percent: result.discountPercentage,
          message: `✅ ${result.discountPercentage}% discount applied successfully.`,
        });
      } else {
        setDiscount(0);
        setAppliedCoupon({ code: null, message: result.message || "❌ Invalid or expired coupon." });
      }
    } catch (error) {
      alert("❌ Error validating coupon.");
      console.error("Error validating coupon:", error);
    }
  };

  const placeOrder = async () => {
    if (!form.name || !form.phone || !form.email) {
      alert("⚠️ Please fill all billing details before payment.");
      return;
    }

    const paymentId = uuidv4(); // Generate a unique payment ID

    const paymentData = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      totalAmount: total,
      couponCode: appliedCoupon?.code || null,
      discount,
      paymentId, // Use the generated UUID payment ID
      plan,
      gstAmount,
    };

    try {
      const res = await fetch(`${API_URL}/api/payment/save`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentData),
      });

      const data = await res.json();
      if (res.ok) {
        // Initiate Razorpay payment
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID,
          amount: Math.round(total * 100),
          currency: "INR",
          name: "NKD AND ASSOCIATES",
          description: `${plan} Subscription`,
          image: "https://tradeohedge.com/logo.png",
          handler: async (response) => {
            alert(`✅ Payment Successful!`);
            navigate("/success", {
              state: {
                paymentId,
                form,
                plan,
                total,
                paymentDetails: response,
              },
            });
          },
          prefill: { name: form.name, email: form.email, contact: form.phone },
          theme: { color: "#0B69FF" },
        };
        const razor = new window.Razorpay(options);
        razor.open();
      } else {
        alert("❌ Error saving payment details.");
      }
    } catch (error) {
      alert("❌ Error saving payment details.");
    }
  };

  const formatCurrency = (value) => `₹ ${value.toLocaleString("en-IN")}`;

  return (
    <div className="w-full bg-gray-50 min-h-screen font-publicSans pt-[100px]">
      <section className="bg-gradient-to-r from-blue-50 to-gray-100 py-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800">Checkout</h3>
          <p className="text-gray-600 mt-2">
            Securely complete your <span className="font-semibold">{plan}</span> subscription
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          {/* Billing Details */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <h5 className="text-xl font-semibold mb-6 text-gray-800">Billing Details</h5>
            <form className="space-y-6">
              {["name", "phone", "email"].map((field) => (
                <div key={field}>
                  <label className="block text-gray-700 font-medium capitalize mb-1">
                    {field} <span className="text-red-500">*</span>
                  </label>
                  <input
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    type={field === "email" ? "email" : "text"}
                    placeholder={`Enter your ${field}`}
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 transition-all"
                  />
                </div>
              ))}
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <h5 className="text-xl font-semibold mb-6 text-gray-800">Order Summary</h5>

            <div className="space-y-4">
              <div className="flex justify-between text-gray-700">
                <span>Service Type</span>
                <span className="font-semibold">Intraday</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Plan</span>
                <span className="font-semibold">{plan}</span>
              </div>

              <div className="border-t border-gray-200 my-3"></div>

              <div className="flex justify-between text-gray-700">
                <span>Base Price</span>
                <span className="font-semibold">{formatCurrency(basePrice)}</span>
              </div>

              <div
                className={`flex justify-between ${
                  discount > 0 ? "text-green-600 font-semibold" : "text-gray-400"
                }`}
              >
                <span>Discount {appliedCoupon?.code ? `(${appliedCoupon.code})` : ""}</span>
                <span>
                  {discount > 0 ? `- ${formatCurrency(discount)}` : formatCurrency(0)}
                </span>
              </div>

              <div className="flex justify-between text-gray-700">
                <span>GST (18%)</span>
                <span className="font-semibold">{formatCurrency(gstAmount)}</span>
              </div>

              <div className="border-t border-gray-300 mt-4 pt-3"></div>
              <div className="flex justify-between text-lg font-bold text-blue-700">
                <span>Total Payable</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>

            {/* Coupon Section */}
            <div className="mt-6">
              <label className="block text-gray-700 font-medium mb-2">Apply Coupon</label>
              <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Enter coupon code (e.g., TH20)"
                  className="flex-grow md:w-3/4 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <button
                  onClick={applyCoupon}
                  type="button"
                  className="mt-4 md:mt-0 md:px-6 py-2 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-700 transition"
                >
                  Apply
                </button>
              </div>
              {appliedCoupon && (
                <p
                  className={`mt-2 text-sm ${
                    appliedCoupon.code ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {appliedCoupon.message}
                </p>
              )}
            </div>

            <div className="mt-8">
              <button
                onClick={placeOrder}
                className="w-full bg-blue-600 text-white py-3 text-center text-lg font-semibold rounded-xl hover:bg-blue-700 active:scale-[0.99] transition-all"
              >
                Pay {formatCurrency(total)}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
