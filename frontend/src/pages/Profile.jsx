import React from 'react';
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Call the logout function from the AuthContext
    logout();
    // Navigate to the home page after logging out
    navigate("/"); 
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-10 shadow-xl rounded-2xl w-full max-w-sm text-center">
          <p className="text-lg font-semibold text-gray-700">
            You are not logged in.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="bg-white p-10 shadow-xl rounded-2xl w-full max-w-sm border border-gray-200 text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">👤 My Profile</h1>
        <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-left">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">Username:</span>
            <span className="text-gray-800 font-semibold">{user.username}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">Email:</span>
            <span className="text-gray-800 font-semibold">{user.email || "N/A"}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">Role:</span>
            <span className="text-gray-800 font-semibold">{user.role || "user"}</span>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-8 w-full bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition-all duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
