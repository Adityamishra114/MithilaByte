import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../components/authContext"; // Import the useAuth hook

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth(); // Use the logout function from the context

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove authToken from localStorage
    logout(); // Clear user from the context
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="flex min-h-screen bg-gray-100 sm:mt-[calc(var(--header-height))] mt-[calc(var(--header-height,80px)+40px)]">
      <aside className="w-64 p-6 text-gray-800 fixed left-0 top-0 h-full overflow-y-auto bg-white shadow-md">
        <h2 className="text-3xl font-semibold mb-8 text-center">Admin Dashboard</h2>

        <div className="space-y-4">
          <button
            onClick={() => navigate("register")}
            className="w-full text-left bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg shadow-md transition-all"
          >
            Create User
          </button>
          <button
            onClick={() => navigate("admincoupongenerator")}
            className="w-full text-left bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg shadow-md transition-all"
          >
            Coupon Generator
          </button>
          <button
            onClick={() => navigate("payment-list")}
            className="w-full text-left bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg shadow-md transition-all"
          >
            View Payments
          </button>
          <button
            onClick={handleLogout} // Trigger the logout function on click
            className="w-full text-left bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg shadow-md transition-all mt-6"
          >
            Logout
          </button>
        </div>
      </aside>
      <main className="flex-1 ml-64 p-8 bg-white min-h-screen">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">
          Welcome to the Admin Dashboard
        </h1>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
