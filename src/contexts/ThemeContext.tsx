'use client';

import React, { createContext, useEffect } from 'react';
import { ThemeContextType } from '../@types/theme';

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = React.useState('green-code');

  useEffect(() => {
    const html = document.documentElement;
    html.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
