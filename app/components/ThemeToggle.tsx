"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";


export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  // On mount, check localStorage or system preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") setIsDark(false);
    else if (saved === "dark") setIsDark(true);
    else setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  // Only update theme in localStorage and trigger re-render
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("theme", isDark ? "dark" : "light");
      // Let the script in <head> handle the class on html
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [isDark]);

  return (
    <button
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`transition-colors duration-500 px-4 py-2 sm:px-3 sm:py-2 rounded-full border-2 border-blue-500 shadow-lg flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400/60 bg-white dark:bg-black text-black dark:text-white hover:bg-blue-500/90 hover:text-white dark:hover:bg-blue-600/90 dark:hover:text-yellow-300 font-semibold text-base sm:text-base text-lg min-w-[44px] min-h-[44px]`}
      style={{boxShadow:'0 2px 16px 0 #3b82f655'}}
      onClick={() => setIsDark(d => !d)}
    >
      {isDark ? <Sun className="w-6 h-6 sm:w-5 sm:h-5 text-yellow-400" /> : <Moon className="w-6 h-6 sm:w-5 sm:h-5 text-blue-500" />}
      <span className="ml-1 hidden xs:inline">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
