import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import { fadeIn } from "../motion/motion";
import { motion } from "framer-motion";
const SuperQuality = () => {
  return (
    <motion.section
      id="about-us"
      variants={fadeIn("up","spring", 0.1, 1)} whileInView="show" initial="hidden"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div  className="flex flex-1 flex-col">
        <h2 className="font-palanquin lg:max-w-lg text-4xl capitalize font-bold">
          We Provide You
          <span className="text-gradient">&nbsp;Super</span>
          <br />
          <span className="text-gradient">Quality</span>
          &nbsp;Shoes
          <br />
        </h2>
        <p className="mt-4 text-slate-gray lg:max-w-lg info-text">
          Ensuring Premium Comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-4 info-text lg:max-w-lg">
          Our Dedication to detail and excellence ensures your satifaction
        </p>
        <div className="mt-11">
        <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
      <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>
    </motion.section>
  );
};

export default SuperQuality;
