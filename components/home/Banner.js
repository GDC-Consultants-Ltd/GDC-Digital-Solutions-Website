"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

// Separate WaveBackground into its own component file for better code splitting
const WaveBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Use ResizeObserver instead of window.addEventListener for better performance
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? window.innerWidth;
      setIsMobile(width < 768);
    });

    resizeObserver.observe(document.body);
    return () => resizeObserver.disconnect();
  }, []);

  // Memoize SVG paths to prevent unnecessary re-renders
  const paths = useMemo(
    () => [
      {
        d: "M0 525C51.93 534.4 103.86 543.8 166 553C228.14 562.2 300.51 571.18 348 597C395.49 622.82 418.12 665.46 470 678C521.88 690.54 603.01 672.96 664 704C724.99 735.04 765.84 814.7 815 838C864.16 861.3 921.63 828.23 979 849C1036.37 869.77 1093.64 944.36 1140 977C1186.36 1009.64 1221.82 1000.33 1270 1018C1318.18 1035.67 1379.09 1080.34 1440 1125V700H0V525Z",
        opacity: "1",
      },
      {
        d: "M0 385C50.27 360.78 100.53 336.56 159 347C217.47 357.44 284.14 402.53 342 456C399.86 509.47 448.9 571.3 492 583C535.1 594.7 572.25 556.26 625 573C677.75 589.74 746.09 661.64 801 709C855.91 756.36 897.4 779.16 949 790C1000.6 800.84 1062.32 799.73 1113 823C1163.68 846.27 1203.34 893.94 1256 925C1308.66 956.06 1374.33 970.53 1440 985V700H0V385Z",
        opacity: "0.53",
      },
      {
        d: "M0 245C47.74 218.72 95.47 192.44 145 200C194.53 207.56 245.84 248.95 309 292C372.16 335.05 447.16 379.77 499 420C550.84 460.23 579.54 495.96 635 512C690.46 528.04 772.7 524.38 826 544C879.3 563.62 903.67 606.53 952 623C1000.33 639.47 1072.63 629.51 1129 646C1185.37 662.49 1225.82 705.43 1275 743C1324.18 780.57 1382.09 812.79 1440 845V700H0V245Z",
        opacity: "0.4",
      },
    ],
    []
  );

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 690"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 w-full h-auto"
        style={{
          transform: "scaleX(-1) scaleY(-1)",
          minHeight: "320px",
        }}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="95%" y1="28%" x2="5%" y2="72%">
            <stop offset="5%" stopColor="#ffb500"></stop>
            <stop offset="95%" stopColor="#ffb500"></stop>
          </linearGradient>
        </defs>

        {paths.map((path, index) => (
          <path
            key={index}
            d={path.d}
            fill="url(#waveGradient)"
            fillOpacity={path.opacity}
            className={`${!isMobile ? "wave-animate" : ""}`}
          />
        ))}
      </svg>
    </div>
  );
};

const Banner = ({ isServicesOpen, isAboutOpen }) => {
  const services = useMemo(
    () => [
      "Website Development",
      "Google Ads",
      "SEO / Copywriting",
      "NFC Cards",
    ],
    []
  );

  const [currentService, setCurrentService] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? window.innerWidth;
      setIsMobile(width < 768);
    });

    resizeObserver.observe(document.body);

    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => {
      resizeObserver.disconnect();
      clearInterval(interval);
    };
  }, [services]);

  return (
    <section
      id="top"
      className="relative pt-24 lg:pt-32 transition-all duration-300 min-h-[60vh]"
    >
      <div className="absolute inset-0 w-full h-full z-0 bg-cover bg-bottom bg-no-repeat">
        <WaveBackground />
      </div>

      <div
        className={`relative z-10 ${
          isServicesOpen || isAboutOpen ? "mt-16" : ""
        }`}
        id="move-down"
      >
        <div className="container relative z-10 mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-20">
          <div
            className={`lg:w-1/2 w-full text-center lg:text-left ${
              !isMobile ? "animate-slideInLeft" : ""
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
              We Make{" "}
              <span
                key={currentService}
                className={`text-customYellow inline-block ${
                  !isMobile ? "animate-slideInUp" : ""
                }`}
              >
                {services[currentService]}
              </span>
            </h1>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/schedule-consultation"
                className="px-6 py-3 border-2 border-customGray text-customGray font-semibold hover:bg-customLightGray hover:text-white transition-colors rounded-full"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>

          <div
            className={`lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center ${
              !isMobile ? "animate-slideInRight" : ""
            }`}
          >
            <div className="relative w-full max-w-lg aspect-[3/2]">
              <Image
                src="/assets/images/hero-bg.webp"
                alt="Team meeting illustration"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 480px"
                priority
                quality={85}
                loading="eager"
                fetchPriority="high"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx8eHRsdHR8fHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
