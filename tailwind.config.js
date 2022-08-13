const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./resources/view/**/*.blade.php", "./resources/js/**/*.vue"],
    theme: {
        extend: {
            fontFamily: {
                caveat: ["Caveat"],
                sans: ["Urbanist", defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
