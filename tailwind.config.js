/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'main-theme': 'rgb(140, 200, 80)',
                'secondary': '#63DE4E',
                'pop': '#B950C7',
                'dark-text': '#32471D',
                'light-text': '#B1D092',

            }
        },
    },
    plugins: [],
}
