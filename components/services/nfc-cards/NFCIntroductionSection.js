"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const NFCIntroductionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation will be activated every time the section is viewed
    threshold: 0.2, // Animation will trigger when 20% of the element is visible
  });

  return (
    <section className="py-12 px-4 md:px-20 bg-gray-100" ref={ref}>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          {/* Section Title */}
          <motion.h2
            className="text-customYellow text-xl md:text-3xl font-bold text-left mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}} // Animate when in view
            transition={{ duration: 0.8 }}
          >
            SEAMLESS CONNECTIVITY WITH NFC CARDS
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-gray-800 leading-relaxed mb-8 max-w-3xl"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            As NFC (Near Field Communication) technology gains momentum in New
            Zealand, GDC Digital Solutions is at the forefront of this exciting
            innovation. NFC cards are transforming the way businesses and
            individuals interact, offering a seamless and secure way to share
            information and conduct transactions with just a tap.
          </motion.p>

          {/* Subheading */}
          <motion.h3
            className="text-2xl font-semibold text-customGray mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            What are NFC Cards?
          </motion.h3>

          {/* NFC Card Description */}
          <motion.p
            className="text-gray-800 leading-relaxed mb-8 max-w-3xl"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            NFC cards utilize cutting-edge technology to enable quick,
            contactless communication between devices. They are ideal for a
            variety of applications, including contactless payments, event
            ticketing, digital business cards, and more. With the rise of NFC
            technology in New Zealand, businesses have the opportunity to
            enhance customer experiences and streamline operations.
          </motion.p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/assets/images/nfc/nfc-bg.webp" // Replace with the actual image path
              alt="NFC Card Illustration"
              width={500} // Adjust width as needed
              height={400} // Adjust height as needed
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NFCIntroductionSection;
