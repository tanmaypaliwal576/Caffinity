import React from "react";
import {
  FaBirthdayCake,
  FaGift,
  FaStar,
  FaCrown,
  FaRegSmile,
} from "react-icons/fa";

const Rewards = () => {
  return (
    <div className="w-full overflow-x-hidden font-sans">
      {/* ================= HERO BANNER ================= */}
      <section className="bg-gradient-to-br from-emerald-900 to-green-800 text-white py-28 text-center">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">
          Verdant Rewards
        </h1>

        <p className="mt-5 text-lg max-w-3xl mx-auto text-gray-200 leading-relaxed">
          Earn stars with every sip. Unlock exclusive perks, premium tiers, and
          special treats crafted just for our Verdant members.
        </p>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-[#F5EFE6] py-24">
        <h2 className="text-center text-4xl font-bold text-emerald-900">
          How Rewards Work
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-14">
          Simple, rewarding, and made for coffee lovers like you.
        </p>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-8">
          {/* Earn Stars */}
          <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition text-center">
            <FaStar className="text-emerald-700 text-5xl mx-auto" />
            <h3 className="text-2xl font-semibold mt-5">Earn Stars</h3>
            <p className="text-gray-600 mt-3">
              Collect 1 star for every $1 spent. Trade stars for free drinks and
              perks.
            </p>
          </div>

          {/* Birthday Reward */}
          <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition text-center">
            <FaBirthdayCake className="text-emerald-700 text-5xl mx-auto" />
            <h3 className="text-2xl font-semibold mt-5">Birthday Treat</h3>
            <p className="text-gray-600 mt-3">
              Celebrate with a complimentary drink during your birthday month.
            </p>
          </div>

          {/* Free Refills */}
          <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition text-center">
            <FaGift className="text-emerald-700 text-5xl mx-auto" />
            <h3 className="text-2xl font-semibold mt-5">Free Refills</h3>
            <p className="text-gray-600 mt-3">
              Enjoy free refills on brewed coffee and teas during your visit.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TIERS ================= */}
      <section className="bg-[#F5EFE6] py-24">
        <h2 className="text-center text-4xl font-bold text-emerald-900">
          Reward Tiers
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-14">
          Climb the tiers and unlock premium benefits.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-8">
          {/* Green Tier */}
          <div className="rounded-3xl shadow bg-white overflow-hidden">
            <div className="bg-emerald-900 text-white p-6 text-center">
              <h3 className="text-2xl font-semibold">Green Tier</h3>
              <p className="text-sm mt-1 opacity-90">0–24 stars</p>
            </div>

            <ul className="p-6 space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <FaStar className="text-emerald-700" /> Earn stars on every
                purchase
              </li>
              <li className="flex items-center gap-3">
                <FaRegSmile className="text-emerald-700" /> Birthday drink
              </li>
              <li className="flex items-center gap-3">
                <FaGift className="text-emerald-700" /> Mobile ordering access
              </li>
            </ul>
          </div>

          {/* Gold Tier */}
          <div className="rounded-3xl shadow bg-white overflow-hidden">
            <div className="bg-emerald-900 text-white p-6 text-center">
              <h3 className="text-2xl font-semibold">Gold Tier</h3>
              <p className="text-sm mt-1 opacity-90">25–99 stars</p>
            </div>

            <ul className="p-6 space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <FaStar className="text-yellow-500" /> All Green tier benefits
              </li>
              <li className="flex items-center gap-3">
                <FaGift className="text-yellow-500" /> Free drink every 25 stars
              </li>
              <li className="flex items-center gap-3">
                <FaRegSmile className="text-yellow-500" /> Exclusive member
                deals
              </li>
            </ul>
          </div>

          {/* Platinum Tier */}
          <div className="rounded-3xl shadow bg-white overflow-hidden">
            <div className="bg-emerald-900 text-white p-6 text-center flex flex-col items-center">
              <FaCrown className="text-3xl mb-2 text-yellow-300" />
              <h3 className="text-2xl font-semibold">Platinum Tier</h3>
              <p className="text-sm mt-1 opacity-90">100+ stars</p>
            </div>

            <ul className="p-6 space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <FaStar className="text-emerald-700" /> All Gold tier benefits
              </li>
              <li className="flex items-center gap-3">
                <FaGift className="text-emerald-700" /> Priority service
              </li>
              <li className="flex items-center gap-3">
                <FaRegSmile className="text-emerald-700" /> Early access to new
                drinks
              </li>
              <li className="flex items-center gap-3">
                <FaGift className="text-emerald-700" /> VIP invitations & events
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SIMPLE CTA MESSAGE ================= */}
      <section className="py-20 bg-emerald-900 text-white text-center">
        <h2 className="text-4xl font-bold">Sip More, Earn More</h2>
        <p className="mt-3 max-w-2xl mx-auto text-gray-200">
          Every visit brings you closer to exclusive treats and premium
          experiences.
        </p>
      </section>
    </div>
  );
};

export default Rewards;
