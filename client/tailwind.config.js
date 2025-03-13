/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Dark Blue
        secondary: "#3B82F6", // Blue
        accent: "#60A5FA", // Light Blue
        background: "#F3F4F6", // Light Gray (almost white)
        white: "#f9fafb", // Pure White
        lightBlue: "#BFDBFE", // Very Light Blue
        darkBlue: "#1E40AF", // Darker Blue
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(59, 130, 246, 0.1)",
        success: "#10B981",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        'glow': "0px 0px 70px 10px rgba(30,59,138,0.9)",
        'glow-soft': "0px 0px 15px 2px rgba(30,59,138,0.5)",
        'glow-inset': "inset 0px 0px 15px 2px rgba(30,59,138,0.2)",

      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}