"use client";

import { motion } from "framer-motion";

const OnePageWebsite = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center py-5 sm:py-10 lg:py-15 rounded-lg overflow-hidden">
      {/* Left Content Section */}
      <motion.div
        className="flex-1 px-20 z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-customYellow mb-4">
          ONE-PAGE WEBSITES
        </h2>
        <p className="text-md font-medium text-gray-800 mb-6 leading-relaxed">
          Simplify your online presence with a visually appealing, fast-loading,
          and user-friendly one-page website. Our expert design team ensures
          that each section of your one-page site tells a compelling story about
          your business, driving engagement and conversions. Ideal for startups,
          events, or product launches, our one-page websites are 100%
          mobile-optimized and SEO-ready to help you effectively reach your
          audience.
        </p>
        <motion.a
          href="#"
          className="inline-block text-customYellow hover:text-white border border-customYellow hover:bg-customGray
                     hover:border-none rounded-full px-6 py-3 font-semibold transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Book Free Consultation
        </motion.a>
      </motion.div>

      {/* Right Background Image Section */}
      <div className="flex-1 relative h-[400px] md:h-[500px] w-full md:w-1/2">
        <div
          className="absolute inset-0 bg-contain bg-right bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/images/website-dev/one-page-site.gif')", // Replace with actual image path
          }}
        ></div>
      </div>
    </section>
  );
};

export default OnePageWebsite;
