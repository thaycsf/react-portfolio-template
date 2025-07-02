import { useState, useEffect } from "react";
import { BREAKPOINTS } from "../constants";

export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= BREAKPOINTS.desktop : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= BREAKPOINTS.desktop);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile };
};
