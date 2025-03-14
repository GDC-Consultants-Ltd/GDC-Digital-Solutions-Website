"use client";

import CallToAction from "@/components/home/CallToAction";
import CustomCodedWebsites from "@/components/services/web-development/CustomCodedWebsites";
import Packages from "@/components/services/web-development/Packages";
import ProcessFlow from "@/components/services/web-development/ProcessFlow";
import WebDevelopmentBenefits from "@/components/services/web-development/WebDevelopment";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import GoogleAdsBenefits from "@/components/services/google-ads/GoogleAds";
import OnePageWebsite from "@/components/services/web-development/OnePageWebsite";
import SeoOverview from "@/components/services/seo/SeoOverview";
import CaseStudyCard from "@/components/services/case-study/CaseStudyCard";
import GoogleAdsProcessFlow from "@/components/services/google-ads/GoogleAdsProcessFlow";
import Head from "next/head";
import Link from "next/link";
import ConsultingBenefits from "@/components/services/business-consulting/ConsultingBenefits";
import ConsultingIntroductionSection from "@/components/services/business-consulting/ConsultingIntroductionSection";
import ExpertiseSection from "@/components/services/business-consulting/ExpertiseSection";
import ClosingSection from "@/components/services/business-consulting/ClosingSection";
import AppDevelopmentBenefits from "@/components/app-development/AppDevelopment";
import AppProcessFlow from "@/components/app-development/ProcessFlow";

// Define or import serviceDetails at the top
const serviceDetails = {
  "google-ads": {
    heading: "Google Ads",
    description: "Optimize your ads to reach the right audience.",
    image: "/assets/images/services/7.webp",
  },
  seo: {
    heading: "SEO/ Copywriting",
    description: "Enhance your content for better search rankings.",
    image: "/assets/images/services/8.webp",
  },
  development: {
    heading: "Website Development",
    description: "Build professional and engaging websites.",
    image: "/assets/images/services/6.webp",
  },
  "app-development": {
    heading: "App Development",
    description: "Mobile & web applications",
    image: "/assets/images/services/10.png",
  },
  "business-consulting": {
    heading: "Business Analysis & Consulting",
    description: "Strategic Business Solutions",
    image: "/assets/images/services/11.png",
  },
};

const serviceCaseStudies = {
  development: {
    heading: "GDC CONSULTANTS",
    statistic: "Increase in Engagement",
    description:
      "The newly redesigned website brought a modern, user-centered design that significantly improved navigation, mobile responsiveness, and lead generation capabilities. GDC Consultants now experience enhanced visibility and increase in user engagement thanks to clear calls-to-action and optimized user flow.",
    buttonLabel: "View Success Story",
    imagePath: "/assets/images/website-dev/gdc-consultants.webp",
    caseStudyPath: "/case-studies/web-development",
  },
  "google-ads": {
    heading: "GDC CONSULTANTS",
    statistic: "91.6%",
    description:
      "Website traffic increased from August to September after the implementation of Google Ads.",
    buttonLabel: "View Success Story",
    imagePath: "/assets/images/google-ads/gdc-ads.webp",
    caseStudyPath: "/case-studies/google-ads",
  },
  seo: {
    heading: "SEO and Copywriting Success",
    statistic: "Top 5",
    description:
      "Client’s content consistently ranks in the top 5 of search engines.",
    buttonLabel: "See the Results",
    imagePath: "/assets/images/seo-case-study.webp",
    caseStudyPath: "/case-studies/seo",
  },
  "nfc-cards": {
    heading: "NFC Cards Campaign",
    statistic: "150+",
    description:
      "Engaged over 150 customers with NFC technology in the first month.",
    buttonLabel: "Explore More",
    imagePath: "/assets/images/nfc-case-study.webp",
    caseStudyPath: "/case-studies/nfc",
  },
};

// Define SEO metadata for each service
const serviceSEOData = {
  development: {
    title: "Professional Web Development Services | GDC Digital Solutions",
    description:
      "Get professional web development services with GDC Digital Solutions. We build responsive, SEO-friendly websites tailored to boost your business growth online.",
    keywords:
      "web development services, custom websites, responsive design, website development NZ, professional web developers, business websites, SEO-friendly development",
    canonical: "https://gdcdigital.net/services/development",
  },
  "google-ads": {
    title:
      "Google Ads Management Services | Boost ROI with GDC Digital Solutions",
    description:
      "Boost your business with GDC Digital Solutions' expert Google Ads services. Drive traffic, generate leads, and increase ROI with targeted campaigns in New Zealand.",
    keywords:
      "Google Ads management, PPC advertising, paid search marketing, Google Ads agency NZ, ROI optimization, lead generation, targeted advertising",
    canonical: "https://gdcdigital.net/services/google-ads",
  },
  seo: {
    title: "SEO Services New Zealand | Boost Website Traffic & Rankings",
    description:
      "Boost your website's ranking with GDC Digital Solutions. We offer expert SEO services, including keyword optimization, on-page SEO, and link building for higher traffic.",
    keywords:
      "SEO services NZ, search engine optimization, keyword optimization, link building, on-page SEO, website rankings, organic traffic",
    canonical: "https://gdcdigital.net/services/seo",
  },
  "nfc-cards": {
    title: "NFC Business Cards New Zealand | Smart Contactless Card Solutions",
    description:
      "Get smart with NFC Cards from GDC Digital Solutions. Simplify contactless sharing of information, boost networking, and enhance your brand visibility effortlessly.",
    keywords:
      "NFC business cards, contactless cards, digital business cards, smart cards NZ, contactless sharing, networking solutions, brand visibility",
    canonical: "https://gdcdigital.net/services/nfc-cards",
  },
};

