import React from "react";
import { FaLeaf, FaHeart, FaUsers, FaMugHot } from "react-icons/fa";
import bgImage from "../assets/bg-about.jpg"; // ⭐ IMPORT IMAGE

const About = () => {
  return (
    <div className="w-full overflow-x-hidden font-sans">
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative w-full h-[85vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${bgImage})` }} // ⭐ USE IMPORTED IMAGE
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white px-6">
          <h1 className="text-6xl font-bold drop-shadow-lg">Our Story</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto text-gray-200 drop-shadow">
            Born from a passion for exceptional coffee and sustainable practices
          </p>
        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section className="bg-[#F8F4E9] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-emerald-900">Our Mission</h2>

          <p className="mt-6 text-gray-700 leading-relaxed text-lg">
            At Verdant, we believe coffee is more than just a beverage—it’s a
            connection between people, cultures, and the earth. Founded in 2020,
            our journey began with a simple vision: to create a coffee
            experience that honors both the craft of brewing and the communities
            that grow our beans.
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed text-lg">
            We partner directly with small-scale farmers who share our
            commitment to quality and sustainability. Every bean is ethically
            sourced, fairly traded, and roasted to perfection to bring out
            unique flavor profiles that tell the story of their origin.
          </p>
        </div>
      </section>

      {/* ================= VALUES SECTION ================= */}
      <section className="bg-[#F3EDE1] py-24 px-6">
        <h2 className="text-center text-4xl font-bold text-emerald-900">
          Our Values
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-12">
          The principles that guide everything we do
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">
            <FaMugHot className="text-4xl text-emerald-700" />
            <h3 className="text-xl font-semibold mt-4">Quality First</h3>
            <p className="text-gray-600 mt-3">
              We source only the finest arabica beans from ethical farms,
              ensuring every cup meets our exacting standards for flavor and
              sustainability.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">
            <FaLeaf className="text-4xl text-emerald-700" />
            <h3 className="text-xl font-semibold mt-4">Sustainability</h3>
            <p className="text-gray-600 mt-3">
              From farm to cup, we're committed to reducing our environmental
              impact through eco-friendly practices and renewable packaging.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">
            <FaUsers className="text-4xl text-emerald-700" />
            <h3 className="text-xl font-semibold mt-4">Community</h3>
            <p className="text-gray-600 mt-3">
              We believe in creating spaces where people connect, creating a
              warm, welcoming environment that feels like home.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">
            <FaHeart className="text-4xl text-emerald-700" />
            <h3 className="text-xl font-semibold mt-4">Craftsmanship</h3>
            <p className="text-gray-600 mt-3">
              Every beverage is handcrafted by trained baristas who pour passion
              and expertise into every cup they create.
            </p>
          </div>
        </div>
      </section>

      {/* ================= IMPACT SECTION ================= */}
      <section className="bg-[#F7F3E8] py-24 text-center px-6">
        <h2 className="text-4xl font-bold text-emerald-900">Our Impact</h2>

        <p className="mt-4 text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Through our direct-trade partnerships and sustainable practices, we're
          making a positive difference in farming communities and our planet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14 max-w-5xl mx-auto">
          <div>
            <p className="text-5xl font-bold text-emerald-800">50+</p>
            <p className="text-lg text-gray-700 mt-2">Partner Farms</p>
          </div>

          <div>
            <p className="text-5xl font-bold text-emerald-800">100%</p>
            <p className="text-lg text-gray-700 mt-2">Ethically Sourced</p>
          </div>

          <div>
            <p className="text-5xl font-bold text-emerald-800">1M+</p>
            <p className="text-lg text-gray-700 mt-2">Trees Planted</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
