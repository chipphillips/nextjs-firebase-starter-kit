import type { Config } from "tailwindcss"

// This configuration file defines the Tailwind CSS settings for your project
const config: Config = {
  // Enable dark mode using the 'class' strategy
  darkMode: ["class"],
  // Specify which files Tailwind should scan for classes
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // ... (other color definitions)
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      fontSize: {
        "2xl": "2rem",
        xl: "1.5rem",
        lg: "1.25rem",
        md: "1rem",
        sm: "0.875rem",
        xs: "0.75rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Fira Code", "monospace"],
        display: ["Oswald", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      spacing: {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "7": "1.75rem",
        "8": "2rem",
      },
      screens: {
        sm: {"min": "640px", "max": "767px"},
        md: {"min": "768px", "max": "1023px"},
        lg: {"min": "1024px", "max": "1279px"},
        xl: {"min": "1280px", "max": "1535px"},
        "2xl": {"min": "1536px"},
      },
    },
  },
  // Add the tailwindcss-animate plugin for additional animation utilities
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
  // Add this to your config if needed
  safelist: [
    'bg-red-500',
    'text-3xl',
    'lg:text-4xl',
  ],
} as Config;

// Export the configuration for use in your Tailwind CSS setup
export default config;