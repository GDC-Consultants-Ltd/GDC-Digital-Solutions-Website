import { FaBullhorn, FaUsers, FaQuestionCircle } from "react-icons/fa"; // Using react-icons for icons
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Data for the web development benefits
const benefitsData = [
  {
    icon: <FaBullhorn className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "First Impressions Matter",
    description:
      "A professional website establishes credibility and helps build trust from the moment a visitor lands on your page.",
  },
  {
    icon: <FaUsers className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Reach More Customers",
    description:
      "Your website makes you accessible to a larger audience. It’s your digital storefront, attracting visitors whether they’re across the street or across the world.",
  },
  {
    icon: <FaQuestionCircle className="mx-auto mb-4 text-6xl text-customYellow" />,
    title: "Convert Visitors to Customers",
    description:
      "Your website can turn interest into action, providing valuable information and guiding visitors to make purchases, book services, or contact you directly.",
  },
];

export default function WebDevelopmentBenefits() {
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
        {[..."Website Development".split('')].map((letter, index) => ( letter === ' ' ? <span key={index} className="inline-block w-2" /> :
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
