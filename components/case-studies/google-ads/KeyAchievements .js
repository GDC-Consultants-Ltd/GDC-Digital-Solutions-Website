"use client";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const KeyAchievements = () => {
  const achievements = [
    {
      value: 21.5,
      unit: "%",
      title: "Increase in AdWords Traffic",
      description:
        "Compared to previous months, AdWords traffic surged due to optimized keywords and better audience targeting.",
    },
    {
      value: 94.4,
      unit: "%",
      title: "Increase in Trackable Website Conversions",
      description:
        '332.75 conversions were achieved, with a conversion rate of 7.89%. Most conversions came from the "Contact" and "Services" sections of the website.',
    },
    {
      value: 47,
      unit: "%",
      title: "Decrease in Cost Per Acquisition (CPA)",
      description:
        "GDC Consultants successfully lowered its CPA by focusing on high-quality leads through search ads.",
    },
    {
      value: 41.8,
      unit: "%",
      title: "Decrease in Average CPC",
      description:
        "With targeted ads, GDC Consultants reduced its CPC, making each dollar spent more efficient.",
    },
    {
      value: 94.4,
      unit: "%",
      title: "Increase in Conversions",
      description:
        "Driven by a well-optimized combination of search and display ads, showing a strong return on investment.",
    },
  ];

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
    <section className="py-10 bg-customYellow">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl text-white md:text-4xl font-bold text-center mb-5"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          KEY ACHIEVEMENTS
        </motion.h2>

        <motion.p
          className="text-customGray mb-6 max-w-2xl mx-auto text-base md:text-lg"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Discover our key performance metrics that highlight the success of our
          strategic campaigns.
        </motion.p>

        {/* Achievements */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-8 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="flex-1 p-6 text-center"
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {/* CountUp Animation */}
                <CountUp
                  start={0}
                  end={achievement.value}
                  duration={2.5}
                  enableScrollSpy={true}
                  scrollSpyOnce={false}
                  scrollSpyDelay={0}
                />
                {achievement.unit}
              </h3>
              <h4 className="text-lg md:text-xl text-white font-semibold mb-4">
                {achievement.title}
              </h4>
              <p className="text-customGray text-sm md:text-base">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyAchievements;
