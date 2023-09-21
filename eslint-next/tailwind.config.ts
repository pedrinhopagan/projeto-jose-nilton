import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        mainPalette: {
          bg: 'var(--bg)',
          bgAlt: 'var(--bgAlt)',
          text: 'var(--text)',
          textLowlight: 'var(--textLowlight)',
          textAlt: 'var(--textAlt)',
          primaryColor: 'var(--primaryColor)',
          secondaryColor: 'var(--secondaryColor)',
          accentColor: 'var(--accentColor)',
          extraColor: 'var(--extraColor)',
        },
      },
    },
  },
  plugins: [],
}
export default config
