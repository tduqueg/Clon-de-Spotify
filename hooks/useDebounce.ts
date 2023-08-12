import { use, useEffect, useState } from "react";

function useDebounce<T>(value: T, delay?: number) {
  const [debuoncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debuoncedValue;
}

export default useDebounce;
