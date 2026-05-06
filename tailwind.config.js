/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#ffffff',
        bgSecondary: '#f8fafc',
        bgSurface: '#ffffff',
        bgSurfaceHover: '#f1f5f9',
        textPrimary: '#0f172a',
        textSecondary: '#475569',
        textMuted: '#64748b',
        accentPrimary: '#4f46e5',
        accentSecondary: '#0ea5e9',
        borderColor: '#e2e8f0',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #4f46e5 0%, #0ea5e9 100%)',
        'soft-glow': 'radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.05) 0%, transparent 70%)',
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        card: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
