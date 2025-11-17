import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const { cart } = useCart();

  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    loadUser();
    window.addEventListener("storageUpdate", loadUser);
    return () => window.removeEventListener("storageUpdate", loadUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.dispatchEvent(new Event("storageUpdate"));
    window.location.href = "/";
  };

  return (
    <nav className="w-full bg-white/90 backdrop-blur shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} className="h-10 w-10" alt="Verdant Logo" />
          <span className="text-xl font-bold text-green-900">Caffinity</span>
        </Link>

        <div className="hidden md:flex gap-8 text-green-900 font-medium">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/rewards">Rewards</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="flex items-center gap-6">
          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <ShoppingCart size={28} className="text-green-900" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>

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
      </div>
    </nav>
  );
}
