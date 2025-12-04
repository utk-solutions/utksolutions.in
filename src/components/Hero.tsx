'use client';

import Image from 'next/image';
import Link from 'next/link';
import { smoothScrollTo } from '@/utils/smoothScroll';
import ScrollAnimation from './ScrollAnimation';

export default function Hero() {
  const handleLearnMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    smoothScrollTo('feature', 100);
  };

  const handleGetConsultation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo('contact', 100);
  };

  return (
    <section
      id="home"
      className="pt-[calc(100px+60px)] pb-[100px] lg:pt-[calc(120px+60px)] lg:pb-[120px] lg:bg-gradient-to-r lg:from-white lg:via-white lg:to-[hsl(47,100%,69%)] lg:overflow-hidden"
      aria-label="hero"
    >
      <div className="container mx-auto px-[15px] grid gap-[70px] lg:grid-cols-2 lg:gap-[40px] xl:px-[30px]">
        <ScrollAnimation>
          <div className="flex flex-col xl:mt-[50px]">
            <h1 className="text-[4rem] lg:text-[5.5rem] leading-[1.1] tracking-[-2px] text-black mb-[30px]">
              Accelerate Growth with       
              <span className="relative inline-block z-[1] before:content-[''] before:absolute before:bottom-[8px] before:left-0 before:w-full before:h-[6px] before:bg-[hsl(47,100%,69%)] before:z-[-1]">
                Skilled Remote Teams
              </span>
              {' '}Worldwide
            </h1>

            <p className="text-[1.7rem] lg:text-[1.8rem] mb-[30px] lg:mb-[40px] xl:mb-[45px]">
            Access a global network of specialists who integrate seamlessly into your workflow. From engineering to cloud and product development, we provide the talent and expertise you need to drive innovation, reduce costs, and scale without limits.
            </p>

            <div className="flex flex-wrap gap-[30px] lg:gap-[50px] lg:flex-nowrap mb-[30px] lg:mb-[60px] xl:mb-auto">
              <Link
                href="#contact"
                onClick={handleGetConsultation}
                className="max-w-max font-bold h-[55px] lg:h-[70px] flex items-center px-[50px] rounded-[10px] overflow-hidden transition-all duration-500 bg-[hsl(241,77%,63%)] text-white relative z-[1] before:content-[''] before:absolute before:right-0 before:w-full before:h-1/2 before:scale-x-0 before:bg-[hsl(47,100%,69%)] before:z-[-1] before:transition-transform before:duration-300 before:origin-left before:top-0 after:content-[''] after:absolute after:right-0 after:w-full after:h-1/2 after:scale-x-0 after:bg-[hsl(47,100%,69%)] after:z-[-1] after:transition-transform after:duration-300 after:origin-right after:top-1/2 hover:before:scale-x-100 hover:before:origin-right hover:after:scale-x-100 hover:after:origin-left hover:text-[hsl(240,8%,17%)] hover:scale-105 active:scale-95"
              >
                Get a Free Consultation
              </Link>

              <button
                onClick={handleLearnMore}
                className="flex items-center gap-[15px] text-[hsl(240,8%,17%)] transition-all duration-300 hover:text-[hsl(241,77%,63%)] hover:scale-105 active:scale-95"
                aria-label="Learn more about our services"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-[1.8rem] font-medium">Learn More</span>
              </button>
            </div>

            <ul className="flex gap-[12px] mt-12">
              <li>
                <a
                  href="#"
                  className="bg-white text-[hsl(241,77%,63%)] p-[12px] shadow-[0px_2px_50px_hsla(223,40%,76%,0.3)] rounded-[8px] transition-all duration-500 hover:bg-[hsl(241,77%,63%)] hover:text-white md:flex md:items-center md:gap-[15px] md:bg-transparent md:shadow-none md:p-0 md:hover:bg-transparent"
                  style={{ '--color': 'hsl(241, 77%, 63%)' } as React.CSSProperties}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="hidden md:block text-[1.4rem] font-bold uppercase tracking-[1px] text-[hsl(240,8%,17%)] transition-colors duration-500 md:group-hover:text-[hsl(241,77%,63%)]">
                    Facebook
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-white text-[hsl(0,100%,50%)] p-[12px] shadow-[0px_2px_50px_hsla(223,40%,76%,0.3)] rounded-[8px] transition-all duration-500 hover:bg-[hsl(0,100%,50%)] hover:text-white md:flex md:items-center md:gap-[15px] md:bg-transparent md:shadow-none md:p-0 md:hover:bg-transparent"
                  style={{ '--color': 'hsl(0, 100%, 50%)' } as React.CSSProperties}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span className="hidden md:block text-[1.4rem] font-bold uppercase tracking-[1px] text-[hsl(240,8%,17%)] transition-colors duration-500">
                    Youtube
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-white text-[hsl(203,89%,53%)] p-[12px] shadow-[0px_2px_50px_hsla(223,40%,76%,0.3)] rounded-[8px] transition-all duration-500 hover:bg-[hsl(203,89%,53%)] hover:text-white md:flex md:items-center md:gap-[15px] md:bg-transparent md:shadow-none md:p-0 md:hover:bg-transparent"
                  style={{ '--color': 'hsl(203, 89%, 53%)' } as React.CSSProperties}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  <span className="hidden md:block text-[1.4rem] font-bold uppercase tracking-[1px] text-[hsl(240,8%,17%)] transition-colors duration-500">
                    Twitter
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <figure className="xl:min-w-max">
            <Image
              src="/assets/landing-page/hero-section/hero-section.png"
              alt="hero banner"
              layout='contain'
              width={794}
              height={637}
              className="w-full h-auto"
              priority
            />
          </figure>
        </ScrollAnimation>
      </div>
    </section>
  );
}

