/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#222021',
        slate: '#3E424B',
        'matrix-dark': '#0b0f0a',
        neon: '#00FF41',
        'neon-dim': '#00c43a',
        cyan: '#5EEAD4'
      },
      fontFamily: {
        // Global typography tokens (used via `font-sans`, `font-mono`, etc.)
        // Keep this aligned with src/styles/index.css @imports.
        sans: ['"Space Grotesk"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'monospace'],
        display: ['"Orbitron"', '"Share Tech Mono"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        monoTech: ['"Share Tech Mono"', 'monospace']
      },
      borderRadius: {
        // Single radius token used across cards/buttons/inputs
        // (matches Tailwind's rounded-2xl: 1rem)
        subtle: '1rem'
      },
      boxShadow: {
        'soft': '0 14px 40px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
};
