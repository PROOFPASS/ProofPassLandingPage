import type { Config } from "tailwindcss"

const config = {
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#FAFBFC",
        foreground: "#1F2937",
        primary: {
          DEFAULT: "#5B8DEF",
          foreground: "#FFFFFF",
          50: "#EEF4FE",
          100: "#D6E4FC",
          500: "#5B8DEF",
          600: "#4A7CE0",
        },
        secondary: {
          DEFAULT: "#47D16C",
          foreground: "#FFFFFF",
          50: "#E8FAF0",
          100: "#C7F4D9",
          500: "#47D16C",
          600: "#38B557",
        },
        accent: {
          DEFAULT: "#FF6B58",
          foreground: "#FFFFFF",
          50: "#FFE9E6",
          100: "#FFC7C0",
          500: "#FF6B58",
          600: "#FF4D38",
        },
        warning: {
          DEFAULT: "#FFC839",
          foreground: "#1F2937",
        },
        muted: {
          DEFAULT: "#F3F4F6",
          foreground: "#6B7280",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1F2937",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
