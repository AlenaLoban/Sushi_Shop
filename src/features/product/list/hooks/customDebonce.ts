import { useEffect, useRef } from 'react';

export const useDebounce = (callback: (arg: string) => void, delay: number) => {
  const timeoutRef = useRef(0);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = (arg: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(arg);
    }, delay);
  };

  return debouncedCallback;
};
