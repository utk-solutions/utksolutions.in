'use client';

import { useState, useEffect } from 'react';
import { smoothScrollTo } from '@/utils/smoothScroll';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    smoothScrollTo('top', 0);
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-[20px] right-[30px] bg-[hsl(241,77%,63%)] text-white text-[18px] p-[16px] rounded-[8px] z-[4] transition-all duration-300 hover:bg-[hsl(241,77%,53%)] hover:scale-110 ${
        isVisible
          ? 'visible opacity-100 translate-y-[-10px]'
          : 'invisible opacity-0'
      } after:content-[''] after:absolute after:bottom-[-12px] after:right-0 after:w-full after:h-[10px] after:bg-[radial-gradient(ellipse_at_center,_hsla(0,0%,0%,0.25),_transparent_80%)]`}
      aria-label="back to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}

