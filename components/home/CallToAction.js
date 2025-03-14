"use client";

import { motion } from "framer-motion"; // Importing framer-motion for animations
import { useInView } from "react-intersection-observer"; // Importing useInView for triggering animations on view

export default function CallToAction() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Allows the animation to re-trigger every time it comes into view
    threshold: 0.2, // Defines how much of the section needs to be visible before triggering the animation
  });

  // Animation Variants for the text and button
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.8 },
    },
  };

  return (
    <section className="py-10 px-6 md:px-16" ref={ref}>
      {" "}
      {/* Attach ref here */}
      <motion.div
        className="py-10 bg-gradient-to-r from-customYellow to-customLightYellow text-white rounded-lg relative overflow-hidden"
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Animate based on inView
        variants={containerVariants}
      >
        <div className="container mx-auto text-center relative z-10">
          {/* Main Content */}
          <motion.h2
            className="text-lg md:text-xl font-semibold mb-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"} // Animate based on inView
          >
            Get FREE Marketing Consultation to Grow Your Business
          </motion.h2>

          {/* Action Button */}
          <motion.a
            href="/schedule-consultation"
            className="border-2 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
            variants={buttonVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"} // Animate based on inView
          >
            Book Free Consultation
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
