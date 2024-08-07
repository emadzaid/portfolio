import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showScrollTopButton && (
        <FaArrowUp
          className="fixed bottom-14 right-16 max-sm:right-8 max-sm:bottom-8 text-primary_blue border rounded-full p-1 size-10 max-[500px]:size-6 cursor-pointer"
          onClick={scrollTop}
        />
      )}
    </div>
  );
};

export default ScrollToTop;