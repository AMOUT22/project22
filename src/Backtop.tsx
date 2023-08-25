import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button
        className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md"
        onClick={scrollToTop}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default BackToTopButton;
