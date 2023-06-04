const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: "class",
    theme: {
        extend: {
            important: true,
            container: {
                center: true,
                padding: "2rem",
                screens: {
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                },
            },
            screens: {
                max: { max: "768px" },
                max1124: { max: "1124px" },
            },
            fontFamily: {
                text: ["Work Sans, sans-serif"],
                title: ["Roboto, sans-serif"],
                cursive: ["Lato, sans-serif"],
                material: ["Material Icons"],
            },
            colors: {
                primary: "#08C2B6",
                alt: "#05877f",
                accent: "#000f1a",
                secondary: "#fcfdfd",
                text: "#7f878c",
                body: "#f0f1f5",
                container: "#001829",
                danger: "#7D0F0F",
                info: "#2330A3",
            },
            height: {
                nav: "calc(100% - 90px)",
            },
            width: {
                content: "calc(100% - 260px)",
                sidebar: "calc(100% - 60px)",
            },
        },
    },
    plugins: [
        plugin(function ({ addComponents }) {
            addComponents({
                ".no-scrollbar": {
                    scrollbarWidth: "none",
                    "-ms-overflow-style": "none",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                },
                ".navDrop": {
                    top: "calc(100% + 10px)",
                    pointerEvents: "none",
                    opacity: "0",
                    "&.show": {
                        pointerEvents: "visible",
                        opacity: "1",
                        top: "100%",
                    },
                },
                ".floating": {
                    transition: "200ms ease-in-out top, 200ms ease-in-out font-size, 200ms ease-in-out color",
                },
                ".transition-3s": {
                    transition: "color 0.3s ease",
                },
            });
        }),
    ],
};
