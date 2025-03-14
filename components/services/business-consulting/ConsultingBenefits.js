import React from "react";
import {
  FaUserTie,
  FaUsers,
  FaTasks,
  FaRoad,
  FaChartLine,
  FaNetworkWired,
  FaSyncAlt,
} from "react-icons/fa"; // Importing unique icons for each benefit
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Data for consulting benefits with unique icons for each
const benefitsData = [
  {
    icon: <FaUserTie className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Bespoke Business Analysis",
    description:
      "We take the time to fully understand your unique business challenges and objectives, ensuring that the solutions we deliver are tailored to drive measurable results.",
  },
  {
    icon: <FaUsers className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Effective Stakeholder Engagement",
    description:
      "We bridge the gap between business and IT teams, facilitating clear communication, alignment, and a shared vision across all stakeholders.",
  },
  {
    icon: <FaTasks className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Process Optimisation",
    description:
      "Through careful analysis of your existing processes, we identify opportunities for optimisation that streamline operations, reduce costs, and enhance productivity.",
  },
  {
    icon: <FaRoad className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Strategic Roadmapping",
    description:
      "Our analysts work alongside your team to develop a strategic roadmap, ensuring alignment of business goals with digital initiatives to keep you ahead in a competitive landscape.",
  },
  {
    icon: <FaChartLine className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Data-Driven Insights",
    description:
      "Leveraging advanced analytics, we empower you to make informed, data-driven decisions that drive growth and improve performance across your organisation.",
  },
  {
    icon: <FaNetworkWired className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Seamless Systems & Technology Integration",
    description:
      "We assist in selecting the right systems and technologies, ensuring they integrate seamlessly with your business processes to guarantee a smooth and effective transformation.",
  },
  {
    icon: <FaSyncAlt className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Continuous Improvement",
    description:
      "Our approach focuses on identifying long-term opportunities for growth and innovation, helping you stay agile in an ever-evolving market.",
  },
];

export default function ConsultingBenefits() {
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation will be activated every time the section is viewed
    threshold: 0.2, // Animation will trigger when 20% of the element is visible
  });

  return (
    <section className="py-12 bg-gray-50" ref={ref}>
      <motion.h2
        className="text-3xl font-bold text-center text-customGray mb-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        {"Why Choose GDC Digital Solutions for "}
        {[..."Consulting & Strategy".split("")].map((letter, index) =>
          letter === " " ? (
            <span key={index} className="inline-block w-2" />
          ) : (
            <motion.span
              key={index}
              className="text-customYellow inline-block"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.05, delay: index * 0.05 }}
            >
              {letter}
            </motion.span>
          )
        )}
      </motion.h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Render the benefits with unique icons */}
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center bg-white p-6 rounded-lg shadow-lg text-customGray hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {benefit.icon}
              <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}