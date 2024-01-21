import { offer } from "../assets/images";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../motion/motion";

const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <motion.div variants={fadeIn("up","spring", 0.1, 1)} whileInView="show" initial="hidden" className="flex flex-1 flex-col">
        <h2 className="font-palanquin lg:max-w-lg text-4xl capitalize font-bold">
         <span className="text-gradient">Special </span>Offer
          <br />
        </h2>
        <p className="mt-4 text-slate-gray lg:max-w-lg info-text">
          
        </p>
        <p className="mt-4 info-text lg:max-w-lg">
          Our Dedication to detail and excellence ensures your satifaction
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="View Details" />
        <Button label="Learn More" outline/>
        </div>
      </motion.div>
    </section>
  );
};

export default SpecialOffer;
