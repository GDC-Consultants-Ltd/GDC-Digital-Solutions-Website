"use client";

import { motion } from "framer-motion";
import {
  FaSearch,
  FaSitemap,
  FaPencilAlt,
  FaLaptopCode,
  FaBug,
  FaRocket,
  FaTools,
  FaArrowRight 
} from "react-icons/fa";

export default function AppProcessFlow() {
  // Steps array for the website-building process
  const steps = [
    {
      icon: <FaSearch className="text-customYellow text-4xl mb-4" />,
      title: "Discovery & Requirements Analysis",
      description:
        "We begin by understanding your business objectives, target users, and technical requirements to create a comprehensive app strategy.",
    },
    {
      icon: <FaPencilAlt className="text-customYellow text-4xl mb-4" />,
      title: "UI Design & Prototyping",
      description:
        "We create visually appealing interfaces and interactive prototypes that align with your brand and enhance usability.",
    },
    {
      icon: <FaLaptopCode className="text-customYellow text-4xl mb-4" />,
      title: "Development & Integration",
      description:
        "We builds your application using modern frameworks, implementing backend systems and third-party integrations.",
    },
    {
      icon: <FaBug className="text-customYellow text-4xl mb-4" />,
      title: "Quality Assurance & Testing",
      description:
        "We conduct thorough testing across multiple devices and platforms to ensure functionality, performance, and security.",
    },
    {
      icon: <FaRocket className="text-customYellow text-4xl mb-4" />,
      title: "Deployment & Launch",
      description:
        "After final approval, we deploy your application to the appropriate platforms and app stores, ensuring a smooth release.",
    },
    {
      icon: <FaTools className="text-customYellow text-4xl mb-4" />,
      title: "Maintenance & Evolution",
      description:
        "We provide ongoing support, monitor performance, and implement updates to keep your application secure and competitive.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-customGray">
            A Snapshot of the Process We Use for Building Websites
          </h2>
          <p className="text-gray-600 mt-4">
            We follow a structured approach to deliver high-quality websites.
          </p>
        </motion.div>

        {/* Process Flow */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-4">
              {/* Step Animation */}
              <motion.div
                className="flex flex-col items-center text-center max-w-xs"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.5, duration: 0.8 }}
              >
                {/* Icon */}
                {step.icon}

                {/* Step Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-gray-600">{step.description}</p>
              </motion.div>

              {/* Arrow Between Steps */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: index * 0.5 + 0.5, duration: 0.5 }}
                >
                  <FaArrowRight className="text-gray-400 text-3xl" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
