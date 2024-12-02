// tailwind.config.js
// import baseConfig from '@repo/tailwind-config/tailwind.config.js'
import baseConfig from '../../packages/tailwind-config/tailwind.config.js'

import _ from 'lodash'

export default _.merge(baseConfig, {
  // Your app-specific config overrides
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary/ brand colors
        "base-50": "#F8F8FF",
        "base-100": "#F2F3FF",
        "base-200": "#DFE5FA",
        "base-300": "#B4B9FF",
        "base-400": "#907EFE",
        "base-500": "#7857FE",
        "base-600": "#6947DB",
        "base-700": "#422693",
        "base-800": "#201755",
        'base-800-t': "#2C3462",
        "base-900": "#170E31",
        "base-950": "#070114",

        //* Light mode
        // Text
        "theme-light-text-primary": "#2C3462", // base-800-t
        "theme-light-text-secondary": "#475569", // slate-600
        "theme-light-text-tertiary": "#64748B", // slate-500
        "theme-light-text-notes": "#94A3B8", // slate-400

        // Background
        "theme-light-background-primary": "#F8F8FF", // base-50
        "theme-light-background-secondary": "#F2F3FF", // base-100

        // Stroke
        "theme-light-stroke": "#DFE5FA", // base-200

        //* Night mode
        // Text
        "theme-night-text-primary": "rgba(223,229,250,0.90)",
        "theme-night-text-secondary": "rgba(223,229,250,0.75)",
        "theme-night-text-tertiary": "rgba(223,229,250,0.35)",
        "theme-night-text-notes": "rgba(223,229,250,0.5)",

        // Background
        "theme-night-background-primary": "rgba(223,229,250,0.02)",
        "theme-night-background-secondary": "rgba(223,229,250,0.02)",

        // Stroke
        "theme-night-stroke": "rgba(223,229,250,0.09)",
      },
    }
  }
})