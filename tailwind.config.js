/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Pink : 'hsl(322, 100%, 66%)',
        LightPink: 'hsl(321, 100%, 78%)',
        LightRed: 'hsl(0, 100%, 63%)',
        DarkCyan: 'hsl(192, 100%, 9%)',
        PaleBlue: 'hsl(207, 100%, 98%)',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        OpenSans: ['Open Sans', 'serif'],
      },
      backgroundImage: {
        'footer-top-desktop': './images/bg-footer-top-desktop.svg',
        'footer-top-mobile': './images/bg-footer-top-mobile.svg',
        'bottom-section-desktop-1' : './images/bg-section-bottom-desktop-1.svg',
        'bottom-section-desktop-2' : './images/bg-section-bottom-desktop-2.svg',
        'bottom-section-mobile-1' : './images/bg-section-bottom-mobile-1.svg',
        'bottom-section-mobile-2' : './images/bg-section-bottom-mobile-2.svg',
        'top-section-desktop-1' : './images/bg-section-top-desktop-1.svg',
        'top-section-desktop-2' : './images/bg-section-top-desktop-2.svg',
        'top-section-mobile-1' : './images/bg-section-top-mobile-1.svg',
        'top-section-mobile-2' : './images/bg-section-top-mobile-2.svg',

      }
    },
  },
  plugins: [],
}

