// tailwind.config.ts

import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  // Define which files Tailwind should scan for class names
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Configure the container utility
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
      // Extend the default Tailwind color palette
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          50: "hsl(var(--primary-50))",
          100: "hsl(var(--primary-100))",
          200: "hsl(var(--primary-200))",
          300: "hsl(var(--primary-300))",
          400: "hsl(var(--primary-400))",
          500: "hsl(var(--primary-500))",
          600: "hsl(var(--primary-600))",
          700: "hsl(var(--primary-700))",
          800: "hsl(var(--primary-800))",
          900: "hsl(var(--primary-900))",
          950: "hsl(var(--primary-950))",
          DEFAULT: "hsl(var(--primary-500))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // Secondary colors for additional design flexibility
        secondary: {
          50: "hsl(var(--secondary-50))",
          100: "hsl(var(--secondary-100))",
          200: "hsl(var(--secondary-200))",
          300: "hsl(var(--secondary-300))",
          400: "hsl(var(--secondary-400))",
          500: "hsl(var(--secondary-500))",
          600: "hsl(var(--secondary-600))",
          700: "hsl(var(--secondary-700))",
          800: "hsl(var(--secondary-800))",
          900: "hsl(var(--secondary-900))",
          950: "hsl(var(--secondary-950))",
          DEFAULT: "hsl(var(--secondary-500))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // Accent colors for highlighting and emphasis
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
          DEFAULT: "hsl(var(--accent-500))",
          foreground: "hsl(var(--accent-foreground))",
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
        // Eucalyptus color palette for nature-inspired designs
        eucalyptus: {
          50: "hsl(var(--eucalyptus-50))",
          100: "hsl(var(--eucalyptus-100))",
          200: "hsl(var(--eucalyptus-200))",
          300: "hsl(var(--eucalyptus-300))",
          400: "hsl(var(--eucalyptus-400))",
          500: "hsl(var(--eucalyptus-500))",
          600: "hsl(var(--eucalyptus-600))",
          700: "hsl(var(--eucalyptus-700))",
          800: "hsl(var(--eucalyptus-800))",
          900: "hsl(var(--eucalyptus-900))",
          950: "hsl(var(--eucalyptus-950))",
        },
        // Semantic colors for different states and notifications
        success: {
          50: "hsl(var(--success-50))",
          100: "hsl(var(--success-100))",
          500: "hsl(var(--success-500))",
          900: "hsl(var(--success-900))",
        },
        // Azure color palette for sky-inspired designs
        azure: {
          50: "hsl(var(--azure-50))",
          100: "hsl(var(--azure-100))",
          200: "hsl(var(--azure-200))",
          300: "hsl(var(--azure-300))",
          400: "hsl(var(--azure-400))",
          500: "hsl(var(--azure-500))",
          600: "hsl(var(--azure-600))",
          700: "hsl(var(--azure-700))",
          800: "hsl(var(--azure-800))",
          900: "hsl(var(--azure-900))",
          950: "hsl(var(--azure-950))",
        },
        // Dandelion color palette for cheerful, sunny designs
        dandelion: {
          50: "hsl(var(--dandelion-50))",
          100: "hsl(var(--dandelion-100))",
          200: "hsl(var(--dandelion-200))",
          300: "hsl(var(--dandelion-300))",
          400: "hsl(var(--dandelion-400))",
          500: "hsl(var(--dandelion-500))",
          600: "hsl(var(--dandelion-600))",
          700: "hsl(var(--dandelion-700))",
          800: "hsl(var(--dandelion-800))",
          900: "hsl(var(--dandelion-900))",
          950: "hsl(var(--dandelion-950))",
        },
        // UFO color palette for futuristic or tech-inspired designs
        ufo: {
          50: "hsl(var(--ufo-50))",
          100: "hsl(var(--ufo-100))",
          200: "hsl(var(--ufo-200))",
          300: "hsl(var(--ufo-300))",
          400: "hsl(var(--ufo-400))",
          500: "hsl(var(--ufo-500))",
          600: "hsl(var(--ufo-600))",
          700: "hsl(var(--ufo-700))",
          800: "hsl(var(--ufo-800))",
          900: "hsl(var(--ufo-900))",
          950: "hsl(var(--ufo-950))",
        },
        // Information color palette for alerts and notifications
        info: {
          50: "hsl(var(--info-50))",
          100: "hsl(var(--info-100))",
          500: "hsl(var(--info-500))",
          900: "hsl(var(--info-900))",
        },
        // Warning color palette for cautionary messages
        warning: {
          50: "hsl(var(--warning-50))",
          100: "hsl(var(--warning-100))",
          500: "hsl(var(--warning-500))",
          900: "hsl(var(--warning-900))",
        },
        // Error color palette for critical messages and errors
        error: {
          50: "hsl(var(--error-50))",
          100: "hsl(var(--error-100))",
          500: "hsl(var(--error-500))",
          900: "hsl(var(--error-900))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // Define custom border radius values
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        'none': '0',
        'xs': '2px',
        'full': '9999px',
      },
      // Configure custom font families
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        display: ["var(--font-oswald)", "sans-serif"],
      },
      // Define custom spacing values
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
      // Configure custom font sizes
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
      // Define custom box shadow values
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      // Define custom keyframes for animations
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
      // Configure custom animations
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      // Add the new maxWidth utilities for character counts
      maxWidth: {
        'prose-45': '20em',  // Approximately 45 characters
        'prose-60': '27.5em',  // Approximately 60 characters
        'prose-75': '35em',  // Approximately 75 characters
      },
    },
  },
  // Add Tailwind plugins for additional functionality
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
} as Config

// Export the configuration for use in the project
export default config
