import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../motion/motion";
import {headerLogo} from "../assets/images"
import {hamburger} from '../assets/icons';
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <div className="w-[130px] h-[29px] justify-center items-center flex flex-row">
            <a href="">
                <motion.img src={headerLogo} alt="logo" variants={fadeIn('right', 'spring', 0.3, 1.5)} initial="hidden" whileInView="show" />
            </a>
            </div>
            <ul className="flex-1 justify-center items-center max-lg:hidden gap-16 flex">
                {navLinks.map((link, index) => (
                    <motion.li className="bg-white rounded-full" variants={fadeIn('left', 'spring', index*0.5, 0.7)} initial="hidden" whileInView="show" key={link.label} id={link.href}>
                        <a href={link.url}  className="p-2 font-montserrat leading-normal text-lg text-black">{link.label}</a>
                    </motion.li>
                ))}
                
            </ul>
            <div className="hidden max-lg:block">
                <img src={hamburger} alt="menu" width={25} height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav