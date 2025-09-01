 import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);

      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.log("Error loading local storage ", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log("Error saving to local storage ", error);
    }
  }, [key, value]);

  return [value, setValue];
}
