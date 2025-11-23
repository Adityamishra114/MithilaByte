import React, { useState, useEffect } from "react";

export default function CouponGenerator() {
  const [discountPercent, setDiscountPercent] = useState("");
  const [maxUsage, setMaxUsage] = useState(""); 
  const [generatedCode, setGeneratedCode] = useState("");
  const [couponList, setCouponList] = useState([]);
  const [selectedCoupon, setSelectedCoupon] = useState(null); 
  const [usedByList, setUsedByList] = useState([]); 
  const API_URL = import.meta.env.VITE_APP_ENV === "production"
    ? import.meta.env.VITE_APP_BACKEND_PROD
    : import.meta.env.VITE_APP_BACKEND_DEV;

  // ✅ Load coupons from server
  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const response = await fetch(`${API_URL}/api/coupons/list`);
        const data = await response.json();
        setCouponList(data);
      } catch (err) {
        console.error("Error fetching coupons:", err);
      }
    };
    fetchCoupons();
  }, []);

  // ✅ Generate coupon and send it to backend
  const handleGenerate = async () => {
    const percent = parseInt(discountPercent);
    const maxUsageValue = parseInt(maxUsage); // Capture maxUsage

    if (!percent || percent < 1 || percent > 100) {
      alert("⚠️ Please enter a discount between 1 and 100");
      return;
    }

    if (!maxUsageValue || maxUsageValue < 1) {
      alert("⚠️ Please enter a valid max usage (greater than 0).");
      return;
    }

    const code = `NKD${percent}`;

    try {
      const response = await fetch(`${API_URL}/api/coupons/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          discount: percent,
          maxUsage: maxUsageValue, 
        }),
      });

      const newCoupon = await response.json();

      if (newCoupon.code) {
        setCouponList((prev) => [...prev, newCoupon]);
        setGeneratedCode(newCoupon.code);
        setDiscountPercent("");
        setMaxUsage(""); // Reset maxUsage input
        alert(`✅ Coupon Generated: ${newCoupon.code} (${percent}% OFF)`);
      } else {
        alert("⚠️ Failed to generate coupon.");
      }
    } catch (err) {
      console.error("Error generating coupon:", err);
    }
  };

  // ✅ Fetch users who have used the selected coupon
  const handleFetchUsedByList = async (couponCode) => {
    try {
      const response = await fetch(`${API_URL}/api/coupons/${couponCode}/usedby`);
      const data = await response.json();
      setUsedByList(data);
    } catch (err) {
      console.error("Error fetching used by list:", err);
    }
  };

  // ✅ Delete a coupon
  const handleDeleteCoupon = async (couponCode) => {
    try {
      const response = await fetch(`${API_URL}/api/coupons/delete/${couponCode}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (result.message) {
        alert(result.message);
        setCouponList(couponList.filter((coupon) => coupon.code !== couponCode)); 
      } else {
        alert("⚠️ Failed to delete coupon.");
      }
    } catch (err) {
      console.error("Error deleting coupon:", err);
    }
  };

  return (
    <div className=" flex items-center justify-center bg-gray-50 py-12 font-publicSans">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-6xl p-8">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
          Coupon Generator
        </h2>

        <div className="flex items-center gap-3 mb-4">
          <input
            type="number"
            placeholder="Enter % (1–100)"
            value={discountPercent}
            onChange={(e) => setDiscountPercent(e.target.value)}
            className="flex-grow px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="number"
            placeholder="Enter max usage"
            value={maxUsage}
            onChange={(e) => setMaxUsage(e.target.value)}
            className="flex-grow px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <button
            onClick={handleGenerate}
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Generate
          </button>
        </div>

        {generatedCode && (
          <div className="text-center text-green-600 font-semibold mb-4">
            Latest Coupon: <span className="text-gray-800">{generatedCode}</span>
          </div>
        )}

        {couponList.length > 0 ? (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Generated Coupons
            </h3>
            <div className="overflow-x-auto"> 
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b text-left text-gray-700">Coupon Code</th>
                    <th className="px-4 py-2 border-b text-left text-gray-700">Discount (%)</th>
                    <th className="px-4 py-2 border-b text-left text-gray-700">Max Usage</th>
                    <th className="px-4 py-2 border-b text-left text-gray-700">Used</th>
                    <th className="px-4 py-2 border-b text-left text-gray-700">Expires At</th>
                    <th className="px-4 py-2 border-b text-left text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {couponList.map((coupon, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 border-b text-gray-700">{coupon.code}</td>
                      <td className="px-4 py-2 border-b text-gray-700">{coupon.discount}</td>
                      <td className="px-4 py-2 border-b text-gray-700">{coupon.maxUsage}</td>
                      <td className="px-4 py-2 border-b text-gray-700">{coupon.usedByCount}</td>
                      <td className="px-4 py-2 border-b text-gray-700">
                        {new Date(coupon.expiresAt).toLocaleString()}
                      </td>
                      <td className="px-4 py-2 border-b text-gray-700">
                        <button
                          onClick={() => {
                            setSelectedCoupon(coupon);
                            handleFetchUsedByList(coupon.code);
                          }}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                          Show Users
                        </button>
                        <button
                          onClick={() => handleDeleteCoupon(coupon.code)}
                          className="ml-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {usedByList.length === 0 ? (
              <div className="mt-4 text-gray-500">
                No users have used this coupon yet.
              </div>
            ) : (
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Users who used this coupon:</h4>
                <ul>
                  {usedByList.map((user, index) => (
                    <li key={index} className="text-gray-700">{user}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-6">
            No coupons generated yet.
          </p>
        )}
      </div>
    </div>
  );
}
