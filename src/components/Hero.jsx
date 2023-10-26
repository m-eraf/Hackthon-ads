import { joom} from "../assets";
import React from "react";
import { Tilt } from "react-tilt";
import { color, motion } from "framer-motion";
import Button from '@mui/material/Button'; 


import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
    </motion.div>
  </Tilt>
);

const Hero = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className="font-err">IIMT</h2>
        <h2 className="hell">Presents</h2>
        <img width="230" height="230" src={joom} alt='joom' className="kill"/>
        
        
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}>
      <p className="helll">MIND INSTALLERS</p>
      <p className="hellll">HACKTHON 2K23</p>
      <p className="h">EXPLORE.   CREATE.   INNOVATE</p>
      <div className="linkk" >
      <Button  href="https://forms.gle/JfVEDRFuUzeqX73h6" target="_blank" variant="outlined">Register Now</Button>
      </div>
      <div className="linkk" >
      <Button  href="https://drive.google.com/file/d/184pZ45ceUi5eb3F_CZk5ZzJPP2Xac5ky/view?usp=sharing" target="_blank" variant="outlined">Brochure</Button>
      </div>
        
      </motion.p>


     
    </>
  );
};

export default SectionWrapper(Hero, "about");

