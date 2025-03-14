"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const ConsultingIntroductionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation will be activated every time the section is viewed
    threshold: 0.2, // Animation will trigger when 20% of the element is visible
  });

  return (
    <section className="py-12 px-4 md:px-20 bg-gray-100" ref={ref}>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          {/* Section Title */}
          <motion.h2
            className="text-customYellow text-xl md:text-3xl font-bold text-left mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}} // Animate when in view
            transition={{ duration: 0.8 }}
          >
            GDC Digital Solutions - Business Analysis Expertise
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-gray-800 leading-relaxed mb-8 max-w-3xl"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            At GDC Digital Solutions, we recognise that effective business
            analysis is key to achieving successful transformation. Our team of
            highly skilled Business Analysts works as an extension of your
            organisation, delivering actionable insights, optimising processes,
            and driving strategic growth. With a deep understanding of both
            technology and business needs, we ensure that every project we
            support not only meets but exceeds expectations, creating lasting
            value for your business.
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-gray-800 leading-relaxed mb-8 max-w-3xl"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our experts bring extensive experience across a variety of
            industries, including finance, healthcare, retail, and more. We
            specialise in uncovering inefficiencies, mitigating risks, and
            designing solutions that enhance performance, improve service
            delivery, and support long-term business objectives. Whether you are
            undergoing a digital transformation, enhancing operational
            processes, or aligning your IT strategy with business goals, we are
            here to guide you through every phase of your journey.
          </motion.p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/assets/images/business-analysis/business-bg.png" // Replace with the actual image path
              alt="NFC Card Illustration"
              width={500} // Adjust width as needed
              height={400} // Adjust height as needed
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingIntroductionSection;
