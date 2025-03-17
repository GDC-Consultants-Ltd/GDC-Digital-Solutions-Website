"use client";
import { useEffect } from "react";
import Script from "next/script";

// Track both phone calls and form submissions on the contact page
export default function ContactPageTracking() {
  useEffect(() => {
    // Set up a delayed verification check to ensure gtag is loaded properly
    const timeoutId = setTimeout(() => {
      if (typeof window !== 'undefined' && window.gtag) {
        console.log('[Contact Tracking] Google Ads tracking configured for contact page');
      } else {
        console.warn('[Contact Tracking] Google Ads tracking not available');
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {/* Phone Call Conversion Script */}
      <Script
        id="gtag-phone-call-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Predefine phone call conversion function
            function trackPhoneCallConversion() {
              if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                  'send_to': 'AW-16917143672/qxkRCPqN0qsaEPjA3II_'
                });
                console.log('[Contact Tracking] Phone call conversion tracked');
              }
            }
          `,
        }}
      />

      {/* Form Submission Conversion Script */}
      <Script
        id="gtag-form-submission-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Predefine form submission conversion function
            function trackFormSubmissionConversion() {
              if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                  'send_to': 'AW-16917143672/LaiLCKf31asaEPjA3II_'
                });
                console.log('[Contact Tracking] Form submission conversion tracked');
              }
            }
          `,
        }}
      />
    </>
  );
}