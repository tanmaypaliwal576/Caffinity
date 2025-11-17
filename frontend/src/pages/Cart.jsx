import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleProceedToPayment = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login to continue");
      return navigate("/auth");
    }

    navigate("/payment");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10 text-green-900">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-center bg-white p-4 rounded-xl shadow mb-5"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">₹{item.price}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    updateQuantity(item.name, Math.max(1, item.quantity - 1))
                  }
                  className="px-3 py-1 bg-gray-300 rounded"
                >
                  -
                </button>

                <span className="font-semibold">{item.quantity}</span>

                <button
                  onClick={() => updateQuantity(item.name, item.quantity + 1)}
                  className="px-3 py-1 bg-gray-300 rounded"
                >
                  +
                </button>

                <button
                  onClick={() => removeFromCart(item.name)}
                  className="text-red-600 font-semibold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-10 text-right">
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              Total: ₹{total}
            </h2>

            <button
              onClick={handleProceedToPayment}
              className="px-6 py-3 bg-green-900 text-white rounded-xl hover:bg-green-800 transition"
            >
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
}
