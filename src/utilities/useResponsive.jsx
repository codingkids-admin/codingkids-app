import { useEffect, useState } from "react";

const useResponsive = (size) => {
  const sizes = {
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1400,
  };
  const minWidth = sizes[size];
  const [state, setState] = useState({
    windowWidth: window.innerWidth,
    isDesiredWidth: window.innerWidth < minWidth,
  });
  useEffect(() => {
    const resizeHandler = (ev) => {
      const currentWindowWidth = window.innerWidth;
      const isDesiredWidth = currentWindowWidth < minWidth;
      setState({
        windowWidth: currentWindowWidth,
        isDesiredWidth,
      });
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [state.windowWidth]);
  return state.isDesiredWidth;
};

export default useResponsive;
