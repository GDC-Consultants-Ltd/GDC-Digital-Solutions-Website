import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CaseStudyCard = ({
  heading,
  statistic,
  description,
  buttonLabel,
  imagePath,
  caseStudyPath,
}) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(caseStudyPath); // This path can be different for each service case study
  };

  return (
    <motion.div
      className="py-16 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="container max-w-6xl mx-auto border border-customYellow rounded-xl shadow-xl p-10 flex flex-col md:flex-row items-center md:gap-x-10 relative"
        style={{
          backgroundImage: "url(/assets/images/google-ads-bg.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Content with Width Adjustment */}
        <motion.div
          className="flex-1 md:pr-8 mb-6 md:mb-0 z-10 max-w-md" // Set max width here
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{heading}</h2>
          <p className="text-7xl font-extrabold text-customYellow mb-4">
            {statistic}
          </p>
          <p className="text-lg font-medium text-gray-700 mb-6">
            {description}
          </p>
          <motion.button
            className="text-customYellow hover:text-white border border-customYellow hover:bg-customGray hover:border-none rounded-full px-8 py-3 font-semibold transition duration-300"
            whileHover={{ scale: 1.1 }}
            onClick={handleButtonClick}
          >
            {buttonLabel}
          </motion.button>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={imagePath}
            alt={`${heading} Success Screenshot`}
            width={400}
            height={400}
            className="w-full max-w-[400px] mx-auto transform hover:scale-105 transition duration-300"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CaseStudyCard;
