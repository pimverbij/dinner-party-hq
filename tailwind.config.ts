import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: '#FFFFFF',
				foreground: '#1D1D1F',
				primary: {
					DEFAULT: '#4361EE',
					foreground: '#FFFFFF',
				},
				secondary: {
					DEFAULT: '#1D1D1F',
					foreground: '#FFFFFF',
				},
				accent: {
					DEFAULT: '#F5F5F7',
					foreground: '#1D1D1F',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				dinner: {
					50: '#fef2f2',
					100: '#fde6e6',
					200: '#fbd0d0',
					300: '#f7acac',
					400: '#ef7878',
					500: '#e54d4d',
					600: '#d32f2f',
					700: '#b91c1c',
					800: '#991b1b',
					900: '#7f1d1d',
					950: '#450a0a',
				}
			},
      backgroundImage: {
        'gradient-diagonal': 'linear-gradient(135deg, #4361EE 0%, #3451D0 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
