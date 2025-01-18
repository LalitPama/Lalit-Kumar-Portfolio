module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        lightBackground: "#f8f9fa", // Light mode background
        lightText: "#212529", // Light mode text
        darkBackground: "#253D5B", // Dark mode background
        darkText: "#f8f9fa", // Dark mode text
        darkCard: "#1B2B44", // Dark mode card background
      },
    },
  },
  plugins: [],
};
