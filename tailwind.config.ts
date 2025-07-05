import type {Config} from "tailwindcss";

import tailwindcss_animate from "tailwindcss-animate";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {

            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                background: "var(--background)",
                "java-red": "#E11E22",
                "java-blue": "#0C6FB6",
                "java-grey": "#5C5C5C",
                "java-yellow": "#ED8B00",
                
                // Dynamic theme colors
                "text-primary": "var(--text-primary)",
                "text-secondary": "var(--text-secondary)",
                "surface-primary": "var(--surface-primary)",
                "surface-secondary": "var(--surface-secondary)",
                "card-bg": "var(--card-bg)",
                "border-color": "var(--border-color)",
            },
            fontSize: {
                "h1": "2.5rem", // 40px
                "h2": "2rem", // 32px
                "h3": "1.75rem", // 28px
                "body": "1rem", // 16px
                "small": "0.875rem", // 14px
            },
            borderRadius: {
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: "calc(var(--radius) - 4px)",
            }
        },
    },
    plugins: [tailwindcss_animate],
} satisfies Config;
