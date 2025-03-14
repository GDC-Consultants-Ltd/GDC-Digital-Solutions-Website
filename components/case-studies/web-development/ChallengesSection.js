"use client";
import React from "react";
import { motion } from "framer-motion";

const ChallengesSection = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section className="py-12 px-6 md:px-16">
      <motion.div
        className="max-w-6xl mx-auto p-4 md:p-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Section Title */}
        <motion.h2
          className="text-customYellow text-3xl md:text-4xl font-bold text-center mb-10 flex flex-wrap justify-center"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {"CHALLENGES".split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        {/* Challenge Description */}
        <motion.p
          className="text-gray-700 leading-relaxed text-center text-base md:text-lg mb-8"
          variants={itemVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          GDC Consultants approached GDC Digital Solutions to redesign their
          website to better reflect their brand identity and provide a more
          engaging, user-friendly experience. Their existing website was
          outdated, lacked modern functionality, and did not effectively
          communicate their services or expertise. Below are the key challenges
          that needed to be addressed:
        </motion.p>

        {/* Key Challenges */}
        <motion.ul
          className="text-justify list-disc list-inside text-gray-700 text-base md:text-lg leading-relaxed space-y-4 pl-6 md:pl-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.li variants={itemVariants} transition={{ duration: 0.6 }}>
            <span className="font-semibold">Outdated Design:</span> The existing
            website design and user interface were outdated, failing to capture
            the attention of visitors.
          </motion.li>
          <motion.li variants={itemVariants} transition={{ duration: 0.6 }}>
            <span className="font-semibold">Poor Navigation:</span> Ineffective
            site navigation made it difficult for users to find relevant
            information quickly.
          </motion.li>
          <motion.li variants={itemVariants} transition={{ duration: 0.6 }}>
            <span className="font-semibold">Lack of Mobile Responsiveness:</span>{" "}
            The website did not provide an optimal user experience on mobile
            devices, which impacted the overall user experience significantly.
          </motion.li>
          <motion.li variants={itemVariants} transition={{ duration: 0.6 }}>
            <span className="font-semibold">Low Search Engine Visibility:</span>{" "}
            Inadequate SEO implementation led to low search engine visibility,
            making it challenging for potential clients to discover their
            services.
          </motion.li>
          <motion.li variants={itemVariants} transition={{ duration: 0.6 }}>
            <span className="font-semibold">Lack of Clear CTAs:</span> The need
            for effective call-to-actions (CTAs) to drive lead generation was
            not adequately addressed.
          </motion.li>
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default ChallengesSection;
