import { useEffect, useState } from "react";

const useResponsive = (size) => {
  const [state, setState] = useState({
    windowWidth: 0,
    isDesiredWidth: false,
  });

  useEffect(() => {
    const minWidth = {
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1400,
    }[size];

    setState({
      windowWidth: window.innerWidth,
      isDesiredWidth: window.innerWidth < minWidth,
    });

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
  }, [state.windowWidth, size]);
  return state.isDesiredWidth;
};

export default useResponsive;
