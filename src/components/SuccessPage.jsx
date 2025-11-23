import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { paymentId, form, plan, total } = state || {};

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 p-6 font-publicSans">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Payment Successful 🎉
        </h2>
        <p className="text-gray-700 mb-2">
          <strong>Payment ID:</strong> {paymentId}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Plan:</strong> {plan}
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Amount Paid:</strong> ₹{total.toLocaleString("en-IN")}
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
