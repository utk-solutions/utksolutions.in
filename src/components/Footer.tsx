'use client';

import Image from 'next/image';
import Link from 'next/link';
import { smoothScrollTo } from '@/utils/smoothScroll';

const instaPosts = [
  'insta-post-1.jpg',
  'insta-post-2.jpg',
  'insta-post-3.jpg',
  'insta-post-4.jpg',
  'insta-post-5.jpg',
  'insta-post-6.jpg',
];

export default function Footer() {
  return (
    <footer className="bg-[hsl(240,8%,17%)] text-[hsl(225,11%,59%)]">
      <div className="container mx-auto px-[15px] xl:px-[30px]">
        <div className="py-[100px] lg:py-[120px] pb-[60px] grid gap-[50px] md:grid-cols-2 lg:grid-cols-[1fr_0.5fr_0.5fr_0.9fr]">
          <div>
            <p className="text-[2rem] font-medium text-white mb-[20px]">About UTK Solutions</p>

            <p className="mb-[30px]">
              UTK Solutions is a tech-enabled, cloud-based fully integrated business support services outsourcing firm that's changing the way companies think about finance, accounting, HR and technology services. You get world-class teams combined with highly personal service.
            </p>

            <ul className="flex gap-[12px]">
              <li>
                <a
                  href="#"
                  className="bg-[hsl(240,5%,26%)] p-[14px] rounded-full transition-all duration-300 hover:bg-[hsl(241,77%,63%)] hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-[hsl(240,5%,26%)] p-[14px] rounded-full transition-all duration-300 hover:bg-[hsl(241,77%,63%)] hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-[hsl(240,5%,26%)] p-[14px] rounded-full transition-all duration-300 hover:bg-[hsl(241,77%,63%)] hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-[hsl(240,5%,26%)] p-[14px] rounded-full transition-all duration-300 hover:bg-[hsl(241,77%,63%)] hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <ul>
            <li>
              <p className="text-[2rem] font-medium text-white mb-[20px]">Useful Links</p>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('contact', 100);
                }}
                className="text-[1.5rem] mt-[15px] block transition-colors duration-300 hover:text-[hsl(47,100%,69%)]"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('home', 100);
                }}
                className="text-[1.5rem] mt-[15px] block transition-colors duration-300 hover:text-[hsl(47,100%,69%)]"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#service"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('service', 100);
                }}
                className="text-[1.5rem] mt-[15px] block transition-colors duration-300 hover:text-[hsl(47,100%,69%)]"
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                href="#project"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('project', 100);
                }}
                className="text-[1.5rem] mt-[15px] block transition-colors duration-300 hover:text-[hsl(47,100%,69%)]"
              >
                Industries
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('contact', 100);
                }}
                className="text-[1.5rem] mt-[15px] block transition-colors duration-300 hover:text-[hsl(47,100%,69%)]"
              >
                Get a Free Consultation
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <p className="text-[2rem] font-medium text-white mb-[20px]">Insights</p>
            </li>
            <li>
              <Link
                href="#"
                className="text-[1.5rem] mt-[15px] block transition-colors duration-300 hover:text-[hsl(47,100%,69%)]"
              >
                Articles & Blogs
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-[1.5rem] mt-[15px] block transition-colors duration-300 hover:text-[hsl(47,100%,69%)]"
              >
                Client Stories
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-[1.5rem] mt-[15px] block transition-colors duration-300 hover:text-[hsl(47,100%,69%)]"
              >
                Videos
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-[1.5rem] mt-[15px] block transition-colors duration-300 hover:text-[hsl(47,100%,69%)]"
              >
                Opinions & Views
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-[1.5rem] mt-[15px] block transition-colors duration-300 hover:text-[hsl(47,100%,69%)]"
              >
                Infographics
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <p className="text-[2rem] font-medium text-white mb-[20px]">Get in Touch</p>
            </li>
            <li>
              <a
                href="mailto:[email protected]"
                className="text-[1.5rem] mt-[15px] block text-[hsl(225,11%,59%)] transition-colors duration-300 hover:text-[hsl(47,100%,69%)]"
              >
                [email protected]
              </a>
            </li>
            <li>
              <a
                href="tel:8666227011"
                className="text-[1.5rem] mt-[15px] block text-[hsl(225,11%,59%)] transition-colors duration-300 hover:text-[hsl(47,100%,69%)]"
              >
                866-622-7011
              </a>
            </li>
            <li>
              <p className="text-[1.5rem] mt-[15px] text-[hsl(225,11%,59%)]">
                1850 Parkway Place, Suite 1100<br />
                Marietta, GA 30067
              </p>
            </li>
            <li className="mt-[20px]">
              <p className="text-[2rem] font-medium text-white mb-[20px]">Follow Us</p>
            </li>
            <li>
              <ul className="grid grid-cols-3 gap-[15px]">
                {instaPosts.map((post, index) => (
                  <li key={index}>
                    <div className="relative rounded-[10px] overflow-hidden group">
                      <figure>
                        <Image
                          src={`/assets/images/${post}`}
                          width={77}
                          height={63}
                          loading="lazy"
                          alt="instagram post"
                          className="w-full h-full object-cover"
                        />
                      </figure>
                      <Link
                        href="#"
                        className="absolute inset-0 grid place-content-center bg-[hsla(241,88%,60%,0.8)] text-white text-[25px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        <div className="text-white text-[1.5rem] py-[40px] border-t border-[hsl(240,5%,26%)] md:flex md:justify-between md:items-center">
          <p className="mb-[15px] md:mb-0 md:text-center">
            &copy; 2025 UTK Solutions, Inc. All rights reserved.
          </p>

          <ul className="flex flex-wrap gap-[5px_15px] md:justify-center">
            <li>
              <Link
                href="#"
                className="transition-colors duration-300 hover:text-[hsl(47,100%,69%)]"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition-colors duration-300 hover:text-[hsl(47,100%,69%)]"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition-colors duration-300 hover:text-[hsl(47,100%,69%)]"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

