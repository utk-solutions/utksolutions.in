'use client';

import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimation from './ScrollAnimation';

const services = [
  { icon: 'service-icon-1.png', title: 'Cloud Engineering', color: '174, 77%, 50%' },
  { icon: 'service-icon-2.png', title: 'Product Engineering', color: '267, 76%, 57%' },
  { icon: 'service-icon-3.png', title: 'Expert Consulting', color: '17, 100%, 68%' },
  { icon: 'service-icon-4.png', title: 'Platform Services', color: '343, 98%, 60%' },
];

export default function Service() {
  return (
    <section
      id="service"
      className="py-[100px] lg:py-[120px] bg-[hsl(230,60%,98%)]"
      aria-label="service"
    >
      <div className="container mx-auto px-[15px] xl:px-[30px]">
        <p className="text-[1.8rem] font-medium leading-[1.2] text-[hsl(225,11%,59%)] text-center mb-[30px] before:content-[''] before:inline-block before:w-[12px] before:h-[12px] before:bg-[hsl(47,100%,69%)] before:rounded-full before:mr-[10px]">
          Our Core Services
        </p>

        <h2 className="text-[3.5rem] lg:text-[4.5rem] leading-[1.2] tracking-[-2px] text-[hsl(240,8%,17%)] text-center mb-[50px] lg:mb-[60px] max-w-[20ch] mx-auto">
          Remote Teams, Product Engineering &{' '}
          <span className="relative inline-block z-[1] before:content-[''] before:absolute before:bottom-[8px] before:left-0 before:w-full before:h-[6px] before:bg-[hsl(47,100%,69%)] before:z-[-1]">
            Tech Solutions
          </span>
        </h2>

        <ul className="grid gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <li key={index}>
              <ScrollAnimation delay={index * 100}>
                <div
                  className="h-full bg-white p-[45px] pb-[40px] rounded-[20px] border-b-[3px] border-transparent shadow-[0px_4px_4px_hsla(231,20%,49%,0.06)] transition-all duration-300 hover:border-[hsl(var(--color))] group hover:shadow-[0px_8px_16px_hsla(231,20%,49%,0.12)] hover:-translate-y-2"
                  style={{ '--color': service.color } as React.CSSProperties}
                >
                  <div className="max-w-max p-[15px] rounded-[8px] bg-[hsla(var(--color),0.15)] mb-[25px] transition-all duration-500 group-hover:[transform:rotateY(180deg)]">
                    <Image
                      src={`/assets/images/${service.icon}`}
                      width={30}
                      height={30}
                      alt="service icon"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-[2.4rem] lg:text-[2rem] leading-[1.3] font-medium text-[hsl(240,8%,17%)]">
                    <Link
                      href="#"
                      className="transition-colors duration-300 group-hover:text-[hsl(var(--color))]"
                    >
                      {service.title}
                    </Link>
                  </h3>
                </div>
              </ScrollAnimation>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

