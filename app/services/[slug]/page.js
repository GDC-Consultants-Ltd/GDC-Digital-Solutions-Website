"use client"; // This marks the component as a Client Component

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
import NFCBenefits from "@/components/services/nfc-cards/NFCBenefits";
import NFCIntroductionSection from "@/components/services/nfc-cards/NFCIntroductionSection";
import CaseStudyCard from "@/components/services/case-study/CaseStudyCard";
import GoogleAdsProcessFlow from "@/components/services/google-ads/GoogleAdsProcessFlow";

// Define or import serviceDetails at the top
const serviceDetails = {
  development: {
    heading: "Website Development",
    description: "Build professional and engaging websites.",
    image: "/assets/images/services/6.png",
  },
  "google-ads": {
    heading: "Google Ads",
    description: "Optimize your ads to reach the right audience.",
    image: "/assets/images/services/7.png",
  },
  seo: {
    heading: "SEO/ Copywriting",
    description: "Enhance your content for better search rankings.",
    image: "/assets/images/services/8.png",
  },
  "nfc-cards": {
    heading: "NFC Cards",
    description: "Innovate with contactless technology.",
    image: "/assets/images/services/9.png",
  },
};

const serviceCaseStudies = {
  development: {
    heading: "GDC CONSULTANTS",
    statistic: "Increase in Engagement",
    description:
      "The newly redesigned website brought a modern, user-centered design that significantly improved navigation, mobile responsiveness, and lead generation capabilities. GDC Consultants now experience enhanced visibility and increase in user engagement thanks to clear calls-to-action and optimized user flow.",
    buttonLabel: "View Success Story",
    imagePath: "/assets/images/website-dev/gdc-consultants.png",
    caseStudyPath: "/case-studies/web-development",
  },
  "google-ads": {
    heading: "GDC CONSULTANTS",
    statistic: "91.6%",
    description:
      "Website traffic increased from August to September after the implementation of Google Ads.",
    buttonLabel: "View Success Story",
    imagePath: "/assets/images/google-ads/gdc-ads.png",
    caseStudyPath: "/case-studies/google-ads",
  },
  seo: {
    heading: "SEO and Copywriting Success",
    statistic: "Top 5",
    description:
      "Client’s content consistently ranks in the top 5 of search engines.",
    buttonLabel: "See the Results",
    imagePath: "/assets/images/seo-case-study.png",
    caseStudyPath: "/case-studies/seo",
  },
  "nfc-cards": {
    heading: "NFC Cards Campaign",
    statistic: "150+",
    description:
      "Engaged over 150 customers with NFC technology in the first month.",
    buttonLabel: "Explore More",
    imagePath: "/assets/images/nfc-case-study.png",
    caseStudyPath: "/case-studies/nfc",
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

  return (
    <>
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
          {/* Animated Heading */}
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            {service.heading
              .split(" ")[0]
              .split("")
              .map((letter, index) => (
                <span
                  key={index}
                  className="inline-block"
                  style={{
                    animation: `fadeIn 0.05s ease forwards`,
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                  }}
                >
                  {letter}
                </span>
              ))}{" "}
            <span className="block text-customYellow">
              {service.heading
                .split(" ")[1]
                .split("")
                .map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block"
                    style={{
                      animation: `fadeIn 0.05s ease forwards`,
                      animationDelay: `${
                        (index + service.heading.split(" ")[0].length) * 0.1
                      }s`,
                      opacity: 0,
                    }}
                  >
                    {letter}
                  </span>
                ))}
            </span>
          </h1>

          <p className="text-lg text-white mb-6">{service.description}</p>

          {/* Call to Action Button */}
          <a
            href="#contact"
            className="border-2 text-white px-6 py-3 rounded-full transition-all"
          >
            Contact Now
          </a>
        </div>

        {/* Down Arrow Icon with Motion */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
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

      {service.heading === "NFC Cards" && (
        <section id="next-section">
          <NFCIntroductionSection />
          <NFCBenefits />
        </section>
      )}

      <CallToAction />
    </>
  );
}
