'use client';

import { ReactNode, createContext, useLayoutEffect, useState } from 'react';
type Mode = 'light' | 'dark';
export interface ThemeContextDto {
  mode: Mode;
  toggle: () => void;
}
interface ProviderProps {
  children: ReactNode;
}
export const ThemeContext = createContext<ThemeContextDto | null>(null);
export const ThemeProvider = ({ children }: ProviderProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const toggle = () => {
    localStorage.setItem('mode', mode === 'dark' ? 'light' : 'dark');
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };
  useLayoutEffect(() => {
    const clientMode = window.localStorage.getItem('mode');
    if (clientMode) {
      setMode(clientMode as Mode);
    }

    return () => {};
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div className={`theme theme--${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
