
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
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
				blue: {
					light: '#1EAEDB',
					DEFAULT: '#0057FF',
					dark: '#010C38'
				},
				highlight: '#33C3F0'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-blue': {
					'0%, 100%': { boxShadow: '0 0 0 0 rgba(14, 165, 233, 0.7)' },
					'50%': { boxShadow: '0 0 0 15px rgba(14, 165, 233, 0)' }
				},
				'flow': {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' }
				},
				'progress': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'circle-fill': {
					'0%': { backgroundColor: 'transparent' },
					'100%': { backgroundColor: '#33C3F0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'bounce-light': {
					'0%, 100%': { transform: 'translateY(0)', opacity: '0.8' },
					'50%': { transform: 'translateY(-5px)', opacity: '1' }
				},
				'particle-float': {
					'0%': { transform: 'translateY(0) translateX(0) rotate(0)' },
					'33%': { transform: 'translateY(-10px) translateX(10px) rotate(10deg)' },
					'66%': { transform: 'translateY(5px) translateX(-5px) rotate(-5deg)' },
					'100%': { transform: 'translateY(0) translateX(0) rotate(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-blue': 'pulse-blue 2s infinite',
				'flow': 'flow 4s linear infinite alternate',
				'progress': 'progress 1.5s ease-out forwards',
				'circle-fill': 'circle-fill 0.5s ease-out forwards',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'bounce-light': 'bounce-light 3s infinite ease-in-out',
				'particle-float': 'particle-float 10s infinite ease-in-out'
			},
			backgroundImage: {
				'gradient-blue': 'linear-gradient(90deg, #010C38 0%, #0057FF 100%, #33C3F0 150%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
