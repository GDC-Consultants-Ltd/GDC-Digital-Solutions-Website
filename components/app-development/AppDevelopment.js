import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaUserCheck, FaChartLine, FaMobileAlt, FaLock, FaSyncAlt } from 'react-icons/fa';

// Data for the web development benefits
const benefitsData = [
  {
    icon: <FaRocket className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Expand Your Reach",
    description:
      "Custom mobile and web applications give your business presence across all devices, reaching customers wherever they are and however they prefer to connect.",
  },
  {
    icon: <FaUserCheck className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Enhanced User Experience",
    description:
      "Purpose-built applications deliver smoother, more intuitive experiences than generic solutions, increasing customer satisfaction and retention rates.",
  },
  {
    icon: <FaChartLine className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Scalable Business Growth",
    description:
      "Custom applications can evolve with your business needs, handling increased traffic and adding new features as your company expands and market demands change.",
  },
  {
    icon: <FaMobileAlt className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Competitive Advantage",
    description:
      "Stand out from competitors with tailored functionality that addresses your specific customer needs and showcases your unique business offerings.",
  },
  {
    icon: <FaLock className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Enhanced Security",
    description:
      "Custom development allows for implementation of robust security measures specifically designed to protect your business data and customer information.",
  },
  {
    icon: <FaSyncAlt className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Seamless Integration",
    description:
      "Connect your app with existing business systems and third-party services to streamline operations and create unified workflows across your organization.",
  },
];

export default function AppDevelopmentBenefits() {
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation will be activated every time the section is viewed
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
        {"Why Choose Our "}
        {[..."App Development".split('')].map((letter, index) => ( letter === ' ' ? <span key={index} className="inline-block w-2" /> :
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
        {" Service"}
      </motion.h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dynamically render the benefits */}
          {benefitsData.map((benefit, index) => (
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
