"use client";
import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaSearch, FaUsers, FaAd, FaDollarSign, FaGlobe } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CampaignStrategySection = () => {
  // Carousel settings
  const carouselSettings = {
    dots: false, // Hide dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Carousel points data
  const strategyPoints = [
    {
      icon: <FaSearch className="text-5xl text-customYellow mb-4" />,
      title: "Optimized Search and Display Ads",
      description:
        "Focused on engineering-related keywords, utilizing a mix of broad and exact match keywords. Key negative keywords were added to prevent irrelevant clicks.",
    },
    {
      icon: <FaUsers className="text-5xl text-customYellow mb-4" />,
      title: "Targeted Audiences",
      description:
        "Segmented audiences based on affinities and personalized behavior, such as project managers, architectural service seekers, and consulting services.",
    },
    {
      icon: <FaAd className="text-5xl text-customYellow mb-4" />,
      title: "Improved Ad Extensions",
      description:
        "Ad extensions were utilized to enhance the visibility of GDC’s contact information, special offers, and service highlights.",
    },
    {
      icon: <FaDollarSign className="text-5xl text-customYellow mb-4" />,
      title: "Cost Efficiency",
      description:
        "Regularly monitored the campaigns to reduce CPC and CPA while ensuring high visibility in competitive regions like Auckland, Wellington, and Hamilton.",
    },
    {
      icon: <FaGlobe className="text-5xl text-customYellow mb-4" />,
      title: "Website Improvements",
      description:
        "The website's performance was improved with better alignment between page content and search queries, faster load times, and enhanced user experience.",
    },
  ];

  // Animation variants for the title
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation variants for the left content
  const leftContentVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-12 px-4 md:px-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 pr-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={leftContentVariants}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-customYellow text-3xl md:text-4xl font-bold mb-4 flex flex-wrap justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
             {"CAMPAIGN".split("").map((letter, index) => (
            <motion.span
              key={`campaign-${index}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
          <motion.span
            className="mx-1"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.1, delay: "DISPLAY".length * 0.1 }}
          >
            &nbsp;
          </motion.span>
          {"STRATEGY".split("").map((letter, index) => (
            <motion.span
              key={`strategy-${index}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.1,
                delay: ("DISPLAY".length + index) * 0.1,
              }}
            >
              {letter}
            </motion.span>
          ))}
          </motion.h2>
          <p className="text-gray-700 leading-relaxed">
            Based on an in-depth analysis of the market, GDC Digital Solutions
            implemented the following strategies:
          </p>
        </motion.div>

        {/* Right Content - Carousel */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Slider {...carouselSettings}>
            {strategyPoints.map((point, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center px-6 py-8 bg-gray-100 rounded-xl shadow-lg"
              >
                {/* Icon Wrapper */}
                <div className="flex m-auto items-center justify-center w-24 h-24">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-customYellow mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CampaignStrategySection;
