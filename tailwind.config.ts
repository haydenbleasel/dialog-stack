import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './registry/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...fontFamily.mono],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      typography: (theme: (path: string) => string) => ({
        DEFAULT: {
          css: {
            h1: {
              maxWidth: '30rem',
              fontWeight: theme('fontWeight.bold'),
              fontSize: theme('fontSize.3xl'),
              lineHeight: theme('leading.tight'),
              letterSpacing: theme('letterSpacing.tighter'),
              marginBottom: theme('spacing.4'),
              '@media (min-width: 768px)': {
                fontSize: theme('fontSize.5xl'),
              },
              '@media (min-width: 1024px)': {
                lineHeight: theme('leading.[1.1]'),
              },
            },
            'h1 + p': {
              fontSize: theme('fontSize.lg'),
              color: theme('colors.muted.foreground'),
              maxWidth: '35rem',
              marginTop: 0,
            },
            table: {
              boxShadow: `0 0 0 1px ${theme('colors.border')}`,
              borderRadius: theme('borderRadius.md'),
              overflow: 'hidden',
              p: {
                margin: 0,
              },
              th: {
                paddingTop: '0.5714286em',
                paddingRight: '0.5714286em',
                paddingBottom: '0.5714286em',
                paddingLeft: '0.5714286em',
                backgroundColor: theme('colors.secondary.DEFAULT'),
                '&:not(:last-child)': {
                  borderRightWidth: '1px',
                  borderRightColor: theme('colors.border'),
                },
              },
              'tbody td, tfoot td': {
                paddingLeft: '0.5714286em',
                '&:not(:last-child)': {
                  borderRightWidth: '1px',
                  borderRightColor: theme('colors.border'),
                },
              },
            },
            code: {
              backgroundColor: theme('colors.secondary.DEFAULT'),
              paddingLeft: theme('spacing.2'),
              paddingRight: theme('spacing.2'),
              paddingTop: theme('spacing.1'),
              paddingBottom: theme('spacing.1'),
              borderRadius: theme('borderRadius.sm'),
              '&::before, &::after': {
                display: 'none',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [typography, animate],
} satisfies Config;
