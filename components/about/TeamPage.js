"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Define the teamMembers array
const teamMembers = [
  {
    image: "/assets/images/team/Danyon-Fernando.webp",
    name: "Danyon Fernando",
    position: "Business Analyst",
    qualifications:
      "Bachelor of Arts with Honours (Criminology) - Victoria University of Wellington",
  },
  {
    image: "/assets/images/team/Vazin-Shareef.webp",
    name: "Vazin Shareef",
    position: "Chief Information Officer",
    qualifications:
      "Bachelor of Commerce (BCom) - Victoria University of Wellington",
  },
  {
    image: "/assets/images/team/Ruwani.webp",
    name: "Ruwani Kokawala",
    position: "Google Ads Specialist/ SEO",
    qualifications:
      "Master of Science Technology Management - Southeast Missouri State University, USA",
  },
  {
    image: "/assets/images/team/Malshi.webp",
    name: "Malshi Kulasinghe",
    position: "Web Developer/ App Development",
    qualifications:
      "Bachelor of Science (Hons) Information Technology & Management - University of Moratuwa, Sri Lanka",
  }
];

const TeamPage = () => {
  // State definitions
  const [activeCoreIndex, setActiveCoreIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState(null);
  const subTeamSliderRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  // Function to scroll the sub-team slider
  const scrollSubTeamSlider = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    subTeamSliderRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
    pauseAutoScroll();
  };

  // Function to auto-scroll the sub-team slider every few seconds
  const autoScrollSubTeamSlider = () => {
    autoScrollIntervalRef.current = setInterval(() => {
      if (!subTeamSliderRef.current) return;

      const maxScrollLeft =
        subTeamSliderRef.current.scrollWidth -
        subTeamSliderRef.current.clientWidth;

      if (subTeamSliderRef.current.scrollLeft >= maxScrollLeft) {
        subTeamSliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        subTeamSliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 5000); // Scroll every 3 seconds
  };

  const pauseAutoScroll = () => {
    clearInterval(autoScrollIntervalRef.current);
    setTimeout(() => {
      autoScrollSubTeamSlider();
    }, 5000); // Restart auto-scroll after 5 seconds of inactivity
  };

  useEffect(() => {
    autoScrollSubTeamSlider();
    return () => {
      clearInterval(autoScrollIntervalRef.current);
    };
  }, []);

  // Prevent double-tap behavior and default action on touch
  useEffect(() => {
    const handleTouchStart = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  const toggleOverlay = (index) => {
    setActiveCoreIndex(activeCoreIndex === index ? null : index);
  };

  const handleTouchEvent = (e, index) => {
    // Prevent the default behavior and stop the event propagation
    e.preventDefault();
    e.stopPropagation();

    // Toggle the overlay when touched
    toggleOverlay(index);
  };

  return (
    <>
      <div className="min-h-screen">
        <header className="pt-8">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-10">
            <h2 className="text-6xl font-bold text-center text-white">
              Our Core Team
            </h2>
          </div>
        </header>

        {/* Core Team Section */}
        <section className="py-8 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-10"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative group overflow-hidden shadow-lg cursor-pointer rounded-xl"
                onMouseEnter={() => toggleOverlay(index)} // For desktop hover
                onMouseLeave={() => toggleOverlay(null)} // For desktop hover leave
                onTouchStart={(e) => handleTouchEvent(e, index)} // For touch devices
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={600}
                  height={600}
                  className="object-cover w-full h-[400px] transition-transform duration-500"
                />
                {/* Text container with overlay, hide on hover */}
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 py-4 px-4 z-10 group-hover:opacity-0 transition-opacity duration-300 h-28 flex flex-col justify-center">
                  <h4 className="text-white text-center text-xl font-semibold">
                    {member.name}
                  </h4>
                  <p className="text-customYellow text-center text-base font-medium">
                    {member.position}
                  </p>
                </div>
                {/* Full overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-customYellow bg-opacity-80 flex items-center justify-center rounded-xl transition-opacity duration-300 ${
                    activeCoreIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="text-white text-center px-4">
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <h5 className="text-lg">{member.position}</h5>
                    <p className="text-sm mt-2">{member.qualifications}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default TeamPage;
