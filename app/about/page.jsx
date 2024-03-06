// app/pages/about.page.js
import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">About NextNews</h1>
      <p className="text-lg text-center mb-4">
        NextNews is your go-to source for the latest and most relevant news articles from around the globe.
      </p>
      <p className="text-md mb-2">
        Built with the modern web in mind, NextNews leverages the best technologies to bring you real-time news updates,
        insightful articles, and interactive features. Our platform is designed to be fast, responsive, and user-friendly,
        ensuring that you stay informed about the world around you without any hassle.
      </p>
      <p className="text-md">
        Technologies used in NextNews include:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Next.js 14 - For a fast, SEO-friendly web experience</li>
        <li>Firebase - For real-time database and authentication</li>
        <li>Tailwind CSS & DaisyUI - For sleek, responsive design</li>
      </ul>
      <p className="text-md">
        We're committed to providing you with up-to-date news from reliable sources, making it easier than ever to stay
        connected to the information that matters most to you.
      </p>
    </div>
  );
}