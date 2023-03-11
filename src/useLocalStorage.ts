import { useState, useEffect } from "react";

interface GeralLinks {
  linkURLType: string;
  resultURLType: string;
}

function getStorageValue(
  key: string,
  defaultValue: GeralLinks[]
): GeralLinks[] {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    const initial = saved !== null ? JSON.parse(saved) : defaultValue;

    return initial;
  } else {
    return defaultValue;
  }
}

export const useLocalStorage = (key: string, defaultValue: GeralLinks[]) => {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
