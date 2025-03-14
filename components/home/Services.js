"use client";

import { useEffect, useState } from "react";
import {
  ChartBarIcon,
  PresentationChartLineIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

const services = [
  {
    id: 1,
    icon: ChartBarIcon,
    title: "Website Development",
    description:
      "Create stunning, user-friendly websites to enhance your brand's online presence and drive growth.",
  },
  {
    id: 2,
    icon: PresentationChartLineIcon,
    title: "Google Ads",
    description:
      "Boost your business with targeted Google Ads that convert clicks into loyal customers.",
  },
  {
    id: 3,
    icon: GlobeAltIcon,
    title: "SEO / Copywriting",
    description:
      "Increase visibility with compelling, SEO-friendly content that drives meaningful traffic.",
  },
  {
    id: 4,
    icon: MagnifyingGlassIcon,
    title: "NFC Cards",
    description:
      "Modern, eco-friendly NFC cards for seamless networking and lasting connections.",
  },
];

const Services = () => {
  const [isSingleColumn, setIsSingleColumn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // Start at false for transition effect
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsSingleColumn(width < 640);
    };

    // Initial setup
    handleResize();
    window.addEventListener("resize", handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), 100);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "50px",
      }
    );

    const section = document.getElementById("services-section");
    if (section) {
      observer.observe(section);
    }

    // Make sure content becomes visible even if image loading fails
    // This is crucial for mobile view
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (section) {
        observer.unobserve(section);
      }
      clearTimeout(timer);
    };
  }, []);

  // Update isLoaded when services.webp image loads
  const handleMainImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <section
      id="services-section"
      className="relative py-10 sm:py-20 lg:py-40 min-h-[600px] overflow-hidden"
      style={{
        opacity: isLoaded ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      {/* Background Image - Now with a mobile fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-[-10%] sm:inset-[-5%]">
          {!isSingleColumn ? (
            <Image
              src="/assets/images/bg.webp"
              alt="Background"
              fill
              priority
              fetchPriority="high"
              className="object-cover mix-blend-overlay transform scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
              quality={75}
              onLoad={() => setIsLoaded(true)}
              style={{
                objectPosition: windowWidth < 768 ? 'center center' : '50% 50%'
              }}
            />
          ) : (
            // Mobile background - simple color or pattern
            <div className="absolute inset-0 bg-gray-900" aria-hidden="true"></div>
          )}
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Image Section */}
          <div
            className={`lg:w-1/2 w-full mb-8 lg:mb-0`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? "0" : "20px"})`,
              transition:
                "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
            }}
          >
            <div className="relative w-full max-w-[500px] mx-auto lg:mx-0">
              <div className="aspect-[4/3] w-full">
                <Image
                  src="/assets/images/services.webp"
                  alt="Services Illustration"
                  fill
                  priority
                  fetchPriority="high"
                  className="object-contain"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
                  quality={85}
                  onLoad={handleMainImageLoad}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSUvJR8lPTw1PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/2wBDARUXFyAeIB8gID0lJT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`flex items-start ${
                      isSingleColumn ? "bg-customYellow rounded-lg p-4" : ""
                    }`}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateY(0)"
                        : "translateY(20px)",
                      transition: `opacity 0.5s ease-in-out ${
                        index * 0.1
                      }s, transform 0.5s ease-in-out ${index * 0.1}s`,
                    }}
                  >
                    <div className="p-3 rounded-full bg-white mr-4 flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-customYellow" />
                    </div>
                    <div className="flex-1">
                      <h1 className="font-bold text-lg text-white">
                        {service.title}
                      </h1>
                      <p className="text-white text-sm sm:text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;