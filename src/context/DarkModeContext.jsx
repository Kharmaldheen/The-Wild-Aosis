import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  //we can use the user settings to set the default value of the dark  mode
  //like-- window.matchMedia('(prefers-color-scheme:dark)').matches
  //the abobe will return true or false.I.e true if the user set his pc to dark mode and false if the user set it to light mode
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme:dark)").matches,
    "isDarkMode"
  );

  function toggleDarkMode() {
    setIsDarkMode((darkmode) => !darkmode);
  }

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.remove("light-mode");
        document.documentElement.classList.add("dark-mode");
      }

      if (!isDarkMode) {
        document.documentElement.classList.remove("dark-mode");
        document.documentElement.classList.add("light-mode");
      }
    },
    [isDarkMode]
  );

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error(
      "Dark mode context was used outside of the dark mode provider"
    );

  return context;
}

export { DarkModeProvider, useDarkMode };
