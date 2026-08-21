import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <div 
      className="scroll-to-top scroll-to-target" 
      onClick={scrollToTop}
      style={{ display: 'block', cursor: 'pointer' }}
    >
      <span className="fa fa-angle-up"></span>
    </div>
  );
};

export default ScrollToTop;