export default function ServicePage({ params, isServicesOpen, isAboutOpen }) {
  const { slug } = params;

  // Use serviceDetails and serviceCaseStudies objects here
  const service = serviceDetails[slug];
  const caseStudy = serviceCaseStudies[slug];

  if (!service) {
    notFound();
  }

  const handleScrollDown = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const animateText = (text, startDelay = 0) => {
    return text.split("").map((char, index) => {
      // For spaces, use a non-breaking space character
      const display = char === " " ? "\u00A0" : char;
      return (
        <span
          key={index}
          className="inline-block"
          style={{
            animation: `fadeIn 0.05s ease forwards`,
            animationDelay: `${(index + startDelay) * 0.1}s`,
            opacity: 0,
          }}
        >
          {display}
        </span>
      );
    });
  };

  return (
    <>
      <Head>
        <title>{serviceSEOData.title}</title>
        <meta name="description" content={serviceSEOData.description} />
        <meta name="keywords" content={serviceSEOData.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph tags */}
        <meta property="og:title" content={serviceSEOData.title} />
        <meta property="og:description" content={serviceSEOData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={serviceSEOData.canonical} />
        <meta
          property="og:image"
          content={`https://gdcdigital.net${service.image}`}
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={serviceSEOData.title} />
        <meta name="twitter:description" content={serviceSEOData.description} />
        <meta
          name="twitter:image"
          content={`https://gdcdigital.net${service.image}`}
        />

        <link rel="canonical" href={serviceSEOData.canonical} />

        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.heading,
            provider: {
              "@type": "Organization",
              name: "GDC Digital Solutions",
              url: "https://gdcdigital.net",
            },
            description: serviceSEOData.description,
            areaServed: "New Zealand",
            serviceType: service.heading,
            image: `https://gdcdigital.net${service.image}`,
            offers: {
              "@type": "Offer",
              areaServed: "New Zealand",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": serviceSEOData.canonical,
            },
          })}
        </script>
      </Head>

      <section className="relative flex items-center justify-center min-h-[600px] bg-gray-800 text-white">
        {/* Gradient Overlay with Image */}
        <div className="absolute inset-0 z-10 bg-gradient-to-l from-gray-600 via-customGray to-transparent"></div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.heading}
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Inner content div for margin control */}
        <div
          id="move-down"
          className={`container relative z-10 mx-auto px-20 text-center transition-all duration-300 ${
            isServicesOpen || isAboutOpen ? "mt-20" : ""
          }`}
        >
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            {slug === "business-consulting" ? (
              // Special case for business consulting
              <>
                <div>{animateText("Business Analysis")}</div>
                <div className="text-customYellow">
                  {animateText("& Consulting", "Business Analysis".length)}
                </div>
              </>
            ) : (
              // For other services, dynamically use the heading from serviceDetails
              <>
                {service.heading.includes("&") ? (
                  // For headings with &, split into two parts
                  <>
                    <div>
                      {animateText(service.heading.split("&")[0].trim())}
                    </div>
                    <div className="text-customYellow">
                      {animateText(
                        "& " + service.heading.split("&")[1].trim(),
                        service.heading.split("&")[0].trim().length
                      )}
                    </div>
                  </>
                ) : (
                  // For headings without &, show first word in regular color, rest in yellow
                  <>
                    <div>{animateText(service.heading.split(" ")[0])}</div>
                    <div className="text-customYellow">
                      {animateText(
                        service.heading.split(" ").slice(1).join(" "),
                        service.heading.split(" ")[0].length
                      )}
                    </div>
                  </>
                )}
              </>
            )}
          </h1>

          <p className="text-lg text-white mb-6">{service.description}</p>

          {/* Call to Action Button */}
          <Link
            href="/contact-us"
            className="border-2 text-white px-6 py-3 rounded-full transition-all"
          >
            Contact Now
          </Link>
        </div>

        {/* Down Arrow Icon with Motion */}
        <motion.div
          className="absolute bottom-10 transform -translate-x-1/2 z-20 cursor-pointer"
          animate={{ y: [0, 10, 0] }} // Creates a bounce effect
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={handleScrollDown}
        >
          <ChevronDoubleDownIcon className="h-20 w-20 text-white" />
        </motion.div>

        {/* CSS Keyframes for fade-in effect */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {service.heading === "Website Development" && (
        <section id="next-section">
          <WebDevelopmentBenefits />
          <CustomCodedWebsites />
          <ProcessFlow />
          <CaseStudyCard
            heading={caseStudy.heading}
            statistic={caseStudy.statistic}
            description={caseStudy.description}
            buttonLabel={caseStudy.buttonLabel}
            imagePath={caseStudy.imagePath}
            caseStudyPath={caseStudy.caseStudyPath}
          />
          <Packages />
          <OnePageWebsite />
        </section>
      )}

      {service.heading === "Google Ads" && (
        <section id="next-section">
          <GoogleAdsBenefits />
          <GoogleAdsProcessFlow />
          <CaseStudyCard
            heading={caseStudy.heading}
            statistic={caseStudy.statistic}
            description={caseStudy.description}
            buttonLabel={caseStudy.buttonLabel}
            imagePath={caseStudy.imagePath}
            caseStudyPath={caseStudy.caseStudyPath}
          />
        </section>
      )}

      {service.heading === "SEO/ Copywriting" && (
        <section id="next-section">
          <SeoOverview />
        </section>
      )}

      {service.heading === "Business Analysis & Consulting" && (
        <section id="next-section">
          <ConsultingIntroductionSection />
          <ConsultingBenefits />
          <ExpertiseSection />
          <ClosingSection />
        </section>
      )}

      {service.heading === "App Development" && (
        <section id="next-section">
          <AppDevelopmentBenefits />
          <AppProcessFlow />
        </section>
      )}

      <CallToAction />
    </>
  );
}
