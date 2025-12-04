'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email) {
      setErrorMessage('Please enter your email address');
      setSubmitStatus('error');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="newsletter"
      className="py-[100px] lg:py-[120px] text-white bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/assets/images/newsletter-bg.jpg')" }}
      aria-label="newsletter"
    >
      <div className="container mx-auto px-[15px] xl:px-[30px] grid gap-[50px] lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <ScrollAnimation delay={100}>
          <figure className="max-w-max lg:order-1 lg:ml-auto">
            <Image
              src="/assets/images/newsletter-banner.png"
              width={355}
              height={356}
              loading="lazy"
              alt="newsletter banner"
              className="w-full h-auto"
            />
          </figure>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <div>
          <p className="text-[1.8rem] font-medium leading-[1.2] text-[hsl(0,0%,80%)] mb-[20px] before:content-[''] before:inline-block before:w-[12px] before:h-[12px] before:bg-[hsl(47,100%,69%)] before:rounded-full before:mr-[10px]">
            Stay Connected
          </p>

          <h2 className="text-[3.5rem] lg:text-[4.5rem] leading-[1.2] tracking-[-2px] text-white mb-[35px]">
            Get More to Go On - Subscribe for Latest Insights and Updates
          </h2>

          <form onSubmit={handleSubmit} className="relative">
            <div className="relative">
              <input
                type="email"
                name="email_address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className={`w-full bg-[hsl(241,77%,63%)] text-white text-[1.4rem] min-h-[60px] lg:min-h-[80px] px-[20px] lg:px-[40px] rounded-[8px] mb-[20px] lg:mb-0 shadow-[0px_15px_hsla(241,62%,34%,0.04)] outline-none outline-[3px] outline-transparent outline-offset-0 transition-all duration-300 focus:outline-white placeholder:text-white/70 ${
                  submitStatus === 'error' ? 'outline-red-400' : ''
                } ${submitStatus === 'success' ? 'outline-green-400' : ''}`}
                disabled={isSubmitting}
              />
              {errorMessage && (
                <p className="absolute top-full mt-2 text-red-300 text-[1.2rem]">{errorMessage}</p>
              )}
              {submitStatus === 'success' && (
                <p className="absolute top-full mt-2 text-green-300 text-[1.2rem]">
                  Thank you for subscribing!
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="max-w-max font-bold h-[55px] lg:h-[70px] lg:absolute lg:top-[10px] lg:right-[10px] lg:bottom-[10px] lg:h-auto flex items-center gap-[15px] px-[50px] lg:px-[25px] rounded-[10px] overflow-hidden transition-all duration-500 bg-[hsl(47,100%,69%)] text-[hsl(240,8%,17%)] relative z-[1] before:content-[''] before:absolute before:right-0 before:w-full before:h-1/2 before:scale-x-0 before:bg-[hsl(188,64%,60%)] before:z-[-1] before:transition-transform before:duration-300 before:origin-left before:top-0 after:content-[''] after:absolute after:right-0 after:w-full after:h-1/2 after:scale-x-0 after:bg-[hsl(188,64%,60%)] after:z-[-1] after:transition-transform after:duration-300 after:origin-right after:top-1/2 hover:before:scale-x-100 hover:before:origin-right hover:after:scale-x-100 hover:after:origin-left hover:text-white disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Subscribing...</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </>
              )}
            </button>
          </form>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

