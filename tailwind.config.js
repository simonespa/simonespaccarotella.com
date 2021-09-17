module.exports = {
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    options: {
      keyframes: true,
    }
  },
  mode: 'jit',
  darkMode: 'media', // false, or 'media', or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
