/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    // container: {
    // 	center: true,
    // 	padding: '2rem',
    // 	screens: {
    // 		'2xl': '1400px'
    // 	}
    // },
    extend: {
      colors: {
        "brand-primary": "#04868j",
        brand: "#4C60DC",
        "brand-secondary": "#93ebc9",
        "brand-green": "#12d395",
        "brand-yellow": "#f1c917",
        "brand-red": "#ab3b2e",
        "brand-orange": "#ef903a",
        //
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#4C60DC", // Main blue
          600: "#4C60DC", // Main brand color
          700: "#4C60DC",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        accent: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
      },
      backgroundColor: {
        body: "#f8fafc",
        card: "#ffffff",
        muted: "#f1f5f9",
      },
      backgroundImage: {
        "gradient-electric":
          "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
        "gradient-electric-dark":
          "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
        "gradient-spark": "linear-gradient(135deg, #eab308 0%, #ca8a04 100%)",
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
