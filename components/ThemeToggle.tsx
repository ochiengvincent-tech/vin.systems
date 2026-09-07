"use client";

export default function ThemeToggle() {
  function setTheme(theme: "dark" | "light") {
    document.body.classList.toggle("light-mode", theme === "light");
    window.localStorage.setItem("theme", theme);
  }

  return (
    <div className="theme-controls ml-3" aria-label="Color theme">
      <button
        className="theme-btn"
        type="button"
        aria-label="Use dark mode"
        title="Dark mode"
        onClick={() => setTheme("dark")}
      >
        <span aria-hidden="true">&#9790;</span>
      </button>
      <button
        className="theme-btn"
        type="button"
        aria-label="Use light mode"
        title="Light mode"
        onClick={() => setTheme("light")}
      >
        <span aria-hidden="true">&#9728;</span>
      </button>
    </div>
  );
}
