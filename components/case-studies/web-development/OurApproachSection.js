"use client";
import React from "react";
import {
  FaUsers,
  FaGlobe,
  FaDesktop,
  FaChartLine,
  FaComments,
  FaServer, // Added FaServer for a placeholder for HostGator icon
} from "react-icons/fa";
import { motion } from "framer-motion";
import { SiNextdotjs, SiHubspot, SiGithub } from "react-icons/si";

const OurApproachSection = () => {
  const technicalObjectives = [
    {
      icon: <SiNextdotjs size={40} className="text-customGray" />,
      title: "Next.js Framework",
      description:
        "Leveraged Next.js for creating a fast, scalable, and SEO-friendly website with server-side rendering for improved performance and scalability.",
      bgColor: "bg-customYellow",
    },
    {
      icon: <SiHubspot size={40} className="text-customYellow" />,
      title: "HubSpot Integration",
      description:
        "Integrated HubSpot to manage lead capture forms, chatbots, and blog content, supporting CRM integration and enhancing customer engagement.",
      bgColor: "bg-white",
    },
    {
      icon: <FaServer size={40} className="text-customGray" />, // Used FaServer as a placeholder for HostGator
      title: "Reliable Hosting with HostGator",
      description:
        "Used HostGator as the hosting provider to ensure high uptime, secure hosting, and fast load times for all website visitors.",
      bgColor: "bg-customYellow",
    },
    {
      icon: <SiGithub size={40} className="text-customYellow" />,
      title: "Version Control with GitHub",
      description:
        "Employed GitHub for version control and collaborative development to streamline code management and deployment processes.",
      bgColor: "bg-white",
    },
  ];

  // Updated key objectives for Design Overview based on the document
  const designObjectives = [
    {
      icon: <FaUsers size={40} className="text-customGray" />,
      title: "User-Centered Design",
      description:
        "Created a visually appealing website layout that highlights GDC&apos;s core services, expertise, and portfolio in a way that resonates with the target audience.",
      bgColor: "bg-customYellow",
    },
    {
      icon: <FaDesktop size={40} className="text-customYellow" />,
      title: "Responsive Design",
      description:
        "Built a fully responsive website that ensures a consistent and seamless experience across desktops, tablets, and smartphones.",
      bgColor: "bg-white",
    },
    {
      icon: <FaGlobe size={40} className="text-customGray" />,
      title: "SEO Optimization",
      description:
        "Implemented on-page SEO best practices including keyword optimization, meta tags, and image alt texts to boost search engine visibility.",
      bgColor: "bg-customYellow",
    },
    {
      icon: <FaChartLine size={40} className="text-customYellow" />,
      title: "Enhanced Navigation",
      description:
        "Restructured navigation to make the website intuitive and user-friendly, allowing users to easily find the information they need.",
      bgColor: "bg-white",
    },
    {
      icon: <FaComments size={40} className="text-customGray" />,
      title: "Call-to-Action Integration",
      description:
        "Strategically placed CTAs throughout the website to support lead generation by guiding users to make inquiries or contact the client.",
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
        <motion.h2
          className="text-customYellow text-3xl md:text-4xl font-bold text-center mb-10 flex flex-wrap justify-center"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <span className="ml-2 text-customGray">OUR&nbsp;</span>
          {"APPROACH".split("").map((letter, index) => (
            <motion.span
              key={`approach-${index}`}
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
            transition={{ duration: 0.1, delay: "APPROACH".length * 0.1 }}
          >
            &nbsp;
          </motion.span>
        </motion.h2>

        {/* Introduction Paragraph */}
        <motion.p
          className="text-gray-700 mb-10 leading-relaxed max-w-4xl mx-auto"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          GDC Digital Solutions adopted a holistic approach to website design
          and development, focusing on both aesthetics and functionality to
          create a seamless user experience for GDC Consultants. Our goal was to
          enhance the digital presence, improve engagement, and provide a
          user-centered design that highlights GDC&apos;s core services and
          expertise.
        </motion.p>

        {/* Technical Overview Grid */}
        <motion.h2
          className="text-3xl font-bold text-customGray mb-6"
          variants={textVariants}
          transition={{ duration: 0.6 }}
        >
          Technical Overview
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10"
          variants={containerVariants}
        >
          {technicalObjectives.map((objective, index) => (
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

        {/* Design Overview Grid */}
        <motion.h2
          className="text-3xl font-bold text-customGray mb-6"
          variants={textVariants}
          transition={{ duration: 0.6 }}
        >
          Design Overview
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
          variants={containerVariants}
        >
          {designObjectives.map((keyObj, index) => (
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

export default OurApproachSection;
