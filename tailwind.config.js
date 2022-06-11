/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'dark': {
                    '200': '#121212',
                    '100': '#282828',
                },
                'accent': {
                    '200': '#1FDF64',
                    '100': '#1ED760'
                }
            }
        }
    },
    plugins: [],
}
