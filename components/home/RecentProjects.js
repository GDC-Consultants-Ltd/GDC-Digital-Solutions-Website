// components/RecentProjects.js
"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion"; // Importing Framer Motion for animations
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function RecentProjects() {
  const projects = [
    {
      title: "Project One",
      description: "Branding & Design",
      image: "/assets/images/project-1.webp",
    },
    {
      title: "Project Two",
      description: "SEO & Marketing",
      image: "/assets/images/project-1.webp",
    },
    {
      title: "Project Three",
      description: "Web Development",
      image: "/assets/images/project-1.webp",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false, // Optionally hide arrows for a cleaner look
  };

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-semibold mb-8">
          Our success stories{" "}
          <span className="text-customYellow">& recent projects</span>
        </h1>
        <Slider {...settings} className="gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      className="relative group overflow-hidden rounded-lg shadow-lg m-2 h-[380px]" // Same size for all cards
      whileHover={{ scale: 1.05 }} // Add a subtle scaling effect on hover
    >
      {/* Background Image */}
      <Image
        src={project.image}
        alt={project.title}
        layout="fill" // This ensures the image fills the container
        objectFit="cover" // Similar to 'object-cover' in CSS
        className="rounded-lg" // Keep your rounded class here
      />
      {/* Overlay Content - Appears on Hover */}
      <motion.div
        className="absolute bottom-4 left-4 right-4 p-4 bg-gradient-to-r from-customYellow to-customLightYellow text-white 
        rounded-tl-[20px] rounded-br-[20px] shadow-lg w-lg h-[200px]" // Same overlay size for all cards
        initial={{ y: 50, opacity: 0 }} // Start below and hidden
        whileHover={{ y: 0, opacity: 1 }} // Animate to visible on hover
        transition={{ duration: 0.4, ease: "easeOut" }} // Smooth transition effect
      >
        <div className="absolute bottom-4 right-4 text-right">
          <h4 className="text-xl font-semibold">{project.title}</h4>
          <p className="text-base">{project.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
