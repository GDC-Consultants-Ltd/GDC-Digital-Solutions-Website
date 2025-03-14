import React from "react";
import {
  FaMobileAlt,
  FaLock,
  FaLightbulb,
  FaExchangeAlt,
} from "react-icons/fa"; // Importing relevant icons
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Data for NFC card benefits
const benefitsData = [
  {
    icon: <FaMobileAlt className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Convenience",
    description:
      "NFC cards make interactions faster and more efficient. Whether you’re processing transactions, checking in at events, or sharing contact information, NFC technology simplifies the process with effortless taps.",
  },
  {
    icon: <FaLock className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Security",
    description:
      "Our NFC cards are designed with advanced encryption to ensure secure data transfer, protecting both your information and your customers’ privacy.",
  },
  {
    icon: <FaLightbulb className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Innovation",
    description:
      "As NFC technology becomes more prevalent in New Zealand, adopting these smart solutions positions your business as a forward-thinking leader in your industry.",
  },
  {
    icon: <FaExchangeAlt className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Versatility",
    description:
      "From enhancing customer service to offering new digital experiences, NFC cards can be customized to meet a wide range of needs and applications.",
  },
];

export default function NFCBenefits() {
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation will be activated every time the section is viewed
    threshold: 0.2, // Animation will trigger when 20% of the element is visible
  });

  return (
    <section className="py-12" ref={ref}>
      <motion.h2
        className="text-3xl font-bold text-center text-customGray mb-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        {"Why Choose "}
        {[..."NFC Cards".split("")].map((letter, index) =>
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
          {/* Render the benefits */}
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center text-customGray"
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
