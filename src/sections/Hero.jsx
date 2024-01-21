import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import { motion } from "framer-motion";
import {
  staggerContainer,
  textContainer,
} from "../motion/motion";
import { TypingText } from "../motion/CustomTexts";
import { useState } from "react";
const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
    <section
      id="home"
      className="w-full min-h-screen max-container gap-10 flex max-sm:flex-col max-md:flex-col max-lg:flex-col xl:flex-row"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
        <p className="text-xl mt-3 font-montserrat font-montserrat text-black">
          Explore Our Latest Summer Arrivals
        </p>
        <motion.h1
          className=" text-black mt-8 z-10 font-palanquin text-4xl sm:text-8xl max-sm:[72px] max-sm:leading-[82px] font-extrabold"
          variants={textContainer}
          whileInView="show"
          initial="hidden"
        >
          <span className="xl:bg-white rounded-full xl:whitespace-nowrap relative z-10 pr-10">
            Introducing The Latest
          </span>
          <br />
          <span className="text-gradient text-9xl !important inline-block mt-3 font-black">
            Nike&nbsp;{" "}
          </span>
          Releases
        </motion.h1>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="font-montserrat z-10 w-2/5 whitespace-wrap text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"
        >
          <TypingText title="Discover Nike's latest: The Best of Nike" />
        </motion.div>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex justify-center items-center xl:min-h-screen bg-cover bg-center max-sm:border-gray-400 w-full max-sm:rounded-xl bg-hero">
        <img
          className="object-contain relative z-10"
          src={bigShoeImg}
          alt="shoes"
          width={610}
          height={500}
        />
        <div>
          <div className="flex flex-row sm:gap-6 gap-4 absolute -bottom-[10%] w-3/5 max-sm:left-[10%] max-sm:px-6 z-50">
            {shoes.map((shoe) => (
              <div key={shoe}>
                <ShoeCard imgURL={shoe} changeBigShoeImg={(shoe) => {setbigShoeImg(shoe)}} bigShoeImg={bigShoeImg} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
