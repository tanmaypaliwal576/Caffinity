import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaCoffee, FaArrowLeft, FaUnlockAlt, FaUserPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const BASE_URL = "http://localhost:3000"; // BACKEND PORT

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let response;

      if (isLogin) {
        // LOGIN
        response = await axios.post(`${BASE_URL}/api/auth/login`, {
          email: formData.email,
          password: formData.password,
        });

        toast.success("Login successful!");
      } else {
        // SIGNUP
        response = await axios.post(`${BASE_URL}/api/auth/signup`, {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        toast.success("Signup successful! Please log in.");
        setIsLogin(true); // Switch to login form
        setLoading(false);
        return; // stop here — don't store token
      }

      // Save token & user (only for login)
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Update navbar instantly
      window.dispatchEvent(new Event("storageUpdate"));

      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0b3b2e] to-[#0e2d22] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-10 rounded-2xl shadow-xl text-center">
        {/* Logo Icon */}
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaCoffee className="text-3xl text-emerald-700" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-1">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>

        <p className="text-gray-600 mb-6">
          {isLogin
            ? "Sign in to your account to continue"
            : "Sign up to get started with Caffinity Coffee"}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-emerald-600"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-emerald-600"
          />

          <input
            type="password"
            name="password"
            placeholder="********"
            required
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-emerald-600"
          />

          {/* Submit Button */}
          <button
            disabled={loading}
            className="w-full bg-emerald-800 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-emerald-900 transition"
          >
            {loading ? (
              "Please wait..."
            ) : isLogin ? (
              <>
                <FaUnlockAlt /> Sign In
              </>
            ) : (
              <>
                <FaUserPlus /> Create Account
              </>
            )}
          </button>
        </form>

        {/* Switch Login/Signup */}
        <p className="mt-5 text-gray-700">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-emerald-700 font-semibold hover:underline"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </p>

        {/* Back to Home */}
        <Link
          to="/"
          className="mt-6 flex items-center justify-center gap-2 text-gray-500 hover:text-gray-700 text-sm"
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Auth;
