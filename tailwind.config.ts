import { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const colors = {
  "green-code": {
    primary: "#00FF00",
    background: "#000000",
    secondary: "#1A1A1A",
    accent: "#A9A9A9",
    text: "rgba(255, 255, 255, 0.85)",
  },
  "cyber-luxury": {
    primary: "#50C878",
    background: "#121212",
    secondary: "#C0C0C0",
    accent: "#FFD700",
    text: "#00BFFF",
  },
  "minimalist-future": {
    primary: "#101010",
    background: "#2F4F4F",
    secondary: "#36454F",
    accent: "#B0C4DE",
    text: "#F8F8FF",
  },
};

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors,
      fontFamily: {
        title: ["Orbitron", "Rajdhani", "sans-serif"], // Títulos principais
        body: ["Roboto", "Inter", "sans-serif"], // Textos secundários
        description: ["Playfair Display", "serif"], // Descrições luxuosas
      },
    },
  },
  plugins: [forms],
};

export default config;
