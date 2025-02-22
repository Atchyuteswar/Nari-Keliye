module.exports = {
  // ...existing config
  plugins: [
    require('@tailwindcss/forms'),
  ],
  theme: {
    extend: {
      blur: {
        '4xl': '72px',
        '5xl': '96px',
      }
    }
  }
}