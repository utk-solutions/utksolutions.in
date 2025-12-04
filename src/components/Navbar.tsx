'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { smoothScrollTo } from '@/utils/smoothScroll';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    closeNav();
    smoothScrollTo(targetId, 100);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full py-[25px] transition-all duration-300 z-[4] ${
          isHeaderActive
            ? 'bg-white py-[15px] shadow-[0px_2px_50px_hsla(223,40%,76%,0.3)]'
            : ''
        }`}
      >
        <div className="container mx-auto px-[15px] lg:px-[30px] flex justify-between items-center gap-4 lg:gap-8">
          <Link href="#" className="text-[3.6rem] font-bold text-[hsl(240,8%,17%)] flex-shrink-0">
            UTK Solutions
          </Link>

          <nav
            className={`fixed top-0 right-0 bg-[hsl(240,8%,12%)] text-white max-w-[300px] w-full h-full p-[30px] z-[1] transition-all duration-300 ${
              isNavOpen
                ? 'translate-x-0 visible'
                : 'translate-x-full invisible'
            } lg:static lg:translate-x-0 lg:visible lg:max-w-none lg:h-auto lg:bg-transparent lg:p-0 lg:flex-1 lg:flex lg:justify-center`}
          >
            <div className="flex items-center justify-between mb-[60px] lg:hidden">
              <Link href="#" className="text-white lg:text-[hsl(240,8%,17%)] text-[3.6rem] font-bold">
                UTK Solutions
              </Link>
              <button
                onClick={closeNav}
                className="text-white text-[30px] transition-colors hover:text-[hsl(0,100%,69%)]"
                aria-label="close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-8 xl:gap-12">
              <li className="border-b border-[hsl(0,0%,21%)] lg:border-none">
                <Link
                  href="#home"
                  onClick={(e) => handleNavClick(e, 'home')}
                  className="text-[1.4rem] font-bold uppercase lg:normal-case lg:text-2xl lg:font-medium text-[hsl(225,11%,59%)] lg:relative py-[15px] block transition-colors hover:text-[hsl(47,100%,69%)] lg:hover:text-[hsl(240,8%,17%)] lg:before:content-[''] lg:before:absolute lg:before:bottom-[5px] lg:before:left-0 lg:before:w-0 lg:before:h-[4px] lg:before:rounded-[5px] lg:before:bg-[hsl(241,77%,63%)] lg:before:transition-all lg:hover:before:w-full"
                >
                  Home
                </Link>
              </li>
              <li className="border-b border-[hsl(0,0%,21%)] lg:border-none">
                <Link
                  href="#service"
                  onClick={(e) => handleNavClick(e, 'service')}
                  className="text-[1.4rem] font-bold uppercase lg:normal-case lg:text-2xl lg:font-medium text-[hsl(225,11%,59%)] lg:relative py-[15px] block transition-colors hover:text-[hsl(47,100%,69%)] lg:hover:text-[hsl(240,8%,17%)] lg:before:content-[''] lg:before:absolute lg:before:bottom-[5px] lg:before:left-0 lg:before:w-0 lg:before:h-[4px] lg:before:rounded-[5px] lg:before:bg-[hsl(241,77%,63%)] lg:before:transition-all lg:hover:before:w-full"
                >
                  Solutions
                </Link>
              </li>
              <li className="border-b border-[hsl(0,0%,21%)] lg:border-none">
                <Link
                  href="#feature"
                  onClick={(e) => handleNavClick(e, 'feature')}
                  className="text-[1.4rem] font-bold uppercase lg:normal-case lg:text-2xl lg:font-medium text-[hsl(225,11%,59%)] lg:relative py-[15px] block transition-colors hover:text-[hsl(47,100%,69%)] lg:hover:text-[hsl(240,8%,17%)] lg:before:content-[''] lg:before:absolute lg:before:bottom-[5px] lg:before:left-0 lg:before:w-0 lg:before:h-[4px] lg:before:rounded-[5px] lg:before:bg-[hsl(241,77%,63%)] lg:before:transition-all lg:hover:before:w-full"
                >
                  Industries
                </Link>
              </li>
              <li className="border-b border-[hsl(0,0%,21%)] lg:border-none">
                <Link
                  href="#project"
                  onClick={(e) => handleNavClick(e, 'project')}
                  className="text-[1.4rem] font-bold uppercase lg:normal-case lg:text-2xl lg:font-medium text-[hsl(225,11%,59%)] lg:relative py-[15px] block transition-colors hover:text-[hsl(47,100%,69%)] lg:hover:text-[hsl(240,8%,17%)] lg:before:content-[''] lg:before:absolute lg:before:bottom-[5px] lg:before:left-0 lg:before:w-0 lg:before:h-[4px] lg:before:rounded-[5px] lg:before:bg-[hsl(241,77%,63%)] lg:before:transition-all lg:hover:before:w-full"
                >
                  Why Us
                </Link>
              </li>
              <li className="border-b border-[hsl(0,0%,21%)] lg:border-none">
                <Link
                  href="#blog"
                  onClick={(e) => handleNavClick(e, 'blog')}
                  className="text-[1.4rem] font-bold uppercase lg:normal-case lg:text-2xl lg:font-medium text-[hsl(225,11%,59%)] lg:relative py-[15px] block transition-colors hover:text-[hsl(47,100%,69%)] lg:hover:text-[hsl(240,8%,17%)] lg:before:content-[''] lg:before:absolute lg:before:bottom-[5px] lg:before:left-0 lg:before:w-0 lg:before:h-[4px] lg:before:rounded-[5px] lg:before:bg-[hsl(241,77%,63%)] lg:before:transition-all lg:hover:before:w-full"
                >
                  Insights
                </Link>
              </li>
            </ul>
          </nav>

          <button
            onClick={toggleNav}
            className="bg-white text-[hsl(0,0%,13%)] text-[35px] p-[10px] shadow-[0px_-2px_12px_hsl(252,29%,93%)] rounded-[10px] lg:hidden flex-shrink-0"
            aria-label="open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <Link
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo('contact', 100);
            }}
            className="hidden lg:inline-flex max-w-max font-bold h-[70px] items-center px-[50px] rounded-[10px] overflow-hidden transition-all duration-500 bg-[hsl(241,77%,63%)] text-white relative z-[1] before:content-[''] before:absolute before:right-0 before:w-full before:h-1/2 before:scale-x-0 before:bg-[hsl(47,100%,69%)] before:z-[-1] before:transition-transform before:duration-300 before:origin-left before:top-0 after:content-[''] after:absolute after:right-0 after:w-full after:h-1/2 after:scale-x-0 after:bg-[hsl(47,100%,69%)] after:z-[-1] after:transition-transform after:duration-300 after:origin-right after:top-1/2 hover:before:scale-x-100 hover:before:origin-right hover:after:scale-x-100 hover:after:origin-left hover:text-[hsl(240,8%,17%)] flex-shrink-0"
          >
            Get a Free Consultation
          </Link>

          <div
            className={`fixed inset-0 bg-[hsla(240,8%,12%,0.9)] transition-all duration-500 ${
              isNavOpen ? 'opacity-100 pointer-events-all' : 'opacity-0 pointer-events-none'
            } lg:hidden`}
            onClick={closeNav}
          />
        </div>
      </header>
    </>
  );
}

