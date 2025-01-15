"use client";

import React from "react";
import { useTheme } from "@/hooks/useTheme";

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    const themes = ["green-code", "cyber-luxury", "minimalist-future"];
    const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(nextTheme);
  };

  return (
    <nav className="bg-primary text-text p-4 flex justify-between items-center">
      <h1 className="font-title text-2xl">E-Commerce</h1>
      <button
        onClick={handleToggle}
        className="bg-accent text-background px-4 py-2 rounded"
      >
        Toggle Theme
      </button>
    </nav>
  );
};

export default Navbar;
