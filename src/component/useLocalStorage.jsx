import { useEffect, useState } from "react";

const getSavedValue = (key, initialValue) => {
  const savedKey = JSON.parse(localStorage.getItem(key));
  if (savedKey) return savedKey;
  if (initialValue) return initialValue;
};

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export default useLocalStorage;
