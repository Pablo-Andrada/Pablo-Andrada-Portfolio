/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                custom: {
                    purple: "#8c52ff",
                    purple_darker: "#6c23ff",
                },
            },
            screens: {
                xs: "428px",
                sl: "520px",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
