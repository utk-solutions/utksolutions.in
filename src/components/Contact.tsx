'use client';

import { useState, FormEvent } from 'react';
import ScrollAnimation from './ScrollAnimation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please enter your message');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-[100px] lg:py-[120px] bg-white"
      aria-label="contact"
    >
      <div className="container mx-auto px-[15px] xl:px-[30px]">
        <ScrollAnimation>
          <p className="text-[1.8rem] font-medium leading-[1.2] text-[hsl(225,11%,59%)] text-center mb-[20px] before:content-[''] before:inline-block before:w-[12px] before:h-[12px] before:bg-[hsl(47,100%,69%)] before:rounded-full before:mr-[10px]">
            Get In Touch
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          <h2 className="text-[3.5rem] lg:text-[4.5rem] leading-[1.2] tracking-[-2px] text-[hsl(240,8%,17%)] text-center mb-[50px] lg:mb-[60px]">
            Get a Free{' '}
            <span className="relative inline-block z-[1] before:content-[''] before:absolute before:bottom-[8px] before:left-0 before:w-full before:h-[6px] before:bg-[hsl(47,100%,69%)] before:z-[-1]">
              Consultation
            </span>
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <div className="max-w-[800px] mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-[hsl(230,60%,98%)] text-[hsl(240,8%,17%)] text-[1.6rem] min-h-[60px] px-[20px] rounded-[10px] border-2 border-transparent outline-none transition-all duration-300 focus:border-[hsl(241,77%,63%)] focus:bg-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full bg-[hsl(230,60%,98%)] text-[hsl(240,8%,17%)] text-[1.6rem] min-h-[60px] px-[20px] rounded-[10px] border-2 border-transparent outline-none transition-all duration-300 focus:border-[hsl(241,77%,63%)] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name (Optional)"
                  className="w-full bg-[hsl(230,60%,98%)] text-[hsl(240,8%,17%)] text-[1.6rem] min-h-[60px] px-[20px] rounded-[10px] border-2 border-transparent outline-none transition-all duration-300 focus:border-[hsl(241,77%,63%)] focus:bg-white"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="w-full bg-[hsl(230,60%,98%)] text-[hsl(240,8%,17%)] text-[1.6rem] px-[20px] py-[15px] rounded-[10px] border-2 border-transparent outline-none transition-all duration-300 focus:border-[hsl(241,77%,63%)] focus:bg-white resize-none"
                />
              </div>

              {errorMessage && (
                <div className="bg-red-50 border-2 border-red-200 text-red-700 px-6 py-4 rounded-[10px] text-[1.6rem]">
                  {errorMessage}
                </div>
              )}

              {submitStatus === 'success' && (
                <div className="bg-green-50 border-2 border-green-200 text-green-700 px-6 py-4 rounded-[10px] text-[1.6rem]">
                  Thank you! We'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full max-w-max mx-auto font-bold h-[70px] flex items-center justify-center gap-[15px] px-[50px] rounded-[10px] overflow-hidden transition-all duration-500 bg-[hsl(241,77%,63%)] text-white relative z-[1] before:content-[''] before:absolute before:right-0 before:w-full before:h-1/2 before:scale-x-0 before:bg-[hsl(47,100%,69%)] before:z-[-1] before:transition-transform before:duration-300 before:origin-left before:top-0 after:content-[''] after:absolute after:right-0 after:w-full after:h-1/2 after:scale-x-0 after:bg-[hsl(47,100%,69%)] after:z-[-1] after:transition-transform after:duration-300 after:origin-right after:top-1/2 hover:before:scale-x-100 hover:before:origin-right hover:after:scale-x-100 hover:after:origin-left hover:text-[hsl(240,8%,17%)] hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
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
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
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

