"use client";

import { motion } from "framer-motion";
import {
  FaSearch,
  FaPencilAlt,
  FaLaptopCode,
  FaArrowDown,
  FaFileAlt,
  FaBullseye,
  FaPlay,
  FaChartLine,
  FaTools,
  FaChartPie
} from "react-icons/fa"; // Icons for each step

export default function GoogleAdsProcessFlow() {
  // Steps array for the website-building process
  const steps = [
    {
      icon: <FaSearch className="text-customYellow text-4xl mb-4" />,
      title: "Planning & Research",
      description:
        "Defining clear campaign objectives, market research, understanding the target audience, and analyzing competitors.",
    },
    {
      icon: <FaPencilAlt className="text-customYellow text-4xl mb-4" />,
      title: "Keyword Research",
      description:
        "Identifying relevant keywords using tools like Google Keyword Planner and categorizing them into campaigns and ad groups.",
    },
    {
      icon: <FaLaptopCode className="text-customYellow text-4xl mb-4" />,
      title: "Campaign & Ad Group Structure",
      description:
        "Selecting the appropriate campaign type (Search, Display, etc.) and organizing campaigns by objectives or product categories.",
    },
    {
      icon: <FaFileAlt className="text-customYellow text-4xl mb-4" />,
      title: "Ad Creation",
      description:
        "Writing compelling ad copy that includes relevant keywords and clear calls to action, as well as designing visuals for display and video ads.",
    },
    {
      icon: <FaBullseye className="text-customYellow text-4xl mb-4" />,
      title: "Targeting Setup",
      description:
        "Defining audience demographics, geographic regions, and device preferences for ad targeting.",
    },
    {
      icon: <FaPlay className="text-customYellow text-4xl mb-4" />,
      title: "Campaign Launch",
      description:
        "Activating the ads and ensuring all elements, such as ad copy, extensions, and keywords, are properly set up.",
    },
    {
      icon: <FaChartLine className="text-customYellow text-4xl mb-4" />,
      title: "Tracking & Monitoring",
      description:
        "Setting up conversion tracking to measure user actions and monitoring key metrics like CTR, CPC, and conversion rates.",
    },
    {
      icon: <FaTools className="text-customYellow text-4xl mb-4" />,
      title: "Optimization",
      description:
        "Refining bids, targeting, and ad elements based on performance data, such as adjusting for high-converting keywords and improving ad relevance.",
    },
    {
      icon: <FaChartPie className="text-customYellow text-4xl mb-4" />,
      title: "Reporting & Analysis",
      description:
        "Reviewing campaign performance data to assess key metrics such as impressions, clicks, and conversions. This analysis leads to generating regular reports for stakeholders.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-customGray">
            A Snapshot of the Process We Use for Creating Google Ads
          </h2>
          <p className="text-gray-600 mt-4">
            We follow a structured approach to deliver high-quality campaigns.
          </p>
        </motion.div>

        {/* Process Flow Vertical Layout */}
        <div className="flex flex-col space-y-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center max-w-md mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
            >
              {/* Icon */}
              {step.icon}

              {/* Step Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-600">{step.description}</p>
              {/* Arrow Between Steps */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: index * 0.5 + 0.5, duration: 0.5 }}
                >
                  <FaArrowDown className="text-gray-400 text-3xl" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
