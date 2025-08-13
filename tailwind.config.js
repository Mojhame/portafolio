// tailwind.config.js
module.exports = {
    darkMode: 'class',
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
        './node_modules/@nuxt/ui/dist/**/*.{js,mjs}'
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    400: '#34d399',
                    500: '#10b981',
                    600: '#059669'
                },
                dark: {
                    800: '#1f2937',
                    900: '#111827'
                }
            }
        },
    },
    plugins: [],
}