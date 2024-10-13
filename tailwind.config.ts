// tailwind.config.ts

import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Define color variables using HSL values for easy manipulation
        border: "hsl(var(--border))", 
        input: "hsl(var(--input))", 
        ring: "hsl(var(--ring))", 
        // Updated background colors
        background: {
          DEFAULT: "hsl(var(--background))",
          light: "hsl(var(--background-light))",
          dark: "hsl(var(--background-dark))",
          muted: "hsl(var(--background-muted))",
        },
        // Updated foreground colors
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          muted: "hsl(var(--foreground-muted))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // Secondary colors
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          background: "hsl(var(--secondary-background))",
          light: "hsl(var(--secondary-light))",
          dark: "hsl(var(--secondary-dark))",
          teal: "hsl(var(--secondary-teal))",
          yellow: "hsl(var(--secondary-yellow))",
          green: "hsl(var(--secondary-green))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // Accent colors with a range of shades
        accent: {
          50: "hsl(var(--accent-50))",
          100: "hsl(var(--accent-100))",
          200: "hsl(var(--accent-200))",
          300: "hsl(var(--accent-300))",
          400: "hsl(var(--accent-400))",
          500: "hsl(var(--accent-500))",
          600: "hsl(var(--accent-600))",
          700: "hsl(var(--accent-700))",
          800: "hsl(var(--accent-800))",
          900: "hsl(var(--accent-900))",
          950: "hsl(var(--accent-950))",
        },
        // Grey scale for various UI elements
        grey: {
          50: "hsl(var(--grey-50))",
          100: "hsl(var(--grey-100))",
          200: "hsl(var(--grey-200))",
          300: "hsl(var(--grey-300))",
          400: "hsl(var(--grey-400))",
          500: "hsl(var(--grey-500))",
          600: "hsl(var(--grey-600))",
          700: "hsl(var(--grey-700))",
          800: "hsl(var(--grey-800))",
          900: "hsl(var(--grey-900))",
          950: "hsl(var(--grey-950))",
        },
        // Semantic colors for different states and notifications
        success: {
          50: "hsl(var(--success-50))",
          100: "hsl(var(--success-100))",
          500: "hsl(var(--success-500))",
          900: "hsl(var(--success-900))",
        },
        warning: {
          50: "hsl(var(--warning-50))",
          100: "hsl(var(--warning-100))",
          500: "hsl(var(--warning-500))",
          900: "hsl(var(--warning-900))",
        },
        error: {
          50: "hsl(var(--error-50))",
          100: "hsl(var(--error-100))",
          500: "hsl(var(--error-500))",
          900: "hsl(var(--error-900))",
        },
        info: {
          50: "hsl(var(--info-50))",
          100: "hsl(var(--info-100))",
          500: "hsl(var(--info-500))",
          900: "hsl(var(--info-900))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        // Keep existing color palettes
        BrightNavyBlue: {
          50: "hsl(208, 86%, 95%)",
          100: "hsl(208, 83%, 91%)",
          200: "hsl(209, 76%, 80%)",
          300: "hsl(209, 76%, 74%)",
          400: "hsl(209, 76%, 66%)",
          500: "hsl(209, 77%, 49%)",
          600: "hsl(209, 76%, 40%)",
          700: "hsl(209, 76%, 29%)",
          800: "hsl(209, 76%, 20%)",
          900: "hsl(209, 76%, 13%)", // This is a dark navy color
          950: "hsl(209, 76%, 7%)",
        },
        IndigoRainbow: {
          50: "hsl(225, 54%, 93%)", // #E8ECFA
          100: "hsl(223, 53%, 85%)", // #CED5F1
          200: "hsl(223, 53%, 71%)", // #9EACE3
          300: "hsl(223, 54%, 55%)", // #6A80D4
          400: "hsl(224, 54%, 41%)", // #4058C5
          500: "hsl(224, 54%, 27%)", // #2A3B82
          600: "hsl(224, 54%, 23%)", // #24326E
          700: "hsl(224, 54%, 16%)", // #19234D
          800: "hsl(224, 54%, 11%)", // #111834
          900: "hsl(224, 54%, 6%)", // #090C1B
          950: "hsl(224, 54%, 4%)", // #060812
        },
        CoralRed: {
          50: "hsl(2, 100%, 95%)",
          100: "hsl(2, 100%, 89%)",
          200: "hsl(2, 100%, 84%)",
          300: "hsl(2, 100%, 77%)",
          400: "hsl(2, 100%, 67%)",
          500: "hsl(2, 100%, 59%)",
          600: "hsl(357, 100%, 47%)",
          700: "hsl(357, 100%, 36%)",
          800: "hsl(357, 100%, 24%)",
          900: "hsl(357, 100%, 13%)",
          950: "hsl(357, 100%, 6%)",
        },
        Eucalyptus: {
          50: "hsl(162, 100%, 95%)",
          100: "hsl(162, 100%, 89%)",
          200: "hsl(162, 100%, 84%)",
          300: "hsl(162, 100%, 77%)",
          400: "hsl(162, 100%, 67%)",
          500: "hsl(162, 100%, 59%)",
          600: "hsl(154, 100%, 47%)",
          700: "hsl(154, 100%, 36%)",
          800: "hsl(154, 100%, 24%)",
          900: "hsl(154, 100%, 13%)",
          950: "hsl(154, 100%, 6%)",
        },
        Snow: {
          50: "hsl(0, 0%, 100%)",
          100: "hsl(0, 0%, 100%)",
          200: "hsl(0, 0%, 100%)",
          300: "hsl(0, 1%, 99%)",
          400: "hsl(0, 1%, 99%)",
          500: "hsl(0, 1%, 99%)",
          600: "hsl(1, 64%, 78%)",
          700: "hsl(3, 72%, 59%)",
          800: "hsl(5, 75%, 41%)",
          900: "hsl(6, 78%, 20%)",
          950: "hsl(7, 80%, 10%)",
        },
        BrilliantAzure: {
          50: "hsl(217, 100%, 96%)",
          100: "hsl(217, 100%, 92%)",
          200: "hsl(217, 100%, 86%)",
          300: "hsl(217, 100%, 81%)",
          400: "hsl(217, 100%, 74%)",
          500: "hsl(217, 100%, 66%)",
          600: "hsl(216, 100%, 47%)",
          700: "hsl(216, 100%, 36%)",
          800: "hsl(216, 100%, 24%)",
          900: "hsl(216, 100%, 12%)",
          950: "hsl(216, 100%, 6%)",
        },
        Dandelion: {
          50: "hsl(198, 100%, 96%)",
          100: "hsl(253, 100%, 90%)",
          200: "hsl(282, 100%, 86%)",
          300: "hsl(326, 100%, 73%)",
          400: "hsl(21, 100%, 66%)",
          500: "hsl(63, 80%, 56%)",
          600: "hsl(18, 100%, 45%)",
          700: "hsl(326, 100%, 34%)",
          800: "hsl(288, 100%, 22%)",
          900: "hsl(240, 100%, 1%)",
          950: "hsl(196, 100%, 6%)",
        },
        UFOGreen: {
          50: "hsl(344, 100%, 95%)",
          100: "hsl(312, 100%, 93%)",
          200: "hsl(267, 100%, 80%)",
          300: "hsl(227, 100%, 74%)",
          400: "hsl(187, 100%, 66%)",
          500: "hsl(149, 77%, 49%)",
          600: "hsl(188, 100%, 39%)",
          700: "hsl(225, 100%, 29%)",
          800: "hsl(270, 100%, 20%)",
          900: "hsl(300, 100%, 20%)",
          950: "hsl(330, 100%, 10%)",
        },
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        'none': '0',
        'xs': '2px',
        'full': '9999px',
      },
      fontFamily: {
        // Use string for font family names to avoid TypeScript errors
        sans: ["var(--font-inter)", ...fontFamily.sans] as string[],
        display: ["var(--font-oswald)", "sans-serif"] as string[],
      },
      spacing: {
        "container-max": "1200px",
        "container-padding": "50px",
        "4": "4px",
        "8": "8px",
        "12": "12px",
        "16": "16px",
        "24": "24px",
        "32": "32px",
        "40": "40px",
        "48": "48px",
        "64": "64px",
        "80": "80px",
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px', // Added a larger font size option
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
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
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
}

// Export the configuration for use in the project
export default config