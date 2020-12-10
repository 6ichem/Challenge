import React from "react";
import Typed from "typed.js";

export const useLoading = () => {
  const loadingRef = React.useRef(null);
  const options = {
    strings: ["Loading", "Loading..."],
    typeSpeed: 40,
    loop: true,
    backSpeed: 40,
    startDelay: 0,
    showCursor: false,
  };

  React.useEffect(() => {
    if (!loadingRef.current) return;

    const typed = new Typed(`#${loadingRef.current.id}`, options);

    return () => typed.destroy();
  }, []);

  return { models: { loadingRef }, operators: {} };
};
