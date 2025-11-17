import React from "react";
import { FaLeaf, FaHeart, FaMugHot, FaArrowRight } from "react-icons/fa";

// Import images correctly
import heroBg from "../assets/home-bg.png";
import matcha from "../assets/matcha.png";
import caramel from "../assets/caramel.png";
import coldbrew from "../assets/coldbrew.png";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden font-sans">
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative w-full h-[90vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Dim cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-xl pl-20 animate-fadeInUp">
          <h1 className="text-6xl font-bold text-white leading-tight drop-shadow-lg">
            Every Sip <br /> Tells a Story
          </h1>

          <p className="text-gray-200 mt-5 text-lg leading-relaxed drop-shadow">
            Discover ethically-sourced, handcrafted coffee that connects you to
            nature’s finest flavors.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="px-8 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full shadow-md transition transform hover:scale-[1.05]">
              Explore Menu →
            </button>

            <button className="px-8 py-3 bg-white/20 border border-white text-white hover:bg-white/30 rounded-full shadow-md transition transform hover:scale-[1.05]">
              Join Rewards →
            </button>
          </div>
        </div>
      </section>

      {/* ================= FEATURED FAVORITES ================= */}
      <section className="bg-[#F5EFE6] py-20">
        <h2 className="text-center text-4xl font-bold text-emerald-900">
          Featured Favorites
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Crafted with premium ingredients & exceptional care.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-14 px-10 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition">
            <img src={matcha} className="w-full h-72 object-cover" />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-emerald-900">
                Matcha Latte
              </h3>
              <p className="text-gray-600 mt-1 text-sm">
                Smooth ceremonial-grade matcha with silky steamed milk.
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">$5.95</span>
                <button className="px-4 py-2 rounded-full bg-emerald-700 text-white hover:bg-emerald-800 flex items-center gap-2">
                  Order <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition">
            <img src={caramel} className="w-full h-72 object-cover" />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-emerald-900">
                Caramel Macchiato
              </h3>
              <p className="text-gray-600 mt-1 text-sm">
                Espresso with vanilla & caramel, finished with a caramel
                drizzle.
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">$5.45</span>
                <button className="px-4 py-2 rounded-full bg-emerald-700 text-white hover:bg-emerald-800 flex items-center gap-2">
                  Order <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition">
            <img src={coldbrew} className="w-full h-72 object-cover" />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-emerald-900">
                Cold Brew
              </h3>
              <p className="text-gray-600 mt-1 text-sm">
                Slow-steeped for 20 hours, smooth & naturally sweet.
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">$4.95</span>
                <button className="px-4 py-2 rounded-full bg-emerald-700 text-white hover:bg-emerald-800 flex items-center gap-2">
                  Order <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-[#F5EFE6] py-20">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-10 rounded-3xl shadow-md hover:shadow-xl text-center transition">
            <FaMugHot className="text-4xl text-emerald-700 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Premium Quality</h3>
            <p className="text-gray-600 mt-2">
              Only the finest beans sourced from sustainable farms.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-md hover:shadow-xl text-center transition">
            <FaLeaf className="text-4xl text-emerald-700 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Sustainability</h3>
            <p className="text-gray-600 mt-2">
              Ethical sourcing & environmental responsibility.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-md hover:shadow-xl text-center transition">
            <FaHeart className="text-4xl text-emerald-700 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Crafted with Care</h3>
            <p className="text-gray-600 mt-2">
              Every cup handcrafted by skilled baristas.
            </p>
          </div>
        </div>
      </section>

      {/* ================= JOIN CTA ================= */}
      <section className="py-28 bg-emerald-900 text-white text-center">
        <h2 className="text-4xl font-bold">Join Verdant Rewards</h2>

        <p className="mt-3 max-w-2xl mx-auto text-gray-200">
          Earn points with every purchase and unlock exclusive perks.
        </p>

        <button className="mt-8 px-10 py-3 bg-white text-emerald-800 rounded-full text-lg font-semibold hover:bg-neutral-200 transition flex items-center gap-2 mx-auto">
          Get Started <FaArrowRight />
        </button>
      </section>
    </div>
  );
};

export default Home;
