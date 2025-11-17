import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    loadUser(); // Run on mount

    // 🔥 listen for login/signup/logout events
    window.addEventListener("storageUpdate", loadUser);

    return () => {
      window.removeEventListener("storageUpdate", loadUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // 🔥 notify navbar
    window.dispatchEvent(new Event("storageUpdate"));

    window.location.href = "/";
  };

  return (
    <nav className="w-full bg-white/90 backdrop-blur shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} className="h-10 w-10" alt="Verdant Logo" />
          <span className="text-xl font-bold text-green-900">Verdant</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-green-900 font-medium">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/rewards">Rewards</Link>
          <Link to="/about">About</Link>
        </div>

        {/* Auth Section */}
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-green-900 font-semibold">
              Hi, {user.name}
            </span>

            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/auth"
            className="px-5 py-2 rounded-full bg-green-900 text-white hover:bg-green-800 font-medium"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
