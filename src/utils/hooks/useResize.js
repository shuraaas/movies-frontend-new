import { useState, useEffect } from 'react';
import {
  SCREEN_M, SCREEN_XL,
} from '../../utils/breakpoints.js';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenS: width < SCREEN_M,
    isScreenM: width < SCREEN_XL && width >= SCREEN_M,
    isScreenL: width >= SCREEN_XL,
  };
};