/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html'
  ],
  darkMode: 'class',
  theme: {
    screens:{
      xs:'375px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
      'db-blue':'hsl(209, 23%, 22%)',
      'vdd-blue':'hsl(207, 26%, 17%)',
      'vdl-blue':'hsl(200, 15%, 8%)',
      'vdl-gray':'hsl(0, 0%, 52%)',
      'vll-gray':'hsl(0, 0%, 98%)',
      'white':'hsl(0, 0%, 100%)'
    },
    fontFamily:{
      'body':'Nunito, sans-serif',
    },
    extend: {
      fontSize:{
        'headers':'14px',
        'detail':'16px',
      }
    },
  },
  plugins: [],
}
