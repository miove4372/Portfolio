"use client";

import * as React from "react";

type Theme = "light" | "dark";

export default function Darkmode({ className = "" }: { className?: string }) {
  const [theme, setTheme] = React.useState<Theme>("light");
  const [mounted, setMounted] = React.useState(false);

  // On first load: read localStorage AND apply it immediately
  React.useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) ?? "light";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
    setMounted(true);
  }, []);

  // Whenever theme changes: update localStorage + <html> class
  React.useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme, mounted]);

  function clicked() {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }

  if (!mounted) return null;

  return (
    <button
      onClick={clicked}
      className={`absolute left-10 top-10 rounded-2xl p-5 ${className} hover:cursor-pointer`}
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
