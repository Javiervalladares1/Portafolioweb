// hooks/useTheme.js
import { useState, useEffect } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(
    localStorage.theme ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.theme = theme;
  }, [theme]);
  return [theme, setTheme];
}