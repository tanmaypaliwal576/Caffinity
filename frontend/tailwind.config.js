/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        cream: "#F5EFE6", // Starbucks-style cream background
        coffee: "#1C3D31", // Deep green
        emeraldDark: "#064E3B", // Button hover green
      },

      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scaleHover: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
      },

      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        fadeIn: "fadeIn 1s ease-out forwards",
        scaleHover: "scaleHover 0.3s ease-out",
      },

      boxShadow: {
        elegant: "0 10px 30px rgba(0,0,0,0.15)",
      },
    },
  },

  plugins: [],
};
