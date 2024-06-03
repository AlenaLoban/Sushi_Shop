import { useEffect, RefObject } from 'react';

export const useClickOutSide = (
  func: () => void,
  ref: RefObject<HTMLDivElement>,
) => {
  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      const el = ref.current;
      if (el && el.contains(e.target as Node)) {
        return;
      }
      func();
    };
    window.addEventListener('click', clickOutside, true);
    return () => {
      window.removeEventListener('click', clickOutside);
    };
  }, [func, ref]);
};
