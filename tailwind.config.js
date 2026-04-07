/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        barlow: ['"Barlow Condensed"', '"Arial Narrow"', 'Arial', 'sans-serif'],
        inter: ['Inter', 'Arial', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Porsche Design System Colors
        pd: {
          // Dark theme backgrounds
          'bg-base':        '#0E0E12',
          'bg-surface':     '#212225',
          'bg-elevated':    '#292934',
          'bg-black':       '#000000',
          // Light theme backgrounds
          'bg-light':       '#FFFFFF',
          'bg-light-surface': '#EEEFF2',
          // Text — dark theme
          'text-primary':   '#FBFCFF',
          'text-secondary': '#AFB0B3',
          'text-muted':     '#88898C',
          'text-disabled':  '#7E7F82',
          // Text — light theme
          'text-dark':      '#010205',
          'text-dark-secondary': '#535457',
          'text-dark-muted': '#6B6D70',
          // Borders
          'border-dark':    '#404044',
          'border-light':   '#D8D8DB',
          // Interactive
          'focus':          '#1A44EA',
          // Brand accent
          'gold':           '#EBD698',
          // Semantic
          'error':          '#FC4040',
          'success':        '#09D087',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        'pd-sm': '4px',
        'pd-md': '8px',
        'pd-lg': '12px',
      },
      transitionDuration: {
        'pd-short': '250',
        'pd-moderate': '400',
        'pd-long': '600',
      },
      transitionTimingFunction: {
        'pd': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
