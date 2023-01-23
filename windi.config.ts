import { defineConfig } from 'windicss/helpers'
// import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  darkMode: 'class',
  extract: {
    include: ['src/**/*.{svelte,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  // safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      fontFamily: {
        body: ['Unbounded', 'ui-sans-serif', 'system-ui'],
        over: ['Overpass', 'sans-serif'],
        unbounded: ['Unbounded', 'cursive'],
        sans: ['Work Sans', 'sans-serif', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        night: '#777777',
        teal: {
          100: '#096',
        },
      },
    },
  },
  shortcuts: {
    'a_navBar__item': {
      '@apply': 'p-0 my-auto align-baseline text-[14px] transition-all text-[#333333] dark:text-[#FFFFFF]',
      '&:hover': {
        '@apply': 'transition-all text-[#111111] dark:text-[#0F0]',
      }
    },
    'a_link': {
      '@apply': 'underline transition-all text-[#9f1239] dark:text-[#0F0] text-',
      '&:hover': {
        '@apply': 'underline-offset-2 decoration-4 transition-all'
      }
    },
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
})