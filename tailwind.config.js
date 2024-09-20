/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily : {
        'Merriweather': ['Merriweather', 'serif'],
        'Fascinate': ['Fascinate Inline', 'system-ui'],
        'PT': ['PT Serif', 'serif'],
        'Roboto': ['Roboto Mono', 'monospace'],
        'Noto': ['Noto Sans', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif']
        
      }
    },
  },
  plugins: [],
}

