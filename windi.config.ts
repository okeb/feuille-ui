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
        inter: ['Inter', 'ui-sans-serif', 'system-ui'],
        prest: ['Press Start 2P', 'VT323', 'monospace'],
        vt: ['VT323', 'monospace'],
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
      '@apply': 'p-0 my-auto align-baseline text-[14px] transition-all text-[#333333] dark:text-[#EFF7FF9D]',
      '&:hover': {
        '@apply': 'transition-all text-[#111111] dark:text-[#0F0]',
      }
    },
    'a_link': {
      '@apply': 'underline transition-all text-[#9f1239] dark:text-[#0F0]',
      '&:hover': {
        '@apply': 'underline-offset-2 decoration-4 transition-all'
      }
    },
    'a_button-secondary': {
      '@apply': 'text-sm h-10 pl-4 pr-3 rounded-md gap-1 font-semibold bg-slate-900 border-slate-600 text-white inline-flex items-center border justify-center select-none disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-white transition ease-in-out duration-200',
      '&:hover': {
        '@apply': 'bg-slate-800'
      },
      '&:focus': {
        '@apply': 'outline-none bg-slate-800 ring-2 ring-slate-700 '
      }
    },
    'a_title-lg': {
      // before:bg-[length:200%] before:bg-clip-text before:text-transparent before:content-['The_next_generation_of_writing_emails'] before:bg-shine  before:absolute before:left-0 before:top-0 before:w-full before:animate-[shine_2s_ease-in-out]
      //  before:animate-[shine_2s_ease-in-out]
      '@apply': 'relative mb-8 dark:text-white/80 text-[38px] leading-[46px] md:text-[70px] md:leading-[85px] tracking-[-1.024px;] text-gray-800 font-bold font-inter leading-none transition-all',
      '&:hover': {
        '@apply': 'underline transition-all'
      }
    },
    'a_subtitle': 'dark:text-[#EFF7FF9D] <md:leading-5 <md:text-[14px] md:text-2xl align-top font-inter max-w-[591px]',
    'as-center': 'text-center mx-auto px-0',
    'as-gradiant': 'bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent dark:text-transparent',
    'as-metalic': 'bg-gradient-to-br from-gray-100 dark:from-gray-300 via-gray-300 dark:via-white to-gray-200 dark:to-gray-400 bg-clip-text text-transparent dark:text-transparent transition-colors',
    'as-metal': 'bg-gradient-to-br from-gray-100 dark:from-white via-gray-300 dark:via-gray-200 to-gray-200 dark:to-gray-500 bg-clip-text text-transparent dark:text-transparent transition-colors',
  },
})