import React, { createContext, ReactNode, useContext, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}

interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useDarkMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Check Contextt");
  }
  return context;
};

const ThemeProvider: React.FC<ProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    console.log("A");
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext, useDarkMode };
