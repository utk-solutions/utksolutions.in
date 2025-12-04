'use client';

import { use, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import blogsData from '@/data/blogs.json';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ScrollAnimation from '@/components/ScrollAnimation';

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = use(params);
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }
  }, []);

  const blog = blogsData.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[3rem] font-bold text-[hsl(240,8%,17%)] mb-4">Blog Not Found</h1>
          <Link
            href="/#blog"
            className="text-[hsl(241,77%,63%)] text-[1.8rem] hover:underline"
          >
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  // Format content with line breaks
  const formattedContent = blog.content.split('\n\n').map((paragraph, index) => (
    <p key={index} className="mb-6 text-[1.7rem] lg:text-[1.8rem] leading-relaxed text-[hsl(225,11%,59%)]">
      {paragraph}
    </p>
  ));

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Header */}
      <div className="bg-[hsl(230,60%,98%)] py-[60px] lg:py-[80px]">
        <div className="container mx-auto px-[15px] xl:px-[30px]">
          <ScrollAnimation>
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 text-[hsl(241,77%,63%)] text-[1.6rem] mb-8 hover:text-[hsl(241,77%,53%)] transition-colors"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Insights
          </Link>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <div className="flex flex-wrap items-center gap-[20px] mb-[30px]">
            <Link
              href="#"
              className="text-[hsl(241,77%,63%)] text-[1.4rem] font-bold uppercase transition-colors duration-300 hover:text-[hsl(240,8%,17%)]"
            >
              {blog.tag}
            </Link>

            <div className="flex items-center gap-[10px] text-[hsl(225,11%,59%)] font-medium">
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
              <span className="text-[1.4rem]">{blog.date}</span>
            </div>

            <div className="flex items-center gap-[10px] text-[hsl(225,11%,59%)] font-medium">
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span className="text-[1.4rem]">{blog.readTime}</span>
            </div>
          </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <h1 className="text-[3.5rem] lg:text-[5rem] leading-[1.1] tracking-[-2px] text-[hsl(240,8%,17%)] mb-[20px]">
              {blog.title}
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <div className="flex items-center gap-[15px] text-[hsl(225,11%,59%)]">
            <div className="w-[50px] h-[50px] rounded-full bg-[hsl(241,77%,63%)] flex items-center justify-center text-white font-bold text-[1.8rem]">
              {blog.author.charAt(0)}
            </div>
            <div>
              <p className="text-[1.6rem] font-medium text-[hsl(240,8%,17%)]">{blog.author}</p>
              <p className="text-[1.4rem]">{blog.category}</p>
            </div>
          </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-[15px] xl:px-[30px] py-[40px]">
        <figure className="rounded-[20px] overflow-hidden mb-[50px] shadow-[0px_4px_20px_hsla(0,0%,0%,0.1)]">
          <Image
            src={`/assets/images/${blog.image}`}
            width={blog.width || 1200}
            height={blog.height || 600}
            alt={blog.title}
            className="w-full h-auto"
            priority
          />
        </figure>

        {/* Content */}
        <article className="max-w-[800px] mx-auto">
          <div className="prose prose-lg max-w-none">
            {formattedContent}
          </div>

          {/* Share Section */}
          <div className="mt-[60px] pt-[40px] border-t border-[hsl(217,16%,90%)]">
            <p className="text-[1.8rem] font-medium text-[hsl(240,8%,17%)] mb-[20px]">Share this article:</p>
            <div className="flex gap-[15px]">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[hsl(241,77%,63%)] text-white p-[12px] rounded-[8px] transition-all duration-300 hover:bg-[hsl(241,77%,53%)] hover:scale-110"
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
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(blog.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[hsl(203,89%,53%)] text-white p-[12px] rounded-[8px] transition-all duration-300 hover:bg-[hsl(203,89%,43%)] hover:scale-110"
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
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[hsl(201,100%,35%)] text-white p-[12px] rounded-[8px] transition-all duration-300 hover:bg-[hsl(201,100%,25%)] hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>

      {/* Related Articles */}
      <div className="bg-[hsl(230,60%,98%)] py-[80px]">
        <div className="container mx-auto px-[15px] xl:px-[30px]">
          <h2 className="text-[3.5rem] lg:text-[4rem] leading-[1.2] tracking-[-2px] text-[hsl(240,8%,17%)] text-center mb-[50px]">
            Related Articles
          </h2>

          <div className="grid gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogsData
              .filter((b) => b.id !== blog.id)
              .slice(0, 3)
              .map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  href={`/blog/${relatedBlog.id}`}
                  className="bg-white rounded-[20px] overflow-hidden shadow-[0px_4px_4px_hsla(231,20%,49%,0.06)] transition-all duration-300 hover:shadow-[0px_8px_16px_hsla(231,20%,49%,0.12)] hover:-translate-y-2 group"
                >
                  <figure className="rounded-[20px] overflow-hidden mb-[20px]">
                    <Image
                      src={`/assets/images/${relatedBlog.image}`}
                      width={relatedBlog.width || 400}
                      height={relatedBlog.height || 250}
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </figure>

                  <div className="p-[25px]">
                    <div className="flex flex-wrap items-center gap-[15px] mb-[15px]">
                      <span className="text-[hsl(241,77%,63%)] text-[1.2rem] font-bold uppercase">
                        {relatedBlog.tag}
                      </span>
                      <span className="text-[hsl(225,11%,59%)] text-[1.2rem]">{relatedBlog.date}</span>
                    </div>

                    <h3 className="text-[2rem] leading-[1.3] font-medium text-[hsl(240,8%,17%)] mb-[10px] transition-colors duration-300 group-hover:text-[hsl(241,77%,63%)]">
                      {relatedBlog.title}
                    </h3>

                    <p className="text-[1.5rem] text-[hsl(225,11%,59%)] line-clamp-2">
                      {relatedBlog.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}

