import React from "react";
import { useCart } from "../context/CartContext";

// Import images
import hot1 from "../assets/sl1.jpg";
import hot2 from "../assets/2-1.webp";
import hot3 from "../assets/3.jpeg";
import hot4 from "../assets/1.webp";

import cold1 from "../assets/coldbrew.png";
import cold2 from "../assets/matcha.png";
import cold3 from "../assets/caramel.png";

export default function Menu() {
  return (
    <div className="w-full overflow-x-hidden font-sans bg-[#F5EFE6]">
      {/* ================= HERO ================= */}
      <section className="w-full bg-[#0D3B2E] text-white py-24 text-center">
        <h1 className="text-5xl font-bold">Our Menu</h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          Explore our handcrafted beverages made with premium ingredients.
        </p>
      </section>

      {/* ================= HOT BEVERAGES ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-900">Hot Beverages</h2>
        <p className="text-gray-700 mt-2 mb-10">
          Warm and comforting drinks crafted to perfection
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <MenuCard
            img={hot1}
            name="Hot Coffee"
            price="₹120"
            desc="Rich espresso with silky steamed milk."
          />

          <MenuCard
            img={hot2}
            name="Caramel Macchiato"
            price="₹259"
            desc="Espresso, steamed milk, vanilla, and caramel drizzle."
          />

          <MenuCard
            img={hot3}
            name="Matcha Latte"
            price="₹320"
            desc="Japanese matcha blended with steamed milk."
          />

          <MenuCard
            img={hot4}
            name="Cappuccino"
            price="₹280"
            desc="Espresso, steamed milk and frothy foam."
          />
        </div>
      </section>

      {/* ================= COLD BEVERAGES ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-900">Cold Beverages</h2>
        <p className="text-gray-700 mt-2 mb-10">
          Chill and refreshing drinks for any time of day
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <MenuCard
            img={cold1}
            name="Cold Brew"
            price="₹260"
            desc="Slow-steeped cold brew served chilled."
          />

          <MenuCard
            img={cold2}
            name="Iced Matcha Latte"
            price="₹340"
            desc="Premium matcha shaken with ice & milk."
          />

          <MenuCard
            img={cold3}
            name="Iced Caramel Macchiato"
            price="₹299"
            desc="Vanilla, espresso, milk & caramel over ice."
          />
        </div>
      </section>

      {/* ================= CUSTOMIZE ================= */}
      <section className="py-24 text-center bg-[#FAF7F2]">
        <h2 className="text-4xl font-bold text-emerald-900">
          Make It Your Own
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-gray-700">
          Customize your beverage with alternatives like oat, almond, soy or
          coconut milk. Adjust sweetness, add syrups, or make it iced—your
          perfect drink awaits.
        </p>
      </section>
    </div>
  );
}

/* ===========================================================
   MENU CARD COMPONENT
=========================================================== */

const MenuCard = ({ img, name, price, desc }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition overflow-hidden">
      <img src={img} className="w-full h-64 object-cover" alt={name} />

      <div className="p-5">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600 mt-1 text-sm">{desc}</p>

        <div className="flex justify-between mt-4 items-center">
          <span className="font-bold text-lg">{price}</span>

          <button
            onClick={() =>
              addToCart({
                name,
                price: Number(price.replace("₹", "")),
                img,
              })
            }
            className="px-4 py-2 text-white bg-emerald-700 rounded-full hover:bg-emerald-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
