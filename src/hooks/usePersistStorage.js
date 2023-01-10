import { useEffect, useState } from 'react';

const usePersistStorage = (initialData, key) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(initialData));
    } catch (error) {
      currentValue = initialData;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default usePersistStorage;
