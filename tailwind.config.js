module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'text-wiggle': 'wiggle 1s ease-in-out infinite',
        'gradient-x': 'gradient-x 8s ease infinite', // shorter duration for more noticeable movement
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-size': '400% 400%', 'background-position': 'left center' },
          '50%': { 'background-position': 'right center' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #a2d2ff, #4d96ff)', // more vibrant colors for noticeable movement
      },
      borderRadius: {
        'xl': '1rem', // larger border-radius for rounded corners
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
