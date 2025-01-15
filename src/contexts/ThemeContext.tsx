"use client";

import React, { createContext, useState } from "react";
import { ThemeContextType } from "../@types/theme";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState("green-code");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} min-h-screen`}>{children}</div>
    </ThemeContext.Provider>
  );
};
