import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — update these to retheme the entire site
        navy:  { DEFAULT: '#1F3964', light: '#2E74B5', dark: '#162847' },
        gold:  { DEFAULT: '#C9A84C', light: '#E8C96A', dark: '#A8872E' },
        sky:   { DEFAULT: '#EFF4FB', dark: '#BDD7EE' },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
