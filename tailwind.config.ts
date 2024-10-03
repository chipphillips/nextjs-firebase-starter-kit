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
  // Set a prefix for all Tailwind classes (empty string means no prefix)
  prefix: "",
  theme: {
    // Configure the container class
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    // Define custom font sizes
    fontSize: {
      "2xl": "2rem",
      "xl": "1.5rem",
      "lg": "1.25rem",
      "md": "1rem",
      "sm": "0.875rem",
      "xs": "0.75rem",
    },
    // Define custom font families
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["Fira Code", "monospace"],
      display: ["Oswald", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    // Define custom spacing
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
    // Define custom screen breakpoints
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
    // Extend the default Tailwind theme
    extend: {
      // Custom color palette for your application
      colors: {
        // Colors for various UI elements
        border: "hsl(var(--border))",      // Dandelion 500
        input: "#1D81DC",       // BrightNavyBlue 500
        ring: "#FF372F",        // CoralRed 500
        background: "hsl(var(--background))",  // Original light-gray
        foreground: "hsl(var(--foreground))",  // Original dark font color
        transparent: "transparent",

        // Primary color scheme (using BrightNavyBlue and CoralRed)
        primary: {
          DEFAULT: "#FF372F", // CoralRed 500
          blue: "#1D81DC",    // BrightNavyBlue 500
          navy: "#0F416E",    // Original navy
        },

        // Secondary color scheme (using BrightNavyBlue, Dandelion, Eucalyptus)
        secondary: {
          DEFAULT: "#1D81DC",   // BrightNavyBlue 500
          teal: "#00F088",      // Eucalyptus 600
          yellow: "#E1E934",    // Dandelion 500
          dark: "#1E1E1E",      // Original dark
          green: "#229973",     // Eucalyptus 700
          "light-blue": "#B1DDF6", // Original light-blue
          "darker-blue": "#006BA6", // Original darker-blue
          "light-gray": "#F5F5F5",  // Original light-gray
        },

        // Font colors
        font: {
          dark: "#1E1E1E", // Original dark font color
          light: "#FEFBFB", // Snow 500
          gray: "#808080", // Gray 500
          white: "#FFFFFF", // White 500
        },

        // Blue color variations (mapped to BrightNavyBlue)
        blue: {
          "very-light": "#E8F3FC", // BrightNavyBlue 50
          light: "#A5CDF3",      // BrightNavyBlue 200
          sky: "#73B2ED",        // BrightNavyBlue 300
          medium: "#1D81DC",     // BrightNavyBlue 500
          dark: "#0C345A",       // BrightNavyBlue 800
          navy: "#061A2D",       // BrightNavyBlue 900
        },

        // Red color variations (mapped to CoralRed)
        red: {
          "light-pink": "#FFD8D6",  // CoralRed 100
          "salmon-pink": "#FF8985", // CoralRed 300
          coral: "#FF372F",         // CoralRed 500
          bright: "#F00800",        // CoralRed 600
          dark: "#B80600",          // CoralRed 700
        },

        // Updated UI-specific colors using custom palette
        destructive: {
          DEFAULT: "#FF372F",         // CoralRed 500
          foreground: "#FFD8D6",      // CoralRed 100 (light foreground for contrast)
        },
        muted: {
          DEFAULT: "#FEFBFB",         // Snow 500 (soft, muted white)
          foreground: "#1E1E1E",      // Dark font (for readable contrast)
        },
        accent: {
          DEFAULT: "#2FFF9F",         // Eucalyptus 500 (bright accent)
          foreground: "#003D29",      // Eucalyptus 900 (darker green for contrast)
        },
        popover: {
          DEFAULT: "#2F8FFF",         // BrilliantAzure 500 (bright blue for popovers)
          foreground: "#EBF2FF",      // BrilliantAzure 50 (light background for popover content)
        },
        card: {
          DEFAULT: "#5375CB",         // IndigoRainbow 300 (soft indigo for cards)
          foreground: "#E4E9F7",      // IndigoRainbow 50 (light indigo for card text)
        },

        // Custom Colors from the palette
        IndigoRainbow: {
          50: "#E4E9F7",
          100: "#C4D0ED",
          200: "#8EA4DC",
          300: "#5375CB",
          400: "#3252A4",
          500: "#203569",
          600: "#1A2B56",
          700: "#131F3F",
          800: "#0D162B",
          900: "#060A14",
          950: "#04060C",
        },
        BrightNavyBlue: {
          50: "#E8F3FC",
          100: "#D2E6F9",
          200: "#A5CDF3",
          300: "#73B2ED",
          400: "#4699E7",
          500: "#1D81DC",
          600: "#1766B0",
          700: "#114C83",
          800: "#0C345A",
          900: "#061A2D",
          950: "#030D17",
        },
        CoralRed: {
          50: "#FFEBEB",
          100: "#FFD8D6",
          200: "#FFB0AD",
          300: "#FF8985",
          400: "#FF5C57",
          500: "#FF372F",
          600: "#F00800",
          700: "#B80600",
          800: "#7A0400",
          900: "#3D0200",
          950: "#1F0100",
        },
        Eucalyptus: {
          50: "#EBFFF9",
          100: "#D6FFF1",
          200: "#ADFFE1",
          300: "#85FFCE",
          400: "#57FFB6",
          500: "#2FFF9F",
          600: "#00F088",
          700: "#00B86E",
          800: "#007A4E",
          900: "#003D29",
          950: "#001F15",
        },
        Snow: {
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FEFBFB",
          400: "#FEFBFB",
          500: "#FEFBFB",
          600: "#EDA8A6",
          700: "#E1564C",
          800: "#B42818",
          900: "#5C150A",
          950: "#300B03",
        },
        BrilliantAzure: {
          50: "#EBF2FF",
          100: "#D6E7FF",
          200: "#ADCFFF",
          300: "#85BAFF",
          400: "#57A2FF",
          500: "#2F8FFF",
          600: "#006CF0",
          700: "#0050B8",
          800: "#00337A",
          900: "#00183D",
          950: "#000C1F",
        },
        Dandelion: {
          50: "#EBF9FF",
          100: "#D3D1FF",
          200: "#EDA3FF",
          300: "#FF7AB6",
          400: "#FF824D",
          500: "#E1E934",
          600: "#E64500",
          700: "#AD004E",
          800: "#5A0070",
          900: "#030038",
          950: "#00151F",
        },
        UFOGreen: {
          50: "#FFE5EE",
          100: "#FFCCFE",
          200: "#C099FF",
          300: "#6188FF",
          400: "#2EE7FF",
          500: "#1DDC78",
          600: "#00B0C7",
          700: "#002594",
          800: "#270066",
          900: "#330032",
          950: "#190009",
        },
      },
      // Custom border radius values
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Custom keyframe animations
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
      // Custom animation definitions
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // Add the tailwindcss-animate plugin for additional animation utilities
  plugins: [require("tailwindcss-animate")],
}

// Export the configuration for use in your Tailwind CSS setup
export default config