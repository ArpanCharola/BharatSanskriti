// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // ❌ Search-related state and functions removed
  
  return (
    <nav className="w-full fixed top-0 left-0 bg-primary text-white shadow-md z-50">
      <div className="flex justify-between items-center h-16 px-6 lg:px-12">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Bharat Sanskriti Logo" className="h-8 w-8 object-contain" />
          <Link to="/" className="font-bold text-lg tracking-wide">
            Bharat Sanskriti
          </Link>
        </div>

        {/* ❌ Search Bar JSX removed from here */}
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-accent">Home</Link>
          <Link to="/states" className="hover:text-accent">States and UTs</Link>
          <Link to="/risk" className="hover:text-accent">Risk Radar</Link>
          <Link to="/culture" className="hover:text-accent">Culture</Link>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-accent flex items-center gap-1"
            >
              More ▼
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-10">
                <Link to="/heritages" className="block px-4 py-2 hover:bg-gray-100">Heritage</Link>
                <Link to="/traditions" className="block px-4 py-2 hover:bg-gray-100">Traditions</Link>
                <Link to="/festivals" className="block px-4 py-2 hover:bg-gray-100">Festivals</Link>
              </div>
            )}
          </div>
          <Link to="/about" className="hover:text-accent">About</Link>

          {/* User logic */}
          {user ? (
            <div className="flex items-center gap-4">
              <Link to="/profile" className="hover:text-accent font-semibold">
                {user.username}
              </Link>
              <button
                onClick={logout}
                className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="hover:text-accent">Log In / Sign Up</Link>
          )}
        </div>

        {/* Hamburger - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>☰</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary px-6 pb-4 space-y-2">
          <Link to="/" className="block">Home</Link>
          <Link to="/culture" className="block">Culture</Link>
          <Link to="/states" className="block">States</Link>
          <Link to="/risk" className="block">Risk Radar</Link>
          <Link to="/heritages" className="block">Heritage</Link>
          <Link to="/traditions" className="block">Traditions</Link>
          <Link to="/festivals" className="block">Festivals</Link>
          {user ? (
            <>
              <Link to="/profile" className="block">Profile ({user.username})</Link>
              <button
                onClick={logout}
                className="w-full text-left text-red-400 mt-2"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="block">Log In / Sign Up</Link>
          )}
        </div>
      )}
    </nav>
  );
}