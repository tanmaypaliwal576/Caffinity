import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useCart } from "../pages/CartContext";

// Import images
import hot2 from "../assets/coldbrew.png";
import hot3 from "../assets/coldbrew.png";
import hot1 from "../assets/coldbrew.png";
import hot4 from "../assets/coldbrew.png";

import cold1 from "../assets/coldbrew.png";
import cold2 from "../assets/coldbrew.png";
import cold3 from "../assets/coldbrew.png";

const Menu = () => {
  const { addToCart } = useCart();

  return (
    <div className="w-full overflow-x-hidden font-sans bg-[#F5EFE6]">
      {/* ================= HERO ================= */}
      <section className="w-full bg-[#0D3B2E] text-white py-24 text-center">
        <h1 className="text-5xl font-bold">Our Menu</h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          Explore our handcrafted beverages, made with premium ingredients and
          sustainable practices.
        </p>
      </section>

      {/* ================= HOT BEVERAGES ================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-900">Hot Beverages</h2>
        <p className="text-gray-700 mt-2 mb-10">
          Warm, comforting drinks crafted to perfection
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* CARD 1 */}
          <MenuCard
            img={hot1}
            name="Signature Latte"
            price={5.95}
            desc="Rich espresso with silky steamed milk and latte art."
            add={() => addToCart({ name: "Signature Latte", price: 5.95 })}
          />

          {/* CARD 2 */}
          <MenuCard
            img={hot2}
            name="Caramel Macchiato"
            price={5.45}
            desc="Vanilla milk topped with rich espresso and caramel drizzle."
            add={() => addToCart({ name: "Caramel Macchiato", price: 5.45 })}
          />

          {/* CARD 3 */}
          <MenuCard
            img={hot3}
            name="Matcha Latte"
            price={5.25}
            desc="Creamy matcha blended with steamed milk."
            add={() => addToCart({ name: "Matcha Latte", price: 5.25 })}
          />

          {/* CARD 4 */}
          <MenuCard
            img={hot4}
            name="Cappuccino"
            price={4.95}
            desc="Equal parts espresso, steamed milk, and foam."
            add={() => addToCart({ name: "Cappuccino", price: 4.95 })}
          />
        </div>
      </section>

      {/* ================= COLD BEVERAGES ================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-900">Cold Beverages</h2>
        <p className="text-gray-700 mt-2 mb-10">
          Refreshing drinks for any time of day
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* COLD 1 */}
          <MenuCard
            img={cold1}
            name="Cold Brew"
            price={4.95}
            desc="Smooth, naturally sweet slow-steep brew."
            add={() => addToCart({ name: "Cold Brew", price: 4.95 })}
          />

          {/* COLD 2 */}
          <MenuCard
            img={cold2}
            name="Iced Matcha Latte"
            price={5.95}
            desc="Premium matcha shaken with ice and milk."
            add={() => addToCart({ name: "Iced Matcha Latte", price: 5.95 })}
          />

          {/* COLD 3 */}
          <MenuCard
            img={cold3}
            name="Iced Caramel Macchiato"
            price={5.45}
            desc="Vanilla, espresso, milk & caramel over ice."
            add={() =>
              addToCart({ name: "Iced Caramel Macchiato", price: 5.45 })
            }
          />
        </div>
      </section>

      {/* ================= CUSTOMIZE ================= */}
      <section className="py-24 text-center bg-[#FAF7F2]">
        <h2 className="text-4xl font-bold text-emerald-900">
          Make It Your Own
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-gray-700">
          Customize your beverage with milk alternatives (oat, almond, soy,
          coconut), adjust sweetness, add flavors, or request it iced—your
          perfect cup awaits.
        </p>
      </section>
    </div>
  );
};

/* ===========================================================
   MENU CARD COMPONENT
=========================================================== */
const MenuCard = ({ img, name, price, desc, add }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition overflow-hidden">
      <img src={img} className="w-full h-64 object-cover" alt={name} />

      <div className="p-5">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600 mt-1 text-sm">{desc}</p>

        <div className="flex justify-between mt-4 items-center">
          <span className="font-bold text-lg">${price}</span>

          <button
            className="px-4 py-2 text-white bg-emerald-700 rounded-full flex items-center gap-2 hover:bg-emerald-800"
            onClick={add}
          >
            Order <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
