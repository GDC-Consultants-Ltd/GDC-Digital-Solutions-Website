import { useState, useEffect, Suspense, memo } from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";

const GA_MEASUREMENT_ID = "G-G4X6P45YTZ";
const DEBUG_MODE = true; // Toggle this for debugging

// Debug logger
const logAnalytics = (action, data) => {
  if (DEBUG_MODE) {
    console.log(
      `%c[GA Debug] ${action}`,
      'background: #f0f0f0; color: #333; padding: 2px 5px; border-radius: 3px;',
      data
    );
  }
};

const GoogleAnalyticsTracking = memo(function GoogleAnalyticsTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (typeof window.gtag === "function") {
        const url = pathname + searchParams.toString();
        
        // Debug log before sending
        logAnalytics('Sending pageview', { url, title: document.title });
        
        window.gtag("event", "page_view", {
          page_location: url,
          page_title: document.title,
          send_to: GA_MEASUREMENT_ID,
          debug_mode: DEBUG_MODE
        });
      } else {
        logAnalytics('Error', 'gtag not found');
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [pathname, searchParams]);

  return null;
});

function useDelayedLoad() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    logAnalytics('Initializing', 'Starting delayed load');
    const timeoutId = setTimeout(() => {
      setShouldLoad(true);
      logAnalytics('Loaded', 'Analytics ready to load');
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return shouldLoad;
}

export default function GoogleAnalytics() {
  const shouldLoadGA = useDelayedLoad();

  useEffect(() => {
    // Verify GA installation
    if (DEBUG_MODE) {
      setTimeout(() => {
        if (typeof window.gtag === 'function') {
          logAnalytics('Status', 'GA installed and running');
          // Test basic event
          window.gtag('event', 'test_event', {
            debug_mode: true,
            send_to: GA_MEASUREMENT_ID
          });
        } else {
          logAnalytics('Error', 'GA not installed properly');
        }
      }, 2000);
    }
  }, []);

  if (!shouldLoadGA) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        onLoad={() => logAnalytics('Script loaded', 'GA base script ready')}
        onError={() => logAnalytics('Script error', 'GA base script failed to load')}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){
              dataLayer.push(arguments);
              if(${DEBUG_MODE}) {
                console.log('[GA Debug] dataLayer push:', arguments);
              }
            }
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true,
              debug_mode: ${DEBUG_MODE}
            });
          `,
        }}
        onLoad={() => logAnalytics('Config loaded', 'GA configuration complete')}
        onError={() => logAnalytics('Config error', 'GA configuration failed')}
      />
      <Suspense fallback={null}>
        <GoogleAnalyticsTracking />
      </Suspense>
    </>
  );
}