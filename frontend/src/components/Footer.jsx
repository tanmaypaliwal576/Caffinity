import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-950 to-green-900 text-white pt-16 pb-10 mt-0">
      {/* ======= TOP FOOTER CONTENT ======= */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-14">
        {/* BRAND + SOCIAL */}
        <div>
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img
              src={logo}
              className="h-12 w-12 drop-shadow-lg"
              alt="Verdant"
            />
            <h2 className="text-3xl font-bold tracking-wide">Verdant</h2>
          </Link>

          <p className="text-gray-300 mt-4 leading-relaxed max-w-sm">
            Crafted with love. Rooted in sustainability. Your daily cup of
            warmth, brewed with passion.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
            >
              <FaInstagram className="text-xl" />
            </a>

            {/* Twitter */}
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
            >
              <FaTwitter className="text-lg" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
            >
              <FaFacebookF className="text-lg" />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-5 border-b border-white/20 pb-2">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-white transition">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/rewards" className="hover:text-white transition">
                Rewards
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* VISIT US */}
        <div>
          <h3 className="text-xl font-semibold mb-5 border-b border-white/20 pb-2">
            Visit Us
          </h3>

          <p className="text-gray-300 leading-relaxed">
            We’re more than a coffee shop. Experience warmth, community, and
            creativity in every corner.
          </p>

          <p className="mt-4 text-gray-400 text-sm">
            Open Daily: 8:00 AM – 10:00 PM
          </p>
        </div>
      </div>

      {/* ======= DIVIDER LINE ======= */}
      <div className="border-t border-white/10 mt-14 pt-6"></div>

      {/* ======= COPYRIGHT ======= */}
      <p className="text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Verdant Coffee. Crafted with love ☕
      </p>
    </footer>
  );
}
