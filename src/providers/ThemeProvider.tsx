import React, { createContext, useContext, useEffect, useState } from "react";

interface IContext {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IContext | undefined>(undefined);

export function useTheme() {
  return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
  const [theme, setTheme] = useState("light");
  const btn = document.querySelector(".switch-mode");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const defaultTheme = prefersDarkScheme ? "dark" : "light";
      setTheme(defaultTheme);
      document.documentElement.setAttribute("data-theme", defaultTheme);

      
    }

    // if (theme === 'light') {
    //   btn?.classList.remove("drk");
    // } 
    // else {
    //   btn?.classList.add("drk");
    // }


    
  }, []);

  if (document.documentElement.getAttribute('data-theme') == 'dark') {
    btn?.classList.add('drk');
  }
  else {
    btn?.classList.remove('drk');
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    
      if (newTheme === 'light') {
        btn?.classList.remove("drk");
      } 
      else {
        btn?.classList.add("drk");
      }
  
    
  

  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
