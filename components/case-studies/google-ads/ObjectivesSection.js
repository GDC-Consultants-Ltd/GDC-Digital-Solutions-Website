"use client";
import React from "react";
import {
  FaTrafficLight,
  FaUserCheck,
  FaBullseye,
  FaGlobe,
  FaChartLine,
  FaMoneyBillWave,
  FaArrowUp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ObjectivesSection = () => {
  const objectives = [
    {
      icon: <FaTrafficLight size={40} className="text-customGray" />,
      title: "Increase Website Traffic",
      description:
        "Drive more relevant visitors to the GDC website through Google Ads.",
      bgColor: "bg-customYellow",
    },
    {
      icon: <FaUserCheck size={40} className="text-customYellow" />,
      title: "Lead Generation",
      description:
        "Attract qualified leads for their engineering consultancy services.",
      bgColor: "bg-white",
    },
    {
      icon: <FaBullseye size={40} className="text-customGray" />,
      title: "Optimize Cost Efficiency",
      description:
        "Lower the average cost per click (CPC) and cost per acquisition (CPA).",
      bgColor: "bg-customYellow",
    },
    {
      icon: <FaGlobe size={40} className="text-customYellow" />,
      title: "Brand Awareness",
      description:
        "Reach a wider audience with Display Ads to reinforce brand presence in key locations.",
      bgColor: "bg-white",
    },
  ];

  const keyObjectives = [
    {
      icon: <FaChartLine size={40} className="text-customGray" />,
      title: "Increase CTR",
      description:
        "Increase click-through rate (CTR) on search and display campaigns.",
      bgColor: "bg-customYellow",
    },
    {
      icon: <FaMoneyBillWave size={40} className="text-customYellow" />,
      title: "Lower CPC & CPA",
      description:
        "Lower the cost-per-click (CPC) and cost-per-acquisition (CPA).",
      bgColor: "bg-white",
    },
    {
      icon: <FaArrowUp size={40} className="text-customGray" />,
      title: "Improve Conversion Rates",
      description:
        "Improve overall conversion rates by targeting relevant audiences in engineering, construction, and architectural services.",
      bgColor: "bg-customYellow",
    },
  ];

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-12 px-4 md:px-20 bg-gray-100">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section Title */}
        <motion.h2
          className="text-customYellow text-3xl md:text-4xl font-bold text-center mb-10 flex flex-wrap justify-center"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {"OBJECTIVES".split("").map((letter, index) => (
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

        {/* Introduction Paragraph */}
        <motion.p
          className="text-gray-700 mb-10 leading-relaxed max-w-4xl mx-auto"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          GDC Consultants aimed to expand its reach by attracting more potential
          clients to its website through both organic search results and
          targeted Google Ads campaigns. In the fast-paced engineering
          consultancy space, clients often need quick solutions, whether for
          architectural design, civil engineering, or project management.
        </motion.p>

        {/* Objectives Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10"
          variants={containerVariants}
        >
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ${objective.bgColor}`}
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-white p-4 rounded-full mb-4">
                {objective.icon}
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  objective.bgColor === "bg-customYellow"
                    ? "text-white"
                    : "text-customGray"
                }`}
              >
                {objective.title}
              </h3>
              <p
                className={`text-center ${
                  objective.bgColor === "bg-customYellow"
                    ? "text-white"
                    : "text-customGray"
                }`}
              >
                {objective.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Primary Goal */}
        <motion.p
          className="text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The primary goal of GDC Consultant&apos;s Google Ads campaigns was to
          increase website traffic, improve lead generation through search and
          display ads, and ensure that every advertising dollar spent resulted
          in meaningful customer interactions.
        </motion.p>

        {/* Key Objectives Grid */}
        <motion.h2
          className="text-3xl font-bold text-customGray mb-6"
          variants={textVariants}
          transition={{ duration: 0.6 }}
        >
          Key Objectives
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
          variants={containerVariants}
        >
          {keyObjectives.map((keyObj, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ${keyObj.bgColor}`}
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-white p-4 rounded-full mb-4">
                {keyObj.icon}
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  keyObj.bgColor === "bg-customYellow"
                    ? "text-white"
                    : "text-customGray"
                }`}
              >
                {keyObj.title}
              </h3>
              <p
                className={`text-center ${
                  keyObj.bgColor === "bg-customYellow"
                    ? "text-white"
                    : "text-customGray"
                }`}
              >
                {keyObj.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ObjectivesSection;
