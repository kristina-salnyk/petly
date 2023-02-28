import React from 'react';
import { useEffect, useState } from 'react';
import { ToTopBtn } from './ScrollToTopButton.styled';

const ScrollToTop = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return <>{backToTopButton && <ToTopBtn onClick={scrollUp}>^</ToTopBtn>}</>;
};

export default ScrollToTop;
