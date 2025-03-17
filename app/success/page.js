"use client";
import { useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

export default function SuccessPage() {
  useEffect(() => {
    // Track form submission conversion on page load
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16917143672/LaiLCKf31asaEPjA3II_'
      });
      console.log('[Tracking] Form submission conversion tracked on success page');
    }
  }, []);

  return (
    <>
      {/* Form submission conversion script */}
      <Script
        id="gtag-success-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {'send_to': 'AW-16917143672/LaiLCKf31asaEPjA3II_'});
          `,
        }}
      />
      
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
        <div id="move-down" className="py-20">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
            <div className="text-green-500 mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-16 w-16 mx-auto" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h1>
            <p className="text-gray-600 mb-6">
              Your message has been received successfully. We'll get back to you as soon as possible.
            </p>
            <Link 
              href="/" 
              className="inline-block bg-customYellow text-white px-6 py-2 rounded-lg font-semibold hover:bg-customGray transition duration-300"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}