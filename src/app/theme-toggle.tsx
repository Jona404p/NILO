"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "nilo-theme";
const subscribers = new Set<() => void>();
let currentTheme: Theme = "light";
let preferenceLoaded = false;

function readSavedTheme(): Theme {
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY) === "dark"
      ? "dark"
      : "light";
  } catch (error) {
    console.warn("NILO could not read the saved theme preference.", error);
    return "light";
  }
}

function getThemeSnapshot(): Theme {
  if (!preferenceLoaded) {
    currentTheme = readSavedTheme();
    preferenceLoaded = true;
  }

  return currentTheme;
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

function subscribeToThemeChanges(subscriber: () => void) {
  subscribers.add(subscriber);
  return () => subscribers.delete(subscriber);
}

function setTheme(theme: Theme) {
  currentTheme = theme;
  preferenceLoaded = true;

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.warn("NILO could not save the theme preference.", error);
  }

  subscribers.forEach((subscriber) => subscriber());
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToThemeChanges,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  }

  const nextThemeLabel = theme === "light" ? "oscuro" : "claro";

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Cambiar a modo ${nextThemeLabel}`}
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {theme === "light" ? "☾" : "☀"}
      </span>
      <span>{theme === "light" ? "Oscuro" : "Claro"}</span>
    </button>
  );
}
