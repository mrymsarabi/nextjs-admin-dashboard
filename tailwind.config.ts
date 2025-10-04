/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
        // Brand
        brand: {
          DEFAULT: "#6366F1", // Indigo-500
          dark: "#4F46E5",    // Indigo-600
          light: "#818CF8",   // Indigo-400
        },
        // Functional
        success: "#10B981",  // Emerald-500
        warning: "#F59E0B",  // Amber-500
        danger: "#EF4444",   // Red-500
        info: "#0EA5E9",     // Sky-500
        accent: {
          pink: "#EC4899",   // Pink-500
          purple: "#A855F7", // Purple-500
        },
        // Neutral / base
        bg: {
          DEFAULT: "#F9FAFB", // light bg
          card: "#FFFFFF",    // card bg
        },
        text: {
          primary: "#111827",   // Gray-900
          secondary: "#6B7280", // Gray-500
        },
        border: "#E5E7EB", // Gray-200
      },
    },
  },
  plugins: [],
}
