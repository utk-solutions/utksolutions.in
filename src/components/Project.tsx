'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimation from './ScrollAnimation';

const industries = [
  { image: 'project-1.jpg', title: 'Software & SaaS Development', tag: 'Software & SaaS Development', width: 835, height: 429 },
  { image: 'project-2.jpg', title: 'Cloud & Infrastructure Services', tag: 'Cloud & Infrastructure Services', width: 416, height: 429 },
  { image: 'project-3.jpg', title: 'FinTech & Digital Payments', tag: 'FinTech & Digital Payments', width: 416, height: 429 },
  { image: 'project-4.jpg', title: 'Startups & Innovative Tech Ventures', tag: 'Startups & Innovative Tech Ventures', width: 416, height: 429 },
];

const filters = ['All Industries', 'Software & SaaS Development', 'Cloud & Infrastructure Services', 'FinTech & Digital Payments', 'Startups & Innovative Tech Ventures'];

// Layout configurations for different filters
const getLayoutConfig = (filter: string) => {
  switch (filter) {
    case 'All Industries':
      return {
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        firstItemSpan: 'md:col-span-2',
      };
    case 'Software & SaaS Development':
      return {
        gridCols: 'grid-cols-1 md:grid-cols-2',
        firstItemSpan: '',
      };
    case 'Cloud & Infrastructure Services':
      return {
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        firstItemSpan: 'md:col-span-2 lg:col-span-2',
      };
    case 'FinTech & Digital Payments':
      return {
        gridCols: 'grid-cols-1 lg:grid-cols-2',
        firstItemSpan: '',
      };
    case 'Startups & Innovative Tech Ventures':
      return {
        gridCols: 'grid-cols-1 md:grid-cols-3',
        firstItemSpan: '',
      };
    default:
      return {
        gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        firstItemSpan: 'md:col-span-2',
      };
  }
};

export default function Project() {
  const [activeFilter, setActiveFilter] = useState('All Industries');

  // Filter industries based on active filter
  const filteredIndustries = useMemo(() => {
    if (activeFilter === 'All Industries') {
      return industries;
    }
    return industries.filter((industry) => industry.tag === activeFilter);
  }, [activeFilter]);

  const layoutConfig = getLayoutConfig(activeFilter);

  return (
    <section
      id="project"
      className="py-[100px] lg:py-[120px] bg-[hsl(230,60%,98%)]"
      aria-label="project"
    >
      <div className="container mx-auto px-[15px] xl:px-[30px]">
        <p className="text-[1.8rem] font-medium leading-[1.2] text-[hsl(225,11%,59%)] text-center mb-[20px] before:content-[''] before:inline-block before:w-[12px] before:h-[12px] before:bg-[hsl(47,100%,69%)] before:rounded-full before:mr-[10px]">
        Industries We Serve
        </p>

        <h2 className="text-[3.5rem] lg:text-[4.5rem] leading-[1.2] tracking-[-2px] text-[hsl(240,8%,17%)] text-center mb-[50px] lg:mb-[60px]">
        Cloud & Development for{' '}
          <span className="relative inline-block z-[1] before:content-[''] before:absolute before:bottom-[8px] before:left-0 before:w-full before:h-[6px] before:bg-[hsl(47,100%,69%)] before:z-[-1]">
          All Industries
          </span>
        </h2>

        <ul className="max-w-[90%] mx-auto flex flex-wrap justify-center items-center gap-[15px] mb-[70px]">
          {filters.map((filter) => (
            <li key={filter}>
              <button
                onClick={() => setActiveFilter(filter)}
                className={`text-[1.4rem] lg:text-[1.8rem] font-medium py-[11px] lg:py-[20px] px-[20px] lg:px-[25px] xl:px-[40px] rounded-[8px] transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-white text-[hsl(240,8%,17%)] shadow-[0px_15px_30px_hsla(210,30%,32%,0.05)]'
                    : 'text-[hsl(225,11%,59%)] hover:text-[hsl(240,8%,17%)]'
                }`}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>

        {filteredIndustries.length > 0 ? (
          <ul className={`grid gap-[30px] ${layoutConfig.gridCols}`}>
            {filteredIndustries.map((industry, index) => (
              <li
                key={`${industry.tag}-${index}`}
                className={index === 0 && layoutConfig.firstItemSpan ? layoutConfig.firstItemSpan : ''}
              >
                <ScrollAnimation delay={index * 100}>
                  <div className="relative rounded-[15px] overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                  <figure
                    className="aspect-[var(--width)/var(--height)] bg-[hsl(0,0%,80%)] overflow-hidden"
                    style={
                      {
                        '--width': industry.width,
                        '--height': industry.height,
                      } as React.CSSProperties
                    }
                  >
                    <Image
                      src={`/assets/images/${industry.image}`}
                      width={industry.width}
                      height={industry.height}
                      loading="lazy"
                      alt={industry.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                    />
                  </figure>

                  <div className="absolute top-1/2 left-[20px] right-[20px] md:left-1/2 md:right-auto md:w-[calc(100%-40px)] md:max-w-max md:px-[80px] bg-[hsl(47,100%,69%)] rounded-[10px] p-[30px] md:p-[50px] text-center opacity-0 translate-y-[calc(-50%+20px)] md:translate-x-[-50%] md:translate-y-[calc(-50%+20px)] transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-[-50%] md:group-hover:translate-x-[-50%] md:group-hover:translate-y-[-50%]">
                    <h3 className="text-[2.4rem] leading-[1.3] font-medium text-[hsl(240,8%,17%)] mb-[10px]">
                      <Link href="#" className="hover:text-[hsl(241,77%,63%)] transition-colors">
                        {industry.title}
                      </Link>
                    </h3>

                    <Link
                      href="#"
                      className="text-[1.4rem] text-[hsl(240,8%,17%)] hover:text-[hsl(241,77%,63%)] transition-colors"
                    >
                      {industry.tag}
                    </Link>
                  </div>
                </div>
                </ScrollAnimation>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-20">
            <p className="text-[1.8rem] text-[hsl(225,11%,59%)]">
              No industries found for this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

