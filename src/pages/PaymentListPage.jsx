import React, { useState, useEffect } from "react";

const PaymentListPage = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL =
    import.meta.env.VITE_APP_ENV === "production"
      ? import.meta.env.VITE_APP_BACKEND_PROD
      : import.meta.env.VITE_APP_BACKEND_DEV;

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/payment/all`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch payments');
        }
        const data = await response.json();
        setPayments(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10">
        <p>Loading payments...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-600">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 min-h-screen py-10 font-publicSans">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Payment List</h2>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto text-sm text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 font-medium text-gray-700">Payment ID</th>
                <th className="px-4 py-2 font-medium text-gray-700">Name</th>
                <th className="px-4 py-2 font-medium text-gray-700">Email</th>
                <th className="px-4 py-2 font-medium text-gray-700">Plan</th>
                <th className="px-4 py-2 font-medium text-gray-700">Amount</th>
                <th className="px-4 py-2 font-medium text-gray-700">Status</th>
                <th className="px-4 py-2 font-medium text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.paymentId} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{payment.paymentId}</td>
                  <td className="px-4 py-2">{payment.name}</td>
                  <td className="px-4 py-2">{payment.email}</td>
                  <td className="px-4 py-2">{payment.plan}</td>
                  <td className="px-4 py-2">{payment.totalAmount}</td>
                  <td className="px-4 py-2">{payment.status}</td>
                  <td className="px-4 py-2">{new Date(payment.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentListPage;
