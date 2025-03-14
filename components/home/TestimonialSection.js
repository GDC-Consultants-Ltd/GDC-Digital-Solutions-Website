"use client";
import { motion } from "framer-motion"; // Importing framer-motion for animations
import { useInView } from "react-intersection-observer"; // Importing useInView for viewport detection
import Image from "next/image"; // Importing Next.js Image component

export default function TestimonialSection() {
  const services = [
    {
      description: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
    },
    {
      description: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
    },
    {
      description: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
    },
    {
      description: "Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false, // Allows the animation to re-trigger every time it comes into view
    threshold: 0.2, // Defines how much of the section needs to be visible before triggering the animation
  });

  // Define animations for the service cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger the children animations
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-10 bg-white" ref={ref}>
      {/* Attach ref here */}
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="text-5xl font-semibold mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }} // Animate on inView
          transition={{ duration: 1 }}
        >
          Our clients say <span className="text-customYellow">we rock</span>
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"} // Animate on inView
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              description={service.description}
              variants={cardVariants} // Pass the animation variants
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, variants }) {
  return (
    <motion.div
      className="relative group w-full h-64 rounded-lg overflow-hidden shadow-lg bg-gray-50"
      variants={variants}
    >
      {/* Hidden Content - Appears on Hover */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-customLightYellow to-customYellow text-white 
        flex flex-col justify-center items-center p-4 transform transition-transform 
        duration-500 ease-in-out translate-y-full group-hover:translate-y-0"
      >
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm">{description}</p>
      </div>
      {/* Visible Content - Hidden on Hover */}
      <div
        className="absolute inset-0 flex justify-center items-center bg-white transition-transform 
  duration-500 ease-in-out transform group-hover:-translate-y-full"
      >
        <Image
          src="/assets/images/feedback.webp" // Ensure the image path is correct and high-quality
          alt={title}
          width={120} // Set width for the image
          height={120} // Set height for the image
          quality={95} // Adjust quality to 95 for better clarity without excessive size
          layout="intrinsic" // Use 'intrinsic' layout to ensure the image scales appropriately
          className="object-contain max-w-[150px] h-auto" // Removed w-full to avoid stretching
        />
      </div>
    </motion.div>
  );
}
