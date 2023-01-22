import { defineConfig } from 'windicss/helpers'
// import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  darkMode: 'media',
  extract: {
    include: ['src/**/*.{svelte,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  // safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      fontFamily: {
        body: ['Open Sans']
      }
      // colors: {
      //   teal: {
      //     100: '#096',
      //   },
      },
    },
  },
  // plugins: [formsPlugin],
// }
)