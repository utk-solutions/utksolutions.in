'use client';

import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Real-Time Insights',
    text: 'Because you can\'t innovate with limited visibility. Gain clearer direction with real-time insights, expert guidance, and transparent execution - so you always know what\'s happening across your tech, product, and business operations.',
    color: '174, 77%, 50%',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Built for Growth',
    text: 'Because your growth deserves the right support. Expand seamlessly with skilled remote teams, reliable engineering, and secure cloud solutions that help you build faster, operate efficiently, and scale without friction.',
    color: '241, 77%, 63%',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Strong Teams, Strong Decisions',
    text: 'Because strong decisions come from strong teams. Empower your business with world-class specialists who integrate smoothly into your workflow—giving you consistent quality, stability, and long-term confidence.',
    color: '343, 98%, 60%',
  },
];

export default function Feature() {
  return (
    <section
      id="feature"
      className="py-[100px] lg:py-[120px]"
      aria-label="feature"
    >
      <div className="container mx-auto px-[15px] xl:px-[30px] grid gap-[60px] lg:grid-cols-2 lg:gap-[30px]">
        <figure className="max-w-max">
          <Image
            src="/assets/images/feature-banner.png"
            width={582}
            height={585}
            loading="lazy"
            alt="feature banner"
            className="w-full h-auto"
          />
        </figure>

        <div>
          <p className="text-[1.8rem] font-medium leading-[1.2] text-[hsl(225,11%,59%)] mb-[30px] before:content-[''] before:inline-block before:w-[12px] before:h-[12px] before:bg-[hsl(47,100%,69%)] before:rounded-full before:mr-[10px]">
          Why Choose Us          </p>

          <h2 className="text-[3.5rem] lg:text-[4.5rem] leading-[1.2] tracking-[-2px] text-[hsl(240,8%,17%)] mb-[50px]">
          Built for Your{' '}
            <span className="relative inline-block z-[1] before:content-[''] before:absolute before:bottom-[8px] before:left-0 before:w-full before:h-[6px] before:bg-[hsl(47,100%,69%)] before:z-[-1]">
             Growth
            </span>
          </h2>

          <ul className="grid gap-[60px] md:gap-[30px]">
            {features.map((feature, index) => (
              <li key={index}>
                <ScrollAnimation delay={index * 150}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-start gap-[25px] group hover:translate-x-2 transition-transform duration-300">
                  <div
                    className="bg-[hsla(var(--color),0.15)] text-[24px] max-w-max p-[18px] rounded-full mb-[20px] md:mb-0 transition-all duration-500 group-hover:shadow-[inset_0_0_0_30px_hsla(var(--color),0.9)]"
                    style={{ '--color': feature.color } as React.CSSProperties}
                  >
                    <div
                      className="text-[hsl(var(--color))] transition-colors duration-300 group-hover:text-white"
                      style={{ '--color': feature.color } as React.CSSProperties}
                    >
                      {feature.icon}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[2.4rem] leading-[1.3] font-medium text-[hsl(240,8%,17%)] mb-[10px]">
                      {feature.title}
                    </h3>

                    <p className="text-[1.7rem] lg:text-[1.8rem] text-[hsl(225,11%,59%)] max-w-[42ch]">
                      {feature.text}
                    </p>
                  </div>
                </div>
                </ScrollAnimation>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

