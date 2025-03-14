"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer motion for animations

export default function AboutTeamExpertise({ isDropdownOpen }) {
  const [isInView, setIsInView] = useState(false); // Track if the section is in view
  const sectionRef = useRef(null); // Reference to the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting); // Update state when section comes into view
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative py-10 px-20 text-white bg-white transition-all duration-300 ${
        isDropdownOpen ? "mt-16" : ""
      }`}
    >
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Content Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Only animate when in view
            transition={{ duration: 1 }}
          >
            {/* Heading Section */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-customYellow">
                We are the experts in driving digital growth through innovative
                solutions
              </h3>
              <p className="mt-4 text-customGray">
                From web development and SEO to targeted ad campaigns and
                cutting-edge technology, our team excels at crafting strategies
                that empower businesses to thrive in the digital landscape.
              </p>
            </motion.div>            
          </motion.div>

          {/* Right Column: Image Section */}
          <motion.div
            className="flex justify-center relative z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Image
              src="/assets/images/who-we-are.webp" // Ensure the path is correct
              alt="About Us"
              width={900} // Adjust size as needed
              height={900}
              className="rounded-lg" // Set z-index to 50 for top-most layer
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
