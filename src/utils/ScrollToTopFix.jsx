import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopFix() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}