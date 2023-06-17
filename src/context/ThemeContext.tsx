'use client';

import { ReactNode, createContext, useState } from 'react';

export interface ThemeContextDto {
  mode: 'light' | 'dark';
  toggle: () => void;
}
interface ProviderProps {
  children: ReactNode;
}
export const ThemeContext = createContext<ThemeContextDto | null>(null);
export const ThemeProvider = ({ children }: ProviderProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };
  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div className={`theme theme--${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
