"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const GallerySection = () => {
  const section1 = [
    { src: "/assets/images/google-ads/section1/1.webp", alt: "Ad Overview 1" },
    { src: "/assets/images/google-ads/section1/2.webp", alt: "Ad Overview 2" },
    { src: "/assets/images/google-ads/section1/3.webp", alt: "Ad Overview 3" },
    { src: "/assets/images/google-ads/section1/4.webp", alt: "Ad Overview 4" },
    { src: "/assets/images/google-ads/section1/5.webp", alt: "Ad Overview 5" },
    { src: "/assets/images/google-ads/section1/6.webp", alt: "Ad Overview 6" },
  ];

  const section2 = [
    { src: "/assets/images/google-ads/section2/1.webp", alt: "Ad Overview 1" },
    { src: "/assets/images/google-ads/section2/2.webp", alt: "Ad Overview 2" },
    { src: "/assets/images/google-ads/section2/3.webp", alt: "Ad Overview 3" },
    { src: "/assets/images/google-ads/section2/4.webp", alt: "Ad Overview 4" },
    { src: "/assets/images/google-ads/section2/5.webp", alt: "Ad Overview 5" },
    { src: "/assets/images/google-ads/section2/6.webp", alt: "Ad Overview 6" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section className="py-16 bg-gray-100 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-customYellow text-3xl md:text-4xl font-bold text-center mb-10 flex flex-wrap justify-center"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Animated "SEARCH CAMPAIGN" */}
          {"SEARCH".split("").map((letter, index) => (
            <motion.span
              key={`search-${index}`}
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
            transition={{ duration: 0.1, delay: "SEARCH".length * 0.1 }}
          >
            &nbsp;
          </motion.span>
          {"CAMPAIGN".split("").map((letter, index) => (
            <motion.span
              key={`campaign-${index}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.1,
                delay: ("SEARCH".length + index) * 0.1,
              }}
            >
              {letter}
            </motion.span>
          ))}
          <span className="ml-2 text-customGray">ADS OVERVIEW</span>
        </motion.h2>

        {/* Masonry Grid for Section 1 */}
        <motion.div
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {section1.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg break-inside-avoid"
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500} // Adjust the width based on your layout needs
                height={300} // Adjust the height based on your layout needs
                className="w-full h-auto object-cover transform hover:scale-105 transition duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto mt-16">
        {/* Section Title */}
        <motion.h2
          className="text-customYellow text-3xl md:text-4xl font-bold text-center mb-10 flex flex-wrap justify-center"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {"DISPLAY".split("").map((letter, index) => (
            <motion.span
              key={`display-${index}`}
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
          {"CAMPAIGN".split("").map((letter, index) => (
            <motion.span
              key={`campaign-${index}`}
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
          <span className="ml-2 text-customGray">ADS OVERVIEW</span>
        </motion.h2>

        {/* Masonry Grid for Section 2 */}
        <motion.div
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {section2.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg break-inside-avoid"
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500} // Adjust the width based on your layout needs
                height={300} // Adjust the height based on your layout needs
                className="w-full h-auto object-cover transform hover:scale-105 transition duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
