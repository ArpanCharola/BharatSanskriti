import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true); // toggle between login/signup

  return (
    <div className="flex w-full h-screen bg-[#F5F5DC]">
      {/* Left side with cultural imagery */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="/images/culture-bg.jpg" // 👉 put a rotating cultural image later
          alt="Indian Heritage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg font-['Playfair_Display']">
            Bharat Sanskriti
          </h1>
        </div>
      </div>

      {/* Right side form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
          {/* Branding */}
          <h2 className="text-3xl font-bold text-center text-[#006699]">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <p className="mt-2 text-center text-gray-600">
            {isLogin
              ? "Welcome back! Please login to continue."
              : "Create an account to explore Bharat Sanskriti."}
          </p>

          {/* Form */}
          <form className="mt-6 space-y-4">
            {/* Signup fields */}
            {!isLogin && (
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
                  placeholder="Enter your email"
                />
              </div>
            )}

            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF9933] text-white py-2 rounded-lg font-bold hover:bg-[#e68a00] transition"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          {/* Extra Links */}
          {isLogin && (
            <div className="flex justify-between mt-4 text-sm">
              <a href="#" className="text-[#006699] hover:underline">
                Forgot Password?
              </a>
              <a href="#" className="text-[#006699] hover:underline">
                Login with Google
              </a>
            </div>
          )}

          {/* Toggle Login/Signup */}
          <p className="mt-6 text-center text-gray-600">
            {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#006699] font-bold hover:underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
