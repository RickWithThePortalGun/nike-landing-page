import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";
import { fadeIn } from "../motion/motion";
const Services = () => {
  return (
    <section className="flex max-container sm:flex-row justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        <motion.div key={index} variants={fadeIn("up", "spring", 0.3*index, 1)}
        whileInView="show"
        initial="hidden">
          <ServiceCard key={service.label} {...service} />
        </motion.div>
      ))}
    </section>
  );
};

export default Services;
