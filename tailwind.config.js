/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Keep this to scan for class names in your files
  theme: {
    extend: {
      // Adding custom keyframes and animation for the image
      keyframes: {
        updown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        updown: 'updown 3s ease-in-out infinite', // Define the custom animation
      },
    },
  },
  plugins: [],
}
