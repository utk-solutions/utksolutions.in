'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimation from './ScrollAnimation';

import blogsData from '@/data/blogs.json';

export default function Blog() {
  return (
    <section
      id="blog"
      className="py-[100px] lg:py-[120px] bg-[hsl(230,60%,98%)]"
      aria-label="blog"
    >
      <div className="container mx-auto px-[15px] xl:px-[30px]">
        <p className="text-[1.8rem] font-medium leading-[1.2] text-[hsl(225,11%,59%)] text-center mb-[20px] before:content-[''] before:inline-block before:w-[12px] before:h-[12px] before:bg-[hsl(47,100%,69%)] before:rounded-full before:mr-[10px]">
          Latest Insights
        </p>

        <h2 className="text-[3.5rem] lg:text-[4.5rem] leading-[1.2] tracking-[-2px] text-[hsl(240,8%,17%)] text-center mb-[50px] lg:mb-[70px]">
          Latest Trends and{' '}
          <span className="relative inline-block z-[1] before:content-[''] before:absolute before:bottom-[8px] before:left-0 before:w-full before:h-[6px] before:bg-[hsl(47,100%,69%)] before:z-[-1]">
            Strategies
          </span>
        </h2>

        <ul className="grid gap-[40px] lg:grid-cols-2 lg:gap-x-[70px] lg:gap-y-[40px] xl:gap-x-[35px]">
          {blogsData.map((blog, index) => (
            <li
              key={blog.id}
              className={
                blog.large
                  ? 'lg:row-span-3 xl:pr-[35px] xl:border-r border-[hsl(217,16%,90%)]'
                  : 'md:flex md:items-center md:gap-[40px]'
              }
            >
              <ScrollAnimation delay={index * 100}>
                <Link
                  href={`/blog/${blog.id}`}
                  className={`block ${blog.large ? '' : 'md:flex-shrink-0'} group`}
                >
                  <figure
                    className={`rounded-[20px] overflow-hidden mb-[20px] ${
                      blog.large ? 'mb-[40px]' : 'md:mb-0'
                    }`}
                  >
                    <Image
                      src={`/assets/images/${blog.image}`}
                      width={blog.width}
                      height={blog.height}
                      loading="lazy"
                      alt={blog.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  </figure>

                  <div>
                    <div
                      className={`flex flex-wrap items-center gap-[30px] mb-[20px] ${
                        !blog.large ? 'md:gap-[10px] md:flex-nowrap lg:gap-[25px]' : ''
                      }`}
                    >
                      <span className="text-[hsl(241,77%,63%)] text-[1.4rem] font-bold uppercase transition-colors duration-300 group-hover:text-[hsl(240,8%,17%)]">
                        {blog.tag}
                      </span>

                      <div className="flex items-center gap-[10px] md:gap-[5px] text-[hsl(225,11%,59%)] font-medium md:flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-[18px] w-[18px]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-[1.4rem] md:text-[1.6rem]">{blog.date}</span>
                      </div>
                    </div>

                    <h3
                      className={`text-[2.2rem] lg:text-[2.6rem] xl:text-[2.4rem] leading-[1.2] tracking-[-1px] text-[hsl(240,8%,17%)] ${
                        blog.large ? 'text-[3.5rem] mb-[20px]' : 'mb-0'
                      } transition-colors duration-300 group-hover:text-[hsl(241,77%,63%)]`}
                    >
                      {blog.title}
                    </h3>

                    {blog.excerpt && (
                      <p className="text-[hsl(225,11%,59%)] mt-[20px]">{blog.excerpt}</p>
                    )}
                  </div>
                </Link>
              </ScrollAnimation>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

