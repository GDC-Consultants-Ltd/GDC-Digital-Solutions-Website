import React, { useState, useEffect } from "react";

export default function HubSpotMeeting() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Create intersection observer to detect when component is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isScriptLoaded) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    // Get the container element to observe
    const container = document.querySelector('.meetings-container');
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [isScriptLoaded]);

  const loadHubSpotScript = () => {
    if (!isScriptLoaded) {
      const script = document.createElement("script");
      script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
      script.type = "text/javascript";
      script.async = true;
      
      script.onload = () => {
        setIsScriptLoaded(true);
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  };

  const handleInteraction = () => {
    if (!isScriptLoaded) {
      loadHubSpotScript();
    }
  };

  useEffect(() => {
    if (isVisible) {
      loadHubSpotScript();
    }
  }, [isVisible]);

  return (
    <div 
      className="flex justify-center w-full"
      onMouseEnter={handleInteraction}
      onClick={handleInteraction}
    >
      <div
        className="meetings-container meetings-iframe-container w-full max-w-screen-xl px-4"
        data-src="https://meetings.hubspot.com/gdc-digital-solutions/new-meeting-schedular?embed=true"
        style={{
          height: "100vh",
          border: "none",
          overflow: "hidden",
          minHeight: "400px", // Ensure there's enough height for intersection observer
        }}
      >
        {!isScriptLoaded && (
          <div className="flex items-center justify-center h-full bg-gray-50">
            <p className="text-gray-600">
              Click or hover to load meeting scheduler
            </p>
          </div>
        )}
      </div>
    </div>
  );
}