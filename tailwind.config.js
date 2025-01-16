module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      animation: {
        fadeInLeft: "fadeInLeft 1s ease-in-out",
        fadeInRight: "fadeInRight 1s ease-in-out",
        fadeUp: 'fadeUp 2s ease-out',
      },
      keyframes: {
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
