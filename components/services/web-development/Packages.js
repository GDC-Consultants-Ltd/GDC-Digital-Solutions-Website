import { FaGlobe, FaChartLine, FaCode, FaLaptop } from "react-icons/fa"; // Importing the necessary icons
import { Button } from "@/components/ui/button"; // Assuming you're using shadcn Button
import { GiCheckMark } from "react-icons/gi";
import { motion } from "framer-motion";

export default function Packages() {
  // Package data array
  const packages = [
    {
      title: "One Page Website",
      features: [
        "Single Scrollable Page",
        "Essential SEO Setup",
        "Fully Mobile Responsive Design",
        "Custom Contact Form",
        "1 Revision Round",
        "Choose from: WordPress, HTML/CSS",
      ],
      description:
        "Ideal for small businesses, startups, or personal projects looking for a quick and professional online presence. This package offers a sleek, single-scroll website that captures essential information and is fully optimized for mobile.",
      buttonColor: "bg-yellow-400 hover:bg-gray-400",
      lineColor: "bg-yellow-400", // Top line color for Starter
      icon: <FaLaptop className="w-12 h-12 text-customLightGray m-4" />,
    },
    {
      title: "Starter",
      features: [
        "Up to 5 Pages",
        "Basic SEO Setup",
        "Mobile Responsive",
        "Contact Form",
        "1 Round of Revisions",
        "Standard Template Design",
        "Choose: WordPress, Static HTML/CSS, or Simple PHP",
      ],
      buttonColor: "bg-customYellow hover:bg-customGray",
      lineColor: "bg-customYellow", // Top line color for Starter
      icon: <FaGlobe className="w-12 h-12 text-customLightGray m-4" />, // Globe icon
    },
    {
      title: "Business",
      features: [
        "Up to 10 Pages",
        "Advanced SEO Setup",
        "Mobile Responsive",
        "Blog Integration",
        "Social Media Integration",
        "2 Rounds of Revisions",
        "Basic Analytics Setup",
      ],
      buttonColor: "bg-customGray hover:bg-customLightYellow",
      lineColor: "bg-customGray", // Top line color for Business
      icon: <FaChartLine className="w-12 h-12 text-customLightGray m-4" />, // Chart icon
    },
    {
      title: "Custom",
      features: [
        "Custom Design & Development",
        "Unlimited Pages",
        "Advanced Functionalities",
        "Comprehensive SEO",
        "Ongoing Support & Maintenance",
        "Dedicated Project Manager",
        "Unlimited Revisions During Development",
        "Full Integration with 3rd-Party Services",
      ],
      buttonColor: "bg-customLightYellow hover:bg-customYellow",
      lineColor: "bg-customLightYellow", // Top line color for Custom
      icon: <FaCode className="w-12 h-12 text-customLightGray m-4" />, // Code icon
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-customGray">
            Find the{" "}
            <span className="text-customYellow">Website Development Plan</span>{" "}
            that’s Right for You
          </h2>
          <p className="text-gray-600 mt-4">
            Join the thousands of businesses who trust our website development
            services to grow their online presence.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, staggerChildren: 0.3 }}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg flex flex-col justify-between items-center cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
              }}
            >
              {/* Top Color Line */}
              <div className={`w-full h-2 ${pkg.lineColor} rounded-t-lg`} />

              {/* Icon, Title, and Features Section */}
              <div className="flex flex-col items-center flex-grow">
                {/* Icon */}
                {pkg.icon}

                {/* Package Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {pkg.title}
                </h3>

                {/* Package Features List */}
                <ul className="space-y-2 mb-6 text-left p-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <GiCheckMark className="text-customLightGray mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buy/Contact Button */}
              <div className="w-full p-6">
                <Button
                  className={`w-full py-3 text-white font-bold rounded ${pkg.buttonColor}`}
                >
                  Contact us for pricing
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
