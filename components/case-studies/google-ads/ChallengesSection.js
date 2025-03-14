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

        {/* Content */}
        <motion.p
          className="text-gray-700 leading-relaxed text-center text-base md:text-lg"
          variants={itemVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Before the September campaign launch,{" "}
          <span className="font-semibold">GDC Consultants Ltd</span> faced
          challenges with underperformance in certain ad groups and audience
          segments. Previous campaigns were not performing well and not properly
          optimized in terms of keywords and audiences. The engineering and
          consultancy services industry is highly competitive, so optimizing the
          targeting and ad copy was crucial to ensuring GDC Consultant&apos;s
          ads appeared in front of the right prospects at the right time.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ChallengesSection;
