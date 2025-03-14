"use client";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const KeyAchievements = () => {
  const achievements = [
    {
      title: "Custom Coded Modern Visual Design",
      description:
        "A sleek, professional look with consistent branding that highlighted GDC Consultant’s services and expertise.",
      unit: "Satisfaction", // Example placeholder unit.
    },
    {
      title: "Mobile Optimization",
      description:
        "A responsive design ensures seamless performance across all devices, improving mobile user experience.",
      unit: "Responsiveness",
    },
    {
      title: "Streamlined Navigation",
      description:
        "Improved navigation structure that made it easy for users to explore the site and access important content.",
      unit: "Faster Navigation",
    },
    {
      title: "SEO-Friendly Structure",
      description:
        "Optimized for search engines, helping GDC Consultant improve their online visibility and rank higher in relevant search results.",
      unit: "Increase in Visibility",
    },
    {
      title: "Lead Generation Focus",
      description:
        "Well-placed CTAs drove user engagement and helped convert visitors into leads, supporting business growth.",
      unit: "Increase in Leads",
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
          Discover the key features and elements that highlight the success of our website redesign for GDC Consultants.
        </motion.p>

        {/* Achievements */}
        <motion.div
          className="flex flex-col md:flex-row flex-wrap justify-center gap-8 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="flex-1 p-6 text-center hover:shadow-lg transition duration-300"
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >              
              <h4 className="text-lg md:text-xl text-white font-semibold mb-4">
                {achievement.title}
              </h4>
              <p className="text-gray-700 text-sm md:text-base">
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
