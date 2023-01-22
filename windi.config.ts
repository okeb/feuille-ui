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
    'a_navItem': {
      '@apply': 'p-0 my-auto align-baseline text-[14px] transition-all text-[#222222] dark:text-white',
      '&:hover': {
        '@apply': 'transition-all text-[#555555] dark:text-[#777777]',
      }
    },
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
})