"use client";
import React from "react";
import {
  FaBuilding,
  FaWrench,
  FaWater,
  FaBolt,
  FaCogs,
  FaClipboardList,
  FaGlobe,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const ClientOverview = () => {
  // Define services with icons and labels
  const services = [
    {
      icon: <FaBuilding size={24} className="text-customYellow" />,
      label: "Structural Engineering",
    },
    {
      icon: <FaWater size={24} className="text-customYellow" />,
      label: "3 Waters & Contamination",
    },
    {
      icon: <FaCogs size={24} className="text-customYellow" />,
      label: "Geotechnical Engineering",
    },
    {
      icon: <FaBolt size={24} className="text-customYellow" />,
      label: "Seismic Engineering",
    },
    {
      icon: <FaWrench size={24} className="text-customYellow" />,
      label: "Electrical Engineering",
    },
    {
      icon: <FaClipboardList size={24} className="text-customYellow" />,
      label: "Civil Engineering",
    },
    {
      icon: <FaGlobe size={24} className="text-customYellow" />,
      label: "R&D Solutions",
    },
  ];

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="flex flex-col md:flex-row items-start justify-center py-16 px-6 md:px-20">
      {/* Left Side - Services */}
      <motion.div
        className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4 items-start justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center w-32 h-32 border-2 border-customYellow rounded-full shadow-md p-2 mx-auto"
            variants={itemVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-center w-15 h-15">
              {service.icon}
            </div>
            <div className="pb-6">
              <p className="text-center font-semibold text-gray-800 text-sm mt-2">
                {service.label}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Right Side - Overview Details */}
      <motion.div
        className="w-full md:w-1/2 p-4 md:p-8 flex flex-col items-start space-y-4 mt-8 md:mt-0"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-customYellow mb-4">
          CLIENT OVERVIEW
        </h2>
        <p>
          <span className="font-semibold">Company:</span> GDC Consultants Ltd
        </p>
        <p>
          <span className="font-semibold">Industry:</span> Engineering
          Consultancy
        </p>
        <p>
          <span className="font-semibold">Website:</span>{" "}
          <Link
            href="https://www.gdcgroup.co.nz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            www.gdcgroup.co.nz
          </Link>
        </p>
        <p className="text-gray-700 leading-relaxed">
          GDC Consultants is a full-service engineering consultancy offering
          various specialized services across New Zealand. With a need to boost
          their online presence and generate high-quality leads, GDC Consultants
          partnered with its in-house digital marketing team,
          <span className="font-semibold"> GDC Digital Solutions</span>, to
          manage Google Ads campaigns and drive inquiries.
        </p>
      </motion.div>
    </section>
  );
};

export default ClientOverview;
