import { FaSearch, FaChartLine, FaCogs, FaLink, FaUsers } from "react-icons/fa"; // Importing relevant icons
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Data for the SEO overview benefits
const seoOverviewData = [
  {
    icon: <FaSearch className="mx-auto mb-4 text-6xl text-customYellow" />, // A search icon to represent keyword research
    title: "In-Depth Keyword Research",
    description:
      "Uncover high-value search terms that align with your business goals. Our strategic research ensures your site targets the right keywords to boost visibility.",
  },
  {
    icon: <FaCogs className="mx-auto mb-4 text-6xl text-customYellow" />, // A settings icon to symbolize on-page optimization
    title: "On-Page Optimization",
    description:
      "Optimize site structure, content, and keywords for better rankings. We enhance your site’s performance to capture search engine attention effectively.",
  },
  {
    icon: <FaChartLine className="mx-auto mb-4 text-6xl text-customYellow" />, // A chart icon for technical SEO improvements
    title: "Technical SEO",
    description:
      "Improve website performance, speed, and mobile optimization to provide a seamless user experience across devices.",
  },
  {
    icon: <FaLink className="mx-auto mb-4 text-6xl text-customYellow" />, // A link icon for off-page SEO strategies
    title: "Off-Page SEO Strategies",
    description:
      "Enhance your domain authority through strategic link building, social signals, and online reputation management.",
  },
  {
    icon: <FaUsers className="mx-auto mb-4 text-6xl text-customYellow" />, // A users icon to represent engagement
    title: "Customer-Centric Engagement",
    description:
      "Ensure improved user experience and engagement with our optimized SEO tactics, leading to higher conversions and ROI.",
  },
];

export default function SeoOverview() {
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation will activate every time the section is viewed
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
        {"Why Choose GDC Digital Solutions for "}
        {[..."SEO".split('')].map((letter, index) => (
          <motion.span
            key={index}
            className="text-customYellow inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.05, delay: index * 0.05 }}
          >
            {letter}
          </motion.span>
        ))}
        {" Services?"}
      </motion.h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dynamically render the SEO overview benefits */}
          {seoOverviewData.map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center text-customGray"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
              transition={{ duration: 0.6, delay: index * 0.2 }} // Stagger animations
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
