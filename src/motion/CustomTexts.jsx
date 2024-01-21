import { motion } from "framer-motion";
import { textContainer, textVariant, textVariant2 } from "../motion/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`text-[25px] whitespace-wrap text-secondary-white ${textStyles} z-10`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index} className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.p
    variants={textVariant2}
    className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"
  >
    {title}
  </motion.p>
);
