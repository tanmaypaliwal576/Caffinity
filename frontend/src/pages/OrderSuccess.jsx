import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function OrderSuccess() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <CheckCircle className="text-green-600" size={80} />

      <h1 className="text-4xl font-bold text-green-800 mt-6">
        Order Placed Successfully!
      </h1>

      <p className="text-gray-700 mt-3 max-w-lg">
        Thank you for your purchase! Your order is being processed.
      </p>

      <Link
        to="/menu"
        className="mt-8 px-6 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
