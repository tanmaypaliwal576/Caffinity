import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { MapPin, CreditCard } from "lucide-react";

export default function Payment() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    // 1. Check all fields are filled
    for (let key in form) {
      if (!form[key].trim()) {
        toast.error("All fields are required");
        return;
      }
    }

    // 2. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Enter a valid email address");
      return;
    }

    // 3. Card Number (12 digits)
    if (!/^\d{12}$/.test(form.cardNumber)) {
      toast.error("Card Number must be exactly 12 digits");
      return;
    }

    // 4. CVV (3 digits)
    if (!/^\d{3}$/.test(form.cvv)) {
      toast.error("CVV must be exactly 3 digits");
      return;
    }

    // 5. Expiry (MM/YY)
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(form.expiry)) {
      toast.error("Expiry must be in MM/YY format");
      return;
    }

    // 6. ZIP Code numeric
    if (!/^\d+$/.test(form.zip)) {
      toast.error("ZIP Code must be numeric");
      return;
    }

    // 7. City, state, name must be letters only
    const letterOnly = /^[A-Za-z ]+$/;
    if (!letterOnly.test(form.name)) {
      toast.error("Name must contain alphabets only");
      return;
    }
    if (!letterOnly.test(form.city)) {
      toast.error("City must contain alphabets only");
      return;
    }
    if (!letterOnly.test(form.state)) {
      toast.error("State must contain alphabets only");
      return;
    }

    // If validation passes →
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Login required");
        return navigate("/auth");
      }

      await axios.post(
        "http://localhost:3000/api/orders",
        { items: cart },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      clearCart();
      toast.success("Payment Successful!");

      setTimeout(() => navigate("/order-success"), 800);
    } catch {
      toast.error("Payment failed");
    }
  };

  return (
    <div className="pt-28 pb-24 px-6 md:px-16 lg:px-32 bg-[#F5EFE6] min-h-screen">
      <h1 className="text-4xl font-bold text-emerald-900 mb-12">
        Checkout & Payment
      </h1>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-14">
          {/* SHIPPING FORM */}
          <div className="bg-white shadow-xl rounded-3xl p-10 space-y-8">
            <div className="flex items-center gap-3">
              <MapPin className="text-emerald-700" size={26} />
              <h2 className="text-3xl font-semibold text-emerald-900">
                Shipping Details
              </h2>
            </div>

            {/* Inputs Larger */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                className="w-full h-14 border rounded-xl px-5 text-lg"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
              />
              <input
                className="w-full h-14 border rounded-xl px-5 text-lg"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
              />
            </div>

            <input
              className="w-full h-14 border rounded-xl px-5 text-lg"
              name="address"
              placeholder="Full Address"
              onChange={handleChange}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <input
                className="w-full h-14 border rounded-xl px-5 text-lg"
                name="city"
                placeholder="City"
                onChange={handleChange}
              />
              <input
                className="w-full h-14 border rounded-xl px-5 text-lg"
                name="state"
                placeholder="State"
                onChange={handleChange}
              />
              <input
                className="w-full h-14 border rounded-xl px-5 text-lg"
                name="zip"
                placeholder="ZIP Code"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* PAYMENT FORM */}
          <div className="bg-white shadow-xl rounded-3xl p-10 space-y-8">
            <div className="flex items-center gap-3">
              <CreditCard className="text-emerald-700" size={26} />
              <h2 className="text-3xl font-semibold text-emerald-900">
                Payment Details
              </h2>
            </div>

            <input
              className="w-full h-14 border rounded-xl px-5 text-lg"
              name="cardNumber"
              placeholder="Card Number"
              onChange={handleChange}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <input
                className="w-full h-14 border rounded-xl px-5 text-lg"
                name="expiry"
                placeholder="Expiry (MM/YY)"
                onChange={handleChange}
              />
              <input
                className="w-full h-14 border rounded-xl px-5 text-lg"
                name="cvv"
                placeholder="CVV"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-white shadow-xl p-10 rounded-3xl h-fit">
          <h2 className="text-3xl font-semibold text-emerald-900 mb-6">
            Order Summary
          </h2>

          <div className="space-y-4 mb-5">
            {cart.map((item) => (
              <div
                key={item.name}
                className="flex justify-between text-lg text-gray-700"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span className="font-semibold text-emerald-900">
                  ₹{item.price * item.quantity}
                </span>
              </div>
            ))}
          </div>

          <hr className="my-6" />

          <div className="flex justify-between text-2xl font-bold text-emerald-900">
            <span>Total</span>
            <span>₹{subtotal}</span>
          </div>

          <button
            onClick={handlePayment}
            className="w-full mt-10 bg-emerald-700 hover:bg-emerald-800 
                       text-white text-xl py-4 rounded-xl transition"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
