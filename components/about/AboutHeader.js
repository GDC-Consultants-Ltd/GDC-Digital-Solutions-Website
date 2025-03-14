"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutHeader({ isServicesOpen, isAboutOpen }) {
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect on background when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`relative flex flex-col items-center justify-center h-[600px] text-white text-center px-6 transition-all duration-300`}
      style={{
        backgroundPositionY: scrollY * 0.5, // Parallax effect only affects content
      }}
    >
      {/* Only move this section down when dropdown is open */}
      <motion.div
        id="move-down"
        className={`transition-all duration-300 relative z-10 ${
          isServicesOpen || isAboutOpen ? "mt-40" : ""
        }`} // Add margin-top when any dropdown is open
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-5xl font-bold mb-4">Who We Are</h1>
        <p className="text-lg max-w-3xl">
          At GDC Digital Solutions, we are dedicated to empowering businesses
          through innovative digital strategies. Our team of experts specializes
          in offering cutting-edge solutions that enhance communication,
          streamline operations, and drive growth. With over a decade of
          industry experience and a global network of partners, we are committed
          to delivering excellence at every step of the journey.
        </p>
      </motion.div>
    </div>
  );
}
